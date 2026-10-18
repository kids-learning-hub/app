/* Kids Learning Hub — guide content for the maths browser games (play/).
   Used by tools/build-games.js. One entry per game, 4 languages.        */
'use strict';

module.exports = [

/* ── times tables race ─────────────────────────────────────────────── */
{
  slug: 'times-tables', emoji: '✖️', ages: '6–12',
  meta: {
    en: { title: 'Times Tables Game — Free Online Multiplication Practice for Kids | Kids Learning Hub', desc: 'Free online times tables game: pick a table from 2 to 10 or mix them all, answer 10 questions and earn stars. No install, no sign-up. Ages 6–12.' },
    fr: { title: 'Jeu des tables de multiplication en ligne gratuit | Kids Learning Hub', desc: 'Jeu gratuit pour réviser les tables de multiplication : choisis une table de 2 à 10 ou mélange-les, réponds à 10 questions et gagne des étoiles. Sans inscription.' },
    es: { title: 'Juego de las tablas de multiplicar online gratis | Kids Learning Hub', desc: 'Juego gratis para practicar las tablas de multiplicar: elige una tabla del 2 al 10 o mézclalas, responde 10 preguntas y gana estrellas. Sin registro.' },
    ar: { title: 'لعبة جدول الضرب على الإنترنت مجانًا للأطفال | Kids Learning Hub', desc: 'لعبة مجانية لمراجعة جداول الضرب: اختر جدولًا من 2 إلى 10 أو اخلطها، وأجب عن 10 أسئلة واربح النجوم. دون تسجيل.' },
  },
  lede: {
    en: 'Knowing the times tables by heart frees a child’s mind for everything that comes later: division, fractions, area and mental arithmetic. This game turns the practice into short, ten-question races. Children choose one table to learn or mix them all for review, see instantly whether each answer is right, and collect up to three stars — a few minutes a day is enough to make real progress.',
    fr: 'Connaître ses tables par cœur libère l’esprit de l’enfant pour tout ce qui suit : divisions, fractions, aires et calcul mental. Ce jeu transforme l’entraînement en courtes courses de dix questions. L’enfant choisit une table à apprendre ou les mélange pour réviser, sait tout de suite si sa réponse est juste et gagne jusqu’à trois étoiles — quelques minutes par jour suffisent pour progresser vraiment.',
    es: 'Saberse las tablas de memoria libera la mente del niño para todo lo que viene después: divisiones, fracciones, áreas y cálculo mental. Este juego convierte la práctica en carreras cortas de diez preguntas. El niño elige una tabla para aprender o las mezcla para repasar, sabe al instante si acierta y gana hasta tres estrellas: unos minutos al día bastan para avanzar de verdad.',
    ar: 'حفظ جداول الضرب يحرّر ذهن الطفل لكل ما يأتي بعدها: القسمة والكسور والمساحات والحساب الذهني. وهذه اللعبة تحوّل التدريب إلى سباقات قصيرة من عشرة أسئلة. يختار الطفل جدولًا ليتعلّمه أو يخلط الجداول للمراجعة، ويعرف فورًا إن كان جوابه صحيحًا، ويربح حتى ثلاث نجوم — ودقائق قليلة كل يوم تكفي لتقدّم حقيقي.',
  },
  how: {
    en: ['Learn the tables in this order: 2, 5 and 10 first, then 3 and 4, and finally 6, 7, 8 and 9.', 'Play one table until your child gets three stars twice in a row, then add the next one.', 'Use “Mix” once a week to review everything learned so far.', 'Remind your child that 4 × 7 is the same as 7 × 4: every fact learned counts twice.'],
    fr: ['Apprenez les tables dans cet ordre : 2, 5 et 10 d’abord, puis 3 et 4, et enfin 6, 7, 8 et 9.', 'Jouez une table jusqu’à obtenir trois étoiles deux fois de suite, puis passez à la suivante.', 'Utilisez « Mélange » une fois par semaine pour réviser tout ce qui est acquis.', 'Rappelez que 4 × 7 = 7 × 4 : chaque résultat appris compte double.'],
    es: ['Aprended las tablas en este orden: primero 2, 5 y 10, luego 3 y 4, y al final 6, 7, 8 y 9.', 'Jugad una tabla hasta conseguir tres estrellas dos veces seguidas y después añadid la siguiente.', 'Usad «Mezcla» una vez por semana para repasar todo lo aprendido.', 'Recuerda que 4 × 7 es igual que 7 × 4: cada resultado aprendido cuenta doble.'],
    ar: ['تعلّموا الجداول بهذا الترتيب: 2 و5 و10 أولًا، ثم 3 و4، وأخيرًا 6 و7 و8 و9.', 'العب جدولًا واحدًا حتى يحصل طفلك على ثلاث نجوم مرتين متتاليتين، ثم أضف الجدول التالي.', 'استعمل «خلط» مرة في الأسبوع لمراجعة كل ما تمّ تعلّمه.', 'ذكّر طفلك بأن 4 × 7 تساوي 7 × 4: فكل نتيجة يتعلّمها تُحسب مرتين.'],
  },
  faq: {
    en: [['At what age should children learn their times tables?', 'Most children start with the 2, 5 and 10 tables around age 7 and know all tables to 10 by 9 or 10. Understanding what multiplication means comes first; speed comes with practice.'], ['How long should my child play each day?', 'Five to ten minutes a day works better than one long session a week. Short, regular practice is what moves facts into long-term memory.'], ['Is the game free?', 'Yes. It works in any browser on phone, tablet or computer, with no download and no account.']],
    fr: [['À quel âge apprend-on les tables ?', 'La plupart des enfants commencent par les tables de 2, 5 et 10 vers 7 ans et maîtrisent toutes les tables jusqu’à 10 vers 9 ou 10 ans. Comprendre le sens de la multiplication vient d’abord ; la rapidité vient avec l’entraînement.'], ['Combien de temps jouer chaque jour ?', 'Cinq à dix minutes par jour valent mieux qu’une longue séance par semaine. C’est la pratique courte et régulière qui fixe les résultats en mémoire.'], ['Le jeu est-il gratuit ?', 'Oui. Il fonctionne dans n’importe quel navigateur, sur téléphone, tablette ou ordinateur, sans téléchargement ni compte.']],
    es: [['¿A qué edad se aprenden las tablas?', 'La mayoría de los niños empieza con las tablas del 2, 5 y 10 hacia los 7 años y domina todas hasta el 10 hacia los 9 o 10. Primero se entiende qué es multiplicar; la rapidez llega con la práctica.'], ['¿Cuánto tiempo jugar cada día?', 'De cinco a diez minutos al día funcionan mejor que una sesión larga a la semana. La práctica breve y regular es la que fija los resultados en la memoria.'], ['¿El juego es gratis?', 'Sí. Funciona en cualquier navegador, en móvil, tableta u ordenador, sin descargas ni cuentas.']],
    ar: [['في أي عمر يتعلّم الطفل جداول الضرب؟', 'يبدأ معظم الأطفال بجداول 2 و5 و10 نحو سنّ السابعة، ويتقنون كل الجداول حتى 10 في التاسعة أو العاشرة. فهم معنى الضرب يأتي أولًا، والسرعة تأتي بالتدريب.'], ['كم من الوقت يلعب طفلي كل يوم؟', 'من خمس إلى عشر دقائق يوميًا أفضل من حصة طويلة مرة في الأسبوع. فالتدريب القصير المنتظم هو ما يثبّت النتائج في الذاكرة.'], ['هل اللعبة مجانية؟', 'نعم. تعمل في أي متصفّح على الهاتف أو اللوحة أو الحاسوب، دون تحميل ولا حساب.']],
  },
},

/* ── quick count ───────────────────────────────────────────────────── */
{
  slug: 'quick-count', emoji: '🔢', ages: '4–7',
  meta: {
    en: { title: 'Counting Game for Kids — Free Online, Ages 4–7 | Kids Learning Hub', desc: 'Free counting game for preschool and kindergarten: count the pictures, tap the right number from 1 to 10 and earn stars. Works on phones, no install.' },
    fr: { title: 'Jeu pour apprendre à compter — gratuit en ligne, 4–7 ans | Kids Learning Hub', desc: 'Jeu gratuit pour apprendre à compter en maternelle : compte les images, touche le bon nombre de 1 à 10 et gagne des étoiles. Sur téléphone, sans installation.' },
    es: { title: 'Juego para aprender a contar — gratis online, 4–7 años | Kids Learning Hub', desc: 'Juego gratis para aprender a contar en infantil: cuenta los dibujos, toca el número correcto del 1 al 10 y gana estrellas. En el móvil, sin instalar nada.' },
    ar: { title: 'لعبة تعلّم العدّ للأطفال — مجانًا على الإنترنت، 4–7 سنوات | Kids Learning Hub', desc: 'لعبة مجانية لتعلّم العدّ في الروض: عُدّ الصور والمس العدد الصحيح من 1 إلى 10 واربح النجوم. تعمل على الهاتف دون تثبيت.' },
  },
  lede: {
    en: 'Counting is more than reciting “one, two, three”. A child must point to each object once, say one number per object, and understand that the last number said tells how many there are. Quick Count practises exactly that with colourful pictures: the first rounds stay under five, then the groups grow to ten. Each answer shows the right number, so little ones learn even from their mistakes.',
    fr: 'Compter, ce n’est pas seulement réciter « un, deux, trois ». L’enfant doit montrer chaque objet une seule fois, dire un nombre par objet, et comprendre que le dernier nombre dit indique combien il y en a. Compte vite entraîne exactement cela avec des images colorées : les premières manches restent sous cinq, puis les groupes vont jusqu’à dix. Chaque réponse montre le bon nombre : les petits apprennent même de leurs erreurs.',
    es: 'Contar es más que recitar «uno, dos, tres». El niño tiene que señalar cada objeto una sola vez, decir un número por objeto y entender que el último número dicho indica cuántos hay. Cuenta rápido practica justo eso con dibujos de colores: las primeras rondas no pasan de cinco y después los grupos llegan a diez. Cada respuesta muestra el número correcto, así que los pequeños aprenden incluso de sus errores.',
    ar: 'العدّ أكثر من ترديد «واحد، اثنان، ثلاثة». فعلى الطفل أن يشير إلى كل شيء مرة واحدة، وأن يقول عددًا واحدًا لكل شيء، وأن يفهم أن آخر عدد قاله هو عدد الأشياء. ولعبة العدّ السريع تدرّب على ذلك تمامًا بصور ملوّنة: الجولات الأولى أقل من خمسة، ثم تكبر المجموعات حتى عشرة. وكل جواب يُظهر العدد الصحيح، فيتعلّم الصغار حتى من أخطائهم.',
  },
  how: {
    en: ['Ask your child to touch each picture on the screen while counting aloud.', 'After the answer, ask “How many are there?” — the child should say the last number, not count again.', 'Count real objects at home too: spoons, stairs, toys in the box.', 'For children who are just starting, sit together and play only the first five rounds.'],
    fr: ['Demandez à l’enfant de toucher chaque image à l’écran en comptant à voix haute.', 'Après la réponse, demandez « Combien y en a-t-il ? » : l’enfant doit dire le dernier nombre, sans recompter.', 'Comptez aussi de vrais objets à la maison : cuillères, marches, jouets dans la boîte.', 'Pour les tout débutants, jouez ensemble seulement les cinq premières manches.'],
    es: ['Pide a tu hijo que toque cada dibujo en la pantalla mientras cuenta en voz alta.', 'Después de la respuesta, pregunta «¿Cuántos hay?»: debe decir el último número, sin volver a contar.', 'Contad también objetos reales en casa: cucharas, escalones, juguetes de la caja.', 'Si acaba de empezar, jugad juntos solo las cinco primeras rondas.'],
    ar: ['اطلب من طفلك أن يلمس كل صورة على الشاشة وهو يعدّ بصوت عالٍ.', 'بعد الجواب اسأله «كم عددها؟»: يجب أن يقول آخر عدد دون أن يعيد العدّ.', 'عُدّا أشياء حقيقية في البيت أيضًا: الملاعق والدرجات والألعاب في الصندوق.', 'للمبتدئين تمامًا، العبا معًا الجولات الخمس الأولى فقط.'],
  },
  faq: {
    en: [['At what age can a child play Quick Count?', 'From about 4, when children start counting small groups. It suits preschool, kindergarten and the first year of primary school.'], ['My child counts the same picture twice. Is that normal?', 'Yes, very common before 5. Touching each picture, or moving real objects into a “counted” pile, fixes it quickly.'], ['Does it work on a phone?', 'Yes. The game is made for touch screens and needs no download.']],
    fr: [['À partir de quel âge ?', 'Vers 4 ans, quand l’enfant commence à compter de petits groupes. Le jeu convient à la maternelle et au début du CP.'], ['Mon enfant compte deux fois la même image. Est-ce normal ?', 'Oui, c’est très fréquent avant 5 ans. Toucher chaque image, ou déplacer de vrais objets dans un tas « déjà compté », corrige cela rapidement.'], ['Fonctionne-t-il sur téléphone ?', 'Oui. Le jeu est conçu pour les écrans tactiles et ne demande aucun téléchargement.']],
    es: [['¿A partir de qué edad?', 'Hacia los 4 años, cuando el niño empieza a contar grupos pequeños. Sirve para infantil y el primer curso de primaria.'], ['Mi hijo cuenta dos veces el mismo dibujo. ¿Es normal?', 'Sí, es muy habitual antes de los 5. Tocar cada dibujo, o pasar objetos reales a un montón de «ya contados», lo corrige rápido.'], ['¿Funciona en el móvil?', 'Sí. El juego está pensado para pantallas táctiles y no necesita descargas.']],
    ar: [['من أي عمر تناسب اللعبة؟', 'من نحو 4 سنوات، حين يبدأ الطفل بعدّ مجموعات صغيرة. وهي مناسبة للروض والسنة الأولى ابتدائي.'], ['طفلي يعدّ الصورة نفسها مرتين، هل هذا طبيعي؟', 'نعم، هذا شائع جدًا قبل الخامسة. ولمس كل صورة، أو نقل أشياء حقيقية إلى كومة «تمّ عدّها»، يصحّح ذلك بسرعة.'], ['هل تعمل على الهاتف؟', 'نعم. اللعبة مصمّمة للشاشات اللمسية ولا تحتاج إلى أي تحميل.']],
  },
},

/* ── math race ─────────────────────────────────────────────────────── */
{
  slug: 'math-race', emoji: '➕', ages: '5–9',
  meta: {
    en: { title: 'Math Race — Free Addition and Subtraction Game Online | Kids Learning Hub', desc: 'Free mental maths game: answer addition and subtraction questions against the clock, beat your best score and earn stars. Ages 5–9, no sign-up.' },
    fr: { title: 'Course aux calculs — jeu d’additions et soustractions gratuit | Kids Learning Hub', desc: 'Jeu de calcul mental gratuit : réponds à des additions et soustractions contre la montre, bats ton record et gagne des étoiles. 5–9 ans, sans inscription.' },
    es: { title: 'Carrera de cálculo — juego de sumas y restas gratis | Kids Learning Hub', desc: 'Juego de cálculo mental gratis: responde sumas y restas contra el reloj, supera tu récord y gana estrellas. De 5 a 9 años, sin registro.' },
    ar: { title: 'سباق الحساب — لعبة جمع وطرح مجانية على الإنترنت | Kids Learning Hub', desc: 'لعبة حساب ذهني مجانية: أجب عن عمليات جمع وطرح مع الوقت، وحطّم رقمك القياسي واربح النجوم. لأعمار 5–9 دون تسجيل.' },
  },
  lede: {
    en: 'Quick, confident addition and subtraction are the base of all later maths. When a child no longer has to count on fingers for 8 + 5, their attention is free for the real problem. Math Race gives short bursts of sums against the clock: enough pressure to make it exciting, short enough to stay fun. Children see their score improve from one round to the next, which is a powerful motivator.',
    fr: 'Additionner et soustraire vite et avec assurance est la base de toutes les maths qui suivent. Quand l’enfant n’a plus besoin de compter sur ses doigts pour 8 + 5, son attention est libre pour le vrai problème. La Course aux calculs propose de courtes séries contre la montre : assez de suspense pour motiver, assez court pour rester amusant. L’enfant voit son score progresser d’une partie à l’autre, ce qui le motive beaucoup.',
    es: 'Sumar y restar con rapidez y seguridad es la base de todas las matemáticas posteriores. Cuando el niño ya no necesita contar con los dedos para 8 + 5, su atención queda libre para el problema de verdad. La Carrera de cálculo ofrece series cortas contra el reloj: suficiente emoción para motivar y lo bastante breve para seguir siendo divertida. El niño ve cómo mejora su puntuación de una partida a otra.',
    ar: 'الجمع والطرح بسرعة وثقة هما أساس كل الرياضيات اللاحقة. فحين لا يحتاج الطفل إلى العدّ بأصابعه ليحسب 8 + 5، يتفرّغ انتباهه للمسألة الحقيقية. ولعبة سباق الحساب تقدّم سلاسل قصيرة من العمليات مع الوقت: فيها من الحماس ما يحفّز، ومن القِصر ما يبقيها ممتعة. ويرى الطفل نتيجته تتحسّن من جولة إلى أخرى، وهذا محفّز قوي.',
  },
  how: {
    en: ['Before speed, check understanding: can your child explain 7 + 5 with objects or drawings?', 'Teach the “make ten” trick: 8 + 5 = 8 + 2 + 3 = 13.', 'Encourage beating their own score, not other children’s.', 'If a child gets anxious with the timer, play together and say the answers aloud as a team.'],
    fr: ['Avant la vitesse, vérifiez la compréhension : l’enfant sait-il expliquer 7 + 5 avec des objets ou un dessin ?', 'Enseignez l’astuce « faire 10 » : 8 + 5 = 8 + 2 + 3 = 13.', 'Encouragez-le à battre son propre score, pas celui des autres.', 'Si le chronomètre le stresse, jouez ensemble et dites les réponses en équipe.'],
    es: ['Antes que la velocidad, comprueba que entiende: ¿sabe explicar 7 + 5 con objetos o dibujos?', 'Enseña el truco de «hacer 10»: 8 + 5 = 8 + 2 + 3 = 13.', 'Anímale a superar su propia puntuación, no la de otros niños.', 'Si el reloj le pone nervioso, jugad juntos y decid las respuestas en equipo.'],
    ar: ['قبل السرعة تأكّد من الفهم: هل يستطيع طفلك شرح 7 + 5 بالأشياء أو بالرسم؟', 'علّمه حيلة «إكمال العشرة»: 8 + 5 = 8 + 2 + 3 = 13.', 'شجّعه على تحطيم رقمه هو، لا أرقام الأطفال الآخرين.', 'إن أقلقه المؤقّت، فالعبا معًا وقولا الأجوبة كفريق.'],
  },
  faq: {
    en: [['Is speed really important in maths?', 'Speed itself is not the goal, but fluency is: quick recall of basic facts lets children focus on reasoning. Accuracy always comes first.'], ['What if my child counts on fingers?', 'That is a normal stage. Short daily practice and strategies like “make ten” gradually replace finger counting.'], ['Which age is it for?', 'From 5 for simple additions, up to about 9 for quick mixed addition and subtraction.']],
    fr: [['La vitesse est-elle vraiment importante en maths ?', 'La vitesse n’est pas le but, mais l’aisance l’est : retrouver vite les résultats de base permet de se concentrer sur le raisonnement. La justesse passe toujours en premier.'], ['Et si mon enfant compte sur ses doigts ?', 'C’est une étape normale. Une courte pratique quotidienne et des stratégies comme « faire 10 » remplacent peu à peu les doigts.'], ['Pour quel âge ?', 'Dès 5 ans pour des additions simples, jusqu’à 9 ans environ pour des additions et soustractions mélangées et rapides.']],
    es: [['¿La velocidad es tan importante en matemáticas?', 'La velocidad no es el objetivo, pero la soltura sí: recordar rápido los resultados básicos permite centrarse en el razonamiento. Acertar siempre va primero.'], ['¿Y si mi hijo cuenta con los dedos?', 'Es una etapa normal. La práctica breve diaria y estrategias como «hacer 10» van sustituyendo los dedos.'], ['¿Para qué edad es?', 'Desde los 5 años para sumas sencillas, hasta los 9 aproximadamente para sumas y restas mezcladas y rápidas.']],
    ar: [['هل السرعة مهمّة فعلًا في الرياضيات؟', 'السرعة ليست الهدف، لكن الطلاقة مهمّة: فاسترجاع النتائج الأساسية بسرعة يجعل الطفل يركّز على التفكير. والصحة تأتي دائمًا أولًا.'], ['وماذا لو كان طفلي يعدّ بأصابعه؟', 'هذه مرحلة طبيعية. والتدريب اليومي القصير والاستراتيجيات مثل «إكمال العشرة» تحلّ تدريجيًا محلّ الأصابع.'], ['لأيّ عمر؟', 'من 5 سنوات للجمع البسيط، حتى نحو 9 سنوات للجمع والطرح المختلطين بسرعة.']],
  },
},

/* ── clock game ────────────────────────────────────────────────────── */
{
  slug: 'clock-game', emoji: '⏰', ages: '6–10',
  meta: {
    en: { title: 'Telling Time Game — Read the Clock, Free Online for Kids | Kids Learning Hub', desc: 'Free telling-time game: read an analogue clock and pick the right time. Four levels from o’clock to five-minute steps. Ages 6–10, no sign-up.' },
    fr: { title: 'Jeu pour apprendre à lire l’heure — gratuit en ligne | Kids Learning Hub', desc: 'Jeu gratuit pour apprendre à lire l’heure sur une horloge à aiguilles : quatre niveaux, des heures pleines aux minutes de 5 en 5. 6–10 ans, sans inscription.' },
    es: { title: 'Juego para aprender la hora — reloj de agujas gratis online | Kids Learning Hub', desc: 'Juego gratis para aprender a leer la hora en un reloj de agujas: cuatro niveles, de las horas en punto a los minutos de 5 en 5. De 6 a 10 años.' },
    ar: { title: 'لعبة قراءة الساعة للأطفال — مجانًا على الإنترنت | Kids Learning Hub', desc: 'لعبة مجانية لتعلّم قراءة الساعة ذات العقارب: أربعة مستويات من الساعات الكاملة إلى الدقائق خمسًا خمسًا. لأعمار 6–10 دون تسجيل.' },
  },
  lede: {
    en: 'Reading an analogue clock is harder than it looks: two hands, two different scales, and numbers that mean hours for one hand and minutes for the other. This game builds the skill step by step, in four levels: o’clock, half past, quarter past and quarter to, then five-minute steps. Each question shows a real clock face, so children practise exactly what they will see on the classroom wall.',
    fr: 'Lire une horloge à aiguilles est plus difficile qu’il n’y paraît : deux aiguilles, deux échelles différentes, et des nombres qui indiquent les heures pour une aiguille et les minutes pour l’autre. Ce jeu construit la compétence pas à pas, en quatre niveaux : heures pleines, demies, quarts, puis minutes de 5 en 5. Chaque question montre un vrai cadran, comme l’horloge de la classe.',
    es: 'Leer un reloj de agujas es más difícil de lo que parece: dos agujas, dos escalas distintas y números que indican horas para una aguja y minutos para la otra. Este juego construye la habilidad paso a paso en cuatro niveles: en punto, y media, y cuarto y menos cuarto, y luego minutos de 5 en 5. Cada pregunta muestra una esfera real, como el reloj de la clase.',
    ar: 'قراءة الساعة ذات العقارب أصعب مما تبدو: عقربان، ومقياسان مختلفان، وأعداد تدلّ على الساعات بالنسبة لعقرب وعلى الدقائق بالنسبة للآخر. وهذه اللعبة تبني المهارة خطوة بخطوة في أربعة مستويات: الساعات الكاملة، ثم النصف، ثم الربع، ثم الدقائق خمسًا خمسًا. وكل سؤال يُظهر وجه ساعة حقيقيًا مثل ساعة القسم.',
  },
  how: {
    en: ['Start with the short hand only: “The short hand points to 3, so it is 3 o’clock.”', 'Teach the long hand as counting in fives around the clock: 5, 10, 15…', 'Only move to the next level after three stars at the current one.', 'Ask the time at real moments of the day: breakfast, leaving for school, bedtime.'],
    fr: ['Commencez par la petite aiguille seule : « Elle montre le 3, il est 3 heures. »', 'Présentez la grande aiguille comme un comptage de 5 en 5 autour du cadran : 5, 10, 15…', 'Ne passez au niveau suivant qu’après trois étoiles au niveau actuel.', 'Demandez l’heure à de vrais moments de la journée : petit-déjeuner, départ à l’école, coucher.'],
    es: ['Empieza solo con la aguja corta: «Señala el 3, son las 3 en punto».', 'Presenta la aguja larga como contar de 5 en 5 alrededor del reloj: 5, 10, 15…', 'Pasad al siguiente nivel solo tras tres estrellas en el actual.', 'Pregunta la hora en momentos reales del día: desayuno, salida al cole, hora de dormir.'],
    ar: ['ابدأ بالعقرب القصير وحده: «يشير إلى 3، إذن الساعة الثالثة».', 'قدّم العقرب الطويل كعدّ خمسًا خمسًا حول الساعة: 5، 10، 15…', 'لا تنتقلا إلى المستوى التالي إلا بعد ثلاث نجوم في المستوى الحالي.', 'اسأله عن الوقت في لحظات حقيقية من اليوم: الفطور، والذهاب إلى المدرسة، والنوم.'],
  },
  faq: {
    en: [['At what age do children learn to tell the time?', 'O’clock and half past around 6–7, quarters around 7, and five-minute steps around 8. Every child moves at their own pace.'], ['Why learn analogue clocks when phones are digital?', 'Analogue clocks are still in classrooms and public places, and they help children understand fractions of an hour and the passing of time.'], ['Are there printable clock worksheets too?', 'Yes — our free telling-time worksheets give a new sheet of nine clocks at every click.']],
    fr: [['À quel âge apprend-on à lire l’heure ?', 'Les heures pleines et les demies vers 6–7 ans, les quarts vers 7 ans et les minutes de 5 en 5 vers 8 ans. Chaque enfant avance à son rythme.'], ['Pourquoi apprendre l’horloge à aiguilles à l’ère du numérique ?', 'Les horloges à aiguilles restent présentes en classe et dans les lieux publics, et elles aident à comprendre les fractions d’heure et l’écoulement du temps.'], ['Existe-t-il aussi des fiches à imprimer ?', 'Oui : nos fiches gratuites « Lire l’heure » donnent neuf horloges nouvelles à chaque clic.']],
    es: [['¿A qué edad se aprende la hora?', 'En punto y y media hacia los 6–7 años, los cuartos hacia los 7 y los minutos de 5 en 5 hacia los 8. Cada niño avanza a su ritmo.'], ['¿Por qué aprender el reloj de agujas si los móviles son digitales?', 'Los relojes de agujas siguen en las aulas y los lugares públicos, y ayudan a entender las fracciones de hora y el paso del tiempo.'], ['¿También hay fichas para imprimir?', 'Sí: nuestras fichas gratis de la hora dan nueve relojes nuevos con cada clic.']],
    ar: [['في أي عمر يتعلّم الطفل قراءة الساعة؟', 'الساعات الكاملة والنصف نحو 6–7 سنوات، والأرباع نحو 7 سنوات، والدقائق خمسًا خمسًا نحو 8 سنوات. ولكل طفل وتيرته.'], ['لماذا نتعلّم الساعة ذات العقارب في زمن الهواتف الرقمية؟', 'ما زالت الساعات ذات العقارب موجودة في الأقسام والأماكن العامة، وهي تساعد على فهم أجزاء الساعة ومرور الوقت.'], ['هل توجد أوراق للطباعة أيضًا؟', 'نعم: أوراق «قراءة الساعة» المجانية تعطي تسع ساعات جديدة مع كل ضغطة.']],
  },
},

/* ── compare numbers (hungry crocodile) ────────────────────────────── */
{
  slug: 'compare-numbers', emoji: '🐊', ages: '5–10',
  meta: {
    en: { title: 'Greater Than Less Than Game — Hungry Crocodile, Free Online | Kids Learning Hub', desc: 'Free comparing numbers game: choose <, > or = and feed the hungry crocodile the bigger number. Numbers to 20, 100 and 1000. Ages 5–10.' },
    fr: { title: 'Jeu plus grand que, plus petit que — le crocodile affamé | Kids Learning Hub', desc: 'Jeu gratuit pour comparer les nombres : choisis <, > ou = et donne au crocodile le plus grand nombre. Nombres jusqu’à 20, 100 et 1000. 5–10 ans.' },
    es: { title: 'Juego mayor que, menor que — el cocodrilo hambriento | Kids Learning Hub', desc: 'Juego gratis para comparar números: elige <, > o = y dale al cocodrilo el número mayor. Números hasta 20, 100 y 1000. De 5 a 10 años.' },
    ar: { title: 'لعبة أكبر من وأصغر من — التمساح الجائع مجانًا | Kids Learning Hub', desc: 'لعبة مجانية لمقارنة الأعداد: اختر < أو > أو = وأطعم التمساح العدد الأكبر. أعداد حتى 20 و100 و1000. لأعمار 5–10.' },
  },
  lede: {
    en: 'The signs < and > confuse many children because they look alike. The hungry crocodile solves this with a simple picture: its mouth always opens towards the bigger number. In this game, children compare pairs of numbers that grow from 20 to 100 and then to 1000, including tricky pairs such as 47 and 74, and the occasional equal pair. It quietly trains place value: to compare big numbers, look at the digits from left to right.',
    fr: 'Les signes < et > embrouillent beaucoup d’enfants parce qu’ils se ressemblent. Le crocodile affamé règle cela avec une image simple : sa bouche s’ouvre toujours vers le plus grand nombre. Dans ce jeu, l’enfant compare des paires qui vont jusqu’à 20, puis 100, puis 1000, avec des pièges comme 47 et 74 et parfois deux nombres égaux. Il travaille ainsi la numération : pour comparer de grands nombres, on regarde les chiffres de gauche à droite.',
    es: 'Los signos < y > confunden a muchos niños porque se parecen. El cocodrilo hambriento lo resuelve con una imagen sencilla: su boca siempre se abre hacia el número mayor. En este juego, el niño compara parejas que llegan hasta 20, luego 100 y luego 1000, con trampas como 47 y 74 y alguna pareja igual. Así practica el valor posicional: para comparar números grandes, se miran las cifras de izquierda a derecha.',
    ar: 'الرمزان < و> يربكان كثيرًا من الأطفال لأنهما متشابهان. والتمساح الجائع يحلّ ذلك بصورة بسيطة: فمه يُفتح دائمًا نحو العدد الأكبر. في هذه اللعبة يقارن الطفل أزواجًا من الأعداد تصل إلى 20 ثم 100 ثم 1000، مع أفخاخ مثل 47 و74 وأحيانًا عددين متساويين. وهكذا يتدرّب على القيمة المنزلية: لمقارنة الأعداد الكبيرة ننظر إلى الأرقام من اليسار إلى اليمين.',
  },
  how: {
    en: ['Draw the crocodile mouth with your hands: open towards the bigger number.', 'Read every answer aloud: “47 is less than 74”.', 'For big numbers, compare the number of digits first, then the hundreds, then the tens.', 'Ask your child to invent a pair that would be “equal”.'],
    fr: ['Faites la bouche du crocodile avec les mains : ouverte vers le plus grand.', 'Lisez chaque réponse à voix haute : « 47 est plus petit que 74 ».', 'Pour les grands nombres, comparez d’abord le nombre de chiffres, puis les centaines, puis les dizaines.', 'Demandez à l’enfant d’inventer une paire « égale ».'],
    es: ['Haced la boca del cocodrilo con las manos: abierta hacia el mayor.', 'Leed cada respuesta en voz alta: «47 es menor que 74».', 'Con números grandes, comparad primero cuántas cifras tienen, luego las centenas y luego las decenas.', 'Pide a tu hijo que invente una pareja «igual».'],
    ar: ['اصنعا فم التمساح باليدين: مفتوحًا نحو العدد الأكبر.', 'اقرآ كل جواب بصوت عالٍ: «47 أصغر من 74».', 'في الأعداد الكبيرة، قارنا أولًا عدد الأرقام، ثم المئات، ثم العشرات.', 'اطلب من طفلك أن يخترع زوجًا من الأعداد «المتساوية».'],
  },
  faq: {
    en: [['How do I remember which sign is which?', 'The open side faces the bigger number, like a hungry crocodile’s mouth: 9 > 4 and 4 < 9.'], ['Why does the game use pairs like 47 and 74?', 'They show that the position of a digit changes its value — the heart of place value.'], ['Is there a printable version?', 'Yes, our free “Compare numbers” worksheets give new <, > and = exercises at every click.']],
    fr: [['Comment se souvenir du bon signe ?', 'Le côté ouvert est tourné vers le plus grand nombre, comme la bouche d’un crocodile affamé : 9 > 4 et 4 < 9.'], ['Pourquoi des paires comme 47 et 74 ?', 'Elles montrent que la place d’un chiffre change sa valeur : c’est le cœur de la numération.'], ['Existe-t-il une version à imprimer ?', 'Oui, nos fiches gratuites « Comparer les nombres » donnent de nouveaux exercices à chaque clic.']],
    es: [['¿Cómo recordar qué signo es cuál?', 'El lado abierto mira al número mayor, como la boca de un cocodrilo hambriento: 9 > 4 y 4 < 9.'], ['¿Por qué parejas como 47 y 74?', 'Muestran que la posición de una cifra cambia su valor: el corazón del valor posicional.'], ['¿Hay versión para imprimir?', 'Sí, nuestras fichas gratis «Comparar números» dan ejercicios nuevos con cada clic.']],
    ar: [['كيف أتذكّر أيّ رمز هو الصحيح؟', 'الجهة المفتوحة تتّجه نحو العدد الأكبر، مثل فم تمساح جائع: 9 > 4 و4 < 9.'], ['لماذا أزواج مثل 47 و74؟', 'لأنها تُظهر أن موضع الرقم يغيّر قيمته، وهذا جوهر القيمة المنزلية.'], ['هل توجد نسخة للطباعة؟', 'نعم، أوراق «مقارنة الأعداد» المجانية تعطي تمارين جديدة مع كل ضغطة.']],
  },
},

/* ── fraction pizza ────────────────────────────────────────────────── */
{
  slug: 'fraction-pizza', emoji: '🍕', ages: '7–11',
  meta: {
    en: { title: 'Fraction Pizza — Free Online Fractions Game for Kids | Kids Learning Hub', desc: 'Free fractions game: count the pizza slices and find the fraction with pepperoni — halves, thirds, quarters, sixths and eighths. Ages 7–11.' },
    fr: { title: 'Pizza des fractions — jeu gratuit pour apprendre les fractions | Kids Learning Hub', desc: 'Jeu gratuit sur les fractions : compte les parts de pizza et trouve la fraction avec du pepperoni — demis, tiers, quarts, sixièmes et huitièmes. 7–11 ans.' },
    es: { title: 'Pizza de fracciones — juego gratis para aprender fracciones | Kids Learning Hub', desc: 'Juego gratis de fracciones: cuenta las porciones de pizza y encuentra la fracción con pepperoni — medios, tercios, cuartos, sextos y octavos. De 7 a 11 años.' },
    ar: { title: 'بيتزا الكسور — لعبة مجانية لتعلّم الكسور | Kids Learning Hub', desc: 'لعبة كسور مجانية: عُدّ قطع البيتزا واعثر على الكسر المغطّى بالببروني — الأنصاف والأثلاث والأرباع والأسداس والأثمان. لأعمار 7–11.' },
  },
  lede: {
    en: 'Fractions become easy when children can see them. In Fraction Pizza, every question is a real picture: a pizza cut into equal slices, some of them covered in pepperoni. The bottom number of the fraction is how many slices there are; the top number is how many have pepperoni. The game starts with halves and quarters, then moves to thirds, sixths and eighths, and finally scatters the toppings so children must count carefully instead of guessing from the shape.',
    fr: 'Les fractions deviennent faciles quand on les voit. Dans la Pizza des fractions, chaque question est une vraie image : une pizza coupée en parts égales, dont certaines sont couvertes de pepperoni. Le nombre du bas indique combien il y a de parts ; celui du haut, combien ont du pepperoni. Le jeu commence par les demis et les quarts, passe aux tiers, sixièmes et huitièmes, puis disperse les garnitures pour obliger à compter au lieu de deviner.',
    es: 'Las fracciones se vuelven fáciles cuando se ven. En la Pizza de fracciones, cada pregunta es un dibujo real: una pizza cortada en porciones iguales, algunas con pepperoni. El número de abajo dice cuántas porciones hay; el de arriba, cuántas tienen pepperoni. El juego empieza con medios y cuartos, pasa a tercios, sextos y octavos, y al final reparte los ingredientes para obligar a contar en lugar de adivinar.',
    ar: 'تصبح الكسور سهلة حين يراها الطفل. في بيتزا الكسور، كل سؤال صورة حقيقية: بيتزا مقسّمة إلى قطع متساوية، بعضها مغطّى بالببروني. العدد في الأسفل يدلّ على عدد القطع، والعدد في الأعلى يدلّ على عدد القطع التي عليها الببروني. تبدأ اللعبة بالأنصاف والأرباع، ثم الأثلاث والأسداس والأثمان، ثم تبعثر القطع المغطّاة حتى يعدّ الطفل بانتباه بدل التخمين.',
  },
  how: {
    en: ['Say each fraction in words: “three out of eight equal slices”.', 'Point out that the slices must be equal — that is what makes it a fraction.', 'Cut a real pizza, pancake or sandwich into equal parts at home.', 'Watch for the common mistake of counting the plain slices instead of the pepperoni ones.'],
    fr: ['Dites chaque fraction en mots : « trois parts sur huit parts égales ».', 'Rappelez que les parts doivent être égales : c’est ce qui en fait une fraction.', 'Coupez une vraie pizza, une crêpe ou un sandwich en parts égales à la maison.', 'Surveillez l’erreur fréquente qui consiste à compter les parts nature au lieu des parts au pepperoni.'],
    es: ['Decid cada fracción con palabras: «tres de ocho porciones iguales».', 'Recalca que las porciones deben ser iguales: eso es lo que la hace una fracción.', 'Cortad en casa una pizza, una tortita o un bocadillo en partes iguales.', 'Atención al error habitual de contar las porciones sin pepperoni.'],
    ar: ['قولا كل كسر بالكلمات: «ثلاث قطع من ثماني قطع متساوية».', 'ذكّره بأن القطع يجب أن تكون متساوية، فهذا ما يجعلها كسرًا.', 'قسّما في البيت بيتزا أو فطيرة أو شطيرة حقيقية إلى أجزاء متساوية.', 'انتبه إلى الخطأ الشائع: عدّ القطع غير المغطّاة بدل القطع المغطّاة.'],
  },
  faq: {
    en: [['At what age do children learn fractions?', 'Halves and quarters around 6–7, thirds and sixths around 8, and comparing or adding fractions from about 9–10.'], ['Why does the game avoid equivalent answers like 2/4 and 1/2?', 'So that every question has exactly one correct choice. Equivalent fractions are a later step, best explored with our printable fraction worksheets.'], ['Can I print fraction exercises?', 'Yes — our free fraction worksheets make a new A4 sheet with pies and bars at every click.']],
    fr: [['À quel âge apprend-on les fractions ?', 'Les demis et les quarts vers 6–7 ans, les tiers et sixièmes vers 8 ans, et la comparaison ou l’addition vers 9–10 ans.'], ['Pourquoi le jeu évite-t-il des réponses équivalentes comme 2/4 et 1/2 ?', 'Pour qu’il y ait toujours une seule bonne réponse. Les fractions équivalentes viennent ensuite, à explorer avec nos fiches de fractions à imprimer.'], ['Peut-on imprimer des exercices ?', 'Oui : nos fiches de fractions gratuites créent une nouvelle page A4 à chaque clic.']],
    es: [['¿A qué edad se aprenden las fracciones?', 'Medios y cuartos hacia los 6–7 años, tercios y sextos hacia los 8, y comparar o sumar fracciones hacia los 9–10.'], ['¿Por qué el juego evita respuestas equivalentes como 2/4 y 1/2?', 'Para que siempre haya una sola respuesta correcta. Las fracciones equivalentes vienen después, con nuestras fichas para imprimir.'], ['¿Puedo imprimir ejercicios?', 'Sí: nuestras fichas gratis de fracciones crean una hoja A4 nueva con cada clic.']],
    ar: [['في أي عمر يتعلّم الطفل الكسور؟', 'الأنصاف والأرباع نحو 6–7 سنوات، والأثلاث والأسداس نحو 8، ومقارنة الكسور أو جمعها من نحو 9–10.'], ['لماذا تتجنّب اللعبة الأجوبة المتكافئة مثل 2/4 و1/2؟', 'حتى يكون لكل سؤال جواب صحيح واحد فقط. والكسور المتكافئة خطوة لاحقة، يُستحسن تناولها بأوراق الكسور المطبوعة.'], ['هل يمكن طباعة تمارين؟', 'نعم: أوراق الكسور المجانية تُنشئ صفحة A4 جديدة مع كل ضغطة.']],
  },
},

/* ── balance scale ─────────────────────────────────────────────────── */
{
  slug: 'balance-scale', emoji: '⚖️', ages: '6–11',
  meta: {
    en: { title: 'Balance the Scale — Free Missing Number Game for Kids | Kids Learning Hub', desc: 'Free missing number game: find the weight that balances the scale, like 5 + ? = 9. A friendly first step into algebra. Ages 6–11.' },
    fr: { title: 'Équilibre la balance — jeu gratuit du nombre manquant | Kids Learning Hub', desc: 'Jeu gratuit du nombre manquant : trouve le poids qui équilibre la balance, comme 5 + ? = 9. Un premier pas en douceur vers l’algèbre. 6–11 ans.' },
    es: { title: 'Equilibra la balanza — juego gratis del número que falta | Kids Learning Hub', desc: 'Juego gratis del número que falta: encuentra el peso que equilibra la balanza, como 5 + ? = 9. Un primer paso amable hacia el álgebra. De 6 a 11 años.' },
    ar: { title: 'وازِن الميزان — لعبة مجانية للعدد الناقص | Kids Learning Hub', desc: 'لعبة مجانية للعدد الناقص: اعثر على الوزن الذي يوازن الميزان، مثل 5 + ? = 9. خطوة أولى لطيفة نحو الجبر. لأعمار 6–11.' },
  },
  lede: {
    en: 'Many children think the equals sign means “write the answer next”. The balance scale shows what it really means: both sides have the same value. In this game, weights sit on each pan and one weight is missing; while it is empty the heavier side tips down, and when the right number is chosen the scale levels out. It is a very visual introduction to missing-number problems and to the idea behind equations.',
    fr: 'Beaucoup d’enfants pensent que le signe égal veut dire « écris le résultat ». La balance montre son vrai sens : les deux côtés ont la même valeur. Dans ce jeu, des poids sont posés sur chaque plateau et l’un d’eux manque ; tant qu’il est vide, le côté le plus lourd penche, et quand le bon nombre est choisi, la balance s’équilibre. C’est une introduction très visuelle aux nombres manquants et à l’idée d’équation.',
    es: 'Muchos niños creen que el signo igual significa «escribe el resultado». La balanza muestra su verdadero sentido: los dos lados valen lo mismo. En este juego hay pesas en cada platillo y falta una; mientras está vacía, el lado más pesado se inclina, y cuando se elige el número correcto la balanza se equilibra. Es una introducción muy visual al número que falta y a la idea de ecuación.',
    ar: 'يظنّ كثير من الأطفال أن علامة التساوي تعني «اكتب النتيجة». والميزان يُظهر معناها الحقيقي: للطرفين القيمة نفسها. في هذه اللعبة توجد أوزان في كل كفّة وينقص وزن واحد؛ وما دام فارغًا تميل الكفّة الأثقل، وحين يُختار العدد الصحيح يتوازن الميزان. إنها مدخل بصري جدًا إلى مسائل العدد الناقص وإلى فكرة المعادلة.',
  },
  how: {
    en: ['Before answering, ask “Which side is heavier? By how much?”', 'Encourage checking by adding each side after the answer.', 'Use a real kitchen scale or a coat hanger with cups to show balance at home.', 'Read the equation in both directions: 9 = 5 + 4 is as true as 5 + 4 = 9.'],
    fr: ['Avant de répondre, demandez : « Quel côté est le plus lourd ? De combien ? »', 'Encouragez la vérification en additionnant chaque côté après la réponse.', 'Montrez l’équilibre à la maison avec une balance de cuisine ou un cintre et deux gobelets.', 'Lisez l’égalité dans les deux sens : 9 = 5 + 4 est aussi vrai que 5 + 4 = 9.'],
    es: ['Antes de responder, pregunta: «¿Qué lado pesa más? ¿Cuánto más?»', 'Anima a comprobar sumando cada lado después de responder.', 'Mostrad el equilibrio en casa con una báscula o una percha con dos vasos.', 'Leed la igualdad en los dos sentidos: 9 = 5 + 4 es tan cierto como 5 + 4 = 9.'],
    ar: ['قبل الجواب اسأله: «أيّ الكفّتين أثقل؟ وبكم؟»', 'شجّعه على التحقّق بجمع كل طرف بعد الجواب.', 'أظهرا التوازن في البيت بميزان مطبخ أو بعلّاقة ملابس وكأسين.', 'اقرآ المساواة في الاتجاهين: 9 = 5 + 4 صحيحة مثل 5 + 4 = 9.'],
  },
  faq: {
    en: [['Is this algebra?', 'It is the foundation of it. Finding the missing number in 5 + ? = 9 is the same reasoning as solving x + 5 = 9, without letters.'], ['How hard does it get?', 'It starts with two weights to 10, then three weights to 20, and up to 40 with two weights on each side.'], ['My child adds everything together. What should I do?', 'Point to the tilting scale: the goal is to make both sides equal, not to find a total. Ask what is missing on the lighter side.']],
    fr: [['Est-ce de l’algèbre ?', 'C’en est la base. Trouver le nombre manquant dans 5 + ? = 9 demande le même raisonnement que résoudre x + 5 = 9, sans lettres.'], ['Jusqu’où monte la difficulté ?', 'On commence avec deux poids jusqu’à 10, puis trois poids jusqu’à 20, et jusqu’à 40 avec deux poids de chaque côté.'], ['Mon enfant additionne tout. Que faire ?', 'Montrez la balance qui penche : le but est d’égaliser les deux côtés, pas de trouver un total. Demandez ce qui manque du côté le plus léger.']],
    es: [['¿Esto es álgebra?', 'Es su base. Encontrar el número que falta en 5 + ? = 9 es el mismo razonamiento que resolver x + 5 = 9, sin letras.'], ['¿Hasta dónde sube la dificultad?', 'Empieza con dos pesas hasta 10, luego tres pesas hasta 20, y llega a 40 con dos pesas a cada lado.'], ['Mi hijo lo suma todo. ¿Qué hago?', 'Señala la balanza inclinada: el objetivo es igualar los lados, no hallar un total. Pregunta qué falta en el lado más ligero.']],
    ar: [['هل هذا جبر؟', 'إنه أساسه. فإيجاد العدد الناقص في 5 + ? = 9 هو نفس التفكير في حلّ x + 5 = 9، لكن دون حروف.'], ['إلى أيّ حدّ تزداد الصعوبة؟', 'تبدأ بوزنين حتى 10، ثم ثلاثة أوزان حتى 20، وتصل إلى 40 مع وزنين في كل كفّة.'], ['طفلي يجمع كل الأعداد، ماذا أفعل؟', 'أشر إلى الميزان المائل: الهدف هو جعل الطرفين متساويين لا إيجاد المجموع. واسأله ما الذي ينقص الكفّة الأخفّ.']],
  },
},

/* ── shape detective ───────────────────────────────────────────────── */
{
  slug: 'shape-detective', emoji: '🔷', ages: '4–8',
  meta: {
    en: { title: 'Shape Detective — Free 2D Shapes Game for Kids | Kids Learning Hub', desc: 'Free shapes game: name circles, triangles, squares, rectangles, rhombuses, pentagons, hexagons and more, and count their sides and corners. Ages 4–8.' },
    fr: { title: 'Détective des formes — jeu gratuit des formes géométriques | Kids Learning Hub', desc: 'Jeu gratuit des formes : nomme cercles, triangles, carrés, rectangles, losanges, pentagones, hexagones et plus, et compte leurs côtés et sommets. 4–8 ans.' },
    es: { title: 'Detective de figuras — juego gratis de figuras geométricas | Kids Learning Hub', desc: 'Juego gratis de figuras: nombra círculos, triángulos, cuadrados, rectángulos, rombos, pentágonos, hexágonos y más, y cuenta sus lados y vértices. De 4 a 8 años.' },
    ar: { title: 'محقّق الأشكال — لعبة مجانية للأشكال الهندسية | Kids Learning Hub', desc: 'لعبة أشكال مجانية: سمِّ الدائرة والمثلث والمربع والمستطيل والمعيّن والمخمّس والمسدّس وغيرها، وعُدّ أضلاعها ورؤوسها. لأعمار 4–8.' },
  },
  lede: {
    en: 'Young children often recognise a shape only in its “usual” position: a triangle pointing up, a square sitting flat. Shape Detective shows eleven shapes in different colours and slight rotations, and offers look-alike answers — square or rhombus, circle or oval, pentagon or hexagon — so children must look at the properties, not just the overall picture. After each answer, a short line says how many sides and corners the shape has.',
    fr: 'Les jeunes enfants ne reconnaissent souvent une forme que dans sa position « habituelle » : un triangle pointe en haut, un carré posé à plat. Le Détective des formes montre onze formes de couleurs et d’orientations variées, avec des réponses qui se ressemblent — carré ou losange, cercle ou ovale, pentagone ou hexagone — pour obliger à regarder les propriétés. Après chaque réponse, une ligne indique le nombre de côtés et de sommets.',
    es: 'Los niños pequeños a menudo reconocen una figura solo en su posición «habitual»: el triángulo con la punta arriba, el cuadrado apoyado. El Detective de figuras muestra once figuras de colores y giros distintos, con respuestas parecidas —cuadrado o rombo, círculo u óvalo, pentágono o hexágono— para obligar a fijarse en las propiedades. Después de cada respuesta, una línea dice cuántos lados y vértices tiene.',
    ar: 'كثيرًا ما يتعرّف الأطفال الصغار على الشكل في وضعه «المعتاد» فقط: مثلث رأسه إلى الأعلى ومربع مستقرّ على قاعدته. ولعبة محقّق الأشكال تعرض أحد عشر شكلًا بألوان واتجاهات مختلفة، مع أجوبة متشابهة — مربع أم معيّن، دائرة أم شكل بيضوي، مخمّس أم مسدّس — ليركّز الطفل على الخصائص لا على المظهر العام. وبعد كل جواب يظهر سطر يذكر عدد الأضلاع والرؤوس.',
  },
  how: {
    en: ['Ask your child to trace each side with a finger and count aloud.', 'Go on a shape hunt at home: clocks, windows, road signs, slices of fruit.', 'Explain the difference between a square and a rhombus: both have four equal sides, but only the square has square corners.', 'Name the shapes in the language your child learns at school and at home.'],
    fr: ['Demandez à l’enfant de suivre chaque côté du doigt en comptant.', 'Faites une chasse aux formes à la maison : horloges, fenêtres, panneaux, tranches de fruits.', 'Expliquez la différence entre carré et losange : quatre côtés égaux tous les deux, mais seul le carré a des angles droits.', 'Nommez les formes dans la langue de l’école et dans celle de la maison.'],
    es: ['Pide a tu hijo que recorra cada lado con el dedo mientras cuenta.', 'Haced una búsqueda de figuras en casa: relojes, ventanas, señales, rodajas de fruta.', 'Explica la diferencia entre cuadrado y rombo: los dos tienen cuatro lados iguales, pero solo el cuadrado tiene ángulos rectos.', 'Nombrad las figuras en el idioma del colegio y en el de casa.'],
    ar: ['اطلب من طفلك أن يمرّر إصبعه على كل ضلع وهو يعدّ.', 'قوما بصيد الأشكال في البيت: الساعات والنوافذ وإشارات الطريق وشرائح الفواكه.', 'اشرح الفرق بين المربع والمعيّن: لكليهما أربعة أضلاع متساوية، لكن المربع وحده زواياه قائمة.', 'سمّيا الأشكال بلغة المدرسة ولغة البيت.'],
  },
  faq: {
    en: [['Which shapes are in the game?', 'Circle, oval, triangle, square, rectangle, rhombus, pentagon, hexagon, octagon, star and heart.'], ['Why are some answers so similar?', 'Look-alike choices make children check properties such as the number of sides or square corners — real geometric thinking.'], ['Is there something to print?', 'Yes, our free 2D shapes worksheets let children trace and colour the basic shapes.']],
    fr: [['Quelles formes contient le jeu ?', 'Cercle, ovale, triangle, carré, rectangle, losange, pentagone, hexagone, octogone, étoile et cœur.'], ['Pourquoi certaines réponses se ressemblent-elles ?', 'Les choix proches obligent l’enfant à vérifier des propriétés comme le nombre de côtés ou les angles droits : c’est un vrai raisonnement géométrique.'], ['Y a-t-il quelque chose à imprimer ?', 'Oui, nos fiches gratuites de formes permettent de tracer et colorier les formes de base.']],
    es: [['¿Qué figuras hay en el juego?', 'Círculo, óvalo, triángulo, cuadrado, rectángulo, rombo, pentágono, hexágono, octógono, estrella y corazón.'], ['¿Por qué algunas respuestas se parecen tanto?', 'Las opciones parecidas obligan a comprobar propiedades como el número de lados o los ángulos rectos: auténtico razonamiento geométrico.'], ['¿Hay algo para imprimir?', 'Sí, nuestras fichas gratis de figuras permiten repasar y colorear las figuras básicas.']],
    ar: [['ما الأشكال الموجودة في اللعبة؟', 'الدائرة والشكل البيضوي والمثلث والمربع والمستطيل والمعيّن والمخمّس والمسدّس والمثمّن والنجمة والقلب.'], ['لماذا تتشابه بعض الأجوبة؟', 'الخيارات المتشابهة تجعل الطفل يتحقّق من الخصائص مثل عدد الأضلاع أو الزوايا القائمة، وهذا تفكير هندسي حقيقي.'], ['هل يوجد شيء للطباعة؟', 'نعم، أوراق الأشكال المجانية تتيح تتبّع الأشكال الأساسية وتلوينها.']],
  },
},

];
