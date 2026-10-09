"""Download one photo per game item from Wikipedia and save them as small JPEG data URIs.

Reads tools/photo-list.json ([{name, title, hint}]) and writes tools/photos.json ({name: data URI})
plus tools/photos-report.json ({name: wikipedia page used}) so the picks can be reviewed.
Run by .github/workflows/photos.yml (Wikipedia isn't reachable from every dev environment).
"""
import base64, io, json, sys, time
import requests
from PIL import Image

API = "https://en.wikipedia.org/w/api.php"
S = requests.Session()
S.headers["User-Agent"] = "EliminateTriviaGame/1.0 (https://github.com/shi7a30/elimination-chamber; personal use)"
SIZE = 200
PI = {"prop": "pageimages|pageprops", "ppprop": "disambiguation", "piprop": "thumbnail", "pithumbsize": 400, "pilicense": "any"}


def api(**p):
    p.update(action="query", format="json", formatversion=2)
    for i in range(4):
        r = S.get(API, params=p, timeout=30)
        if r.ok:
            return r.json()
        time.sleep(2 ** i)
    r.raise_for_status()


def ok(p):
    return p and not p.get("missing") and p.get("thumbnail") and "disambiguation" not in (p.get("pageprops") or {})


def by_titles(items):
    d = api(titles="|".join(x["title"] for x in items), redirects=1, **PI)["query"]
    m = {x["from"]: x["to"] for x in d.get("normalized", []) + d.get("redirects", [])}
    pages = {p["title"]: p for p in d.get("pages", [])}
    res = {}
    for x in items:
        t = x["title"]
        t = m.get(m.get(t, t), m.get(t, t))
        if ok(pages.get(t)):
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
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, "white")
        bg.paste(im, mask=im.split()[-1])
        im = bg
    im = im.convert("RGB")
    w, h = im.size
    s = min(w, h)
    left = (w - s) // 2
    top = int((h - s) * 0.15)  # portraits: keep the face near the top
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
        p = pages.get(x["name"]) or by_search(x)
        if not p:
            miss.append(x["name"])
            continue
        try:
            out[x["name"]] = to_uri(p["thumbnail"]["source"])
            report[x["name"]] = p["title"]
        except Exception as e:
            print("failed", x["name"], e)
            miss.append(x["name"])
        time.sleep(0.2)
    json.dump(out, open("tools/photos.json", "w"), ensure_ascii=False, separators=(",", ":"))
    json.dump(report, open("tools/photos-report.json", "w"), ensure_ascii=False, indent=1)
    print(len(out), "photos;", "missing:", miss)


if __name__ == "__main__":
    sys.exit(main())
