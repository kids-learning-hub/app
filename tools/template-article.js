/* ═══════════════════════════════════════════════════════════════════════
   NEW ARTICLE TEMPLATE — copy this file to  tools/articles/<your-slug>.js
   fill every field in the 4 languages, then run from apps-site/:

       node tools/build.js articles/<your-slug>.js

   Don't forget to ALSO add a catalogue entry (slug/emoji/grad/tagColor/
   tagClass/tagL/cardTitle/excerpt/date) at the TOP of tools/articles.js —
   build.js refuses to run if the slug is missing from the catalogue.

   Rules:
   - slug: lowercase-with-dashes, becomes the file name and the URL.
   - tagClass: one of  math | lang | science | tips | code  (colors in blog/article.css).
   - body: real HTML. Keep the structure below (tag span → h1 → meta line →
     lede → 2-4 <h2> sections → optional app CTA → closing <p>).
     Image/logo paths are written as "../logos/..." (EN depth); the build
     script rewrites them automatically for the fr/es/ar copies.
   - faq: exactly the questions/answers as plain text (no HTML) — they are
     shown as an FAQ section AND emitted as FAQPage JSON-LD for Google.
   ═══════════════════════════════════════════════════════════════════════ */
module.exports = {
  slug: 'my-new-article',
  date: '2026-01-01',        // publish date (YYYY-MM-DD)
  minutes: 5,                // reading time shown in the byline

  /* SEO <title> (≈50-60 chars + brand). One per language. */
  dataTitle: {
    en: 'My Article Title (2026) | Kids Learning Hub',
    fr: 'Titre de mon article (2026) | Kids Learning Hub',
    es: 'Título de mi artículo (2026) | Kids Learning Hub',
    ar: 'عنوان مقالي (2026) | Kids Learning Hub',
  },

  /* Full article body per language. */
  body: {
    en: `
    <span class="tag math">Math</span>
    <h1>My Article Title</h1>
    <div class="meta"><span class="who"><span class="av">V</span> VS MEDIA</span> · <span>Updated January 2026</span> · <span>5 min read</span></div>
    <p class="lede">One or two sentences that hook the reader — this also becomes the meta description.</p>

    <h2>First section heading</h2>
    <p>Paragraphs of helpful, concrete advice...</p>

    <h2>Second section heading</h2>
    <ul>
      <li><strong>Point one:</strong> explanation.</li>
      <li><strong>Point two:</strong> explanation.</li>
    </ul>

    <div class="appcta">
      <div class="ico" style="background:#3B82F6"><img src="../logos/mathokids.png" alt="MathoKids"></div>
      <div class="txt"><b>MathoKids</b><p>One line about the app.</p></div>
      <a class="play" href="https://play.google.com/store/apps/details?id=com.matho.primaire" target="_blank" rel="noopener"><svg viewBox="0 0 512 512"><path fill="#34A853" d="M60 12c-5 3-8 9-8 17v454c0 8 3 14 8 17l246-244z"/><path fill="#EA4335" d="M306 256 63 13c1 0 2 0 3 1l312 180-72 62z"/><path fill="#FBBC04" d="M375 194 447 236c18 11 18 30 0 41l-72 42-73-63z"/><path fill="#4285F4" d="M66 499l240-243 69 63L66 500c-1 0-2-1 0-1z"/></svg><span><span class="g-sub">GET IT ON</span><span class="g-main">Google Play</span></span></a>
    </div>

    <p>Short encouraging closing paragraph.</p>`,

    fr: `
    <span class="tag math">Maths</span>
    <h1>Titre de mon article</h1>
    <div class="meta"><span class="who"><span class="av">V</span> VS MEDIA</span> · <span>Mis à jour en janvier 2026</span> · <span>5 min de lecture</span></div>
    <p class="lede">Une ou deux phrases d'accroche — elles servent aussi de meta description.</p>
    <h2>Premier titre de section</h2>
    <p>...</p>`,

    es: `
    <span class="tag math">Matemáticas</span>
    <h1>Título de mi artículo</h1>
    <div class="meta"><span class="who"><span class="av">V</span> VS MEDIA</span> · <span>Actualizado en enero de 2026</span> · <span>5 min de lectura</span></div>
    <p class="lede">Una o dos frases de gancho — también serán la meta description.</p>
    <h2>Primer título de sección</h2>
    <p>...</p>`,

    ar: `
    <span class="tag math">الرياضيات</span>
    <h1>عنوان مقالي</h1>
    <div class="meta"><span class="who"><span class="av">V</span> VS MEDIA</span> · <span>تحديث يناير 2026</span> · <span>قراءة 5 دقائق</span></div>
    <p class="lede">جملة أو جملتان تجذبان القارئ — وتُستخدمان أيضًا وصفًا للصفحة في جوجل.</p>
    <h2>عنوان القسم الأول</h2>
    <p>...</p>`,
  },

  /* 3 questions & answers per language (plain text). */
  faq: {
    en: [
      ['Question one?', 'Answer one.'],
      ['Question two?', 'Answer two.'],
      ['Question three?', 'Answer three.']],
    fr: [
      ['Question un ?', 'Réponse un.'],
      ['Question deux ?', 'Réponse deux.'],
      ['Question trois ?', 'Réponse trois.']],
    es: [
      ['¿Pregunta uno?', 'Respuesta uno.'],
      ['¿Pregunta dos?', 'Respuesta dos.'],
      ['¿Pregunta tres?', 'Respuesta tres.']],
    ar: [
      ['السؤال الأول؟', 'الجواب الأول.'],
      ['السؤال الثاني؟', 'الجواب الثاني.'],
      ['السؤال الثالث؟', 'الجواب الثالث.']],
  },
};
