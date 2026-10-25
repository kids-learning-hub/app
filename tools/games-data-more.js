/* Kids Learning Hub — guide content for the October 2026 browser games:
   typing, balloon words, tic-tac-toe, online colouring, sliding puzzle,
   maze. Used by tools/build-games.js. 4 languages per game.             */
'use strict';

module.exports = [

/* ── typing game ───────────────────────────────────────────────────── */
{
  slug: 'typing-game', emoji: '⌨️', ages: '6–12',
  meta: {
    en: { title: 'Typing Game for Kids — Keyboard Hero, Free Online | Kids Learning Hub', desc: 'Free typing game for kids: learn the home row, all the letters, then real words, with an on-screen keyboard that shows the next key. QWERTY, AZERTY and Arabic layouts. No sign-up.' },
    fr: { title: 'Jeu pour apprendre à taper au clavier — gratuit | Kids Learning Hub', desc: 'Jeu de frappe gratuit pour enfants : rangée de repos, toutes les lettres puis de vrais mots, avec un clavier à l’écran qui montre la touche suivante. AZERTY, QWERTY et arabe. Sans inscription.' },
    es: { title: 'Juego de mecanografía para niños — gratis en línea | Kids Learning Hub', desc: 'Juego gratis para aprender a escribir con el teclado: fila guía, todas las letras y palabras, con un teclado en pantalla que indica la siguiente tecla. QWERTY, AZERTY y árabe.' },
    ar: { title: 'لعبة تعلّم الكتابة على لوحة المفاتيح للأطفال — مجانية | Kids Learning Hub', desc: 'لعبة مجانية لتعلّم الكتابة: صفّ الارتكاز ثم كل الحروف ثم كلمات حقيقية، مع لوحة مفاتيح على الشاشة تُظهر المفتاح التالي. لوحة عربية وAZERTY وQWERTY.' },
  },
  lede: {
    en: 'Typing has become a basic school skill, yet most children learn it by hunting for keys with one finger. Keyboard Hero starts where typing teachers start: the home row, where the fingers rest. Then come all the letters, then real words with a picture. An on-screen keyboard lights up the next key, so children learn to look at the screen rather than their hands. The keyboard follows the page language — QWERTY in English and Spanish, AZERTY in French, the Arabic layout in Arabic — and the score rewards accuracy before speed.',
    fr: 'Taper au clavier est devenu une compétence scolaire de base, mais la plupart des enfants l’apprennent en cherchant les touches avec un seul doigt. Héros du clavier commence comme les professeurs de dactylographie : par la rangée de repos, où les doigts sont posés. Viennent ensuite toutes les lettres, puis de vrais mots illustrés. Un clavier à l’écran allume la touche suivante pour apprendre à regarder l’écran plutôt que ses mains. Le clavier suit la langue de la page — AZERTY en français, QWERTY en anglais et en espagnol, arabe en arabe — et le score récompense la précision avant la vitesse.',
    es: 'Escribir con el teclado ya es una habilidad escolar básica, pero muchos niños la aprenden buscando las teclas con un solo dedo. Héroe del teclado empieza como los profesores de mecanografía: por la fila guía, donde descansan los dedos. Después vienen todas las letras y luego palabras reales con dibujo. Un teclado en pantalla ilumina la tecla siguiente para mirar la pantalla y no las manos. El teclado sigue el idioma de la página —QWERTY en inglés y español, AZERTY en francés, árabe en árabe— y la puntuación premia la precisión antes que la velocidad.',
    ar: 'أصبحت الكتابة على لوحة المفاتيح مهارة مدرسية أساسية، لكن أغلب الأطفال يتعلّمونها بالبحث عن المفاتيح بإصبع واحد. وتبدأ لعبة بطل لوحة المفاتيح كما يبدأ معلّمو الطباعة: بصفّ الارتكاز حيث تستقرّ الأصابع، ثم كل الحروف، ثم كلمات حقيقية مع صورة. وتضيء لوحة مفاتيح على الشاشة المفتاح التالي ليتعوّد الطفل النظر إلى الشاشة لا إلى يديه. وتتبع اللوحة لغة الصفحة — العربية بالعربية، وAZERTY بالفرنسية، وQWERTY بالإنجليزية والإسبانية — والنتيجة تكافئ الدقّة قبل السرعة.',
  },
  how: {
    en: ['Show the home position: left fingers on A S D F, right fingers on J K L, thumbs on the space bar.', 'Encourage looking at the screen keyboard, not at the real keys.', 'Aim for 95% accuracy first; speed will come by itself.', 'Ten minutes a day works better than one long session a week.'],
    fr: ['Montrez la position de repos : doigts gauches sur Q S D F, doigts droits sur J K L M, pouces sur la barre d’espace.', 'Encouragez à regarder le clavier à l’écran plutôt que les vraies touches.', 'Visez d’abord 95 % de précision : la vitesse viendra toute seule.', 'Dix minutes par jour valent mieux qu’une longue séance par semaine.'],
    es: ['Enseña la posición: dedos izquierdos en A S D F, derechos en J K L, pulgares en la barra espaciadora.', 'Anima a mirar el teclado de la pantalla y no las teclas reales.', 'Busca primero un 95 % de precisión; la velocidad llegará sola.', 'Diez minutos al día funcionan mejor que una sesión larga a la semana.'],
    ar: ['وضّح وضعية الارتكاز: أصابع اليد اليسرى على ش س ي ب، واليمنى على ت ن م ك، والإبهامان على مفتاح المسافة.', 'شجّعه على النظر إلى لوحة الشاشة لا إلى المفاتيح الحقيقية.', 'استهدف دقّة 95% أولًا، والسرعة تأتي وحدها.', 'عشر دقائق يوميًا أنفع من جلسة طويلة مرة في الأسبوع.'],
  },
  faq: {
    en: [['Which keyboard layout is used?', 'It follows the page language: QWERTY for English and Spanish, AZERTY for French, the standard Arabic layout for Arabic. Your computer must use the same layout.'], ['Does it work on a tablet?', 'Yes, tap the dashed box to open the on-screen keyboard — but a real keyboard is much better for learning to type.'], ['Do accents matter?', 'No: é counts as e, and أ counts as ا, so children can focus on finding the keys.']],
    fr: [['Quelle disposition de clavier ?', 'Elle suit la langue de la page : AZERTY pour le français, QWERTY pour l’anglais et l’espagnol, la disposition arabe standard pour l’arabe. L’ordinateur doit utiliser la même.'], ['Ça marche sur tablette ?', 'Oui, touchez le cadre en pointillés pour ouvrir le clavier virtuel — mais un vrai clavier est bien meilleur pour apprendre.'], ['Les accents comptent-ils ?', 'Non : é compte comme e et أ comme ا, pour se concentrer sur la recherche des touches.']],
    es: [['¿Qué distribución de teclado se usa?', 'Sigue el idioma de la página: QWERTY para inglés y español, AZERTY para francés y la distribución árabe estándar para árabe. El ordenador debe usar la misma.'], ['¿Funciona en tableta?', 'Sí, toca el recuadro discontinuo para abrir el teclado en pantalla, aunque un teclado real es mucho mejor para aprender.'], ['¿Cuentan las tildes?', 'No: á cuenta como a y أ como ا, para centrarse en encontrar las teclas.']],
    ar: [['أيّ لوحة مفاتيح تُستعمل؟', 'تتبع لغة الصفحة: اللوحة العربية القياسية بالعربية، وAZERTY بالفرنسية، وQWERTY بالإنجليزية والإسبانية. ويجب أن يستعمل الحاسوب اللوحة نفسها (يمكن إضافة العربية من إعدادات اللغة في ويندوز).'], ['هل تعمل على اللوح؟', 'نعم، المس الإطار المتقطّع لتظهر لوحة المفاتيح، لكن لوحة حقيقية أفضل بكثير لتعلّم الكتابة.'], ['هل تُحسب الهمزات؟', 'لا: «أ» تُحسب «ا»، ليتركّز الطفل على إيجاد المفاتيح.']],
  },
},

/* ── balloon words ─────────────────────────────────────────────────── */
{
  slug: 'word-guess', emoji: '🎈', ages: '6–11',
  meta: {
    en: { title: 'Balloon Words — Kid-Friendly Hangman Game, Free | Kids Learning Hub', desc: 'A kid-friendly hangman: look at the picture and guess the word letter by letter before the six balloons pop. 66 words in English, French, Spanish and Arabic. Free, no sign-up.' },
    fr: { title: 'Les ballons des mots — jeu du pendu pour enfants | Kids Learning Hub', desc: 'Un jeu du pendu adapté aux enfants : regarde l’image et devine le mot lettre par lettre avant que les six ballons éclatent. 66 mots en français, anglais, espagnol et arabe.' },
    es: { title: 'Globos de palabras — el ahorcado para niños, gratis | Kids Learning Hub', desc: 'Un ahorcado para niños: mira el dibujo y adivina la palabra letra a letra antes de que exploten los seis globos. 66 palabras en español, inglés, francés y árabe.' },
    ar: { title: 'بالونات الكلمات — لعبة تخمين الكلمات للأطفال | Kids Learning Hub', desc: 'لعبة تخمين كلمات مناسبة للأطفال: انظر إلى الصورة وخمّن الكلمة حرفًا حرفًا قبل أن تنفجر البالونات الستّ. 66 كلمة بالعربية والفرنسية والإنجليزية والإسبانية.' },
  },
  lede: {
    en: 'Balloon Words is the classic hangman game made gentle for children: instead of a gallows, six balloons float above the word, and each wrong letter pops one. A picture shows which word to find, so even young readers know what they are spelling — the challenge is to remember which letters the word contains. Each game has five words chosen from 66 everyday words, in the language of the page. Guessing E also uncovers É, and guessing ا also uncovers أ, so accents never stop a child.',
    fr: 'Les ballons des mots, c’est le jeu du pendu rendu doux pour les enfants : au lieu d’une potence, six ballons flottent au-dessus du mot, et chaque mauvaise lettre en fait éclater un. Une image indique le mot à trouver, donc même les jeunes lecteurs savent ce qu’ils épellent : le défi est de se rappeler quelles lettres le mot contient. Chaque partie compte cinq mots choisis parmi 66 mots du quotidien, dans la langue de la page. Proposer E découvre aussi É, et ا découvre aussi أ : les accents ne bloquent jamais.',
    es: 'Globos de palabras es el clásico ahorcado hecho amable para los niños: en lugar de una horca, seis globos flotan sobre la palabra y cada letra equivocada explota uno. Un dibujo indica qué palabra buscar, así que hasta los que empiezan a leer saben qué deletrean: el reto es recordar qué letras tiene la palabra. Cada partida tiene cinco palabras de entre 66 palabras cotidianas, en el idioma de la página. Decir E también descubre É, y ا descubre أ: las tildes nunca bloquean.',
    ar: 'بالونات الكلمات هي لعبة تخمين الكلمات الكلاسيكية بصيغة لطيفة للأطفال: ستّ بالونات تطفو فوق الكلمة، وكل حرف خاطئ يفجّر واحدة. والصورة تُظهر الكلمة المطلوبة، فيعرف حتى القارئ الصغير ما يتهجّاه، والتحدّي هو تذكّر الحروف التي تتكوّن منها. وفي كل جولة خمس كلمات من 66 كلمة يومية بلغة الصفحة. واختيار «ا» يكشف أيضًا «أ» و«إ»، فلا تقف الهمزات عائقًا.',
  },
  how: {
    en: ['Start with the vowels: they appear in almost every word.', 'Say the word aloud slowly before guessing — the sounds hint at the letters.', 'Use a real keyboard: pressing a letter key guesses it too.', 'After the game, write the five words on paper.'],
    fr: ['Commencez par les voyelles : elles sont dans presque tous les mots.', 'Dites le mot lentement avant de deviner : les sons donnent des indices.', 'Avec un vrai clavier, appuyer sur une lettre la propose aussi.', 'Après la partie, écrivez les cinq mots sur papier.'],
    es: ['Empieza por las vocales: están en casi todas las palabras.', 'Di la palabra despacio antes de adivinar: los sonidos dan pistas.', 'Con un teclado real, pulsar una letra también la propone.', 'Después, escribid las cinco palabras en papel.'],
    ar: ['ابدأ بحروف المدّ (ا و ي): توجد في كثير من الكلمات.', 'انطق الكلمة ببطء قبل التخمين: الأصوات تدلّ على الحروف.', 'مع لوحة مفاتيح حقيقية، الضغط على حرف يختاره أيضًا.', 'بعد اللعبة اكتبا الكلمات الخمس على ورقة.'],
  },
  faq: {
    en: [['Why balloons instead of a hangman?', 'The classic drawing is not great for young children; balloons keep the same suspense in a friendly way.'], ['How many wrong guesses are allowed?', 'Six per word — one balloon each.'], ['Which languages?', 'English, French, Spanish and Arabic: the words follow the page language.']],
    fr: [['Pourquoi des ballons au lieu du pendu ?', 'Le dessin classique ne convient pas vraiment aux petits ; les ballons gardent le même suspense de façon amicale.'], ['Combien d’erreurs sont permises ?', 'Six par mot — un ballon pour chacune.'], ['Quelles langues ?', 'Français, anglais, espagnol et arabe : les mots suivent la langue de la page.']],
    es: [['¿Por qué globos en lugar del ahorcado?', 'El dibujo clásico no es ideal para los pequeños; los globos mantienen la misma emoción de forma amable.'], ['¿Cuántos fallos se permiten?', 'Seis por palabra, un globo por fallo.'], ['¿En qué idiomas?', 'Español, inglés, francés y árabe: las palabras siguen el idioma de la página.']],
    ar: [['لماذا البالونات؟', 'الرسم التقليدي في هذه اللعبة غير مناسب للصغار، والبالونات تحافظ على التشويق نفسه بطريقة لطيفة.'], ['كم خطأً مسموحًا؟', 'ستّة لكل كلمة — بالونة لكل خطأ.'], ['بأيّ لغات؟', 'العربية والفرنسية والإنجليزية والإسبانية: الكلمات تتبع لغة الصفحة.']],
  },
},

/* ── tic-tac-toe ───────────────────────────────────────────────────── */
{
  slug: 'tic-tac-toe', emoji: '⭕', ages: '5–99',
  meta: {
    en: { title: 'Tic-Tac-Toe Online — vs Computer or 2 Players, Free | Kids Learning Hub', desc: 'Play tic-tac-toe free online: easy, medium or unbeatable computer, or two players on one screen. No sign-up, works on phones and tablets.' },
    fr: { title: 'Morpion en ligne — contre l’ordinateur ou à 2, gratuit | Kids Learning Hub', desc: 'Joue au morpion gratuitement en ligne : ordinateur facile, moyen ou imbattable, ou deux joueurs sur le même écran. Sans inscription, sur téléphone et tablette.' },
    es: { title: 'Tres en raya online — contra el ordenador o 2 jugadores | Kids Learning Hub', desc: 'Juega gratis al tres en raya: ordenador fácil, medio o imbatible, o dos jugadores en la misma pantalla. Sin registro, en móvil y tableta.' },
    ar: { title: 'لعبة إكس-أو على الإنترنت — ضدّ الحاسوب أو لاعبين | Kids Learning Hub', desc: 'العب إكس-أو مجانًا: حاسوب سهل أو متوسط أو لا يُهزم، أو لاعبان على الشاشة نفسها. دون تسجيل، على الهاتف واللوح.' },
  },
  lede: {
    en: 'Tic-tac-toe is often a child’s first strategy game, and it teaches more than it seems: thinking one move ahead, blocking the opponent, and building two threats at once so that one of them must succeed. Here children can play against the computer at three levels or against a friend on the same screen. The easy computer plays at random, the medium one mixes good and random moves, and the unbeatable one plays perfectly — against it, a draw is the best possible result, and finding how to get it is a real logic lesson.',
    fr: 'Le morpion est souvent le premier jeu de stratégie d’un enfant, et il enseigne plus qu’il n’y paraît : penser un coup à l’avance, bloquer l’adversaire, créer deux menaces à la fois pour que l’une réussisse forcément. Ici, on joue contre l’ordinateur à trois niveaux ou contre un ami sur le même écran. L’ordinateur facile joue au hasard, le moyen mélange bons coups et hasard, et l’imbattable joue parfaitement : contre lui, le match nul est le meilleur résultat possible, et trouver comment l’obtenir est une vraie leçon de logique.',
    es: 'El tres en raya suele ser el primer juego de estrategia de un niño, y enseña más de lo que parece: pensar una jugada por delante, bloquear al rival y crear dos amenazas a la vez para que una tenga que salir bien. Aquí se juega contra el ordenador en tres niveles o contra un amigo en la misma pantalla. El fácil juega al azar, el medio mezcla buenas jugadas y azar, y el imbatible juega perfecto: contra él, el empate es el mejor resultado posible, y descubrir cómo lograrlo es una verdadera lección de lógica.',
    ar: 'كثيرًا ما تكون إكس-أو أول لعبة استراتيجية يلعبها الطفل، وهي تعلّم أكثر مما تبدو: التفكير في الحركة القادمة، وسدّ طريق الخصم، وصنع تهديدين في وقت واحد حتى ينجح أحدهما حتمًا. يمكن هنا اللعب ضدّ الحاسوب في ثلاثة مستويات أو ضدّ صديق على الشاشة نفسها. الحاسوب السهل يلعب عشوائيًا، والمتوسط يمزج حركات جيدة وعشوائية، والذي لا يُهزم يلعب بإتقان: ضدّه يكون التعادل أفضل نتيجة ممكنة، واكتشاف طريقته درس حقيقي في المنطق.',
  },
  how: {
    en: ['Before each move, ask: “Can I win now? Must I block?”', 'Show the power of the centre and the corners.', 'Against the unbeatable level, celebrate a draw — it means perfect defence.', 'In 2-player mode, take turns starting.'],
    fr: ['Avant chaque coup, demandez : « Puis-je gagner maintenant ? Dois-je bloquer ? »', 'Montrez la force du centre et des coins.', 'Contre le niveau imbattable, fêtez le match nul : c’est une défense parfaite.', 'À deux joueurs, commencez chacun votre tour.'],
    es: ['Antes de cada jugada, pregunta: «¿Puedo ganar ahora? ¿Tengo que bloquear?»', 'Enseña la fuerza del centro y de las esquinas.', 'Contra el imbatible, celebra el empate: es una defensa perfecta.', 'En modo de 2 jugadores, empezad por turnos.'],
    ar: ['قبل كل حركة اسأل: «هل أستطيع الفوز الآن؟ هل يجب أن أسدّ؟»', 'وضّح قوّة المربّع الأوسط والأركان.', 'ضدّ المستوى الذي لا يُهزم احتفل بالتعادل: فهو دفاع مثالي.', 'في وضع اللاعبَين، تناوبا على البدء.'],
  },
  faq: {
    en: [['Can the unbeatable computer really not be beaten?', 'Yes. It checks every possible game, so the best you can get is a draw — which is still a great result.'], ['Can two children play together?', 'Yes, choose “2 players” and play on the same screen.'], ['Who starts?', 'The player with ❌ always starts; in 2-player mode, swap roles after each game for fairness.']],
    fr: [['L’ordinateur imbattable ne peut vraiment pas perdre ?', 'Oui. Il examine toutes les parties possibles : le mieux est le match nul — un très bon résultat.'], ['Deux enfants peuvent-ils jouer ensemble ?', 'Oui, choisissez « 2 joueurs » et jouez sur le même écran.'], ['Qui commence ?', 'Le joueur ❌ commence toujours ; à deux, échangez les rôles après chaque partie.']],
    es: [['¿De verdad el ordenador imbatible no pierde?', 'Sí. Revisa todas las partidas posibles: lo mejor es empatar, y eso ya es un gran resultado.'], ['¿Pueden jugar dos niños juntos?', 'Sí, elige «2 jugadores» y jugad en la misma pantalla.'], ['¿Quién empieza?', 'Empieza siempre ❌; en modo de dos, cambiad de papel después de cada partida.']],
    ar: [['هل الحاسوب الذي لا يُهزم لا يخسر فعلًا؟', 'نعم. يفحص كل الاحتمالات، فأفضل ما يمكن الوصول إليه هو التعادل — وهي نتيجة ممتازة.'], ['هل يمكن لطفلين اللعب معًا؟', 'نعم، اختر «لاعبان» والعبا على الشاشة نفسها.'], ['من يبدأ؟', 'يبدأ صاحب ❌ دائمًا، وفي وضع اللاعبَين بدّلا الأدوار بعد كل جولة.']],
  },
},

/* ── online colouring ──────────────────────────────────────────────── */
{
  slug: 'coloring-online', emoji: '🎨', ages: '3–8',
  meta: {
    en: { title: 'Online Coloring for Kids — Tap to Color, Then Print | Kids Learning Hub', desc: 'Free online coloring for kids: pick a picture (house, fish, rocket, butterfly…) or a new mandala, choose colours and tap to fill. Print your picture when it is done. No sign-up.' },
    fr: { title: 'Coloriage en ligne pour enfants — toucher pour colorier | Kids Learning Hub', desc: 'Coloriage en ligne gratuit : choisis un dessin (maison, poisson, fusée, papillon…) ou un nouveau mandala, une couleur, et touche pour remplir. Imprime ton dessin à la fin.' },
    es: { title: 'Colorear en línea para niños — toca para colorear | Kids Learning Hub', desc: 'Colorear gratis en línea: elige un dibujo (casa, pez, cohete, mariposa…) o un mandala nuevo, un color y toca para rellenar. Imprime tu dibujo al terminar.' },
    ar: { title: 'التلوين على الإنترنت للأطفال — المس لتلوّن ثم اطبع | Kids Learning Hub', desc: 'تلوين مجاني على الإنترنت: اختر رسمًا (بيت، سمكة، صاروخ، فراشة…) أو ماندالا جديدة، واختر لونًا والمس لتملأ. اطبع رسمك في النهاية.' },
  },
  lede: {
    en: 'Tap-to-fill colouring lets even the youngest children make a bright picture they are proud of. Eight drawings — a house, a fish, a rocket, a butterfly, a sunflower, an ice cream, a car and a turtle — plus a new mandala every time, sixteen colours, and a print button that prints only the picture. Talk about the colours while your child works (“what colour is the sky?”) to build vocabulary, and when the picture is finished, print it to hang on the fridge.',
    fr: 'Le coloriage par toucher permet même aux plus petits de réaliser un dessin éclatant dont ils sont fiers. Huit dessins — une maison, un poisson, une fusée, un papillon, un tournesol, une glace, une voiture et une tortue — plus un nouveau mandala à chaque fois, seize couleurs, et un bouton qui imprime seulement le dessin. Parlez des couleurs pendant que l’enfant colorie (« de quelle couleur est le ciel ? ») pour enrichir son vocabulaire, puis imprimez le dessin fini pour l’accrocher au frigo.',
    es: 'Colorear con un toque permite incluso a los más pequeños hacer un dibujo lleno de color del que sentirse orgullosos. Ocho dibujos —una casa, un pez, un cohete, una mariposa, un girasol, un helado, un coche y una tortuga— y un mandala nuevo cada vez, dieciséis colores y un botón que imprime solo el dibujo. Hablad de los colores mientras colorea («¿de qué color es el cielo?») para ampliar vocabulario, y al terminar imprimidlo para la nevera.',
    ar: 'التلوين باللمس يسمح حتى لأصغر الأطفال بصنع رسم زاهٍ يفخرون به. ثمانية رسوم — بيت وسمكة وصاروخ وفراشة وعبّاد الشمس ومثلّجات وسيارة وسلحفاة — وماندالا جديدة في كل مرة، وستّة عشر لونًا، وزرّ يطبع الرسم وحده. تحدّث عن الألوان أثناء التلوين («ما لون السماء؟») لإثراء المفردات، وعند الانتهاء اطبع الرسم وعلّقه على الثلاجة.',
  },
  how: {
    en: ['Name each colour as your child picks it — in two languages if you like.', 'Ask for a rule: “all the windows the same colour”.', 'Print the finished picture and let your child sign it.', 'Then try the paper colouring pages with crayons for fine motor practice.'],
    fr: ['Nommez chaque couleur choisie — dans deux langues si vous voulez.', 'Proposez une règle : « toutes les fenêtres de la même couleur ».', 'Imprimez le dessin fini et laissez l’enfant le signer.', 'Ensuite, essayez les coloriages papier aux crayons pour la motricité fine.'],
    es: ['Nombra cada color que elija, en dos idiomas si quieres.', 'Propón una regla: «todas las ventanas del mismo color».', 'Imprimid el dibujo terminado y que lo firme.', 'Después, probad los dibujos en papel con ceras para la motricidad fina.'],
    ar: ['سمِّ كل لون يختاره الطفل — بلغتين إن أردت.', 'اقترح قاعدة: «كل النوافذ باللون نفسه».', 'اطبع الرسم المكتمل ودع الطفل يوقّعه.', 'ثم جرّبا رسوم التلوين الورقية بالأقلام لتدريب العضلات الدقيقة.'],
  },
  faq: {
    en: [['Can I print the coloured picture?', 'Yes — the Print button prints only the picture, full page.'], ['Can my child undo a colour?', 'Tap the shape again with another colour, or white to clear it; “Start again” clears the whole picture.'], ['Does it work on phones?', 'Yes, it is made for touch screens as well as a mouse.']],
    fr: [['Peut-on imprimer le dessin colorié ?', 'Oui : le bouton Imprimer n’imprime que le dessin, en pleine page.'], ['L’enfant peut-il annuler une couleur ?', 'Il retouche la forme avec une autre couleur, ou en blanc pour l’effacer ; « Recommencer » efface tout.'], ['Ça marche sur téléphone ?', 'Oui, c’est conçu pour les écrans tactiles comme pour la souris.']],
    es: [['¿Puedo imprimir el dibujo coloreado?', 'Sí: el botón Imprimir imprime solo el dibujo, a página completa.'], ['¿Puede deshacer un color?', 'Toca la forma con otro color, o con blanco para borrarla; «Empezar de nuevo» lo borra todo.'], ['¿Funciona en el móvil?', 'Sí, está pensado para pantallas táctiles y ratón.']],
    ar: [['هل يمكن طباعة الرسم الملوّن؟', 'نعم، زرّ «اطبع» يطبع الرسم وحده في صفحة كاملة.'], ['هل يمكن التراجع عن لون؟', 'المس الشكل مرة أخرى بلون آخر، أو بالأبيض لمسحه، و«ابدأ من جديد» يمسح الرسم كله.'], ['هل تعمل على الهاتف؟', 'نعم، صُمّمت للشاشات اللمسية وللفأرة.']],
  },
},

/* ── sliding puzzle ────────────────────────────────────────────────── */
{
  slug: 'sliding-puzzle', emoji: '🧩', ages: '7–99',
  meta: {
    en: { title: 'Sliding Puzzle Online — 8-Puzzle and 15-Puzzle for Kids | Kids Learning Hub', desc: 'Free sliding puzzle: slide the numbered tiles back into order on a 3×3 or 4×4 board. Every puzzle is solvable, with a move counter and timer. Works with touch and arrow keys.' },
    fr: { title: 'Taquin en ligne — puzzle coulissant 3×3 et 4×4 | Kids Learning Hub', desc: 'Taquin gratuit en ligne : fais glisser les pièces numérotées pour les remettre dans l’ordre, en 3×3 ou 4×4. Toujours soluble, avec compteur de coups et chrono.' },
    es: { title: 'Puzle deslizante en línea — 8 y 15 para niños | Kids Learning Hub', desc: 'Puzle deslizante gratis: ordena las fichas numeradas en un tablero de 3×3 o 4×4. Siempre tiene solución, con contador de movimientos y cronómetro.' },
    ar: { title: 'اللغز المنزلق على الإنترنت — 3×3 و4×4 للأطفال | Kids Learning Hub', desc: 'لعبة اللغز المنزلق المجانية: حرّك القطع المرقّمة لتعيدها إلى ترتيبها على لوحة 3×3 أو 4×4. لكل لغز حلّ، مع عدّاد الحركات وساعة.' },
  },
  lede: {
    en: 'The sliding puzzle, invented in the 1870s, is still one of the best brain-teasers for children: one empty square, numbered tiles in a mess, and the goal of putting them back in order. It trains planning — to move one tile into place you must think several moves ahead without undoing what is already solved. The 3×3 board (the 8-puzzle) is a good start; the 4×4 (the 15-puzzle) is a real challenge, even for adults. Every board is mixed by legal moves only, so it can always be solved.',
    fr: 'Le taquin, inventé vers 1870, reste l’un des meilleurs casse-tête pour les enfants : une case vide, des pièces numérotées en désordre, et le but de les remettre dans l’ordre. Il entraîne l’anticipation : pour placer une pièce, il faut prévoir plusieurs coups sans défaire ce qui est déjà rangé. Le 3×3 est un bon début ; le 4×4, le fameux jeu de 15, est un vrai défi, même pour les adultes. Chaque grille est mélangée uniquement par des coups permis : elle est toujours soluble.',
    es: 'El puzle deslizante, inventado hacia 1870, sigue siendo uno de los mejores rompecabezas para niños: una casilla vacía, fichas numeradas desordenadas y el objetivo de ordenarlas. Entrena la planificación: para colocar una ficha hay que pensar varios movimientos por delante sin deshacer lo ya ordenado. El 3×3 es un buen comienzo; el 4×4, el famoso 15, es un reto incluso para adultos. Cada tablero se mezcla solo con movimientos válidos, así que siempre tiene solución.',
    ar: 'اللغز المنزلق، الذي اختُرع نحو سنة 1870، ما زال من أفضل ألغاز التفكير للأطفال: مربّع فارغ، وقطع مرقّمة مبعثرة، والهدف إعادتها إلى ترتيبها. وهو يدرّب على التخطيط: لوضع قطعة في مكانها يجب التفكير في عدّة حركات مسبقًا دون إفساد ما رُتّب. لوحة 3×3 بداية جيدة، و4×4 تحدٍّ حقيقي حتى للكبار. وكل لوحة تُخلط بحركات مسموحة فقط، فلها حلّ دائمًا.',
  },
  how: {
    en: ['Solve the top row first, then the left column — then the puzzle gets smaller.', 'Place the last two tiles of a row together, as a pair.', 'Arrow keys move the tile next to the gap, if you prefer the keyboard.', 'Try to beat your own number of moves.'],
    fr: ['Rangez d’abord la ligne du haut, puis la colonne de gauche : le puzzle devient plus petit.', 'Placez les deux dernières pièces d’une ligne ensemble, en paire.', 'Les flèches du clavier déplacent la pièce voisine du trou.', 'Essayez de battre votre propre nombre de coups.'],
    es: ['Ordena primero la fila de arriba y luego la columna izquierda: el puzle se hace más pequeño.', 'Coloca juntas, como pareja, las dos últimas fichas de una fila.', 'Las flechas del teclado mueven la ficha junto al hueco.', 'Intenta mejorar tu propio número de movimientos.'],
    ar: ['رتّب السطر العلوي أولًا ثم العمود الأيسر، فيصغر اللغز.', 'ضع آخر قطعتين في السطر معًا كزوج.', 'أسهم لوحة المفاتيح تحرّك القطعة المجاورة للفراغ.', 'حاول أن تتفوّق على عدد حركاتك السابق.'],
  },
  faq: {
    en: [['Is every puzzle solvable?', 'Yes. The tiles are mixed with real slides from the solved position, so it can always be undone.'], ['How are the stars given?', '3×3: 3 stars up to 40 moves. 4×4: 3 stars up to 180 moves.'], ['From what age?', '3×3 from about 7, 4×4 from about 10 — and adults enjoy it too.']],
    fr: [['Chaque taquin est-il soluble ?', 'Oui. Les pièces sont mélangées par de vrais glissements depuis la position rangée, donc on peut toujours revenir.'], ['Comment sont données les étoiles ?', '3×3 : 3 étoiles jusqu’à 40 coups. 4×4 : jusqu’à 180 coups.'], ['À partir de quel âge ?', '3×3 dès 7 ans environ, 4×4 dès 10 ans — et les adultes aiment aussi.']],
    es: [['¿Todos los puzles tienen solución?', 'Sí. Las fichas se mezclan con deslizamientos reales desde la posición ordenada, así que siempre se puede volver.'], ['¿Cómo se dan las estrellas?', '3×3: 3 estrellas hasta 40 movimientos. 4×4: hasta 180.'], ['¿Desde qué edad?', '3×3 desde unos 7 años, 4×4 desde unos 10; y a los adultos también les gusta.']],
    ar: [['هل لكل لغز حلّ؟', 'نعم. تُخلط القطع بحركات انزلاق حقيقية من الوضع المرتّب، فيمكن دائمًا الرجوع إليه.'], ['كيف تُمنح النجوم؟', '3×3: ثلاث نجوم حتى 40 حركة. 4×4: حتى 180 حركة.'], ['من أي عمر؟', '3×3 من نحو 7 سنوات، و4×4 من نحو 10 سنوات — ويستمتع بها الكبار أيضًا.']],
  },
},

/* ── maze game ─────────────────────────────────────────────────────── */
{
  slug: 'maze-game', emoji: '🐭', ages: '4–10',
  meta: {
    en: { title: 'Maze Game for Kids — Help the Mouse Find the Cheese | Kids Learning Hub', desc: 'Free online maze game for kids: a brand-new maze every time, three sizes, played with arrow keys, swipes or on-screen buttons. Every maze has exactly one path to the cheese.' },
    fr: { title: 'Jeu de labyrinthe pour enfants — la souris et le fromage | Kids Learning Hub', desc: 'Jeu de labyrinthe gratuit : un nouveau labyrinthe à chaque fois, trois tailles, avec les flèches, en glissant ou avec les boutons. Chaque labyrinthe a un seul chemin jusqu’au fromage.' },
    es: { title: 'Laberinto para niños — ayuda al ratón a llegar al queso | Kids Learning Hub', desc: 'Juego de laberinto gratis: uno nuevo cada vez, tres tamaños, con flechas, deslizando o con botones. Cada laberinto tiene un único camino hasta el queso.' },
    ar: { title: 'لعبة المتاهة للأطفال — ساعد الفأر في الوصول إلى الجبن | Kids Learning Hub', desc: 'لعبة متاهة مجانية: متاهة جديدة في كل مرة، بثلاثة أحجام، بالأسهم أو بالسحب أو بالأزرار. لكل متاهة طريق واحد فقط إلى الجبن.' },
  },
  lede: {
    en: 'Mazes are one of the oldest puzzles, and on screen they become a lively game. Every time the page builds a brand-new maze with exactly one path from the mouse to the cheese, so there is always something new to solve. Children move step by step with the arrow keys, with a swipe on a tablet, or with the big arrow buttons, and a yellow trail shows where they have been — stepping back erases it. Planning ahead, spotting dead ends and keeping calm when a path goes nowhere are all skills that also matter in maths and in coding.',
    fr: 'Les labyrinthes sont parmi les plus vieux casse-tête, et à l’écran ils deviennent un jeu vivant. À chaque fois, la page construit un labyrinthe tout neuf avec un seul chemin de la souris au fromage : il y a toujours du nouveau à résoudre. L’enfant avance case par case avec les flèches, en glissant sur une tablette ou avec les gros boutons, et une trace jaune montre le chemin parcouru — revenir en arrière l’efface. Anticiper, repérer les impasses et garder son calme : des compétences qui servent aussi en maths et en codage.',
    es: 'Los laberintos están entre los rompecabezas más antiguos, y en pantalla se convierten en un juego animado. Cada vez la página crea un laberinto nuevo con un único camino del ratón al queso, así que siempre hay algo nuevo que resolver. El niño avanza paso a paso con las flechas, deslizando en una tableta o con los botones grandes, y un rastro amarillo muestra por dónde ha pasado; al volver atrás se borra. Anticiparse, detectar callejones sin salida y mantener la calma son habilidades que también sirven en mates y programación.',
    ar: 'المتاهات من أقدم الألغاز، وعلى الشاشة تصبح لعبة حيّة. في كل مرة تبني الصفحة متاهة جديدة لها طريق واحد فقط من الفأر إلى الجبن، فهناك دائمًا جديد يُحلّ. يتقدّم الطفل خطوة خطوة بالأسهم أو بالسحب على اللوح أو بالأزرار الكبيرة، ويُظهر أثر أصفر الطريق الذي سلكه، والرجوع يمحوه. والتخطيط المسبق وتمييز الطرق المسدودة والهدوء عند الخطأ مهارات تنفع أيضًا في الرياضيات والبرمجة.',
  },
  how: {
    en: ['Before moving, look at the maze from the cheese backwards — it is often easier.', 'When you reach a dead end, go back to the last crossroads, not to the start.', 'Start with the small maze, then try medium and big.', 'Print our paper mazes for pencil practice away from screens.'],
    fr: ['Avant de bouger, regardez le labyrinthe depuis le fromage, à l’envers : c’est souvent plus facile.', 'Dans une impasse, revenez au dernier carrefour, pas au départ.', 'Commencez par le petit labyrinthe, puis le moyen et le grand.', 'Imprimez nos labyrinthes papier pour s’entraîner au crayon, loin des écrans.'],
    es: ['Antes de moverte, mira el laberinto desde el queso hacia atrás: suele ser más fácil.', 'En un callejón sin salida, vuelve al último cruce, no al principio.', 'Empieza por el pequeño y luego prueba el mediano y el grande.', 'Imprime nuestros laberintos en papel para practicar con lápiz lejos de las pantallas.'],
    ar: ['قبل التحرّك انظر إلى المتاهة بدءًا من الجبن رجوعًا: غالبًا يكون أسهل.', 'عند الطريق المسدود ارجع إلى آخر مفترق، لا إلى البداية.', 'ابدأ بالمتاهة الصغيرة ثم المتوسطة ثم الكبيرة.', 'اطبع متاهاتنا الورقية للتدرّب بالقلم بعيدًا عن الشاشات.'],
  },
  faq: {
    en: [['Is every maze different?', 'Yes, a new maze is built each time, always with exactly one path to the cheese.'], ['How do you move on a tablet?', 'Swipe on the maze, one step per swipe, or use the arrow buttons under it.'], ['How are the stars given?', 'By time: fast finishes earn 3 stars, with more time allowed for bigger mazes.']],
    fr: [['Chaque labyrinthe est-il différent ?', 'Oui, un nouveau labyrinthe est construit à chaque fois, toujours avec un seul chemin jusqu’au fromage.'], ['Comment jouer sur tablette ?', 'Glissez sur le labyrinthe, un pas par glissement, ou utilisez les boutons fléchés en dessous.'], ['Comment sont données les étoiles ?', 'Selon le temps : une arrivée rapide donne 3 étoiles, avec plus de temps accordé aux grands labyrinthes.']],
    es: [['¿Cada laberinto es distinto?', 'Sí, se crea uno nuevo cada vez, siempre con un único camino hasta el queso.'], ['¿Cómo se juega en tableta?', 'Desliza sobre el laberinto, un paso por deslizamiento, o usa los botones de flecha de abajo.'], ['¿Cómo se dan las estrellas?', 'Por tiempo: llegar rápido da 3 estrellas, con más tiempo para los laberintos grandes.']],
    ar: [['هل كل متاهة مختلفة؟', 'نعم، تُبنى متاهة جديدة في كل مرة، ولها دائمًا طريق واحد فقط إلى الجبن.'], ['كيف أتحرّك على اللوح؟', 'اسحب على المتاهة، خطوة لكل سحبة، أو استعمل أزرار الأسهم تحتها.'], ['كيف تُمنح النجوم؟', 'حسب الوقت: الوصول السريع يمنح ثلاث نجوم، مع وقت أطول للمتاهات الكبيرة.']],
  },
},

];
