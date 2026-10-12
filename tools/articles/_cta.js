/* Shared helpers for article content files: app call-to-action box + byline.
   Usage inside a content file:
     const { cta, meta } = require('./_cta.js');
     ${cta('mathokids', 'One line about the app.')}
     ${meta('en', 10)}                                                       */
const APPS = {
  mathokids:  { name: 'MathoKids',  pkg: 'com.matho.primaire',       color: '#3B82F6' },
  scienkids:  { name: 'ScienKids',  pkg: 'com.vsmedia.scienkids',    color: '#15A34A' },
  codokids:   { name: 'CodoKids',   pkg: 'com.vsmedia.codokids',     color: '#5D4037' },
  geokids:    { name: 'GeoKids',    pkg: 'com.vsmedia.geokids',      color: '#7CB342' },
  englokids:  { name: 'EngloKids',  pkg: 'com.vsmedia.englokids',    color: '#DC2626' },
  francokids: { name: 'FrancoKids', pkg: 'com.vsmedia.francokids',   color: '#2563EB' },
  spanokids:  { name: 'SpanoKids',  pkg: 'com.vsmedia.spanokids',    color: '#F59E0B' },
  arabikids:  { name: 'ArabiKids',  pkg: 'com.vsmedia.arabikids',    color: '#6816AD' },
  germokids:  { name: 'GermoKids',  pkg: 'com.vsmedia.germokids',    color: '#1A1A1A' },
  chinokids:  { name: 'ChinoKids',  pkg: 'com.vsmedia.chinokids',    color: '#DC2626' },
};
const PLAY_SVG = '<svg viewBox="0 0 512 512"><path fill="#34A853" d="M60 12c-5 3-8 9-8 17v454c0 8 3 14 8 17l246-244z"/><path fill="#EA4335" d="M306 256 63 13c1 0 2 0 3 1l312 180-72 62z"/><path fill="#FBBC04" d="M375 194 447 236c18 11 18 30 0 41l-72 42-73-63z"/><path fill="#4285F4" d="M66 499l240-243 69 63L66 500c-1 0-2-1 0-1z"/></svg>';

function cta(id, txt) {
  const a = APPS[id];
  return `
    <div class="appcta">
      <div class="ico" style="background:${a.color}"><img src="../logos/${id}.png" alt="${a.name}"></div>
      <div class="txt"><b>${a.name}</b><p>${txt}</p></div>
      <a class="play" href="https://play.google.com/store/apps/details?id=${a.pkg}" target="_blank" rel="noopener">${PLAY_SVG}<span><span class="g-sub">GET IT ON</span><span class="g-main">Google Play</span></span></a>
    </div>`;
}

const UPDATED = { en: 'Updated October 2026', fr: 'Mis à jour en octobre 2026', es: 'Actualizado en octubre de 2026', ar: 'تحديث أكتوبر 2026' };
function meta(lang, minutes) {
  const who = lang === 'ar' ? 'أيوب الحاجي' : 'Ayyoub EL HAJJI';
  const read = { en: `${minutes} min read`, fr: `${minutes} min de lecture`, es: `${minutes} min de lectura`, ar: `قراءة ${minutes} دقيقة` }[lang];
  return `<div class="meta"><span class="who"><span class="av">AH</span> ${who}</span> · <span>${UPDATED[lang]}</span> · <span>${read}</span></div>`;
}

module.exports = { cta, meta };
