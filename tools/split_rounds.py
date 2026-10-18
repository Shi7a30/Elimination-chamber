"""Move the round data (CATS) out of index.html into one file per category in rounds/.
Safe to run again: it also gathers rounds/*.js back in, so the files and index.html always match.
It updates the <script> tags in index.html and the file list in sw.js."""
import json, os, re

s = open("index.html", encoding="utf-8").read()
TAGS = r'(?:<script src="rounds/[^"]+\.js"></script>\n?)*'

# Already split: rebuild the CATS text from the files listed in index.html.
m = re.search(r'var CATS=\[\];\n</script>\n(' + TAGS + r')<script>\n', s)
if m:
    body = []
    for f in re.findall(r'src="(rounds/[^"]+\.js)"', m.group(1)):
        t = open(f, encoding="utf-8").read()
        t = t[t.index("CATS.push(\n") + len("CATS.push(\n"):t.rindex("\n);")]
        body.append(t)
    s = s[:m.start()] + "var CATS=[\n" + ",\n".join(body) + "\n];\n" + s[m.end():]

m = re.search(r'var CATS=\[\n(.*?)\n\];\n', s, re.S)
assert m, "CATS block not found"
block = m.group(1)
starts = [x.start() for x in re.finditer(r'^ ?\{n:"', block, re.M)]
parts = [block[a:b].rstrip().rstrip(",") for a, b in zip(starts, starts[1:] + [len(block)])]
assert block[:starts[0]].strip() == "", "text before the first category"

os.makedirs("rounds", exist_ok=True)
for f in os.listdir("rounds"):
    if f.endswith(".js"):
        os.remove(os.path.join("rounds", f))
files = []
for i, p in enumerate(parts, 1):
    name = re.match(r' ?\{n:"([^"]+)"', p).group(1)
    slug = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    f = f"rounds/{i:02d}-{slug}.js"
    open(f, "w", encoding="utf-8").write(
        f"// {name} rounds. The round format is explained above Rd() in index.html.\n"
        "// Each category file adds itself to CATS; index.html loads them in number order.\nCATS.push(\n" + p + "\n);\n")
    files.append(f)

tags = "".join(f'<script src="{f}"></script>\n' for f in files)
s = s[:m.start()] + "var CATS=[];\n</script>\n" + tags + "<script>\n" + s[m.end():]
open("index.html", "w", encoding="utf-8").write(s)

w = open("sw.js", encoding="utf-8").read()
w, k = re.subn(r"const ROUNDS = \[.*?\];", "const ROUNDS = " + json.dumps(files).replace('"', "'").replace("','", "', '") + ";", w, flags=re.S)
assert k == 1, "ROUNDS list not found in sw.js"
open("sw.js", "w", encoding="utf-8").write(w)
print(len(files), "category files,", sum(os.path.getsize(f) for f in files) // 1024, "KB; page", len(s.encode()) // 1024, "KB")
