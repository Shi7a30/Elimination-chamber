"""Rename game items everywhere their English name is used as a key.

Usage: python tools/rename_items.py renames.tsv   (one "old name<TAB>new name<TAB>new Arabic name (optional)" per line)

Changes the item in rounds/*.js, its entries in the photo tools' JSON files, and renames its sharper Duel photo
(photos/hd/<hk(name)>.webp). Run tools/embed_photos.py afterwards to rewrite photos/index.js.
An item that had no Wikipedia title of its own gets the old name as its title, so photo lookups still find the page.
"""
import glob, json, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from fetch_hd import hk  # noqa: E402

JSON_DICTS = ["tools/photos.json", "tools/photos-report.json", "tools/photo-candidates.json", "tools/poster-candidates.json"]


def js_str(s):
    return json.dumps(s, ensure_ascii=False)


def main(path):
    rows = [l.rstrip("\n").split("\t") for l in open(path, encoding="utf-8") if l.strip()]
    for f in sorted(glob.glob("rounds/*.js")):
        src = open(f, encoding="utf-8").read()
        for r in rows:
            old, new, ar = r[0], r[1], (r[2] if len(r) > 2 else "")
            # an item is ["Name",value,"Arabic"(,"Wikipedia title")]
            pat = re.compile(r'\[' + re.escape(js_str(old)) + r'(,[^,\]]+,)("(?:[^"\\]|\\.)*")(,"(?:[^"\\]|\\.)*")?\]')

            def rep(m):
                title = m.group(3) or "," + js_str(old)
                return "[" + js_str(new) + m.group(1) + (js_str(ar) if ar else m.group(2)) + title + "]"
            src = pat.sub(rep, src)
        open(f, "w", encoding="utf-8").write(src)
    names = {r[0]: r[1] for r in rows}
    pl = json.load(open("tools/photo-list.json", encoding="utf-8"))
    for x in pl:
        if x["name"] in names:
            x["name"] = names[x["name"]]
    json.dump(pl, open("tools/photo-list.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    for f in JSON_DICTS:
        if not os.path.exists(f):
            continue
        d = json.load(open(f, encoding="utf-8"))
        d = {names.get(k, k): v for k, v in d.items()}
        compact = f == "tools/photos.json"
        json.dump(d, open(f, "w", encoding="utf-8"), ensure_ascii=False,
                  **({"separators": (",", ":")} if compact else {"indent": 1}))
    t = "tools/poster-targets.json"
    if os.path.exists(t):
        d = json.load(open(t, encoding="utf-8"))
        for x in d:
            x["name"] = names.get(x["name"], x["name"])
        json.dump(d, open(t, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
    for old, new in names.items():
        a, b = "photos/hd/%s.webp" % hk(old), "photos/hd/%s.webp" % hk(new)
        if os.path.exists(a):
            os.replace(a, b)


if __name__ == "__main__":
    main(sys.argv[1])
