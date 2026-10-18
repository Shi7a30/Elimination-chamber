"""Write tools/photos.json out as one small image file per photo in photos/img/, plus photos/index.js,
which maps each card name to its file. The game downloads a photo only when a card needs it."""
import base64, hashlib, io, json, os, re
from PIL import Image

ph = json.load(open("tools/photos.json"))
# Re-encode as WebP: same look at card size, about a third smaller.
for k, v in ph.items():
    if v.startswith("data:image/jpeg"):
        b = io.BytesIO()
        Image.open(io.BytesIO(base64.b64decode(v.split(",", 1)[1]))).convert("RGB").save(b, "WEBP", quality=60, method=6)
        ph[k] = "data:image/webp;base64," + base64.b64encode(b.getvalue()).decode()
# Items with no good photo get "" so the game shows a letter instead of guessing on Wikipedia at play time.
for x in json.load(open("tools/photo-list.json")):
    ph.setdefault(x["name"], "")

# Each file is named after a hash of its contents, so two cards with the same picture share one file
# (the game relies on that to keep them off the same board), and a changed photo gets a new name,
# which lets phones keep photos cached for good.
os.makedirs("photos/img", exist_ok=True)
index, keep = {}, set()
for k in sorted(ph):
    v = ph[k]
    if not v:
        index[k] = ""
        continue
    data = base64.b64decode(v.split(",", 1)[1])
    h = hashlib.sha1(data).hexdigest()[:12]
    f = f"photos/img/{h}.webp"
    if not os.path.exists(f):
        open(f, "wb").write(data)
    index[k] = h
    keep.add(h + ".webp")
for f in os.listdir("photos/img"):
    if f not in keep:
        os.remove(os.path.join("photos/img", f))
for i in range(1, 5):  # the old all-in-one photo files
    if os.path.exists(f"photos/p{i}.js"):
        os.remove(f"photos/p{i}.js")

size = sum(os.path.getsize(os.path.join("photos/img", f)) for f in keep)
open("photos/index.js", "w", encoding="utf-8").write(
    "// Card name -> photo file in photos/img/ (written by tools/embed_photos.py; \"\" = no photo, show a letter).\n"
    f"window.PHMB={max(1, round(size / 1048576))};\n"
    "(function(H){var P=window.PH=window.PH||{};for(var k in H)P[k]=H[k]&&\"photos/img/\"+H[k]+\".webp\"})("
    + json.dumps(index, ensure_ascii=False, separators=(",", ":")) + ");\n")

s = open("index.html", encoding="utf-8").read()
s, n = re.subn(r'<script id="photos"></script>(<script (?:defer )?src="photos/[^"]+\.js"></script>)*',
               '<script id="photos"></script><script defer src="photos/index.js"></script>', s)
assert n == 1
open("index.html", "w", encoding="utf-8").write(s)
print(len(index), "cards,", len(keep), "photo files,", size // 1024, "KB in all; index.js", os.path.getsize("photos/index.js") // 1024, "KB")
