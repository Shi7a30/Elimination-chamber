"""Collect logo candidates for brands, apps and shops that have no Wikipedia photo.

Visits each brand's official site (a few guessed domains per item) and saves its og:image, touch icon and a
large favicon as small data URIs in tools/logo-candidates.json ({name: [{src, url, uri}]}) for a person to review.
Run by .github/workflows/find-logos.yml.
"""
import json, os, re, sys
from urllib.parse import urljoin
import requests

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch_photos  # noqa: E402

SITES = {
    "Elmenus": ["elmenus.com"], "Vezeeta": ["vezeeta.com"], "Breadfast": ["breadfast.com"], "MaxAB": ["maxab.io"],
    "Khazna": ["khazna.app"], "Rabbit Mart": ["rabbitmart.com"], "Felfela": ["felfelaegypt.com", "felfela.com"],
    "Buffalo Burger": ["buffaloburger.com"], "Corona": ["coronaegypt.com", "corona-eg.com"],
    "Regina": ["regina-eg.com", "reginapasta.com"], "Panda (Arab Dairy)": ["arabdairy.com"],
    "Dina Farms": ["dinafarms.com"], "Domty": ["domty.org", "domty.com"], "Obour Land": ["obourland.com"],
    "Beyti": ["beyti.com.eg", "beyti-eg.com"], "Seoudi": ["seoudisupermarket.com", "seoudi.com"],
    "Awlad Ragab": ["awladragab.com"], "Metro Market": ["metro-markets.com"], "Hyper One": ["hyperone.com.eg"],
    "Gourmet": ["gourmetegypt.com"], "Kheir Zaman": ["kheirzaman.com"], "Simonds": ["simonds-eg.com", "simonds.com.eg"],
    "El Malky": ["elmalky.com", "elmalky.com.eg"], "Mandarine Koueider": ["koueider.com", "mandarinekoueider.com"],
    "El Abd": ["elabdpatisserie.com", "elabd.com"], "Salé Sucré": ["salesucre.com", "salesucre.com.eg"],
    "Sedra": ["sedrapatisserie.com", "sedra.com.eg"], "TBS": ["tbsegypt.com", "tbs.com.eg"],
    "Abou Shakra": ["aboushakra.com"], "Abou El Sid": ["abouelsid.com"], "Radio Masr": ["radiomasr.net"],
}
HEAD = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36"}
S = requests.Session()
S.headers.update(HEAD)


class Small:
    """fetch_photos.to_uri downloads through fetch_photos.S; give it short timeouts and a size cap."""
    headers = HEAD

    def get(self, url, timeout=None):
        r = S.get(url, timeout=(5, 15), stream=True)
        r._content = r.raw.read(6_000_000, decode_content=True)
        return r


fetch_photos.S = Small()


def links(domain):
    """Image URLs from a site's home page: og:image, touch icons, other icons, then Google's favicon service."""
    found = []
    for base in ("https://" + domain, "https://www." + domain):
        try:
            r = S.get(base, timeout=(5, 15))
        except requests.RequestException:
            continue
        if not r.ok:
            continue
        html = r.text[:400_000]
        for tag in re.findall(r"<(?:meta|link)\b[^>]*>", html, re.I):
            low = tag.lower()
            m = re.search(r'(?:content|href)\s*=\s*["\']([^"\']+)', tag, re.I)
            if not m:
                continue
            if "og:image" in low or "twitter:image" in low:
                found.append(("og", urljoin(r.url, m.group(1))))
            elif "rel=" in low and "icon" in low:
                found.append(("icon", urljoin(r.url, m.group(1))))
        for m in re.findall(r'<img\b[^>]*(?:logo)[^>]*>', html, re.I)[:3]:
            s = re.search(r'src\s*=\s*["\']([^"\']+)', m, re.I)
            if s:
                found.append(("img-logo", urljoin(r.url, s.group(1))))
        break
    found.append(("favicon", "https://www.google.com/s2/favicons?domain=%s&sz=256" % domain))
    return found


def main():
    out = {}
    for name, domains in SITES.items():
        seen, c = set(), []
        for d in domains:
            for kind, url in links(d):
                if url in seen or url.endswith(".svg") or len(c) >= 8:
                    continue
                seen.add(url)
                try:
                    c.append({"src": "%s:%s" % (kind, d), "url": url, "uri": fetch_photos.to_uri(url)})
                except Exception as e:  # noqa: BLE001 - any bad image is just skipped
                    print("  skip", url, type(e).__name__)
        out[name] = c
        print(name, len(c), flush=True)
        json.dump(out, open("tools/logo-candidates.json", "w"), indent=0)


if __name__ == "__main__":
    main()
