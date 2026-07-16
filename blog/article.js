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
  });
  window.addEventListener('load', initAds);
})();
