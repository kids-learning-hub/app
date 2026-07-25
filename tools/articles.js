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
    slug: 'developing-scientific-curiosity-in-kids', date: '2026-08-09',
    emoji: '🔬', grad: 'linear-gradient(135deg,#4CAF50,#2E7D32)', tagColor: '#4CAF50', tagClass: 'sci',
    tagL: { en: 'Science', fr: 'Sciences', es: 'Ciencias', ar: 'علوم' },
    cardTitle: {
      en: 'Developing Scientific Curiosity & Inquiry in Primary Kids',
      fr: 'Développer la curiosité scientifique et l’esprit d’observation chez l’enfant',
      es: 'Cómo fomentar la curiosidad científica y el pensamiento experimental en niños',
      ar: 'تنمية الفضول العلمي والتفكير التجريبي لدى أطفال الابتدائي' },
    excerpt: {
      en: 'Discover how interactive visual science and simple home experiments nurture an inquiring mind.',
      fr: 'Découvrez comment les sciences visuelles et l’expérimentation éveillent l’esprit critique des enfants.',
      es: 'Descubre cómo la ciencia visual e interactiva fomenta el pensamiento crítico en los niños.',
      ar: 'اكتشف كيف تسهم العلوم البصرية والتجارب التفاعلية في بناء التفكير النقدي والفضول المعرفي لدى طفلك.' },
  },
  {
    slug: 'building-verbal-fluency-in-kids', date: '2026-08-08',
    emoji: '🗣️', grad: 'linear-gradient(135deg,#FF9800,#F57C00)', tagColor: '#FF9800', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'Building Verbal Fluency & Speaking Confidence in Primary Kids',
      fr: 'Développer l’aisance verbale et la confiance à l’oral chez l’enfant',
      es: 'Cómo mejorar la fluidez verbal y la confianza al hablar en niños',
      ar: 'بناء مهارات التعبير الشفهي والتحدث بثقة لدى أطفال الابتدائي' },
    excerpt: {
      en: 'Discover how interactive storytelling and auditory repetition help primary kids speak with clarity and joy.',
      fr: 'Découvrez comment les récits interactifs et le jeu d’imitation aident les enfants à s’exprimer avec aisance.',
      es: 'Descubre cómo los cuentos interactivos y la repetición auditiva ayudan a los niños a hablar con soltura.',
      ar: 'اكتشف كيف تسهم القصص التفاعلية والاستماع النشط في تدريب طفلك على التحدث بطلاقة ووضوح دون خوف أو تردد.' },
  },
  {
    slug: 'fostering-computational-thinking-kids', date: '2026-08-07',
    emoji: '🧩', grad: 'linear-gradient(135deg,#00BCD4,#0097A7)', tagColor: '#00BCD4', tagClass: 'math',
    tagL: { en: 'Mathematics', fr: 'Mathématiques', es: 'Matemáticas', ar: 'رياضيات' },
    cardTitle: {
      en: 'Fostering Computational Thinking & Logic in Primary Kids',
      fr: 'Développer la pensée informatique et la logique chez l’enfant',
      es: 'Cómo fomentar el pensamiento computacional y la lógica en niños',
      ar: 'تنمية التفكير البرمجي والمنطق الخوارزمي لدى أطفال الابتدائي' },
    excerpt: {
      en: 'Discover how visual logic games and sequential problem-solving help children structure complex ideas with clarity.',
      fr: 'Découvrez comment les jeux de logique visuels aident les enfants à analyser et décomposer la complexité.',
      es: 'Descubre cómo los juegos de lógica visual ayudan a los niños a descomponer y organizar ideas complejas.',
      ar: 'اكتشف كيف تسهم الألعاب البصرية والتحديات التفاعلية في بناء عقلية تحليلية وخوارزمية منظمة لدى طفلك.' },
  },
  {
    slug: 'developing-spatial-reasoning-kids', date: '2026-08-06',
    emoji: '📐', grad: 'linear-gradient(135deg,#7A4DFF,#3F51B5)', tagColor: '#7A4DFF', tagClass: 'math',
    tagL: { en: 'Mathematics', fr: 'Mathématiques', es: 'Matemáticas', ar: 'رياضيات' },
    cardTitle: {
      en: 'Developing Spatial Reasoning & Geometry in Primary Kids',
      fr: 'Développer la géométrie et le repérage spatial chez l’enfant',
      es: 'Desarrollo del razonamiento espacial y geometría en niños',
      ar: 'تنمية التفكير الهندسي والحس الفضائي لدى أطفال الابتدائي' },
    excerpt: {
      en: 'Discover how visual geometry puzzles transform abstract spatial relationships into intuitive skills.',
      fr: 'Découvrez comment la géométrie visuelle transforme les concepts spatiaux en compétences intuitives.',
      es: 'Descubre cómo la geometría visual transforma los conceptos espaciales en habilidades intuitivas.',
      ar: 'اكتشف كيف تحول الهندسة البصرية والألغاز التفاعلية المفاهيم الفضائية المجردة إلى مهارة ممتعة تبني الذكاء الهندسي لطفلك.' },
  },
  {
    slug: 'managing-stress-and-adhd-in-kids', date: '2026-08-05',
    emoji: '🧘', grad: 'linear-gradient(135deg,#2196F3,#1976D2)', tagColor: '#2196F3', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'Managing Academic Stress & Supporting Active Learners',
      fr: 'Gérer le stress scolaire et accompagner l’enfant hyperactif',
      es: 'Cómo gestionar el estrés escolar y el TDAH en niños',
      ar: 'إدارة التوتر وتشتت الانتباه وفرط الحركة لدى أطفال الابتدائي' },
    excerpt: {
      en: 'Discover how gentle micro-learning and low-stress play help high-energy children thrive.',
      fr: 'Découvrez comment le micro-apprentissage et le jeu sans stress aident les enfants très actifs.',
      es: 'Descubre cómo el microaprendizaje y los juegos sin estrés ayudan a los niños muy activos.',
      ar: 'اكتشف كيف يزيل التعلم المصغر والتفاعل البصري توتر طفلك ويحول فرط الحركة إلى تركيز وشغف بالاستكشاف.' },
  },
  {
    slug: 'building-working-memory-and-focus', date: '2026-08-04',
    emoji: '🧠', grad: 'linear-gradient(135deg,#009688,#00796B)', tagColor: '#009688', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'Building Working Memory & Focus in Primary Kids',
      fr: 'Développer la mémoire de travail et la concentration',
      es: 'Cómo mejorar la memoria de trabajo y la atención',
      ar: 'تنمية الذاكرة العاملة ومهارات التركيز لدى أطفال الابتدائي' },
    excerpt: {
      en: 'Discover how structured cognitive games and progressive visual challenges strengthen attention spans.',
      fr: 'Découvrez comment les jeux cognitifs structurés et les défis visuels renforcent l’attention de l’enfant.',
      es: 'Descubre cómo los juegos cognitivos estructurados y los retos visuales fortalecen la atención.',
      ar: 'اكتشف كيف تحول التحديات البصرية والتدرج المعرفي تشتت طفلك إلى تركيز ذهني عميق وقدرة استيعاب استثنائية.' },
  },
  {
    slug: 'fostering-scientific-curiosity-kids', date: '2026-08-03',
    emoji: '🔬', grad: 'linear-gradient(135deg,#4CAF50,#2E7D32)', tagColor: '#4CAF50', tagClass: 'sci',
    tagL: { en: 'Science', fr: 'Sciences', es: 'Ciencias', ar: 'علوم' },
    cardTitle: {
      en: 'Fostering Scientific Curiosity in Primary Kids',
      fr: 'Éveiller la curiosité scientifique chez l’enfant',
      es: 'Cómo fomentar la curiosidad científica en niños',
      ar: 'تنمية الفضول العلمي ومهارات الاستكشاف لدى أطفال الابتدائي' },
    excerpt: {
      en: 'Discover how inquiry-based learning and visual simulations transform passive wonder into structured thinking.',
      fr: 'Découvrez comment la démarche d’investigation transforme la curiosité en un raisonnement scientifique structuré.',
      es: 'Descubre cómo el aprendizaje por indagación transforma la curiosidad en pensamiento científico estructurado.',
      ar: 'اكتشف كيف تحول المناهج الاستكشافية والتجارب البصرية تفكير طفلك إلى تفكير علمي منظم وشغف دائم.' },
  },
  {
    slug: 'emotional-intelligence-in-early-learning', date: '2026-08-02',
    emoji: '❤️', grad: 'linear-gradient(135deg,#E91E63,#F48FB1)', tagColor: '#E91E63', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'Emotional Intelligence in Primary Kids',
      fr: 'Développer l’intelligence émotionnelle chez l’enfant',
      es: 'Desarrollo de la inteligencia emocional en niños',
      ar: 'تنمية الذكاء العاطفي والاجتماعي لدى أطفال الابتدائي' },
    excerpt: {
      en: 'Discover how expressive storytelling helps children identify, articulate, and self-regulate their feelings.',
      fr: 'Découvrez comment les contes interactifs aident les enfants du primaire à nommer leurs émotions.',
      es: 'Descubre cómo las historias expresivas ayudan a los niños de primaria a nombrar sus emociones.',
      ar: 'اكتشف كيف تساعد القصص التفاعلية واللغة البصرية طفلك على تسمية مشاعره وتطوير التعبير والتعاطف الاجتماعي.' },
  },
  {
    slug: 'developing-logical-thinking-kids', date: '2026-08-01',
    emoji: '🧩', grad: 'linear-gradient(135deg,#7A4DFF,#6200EA)', tagColor: '#7A4DFF', tagClass: 'math',
    tagL: { en: 'Mathematics', fr: 'Mathématiques', es: 'Matemáticas', ar: 'رياضيات' },
    cardTitle: {
      en: 'Developing Logical Thinking in Primary Kids',
      fr: 'Développer la pensée logique chez l’enfant',
      es: 'Desarrollo del pensamiento lógico en niños',
      ar: 'تنمية التفكير المنطقي وحل المشكلات لدى أطفال الابتدائي' },
    excerpt: {
      en: 'Discover how interactive visual puzzles transform abstract reasoning into an intuitive, joyful skill.',
      fr: 'Découvrez comment les énigmes visuelles transforment la logique abstraite en une compétence intuitive.',
      es: 'Descubre cómo los acertijos visuales transforman la lógica abstracta en una habilidad intuitiva.',
      ar: 'اكتشف كيف تحول الألغاز البصرية التفاعلية المفاهيم المنطقية المجردة إلى مهارة ممتعة تبني ثقة طفلك التحليلية.' },
  },
  {
    slug: 'mastering-languages-early-childhood', date: '2026-07-31',
    emoji: '🗣️', grad: 'linear-gradient(135deg,#FF9800,#F57C00)', tagColor: '#FF9800', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'Mastering New Languages in Early Childhood',
      fr: 'Maîtriser une nouvelle langue dès l’enfance',
      es: 'Cómo aprender un nuevo idioma en la infancia',
      ar: 'سرعة اكتساب اللغات لدى الأطفال وتجاوز خجل التحدث' },
    excerpt: {
      en: 'Discover how natural phonological immersion and low-stress interactive play eliminate speaking anxiety.',
      fr: 'Découvrez comment l’immersion phonologique naturelle et le jeu interactif éliminent la peur de s’exprimer.',
      es: 'Descubre cómo la inmersión fonológica natural y el juego interactivo eliminan el miedo a hablar.',
      ar: 'اكتشف كيف تحول التفاعلات الصوتية والبصرية خجل طفلك إلى طلاقة لغوية وثقة عالية بالنفس.' },
  },
  {
    slug: 'smart-screen-time-for-kids', date: '2026-07-30',
    emoji: '📱', grad: 'linear-gradient(135deg,#00BCD4,#29B6F6)', tagColor: '#00BCD4', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'Smart Screen Time Habits for Kids',
      fr: 'Gestion intelligente du temps d’écran',
      es: 'Hábitos inteligentes de pantalla en niños',
      ar: 'الإدارة الذكية لوقت الشاشة لدى الأطفال' },
    excerpt: {
      en: 'Discover how to build balanced digital habits that foster self-regulation and active learning.',
      fr: 'Découvrez comment instaurer des habitudes numériques équilibrées et stimulantes pour votre enfant.',
      es: 'Descubre cómo construir hábitos digitales equilibrados y formativos sin conflictos.',
      ar: 'اكتشف كيف تحول الشاشة من مصدر للتشتت إلى أداة للتربية الرقمية والتعلم التفاعلي المتوازن.' },
  },
  {
    slug: 'boosting-child-focus-and-attention', date: '2026-07-29',
    emoji: '🎯', grad: 'linear-gradient(135deg,#00E676,#00B0FF)', tagColor: '#00C853', tagClass: 'science',
    tagL: { en: 'Science', fr: 'Sciences', es: 'Ciencias', ar: 'علوم' },
    cardTitle: {
      en: 'Boosting Child Focus & Attention Span',
      fr: 'Améliorer la concentration de l’enfant',
      es: 'Cómo mejorar la atención infantil',
      ar: 'زيادة تركيز الطفل وانتباهه أثناء التعلم' },
    excerpt: {
      en: 'Discover how targeted interactive play rebuilds cognitive stamina and working memory naturally.',
      fr: 'Découvrez comment le jeu interactif et les micro-objectifs renforcent l’attention et la mémoire de travail.',
      es: 'Descubre cómo el juego interactivo y las microtareas reconstruyen la capacidad de atención.',
      ar: 'اكتشف كيف تحول التفاعلات الألعابية التفاعلية تشتت طفلك إلى تركيز عميق وتطور الذاكرة العاملة.' },
  },
  {
    slug: 'overcoming-math-anxiety-kids', date: '2026-07-28',
    emoji: '📐', grad: 'linear-gradient(135deg,#7A4DFF,#4322BB)', tagColor: '#7A4DFF', tagClass: 'math',
    tagL: { en: 'Mathematics', fr: 'Mathématiques', es: 'Matemáticas', ar: 'رياضيات' },
    cardTitle: {
      en: 'Overcoming Math Anxiety in Primary Kids',
      fr: 'Vaincre l’anxiété des mathématiques chez l’enfant',
      es: 'Cómo superar la ansiedad matemática en niños',
      ar: 'تفكيك عقدة الرياضيات: كيف تحمي طفلك من الرهاب؟' },
    excerpt: {
      en: 'Discover how to transform fear, numbers, and rigid operations into an engaging journey of confidence and visual problem-solving.',
      fr: 'Découvrez comment transformer la peur des chiffres en une expérience visuelle stimulante et rassurante.',
      es: 'Descubre cómo transformar el miedo a los números en confianza analítica mediante la pedagogía visual.',
      ar: 'اكتشف كيف تحول الخوف والأرقام والعمليات التجريدية إلى رحلة آمنة من الثقة والتحليل البصري والتفوق الذهني.' },
  },
  {
    slug: 'child-language-acquisition-secrets', date: '2026-07-27',
    emoji: '🔤', grad: 'linear-gradient(135deg,#FF4081,#E91E63)', tagColor: '#E91E63', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'Early Language Acquisition: Raising Bilingual Kids',
      fr: 'L’apprentissage des langues : élever un enfant bilingue',
      es: 'Adquisición temprana de idiomas: niños bilingües',
      ar: 'طلاقة اللغات لدى الأطفال: كيف تكسب طفلك لغة ثانية؟' },
    excerpt: {
      en: 'Discover how interactive immersion creates fluent, confident young communicators without grammar anxiety.',
      fr: 'Découvrez comment l’immersion ludique crée une réelle aisance linguistique sans blocage ni stress.',
      es: 'Descubre cómo la inmersión interactiva estimula la plasticidad cerebral para hablar con fluidez.',
      ar: 'اكتشف كيف تحول البيداغوجيا الحديثة اكتساب اللغات إلى رحلة بصرية ممتعة تبني طفلاً ثنائي اللغة بكل ثقة.' },
  },
  {
    slug: 'raising-young-scientists-secrets', date: '2026-07-26',
    emoji: '🔬', grad: 'linear-gradient(135deg,#00E676,#00B0FF)', tagColor: '#00C853', tagClass: 'science',
    tagL: { en: 'Science', fr: 'Sciences', es: 'Ciencias', ar: 'علوم' },
    cardTitle: {
      en: 'Raising Young Scientists: Critical Thinking Tips',
      fr: 'Éveiller le petit scientifique : esprit critique',
      es: 'Criando pequeños científicos: pensamiento crítico',
      ar: 'إيقاظ العالم الصغير: كيف تبني الفضول العلمي لدى طفلك؟' },
    excerpt: {
      en: 'Discover how to transform everyday questions into structural scientific thinking and cognitive independence.',
      fr: 'Découvrez comment transformer les questions quotidiennes de vos enfants en véritable raisonnement scientifique.',
      es: 'Descubre cómo transformar las preguntas cotidianas de tus hijos en pensamiento analítico y lógico.',
      ar: 'اكتشف كيف تحول أسئلة طفلك العفوية إلى منهجية علمية رصينة، وتبني في عقله مهارات التحليل والنقد المنطقي والذكاء الاستكشافي.' },
  },
  {
    slug: 'teaching-kids-coding-logic', date: '2026-07-25',
    emoji: '💻', grad: 'linear-gradient(135deg,#00B0FF,#0071BC)', tagColor: '#0071BC', tagClass: 'code',
    tagL: { en: 'Coding', fr: 'Code', es: 'Código', ar: 'برمجة' },
    cardTitle: {
      en: 'How to Teach Kids Coding Logic Before School',
      fr: 'Enseigner la logique du code aux enfants avant l’école',
      es: 'Cómo enseñar lógica de programación a niños antes de la escuela',
      ar: 'من التفكير المنطقي إلى الأكواد: كيف تُعلّم طفلك البرمجة مبكراً؟' },
    excerpt: {
      en: 'Discover how to introduce young minds to computational thinking through simple routines and visual playground environments.',
      fr: 'Découvrez comment initier les jeunes esprits à la pensée algorithmique à travers des rituels simples et des blocs interactifs.',
      es: 'Descubre cómo introducir a las mentes jóvenes en el pensamiento algorítmico mediante rutinas cotidianas y retos visuales.',
      ar: 'اكتشف كيف تقود عقل طفلك نحو التفكير الحوسبي عبر البرمجة بدون شاشات ثم الانتقال للألعاب والكتل البصرية الذكية.' },
  },
  {
    slug: 'gamification-in-education-secrets', date: '2026-07-24',
    emoji: '🎮', grad: 'linear-gradient(135deg,#FF7043,#E64A19)', tagColor: '#E64A19', tagClass: 'tips',
    tagL: { en: 'Parenting', fr: 'Parentalité', es: 'Crianza', ar: 'تربية' },
    cardTitle: {
      en: 'Gamification in Education: Play-Based Pedagogy Benefits',
      fr: 'Le ludification dans l’éducation : les bienfaits du jeu',
      es: 'Gamificación en la educación: el poder del juego',
      ar: 'التلعيب والتعلم القائم على اللعب: كيف تصاغ عقول الأطفال؟' },
    excerpt: {
      en: 'Discover the cognitive neuroscience behind play-based pedagogy and why gamification is the future of early education.',
      fr: 'Découvrez la neuroscience derrière la pédagogie par le jeu et pourquoi la ludification est l’avenir de l’éducation.',
      es: 'Conoce los secretos neurológicos de la pedagogía lúdica y cómo el juego impulsa la retención a largo plazo.',
      ar: 'اكتشف علم الأعصاب الإدراكي وراء التعلم القائم على اللعب، وكيف يفرز الدماغ الدوبامين ليتحول التعليم لشغف مستمر.' },
  },
  {
    slug: 'screen-time-guide-for-parents', date: '2026-07-23',
    emoji: '🛡️', grad: 'linear-gradient(135deg,#FFA726,#FB8C00)', tagColor: '#FB8C00', tagClass: 'tips',
    tagL: { en: 'Parenting', fr: 'Parentalité', es: 'Crianza', ar: 'تربية' },
    cardTitle: {
      en: 'The Parent Guide to Healthy Screen Time: Safe Apps',
      fr: 'Le guide parental du temps d\'écran sain : applis sûres',
      es: 'Guía para padres sobre el tiempo de pantalla: apps seguras',
      ar: 'دليل أولياء الأمور لتنظيم وقت الشاشة: تطبيقات آمنة ومفيدة' },
    excerpt: {
      en: 'Discover the scientific difference between passive consumption and active interactive learning for early child development.',
      fr: 'Découvrez la différence entre consommation passive et éveil interactif pour le bien-être de votre enfant.',
      es: 'Descubre la gran diferencia científica entre el consumo pasivo de pantallas y el aprendizaje interactivo infantil.',
      ar: 'اكتشف الفارق العلمي والجوهري بين الاستهلاك الرقمي السلبي والتعلم التفاعلي النشط لبناء مهارات الطفل وذكائه.' },
  },
  {
    slug: 'overcoming-math-anxiety-in-kids', date: '2026-07-22',
    emoji: '🧠', grad: 'linear-gradient(135deg,#9B7BFF,#7A4DFF)', tagColor: '#7A4DFF', tagClass: 'math',
    tagL: { en: 'Math', fr: 'Maths', es: 'Matemáticas', ar: 'رياضيات' },
    cardTitle: {
      en: 'Why Kids Hate Math & How to Fix It: Creative Strategies',
      fr: 'Pourquoi les enfants détestent les maths et comment y remédier',
      es: '¿Por qué los niños odian las matemáticas y cómo solucionarlo?',
      ar: 'لماذا يكره الأطفال الرياضيات؟ أسرار تحويل الخوف إلى شغف' },
    excerpt: {
      en: 'Discover the root causes of math fear and how to transform abstract numbers into an exciting, stress-free playground.',
      fr: 'Découvrez les causes de la peur des chiffres et transformez le calcul en un terrain de jeu captivant et sans stress.',
      es: 'Conoce las causas del temor numérico y descubre cómo transformar la aritmética en un juego interactivo libre de estrés.',
      ar: 'اكتشف الجذور النفسية لخوف الأطفال من الأرقام، وكيفية تحويل العمليات الحسابية الجافة إلى عوالم وتحديات ممتعة.' },
  },
  {
    slug: 'diy-home-science-experiments', date: '2026-07-21',
    emoji: '🧪', grad: 'linear-gradient(135deg,#4DB6AC,#00796B)', tagColor: '#00796B', tagClass: 'science',
    tagL: { en: 'Science', fr: 'Sciences', es: 'Ciencias', ar: 'علوم' },
    cardTitle: {
      en: 'Turn Your Home Into a Science Lab: Fostering Curiosity',
      fr: 'Transformez votre maison en labo de science : éveille la curiosité',
      es: 'Convierta su hogar en un laboratorio de ciencia: criar niños curiosos',
      ar: 'كيف تحول منزلك إلى مختبر علوم صغير؟ تنمية الشغف بالاكتشاف' },
    excerpt: {
      en: 'Discover how safe, everyday kitchen ingredients can be turned into magical hands-on physics and chemistry experiments.',
      fr: 'Découvrez comment de simples ingrédients de cuisine se transforment en expériences de physique et chimie magiques.',
      es: 'Descubre cómo ingredientes comestibles y seguros se transforman en experimentos de física y química mágicos para niños.',
      ar: 'اكتشف كيف يمكن لأدوات المطبخ البسيطة والآمنة أن تتحول إلى تجارب فيزيائية وكيميائية ساحرة تنمي ذكاء طفلك.' },
  },
  {
    slug: 'kids-language-learning-secrets', date: '2026-07-20',
    emoji: '🗣️', grad: 'linear-gradient(135deg,#4F83CC,#01579B)', tagColor: '#01579B', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'How Kids Learn Languages Naturally: Secrets to Fluency',
      fr: 'Comment les enfants apprennent les langues naturellement : les secrets',
      es: 'Cómo aprenden idiomas los niños de forma natural: secretos en casa',
      ar: 'كيف يتعلم الأطفال اللغات الأجنبية تلقائياً؟ أسرار التحدث بطلاقة' },
    excerpt: {
      en: 'Discover the neuroscience behind early language acquisition and how to create an effortless bilingual environment.',
      fr: 'Découvrez les mécanismes neuroscientifiques de l\'acquisition du langage et créez un environnement bilingue à la maison.',
      es: 'Conoce los secretos de la neurociencia y aprende cómo crear un ambiente interactivo y bilingüe en el hogar de forma sencilla.',
      ar: 'اكتشف حقائق علم الأعصاب وراء الاكتساب المبكر للغات، وكيفية تأسيس بيئة انغماس تفاعلية ممتعة للطفل داخل المنزل.' },
  },
  {
    slug: 'teaching-coding-kids-home', date: '2026-07-19',
    emoji: '💻', grad: 'linear-gradient(135deg,#9575CD,#5E35B1)', tagColor: '#5E35B1', tagClass: 'code',
    tagL: { en: 'Coding', fr: 'Codage', es: 'Código', ar: 'برمجة' },
    cardTitle: {
      en: 'The Ultimate Guide to Teaching Coding to Kids at Home',
      fr: 'Le guide ultime pour enseigner la programmation aux enfants à la maison',
      es: 'La guía definitiva para enseñar programación a los niños en casa',
      ar: 'الدليل الشامل لتعليم البرمجة للأطفال في المنزل بدون تعقيد' },
    excerpt: {
      en: 'Discover how unplugged games, algorithmic routines, and visual block tools can turn your child into an innovative digital creator.',
      fr: 'Découvrez comment les jeux physiques, les rituels et les blocs visuels transforment votre enfant en un créateur numérique innovant.',
      es: 'Descubre cómo los juegos sin pantallas, rutinas y bloques visuales convierten a tu hijo en un creador digital innovador.',
      ar: 'اكتشف كيف يمكن للألعاب الحركية، تنظيم الأنشطة اليومية والأدوات المرئية التفاعلية أن تحول طفلك إلى مبتكر وصانع رقمي ذكي.' },
  },
  {
    slug: 'positive-parenting-digital-age', date: '2026-07-18',
    emoji: '🌱', grad: 'linear-gradient(135deg,#FFD84D,#FF8A00)', tagColor: '#FF8A00', tagClass: 'tips',
    tagL: { en: 'Parenting', fr: 'Parentalité', es: 'Crianza', ar: 'تربية' },
    cardTitle: {
      en: 'Positive Parenting in the Digital Age: Raising Confident Learners',
      fr: "L'éducation positive à l'ère du numérique : élever des enfants épanouis",
      es: 'Crianza positiva en la era digital: cómo criar niños seguros y curiosos',
      ar: 'التربية الإيجابية في العصر الرقمي: دليل شامل لبناء شخصية طفلك وتنمية فضوله' },
    excerpt: {
      en: 'Discover how to foster emotional intelligence, manage screen time constructively, and turn digital play into active learning.',
      fr: 'Apprenez à nourrir l\'intelligence émotionnelle de votre enfant, à gérer les écrans et à transformer la technologie en moteur d\'apprentissage.',
      es: 'Descubre cómo fomentar la inteligencia emocional, gestionar el tiempo de pantalla y convertir el juego digital en aprendizaje activo.',
      ar: 'اكتشف الركائز الأساسية للتربية الإيجابية، وكيفية إدارة وقت الشاشات بذكاء وتحويل اللعب الرقمي إلى فرص لتعزيز ذكاء طفلك.' },
  },
  {
    slug: 'geography-importance-kids', date: '2026-07-17',
    emoji: '🌍', grad: 'linear-gradient(135deg,#4FC3F7,#0288D1)', tagColor: '#0288D1', tagClass: 'science',
    tagL: { en: 'Geography', fr: 'Géographie', es: 'Geografía', ar: 'جغرافيا' },
    cardTitle: {
      en: 'Why Geography Matters: How to Raise Global Citizens',
      fr: "L'importance de la géographie : éveiller un citoyen du monde",
      es: 'Por qué importa la geografía: criar ciudadanos del mundo',
      ar: 'لماذا الجغرافيا مهمة؟ تربية طفل منفتح على العالم' },
    excerpt: {
      en: 'Discover how maps, simple games, and playful apps can foster a natural curiosity about our interconnected world.',
      fr: "Découvrez comment les cartes, les jeux simples et les applications éducatives éveillent la curiosité de votre enfant pour le monde.",
      es: 'Descubre cómo los mapas, juegos sencillos y aplicaciones lúdicas despiertan el interés y respeto de tu hijo por el planeta.',
      ar: 'اكتشف كيف يمكن للخرائط، الألعاب البسيطة والتطبيقات التفاعلية أن تبني في عقل طفلك شغفاً حقيقياً باستكشاف العالم.' },
  },
  {
    slug: 'learn-chinese-kids', date: '2026-07-16',
    emoji: '🐼', grad: 'linear-gradient(135deg,#FFB84D,#E53935)', tagColor: '#E53935', tagClass: 'lang',
    tagL: { en: 'Languages', fr: 'Langues', es: 'Idiomas', ar: 'لغات' },
    cardTitle: {
      en: 'The Ultimate Guide to Teaching Chinese to Kids at Home',
      fr: 'Le guide complet pour enseigner le chinois aux enfants à la maison',
      es: 'La guía definitiva para enseñar chino a los niños en casa',
      ar: 'الدليل الشامل لتعليم اللغة الصينية للأطفال في المنزل بسهولة' },
    excerpt: {
      en: 'Discover how interactive games, simple songs, and playful apps can make learning Chinese (Mandarin) an exciting and easy adventure.',
      fr: 'Découvrez comment les jeux interactifs, les chansons et les applications font de l\'apprentissage du chinois une aventure passionnante.',
      es: 'Descubre cómo los juegos interactivos, canciones y aplicaciones lúdicas hacen que aprender chino mandarín sea fácil y divertido.',
      ar: 'اكتشف كيف يمكن للألعاب التفاعلية والأناشيد البسيطة أن تجعل تعلم اللغة الصينية تجربة ممتعة وسهلة لطفلك.' },
  },
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
