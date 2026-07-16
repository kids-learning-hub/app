/* Kids Learning Hub — shared blog / article behaviour
   Each language now lives on its own URL (blog/ = EN, blog/fr|es|ar/ = translations),
   so this script only handles:
   - light/dark theme (inherits the site's preference)
   - AdSense as non-personalized (child-directed / COPPA-safe)
   - remembering the language the visitor picks in the switcher            */
(function(){
  // request non-personalized ads for child-directed content
  (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;

  function initTheme(){
    let th = 'light';
    try{ th = localStorage.getItem('vsm_theme') || (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'); }catch(e){}
    document.documentElement.setAttribute('data-theme', th);
  }

  function initAds(){
    document.querySelectorAll('ins.adsbygoogle').forEach(()=>{
      try{ (adsbygoogle = window.adsbygoogle || []).push({}); }catch(e){}
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    initTheme();
    // remember the visitor's language choice (used by the homepage links)
    document.querySelectorAll('.langsw a[data-l]').forEach(a=>{
      a.addEventListener('click', ()=>{ try{ localStorage.setItem('vsm_lang', a.dataset.l); }catch(e){} });
    });
    // collapse the language row into a dropdown so all languages fit on phones
    const sw = document.querySelector('.langsw');
    if(sw && !sw.classList.contains('dd')){
      sw.classList.add('dd');
      const panel = document.createElement('div');
      panel.className = 'langsw-panel';
      [...sw.children].forEach(el=>panel.appendChild(el));
      const active = panel.querySelector('.active');
      const cur = document.createElement('button');
      cur.type = 'button';
      cur.className = 'langsw-cur';
      cur.textContent = active ? active.textContent : (document.documentElement.lang||'en').toUpperCase();
      cur.addEventListener('click', e=>{ e.stopPropagation(); sw.classList.toggle('open'); });
      sw.appendChild(cur);
      sw.appendChild(panel);
      document.addEventListener('click', e=>{ if(!sw.contains(e.target)) sw.classList.remove('open'); });
    }
  });
  window.addEventListener('load', initAds);
})();
