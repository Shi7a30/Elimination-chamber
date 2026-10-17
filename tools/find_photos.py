"""Find photo candidates on the wider web for items that still show a letter (no photo in tools/photos.json).

Wikipedia and Commons have nothing usable for these, so this asks Bing and DuckDuckGo image search instead.
Writes tools/web-candidates.json ({name: [{src, url, uri}]}) so a person can look through them and copy the
right "url" into tools/photo-list.json. Run by .github/workflows/find-photos.yml.
Note: these images are not checked for licensing; fine for a private game, review before any store release.
"""
import html, json, re, sys, time, urllib.parse
import requests
sys.path.insert(0, "tools")
import fetch_photos
from fetch_photos import to_uri

S = requests.Session()
S.headers.update({"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
                  "Accept-Language": "en-US,en;q=0.9,ar;q=0.8"})
PER_QUERY = 5
DEADLINE = time.time() + 20 * 60  # stop searching after 20 minutes and save what we have


class Small:
    """requests.get stand-in for to_uri: short timeouts and no huge files, so one slow image can't stall the run."""
    @staticmethod
    def get(url, timeout=None):
        r = S.get(url, timeout=(5, 15), stream=True)
        body = b""
        for chunk in r.iter_content(65536):
            body += chunk
            if len(body) > 6_000_000:
                raise ValueError("image too big")
        r._content = body
        return r


fetch_photos.S = Small


def bing(q):
    r = S.get("https://www.bing.com/images/search", params={"q": q, "form": "HDRSC2", "first": 1}, timeout=(5, 15))
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
    r = S.get("https://duckduckgo.com/", params={"q": q, "iax": "images", "ia": "images"}, timeout=(5, 15))
    m = re.search(r"vqd=['\"]?([\d-]+)", r.text)
    if not m:
        return []
    r = S.get("https://duckduckgo.com/i.js", params={"q": q, "vqd": m.group(1), "o": "json", "l": "wt-wt", "f": ",,,,,", "p": "1"},
              headers={"Referer": "https://duckduckgo.com/"}, timeout=(5, 15))
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
        if time.time() > DEADLINE:
            print("out of time, stopping before", x["name"])
            break
        qs = list(dict.fromkeys(x.get("q", [])[:1] + [x["name"] + " " + x.get("hint", "")]))
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
        for s, u in found[:10]:
            try:
                out[x["name"]].append({"src": s, "url": u, "uri": to_uri(u)})
            except Exception as e:
                print("download failed", x["name"], u, e)
        print(x["name"], len(found), "found,", len(out[x["name"]]), "kept", flush=True)
        json.dump(out, open("tools/web-candidates.json", "w"), ensure_ascii=False, indent=0)


if __name__ == "__main__":
    sys.exit(main())
