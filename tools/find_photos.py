"""Find photo candidates on the wider web for items that still show a letter (no photo in tools/photos.json).

Wikipedia and Commons have nothing usable for these, so this asks Bing and DuckDuckGo image search instead.
Writes tools/web-candidates.json ({name: [{src, url, uri}]}) so a person can look through them and copy the
right "url" into tools/photo-list.json. Run by .github/workflows/find-photos.yml.
Note: these images are not checked for licensing; fine for a private game, review before any store release.
"""
import html, json, re, sys, time, urllib.parse
import requests
sys.path.insert(0, "tools")
from fetch_photos import to_uri

S = requests.Session()
S.headers.update({"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
                  "Accept-Language": "en-US,en;q=0.9,ar;q=0.8"})
PER_QUERY = 5


def bing(q):
    r = S.get("https://www.bing.com/images/search", params={"q": q, "form": "HDRSC2", "first": 1}, timeout=30)
    out = []
    for m in re.finditer(r'class="iusc"[^>]*?\sm="([^"]+)"', r.text):
        try:
            d = json.loads(html.unescape(m.group(1)))
        except ValueError:
            continue
        if d.get("murl"):
            out.append(("bing:" + (d.get("purl") or ""), d["murl"]))
    return out


def ddg(q):
    r = S.get("https://duckduckgo.com/", params={"q": q, "iax": "images", "ia": "images"}, timeout=30)
    m = re.search(r"vqd=['\"]?([\d-]+)", r.text)
    if not m:
        return []
    r = S.get("https://duckduckgo.com/i.js", params={"q": q, "vqd": m.group(1), "o": "json", "l": "wt-wt", "f": ",,,,,", "p": "1"},
              headers={"Referer": "https://duckduckgo.com/"}, timeout=30)
    try:
        res = r.json().get("results", [])
    except ValueError:
        return []
    return [("ddg:" + (x.get("url") or ""), x["image"]) for x in res if x.get("image")]


def main():
    items = json.load(open("tools/photo-list.json"))
    have = json.load(open("tools/photos.json"))
    todo = [x for x in items if x["name"] not in have and not x.get("url")]
    out = {}
    for x in todo:
        qs = list(dict.fromkeys(x.get("q", []) + [x["name"] + " " + x.get("hint", "")]))
        found = []
        for q in qs:
            for eng in (bing, ddg):
                try:
                    hits = eng(q)[:PER_QUERY]
                except Exception as e:
                    print("search failed", eng.__name__, q, e)
                    hits = []
                for s, u in hits:
                    if all(u != v for _, v in found):
                        found.append((s, u))
                time.sleep(0.5)
        out[x["name"]] = []
        for s, u in found[:14]:
            try:
                out[x["name"]].append({"src": s, "url": u, "uri": to_uri(u)})
            except Exception as e:
                print("download failed", x["name"], u, e)
        print(x["name"], len(found), "found,", len(out[x["name"]]), "kept")
    json.dump(out, open("tools/web-candidates.json", "w"), ensure_ascii=False, indent=0)


if __name__ == "__main__":
    sys.exit(main())
