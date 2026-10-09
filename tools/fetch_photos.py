"""Download one photo per game item from Wikipedia and save them as small JPEG data URIs.

Reads tools/photo-list.json ([{name, title, hint}]) and writes tools/photos.json ({name: data URI})
plus tools/photos-report.json ({name: wikipedia page used}) so the picks can be reviewed.
Run by .github/workflows/photos.yml (Wikipedia isn't reachable from every dev environment).
"""
import base64, io, json, sys, time
import requests
from PIL import Image

API = "https://en.wikipedia.org/w/api.php"
AR_API = "https://ar.wikipedia.org/w/api.php"
WD_API = "https://www.wikidata.org/w/api.php"
COMMONS_API = "https://commons.wikimedia.org/w/api.php"
S = requests.Session()
S.headers["User-Agent"] = "EliminateTriviaGame/1.0 (https://github.com/shi7a30/elimination-chamber; personal use)"
SIZE = 200
PI = {"prop": "pageimages|pageprops", "ppprop": "disambiguation|wikibase_item", "piprop": "thumbnail", "pithumbsize": 400, "pilicense": "any"}


def api(url=API, **p):
    p.setdefault("action", "query")
    p.update(format="json", formatversion=2)
    for i in range(4):
        r = S.get(url, params=p, timeout=30)
        if r.ok:
            return r.json()
        time.sleep(2 ** i)
    r.raise_for_status()


def ok(p):
    return p and not p.get("missing") and p.get("thumbnail") and "disambiguation" not in (p.get("pageprops") or {})


def wd_file(qid, prop):
    """Commons thumbnail URL for a Wikidata item's image (P18) or logo (P154)."""
    if not qid:
        return None
    c = api(WD_API, action="wbgetclaims", entity=qid, property=prop).get("claims", {}).get(prop) or []
    if not c:
        return None
    f = c[0]["mainsnak"].get("datavalue", {}).get("value")
    if not f:
        return None
    d = api(COMMONS_API, titles="File:" + f, prop="imageinfo", iiprop="url", iiurlwidth=400)
    ii = (d.get("query", {}).get("pages") or [{}])[0].get("imageinfo") or []
    return ii and (ii[0].get("thumburl") or ii[0].get("url"))


def ar_page(title):
    if not title:
        return None
    p = (api(AR_API, titles=title, redirects=1, **PI).get("query", {}).get("pages") or [None])[0]
    return p if ok(p) else None


def by_titles(items):
    d = api(titles="|".join(x["title"] for x in items), redirects=1, **PI)["query"]
    m = {x["from"]: x["to"] for x in d.get("normalized", []) + d.get("redirects", [])}
    pages = {p["title"]: p for p in d.get("pages", [])}
    res = {}
    for x in items:
        t = x["title"]
        t = m.get(m.get(t, t), m.get(t, t))
        if pages.get(t) and not pages[t].get("missing"):
            res[x["name"]] = pages[t]
    return res


def by_search(x):
    q = x["name"].replace("'", "") + " " + x["hint"]
    d = api(generator="search", gsrsearch=q, gsrlimit=1, **PI).get("query", {})
    p = (d.get("pages") or [None])[0]
    return p if ok(p) else None


def to_uri(url):
    for i in range(4):
        r = S.get(url, timeout=30)
        if r.ok:
            break
        time.sleep(2 ** i)
    r.raise_for_status()
    im = Image.open(io.BytesIO(r.content))
    graphic = im.format == "PNG" or im.mode in ("RGBA", "LA", "P")
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, "white")
        bg.paste(im, mask=im.split()[-1])
        im = bg
    im = im.convert("RGB")
    w, h = im.size
    if graphic:  # logos and flags: fit the whole thing on white instead of cropping
        im.thumbnail((int(SIZE * 0.86), int(SIZE * 0.86)), Image.LANCZOS)
        bg = Image.new("RGB", (SIZE, SIZE), "#ececec")  # light gray so white flags/logos keep their edges
        bg.paste(im, ((SIZE - im.width) // 2, (SIZE - im.height) // 2))
        im = bg
    else:  # photos and posters: square crop, keeping faces near the top
        s = min(w, h)
        left = (w - s) // 2
        top = int((h - s) * 0.15)
        im = im.crop((left, top, left + s, top + s)).resize((SIZE, SIZE), Image.LANCZOS)
    b = io.BytesIO()
    im.save(b, "JPEG", quality=72, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(b.getvalue()).decode()


def main():
    items = json.load(open("tools/photo-list.json"))
    pages = {}
    for i in range(0, len(items), 40):
        pages.update(by_titles(items[i:i + 40]))
    out, report, miss = {}, {}, []
    for x in items:
        p = pages.get(x["name"])
        qid = p and (p.get("pageprops") or {}).get("wikibase_item")
        # Order: logo for companies/apps, the article's lead image, Wikidata logo/image, Arabic Wikipedia, search.
        url = src = None
        try:
            if x.get("logo"):
                url, src = wd_file(qid, "P154"), "wikidata logo"
            if not url and ok(p):
                url, src = p["thumbnail"]["source"], p["title"]
            for prop in ("P154", "P18"):
                if not url:
                    url, src = wd_file(qid, prop), "wikidata " + prop
            if not url:
                a = ar_page(x.get("ar"))
                url, src = (a["thumbnail"]["source"], "ar:" + a["title"]) if a else (None, None)
            if not url:
                q = by_search(x)
                url, src = (q["thumbnail"]["source"], "search:" + q["title"]) if q else (None, None)
        except Exception as e:
            print("lookup failed", x["name"], e)
        if not url:
            miss.append(x["name"])
            continue
        try:
            out[x["name"]] = to_uri(url)
            report[x["name"]] = src
        except Exception as e:
            print("failed", x["name"], e)
            miss.append(x["name"])
        time.sleep(0.2)
    json.dump(out, open("tools/photos.json", "w"), ensure_ascii=False, separators=(",", ":"))
    json.dump(report, open("tools/photos-report.json", "w"), ensure_ascii=False, indent=1)
    print(len(out), "photos;", "missing:", miss)


if __name__ == "__main__":
    sys.exit(main())
