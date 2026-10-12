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

  /* ── sounds (2026-10): tiny synthesized effects, no audio files ──────
     On by default, quiet, with a mute button in the header (remembered). */
  let actx = null, muted = false;
  try{ muted = localStorage.getItem('klh_sound') === 'off'; }catch(e){}
  function tone(freq, start, dur, type, vol){
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type || 'sine'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, actx.currentTime + start);
    g.gain.exponentialRampToValueAtTime(vol || 0.12, actx.currentTime + start + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + start + dur);
    o.connect(g).connect(actx.destination);
    o.start(actx.currentTime + start); o.stop(actx.currentTime + start + dur + 0.02);
  }
  const SOUNDS = {
    right: ()=>{ tone(660,0,.12,'triangle'); tone(990,.09,.18,'triangle'); },
    wrong: ()=>{ tone(220,0,.18,'sine',.09); tone(180,.12,.22,'sine',.08); },
    tap:   ()=>{ tone(520,0,.06,'sine',.06); },
    win:   ()=>{ [523,659,784,1047].forEach((f,i)=>tone(f,i*.11,.25,'triangle',.11)); },
  };
  PLAY.sound = function(name){
    if(muted || !SOUNDS[name]) return;
    try{
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      if(actx.state === 'suspended') actx.resume();
      SOUNDS[name]();
    }catch(e){}
  };
  const confettiOrig = PLAY.confetti;
  PLAY.confetti = function(){ PLAY.sound('win'); confettiOrig(); };

  function addMuteButton(){
    const bar = document.querySelector('.top-actions');
    if(!bar || document.getElementById('muteBtn')) return;
    const b = document.createElement('button');
    b.className = 'icon-btn'; b.id = 'muteBtn'; b.type = 'button';
    const paint = ()=>{ b.textContent = muted ? '🔇' : '🔊'; b.setAttribute('aria-label', muted ? 'Sound off' : 'Sound on'); b.setAttribute('aria-pressed', String(!muted)); };
    b.addEventListener('click', ()=>{ muted = !muted; try{ localStorage.setItem('klh_sound', muted ? 'off' : 'on'); }catch(e){} paint(); PLAY.sound('tap'); });
    paint(); bar.insertBefore(b, bar.firstChild);
  }

  /* ── automatic feedback for every game ──
     Games mark answers with .right/.bad and memory cards with .flip/.done;
     we listen for those classes instead of editing each game.           */
  function watchAnswers(){
    let pending = null;
    new MutationObserver(list=>{
      for(const m of list){
        const el = m.target; if(!el.classList) continue;
        const was = m.oldValue || '';
        const added = c => el.classList.contains(c) && !(' '+was+' ').includes(' '+c+' ');
        if(el.classList.contains('answer')){
          if(added('bad')) pending = 'wrong';
          else if(added('right') && pending !== 'wrong') pending = pending || 'right';
          if(added('right')){ el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
        } else if(el.classList.contains('mcard')){
          if(added('done')) pending = 'right'; else if(added('flip') && !pending) pending = 'tap';
        }
      }
      if(pending){ const s = pending; setTimeout(()=>{ if(pending === s){ PLAY.sound(s); pending = null; } }, 0); }
    }).observe(document.body, { subtree:true, attributes:true, attributeFilter:['class'], attributeOldValue:true });
  }

  /* ── progress bar under the "Question 3 / 10" counter ── */
  function progressBar(){
    const p = document.getElementById('progress');
    if(!p) return;
    const bar = document.createElement('div'); bar.className = 'pbar'; bar.innerHTML = '<i></i>';
    (p.closest('.hud') || p).insertAdjacentElement('afterend', bar);
    const upd = ()=>{ const m = (p.textContent||'').match(/(\d+)\s*\/\s*(\d+)/); bar.firstChild.style.width = m ? Math.min(100, (m[1]-1)/m[2]*100)+'%' : '0'; };
    new MutationObserver(upd).observe(p, { childList:true, characterData:true, subtree:true }); upd();
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    if(!document.querySelector('#game, .hud, .mcard, #board')) return;   // hub pages: no game here
    addMuteButton(); watchAnswers(); progressBar();
    const end = document.getElementById('end');   // the mascot cheers on every result screen
    if(end && !end.querySelector('.owl')) end.insertAdjacentHTML('afterbegin','<img class="owl" src="/logos/owl.svg" alt="" width="90" height="99">');
  });

  window.PLAY = PLAY;
  window.addEventListener('load', ()=>{
    document.querySelectorAll('ins.adsbygoogle').forEach(()=>{
      try{ (adsbygoogle = window.adsbygoogle || []).push({}); }catch(e){}
    });
  });
})();
