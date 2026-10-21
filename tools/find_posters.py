"""Collect picture candidates for cards that show a letter or the wrong picture (e.g. an actor instead of the poster).

Reads tools/poster-targets.json ([{name, kind, title, ar, hint, pages?}]) and writes tools/poster-candidates.json
({name: [{src, url, uri}]}) for a person to review. Nothing here is used by the game until a picked URL is saved
as "url" in tools/photo-list.json.

Sources, by kind:
- work (films, series, plays): the elCinema and IMDb pages Wikidata links to, then IMDb's title search
- person: the elCinema and IMDb person pages Wikidata links to, then IMDb's name search
- song: album covers from the iTunes and Deezer search APIs
- app / other (brands, shops): the App Store icon of the brand's own app
- album: album covers from iTunes and Deezer
- club: the badge from TheSportsDB; person: TheSportsDB player photo and the Deezer artist picture
- "web" (list of search phrases, any kind): the top hits of a Bing image search
- every kind: the Wikipedia/Wikidata/Commons candidates fetch_photos already knows, and any "pages" listed by hand
  (the page's og:image is used).
A target with "more": true is searched again with only the web, Deezer artist and TheSportsDB sources, and
pictures an earlier run already offered are left out, so a second look shows only new options.
Run by .github/workflows/find-posters.yml (these sites aren't reachable from every dev environment).
"""
import json, os, re, sys, time
from urllib.parse import quote, urljoin
import requests

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch_photos as F  # noqa: E402

HEAD = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9,ar;q=0.8"}
S = requests.Session()
S.headers.update(HEAD)
OUT = "tools/poster-candidates.json"
WIKI_UA = "EliminateTriviaGame/1.0 (https://github.com/shi7a30/elimination-chamber; personal use)"


class Small:
    """F.to_uri downloads through F.S; give it a browser user agent, short timeouts and a size cap."""
    headers = HEAD

    def get(self, url, timeout=None, **kw):
        # Wikimedia asks bots to name themselves and throttles generic browser user agents
        h = {"User-Agent": WIKI_UA} if "wiki" in url.split("/")[2] else None
        r = S.get(url, timeout=(5, 20), stream=True, headers=h, **kw)
        r._content = r.raw.read(8_000_000, decode_content=True)
        return r


def get(url, **kw):
    try:
        r = S.get(url, timeout=(5, 20), **kw)
        return r if r.ok else None
    except requests.RequestException as e:
        print("  get failed", url, type(e).__name__)
        return None


def og_image(page):
    r = get(page)
    if not r:
        return []
    out = []
    for tag in re.findall(r"<meta\b[^>]*>", r.text[:600_000], re.I):
        if re.search(r'(og:image|twitter:image)["\']', tag, re.I):
            m = re.search(r'content\s*=\s*["\']([^"\']+)', tag, re.I)
            if m:
                out.append(urljoin(r.url, m.group(1).replace("&amp;", "&")))
    return list(dict.fromkeys(out))


def bigger(url):
    """Ask image hosts for a larger copy than the thumbnail a page advertises."""
    if "elcinema.com/uploads/_" in url:
        return [re.sub(r"/uploads/_[0-9x]+_", "/uploads/_640x_", url), url]
    if "media-amazon.com" in url and "._V1_" in url:
        return [re.sub(r"\._V1_.*(\.\w+)$", r"._V1_SX600\1", url), url]
    return [url]


def claims(qid):
    if not qid:
        return {}
    d = F.api(F.WD_API, action="wbgetclaims", entity=qid)
    out = {}
    for prop in ("P345", "P3135", "P3136"):  # IMDb ID, elCinema film ID, elCinema person ID
        for c in d.get("claims", {}).get(prop, []):
            v = c["mainsnak"].get("datavalue", {}).get("value")
            if v:
                out.setdefault(prop, []).append(v)
    return out


