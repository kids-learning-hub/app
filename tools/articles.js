/* ═══════════════════════════════════════════════════════════════════════
   Kids Learning Hub — BLOG CATALOGUE (newest first)
   ═══════════════════════════════════════════════════════════════════════
   One entry per published article. This file drives:
   - the 4 blog index pages (blog/, blog/fr|es|ar/)
   - sitemap.xml
   - the "Latest from the blog" row on the homepage (BLOG_POSTS)
   - the "Keep reading" cards inside newly generated articles

   ➜ When you add a new article, add its entry AT THE TOP of this list,
     then run:  node tools/build.js articles/<slug>.js
   (Old articles do not need a content file in tools/articles/ — their
    pages already exist and are never overwritten by an index rebuild.)
   ═══════════════════════════════════════════════════════════════════════ */
module.exports = [
  {
    slug: 'kids-english-games', date: '2026-07-15',
    emoji: '🇬🇧', grad: 'linear-gradient(135deg,#FF7E7E,#FF4B4B)', tagColor: '#FF4B4B', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: '5 Simple Ways to Help Your Child Speak English at Home',
      fr: '5 astuces simples pour aider votre enfant à parler anglais à la maison',
      es: '5 formas sencillas de ayudar a tu hijo a hablar inglés en casa',
      ar: '5 طرق بسيطة لمساعدة طفلك على التحدث باللغة الإنجليزية في المنزل' },
    excerpt: {
      en: 'Discover practical, stress-free ways to introduce English into your child’s daily routine through play, songs, and interactive apps.',
      fr: 'Découvrez des moyens pratiques et ludiques d\'introduire l\'anglais dans la routine de votre enfant grâce au jeu et aux applications interactives.',
      es: 'Descubre métodos prácticos y divertidos para incorporar el inglés en la rutina diaria de tu hijo a través de juegos y aplicaciones.',
      ar: 'اكتشف حيلًا عملية وخالية من التوتر لإدخال اللغة الإنجليزية في روتين طفلك اليومي من خلال الألعاب والتطبيقات التفاعلية.' },
  },
  {
    slug: 'math-games-primary', date: '2026-07-15',
    emoji: '🎮', grad: 'linear-gradient(135deg,#49B6FF,#1E5BFF)', tagColor: '#1E5BFF', tagClass: 'math',
    tagL: { en: 'Math', fr: 'Maths', es: 'Matemáticas', ar: 'رياضيات' },
    cardTitle: {
      en: 'How to Teach Primary Math Using Fun Games',
      fr: 'Comment enseigner les maths au primaire par le jeu',
      es: 'Cómo enseñar matemáticas de primaria jugando',
      ar: 'كيفية تعليم الرياضيات للمرحلة الابتدائية بالألعاب المرحة' },
    excerpt: {
      en: 'Discover how interactive games and educational apps can transform primary mathematics from a dry chore into an exciting daily adventure.',
      fr: 'Découvrez comment les jeux interactifs et les applications éducatives transforment les mathématiques du primaire en aventure quotidienne.',
      es: 'Descubre cómo los juegos interactivos y las aplicaciones transforman las matemáticas de primaria en una emocionante aventura.',
      ar: 'اكتشف كيف تحوّل الألعاب التفاعلية والتطبيقات التعليمية مادة الرياضيات بالمرحلة الابتدائية إلى متعة ومغامرة يومية.' },
  },
  {
    slug: 'mental-math-tricks-for-kids', date: '2026-07-14',
    emoji: '🧠', grad: 'linear-gradient(135deg,#9B7BFF,#7A4DFF)', tagColor: '#7A4DFF', tagClass: 'math',
    tagL: { en: 'Math', fr: 'Maths', es: 'Matemáticas', ar: 'رياضيات' },
    cardTitle: {
      en: '10 Mental Math Tricks Every Kid Should Know',
      fr: '10 astuces de calcul mental pour les enfants',
      es: '10 trucos de cálculo mental para niños',
      ar: '10 حِيَل للحساب الذهني يحتاجها كل طفل' },
    excerpt: {
      en: 'Fast, fun number tricks that build real confidence — no worksheets required.',
      fr: 'Des astuces rapides et amusantes qui donnent une vraie confiance — sans fiches.',
      es: 'Trucos rápidos y divertidos que dan confianza real, sin fichas.',
      ar: 'حِيَل سريعة وممتعة تبني ثقة حقيقية بالأعداد — بلا أوراق تمارين.' },
  },
  {
    slug: 'coding-for-kids-when-to-start', date: '2026-07-14',
    emoji: '🤖', grad: 'linear-gradient(135deg,#8D6E63,#5D4037)', tagColor: '#5D4037', tagClass: 'code',
    tagL: { en: 'Coding', fr: 'Codage', es: 'Programación', ar: 'برمجة' },
    cardTitle: {
      en: 'Coding for Kids: What Age Should They Start?',
      fr: 'Le codage pour enfants : à quel âge commencer ?',
      es: 'Programación para niños: ¿a qué edad empezar?',
      ar: 'البرمجة للأطفال: في أي عمر يبدؤون؟' },
    excerpt: {
      en: 'What coding really teaches, the right activity for every age, and how to begin without a computer.',
      fr: "Ce que le codage apprend vraiment, la bonne activité à chaque âge, et comment débuter sans ordinateur.",
      es: 'Qué enseña de verdad la programación, la actividad adecuada a cada edad y cómo empezar sin ordenador.',
      ar: 'ما الذي تعلّمه البرمجة فعلًا، والنشاط المناسب لكل عمر، وكيف تبدأ دون حاسوب.' },
  },
  {
    slug: 'arabic-alphabet-for-kids', date: '2026-07-14',
    emoji: '✍️', grad: 'linear-gradient(135deg,#3ED6C9,#0E9E8F)', tagColor: '#0E9E8F', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'Arabic Alphabet for Kids: Teach It Step by Step',
      fr: "L'alphabet arabe pour enfants, étape par étape",
      es: 'El alfabeto árabe para niños, paso a paso',
      ar: 'الحروف العربية للأطفال: علّمها خطوة بخطوة' },
    excerpt: {
      en: 'Sounds first, letter families, and playful practice — a calm plan for all 28 letters.',
      fr: "Les sons d'abord, les familles de lettres et le jeu — un plan serein pour les 28 lettres.",
      es: 'Primero los sonidos, familias de letras y juego: un plan tranquilo para las 28 letras.',
      ar: 'الأصوات أولًا وعائلات الحروف واللعب — خطة هادئة للحروف الثمانية والعشرين.' },
  },
  {
    slug: 'math-games-for-kids', date: '2026-07-09',
    emoji: '🔢', grad: 'linear-gradient(135deg,#49B6FF,#1E5BFF)', tagColor: '#1E5BFF', tagClass: 'math',
    tagL: { en: 'Math', fr: 'Maths', es: 'Matemáticas', ar: 'رياضيات' },
    cardTitle: {
      en: '12 Fun Math Games That Actually Help Kids Learn',
      fr: '12 jeux de maths amusants qui aident vraiment les enfants',
      es: '12 juegos de matemáticas que de verdad ayudan a los niños',
      ar: '12 لعبة رياضيات ممتعة تساعد طفلك على التعلّم فعلًا' },
    excerpt: {
      en: 'Turn maths practice into play with simple screen-free and app-based games that build real number skills.',
      fr: 'Transformez les maths en jeu avec des activités simples, avec ou sans écran, qui développent le sens du nombre.',
      es: 'Convierte las matemáticas en juego con actividades sencillas, con o sin pantalla, que desarrollan el sentido numérico.',
      ar: 'حوّل تمارين الرياضيات إلى لعب بأنشطة بسيطة، بشاشة أو بدونها، لبناء مهارات الأعداد.' },
  },
  {
    slug: 'best-age-to-learn-a-language', date: '2026-07-09',
    emoji: '🗣️', grad: 'linear-gradient(135deg,#FF7AB8,#FF4FA3)', tagColor: '#FF4FA3', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'The Best Age for Kids to Learn a Second Language',
      fr: 'Le meilleur âge pour apprendre une langue à un enfant',
      es: 'La mejor edad para que los niños aprendan un segundo idioma',
      ar: 'أفضل عمر لتعلّم الطفل لغة ثانية' },
    excerpt: {
      en: 'When should children start a new language — and how can busy parents make it stick? A research-backed guide.',
      fr: 'Quand commencer une nouvelle langue et comment la faire tenir ? Un guide fondé sur la recherche.',
      es: '¿Cuándo empezar un idioma y cómo lograr que se mantenga? Una guía basada en la investigación.',
      ar: 'متى يبدأ الطفل لغة جديدة وكيف يثبّتها؟ دليل مبني على الأبحاث.' },
  },
  {
    slug: 'easy-science-experiments-for-kids', date: '2026-07-09',
    emoji: '🔬', grad: 'linear-gradient(135deg,#5FE08A,#15A34A)', tagColor: '#15A34A', tagClass: 'science',
    tagL: { en: 'Science', fr: 'Sciences', es: 'Ciencias', ar: 'علوم' },
    cardTitle: {
      en: '10 Easy Science Experiments Kids Can Do at Home',
      fr: '10 expériences scientifiques faciles à faire à la maison',
      es: '10 experimentos de ciencia fáciles para hacer en casa',
      ar: '10 تجارب علمية سهلة يفعلها الأطفال في البيت' },
    excerpt: {
      en: 'Ten safe, low-cost experiments using things from your kitchen — with the simple “why” behind each one.',
      fr: 'Dix expériences sûres et économiques avec ce que vous avez en cuisine — et le « pourquoi » de chacune.',
      es: 'Diez experimentos seguros y económicos con cosas de la cocina, y el «porqué» de cada uno.',
      ar: 'عشر تجارب آمنة ورخيصة بأدوات من مطبخك، مع تفسير بسيط لكل واحدة.' },
  },
  {
    slug: 'how-to-teach-times-tables', date: '2026-07-09',
    emoji: '✖️', grad: 'linear-gradient(135deg,#5B8CFF,#1E5BFF)', tagColor: '#1E5BFF', tagClass: 'math',
    tagL: { en: 'Math', fr: 'Maths', es: 'Matemáticas', ar: 'رياضيات' },
    cardTitle: {
      en: 'How to Teach Times Tables — Fast &amp; Fun',
      fr: 'Apprendre les tables de multiplication, sans stress',
      es: 'Cómo enseñar las tablas de multiplicar',
      ar: 'كيف تُعلّم طفلك جداول الضرب بسهولة' },
    excerpt: {
      en: 'The best order to learn them, the tricks that work, and practice that sticks.',
      fr: 'Le bon ordre, les astuces qui marchent et une pratique qui dure.',
      es: 'El orden correcto, los trucos que funcionan y práctica que perdura.',
      ar: 'الترتيب الصحيح والحِيَل الناجحة وتدريب يبقى أثره.' },
  },
  {
    slug: 'screen-time-safe-apps-for-kids', date: '2026-07-09',
    emoji: '🛡️', grad: 'linear-gradient(135deg,#FFD84D,#FF8A00)', tagColor: '#FF8A00', tagClass: 'tips',
    tagL: { en: 'Parenting', fr: 'Parentalité', es: 'Crianza', ar: 'تربية' },
    cardTitle: {
      en: 'Good Screen Time: Choosing Safe Apps',
      fr: "Temps d'écran utile : des applis sûres",
      es: 'Tiempo de pantalla útil: apps seguras',
      ar: 'وقت الشاشة المفيد: تطبيقات آمنة' },
    excerpt: {
      en: 'A practical checklist for safe, high-quality apps — and how much is too much.',
      fr: 'Une checklist pour des applis sûres et de qualité — et combien est trop.',
      es: 'Una lista para apps seguras y de calidad — y cuánto es demasiado.',
      ar: 'قائمة عملية لاختيار تطبيقات آمنة وعالية الجودة — وكم يُعدّ كثيرًا.' },
  },
];
