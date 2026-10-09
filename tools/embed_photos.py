"""Embed tools/photos.json into index.html as `var PH={...}` so photos work offline and in any viewer."""
import json, re
ph = json.load(open("tools/photos.json"))
# Items with no good photo get "" so the game shows a letter instead of guessing on Wikipedia at play time.
for x in json.load(open("tools/photo-list.json")):
    ph.setdefault(x["name"], "")
s = open("index.html", encoding="utf-8").read()
s, k = re.subn(r'<script id="photos">.*?</script>', lambda m: '<script id="photos">var PH=' + json.dumps(ph, ensure_ascii=False, separators=(",", ":")) + ";</script>", s, flags=re.S)
assert k == 1
open("index.html", "w", encoding="utf-8").write(s)
print(len(ph), "photos embedded,", len(s) // 1024, "KB")
