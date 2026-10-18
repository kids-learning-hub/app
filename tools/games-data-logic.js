/* Kids Learning Hub — guide content for the language & logic browser games
   (play/). Used by tools/build-games.js. 4 languages per game.            */
'use strict';

module.exports = [

/* ── word match ────────────────────────────────────────────────────── */
{
  slug: 'word-match', emoji: '🗣️', ages: '5–12',
  meta: {
    en: { title: 'Word Match — Free Vocabulary Game in 5 Languages for Kids | Kids Learning Hub', desc: 'Free picture-word matching game: learn first words in English, French, Spanish, German or Arabic. Tap the right word, earn stars. Ages 5–12, no sign-up.' },
    fr: { title: 'Trouve le mot — jeu de vocabulaire gratuit en 5 langues | Kids Learning Hub', desc: 'Jeu gratuit pour associer images et mots : apprends les premiers mots en anglais, français, espagnol, allemand ou arabe. 5–12 ans, sans inscription.' },
    es: { title: 'Une la palabra — juego de vocabulario gratis en 5 idiomas | Kids Learning Hub', desc: 'Juego gratis para unir imágenes y palabras: aprende las primeras palabras en inglés, francés, español, alemán o árabe. De 5 a 12 años, sin registro.' },
    ar: { title: 'طابِق الكلمة — لعبة مفردات مجانية بخمس لغات للأطفال | Kids Learning Hub', desc: 'لعبة مجانية لمطابقة الصور والكلمات: تعلّم الكلمات الأولى بالإنجليزية أو الفرنسية أو الإسبانية أو الألمانية أو العربية. لأعمار 5–12.' },
  },
  lede: {
    en: 'Linking a picture directly to a word is one of the fastest ways to build vocabulary in a new language — the brain stores “🍎 = apple” without passing through translation. Word Match lets children choose the language they are learning (English, French, Spanish, German or Arabic) and then match everyday pictures to the right word. It is perfect for a few minutes of practice before school or as a warm-up before a lesson.',
    fr: 'Relier une image directement à un mot est l’une des façons les plus rapides d’enrichir son vocabulaire dans une nouvelle langue : le cerveau retient « 🍎 = apple » sans passer par la traduction. Trouve le mot permet de choisir la langue apprise (anglais, français, espagnol, allemand ou arabe) puis d’associer des images du quotidien au bon mot. Idéal pour quelques minutes avant l’école ou en échauffement avant une leçon.',
    es: 'Unir una imagen directamente con una palabra es una de las formas más rápidas de ampliar vocabulario en otro idioma: el cerebro guarda «🍎 = apple» sin pasar por la traducción. Une la palabra permite elegir el idioma que se aprende (inglés, francés, español, alemán o árabe) y unir dibujos cotidianos con la palabra correcta. Perfecto para unos minutos antes del cole o como calentamiento antes de una clase.',
    ar: 'ربط الصورة بالكلمة مباشرة من أسرع الطرق لبناء المفردات في لغة جديدة، فالدماغ يحفظ «🍎 = apple» دون المرور بالترجمة. ولعبة طابِق الكلمة تتيح للطفل اختيار اللغة التي يتعلّمها (الإنجليزية أو الفرنسية أو الإسبانية أو الألمانية أو العربية) ثم مطابقة صور من الحياة اليومية بالكلمة الصحيحة. وهي مثالية لدقائق من التدريب قبل المدرسة أو كتمهيد قبل الدرس.',
  },
  how: {
    en: ['Say each word aloud after choosing it — hearing and saying fixes it in memory.', 'Play the same language several days in a row before switching.', 'Point to the real objects at home and say their names in the new language.', 'For bilingual families, let your child “teach” you the words in the game.'],
    fr: ['Dites chaque mot à voix haute après l’avoir choisi : entendre et prononcer aide à le retenir.', 'Jouez plusieurs jours de suite dans la même langue avant d’en changer.', 'Montrez les vrais objets à la maison et nommez-les dans la nouvelle langue.', 'Dans les familles bilingues, laissez l’enfant vous « apprendre » les mots du jeu.'],
    es: ['Decid cada palabra en voz alta después de elegirla: oír y decir ayuda a recordarla.', 'Jugad varios días seguidos en el mismo idioma antes de cambiar.', 'Señalad los objetos reales en casa y nombradlos en el nuevo idioma.', 'En familias bilingües, dejad que el niño os «enseñe» las palabras del juego.'],
    ar: ['قولا كل كلمة بصوت عالٍ بعد اختيارها: السماع والنطق يثبّتانها في الذاكرة.', 'العبا باللغة نفسها عدة أيام متتالية قبل تغييرها.', 'أشيرا إلى الأشياء الحقيقية في البيت وسمّياها باللغة الجديدة.', 'في الأسر ثنائية اللغة، دع طفلك «يعلّمك» كلمات اللعبة.'],
  },
  faq: {
    en: [['Which languages can my child learn?', 'English, French, Spanish, German and Arabic. Choose the language at the start of each game.'], ['Does my child need to read?', 'A little. Pre-readers can play with an adult who reads the choices aloud; early readers practise reading at the same time.'], ['Is there a full app for each language?', 'Yes — EngloKids, FrancoKids, SpanoKids, GermoKids and ArabiKids offer lessons, stories and dictation, free on Google Play.']],
    fr: [['Quelles langues peut-on apprendre ?', 'Anglais, français, espagnol, allemand et arabe. On choisit la langue au début de chaque partie.'], ['L’enfant doit-il savoir lire ?', 'Un peu. Les non-lecteurs peuvent jouer avec un adulte qui lit les choix ; les apprentis lecteurs s’entraînent à lire en même temps.'], ['Existe-t-il une appli complète pour chaque langue ?', 'Oui : EngloKids, FrancoKids, SpanoKids, GermoKids et ArabiKids proposent leçons, histoires et dictées, gratuitement sur Google Play.']],
    es: [['¿Qué idiomas puede aprender mi hijo?', 'Inglés, francés, español, alemán y árabe. El idioma se elige al empezar cada partida.'], ['¿Necesita saber leer?', 'Un poco. Quien aún no lee puede jugar con un adulto que lea las opciones; los que empiezan a leer practican la lectura a la vez.'], ['¿Hay una app completa para cada idioma?', 'Sí: EngloKids, FrancoKids, SpanoKids, GermoKids y ArabiKids ofrecen lecciones, cuentos y dictados, gratis en Google Play.']],
    ar: [['ما اللغات التي يمكن لطفلي تعلّمها؟', 'الإنجليزية والفرنسية والإسبانية والألمانية والعربية. تُختار اللغة في بداية كل جولة.'], ['هل يحتاج طفلي إلى القراءة؟', 'قليلًا. يمكن لمن لا يقرأ بعد أن يلعب مع شخص بالغ يقرأ الخيارات، ويتدرّب المبتدئون في القراءة على القراءة في الوقت نفسه.'], ['هل يوجد تطبيق كامل لكل لغة؟', 'نعم: EngloKids وFrancoKids وSpanoKids وGermoKids وArabiKids تقدّم دروسًا وقصصًا وإملاء مجانًا على Google Play.']],
  },
},

/* ── memory match ──────────────────────────────────────────────────── */
{
  slug: 'memory', emoji: '🃏', ages: '4–10',
  meta: {
    en: { title: 'Memory Match — Free Online Memory Card Game for Kids | Kids Learning Hub', desc: 'Free memory game for kids: flip the cards, find the 6 pairs in as few moves as possible and earn stars. Trains visual memory and focus. Ages 4–10.' },
    fr: { title: 'Jeu de mémoire gratuit en ligne pour enfants (memory) | Kids Learning Hub', desc: 'Jeu de memory gratuit : retourne les cartes, trouve les 6 paires avec le moins de coups possible et gagne des étoiles. Entraîne la mémoire et l’attention. 4–10 ans.' },
    es: { title: 'Juego de memoria gratis online para niños (memorama) | Kids Learning Hub', desc: 'Juego de memoria gratis: voltea las cartas, encuentra las 6 parejas con los menos movimientos posibles y gana estrellas. Entrena memoria y atención. De 4 a 10 años.' },
    ar: { title: 'لعبة الذاكرة المجانية للأطفال — بطاقات الأزواج | Kids Learning Hub', desc: 'لعبة ذاكرة مجانية: اقلب البطاقات واعثر على الأزواج الستة بأقل عدد من المحاولات واربح النجوم. تدرّب الذاكرة والانتباه. لأعمار 4–10.' },
  },
  lede: {
    en: 'The classic memory card game is one of the best training grounds for working memory — the mental notepad children use to follow instructions, do mental maths and read longer words. Here, twelve cards hide six pairs of pictures. Children flip two at a time and try to remember where each picture was. Fewer moves earn more stars, which encourages them to slow down, look carefully and use a strategy instead of clicking at random.',
    fr: 'Le jeu de memory est l’un des meilleurs entraînements de la mémoire de travail, ce « bloc-notes mental » qui sert à suivre une consigne, calculer de tête ou lire des mots longs. Ici, douze cartes cachent six paires d’images. L’enfant en retourne deux à la fois et essaie de se rappeler où était chaque image. Moins de coups donnent plus d’étoiles, ce qui l’encourage à ralentir, bien observer et avoir une stratégie au lieu de cliquer au hasard.',
    es: 'El juego de memoria es uno de los mejores entrenamientos de la memoria de trabajo, ese «bloc de notas mental» que sirve para seguir instrucciones, calcular mentalmente o leer palabras largas. Aquí, doce cartas esconden seis parejas de dibujos. El niño voltea dos cada vez e intenta recordar dónde estaba cada dibujo. Menos movimientos dan más estrellas, lo que le anima a ir despacio, observar bien y tener una estrategia en lugar de pulsar al azar.',
    ar: 'لعبة الذاكرة الكلاسيكية من أفضل التمارين للذاكرة العاملة، أي «المفكّرة الذهنية» التي يستعملها الطفل لاتّباع التعليمات والحساب الذهني وقراءة الكلمات الطويلة. هنا تخفي اثنتا عشرة بطاقة ستة أزواج من الصور. يقلب الطفل بطاقتين في كل مرة ويحاول تذكّر مكان كل صورة. وكلما قلّت المحاولات زادت النجوم، فيتعلّم التمهّل والملاحظة الدقيقة واستعمال خطة بدل الضغط العشوائي.',
  },
  how: {
    en: ['Name each picture aloud when it is turned over: naming helps remember.', 'Teach a strategy: flip new cards rather than ones you have already seen.', 'Play side by side and take turns — children love beating an adult.', 'Compare the number of moves from one game to the next, not with other children.'],
    fr: ['Nommez chaque image à voix haute quand elle est retournée : nommer aide à retenir.', 'Apprenez une stratégie : retourner de nouvelles cartes plutôt que celles déjà vues.', 'Jouez côte à côte à tour de rôle : les enfants adorent battre un adulte.', 'Comparez le nombre de coups d’une partie à l’autre, pas avec les autres enfants.'],
    es: ['Nombrad cada dibujo en voz alta al voltearlo: nombrar ayuda a recordar.', 'Enseña una estrategia: voltear cartas nuevas en lugar de las ya vistas.', 'Jugad por turnos uno al lado del otro: a los niños les encanta ganar a un adulto.', 'Comparad los movimientos de una partida a otra, no con otros niños.'],
    ar: ['سمِّ كل صورة بصوت عالٍ حين تُقلب: فالتسمية تساعد على التذكّر.', 'علّمه خطة: اقلب بطاقات جديدة بدل التي رأيتها من قبل.', 'العبا جنبًا إلى جنب بالتناوب: الأطفال يحبّون التغلّب على الكبار.', 'قارنا عدد المحاولات من جولة إلى أخرى، لا مع الأطفال الآخرين.'],
  },
  faq: {
    en: [['What does a memory game train?', 'Working memory, visual attention and concentration — skills linked to reading, maths and following instructions.'], ['How many moves is a good score?', 'With six pairs, finishing in about 12 moves is excellent; under 18 is very good for young children.'], ['From what age?', 'Children from about 4 can play, especially with an adult; older children can aim for fewer moves.']],
    fr: [['Qu’entraîne un jeu de memory ?', 'La mémoire de travail, l’attention visuelle et la concentration — des capacités liées à la lecture, aux maths et au respect des consignes.'], ['Combien de coups est un bon score ?', 'Avec six paires, finir en environ 12 coups est excellent ; moins de 18 est très bien pour les petits.'], ['Dès quel âge ?', 'Dès 4 ans environ, surtout avec un adulte ; les plus grands peuvent viser moins de coups.']],
    es: [['¿Qué entrena un juego de memoria?', 'La memoria de trabajo, la atención visual y la concentración, habilidades ligadas a la lectura, las matemáticas y seguir instrucciones.'], ['¿Cuántos movimientos es una buena puntuación?', 'Con seis parejas, terminar en unos 12 movimientos es excelente; menos de 18 está muy bien para los pequeños.'], ['¿Desde qué edad?', 'Desde los 4 años aproximadamente, sobre todo con un adulto; los mayores pueden intentar hacer menos movimientos.']],
    ar: [['ماذا تدرّب لعبة الذاكرة؟', 'الذاكرة العاملة والانتباه البصري والتركيز، وهي مهارات مرتبطة بالقراءة والرياضيات واتّباع التعليمات.'], ['كم محاولة تُعدّ نتيجة جيدة؟', 'مع ستة أزواج، الإنهاء في نحو 12 محاولة ممتاز، وأقل من 18 جيد جدًا للصغار.'], ['من أي عمر؟', 'من نحو 4 سنوات، خاصة مع شخص بالغ، ويمكن للأكبر سنًّا السعي إلى عدد أقل من المحاولات.']],
  },
},

/* ── patterns ──────────────────────────────────────────────────────── */
{
  slug: 'patterns', emoji: '🧩', ages: '4–9',
  meta: {
    en: { title: 'What Comes Next? Free Pattern Game for Kids | Kids Learning Hub', desc: 'Free pattern game: find the rule in a sequence of colours and shapes, then choose the missing piece. Builds early algebra and logic. Ages 4–9.' },
    fr: { title: 'Que vient ensuite ? Jeu gratuit des suites logiques | Kids Learning Hub', desc: 'Jeu gratuit de suites logiques : trouve la règle d’une suite de couleurs et de formes, puis choisis l’élément manquant. Logique et pré-algèbre. 4–9 ans.' },
    es: { title: '¿Qué viene después? Juego gratis de series lógicas | Kids Learning Hub', desc: 'Juego gratis de series: encuentra la regla en una serie de colores y formas y elige la pieza que falta. Lógica y pre-álgebra. De 4 a 9 años.' },
    ar: { title: 'ما الذي يأتي بعد؟ لعبة مجانية للمتتاليات المنطقية | Kids Learning Hub', desc: 'لعبة متتاليات مجانية: اكتشف القاعدة في سلسلة من الألوان والأشكال واختر القطعة الناقصة. منطق وتمهيد للجبر. لأعمار 4–9.' },
  },
  lede: {
    en: 'Spotting a pattern and predicting what comes next is one of the first forms of mathematical thinking — the same skill that later helps with times tables, number sequences and algebra. In this game, children see a row of colours or shapes repeating in a rule (red-blue, red-blue… or star-star-heart…) and choose the piece that continues it. The rules grow from simple two-step patterns to longer and trickier ones.',
    fr: 'Repérer une régularité et prévoir la suite est l’une des premières formes de pensée mathématique : la même compétence aidera plus tard pour les tables, les suites de nombres et l’algèbre. Dans ce jeu, l’enfant voit une rangée de couleurs ou de formes qui se répète selon une règle (rouge-bleu, rouge-bleu… ou étoile-étoile-cœur…) et choisit l’élément qui la continue. Les règles vont de motifs simples à deux éléments à des suites plus longues et plus subtiles.',
    es: 'Descubrir un patrón y predecir lo que sigue es una de las primeras formas de pensamiento matemático: la misma habilidad ayudará después con las tablas, las series numéricas y el álgebra. En este juego, el niño ve una fila de colores o figuras que se repite según una regla (rojo-azul, rojo-azul… o estrella-estrella-corazón…) y elige la pieza que la continúa. Las reglas van de patrones simples de dos elementos a series más largas y difíciles.',
    ar: 'ملاحظة النمط وتوقّع ما يليه من أوائل أشكال التفكير الرياضي، وهي المهارة نفسها التي تساعد لاحقًا في جداول الضرب ومتتاليات الأعداد والجبر. في هذه اللعبة يرى الطفل صفًّا من الألوان أو الأشكال يتكرّر وفق قاعدة (أحمر-أزرق، أحمر-أزرق… أو نجمة-نجمة-قلب…) ويختار القطعة التي تكمله. وتتدرّج القواعد من أنماط بسيطة من عنصرين إلى متتاليات أطول وأصعب.',
  },
  how: {
    en: ['Ask your child to read the pattern aloud: “red, blue, red, blue…”.', 'Ask them to find the part that repeats and to show it with a finger.', 'Make patterns at home with beads, blocks, claps and stamps.', 'Invite your child to invent a pattern for you to continue.'],
    fr: ['Demandez à l’enfant de lire la suite à voix haute : « rouge, bleu, rouge, bleu… ».', 'Demandez-lui de repérer la partie qui se répète et de la montrer du doigt.', 'Créez des suites à la maison avec des perles, des cubes, des claquements de mains.', 'Invitez l’enfant à inventer une suite que vous devrez continuer.'],
    es: ['Pide a tu hijo que lea la serie en voz alta: «rojo, azul, rojo, azul…».', 'Pídele que encuentre la parte que se repite y la señale con el dedo.', 'Cread series en casa con cuentas, bloques o palmadas.', 'Invítale a inventar una serie para que tú la continúes.'],
    ar: ['اطلب من طفلك أن يقرأ النمط بصوت عالٍ: «أحمر، أزرق، أحمر، أزرق…».', 'اطلب منه أن يجد الجزء الذي يتكرّر وأن يشير إليه بإصبعه.', 'اصنعا أنماطًا في البيت بالخرز أو المكعّبات أو التصفيق.', 'ادعُه إلى اختراع نمط لتكمله أنت.'],
  },
  faq: {
    en: [['Why are patterns important in maths?', 'Recognising patterns is the root of algebraic thinking: finding a rule and using it to predict. It also supports counting in steps and times tables.'], ['From what age?', 'From about 4 with simple two-element patterns. By 7–9, children can handle longer and mixed rules.'], ['Is there a printable version?', 'Our free “Missing number” worksheets continue the idea with number sequences.']],
    fr: [['Pourquoi les suites sont-elles importantes en maths ?', 'Reconnaître une régularité est à la racine de la pensée algébrique : trouver une règle et s’en servir pour prévoir. Cela aide aussi à compter de n en n et aux tables.'], ['Dès quel âge ?', 'Vers 4 ans avec des suites simples à deux éléments. Vers 7–9 ans, l’enfant gère des règles plus longues et mélangées.'], ['Existe-t-il une version à imprimer ?', 'Nos fiches gratuites « Nombre manquant » prolongent l’idée avec des suites de nombres.']],
    es: [['¿Por qué son importantes las series en matemáticas?', 'Reconocer patrones es la raíz del pensamiento algebraico: encontrar una regla y usarla para predecir. También ayuda a contar de n en n y con las tablas.'], ['¿Desde qué edad?', 'Desde los 4 años con series sencillas de dos elementos. Hacia los 7–9, los niños manejan reglas más largas y mezcladas.'], ['¿Hay versión para imprimir?', 'Nuestras fichas gratis «Número que falta» continúan la idea con series numéricas.']],
    ar: [['لماذا الأنماط مهمّة في الرياضيات؟', 'التعرّف على الأنماط أصل التفكير الجبري: إيجاد قاعدة واستعمالها للتوقّع. كما يساعد على العدّ بخطوات وعلى جداول الضرب.'], ['من أي عمر؟', 'من نحو 4 سنوات مع أنماط بسيطة من عنصرين. وفي 7–9 سنوات يتعامل الطفل مع قواعد أطول ومختلطة.'], ['هل توجد نسخة للطباعة؟', 'أوراق «العدد الناقص» المجانية تواصل الفكرة نفسها بمتتاليات الأعداد.']],
  },
},

/* ── odd one out ───────────────────────────────────────────────────── */
{
  slug: 'odd-one-out', emoji: '🧐', ages: '5–10',
  meta: {
    en: { title: 'Odd One Out — Free Online Logic Game for Kids | Kids Learning Hub', desc: 'Free logic game: three belong together, one does not. Spot the odd one out among pictures and numbers and learn the rule. Ages 5–10, no sign-up.' },
    fr: { title: 'L’intrus — jeu de logique gratuit en ligne pour enfants | Kids Learning Hub', desc: 'Jeu de logique gratuit : trois éléments vont ensemble, un seul est l’intrus. Trouve-le parmi des images et des nombres et découvre la règle. 5–10 ans.' },
    es: { title: '¿Cuál sobra? Juego de lógica gratis online para niños | Kids Learning Hub', desc: 'Juego de lógica gratis: tres van juntos y uno sobra. Encuéntralo entre dibujos y números y descubre la regla. De 5 a 10 años, sin registro.' },
    ar: { title: 'الدخيل — لعبة منطق مجانية للأطفال على الإنترنت | Kids Learning Hub', desc: 'لعبة منطق مجانية: ثلاثة تنتمي إلى مجموعة واحدة وواحد مختلف. اعثر عليه بين الصور والأعداد واكتشف القاعدة. لأعمار 5–10.' },
  },
  lede: {
    en: 'Sorting things into groups and explaining why one does not belong is at the heart of logical thinking. In Odd One Out, children see four pictures — three fruits and a vehicle, three balls and a musical instrument — and tap the one that is different. After seven picture rounds come number rounds: three even numbers and an odd one, three multiples of ten and an intruder. After every answer, the game shows the rule, so children learn the categories as they play.',
    fr: 'Classer des éléments et expliquer pourquoi l’un n’a pas sa place est au cœur de la pensée logique. Dans L’intrus, l’enfant voit quatre images — trois fruits et un véhicule, trois ballons et un instrument — et touche celle qui est différente. Après sept manches d’images viennent des manches de nombres : trois nombres pairs et un impair, trois multiples de dix et un intrus. Après chaque réponse, le jeu affiche la règle : l’enfant apprend les catégories en jouant.',
    es: 'Clasificar cosas y explicar por qué una no encaja es el corazón del pensamiento lógico. En ¿Cuál sobra?, el niño ve cuatro dibujos —tres frutas y un vehículo, tres pelotas y un instrumento— y toca el que es diferente. Tras siete rondas de dibujos llegan rondas de números: tres pares y un impar, tres múltiplos de diez y un intruso. Después de cada respuesta el juego muestra la regla, así que el niño aprende las categorías jugando.',
    ar: 'تصنيف الأشياء وشرح سبب عدم انتماء أحدها إلى المجموعة هو جوهر التفكير المنطقي. في لعبة الدخيل يرى الطفل أربع صور — ثلاث فواكه ووسيلة نقل، أو ثلاث كرات وآلة موسيقية — ويلمس الصورة المختلفة. وبعد سبع جولات بالصور تأتي جولات بالأعداد: ثلاثة أعداد زوجية وعدد فردي، أو ثلاثة مضاعفات للعشرة ودخيل. وبعد كل جواب تعرض اللعبة القاعدة، فيتعلّم الطفل التصنيفات وهو يلعب.',
  },
  how: {
    en: ['After each answer, ask your child to say the rule: “they are all fruits”.', 'Accept a different reason if it is logical — then discuss which rule is the best.', 'Play “odd one out” in the kitchen or in the car with real objects and words.', 'For number rounds, revise even and odd numbers beforehand.'],
    fr: ['Après chaque réponse, faites dire la règle : « ce sont tous des fruits ».', 'Acceptez une autre raison si elle est logique, puis discutez de la meilleure règle.', 'Jouez à « l’intrus » dans la cuisine ou en voiture avec de vrais objets et des mots.', 'Pour les manches de nombres, révisez avant les nombres pairs et impairs.'],
    es: ['Después de cada respuesta, pide que diga la regla: «todos son frutas».', 'Acepta otra razón si es lógica y luego hablad de cuál es la mejor regla.', 'Jugad a «cuál sobra» en la cocina o en el coche con objetos y palabras reales.', 'Para las rondas de números, repasad antes los pares y los impares.'],
    ar: ['بعد كل جواب اطلب منه أن يقول القاعدة: «كلها فواكه».', 'اقبل سببًا آخر إن كان منطقيًا، ثم ناقشا أيّ القواعد أفضل.', 'العبا «الدخيل» في المطبخ أو في السيارة بأشياء وكلمات حقيقية.', 'قبل جولات الأعداد، راجعا الأعداد الزوجية والفردية.'],
  },
  faq: {
    en: [['What skills does Odd One Out build?', 'Classification, vocabulary for categories, attention to detail and explaining reasons — all key parts of logical reasoning.'], ['Can there be two correct answers?', 'The game is designed so that only one item breaks the group, but discussing other possible reasons is a great conversation.'], ['From what age?', 'Picture rounds suit children from 5; number rounds are best from about 7.']],
    fr: [['Quelles compétences développe L’intrus ?', 'La classification, le vocabulaire des catégories, l’attention aux détails et la justification : des éléments clés du raisonnement logique.'], ['Peut-il y avoir deux bonnes réponses ?', 'Le jeu est conçu pour qu’un seul élément casse le groupe, mais discuter d’autres raisons possibles est une très bonne conversation.'], ['Dès quel âge ?', 'Les manches d’images conviennent dès 5 ans ; les manches de nombres plutôt vers 7 ans.']],
    es: [['¿Qué habilidades desarrolla?', 'La clasificación, el vocabulario de categorías, la atención al detalle y la justificación: piezas clave del razonamiento lógico.'], ['¿Puede haber dos respuestas correctas?', 'El juego está pensado para que solo un elemento rompa el grupo, pero hablar de otras razones posibles es una conversación estupenda.'], ['¿Desde qué edad?', 'Las rondas de dibujos sirven desde los 5 años; las de números, mejor hacia los 7.']],
    ar: [['ما المهارات التي تنمّيها لعبة الدخيل؟', 'التصنيف ومفردات الفئات والانتباه إلى التفاصيل وتعليل الإجابات، وكلها عناصر أساسية في التفكير المنطقي.'], ['هل يمكن أن يكون هناك جوابان صحيحان؟', 'صُمّمت اللعبة بحيث يكسر عنصر واحد فقط المجموعة، لكن مناقشة أسباب أخرى ممكنة حوار رائع.'], ['من أي عمر؟', 'جولات الصور مناسبة من 5 سنوات، وجولات الأعداد أفضل من نحو 7 سنوات.']],
  },
},

/* ── copy the lights ───────────────────────────────────────────────── */
{
  slug: 'copy-the-lights', emoji: '💡', ages: '4–12',
  meta: {
    en: { title: 'Copy the Lights — Free Memory Sequence Game for Kids | Kids Learning Hub', desc: 'Free memory and focus game: watch the animals light up, then tap them in the same order. The sequence grows each round. Ages 4–12, no install.' },
    fr: { title: 'Répète les lumières — jeu de mémoire de séquences gratuit | Kids Learning Hub', desc: 'Jeu gratuit de mémoire et d’attention : regarde les animaux s’allumer puis touche-les dans le même ordre. La suite s’allonge à chaque manche. 4–12 ans.' },
    es: { title: 'Copia las luces — juego gratis de memoria de secuencias | Kids Learning Hub', desc: 'Juego gratis de memoria y atención: mira cómo se iluminan los animales y tócalos en el mismo orden. La secuencia crece en cada ronda. De 4 a 12 años.' },
    ar: { title: 'كرّر الأضواء — لعبة مجانية لتذكّر المتتاليات | Kids Learning Hub', desc: 'لعبة مجانية للذاكرة والانتباه: شاهد الحيوانات وهي تضيء ثم المسها بالترتيب نفسه. تطول السلسلة في كل جولة. لأعمار 4–12.' },
  },
  lede: {
    en: 'Holding a sequence in mind and repeating it in order trains working memory and attention, the same abilities children use to follow multi-step instructions and to read and calculate. In Copy the Lights, four animal buttons light up with their own sound; children watch, then tap them back in the same order. Each round adds one more step, from two up to eleven, with three lives to keep the game encouraging.',
    fr: 'Garder une séquence en tête et la répéter dans l’ordre entraîne la mémoire de travail et l’attention, celles que l’enfant utilise pour suivre une consigne en plusieurs étapes, lire et calculer. Dans Répète les lumières, quatre boutons-animaux s’allument avec leur propre son ; l’enfant observe puis les touche dans le même ordre. Chaque manche ajoute une étape, de deux à onze, avec trois vies pour rester encourageant.',
    es: 'Mantener una secuencia en la mente y repetirla en orden entrena la memoria de trabajo y la atención, las mismas capacidades que el niño usa para seguir instrucciones de varios pasos, leer y calcular. En Copia las luces, cuatro botones de animales se iluminan con su propio sonido; el niño observa y después los toca en el mismo orden. Cada ronda añade un paso, de dos a once, con tres vidas para que siga siendo motivador.',
    ar: 'الاحتفاظ بسلسلة في الذهن وتكرارها بالترتيب يدرّب الذاكرة العاملة والانتباه، وهي القدرات التي يستعملها الطفل لاتّباع تعليمات من عدة خطوات وللقراءة والحساب. في كرّر الأضواء تضيء أربعة أزرار على شكل حيوانات، لكل منها صوته؛ يشاهد الطفل ثم يلمسها بالترتيب نفسه. وتضيف كل جولة خطوة جديدة، من اثنتين إلى إحدى عشرة، مع ثلاث محاولات حتى تبقى اللعبة مشجّعة.',
  },
  how: {
    en: ['Say the animals out loud while they light up: “cat, frog, cat…” — naming helps memory.', 'Turn the sound on: each animal has its own note, which gives the brain a second clue.', 'Celebrate the longest sequence reached rather than the mistakes.', 'Older children can try to remember the sequence with eyes closed, by sound only.'],
    fr: ['Dites les animaux à voix haute pendant qu’ils s’allument : « chat, grenouille, chat… » — nommer aide la mémoire.', 'Activez le son : chaque animal a sa note, ce qui donne au cerveau un deuxième indice.', 'Félicitez la plus longue suite atteinte plutôt que de pointer les erreurs.', 'Les plus grands peuvent essayer de retenir la suite les yeux fermés, au son seulement.'],
    es: ['Decid los animales en voz alta mientras se iluminan: «gato, rana, gato…»; nombrar ayuda a recordar.', 'Activa el sonido: cada animal tiene su nota, lo que da al cerebro una segunda pista.', 'Celebrad la secuencia más larga conseguida en lugar de los errores.', 'Los mayores pueden intentar recordar la secuencia con los ojos cerrados, solo por el sonido.'],
    ar: ['قولا أسماء الحيوانات بصوت عالٍ وهي تضيء: «قطّ، ضفدع، قطّ…»، فالتسمية تساعد الذاكرة.', 'شغّل الصوت: لكل حيوان نغمته، وهذا يعطي الدماغ دليلًا ثانيًا.', 'احتفلا بأطول سلسلة تمّ بلوغها بدل التركيز على الأخطاء.', 'يمكن للأطفال الأكبر محاولة تذكّر السلسلة بعيون مغمضة، بالصوت فقط.'],
  },
  faq: {
    en: [['What is working memory?', 'It is the ability to hold and use information for a short time — like remembering a phone number while dialling. It supports reading, maths and following instructions.'], ['What is a good result?', 'Remembering 5 to 6 steps is typical around age 7; adults usually manage about 7. Every child improves with practice.'], ['Is there more to read about memory and focus?', 'Yes — see our guide on boosting children’s focus and attention in the Parents section.']],
    fr: [['Qu’est-ce que la mémoire de travail ?', 'C’est la capacité de garder et d’utiliser une information un court instant, comme retenir un numéro en le composant. Elle soutient la lecture, les maths et le suivi des consignes.'], ['Qu’est-ce qu’un bon résultat ?', 'Retenir 5 à 6 étapes est courant vers 7 ans ; un adulte en retient environ 7. Chaque enfant progresse avec l’entraînement.'], ['Y a-t-il plus à lire sur la mémoire et l’attention ?', 'Oui : consultez notre guide sur la concentration et l’attention dans l’espace Parents.']],
    es: [['¿Qué es la memoria de trabajo?', 'Es la capacidad de mantener y usar información durante poco tiempo, como recordar un número de teléfono mientras se marca. Apoya la lectura, las matemáticas y seguir instrucciones.'], ['¿Qué es un buen resultado?', 'Recordar 5 o 6 pasos es habitual hacia los 7 años; un adulto suele llegar a unos 7. Todos mejoran con práctica.'], ['¿Hay más para leer sobre memoria y atención?', 'Sí: consulta nuestra guía sobre concentración y atención en la sección para padres.']],
    ar: [['ما الذاكرة العاملة؟', 'هي القدرة على الاحتفاظ بمعلومة واستعمالها لوقت قصير، مثل تذكّر رقم هاتف أثناء طلبه. وهي تدعم القراءة والرياضيات واتّباع التعليمات.'], ['ما النتيجة الجيدة؟', 'تذكّر 5 إلى 6 خطوات أمر شائع نحو سنّ السابعة، والبالغ يتذكّر عادة نحو 7. وكل طفل يتحسّن بالتدريب.'], ['هل يوجد المزيد عن الذاكرة والتركيز؟', 'نعم: اطّلع على دليلنا عن تنمية التركيز والانتباه في ركن الآباء.']],
  },
},

/* ── robot code ────────────────────────────────────────────────────── */
{
  slug: 'robot-code', emoji: '🤖', ages: '6–12',
  meta: {
    en: { title: 'Robot Code — Free Online Coding Game for Kids (No Typing) | Kids Learning Hub', desc: 'Free coding game for kids: plan a sequence of arrow commands, press Run and guide the robot to the star. 10 levels of algorithms and debugging. Ages 6–12.' },
    fr: { title: 'Code le robot — jeu de programmation gratuit pour enfants | Kids Learning Hub', desc: 'Jeu de codage gratuit : prépare une suite de flèches, appuie sur Lancer et guide le robot jusqu’à l’étoile. 10 niveaux d’algorithmes et de débogage. 6–12 ans.' },
    es: { title: 'Programa el robot — juego de programación gratis para niños | Kids Learning Hub', desc: 'Juego de programación gratis: planea una secuencia de flechas, pulsa Ejecutar y lleva el robot hasta la estrella. 10 niveles de algoritmos y depuración. De 6 a 12 años.' },
    ar: { title: 'برمج الروبوت — لعبة برمجة مجانية للأطفال دون كتابة | Kids Learning Hub', desc: 'لعبة برمجة مجانية: خطّط لسلسلة من الأسهم واضغط تشغيل وأوصل الروبوت إلى النجمة. 10 مستويات من الخوارزميات وتصحيح الأخطاء. لأعمار 6–12.' },
  },
  lede: {
    en: 'Coding is not about typing strange words — it is about planning steps, testing them and fixing what goes wrong. Robot Code teaches exactly that with arrows. Children write a short program (up, right, right, down…), press Run and watch the robot follow it. If it hits a rock or stops too early, they find the wrong step and fix it: that is debugging. Ten levels lead from straight lines to real mazes.',
    fr: 'Programmer, ce n’est pas taper des mots étranges : c’est planifier des étapes, les tester et corriger ce qui ne va pas. Code le robot enseigne exactement cela avec des flèches. L’enfant écrit un petit programme (haut, droite, droite, bas…), appuie sur Lancer et regarde le robot l’exécuter. S’il heurte un rocher ou s’arrête trop tôt, l’enfant cherche l’étape fausse et la corrige : c’est le débogage. Dix niveaux mènent des lignes droites à de vrais labyrinthes.',
    es: 'Programar no es escribir palabras raras: es planear pasos, probarlos y arreglar lo que falla. Programa el robot enseña justo eso con flechas. El niño escribe un pequeño programa (arriba, derecha, derecha, abajo…), pulsa Ejecutar y ve cómo el robot lo sigue. Si choca con una roca o se para antes de tiempo, busca el paso equivocado y lo corrige: eso es depurar. Diez niveles van de líneas rectas a auténticos laberintos.',
    ar: 'البرمجة ليست كتابة كلمات غريبة، بل تخطيط للخطوات واختبارها وإصلاح ما يتعطّل. ولعبة برمج الروبوت تعلّم ذلك بالضبط بالأسهم. يكتب الطفل برنامجًا قصيرًا (أعلى، يمين، يمين، أسفل…) ويضغط «تشغيل» ويشاهد الروبوت ينفّذه. وإن اصطدم بصخرة أو توقّف مبكرًا، يبحث الطفل عن الخطوة الخاطئة ويصحّحها: هذا هو تصحيح الأخطاء. وتقود عشرة مستويات من الخطوط المستقيمة إلى متاهات حقيقية.',
  },
  how: {
    en: ['Before pressing Run, ask your child to point along the path with a finger and count the squares.', 'Treat each crash as information, not failure: “Which step went wrong?”', 'Try “unplugged” coding at home: give each other arrow instructions to cross the room.', 'Ask older children to find a shorter program for a level they have already solved.'],
    fr: ['Avant de lancer, demandez à l’enfant de suivre le chemin du doigt et de compter les cases.', 'Faites de chaque collision une information, pas un échec : « Quelle étape s’est trompée ? »', 'Essayez le codage « débranché » : donnez-vous des consignes en flèches pour traverser la pièce.', 'Demandez aux plus grands un programme plus court pour un niveau déjà réussi.'],
    es: ['Antes de ejecutar, pide a tu hijo que siga el camino con el dedo y cuente las casillas.', 'Trata cada choque como información, no como fracaso: «¿Qué paso falló?»', 'Probad la programación «desenchufada»: daos instrucciones con flechas para cruzar la habitación.', 'Pide a los mayores un programa más corto para un nivel ya resuelto.'],
    ar: ['قبل الضغط على تشغيل، اطلب من طفلك أن يتتبّع الطريق بإصبعه ويعدّ المربعات.', 'اعتبر كل اصطدام معلومة لا فشلًا: «أيّ خطوة كانت خاطئة؟»', 'جرّبا البرمجة «دون حاسوب»: أعطيا بعضكما تعليمات بالأسهم لعبور الغرفة.', 'اطلب من الأكبر سنًّا برنامجًا أقصر لمستوى سبق حلّه.'],
  },
  faq: {
    en: [['Is this real coding?', 'Yes. Sequences of commands, algorithms and debugging are the core ideas of programming, used in every language from Scratch to Python.'], ['Does my child need to read?', 'No. The commands are arrows, so even pre-readers can play with a little help.'], ['What comes next after this game?', 'Our free CodoKids app continues with loops, conditions and 40 robot-maze levels, and our coding guide explains when and how to start.']],
    fr: [['Est-ce vraiment de la programmation ?', 'Oui. Les suites d’instructions, les algorithmes et le débogage sont les idées centrales de la programmation, de Scratch à Python.'], ['L’enfant doit-il savoir lire ?', 'Non. Les commandes sont des flèches, donc même les non-lecteurs peuvent jouer avec un peu d’aide.'], ['Et après ce jeu ?', 'Notre appli gratuite CodoKids continue avec les boucles, les conditions et 40 labyrinthes de robots, et notre guide explique quand et comment commencer à coder.']],
    es: [['¿Es programación de verdad?', 'Sí. Las secuencias de órdenes, los algoritmos y la depuración son las ideas centrales de la programación, de Scratch a Python.'], ['¿Necesita saber leer?', 'No. Las órdenes son flechas, así que incluso los que no leen pueden jugar con un poco de ayuda.'], ['¿Qué viene después?', 'Nuestra app gratis CodoKids sigue con bucles, condiciones y 40 laberintos de robots, y nuestra guía explica cuándo y cómo empezar a programar.']],
    ar: [['هل هذه برمجة حقيقية؟', 'نعم. سلاسل الأوامر والخوارزميات وتصحيح الأخطاء هي الأفكار الأساسية للبرمجة، من Scratch إلى Python.'], ['هل يحتاج طفلي إلى القراءة؟', 'لا. الأوامر أسهم، فحتى من لا يقرأ بعد يمكنه اللعب ببعض المساعدة.'], ['وماذا بعد هذه اللعبة؟', 'تطبيقنا المجاني CodoKids يواصل مع الحلقات والشروط و40 متاهة روبوت، ودليلنا يشرح متى وكيف يبدأ الطفل البرمجة.']],
  },
},

];
