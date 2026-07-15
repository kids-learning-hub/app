/* Kids Learning Hub — shared behaviour for the free online games (play/)
   - light/dark theme (same key as the rest of the site)
   - UI language from ?lang= or the visitor's saved choice (vsm_lang)
   - AdSense as non-personalized (child-directed / COPPA-safe)            */
(function(){
  (window.adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;

  const PLAY = {};
  let onLang = null, lang = 'en';

  PLAY.init = function(cb){
    onLang = cb;
    let th = 'light';
    try{ th = localStorage.getItem('vsm_theme') || (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'); }catch(e){}
    document.documentElement.setAttribute('data-theme', th);

    const p = new URLSearchParams(location.search).get('lang');
    let saved = null; try{ saved = localStorage.getItem('vsm_lang'); }catch(e){}
    setLang(['en','fr','es','ar'].includes(p) ? p : (['en','fr','es','ar'].includes(saved) ? saved : 'en'));

    document.querySelectorAll('.langsw button').forEach(b=>{
      b.addEventListener('click', ()=>{ try{ localStorage.setItem('vsm_lang', b.dataset.l); }catch(e){} setLang(b.dataset.l); });
    });
  };

  function setLang(l){
    lang = l;
    document.documentElement.lang = l;
    document.documentElement.dir = (l === 'ar') ? 'rtl' : 'ltr';
    document.querySelectorAll('.langsw button').forEach(b=>b.classList.toggle('active', b.dataset.l===l));
    if(onLang) onLang(l);
  }

  PLAY.lang = ()=>lang;

  PLAY.applyStrings = function(T){
    document.querySelectorAll('[data-t]').forEach(el=>{ const v=T[el.dataset.t]; if(typeof v==='string') el.textContent=v; });
  };

  PLAY.toggleTheme = function(){
    const r=document.documentElement, d=r.getAttribute('data-theme')==='dark'?'light':'dark';
    r.setAttribute('data-theme',d); try{ localStorage.setItem('vsm_theme',d); }catch(e){}
  };

  PLAY.confetti = function(){
    const bits=['🎉','⭐','✨','🎈','🏆'];
    for(let i=0;i<24;i++){
      const s=document.createElement('span'); s.className='confetti-bit';
      s.textContent=bits[i%bits.length];
      s.style.left=(Math.random()*100)+'vw';
      s.style.animationDelay=(Math.random()*0.5)+'s';
      document.body.appendChild(s);
      setTimeout(()=>s.remove(),3200);
    }
  };

  PLAY.shuffle = a => a.map(v=>[Math.random(),v]).sort((x,y)=>x[0]-y[0]).map(p=>p[1]);

  window.PLAY = PLAY;
  window.addEventListener('load', ()=>{
    document.querySelectorAll('ins.adsbygoogle').forEach(()=>{
      try{ (adsbygoogle = window.adsbygoogle || []).push({}); }catch(e){}
    });
  });
})();
