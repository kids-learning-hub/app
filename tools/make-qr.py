"""Kids Learning Hub — one QR code per app (apps/qr/<slug>.svg).

Each code opens the app's Google Play page. The URL is kept short (no
tracking parameters) so the code stays coarse and scans easily even small.

Usage (from apps-site/):  python tools/make-qr.py
Needs: pip install segno.  Re-run when an app is added to tools/apps-data.js.
"""
import json
import os
import subprocess

import segno

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'apps', 'qr')

apps = json.loads(subprocess.check_output(
    ['node', '-e', "const A=require('./tools/apps-data.js');"
                   "console.log(JSON.stringify((A.APPS||A).map(a=>({slug:a.slug,pkg:a.pkg}))))"],
    cwd=ROOT))

os.makedirs(OUT, exist_ok=True)
for a in apps:
    url = 'https://play.google.com/store/apps/details?id=' + a['pkg']
    qr = segno.make(url, error='m')
    path = os.path.join(OUT, a['slug'] + '.svg')
    qr.save(path, kind='svg', scale=4, border=2, dark='#16213E', light='#FFFFFF',
            title=a['slug'] + ' on Google Play', xmldecl=False, svgns=True, omitsize=True)
    print('wrote', os.path.relpath(path, ROOT), '· version', qr.version)
