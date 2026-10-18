/* Kids Learning Hub — hand-written search snippets (2026-10).
   Without an entry here, build.js / build-apps.js fall back to the first
   paragraph cut at ~155 characters, which ends in "…" and gets fewer clicks.

   articles[slug].desc[lang]   → <meta name="description"> of the article
   articles[slug].title[lang]  → optional <title> override
   apps[slug].desc[lang] / .title[lang]  → same for the app pages        */
'use strict';

module.exports = {
  articles: {
    'how-to-teach-times-tables': { desc: {
      en: 'How to teach times tables step by step: the right order, a strategy for every table and a 4-week plan of ten minutes a day. By a maths teacher.',
      fr: 'Comment apprendre les tables de multiplication : le bon ordre, une stratégie pour chaque table et un plan de 4 semaines, 10 minutes par jour.',
      es: 'Cómo aprender las tablas de multiplicar paso a paso: el orden correcto, una estrategia para cada tabla y un plan de 4 semanas, 10 minutos al día.',
      ar: 'كيف يحفظ طفلك جداول الضرب خطوة بخطوة: الترتيب الصحيح، واستراتيجية لكل جدول، وخطة 4 أسابيع بعشر دقائق يوميًا.' } },
    'mental-math-tricks-for-kids': { desc: {
      en: '10 mental math tricks kids can learn today: make ten, near doubles, adding 9, round and adjust and more — with examples by age and free practice games.',
      fr: '10 astuces de calcul mental pour enfants : faire 10, les presque-doubles, ajouter 9, arrondir puis ajuster, avec des exemples par âge et des jeux gratuits.',
      es: '10 trucos de cálculo mental para niños: hacer 10, casi dobles, sumar 9, redondear y ajustar, con ejemplos por edad y juegos gratis para practicar.',
      ar: '10 حيل في الحساب الذهني للأطفال: إكمال العشرة وشبه الأضعاف وإضافة 9 والتقريب ثم التعديل، مع أمثلة حسب العمر وألعاب مجانية للتدريب.' } },
    'overcoming-math-anxiety-in-kids': { desc: {
      en: 'Is your child afraid of maths? Signs of math anxiety, what causes it, what to say and how to rebuild confidence step by step at home.',
      fr: 'Votre enfant a peur des maths ? Les signes de l’anxiété mathématique, ses causes, quoi lui dire et comment lui redonner confiance pas à pas.',
      es: '¿Tu hijo tiene miedo a las matemáticas? Señales de ansiedad matemática, sus causas, qué decirle y cómo devolverle la confianza paso a paso.',
      ar: 'هل يخاف طفلك من الرياضيات؟ علامات قلق الرياضيات وأسبابه، وماذا نقول له، وكيف يستعيد ثقته خطوة بخطوة.' } },
    'math-games-for-kids': { desc: {
      en: '12 fun math games for kids at home with cards, dice and everyday objects — sorted by age, no preparation needed, plus free online games.',
      fr: '12 jeux de maths amusants à faire à la maison avec des cartes, des dés et des objets du quotidien, classés par âge, sans préparation.',
      es: '12 juegos de matemáticas divertidos para casa con cartas, dados y objetos cotidianos, ordenados por edad y sin preparación.',
      ar: '12 لعبة رياضيات ممتعة في البيت بالورق والنرد وأشياء من الحياة اليومية، مرتّبة حسب العمر ودون أي تحضير.' } },
    'developing-spatial-reasoning-kids': { title: {
      en: 'Spatial Reasoning for Kids: Activities by Age to Build Geometry Skills | Kids Learning Hub' }, desc: {
      en: 'What spatial reasoning is, why it predicts success in maths, and easy activities by age — puzzles, blocks, maps and spatial words.',
      fr: 'Le raisonnement spatial expliqué aux parents : pourquoi il compte en maths et des activités faciles par âge : puzzles, cubes, cartes.',
      es: 'Qué es el razonamiento espacial, por qué importa en matemáticas y actividades fáciles por edad: puzles, bloques y mapas.',
      ar: 'ما هو التفكير المكاني ولماذا يؤثّر في النجاح في الرياضيات، مع أنشطة سهلة حسب العمر: ألغاز ومكعّبات وخرائط.' } },
    'developing-logical-thinking-kids': { desc: {
      en: 'How to develop logical thinking in children: what to expect at each age, everyday activities, logic puzzles and the one question that helps most.',
      fr: 'Comment développer la pensée logique de l’enfant : repères par âge, activités du quotidien, énigmes et la question qui aide le plus.',
      es: 'Cómo desarrollar el pensamiento lógico en los niños: qué esperar por edad, actividades diarias, acertijos y la pregunta que más ayuda.',
      ar: 'كيف ننمّي التفكير المنطقي عند الطفل: ما نتوقّعه في كل عمر، وأنشطة يومية، وألغاز منطقية، والسؤال الذي يساعد أكثر.' } },
    'easy-science-experiments-for-kids': { desc: {
      en: '10 easy science experiments for kids with things you already have at home — step-by-step instructions and the science explained simply.',
      fr: '10 expériences scientifiques faciles à faire à la maison avec ce que vous avez déjà, avec les étapes et l’explication scientifique simple.',
      es: '10 experimentos científicos fáciles para niños con cosas de casa, con los pasos y la explicación científica sencilla.',
      ar: '10 تجارب علمية سهلة للأطفال بأدوات موجودة في البيت، مع الخطوات وشرح علمي مبسّط لكل تجربة.' } },
    'raising-young-scientists-secrets': { desc: {
      en: 'How to raise a curious young scientist: five habits of a scientific mind, how to answer “why?” questions and simple fair tests at home.',
      fr: 'Élever un jeune scientifique : cinq habitudes de l’esprit scientifique, répondre aux « pourquoi ? » et faire des tests équitables à la maison.',
      es: 'Cómo criar a un pequeño científico: cinco hábitos de la mente científica, responder a los «¿por qué?» y pruebas justas en casa.',
      ar: 'كيف تربّي عالمًا صغيرًا: خمس عادات للعقل العلمي، وكيف تجيب عن أسئلة «لماذا؟»، وتجارب عادلة بسيطة في البيت.' } },
    'geography-importance-kids': { title: {
      en: 'The Importance of Geography for Kids — Why It Matters and How to Teach It | Kids Learning Hub',
      fr: 'L’importance de la géographie pour les enfants — et comment l’enseigner | Kids Learning Hub',
      es: 'La importancia de la geografía para los niños — y cómo enseñarla | Kids Learning Hub',
      ar: 'أهمية الجغرافيا للأطفال — ولماذا وكيف نعلّمها في البيت | Kids Learning Hub' }, desc: {
      en: 'Why geography matters for children far beyond capitals: orientation, maps, climate and culture — with activities by age you can do at home.',
      fr: 'Pourquoi la géographie est importante pour les enfants : s’orienter, lire une carte, comprendre le climat et les cultures, avec des activités par âge.',
      es: 'Por qué la geografía es importante para los niños: orientarse, leer mapas, entender el clima y las culturas, con actividades por edad.',
      ar: 'لماذا الجغرافيا مهمّة للأطفال أبعد من حفظ العواصم: التوجّه وقراءة الخرائط وفهم المناخ والثقافات، مع أنشطة حسب العمر.' } },
    'coding-for-kids-when-to-start': { desc: {
      en: 'When should kids start coding? A clear guide by age: unplugged games from 4, then the best free coding tools for each age.',
      fr: 'À quel âge commencer le code ? Un guide clair par âge : jeux débranchés dès 4 ans, puis les meilleurs outils gratuits selon l’âge.',
      es: '¿A qué edad empezar a programar? Guía por edades: juegos desenchufados desde los 4 años y las mejores herramientas gratis para cada edad.',
      ar: 'متى يبدأ الطفل تعلّم البرمجة؟ دليل حسب العمر: ألعاب دون حاسوب من 4 سنوات، ثم أفضل الأدوات المجانية لكل عمر.' } },
    'fostering-computational-thinking-kids': { desc: {
      en: 'Computational thinking explained for parents: decomposition, patterns, abstraction and algorithms — with screen-free activities for every age.',
      fr: 'La pensée informatique expliquée aux parents : décomposer, repérer des motifs, abstraire et créer des algorithmes, avec des activités sans écran.',
      es: 'El pensamiento computacional explicado a las familias: descomponer, patrones, abstracción y algoritmos, con actividades sin pantallas.',
      ar: 'التفكير الحاسوبي مشروحًا للآباء: التفكيك والأنماط والتجريد والخوارزميات، مع أنشطة دون شاشات لكل عمر.' } },
    'best-age-to-learn-a-language': { desc: {
      en: 'What is the best age to learn a second language? What research says, what to expect at each age, and how to help at home even if you don’t speak it.',
      fr: 'Quel est le meilleur âge pour apprendre une langue ? Ce que dit la recherche, les repères par âge et comment aider même sans parler la langue.',
      es: '¿Cuál es la mejor edad para aprender un idioma? Lo que dice la investigación, qué esperar por edad y cómo ayudar aunque no lo hables.',
      ar: 'ما أفضل سنّ لتعلّم لغة ثانية؟ ماذا تقول الأبحاث، وما المتوقّع في كل عمر، وكيف تساعد طفلك حتى إن لم تتكلّم اللغة.' } },
    'kids-language-learning-secrets': { desc: {
      en: 'How children really learn languages — the five stages, how to correct mistakes gently and 10-minute activities that work.',
      fr: 'Comment les enfants apprennent vraiment une langue : les cinq étapes, corriger les erreurs en douceur et des activités de 10 minutes.',
      es: 'Cómo aprenden de verdad los niños un idioma: las cinco etapas, cómo corregir sin cortar y actividades de 10 minutos.',
      ar: 'كيف يتعلّم الأطفال اللغات فعلًا: المراحل الخمس، وكيف نصحّح الأخطاء بلطف، وأنشطة من 10 دقائق.' } },
    'kids-english-games': { desc: {
      en: '10 fun games to help your child speak English at home — no flashcards needed, with useful phrases for every game and tips by age.',
      fr: '10 jeux amusants pour aider votre enfant à parler anglais à la maison, avec les phrases utiles pour chaque jeu et des conseils par âge.',
      es: '10 juegos divertidos para que tu hijo hable inglés en casa, con frases útiles para cada juego y consejos por edad.',
      ar: '10 ألعاب ممتعة تساعد طفلك على التحدّث بالإنجليزية في البيت، مع عبارات مفيدة لكل لعبة ونصائح حسب العمر.' } },
    'arabic-alphabet-for-kids': { desc: {
      en: 'How to teach the Arabic alphabet to kids: letter families instead of A–Z order, the vowels, a six-week plan, games and free tracing sheets.',
      fr: 'Apprendre l’alphabet arabe aux enfants : par familles de lettres, les voyelles, un plan de six semaines, des jeux et des fiches gratuites.',
      es: 'Cómo enseñar el alfabeto árabe a los niños: por familias de letras, las vocales, un plan de seis semanas, juegos y fichas gratis.',
      ar: 'كيف نعلّم الطفل الحروف العربية: بالعائلات لا بالترتيب الأبجدي، والحركات، وخطة ستة أسابيع، وألعاب وأوراق كتابة مجانية.' } },
    'learn-chinese-kids': { title: {
      fr: 'Apprendre le chinois aux enfants : tons, pinyin et caractères | Kids Learning Hub' }, desc: {
      en: 'How to teach Chinese to kids at home: the four tones, pinyin, characters with picture stories, first words and a simple weekly routine.',
      fr: 'Apprendre le chinois aux enfants à la maison : les quatre tons, le pinyin, les caractères en images, les premiers mots et une routine simple.',
      es: 'Cómo enseñar chino a los niños en casa: los cuatro tonos, el pinyin, los caracteres con dibujos, las primeras palabras y una rutina sencilla.',
      ar: 'كيف نعلّم الأطفال الصينية في البيت: النغمات الأربع والبينيين والحروف بقصص مصوّرة والكلمات الأولى وبرنامج أسبوعي بسيط.' } },
    'building-verbal-fluency-in-kids': { desc: {
      en: 'Help your child speak with confidence: how oral language develops, everyday conversation games and how to build vocabulary at home.',
      fr: 'Aider l’enfant à s’exprimer à l’oral avec aisance : comment se développe le langage, jeux de conversation et enrichissement du vocabulaire.',
      es: 'Ayuda a tu hijo a expresarse con soltura: cómo se desarrolla el lenguaje oral, juegos de conversación y cómo ampliar el vocabulario.',
      ar: 'ساعد طفلك على التعبير الشفهي بثقة: كيف تنمو اللغة الشفهية، وألعاب حوار يومية، وكيف نثري مفرداته في البيت.' } },
    'developing-emotional-intelligence-in-kids': { desc: {
      en: 'How to develop emotional intelligence in children: naming feelings, calming strategies, empathy and what to expect at each age.',
      fr: 'Développer l’intelligence émotionnelle de l’enfant : nommer les émotions, se calmer, l’empathie et les repères par âge.',
      es: 'Cómo desarrollar la inteligencia emocional en los niños: poner nombre a las emociones, calmarse, la empatía y qué esperar por edad.',
      ar: 'كيف ننمّي الذكاء العاطفي عند الطفل: تسمية المشاعر، وطرق التهدئة، والتعاطف، وما نتوقّعه في كل عمر.' } },
    'managing-stress-and-adhd-in-kids': { desc: {
      en: 'Signs of stress in children, calm routines that help, strategies for restless kids, and when to ask a professional about ADHD.',
      fr: 'Les signes de stress chez l’enfant, des routines apaisantes, des stratégies pour les enfants agités et quand consulter pour un TDAH.',
      es: 'Señales de estrés en los niños, rutinas que calman, estrategias para niños inquietos y cuándo consultar a un profesional por TDAH.',
      ar: 'علامات التوتّر عند الطفل، وروتين يومي مهدّئ، واستراتيجيات للطفل كثير الحركة، ومتى نستشير مختصًا بخصوص فرط الحركة.' } },
    'boosting-child-focus-and-attention': { desc: {
      en: 'How long can a child focus at each age? 8 attention and memory games, a calm workspace and daily habits that improve concentration.',
      fr: 'Combien de temps un enfant peut-il se concentrer selon son âge ? 8 jeux d’attention et de mémoire et des habitudes qui aident vraiment.',
      es: '¿Cuánto tiempo puede concentrarse un niño según su edad? 8 juegos de atención y memoria y hábitos diarios que mejoran la concentración.',
      ar: 'كم دقيقة يستطيع الطفل التركيز حسب عمره؟ 8 ألعاب للانتباه والذاكرة وعادات يومية تحسّن التركيز فعلًا.' } },
    'gamification-in-education-secrets': { desc: {
      en: 'Gamification in learning explained for parents: the game elements that motivate children, when rewards backfire and how to judge an app.',
      fr: 'La ludification expliquée aux parents : les éléments de jeu qui motivent, quand les récompenses se retournent contre vous et bien choisir une appli.',
      es: 'La gamificación explicada a las familias: qué elementos de juego motivan, cuándo los premios fallan y cómo elegir una buena app.',
      ar: 'التلعيب في التعلّم مشروحًا للآباء: عناصر اللعب التي تحفّز الطفل، ومتى تأتي المكافآت بنتيجة عكسية، وكيف تختار تطبيقًا جيدًا.' } },
    'positive-parenting-digital-age': { desc: {
      en: 'Positive parenting in the digital age: encouragement that builds confidence, calm discipline without shouting and family rules for screens.',
      fr: 'L’éducation positive à l’ère du numérique : des encouragements qui donnent confiance, une discipline sans cris et des règles d’écrans en famille.',
      es: 'Crianza positiva en la era digital: ánimos que dan confianza, disciplina sin gritos y normas familiares para las pantallas.',
      ar: 'التربية الإيجابية في العصر الرقمي: تشجيع يبني الثقة، وانضباط هادئ دون صراخ، وقواعد عائلية للشاشات.' } },
    'screen-time-safe-apps-for-kids': { title: {
      en: 'Screen Time for Kids by Age: Healthy Limits & How to Choose Safe Apps | Kids Learning Hub' }, desc: {
      en: 'How much screen time is OK at each age, what to watch instead of how long, and a 10-point checklist to choose safe apps for kids.',
      fr: 'Combien de temps d’écran selon l’âge, pourquoi le contenu compte plus que la durée, et 10 critères pour choisir des applis sûres.',
      es: 'Cuánto tiempo de pantalla según la edad, por qué importa más el contenido que la duración y 10 criterios para elegir apps seguras.',
      ar: 'كم ساعة شاشة مناسبة لكل عمر، ولماذا المحتوى أهمّ من المدّة، و10 معايير لاختيار تطبيقات آمنة للأطفال.' } },
  },

  apps: {
    mathokids: { desc: {
      en: 'MathoKids: the whole primary maths programme as an adventure — numbers, times tables, column methods and word problems. Free, offline, ages 4–12.',
      fr: 'MathoKids : tout le programme de maths du primaire en aventure — nombres, tables, opérations posées et problèmes. Gratuit, hors ligne, 4–12 ans.',
      es: 'MathoKids: todo el programa de matemáticas de primaria como una aventura — números, tablas, operaciones y problemas. Gratis y sin conexión.',
      ar: 'MathoKids: برنامج رياضيات الابتدائي كاملًا في مغامرة — الأعداد وجداول الضرب والعمليات العمودية والمسائل. مجاني ودون إنترنت.' } },
    scienkids: { desc: {
      en: 'ScienKids: a free science app for kids 4–12 — the human body, animals, plants, space and weather with games and safe home experiments.',
      fr: 'ScienKids : une appli de sciences gratuite pour les 4–12 ans — corps humain, animaux, plantes, espace et météo, avec jeux et expériences.',
      es: 'ScienKids: app de ciencias gratis para niños de 4 a 12 años — cuerpo humano, animales, plantas, espacio y tiempo, con juegos y experimentos.',
      ar: 'ScienKids: تطبيق علوم مجاني للأطفال من 4 إلى 12 سنة — جسم الإنسان والحيوانات والنباتات والفضاء والطقس، بالألعاب والتجارب.' } },
    codokids: { desc: {
      en: 'CodoKids: learn coding without typing — robot mazes, loops and conditions in 40 levels, plus the pioneers of computing. Free app, ages 4–13.',
      fr: 'CodoKids : apprendre à coder sans taper — labyrinthes de robots, boucles et conditions en 40 niveaux. Appli gratuite, 4–13 ans.',
      es: 'CodoKids: aprende a programar sin escribir — laberintos de robots, bucles y condiciones en 40 niveles. App gratis, de 4 a 13 años.',
      ar: 'CodoKids: تعلّم البرمجة دون كتابة — متاهات روبوت وحلقات وشروط في 40 مستوى. تطبيق مجاني لأعمار 4–13.' } },
    geokids: { title: {
      en: 'GeoKids — Free Geography App for Kids: Maps, Flags & Capitals | Kids Learning Hub' }, desc: {
      en: 'GeoKids: a free geography app for kids — continents, oceans, flags, capitals and a World Atlas, with quizzes and explorers. Ages 4–12.',
      fr: 'GeoKids : une appli de géographie gratuite — continents, océans, drapeaux, capitales et un atlas du monde, avec quiz. 4–12 ans.',
      es: 'GeoKids: app de geografía gratis para niños — continentes, océanos, banderas, capitales y un atlas mundial, con quizzes. De 4 a 12 años.',
      ar: 'GeoKids: تطبيق جغرافيا مجاني للأطفال — القارات والمحيطات والأعلام والعواصم وأطلس العالم، مع اختبارات. لأعمار 4–12.' } },
    englokids: { title: {
      en: 'EngloKids — Learn English for Kids, Free App 4–12 | Kids Learning Hub' }, desc: {
      en: 'EngloKids: a free app to learn English for kids — illustrated lessons, stories, dictation and games, with audio. Ages 4–12.',
      fr: 'EngloKids : une appli gratuite pour apprendre l’anglais aux enfants — leçons illustrées, histoires, dictées et jeux avec audio. 4–12 ans.',
      es: 'EngloKids: app gratis para aprender inglés para niños — lecciones ilustradas, cuentos, dictados y juegos con audio. De 4 a 12 años.',
      ar: 'EngloKids: تطبيق مجاني لتعليم الأطفال الإنجليزية — دروس مصوّرة وقصص وإملاء وألعاب مع الصوت. لأعمار 4–12.' } },
    francokids: { title: {
      en: 'FrancoKids — Learn French for Kids, Free App 4–12 | Kids Learning Hub' }, desc: {
      en: 'FrancoKids: a free app to learn French for kids — illustrated lessons, stories, dictation and games, with French audio. Ages 4–12.',
      fr: 'FrancoKids : une appli gratuite pour apprendre le français — leçons illustrées, histoires, dictées et jeux avec audio. 4–12 ans.',
      es: 'FrancoKids: app gratis para aprender francés para niños — lecciones ilustradas, cuentos, dictados y juegos con audio. De 4 a 12 años.',
      ar: 'FrancoKids: تطبيق مجاني لتعليم الأطفال الفرنسية — دروس مصوّرة وقصص وإملاء وألعاب مع الصوت. لأعمار 4–12.' } },
    spanokids: { title: {
      en: 'SpanoKids — Learn Spanish for Kids, Free App 4–12 | Kids Learning Hub' }, desc: {
      en: 'SpanoKids: a free app to learn Spanish for kids — illustrated lessons, stories, dictation and games, with Spanish audio. Ages 4–12.',
      fr: 'SpanoKids : une appli gratuite pour apprendre l’espagnol aux enfants — leçons illustrées, histoires, dictées et jeux avec audio.',
      es: 'SpanoKids: app gratis para aprender español — lecciones ilustradas, cuentos, dictados y juegos con audio. De 4 a 12 años.',
      ar: 'SpanoKids: تطبيق مجاني لتعليم الأطفال الإسبانية — دروس مصوّرة وقصص وإملاء وألعاب مع الصوت. لأعمار 4–12.' } },
    arabikids: { desc: {
      en: 'ArabiKids: a free app to learn Arabic for kids — the 28 letters with tracing, words, stories and games, with clear Arabic audio. Ages 4–12.',
      fr: 'ArabiKids : une appli gratuite pour apprendre l’arabe aux enfants — les 28 lettres à tracer, des mots, des histoires et des jeux avec audio.',
      es: 'ArabiKids: app gratis para aprender árabe para niños — las 28 letras para trazar, palabras, cuentos y juegos con audio. De 4 a 12 años.',
      ar: 'ArabiKids: تطبيق مجاني لتعليم الأطفال العربية — الحروف الثمانية والعشرون مع الكتابة، وكلمات وقصص وألعاب بصوت واضح.' } },
    germokids: { title: {
      en: 'GermoKids — Learn German for Kids, Free App 4–12 | Kids Learning Hub' }, desc: {
      en: 'GermoKids: a free app to learn German for kids — illustrated lessons, stories and games with German audio, from first words to sentences.',
      fr: 'GermoKids : une appli gratuite pour apprendre l’allemand aux enfants — leçons illustrées, histoires et jeux avec audio en allemand.',
      es: 'GermoKids: app gratis para aprender alemán para niños — lecciones ilustradas, cuentos y juegos con audio en alemán.',
      ar: 'GermoKids: تطبيق مجاني لتعليم الأطفال الألمانية — دروس مصوّرة وقصص وألعاب مع الصوت بالألمانية.' } },
    chinokids: { title: {
      en: 'ChinoKids — Learn Chinese for Kids: Pinyin, Tones & Characters | Kids Learning Hub' }, desc: {
      en: 'ChinoKids: a free app to learn Chinese for kids — pinyin, the four tones, characters and first words, with audio and games. Ages 4–12.',
      fr: 'ChinoKids : une appli gratuite pour apprendre le chinois aux enfants — pinyin, tons, caractères et premiers mots, avec audio et jeux.',
      es: 'ChinoKids: app gratis para aprender chino para niños — pinyin, tonos, caracteres y primeras palabras, con audio y juegos.',
      ar: 'ChinoKids: تطبيق مجاني لتعليم الأطفال الصينية — البينيين والنغمات والحروف والكلمات الأولى، مع الصوت والألعاب.' } },
  },
};
