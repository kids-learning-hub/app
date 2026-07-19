/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — analytics
   ═══════════════════════════════════════════════════════════════════════
   ONE place to configure analytics for the whole site. Every page loads
   this file, so changing the ID here changes it everywhere.

   ── TO ACTIVATE ──────────────────────────────────────────────────────
   1. Go to https://analytics.google.com → Admin → Create property
   2. Add a "Web" data stream for kids-learning-hub.cc
   3. Copy the Measurement ID (it looks like G-ABC1234XYZ)
   4. Paste it into GA4_ID below, replacing the empty string
   5. Commit and push — that's it.

   Until an ID is set, this file does nothing at all: no script is loaded,
   no cookie is written, no request is made. It is safe to ship as-is.

   ── WHY THE EXTRA SETTINGS ───────────────────────────────────────────
   This is a child-directed site, so the config below turns OFF the
   advertising features of GA4 (Google Signals, ad personalisation,
   cross-device tracking). This matches how AdSense is already set up
   sitewide (requestNonPersonalizedAds = 1) and keeps the site aligned
   with COPPA / Google Play Families expectations.

   Note: GA4 still writes a first-party analytics cookie (_ga). If you
   want zero cookies and no consent banner, Plausible is the alternative.
   ═══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var GA4_ID = 'G-1SQCD32PMM';

  if (!GA4_ID || GA4_ID.indexOf('G-') !== 0) return;   // not configured → do nothing

  /* Don't record our own visits while developing. */
  var h = location.hostname;
  if (h === 'localhost' || h === '127.0.0.1' || h === '' || h.endsWith('.local')) return;

  /* Respect an explicit Do Not Track signal. */
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());

  /* Deny advertising storage before anything is sent (child-directed site). */
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted'
  });

  gtag('config', GA4_ID, {
    anonymize_ip: true,
    allow_google_signals: false,            // no cross-device / demographic tracking
    allow_ad_personalization_signals: false,
    /* Report the visitor's chosen UI language, since most pages serve
       all four languages from one URL via ?lang= or a /fr/ /es/ /ar/ path. */
    content_language: (function () {
      try {
        var q = new URLSearchParams(location.search).get('lang');
        if (q) return q;
        var seg = location.pathname.split('/').filter(Boolean)[0];
        if (['fr', 'es', 'ar'].indexOf(seg) > -1) return seg;
        var m = location.pathname.match(/\/(fr|es|ar)\//);
        if (m) return m[1];
        return document.documentElement.lang || 'en';
      } catch (e) { return 'en'; }
    })()
  });

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA4_ID);
  document.head.appendChild(s);

  /* ── Custom events worth having ──────────────────────────────────────
     These answer the questions that actually matter for this site:
     which apps get clicked through to Play, and which worksheets get
     printed. Both are invisible to default GA4.                       */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';

    if (href.indexOf('play.google.com') > -1) {
      var pkg = (href.match(/[?&]id=([^&]+)/) || [])[1] || 'unknown';
      gtag('event', 'play_store_click', { app_package: pkg, link_url: href });
    }
  }, true);

  window.addEventListener('beforeprint', function () {
    gtag('event', 'worksheet_print', { page_path: location.pathname });
  });
})();