def qids(t):
    found = []
    for api, title in ((F.API, t.get("title")), (F.AR_API, t.get("ar"))):
        if not title:
            continue
        p = (F.api(api, titles=title, redirects=1, prop="pageprops", ppprop="wikibase_item")
             .get("query", {}).get("pages") or [None])[0]
        q = p and (p.get("pageprops") or {}).get("wikibase_item")
        if q and q not in found:
            found.append(q)
    return found


def imdb_suggest(q):
    """IMDb's public search-as-you-type feed: [(label, image url)]."""
    q = q.strip().lower()
    if not q:
        return []
    r = get("https://v3.sg.media-imdb.com/suggestion/x/%s.json?includeVideos=0" % quote(q))
    if not r:
        return []
    out = []
    for d in (r.json().get("d") or [])[:4]:
        img = (d.get("i") or {}).get("imageUrl")
        if img:
            out.append(("imdb %s %s %s" % (d.get("id"), d.get("l"), d.get("y", "")), img))
    return out


def itunes(term, entity, country="eg"):
    r = get("https://itunes.apple.com/search", params={"term": term, "entity": entity, "country": country, "limit": 4})
    if not r:
        return []
    out = []
    for d in r.json().get("results", []):
        img = d.get("artworkUrl512") or d.get("artworkUrl100")
        if img:
            img = re.sub(r"/\d+x\d+bb\.", "/600x600bb.", img)
            out.append(("itunes %s: %s" % (entity, d.get("trackName") or d.get("collectionName")), img))
    return out


def deezer(term):
    r = get("https://api.deezer.com/search", params={"q": term, "limit": 4})
    if not r:
        return []
    return [("deezer: %s - %s" % (d.get("title"), (d.get("artist") or {}).get("name")), d["album"]["cover_xl"])
            for d in r.json().get("data", []) if (d.get("album") or {}).get("cover_xl")]


def deezer_album(term):
    r = get("https://api.deezer.com/search/album", params={"q": term, "limit": 4})
    if not r:
        return []
    return [("deezer album: %s - %s" % (d.get("title"), (d.get("artist") or {}).get("name")), d["cover_xl"])
            for d in r.json().get("data", []) if d.get("cover_xl")]


def deezer_artist(term):
    r = get("https://api.deezer.com/search/artist", params={"q": term, "limit": 3})
    if not r:
        return []
    return [("deezer artist: %s" % d.get("name"), d["picture_xl"]) for d in r.json().get("data", [])
            if d.get("picture_xl") and "/artist//" not in d["picture_xl"]]


def sportsdb(term, what):
    if what == "club":
        r = get("https://www.thesportsdb.com/api/v1/json/3/searchteams.php", params={"t": term})
        rows = (r.json().get("teams") or []) if r else []
        return [("sportsdb team: %s" % d.get("strTeam"), d.get("strBadge") or d.get("strTeamBadge")) for d in rows[:3]]
    r = get("https://www.thesportsdb.com/api/v1/json/3/searchplayers.php", params={"p": term})
    rows = (r.json().get("player") or []) if r else []
    return [("sportsdb player: %s (%s)" % (d.get("strPlayer"), d.get("strNationality")), d.get("strThumb") or d.get("strCutout"))
            for d in rows[:3]]


def web(q, n=6):
    """Top results of a Bing image search: [(label, full-size image url)]."""
    r = get("https://www.bing.com/images/search", params={"q": q, "form": "HDRSC2", "first": 1, "setlang": "en"})
    if not r:
        return []
    out = []
    for m in re.findall(r'murl&quot;:&quot;(.*?)&quot;', r.text):
        if m.lower().split("?")[0].endswith((".jpg", ".jpeg", ".png", ".webp")) and m not in [u for _, u in out]:
            out.append(("web: " + q, m))
        if len(out) >= n:
            break
    return out


