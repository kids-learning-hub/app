/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — stars & badges (2026-10)
   ═══════════════════════════════════════════════════════════════════════
   Stored only in this browser (localStorage "klh_stars"): no account, no
   server, nothing personal. Games call KLH_STARS.record(gameId, stars)
   with 0–3 stars at the end of a round; this file adds them up, unlocks
   badges, shows a small toast, and renders the "My stars" panel on any
   page that has an element with id="myStars".                          */
(function () {
  'use strict';
  var KEY = 'klh_stars';
  var GAMES = ['times-tables', 'quick-count', 'word-match', 'clock-game', 'memory',
               'capitals', 'math-race', 'flags', 'patterns', 'science-quiz',
               'odd-one-out', 'fraction-pizza', 'robot-code', 'animal-homes'];

  var L = {
    en: { stars: 'stars', earned: 'You earned', total: 'Total', newBadge: 'New badge!', title: 'My stars & badges',
          sub: 'Play any game to earn up to 3 stars. Your stars are saved on this device only.', locked: 'Locked', played: 'games played' },
    fr: { stars: 'étoiles', earned: 'Tu as gagné', total: 'Total', newBadge: 'Nouveau badge !', title: 'Mes étoiles et badges',
          sub: 'Joue à n’importe quel jeu pour gagner jusqu’à 3 étoiles. Tes étoiles sont gardées sur cet appareil uniquement.', locked: 'À débloquer', played: 'jeux joués' },
    es: { stars: 'estrellas', earned: 'Has ganado', total: 'Total', newBadge: '¡Nueva insignia!', title: 'Mis estrellas e insignias',
          sub: 'Juega a cualquier juego para ganar hasta 3 estrellas. Tus estrellas se guardan solo en este dispositivo.', locked: 'Bloqueada', played: 'juegos jugados' },
    ar: { stars: 'نجوم', earned: 'ربحت', total: 'المجموع', newBadge: 'شارة جديدة!', title: 'نجومي وشاراتي',
          sub: 'العب أي لعبة لتربح حتى 3 نجوم. تُحفظ نجومك على هذا الجهاز فقط.', locked: 'مغلقة', played: 'ألعاب لُعبت' },
  };

  /* badge: id, emoji, names (en/fr/es/ar), hint (en/fr/es/ar), test(state) */
  var BADGES = [
    { id: 'first', e: '🌱', n: ['First steps', 'Premiers pas', 'Primeros pasos', 'الخطوة الأولى'],
      h: ['Finish your first game', 'Termine ton premier jeu', 'Termina tu primer juego', 'أنهِ أول لعبة'],
      t: function (s) { return s.plays >= 1; } },
    { id: 'collector', e: '⭐', n: ['Star collector', 'Collectionneur d’étoiles', 'Coleccionista de estrellas', 'جامع النجوم'],
      h: ['Earn 25 stars', 'Gagne 25 étoiles', 'Gana 25 estrellas', 'اربح 25 نجمة'],
      t: function (s) { return s.total >= 25; } },
    { id: 'superstar', e: '🌟', n: ['Superstar', 'Superstar', 'Superestrella', 'النجم الخارق'],
      h: ['Earn 100 stars', 'Gagne 100 étoiles', 'Gana 100 estrellas', 'اربح 100 نجمة'],
      t: function (s) { return s.total >= 100; } },
    { id: 'explorer', e: '🧭', n: ['Explorer', 'Explorateur', 'Explorador', 'المستكشف'],
      h: ['Play 5 different games', 'Joue à 5 jeux différents', 'Juega a 5 juegos distintos', 'العب 5 ألعاب مختلفة'],
      t: function (s) { return Object.keys(s.best).filter(function (g) { return GAMES.indexOf(g) > -1; }).length >= 5; } },
    { id: 'adventurer', e: '🗺️', n: ['Adventurer', 'Aventurier', 'Aventurero', 'المغامر'],
      h: ['Play all 14 games', 'Joue aux 14 jeux', 'Juega a los 14 juegos', 'العب الألعاب الأربع عشرة كلها'],
      t: function (s) { return GAMES.every(function (g) { return g in s.best; }); } },
    { id: 'tables', e: '✖️', n: ['Times-table hero', 'Héros des tables', 'Héroe de las tablas', 'بطل جدول الضرب'],
      h: ['3 stars in Times Tables Race', '3 étoiles à la Course aux tables', '3 estrellas en Carrera de tablas', '3 نجوم في سباق جداول الضرب'],
      t: function (s) { return s.best['times-tables'] === 3; } },
    { id: 'globe', e: '🌍', n: ['Globe trotter', 'Globe-trotteur', 'Trotamundos', 'جوّال العالم'],
      h: ['3 stars in Capitals and Flags', '3 étoiles aux Capitales et aux Drapeaux', '3 estrellas en Capitales y Banderas', '3 نجوم في العواصم والأعلام'],
      t: function (s) { return s.best.capitals === 3 && s.best.flags === 3; } },
    { id: 'scientist', e: '🔬', n: ['Little scientist', 'Petit scientifique', 'Pequeño científico', 'العالِم الصغير'],
      h: ['3 stars in the Science Quiz', '3 étoiles au Quiz de sciences', '3 estrellas en el Quiz de ciencias', '3 نجوم في مسابقة العلوم'],
      t: function (s) { return s.best['science-quiz'] === 3; } },
    { id: 'coder', e: '🤖', n: ['Little coder', 'Petit codeur', 'Pequeño programador', 'المبرمج الصغير'],
      h: ['3 stars in Robot Code', '3 étoiles à Code le robot', '3 estrellas en Programa el robot', '3 نجوم في برمج الروبوت'],
      t: function (s) { return s.best['robot-code'] === 3; } },
    { id: 'streak', e: '🔥', n: ['On fire', 'En feu', 'Imparable', 'المتحمّس'],
      h: ['Daily challenge 3 days in a row', 'Défi du jour 3 jours de suite', 'Reto diario 3 días seguidos', 'تحدّي اليوم 3 أيام متتالية'],
      t: function () { try { var d = JSON.parse(localStorage.getItem('klh_dc') || '{}'); return (d.n || 0) >= 3; } catch (e) { return false; } } },
    { id: 'champion', e: '🏆', n: ['Champion', 'Champion', 'Campeón', 'البطل'],
      h: ['3 stars in 5 different games', '3 étoiles dans 5 jeux différents', '3 estrellas en 5 juegos distintos', '3 نجوم في 5 ألعاب مختلفة'],
      t: function (s) { return Object.keys(s.best).filter(function (g) { return s.best[g] === 3 && g !== 'daily'; }).length >= 5; } },
  ];
  var IDX = { en: 0, fr: 1, es: 2, ar: 3 };

  function lang() { var l = document.documentElement.lang; return L[l] ? l : 'en'; }
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && s.best) return s; } catch (e) {}
    return { total: 0, plays: 0, best: {}, badges: [] };
  }
  function save(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }

  /* ── toast ── */
  function css() {
    if (document.getElementById('klhStarsCss')) return;
    var st = document.createElement('style'); st.id = 'klhStarsCss';
    st.textContent =
      '.klh-toast{position:fixed;left:50%;bottom:22px;transform:translate(-50%,40px);opacity:0;z-index:3000;background:#12224E;color:#fff;' +
      'font:800 16px Nunito,system-ui,sans-serif;padding:12px 20px;border-radius:999px;box-shadow:0 12px 30px rgba(0,0,0,.3);transition:.35s;' +
      'display:flex;gap:10px;align-items:center;max-width:calc(100vw - 32px)}' +
      '.klh-toast.show{transform:translate(-50%,0);opacity:1}.klh-toast.badge{background:linear-gradient(135deg,#FF8A00,#FF4FA3)}' +
      '.klh-toast .big{font-size:26px}' +
      '.mystars{background:var(--card,#fff);border:1px solid var(--line,#E4ECFA);border-radius:22px;padding:20px;margin:18px 0}' +
      '.mystars h2{margin:0 0 4px;font-size:22px}.mystars .sub{color:var(--muted,#66799F);font-size:14px;margin:0 0 14px}' +
      '.mystars .tot{display:flex;gap:18px;flex-wrap:wrap;margin-bottom:14px;font-weight:900}' +
      '.mystars .tot b{font-size:26px;color:#FF8A00;margin-inline-end:6px}' +
      '.mystars .bgrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px}' +
      '.mystars .bdg{text-align:center;border:1px solid var(--line,#E4ECFA);border-radius:16px;padding:12px 8px;background:var(--card2,#F7FAFF)}' +
      '.mystars .bdg .e{font-size:34px;display:block}.mystars .bdg b{display:block;font-size:13.5px;margin-top:4px}' +
      '.mystars .bdg small{display:block;font-size:11.5px;color:var(--muted,#66799F);margin-top:2px}' +
      '.mystars .bdg.off{opacity:.45;filter:grayscale(1)}';
    document.head.appendChild(st);
  }
  var queue = [], busy = false;
  function toast(html, isBadge) {
    queue.push([html, isBadge]); if (!busy) next();
  }
  function next() {
    var item = queue.shift(); if (!item) { busy = false; return; }
    busy = true; css();
    var el = document.createElement('div'); el.className = 'klh-toast' + (item[1] ? ' badge' : '');
    el.setAttribute('role', 'status'); el.innerHTML = item[0];
    document.body.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('show'); });
    setTimeout(function () { el.classList.remove('show'); setTimeout(function () { el.remove(); next(); }, 400); }, 3200);
  }

  /* ── public API ── */
  function record(game, stars) {
    stars = Math.max(0, Math.min(3, Math.round(stars || 0)));
    var s = load(), l = lang(), t = L[l];
    s.plays++; s.total += stars;
    if (!(game in s.best) || stars > s.best[game]) s.best[game] = stars;
    var fresh = BADGES.filter(function (b) { return s.badges.indexOf(b.id) < 0 && b.t(s); });
    fresh.forEach(function (b) { s.badges.push(b.id); });
    save(s);
    if (stars > 0) toast('<span class="big">' + '⭐'.repeat(stars) + '</span><span>' + t.earned + ' ' + stars + ' · ' + t.total + ': ' + s.total + '</span>');
    fresh.forEach(function (b) { toast('<span class="big">' + b.e + '</span><span>' + t.newBadge + ' ' + b.n[IDX[l]] + '</span>', true); });
    render();
    return s;
  }
  /* score out of `max` (default 10) → 0–3 stars */
  function fromScore(score, max) {
    var p = score / (max || 10);
    return p >= 0.9 ? 3 : p >= 0.7 ? 2 : p >= 0.5 ? 1 : 0;
  }

  function render() {
    var box = document.getElementById('myStars'); if (!box) return;
    css();
    var s = load(), l = lang(), t = L[l], i = IDX[l];
    box.className = 'mystars';
    box.innerHTML = '<h2><img src="/logos/owl.svg" alt="" width="40" height="44" style="width:40px;height:auto;vertical-align:-10px;margin-inline-end:8px">' + t.title + '</h2><p class="sub">' + t.sub + '</p>' +
      '<div class="tot"><span><b>' + s.total + '</b>' + t.stars + '</span><span><b>' + s.plays + '</b>' + t.played + '</span>' +
      '<span><b>' + s.badges.length + '/' + BADGES.length + '</b>🏅</span></div>' +
      '<div class="bgrid">' + BADGES.map(function (b) {
        var on = s.badges.indexOf(b.id) > -1;
        return '<div class="bdg' + (on ? '' : ' off') + '" title="' + b.h[i] + '"><span class="e">' + b.e + '</span><b>' + b.n[i] + '</b><small>' + (on ? b.h[i] : t.locked + ' · ' + b.h[i]) + '</small></div>';
      }).join('') + '</div>';
  }

  window.KLH_STARS = { record: record, fromScore: fromScore, get: load, render: render };

  function boot() {
    render();
    /* re-render when the page switches language */
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
