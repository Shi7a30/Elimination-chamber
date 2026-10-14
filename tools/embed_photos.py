"""Write tools/photos.json to photos/p1..4.js (each adds to `window.PH`) and link them from index.html."""
import base64, io, json, re
from PIL import Image
ph = json.load(open("tools/photos.json"))
# Re-encode as WebP: same look at card size, about a third smaller, so the page stays light enough to share.
for k, v in ph.items():
    if v.startswith("data:image/jpeg"):
        b = io.BytesIO()
        Image.open(io.BytesIO(base64.b64decode(v.split(",", 1)[1]))).convert("RGB").save(b, "WEBP", quality=60, method=6)
        ph[k] = "data:image/webp;base64," + base64.b64encode(b.getvalue()).decode()
# Items with no good photo get "" so the game shows a letter instead of guessing on Wikipedia at play time.
for x in json.load(open("tools/photo-list.json")):
    ph.setdefault(x["name"], "")
# The photos go in a few separate script files next to index.html, so the page itself stays small
# (a single multi-MB page failed to load for people opening a shared link).
import os
N = 4
keys = list(ph)
os.makedirs("photos", exist_ok=True)
for i in range(N):
    part = {k: ph[k] for k in keys[i::N]}
    open(f"photos/p{i + 1}.js", "w", encoding="utf-8").write(
        "Object.assign(window.PH=window.PH||{}," + json.dumps(part, ensure_ascii=False, separators=(",", ":")) + ");\n")
tags = "".join(f'<script src="photos/p{i + 1}.js"></script>' for i in range(N))
s = open("index.html", encoding="utf-8").read()
s, k = re.subn(r'<script id="photos">.*?</script>(<script src="photos/p\d+\.js"></script>)*', lambda m: '<script id="photos"></script>' + tags, s, flags=re.S)
assert k == 1
open("index.html", "w", encoding="utf-8").write(s)
print(len(ph), "photos in", N, "files,", sum(os.path.getsize(f"photos/p{i + 1}.js") for i in range(N)) // 1024, "KB; page", len(s) // 1024, "KB")
