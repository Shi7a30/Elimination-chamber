"""Download a sharper (400 px) copy of each game photo for Duel, where cards are shown large.

Uses the same source as the small built-in photo (tools/photos-report.json says which page or file it came from),
and keeps the new copy only if it looks like the small one, so Duel never shows a different picture.
Writes photos/hd/<key>.webp, where <key> is the game's hk(name) hash. The game loads these one at a time,
only in Duel, and falls back to the built-in photo when one is missing or the phone is offline.
Run by .github/workflows/photos-hd.yml (Wikipedia isn't reachable from every dev environment).
"""
import base64, io, json, os, sys, time
from PIL import Image, ImageChops, ImageStat
import fetch_photos as F

HD = 400
OUT = "photos/hd"


def hk(s):
    """Same as hk() in index.html: FNV-1a over UTF-16 code units, base 36."""
    h = 2166136261
    b = s.encode("utf-16-le")
    for i in range(0, len(b), 2):
        h ^= b[i] | (b[i + 1] << 8)
        h = (h * 16777619) & 0xFFFFFFFF
    d, out = "0123456789abcdefghijklmnopqrstuvwxyz", ""
    while True:
        h, r = divmod(h, 36)
        out = d[r] + out
        if not h:
            return out


def page_thumb(api_url, title):
    p = (F.api(api_url, titles=title, redirects=1, prop="pageimages|pageprops", ppprop="wikibase_item",
               piprop="thumbnail", pithumbsize=700, pilicense="any").get("query", {}).get("pages") or [None])[0]
    return p


def commons(qid, prop):
    if not qid:
        return None
    c = F.api(F.WD_API, action="wbgetclaims", entity=qid, property=prop).get("claims", {}).get(prop) or []
    f = c and c[0]["mainsnak"].get("datavalue", {}).get("value")
    if not f:
        return None
    d = F.api(F.COMMONS_API, titles="File:" + f, prop="imageinfo", iiprop="url", iiurlwidth=700)
    ii = (d.get("query", {}).get("pages") or [{}])[0].get("imageinfo") or []
    return ii and (ii[0].get("thumburl") or ii[0].get("url"))


def source(x, src):
    if src == "url":
        return x.get("url")
    if src.startswith("wikidata "):
        p = page_thumb(F.API, x["title"])
        qid = p and (p.get("pageprops") or {}).get("wikibase_item")
        return commons(qid, "P154" if src in ("wikidata logo", "wikidata P154") else "P18")
    if src.startswith("ar:"):
        p = page_thumb(F.AR_API, src[3:])
    else:
        p = page_thumb(F.API, src.split(":", 1)[1] if src.startswith("search:") else src)
    return p and p.get("thumbnail", {}).get("source")


def square(raw, size, fit=False):
    """The same crop as fetch_photos.to_uri, at any size."""
    im = Image.open(io.BytesIO(raw))
    graphic = fit or im.format == "PNG" or im.mode in ("RGBA", "LA", "P")
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        bg = Image.new("RGB", im.size, "white")
        bg.paste(im, mask=im.split()[-1])
        im = bg
    im = im.convert("RGB")
    w, h = im.size
    if graphic:
        im.thumbnail((int(size * 0.86), int(size * 0.86)), Image.LANCZOS)
        bg = Image.new("RGB", (size, size), "#ececec")
        bg.paste(im, ((size - im.width) // 2, (size - im.height) // 2))
        return bg
    s = min(w, h)
    left, top = (w - s) // 2, int((h - s) * 0.15)
    return im.crop((left, top, left + s, top + s)).resize((size, size), Image.LANCZOS)


def diff(a, b):
    a, b = a.convert("L").resize((32, 32)), b.convert("L").resize((32, 32))
    return ImageStat.Stat(ImageChops.difference(a, b)).mean[0]


def main():
    items = {x["name"]: x for x in json.load(open("tools/photo-list.json"))}
    small = json.load(open("tools/photos.json"))
    report = json.load(open("tools/photos-report.json"))
    os.makedirs(OUT, exist_ok=True)
    made = kept = 0
    skipped = []
    for name, uri in small.items():
        path = f"{OUT}/{hk(name)}.webp"
        if os.path.exists(path) and not os.environ.get("FETCH_ALL"):
            # keep it unless the built-in photo has since changed to a different picture
            small_im = Image.open(io.BytesIO(base64.b64decode(uri.split(",", 1)[1])))
            if diff(Image.open(path), small_im) <= 18:
                kept += 1
                continue
            os.remove(path)
        x, src = items.get(name), report.get(name, "")
        if not x or not src or src == "previous run":
            skipped.append((name, "no source"))
            continue
        try:
            url = source(x, src)
            if not url:
                skipped.append((name, "no image"))
                continue
            r = F.S.get(url, timeout=30)
            r.raise_for_status()
            big = square(r.content, HD, x.get("fit"))
            old = Image.open(io.BytesIO(base64.b64decode(uri.split(",", 1)[1])))
            d = diff(big, old)
            if d > 18:  # a different picture than the built-in one: don't use it
                skipped.append((name, "differs %.0f" % d))
                continue
            big.save(path, "WEBP", quality=72, method=6)
            made += 1
        except Exception as e:
            skipped.append((name, str(e)[:80]))
        time.sleep(0.15)
    print(made, "new HD photos,", kept, "already there,", len(skipped), "skipped")
    for s in skipped:
        print("skipped", *s)


if __name__ == "__main__":
    sys.path.insert(0, os.path.dirname(__file__))
    sys.exit(main())
