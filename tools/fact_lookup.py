"""Look up checkable dates for round items on Wikipedia/Wikidata, so new rounds can be checked against a source.

Reads tools/fact-lookup.json ([{name, title?, hint?}]) and writes tools/fact-lookup-out.json
({name: {page, qid, desc, ar, born, died, founded, released, opened, start, search}}), years only.
Run by .github/workflows/fact-lookup.yml (Wikipedia isn't reachable from every dev environment).
"""
import json, time
import requests

API = "https://en.wikipedia.org/w/api.php"
WD = "https://www.wikidata.org/w/api.php"
S = requests.Session()
S.headers["User-Agent"] = "EliminateTriviaGame/1.0 (https://github.com/shi7a30/elimination-chamber; personal use)"
PROPS = {"born": "P569", "died": "P570", "founded": "P571", "released": "P577", "opened": "P1619",
         "start": "P580", "first_shown": "P1191", "service": "P729"}


def api(url=API, **p):
    p.setdefault("action", "query")
    p.update(format="json", formatversion=2)
    for i in range(6):
        time.sleep(0.5)
        r = S.get(url, params=p, timeout=30)
        if r.ok:
            return r.json()
        time.sleep(int(r.headers.get("Retry-After") or 0) or 5 * 2 ** i)
    r.raise_for_status()


def page(title):
    d = api(titles=title, redirects=1, prop="pageprops|description", ppprop="wikibase_item|disambiguation")
    p = (d.get("query", {}).get("pages") or [{}])[0]
    if p.get("missing") or "disambiguation" in (p.get("pageprops") or {}):
        return None
    return p


def years(claims, prop):
    out = []
    for c in claims.get(prop, []):
        v = c["mainsnak"].get("datavalue", {}).get("value")
        if isinstance(v, dict) and v.get("time"):
            out.append(int(v["time"][1:5]) * (-1 if v["time"][0] == "-" else 1))
    return sorted(set(out))


res = {}
def look(x):
    r = {}
    p = page(x.get("title") or x["name"])
    if not p:
        q = x["name"] + " " + x.get("hint", "")
        hits = api(list="search", srsearch=q, srlimit=3).get("query", {}).get("search", [])
        r["search"] = [h["title"] for h in hits]
        if hits:
            p = page(hits[0]["title"])
    if p:
        r["page"] = p["title"]
        r["desc"] = p.get("description", "")
        qid = (p.get("pageprops") or {}).get("wikibase_item")
        r["qid"] = qid
        if qid:
            e = api(WD, action="wbgetentities", ids=qid, props="claims|sitelinks|labels", languages="ar")["entities"][qid]
            for k, prop in PROPS.items():
                y = years(e.get("claims", {}), prop)
                if y:
                    r[k] = y
            r["ar"] = (e.get("sitelinks", {}).get("arwiki") or {}).get("title") or (e.get("labels", {}).get("ar") or {}).get("value")
    return r


for x in json.load(open("tools/fact-lookup.json", encoding="utf-8")):
    try:
        res[x["name"]] = look(x)
    except Exception as e:  # keep going; one bad item shouldn't lose the rest
        res[x["name"]] = {"error": str(e)[:200]}
    print(x["name"], res[x["name"]], flush=True)

json.dump(res, open("tools/fact-lookup-out.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