def more_sources(t):
    c = []
    for q in t.get("web", []):
        c += web(q)
    k = t["kind"]
    if k in ("person", "club"):
        for term in [t.get("title") or t["name"]] + t.get("sportsdb", []):
            c += sportsdb(term, k)
    if k == "person" and t.get("singer"):
        c += deezer_artist(t.get("title") or t["name"]) + deezer_artist(t.get("ar", ""))
    if k == "album":
        for term in [t["name"] + " " + t.get("artist", ""), t.get("ar", "") + " " + t.get("artist_ar", "")]:
            c += itunes(term.strip(), "album") + deezer_album(term.strip())
    if k == "song":
        for term in [t["name"] + " " + t.get("artist", ""), t.get("ar", "") + " " + t.get("artist_ar", "")]:
            c += itunes(term.strip(), "song") + deezer(term.strip())
    return c


def sources(t):
    if t.get("more"):
        return more_sources(t)
    c = []

    def add(src, url):
        if url and all(u != url for _, u in c):
            c.append((src, url))

    for page in t.get("pages", []):
        for u in og_image(page):
            add("page " + page, u)
    k = t["kind"]
    if k in ("work", "person"):
        try:
            found = qids(t)
        except Exception as e:  # noqa: BLE001 - Wikipedia busy: still try IMDb below
            print("  wikidata failed", t["name"], e)
            found = []
        for q in found:
            cl = claims(q)
            for e in cl.get("P3135", []):
                for u in og_image("https://elcinema.com/en/work/%s/" % e):
                    add("elcinema work %s" % e, u)
            for e in cl.get("P3136", []):
                for u in og_image("https://elcinema.com/en/person/%s/" % e):
                    add("elcinema person %s" % e, u)
            for e in cl.get("P345", []):
                for src, u in imdb_suggest(e):
                    add(src, u)
        for q in [t["name"]] + t.get("q", []):
            for src, u in imdb_suggest(re.sub(r"[^\w\s]", " ", q)):
                add(src, u)
    for src, u in more_sources(t):
        add(src, u)
    if k == "song":
        for term in [t["name"] + " " + t.get("artist", ""), t.get("ar", "")]:
            for src, u in itunes(term.strip(), "song") + deezer(term.strip()):
                add(src, u)
    if k in ("app", "other"):
        for term in [t["name"], t.get("ar", "")]:
            for src, u in itunes(term, "software"):
                add(src, u)
    if t.get("pages"):  # a page picked by hand already says where the poster is
        return c
    try:  # the Wikipedia, Wikidata and Commons candidates, after the better sources above
        x = dict(t, q=t.get("q", []), ar_hint="")
        p = F.by_titles([x]).get(t["name"])
        for src, u in F.candidates(x, p)[:6]:
            add(src, u)
    except Exception as e:  # noqa: BLE001
        print("  wiki candidates failed", t["name"], e)
    return c


def main():
    F.S = Small()
    targets = json.load(open("tools/poster-targets.json"))
    out, stop = {}, time.time() + 50 * 60
    try:  # keep what earlier runs found; a target with "redo" is searched again
        out = json.load(open(OUT))
    except (OSError, ValueError):
        pass
    for t in targets:
        if t["name"] in out and not t.get("redo") and not t.get("more"):
            continue
        if time.time() > stop:
            print("out of time before", t["name"])
            break
        cands = []
        seen = {c["url"] for c in out.get(t["name"], [])} if t.get("more") else set()
        try:
            found = [(src, u) for src, u in sources(t) if u and u not in seen]
        except Exception as e:  # noqa: BLE001
            print("sources failed", t["name"], e)
            found = []
        for src, url in found[:20]:
            for u in bigger(url):
                try:
                    cands.append({"src": src, "url": u, "uri": F.to_uri(u)})
                    break
                except Exception as e:  # noqa: BLE001 - any bad image is just skipped
                    print("  skip", u, type(e).__name__)
        out[t["name"]] = cands
        print(t["name"], len(cands), flush=True)
        time.sleep(1)
        json.dump(out, open(OUT, "w"), ensure_ascii=False, indent=0)


if __name__ == "__main__":
    main()
