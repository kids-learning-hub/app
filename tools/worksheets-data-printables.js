/* Kids Learning Hub — guide content for the most-requested printables added
   in October 2026: word search, count and write, blank multiplication chart,
   reward chart, handwriting paper, pattern worksheets.
   Merged into tools/worksheets-data.js.                                    */
'use strict';

module.exports = [

{
  slug: 'word-search',
  meta: {
    en: { title: 'Free Printable Word Search for Kids — Easy to Hard | Kids Learning Hub', desc: 'Free printable word search puzzles for kids: animals, fruits, colours, school, the body and the sea, in English, French, Spanish and Arabic. A new puzzle every click, with answers.' },
    fr: { title: 'Mots mêlés à imprimer pour enfants — gratuit, facile à difficile | Kids Learning Hub', desc: 'Mots mêlés gratuits pour enfants : animaux, fruits, couleurs, école, corps et mer, en français, anglais, espagnol et arabe. Une nouvelle grille à chaque clic, avec solution.' },
    es: { title: 'Sopas de letras para niños para imprimir — gratis | Kids Learning Hub', desc: 'Sopas de letras gratis para niños: animales, frutas, colores, escuela, cuerpo y mar, en español, inglés, francés y árabe. Una nueva con cada clic y con solución.' },
    ar: { title: 'شبكة البحث عن الكلمات للأطفال للطباعة — مجانًا | Kids Learning Hub', desc: 'شبكات بحث عن الكلمات مجانية للأطفال: الحيوانات والفواكه والألوان والمدرسة والجسم والبحر، بالعربية والفرنسية والإنجليزية والإسبانية. شبكة جديدة مع كل ضغطة مع الحل.' },
  }, emoji: '🔎', ages: '5–12',
  lede: {
    en: 'A word search looks like a simple pastime, but it quietly trains the skills behind fluent reading: recognising letter patterns, scanning carefully line by line and keeping a word in mind while you look for it. Each puzzle here is built around one theme, so children meet a family of related words, and you can switch the language to practise vocabulary in English, French, Spanish or Arabic.',
    fr: 'Les mots mêlés ressemblent à un simple passe-temps, mais ils entraînent en douceur les compétences de la lecture fluide : reconnaître des suites de lettres, balayer une grille ligne par ligne et garder un mot en tête pendant qu’on le cherche. Chaque grille porte sur un thème, pour découvrir une famille de mots, et on peut changer de langue pour travailler le vocabulaire en français, anglais, espagnol ou arabe.',
    es: 'La sopa de letras parece un simple pasatiempo, pero entrena en silencio las habilidades de la lectura fluida: reconocer secuencias de letras, recorrer la cuadrícula línea a línea y mantener una palabra en mente mientras se busca. Cada sopa gira en torno a un tema, para conocer una familia de palabras, y puedes cambiar de idioma para practicar vocabulario en español, inglés, francés o árabe.',
    ar: 'تبدو شبكة البحث عن الكلمات تسلية بسيطة، لكنها تدرّب بهدوء على مهارات القراءة الطليقة: التعرّف على تتابع الحروف، وتفحّص الشبكة سطرًا سطرًا، والاحتفاظ بالكلمة في الذهن أثناء البحث عنها. وكل شبكة تدور حول موضوع واحد ليكتشف الطفل عائلة من الكلمات، ويمكن تغيير اللغة للتدرّب على المفردات بالعربية أو الفرنسية أو الإنجليزية أو الإسبانية.',
  },
  how: {
    en: ['Start with the easy 8×8 level: words only go across and down.', 'Read the word list aloud together before starting, and talk about what each word means.', 'Teach a strategy: look for the first letter, then check its neighbours for the second letter.', 'Use the language switch to practise the same theme in a second language.'],
    fr: ['Commencez par le niveau facile 8×8 : les mots sont seulement à l’horizontale et à la verticale.', 'Lisez la liste de mots ensemble avant de commencer et parlez du sens de chaque mot.', 'Apprenez une stratégie : chercher la première lettre, puis regarder ses voisines pour la deuxième.', 'Changez de langue pour travailler le même thème dans une deuxième langue.'],
    es: ['Empieza por el nivel fácil 8×8: las palabras solo van en horizontal y en vertical.', 'Leed juntos la lista de palabras antes de empezar y hablad de su significado.', 'Enseña una estrategia: buscar la primera letra y mirar sus vecinas para encontrar la segunda.', 'Cambia de idioma para practicar el mismo tema en una segunda lengua.'],
    ar: ['ابدأ بالمستوى السهل 8×8: الكلمات أفقية وعمودية فقط.', 'اقرآ قائمة الكلمات معًا قبل البدء، وتحدّثا عن معنى كل كلمة.', 'علّمه طريقة: يبحث عن الحرف الأول، ثم ينظر حوله ليجد الحرف الثاني.', 'غيّر اللغة للتدرّب على الموضوع نفسه بلغة ثانية.'],
  },
  faq: {
    en: [['Which directions are used?', 'Easy: across and down. Medium: diagonals too. Hard: some words are also written backwards.'], ['Does it work in Arabic?', 'Yes. In Arabic the words read from right to left across the grid, and the letters are shown in their separate form.'], ['Is there an answer key?', 'Yes, switch on the answer key before printing: the hidden words are highlighted.']],
    fr: [['Dans quels sens sont les mots ?', 'Facile : horizontal et vertical. Moyen : aussi en diagonale. Difficile : certains mots sont aussi écrits à l’envers.'], ['Est-ce que cela fonctionne en arabe ?', 'Oui. En arabe, les mots se lisent de droite à gauche dans la grille, avec les lettres sous leur forme isolée.'], ['Y a-t-il une solution ?', 'Oui, activez le corrigé avant d’imprimer : les mots cachés sont surlignés.']],
    es: [['¿En qué direcciones están las palabras?', 'Fácil: horizontal y vertical. Medio: también en diagonal. Difícil: algunas palabras están escritas al revés.'], ['¿Funciona en árabe?', 'Sí. En árabe las palabras se leen de derecha a izquierda, con las letras en su forma aislada.'], ['¿Hay solución?', 'Sí, activa las soluciones antes de imprimir: las palabras escondidas aparecen resaltadas.']],
    ar: [['في أيّ اتجاه تكون الكلمات؟', 'السهل: أفقيًا وعموديًا. المتوسط: وقطريًا أيضًا. الصعب: بعض الكلمات مكتوبة بالمقلوب.'], ['هل تعمل بالعربية؟', 'نعم. تُقرأ الكلمات العربية في الشبكة من اليمين إلى اليسار، والحروف مكتوبة منفصلة.'], ['هل يوجد حلّ؟', 'نعم، فعّل ورقة الحلول قبل الطباعة: تظهر الكلمات المخفية ملوّنة.']],
  },
},

{
  slug: 'count-and-write',
  meta: {
    en: { title: 'Free Counting Worksheets for Preschool & Kindergarten (1–20) | Kids Learning Hub', desc: 'Free printable counting worksheets: count the pictures and write the number, from 1–5 to 11–20. Grouped in fives for easy counting. A new A4 sheet every click, with answers.' },
    fr: { title: 'Fiches pour apprendre à compter (maternelle, 1 à 20) — gratuit | Kids Learning Hub', desc: 'Fiches gratuites pour apprendre à compter : compte les images et écris le nombre, de 1–5 à 11–20, par rangées de cinq. Une nouvelle fiche A4 à chaque clic, avec corrigé.' },
    es: { title: 'Fichas para aprender a contar (infantil, 1 a 20) — gratis | Kids Learning Hub', desc: 'Fichas gratis para aprender a contar: cuenta los dibujos y escribe el número, de 1–5 a 11–20, en filas de cinco. Una hoja A4 nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق تعلّم العدّ للروض (من 1 إلى 20) — مجانًا | Kids Learning Hub', desc: 'أوراق مجانية لتعلّم العدّ: عُدّ الصور واكتب العدد، من 1–5 إلى 11–20، في صفوف من خمسة. ورقة A4 جديدة مع كل ضغطة مع الحلول.' },
  }, emoji: '🔢', ages: '3–6',
  lede: {
    en: 'Counting a group of objects and writing the number links the three faces of a number: the quantity, the spoken word and the written digit. These sheets show colourful pictures arranged in rows of five, the same layout as a ten frame, so children can start to see “five and three more” instead of counting one by one. Three levels lead from 1–5 for the youngest to 11–20.',
    fr: 'Compter une collection et écrire le nombre relie les trois visages d’un nombre : la quantité, le mot dit et le chiffre écrit. Ces fiches présentent des images colorées par rangées de cinq, comme une boîte de dix, pour que l’enfant commence à voir « cinq et encore trois » au lieu de compter un par un. Trois niveaux vont de 1–5 pour les plus petits à 11–20.',
    es: 'Contar un grupo de objetos y escribir el número une las tres caras de un número: la cantidad, la palabra y la cifra escrita. Estas fichas muestran dibujos de colores en filas de cinco, como un marco de diez, para que el niño empiece a ver «cinco y tres más» en lugar de contar uno a uno. Tres niveles van de 1–5 para los más pequeños a 11–20.',
    ar: 'عدّ مجموعة من الأشياء وكتابة العدد يربط بين وجوه العدد الثلاثة: الكمية، والكلمة المنطوقة، والرقم المكتوب. وتعرض هذه الأوراق صورًا ملوّنة في صفوف من خمسة، مثل إطار العشرة، حتى يبدأ الطفل برؤية «خمسة وثلاثة أخرى» بدل العدّ واحدًا واحدًا. وتتدرّج ثلاثة مستويات من 1–5 للأصغر سنًّا إلى 11–20.',
  },
  how: {
    en: ['Ask your child to touch each picture with a pencil while counting aloud.', 'After writing, ask “How many?” — the answer is the last number said.', 'At 11–20, point out the full rows: “a row of five, another five, that makes ten…”.', 'Let little ones colour the pictures they have counted.'],
    fr: ['Demandez à l’enfant de toucher chaque image avec son crayon en comptant à voix haute.', 'Après avoir écrit, demandez « Combien ? » : la réponse est le dernier nombre dit.', 'Pour 11–20, montrez les rangées pleines : « cinq, encore cinq, ça fait dix… ».', 'Laissez les petits colorier les images qu’ils ont comptées.'],
    es: ['Pide a tu hijo que toque cada dibujo con el lápiz mientras cuenta en voz alta.', 'Después de escribir, pregunta «¿Cuántos?»: la respuesta es el último número dicho.', 'En 11–20, señala las filas completas: «cinco, otros cinco, son diez…».', 'Deja que los pequeños coloreen los dibujos que han contado.'],
    ar: ['اطلب من طفلك أن يلمس كل صورة بقلمه وهو يعدّ بصوت عالٍ.', 'بعد الكتابة اسأله «كم عددها؟»: الجواب هو آخر عدد قاله.', 'في 11–20، أشر إلى الصفوف الكاملة: «خمسة، وخمسة أخرى، هذه عشرة…».', 'دع الصغار يلوّنون الصور التي عدّوها.'],
  },
  faq: {
    en: [['From what age?', '1–5 from about 3, 1–10 from about 4, and 11–20 from 5 to 6.'], ['Why are the pictures in rows of five?', 'Groups of five help children see amounts at a glance and prepare them for adding with tens.'], ['Can children trace the numbers too?', 'Yes — our free number tracing sheets (0–9) are perfect before or alongside these.']],
    fr: [['Dès quel âge ?', '1–5 dès 3 ans environ, 1–10 vers 4 ans et 11–20 vers 5–6 ans.'], ['Pourquoi des rangées de cinq ?', 'Les groupes de cinq aident à voir les quantités d’un coup d’œil et préparent au calcul avec les dizaines.'], ['Peut-on aussi tracer les chiffres ?', 'Oui : nos fiches gratuites « Chiffres 0–9 » sont idéales avant ou en même temps.']],
    es: [['¿Desde qué edad?', '1–5 desde los 3 años, 1–10 hacia los 4 y 11–20 hacia los 5–6.'], ['¿Por qué filas de cinco?', 'Los grupos de cinco ayudan a ver las cantidades de un vistazo y preparan para sumar con decenas.'], ['¿También se pueden repasar los números?', 'Sí: nuestras fichas gratis «Números 0–9» son ideales antes o a la vez.']],
    ar: [['من أي عمر؟', '1–5 من نحو 3 سنوات، و1–10 نحو 4 سنوات، و11–20 في 5–6 سنوات.'], ['لماذا الصور في صفوف من خمسة؟', 'مجموعات الخمسة تساعد الطفل على رؤية الكمية بنظرة واحدة، وتمهّد للحساب بالعشرات.'], ['هل يمكن أيضًا تتبّع كتابة الأرقام؟', 'نعم، أوراق «الأرقام 0–9» المجانية مثالية قبلها أو معها.']],
  },
},

{
  slug: 'multiplication-chart',
  meta: {
    en: { title: 'Blank Multiplication Chart Printable (1–10) — Free | Kids Learning Hub', desc: 'Free printable blank multiplication chart: fill in the 5×5 or 10×10 times table grid, fully blank or half filled. A new sheet every click, with the completed chart as answer key.' },
    fr: { title: 'Table de Pythagore vierge à imprimer (1 à 10) — gratuit | Kids Learning Hub', desc: 'Table de Pythagore à compléter gratuite : grille 5×5 ou 10×10, vide ou à moitié remplie. Une nouvelle grille à chaque clic, avec la table complète en corrigé.' },
    es: { title: 'Tabla de multiplicar en blanco para imprimir (1 al 10) — gratis | Kids Learning Hub', desc: 'Tabla pitagórica en blanco gratis: cuadrícula 5×5 o 10×10, vacía o a medio rellenar. Una nueva con cada clic y con la tabla completa como solución.' },
    ar: { title: 'جدول ضرب فارغ للطباعة (من 1 إلى 10) — مجانًا | Kids Learning Hub', desc: 'جدول ضرب فارغ مجاني للإكمال: شبكة 5×5 أو 10×10، فارغة أو نصف مملوءة. شبكة جديدة مع كل ضغطة، والجدول الكامل كورقة حلول.' },
  }, emoji: '✖️', ages: '7–11',
  lede: {
    en: 'Filling in a multiplication chart is more than copying answers: children discover the patterns that make the tables easier — the diagonal of square numbers, the symmetry that shows 3 × 7 = 7 × 3, the tens column. The 5×5 grid suits beginners, the half-filled 10×10 offers support, and the blank 10×10 is a real challenge to check whether all the tables are known.',
    fr: 'Compléter une table de Pythagore, ce n’est pas seulement recopier des résultats : l’enfant découvre les régularités qui facilitent les tables — la diagonale des carrés, la symétrie qui montre que 3 × 7 = 7 × 3, la colonne des dizaines. La grille 5×5 convient aux débutants, la 10×10 à moitié remplie offre un appui, et la 10×10 vide est un vrai défi pour vérifier que toutes les tables sont sues.',
    es: 'Completar una tabla pitagórica es más que copiar resultados: el niño descubre las regularidades que facilitan las tablas, como la diagonal de los cuadrados, la simetría que muestra que 3 × 7 = 7 × 3 o la columna del 10. La cuadrícula 5×5 es para empezar, la 10×10 a medias da apoyo y la 10×10 en blanco es un auténtico reto para comprobar si se saben todas las tablas.',
    ar: 'إكمال جدول الضرب أكثر من نسخ النتائج: فالطفل يكتشف الأنماط التي تسهّل الجداول، مثل قطر الأعداد المربّعة، والتناظر الذي يُظهر أن 3 × 7 = 7 × 3، وعمود العشرات. وشبكة 5×5 مناسبة للمبتدئين، و10×10 نصف المملوءة تقدّم دعمًا، أما 10×10 الفارغة فتحدٍّ حقيقي للتأكّد من حفظ كل الجداول.',
  },
  how: {
    en: ['Fill in the easy rows first (1, 2, 5 and 10), then the others.', 'Ask your child to find the diagonal of square numbers (1, 4, 9, 16…).', 'Point out the symmetry: every fact appears twice in the chart.', 'Time the blank chart once a week and celebrate a faster finish.'],
    fr: ['Remplissez d’abord les lignes faciles (1, 2, 5 et 10), puis les autres.', 'Demandez à l’enfant de trouver la diagonale des carrés (1, 4, 9, 16…).', 'Montrez la symétrie : chaque résultat apparaît deux fois dans la table.', 'Chronométrez la grille vide une fois par semaine et fêtez les progrès.'],
    es: ['Rellenad primero las filas fáciles (1, 2, 5 y 10) y después las demás.', 'Pide a tu hijo que encuentre la diagonal de los cuadrados (1, 4, 9, 16…).', 'Señala la simetría: cada resultado aparece dos veces en la tabla.', 'Cronometrad la tabla en blanco una vez por semana y celebrad los progresos.'],
    ar: ['املأ أولًا الصفوف السهلة (1 و2 و5 و10)، ثم الباقي.', 'اطلب من طفلك أن يجد قطر الأعداد المربّعة (1، 4، 9، 16…).', 'أشر إلى التناظر: كل نتيجة تظهر مرتين في الجدول.', 'احسب الوقت على الشبكة الفارغة مرة في الأسبوع واحتفل بالتحسّن.'],
  },
  faq: {
    en: [['What is a blank multiplication chart for?', 'Filling it in practises every times table at once and reveals the patterns that make them easier to remember.'], ['Which level should I choose?', '5×5 for beginners, the half-filled 10×10 while learning, and the blank 10×10 to check that all tables are known.'], ['Is there a completed chart to hang on the wall?', 'Yes — print our free colourful times tables poster.']],
    fr: [['À quoi sert une table de Pythagore vierge ?', 'La compléter fait réviser toutes les tables à la fois et révèle les régularités qui aident à les mémoriser.'], ['Quel niveau choisir ?', '5×5 pour débuter, 10×10 à moitié remplie pendant l’apprentissage, et 10×10 vide pour vérifier que tout est su.'], ['Existe-t-il une table complète à afficher ?', 'Oui : imprimez notre poster coloré gratuit des tables.']],
    es: [['¿Para qué sirve una tabla en blanco?', 'Completarla repasa todas las tablas a la vez y revela las regularidades que ayudan a recordarlas.'], ['¿Qué nivel elijo?', '5×5 para empezar, la 10×10 a medias mientras se aprende y la 10×10 en blanco para comprobar que se saben todas.'], ['¿Hay una tabla completa para la pared?', 'Sí: imprime nuestro póster de colores gratis de las tablas.']],
    ar: [['ما فائدة جدول الضرب الفارغ؟', 'إكماله يراجع كل الجداول دفعة واحدة، ويكشف الأنماط التي تسهّل حفظها.'], ['أيّ مستوى أختار؟', '5×5 للمبتدئين، و10×10 نصف المملوءة أثناء التعلّم، و10×10 الفارغة للتأكّد من حفظ الكل.'], ['هل يوجد جدول كامل للتعليق؟', 'نعم: اطبع ملصق جداول الضرب الملوّن المجاني.']],
  },
},

{
  slug: 'reward-chart',
  meta: {
    en: { title: 'Free Printable Reward Chart for Kids — Weekly Sticker Chart | Kids Learning Hub', desc: 'Free printable reward chart for kids: a weekly sticker and behaviour chart with goals to fill in, in English, French, Spanish or Arabic. Three fun designs, A4.' },
    fr: { title: 'Tableau de récompenses enfant à imprimer — gratuit | Kids Learning Hub', desc: 'Tableau de récompenses gratuit à imprimer : un tableau de gommettes et de comportement pour la semaine, avec objectifs à écrire, en français, anglais, espagnol ou arabe.' },
    es: { title: 'Tabla de recompensas para niños para imprimir — gratis | Kids Learning Hub', desc: 'Tabla de recompensas gratis para imprimir: tabla semanal de pegatinas y conducta con objetivos para escribir, en español, inglés, francés o árabe. Tres diseños.' },
    ar: { title: 'جدول مكافآت للأطفال للطباعة — مجانًا | Kids Learning Hub', desc: 'جدول مكافآت مجاني للطباعة: جدول ملصقات وسلوك أسبوعي مع أهداف تكتبها، بالعربية أو الفرنسية أو الإنجليزية أو الإسبانية. ثلاثة تصاميم.' },
  }, emoji: '⭐', ages: '3–10',
  lede: {
    en: 'A reward chart works best when it is simple, positive and agreed together. This weekly chart has space for up to four clear goals — brushing teeth, reading for ten minutes, tidying toys — and a box for each day where your child adds a sticker or colours a star. At the bottom, you decide together what the reward will be and how many stars it takes. Three designs (stars, animals, space) keep it fun.',
    fr: 'Un tableau de récompenses fonctionne le mieux quand il est simple, positif et décidé ensemble. Ce tableau de la semaine permet d’écrire jusqu’à quatre objectifs clairs — se brosser les dents, lire dix minutes, ranger ses jouets — avec une case par jour où l’enfant colle une gommette ou colorie une étoile. En bas, vous choisissez ensemble la récompense et le nombre d’étoiles à atteindre. Trois décors (étoiles, animaux, espace) le rendent amusant.',
    es: 'Una tabla de recompensas funciona mejor si es sencilla, positiva y acordada juntos. Esta tabla semanal tiene espacio para cuatro objetivos claros —lavarse los dientes, leer diez minutos, recoger los juguetes— y una casilla por día donde el niño pega una pegatina o colorea una estrella. Abajo decidís juntos el premio y cuántas estrellas hacen falta. Tres diseños (estrellas, animales, espacio) la hacen divertida.',
    ar: 'ينجح جدول المكافآت أكثر حين يكون بسيطًا وإيجابيًا ومتّفقًا عليه معًا. وهذا الجدول الأسبوعي يتّسع لأربعة أهداف واضحة — تنظيف الأسنان، والقراءة عشر دقائق، وترتيب الألعاب — مع خانة لكل يوم يلصق فيها الطفل ملصقًا أو يلوّن نجمة. وفي الأسفل تتّفقان على المكافأة وعدد النجوم اللازم لها. وثلاثة تصاميم (نجوم، حيوانات، فضاء) تجعله ممتعًا.',
  },
  how: {
    en: ['Choose one to four goals and write them in positive words: “I brush my teeth”, not “Don’t forget”.', 'Make goals small enough to reach most days at the start.', 'Agree on the reward in advance; time together often works better than toys.', 'Praise the effort when you add a sticker, not just the result.'],
    fr: ['Choisissez un à quatre objectifs, formulés positivement : « Je me brosse les dents », pas « N’oublie pas ».', 'Au début, fixez des objectifs atteignables presque tous les jours.', 'Décidez la récompense à l’avance ; un moment ensemble marche souvent mieux qu’un jouet.', 'En collant la gommette, félicitez l’effort, pas seulement le résultat.'],
    es: ['Elige de uno a cuatro objetivos escritos en positivo: «Me lavo los dientes», no «No te olvides».', 'Al principio, que los objetivos se puedan cumplir casi todos los días.', 'Acordad el premio de antemano; el tiempo juntos suele funcionar mejor que un juguete.', 'Al pegar la pegatina, elogia el esfuerzo y no solo el resultado.'],
    ar: ['اختر من هدف إلى أربعة، واكتبها بصيغة إيجابية: «أنظّف أسناني» لا «لا تنسَ».', 'في البداية اجعل الأهداف سهلة التحقيق في أغلب الأيام.', 'اتّفقا على المكافأة مسبقًا، فالوقت المشترك غالبًا أنفع من لعبة.', 'حين يلصق الملصق، امدح الجهد لا النتيجة فقط.'],
  },
  faq: {
    en: [['How many goals should a reward chart have?', 'One or two for young children, up to four for older ones. Fewer, clear goals work better than a long list.'], ['Do reward charts really work?', 'They help build new habits when goals are clear and positive; the aim is to stop using the chart once the habit is in place.'], ['Can I print it in Arabic?', 'Yes, switch the page to Arabic: the days and text change and the chart reads from right to left.']],
    fr: [['Combien d’objectifs sur un tableau ?', 'Un ou deux pour les petits, jusqu’à quatre pour les plus grands. Peu d’objectifs clairs valent mieux qu’une longue liste.'], ['Les tableaux de récompenses fonctionnent-ils vraiment ?', 'Ils aident à créer de nouvelles habitudes quand les objectifs sont clairs et positifs ; le but est de s’en passer une fois l’habitude prise.'], ['Peut-on l’imprimer en arabe ?', 'Oui, passez la page en arabe : les jours et le texte changent et le tableau se lit de droite à gauche.']],
    es: [['¿Cuántos objetivos debe tener?', 'Uno o dos para los pequeños y hasta cuatro para los mayores. Pocos objetivos claros funcionan mejor que una lista larga.'], ['¿Funcionan de verdad las tablas de recompensas?', 'Ayudan a crear hábitos nuevos si los objetivos son claros y positivos; la idea es dejar la tabla cuando el hábito ya está.'], ['¿Se puede imprimir en árabe?', 'Sí, cambia la página al árabe: los días y el texto cambian y la tabla se lee de derecha a izquierda.']],
    ar: [['كم هدفًا يحتوي الجدول؟', 'هدف أو هدفان للصغار، وحتى أربعة للأكبر سنًّا. فالأهداف القليلة الواضحة أنجح من قائمة طويلة.'], ['هل تنجح جداول المكافآت فعلًا؟', 'تساعد على بناء عادات جديدة حين تكون الأهداف واضحة وإيجابية، والهدف هو الاستغناء عن الجدول بعد ترسّخ العادة.'], ['هل يمكن طباعته بالعربية؟', 'نعم، غيّر لغة الصفحة إلى العربية: تتغيّر أسماء الأيام والنصوص ويُقرأ الجدول من اليمين إلى اليسار.']],
  },
},

{
  slug: 'handwriting-paper',
  meta: {
    en: { title: 'Free Printable Handwriting Paper for Kids — Lined, Squared & Dot Grid | Kids Learning Hub', desc: 'Free printable handwriting paper for kids: primary lines with a dotted midline, ruled lines, 1 cm squared paper and dot grid. A4, ready to print, no sign-up.' },
    fr: { title: 'Papier d’écriture à imprimer pour enfants — lignes, carreaux, points | Kids Learning Hub', desc: 'Papier d’écriture gratuit à imprimer : lignes avec ligne médiane pour apprendre à écrire, lignes simples, carreaux de 1 cm et grille de points. Format A4.' },
    es: { title: 'Papel pautado para imprimir para niños — rayas, cuadrícula y puntos | Kids Learning Hub', desc: 'Papel pautado gratis para imprimir: pauta de caligrafía con línea central, rayas, cuadrícula de 1 cm y puntos. Tamaño A4, listo para imprimir.' },
    ar: { title: 'ورق كتابة للأطفال للطباعة — مسطّر ومربّعات ونقاط | Kids Learning Hub', desc: 'ورق كتابة مجاني للطباعة: أسطر بخط أوسط لتعلّم الكتابة، وأسطر عادية، ومربّعات 1 سم، وشبكة نقاط. بحجم A4 وجاهز للطباعة.' },
  }, emoji: '✏️', ages: '4–12',
  lede: {
    en: 'The right paper makes writing easier. Primary lines, with a solid baseline and a dotted midline, show young children exactly how tall small and capital letters should be. Ruled lines suit confident writers, 1 cm squared paper is ideal for column maths and drawing shapes, and the dot grid is perfect for drawing, mazes and geometry. All four print full-page on A4.',
    fr: 'Le bon papier facilite l’écriture. Les lignes d’écriture, avec une ligne de base pleine et une ligne médiane en pointillés, montrent aux jeunes enfants la hauteur exacte des minuscules et des majuscules. Les lignes simples conviennent aux écrivains plus sûrs, les carreaux de 1 cm sont parfaits pour les opérations posées et les figures, et la grille de points pour le dessin et la géométrie. Les quatre s’impriment pleine page en A4.',
    es: 'El papel adecuado facilita la escritura. La pauta de caligrafía, con línea base continua y línea central punteada, muestra a los pequeños la altura exacta de minúsculas y mayúsculas. Las rayas sirven para quien ya escribe con soltura, la cuadrícula de 1 cm es ideal para operaciones en columna y figuras, y la cuadrícula de puntos para dibujar y la geometría. Los cuatro se imprimen a página completa en A4.',
    ar: 'الورق المناسب يسهّل الكتابة. فأسطر الكتابة، بخط قاعدي متّصل وخط أوسط منقّط، تُظهر للطفل الصغير الارتفاع الصحيح للحروف. والأسطر العادية تناسب من يكتب بثقة، ومربّعات 1 سم مثالية للعمليات العمودية ورسم الأشكال، وشبكة النقاط للرسم والهندسة. والأنواع الأربعة تُطبع على صفحة A4 كاملة.',
  },
  how: {
    en: ['For beginners, use primary lines and show where each letter starts.', 'Short, regular sessions (5–10 minutes) improve handwriting more than long ones.', 'Use squared paper for column addition and subtraction: one digit per square.', 'Check posture and pencil grip before worrying about neatness.'],
    fr: ['Pour débuter, utilisez les lignes d’écriture et montrez où commence chaque lettre.', 'Des séances courtes et régulières (5 à 10 minutes) améliorent plus l’écriture que de longues séances.', 'Utilisez les carreaux pour les opérations posées : un chiffre par carreau.', 'Vérifiez la posture et la tenue du crayon avant de viser la propreté.'],
    es: ['Para empezar, usa la pauta de caligrafía y muestra dónde empieza cada letra.', 'Sesiones cortas y regulares (5–10 minutos) mejoran más la letra que las largas.', 'Usa la cuadrícula para las operaciones en columna: una cifra por cuadrado.', 'Revisa la postura y cómo coge el lápiz antes de exigir limpieza.'],
    ar: ['للمبتدئين استعمل أسطر الكتابة، وبيّن أين يبدأ كل حرف.', 'الحصص القصيرة المنتظمة (5–10 دقائق) تحسّن الخط أكثر من الحصص الطويلة.', 'استعمل ورق المربّعات للعمليات العمودية: رقم واحد في كل مربّع.', 'تحقّق من جلسة الطفل ومسكة القلم قبل الاهتمام بجمال الخط.'],
  },
  faq: {
    en: [['Which paper is best for learning to write?', 'Primary lines with a dotted midline: they show the height of small letters and capitals.'], ['Does it work for Arabic writing?', 'Yes. The ruled and primary lines suit Arabic too; the baseline guides letters that sit on or go below the line.'], ['Is there tracing practice too?', 'Yes — try our free letter, number and word tracing worksheets.']],
    fr: [['Quel papier pour apprendre à écrire ?', 'Les lignes d’écriture avec ligne médiane : elles montrent la hauteur des minuscules et des majuscules.'], ['Convient-il à l’écriture arabe ?', 'Oui. Les lignes conviennent aussi à l’arabe : la ligne de base guide les lettres posées sur la ligne ou qui descendent dessous.'], ['Y a-t-il aussi des modèles à repasser ?', 'Oui : essayez nos fiches gratuites de lettres, chiffres et mots à tracer.']],
    es: [['¿Qué papel es mejor para aprender a escribir?', 'La pauta de caligrafía con línea central: muestra la altura de minúsculas y mayúsculas.'], ['¿Sirve para la escritura árabe?', 'Sí. Las líneas también sirven para el árabe: la línea base guía las letras que se apoyan en ella o bajan.'], ['¿Hay fichas para repasar letras?', 'Sí: prueba nuestras fichas gratis de letras, números y palabras para repasar.']],
    ar: [['أيّ ورق أفضل لتعلّم الكتابة؟', 'أسطر الكتابة بخط أوسط منقّط، فهي تُظهر ارتفاع الحروف.'], ['هل يناسب الكتابة العربية؟', 'نعم. الأسطر تناسب العربية أيضًا، فالخط القاعدي يوجّه الحروف التي تجلس عليه أو تنزل تحته.'], ['هل توجد أوراق لتتبّع الحروف؟', 'نعم: جرّب أوراق الحروف والأرقام والكلمات المجانية للتتبّع.']],
  },
},

{
  slug: 'pattern-worksheets',
  meta: {
    en: { title: 'Free Pattern Worksheets for Kids — What Comes Next? | Kids Learning Hub', desc: 'Free printable pattern worksheets: complete AB, ABC and AAB patterns with colours and shapes, then number patterns. A new A4 sheet every click, with answers. Ages 4–8.' },
    fr: { title: 'Fiches de suites logiques à imprimer — que vient ensuite ? | Kids Learning Hub', desc: 'Fiches gratuites de suites logiques : complète des suites AB, ABC et AAB de couleurs et de formes, puis des suites de nombres. Nouvelle fiche à chaque clic, avec corrigé.' },
    es: { title: 'Fichas de series lógicas para imprimir — ¿qué viene después? | Kids Learning Hub', desc: 'Fichas gratis de series: completa series AB, ABC y AAB de colores y formas, y después series de números. Una hoja nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق المتتاليات المنطقية للطباعة — ما الذي يأتي بعد؟ | Kids Learning Hub', desc: 'أوراق متتاليات مجانية: أكمل متتاليات AB وABC وAAB بالألوان والأشكال، ثم متتاليات الأعداد. ورقة جديدة مع كل ضغطة مع الحلول.' },
  }, emoji: '🧩', ages: '4–8',
  lede: {
    en: 'Spotting a pattern and predicting what comes next is one of the first steps in mathematical thinking, and it later supports skip counting, times tables and algebra. These sheets start with simple colour patterns (AB, ABB), move to longer ones (ABC, AAB, ABBC), and finish with number patterns that go up or down in steps of 1, 2, 3, 5 or 10.',
    fr: 'Repérer une régularité et prévoir la suite est l’une des premières étapes de la pensée mathématique ; elle aide ensuite à compter de n en n, aux tables et à l’algèbre. Ces fiches commencent par des suites de couleurs simples (AB, ABB), passent à des suites plus longues (ABC, AAB, ABBC) et finissent par des suites de nombres qui montent ou descendent de 1, 2, 3, 5 ou 10.',
    es: 'Descubrir un patrón y predecir lo que sigue es uno de los primeros pasos del pensamiento matemático, y después ayuda a contar de n en n, con las tablas y con el álgebra. Estas fichas empiezan con series de colores sencillas (AB, ABB), pasan a otras más largas (ABC, AAB, ABBC) y terminan con series de números que suben o bajan de 1, 2, 3, 5 o 10.',
    ar: 'ملاحظة النمط وتوقّع ما يليه من أولى خطوات التفكير الرياضي، وتساعد لاحقًا على العدّ بخطوات وجداول الضرب والجبر. وتبدأ هذه الأوراق بمتتاليات ألوان بسيطة (AB، ABB)، ثم أطول (ABC، AAB، ABBC)، وتنتهي بمتتاليات أعداد تزيد أو تنقص بـ1 أو 2 أو 3 أو 5 أو 10.',
  },
  how: {
    en: ['Ask your child to read the pattern aloud: “red, blue, red, blue…”.', 'Find the part that repeats and circle it with a pencil.', 'For number patterns, write the jump between two numbers above the row (+2, +5…).', 'Ask your child to invent a pattern for you to complete.'],
    fr: ['Demandez à l’enfant de lire la suite à voix haute : « rouge, bleu, rouge, bleu… ».', 'Repérez la partie qui se répète et entourez-la au crayon.', 'Pour les nombres, écrivez le saut entre deux nombres au-dessus de la ligne (+2, +5…).', 'Demandez à l’enfant d’inventer une suite que vous compléterez.'],
    es: ['Pide a tu hijo que lea la serie en voz alta: «rojo, azul, rojo, azul…».', 'Buscad la parte que se repite y rodeadla con el lápiz.', 'En las series de números, escribid el salto entre dos números encima de la fila (+2, +5…).', 'Pídele que invente una serie para que tú la completes.'],
    ar: ['اطلب من طفلك أن يقرأ المتتالية بصوت عالٍ: «أحمر، أزرق، أحمر، أزرق…».', 'جِدا الجزء الذي يتكرّر وأحيطاه بدائرة بالقلم.', 'في متتاليات الأعداد، اكتبا القفزة بين عددين فوق السطر (+2، +5…).', 'اطلب منه أن يخترع متتالية لتكملها أنت.'],
  },
  faq: {
    en: [['What are AB, ABC and AAB patterns?', 'Names for the repeating unit: AB is red-blue-red-blue, AAB is red-red-blue, ABC uses three items.'], ['From what age?', 'Colour patterns from about 4; number patterns from about 6 to 8.'], ['Is there an online version?', 'Yes — play “What Comes Next?” in our free browser games.']],
    fr: [['Que veulent dire AB, ABC et AAB ?', 'Ce sont les noms du motif qui se répète : AB, c’est rouge-bleu-rouge-bleu ; AAB, rouge-rouge-bleu ; ABC utilise trois éléments.'], ['Dès quel âge ?', 'Les suites de couleurs vers 4 ans, les suites de nombres vers 6–8 ans.'], ['Existe-t-il une version en ligne ?', 'Oui : jouez à « Que vient ensuite ? » dans nos jeux gratuits.']],
    es: [['¿Qué significan AB, ABC y AAB?', 'Son los nombres del bloque que se repite: AB es rojo-azul-rojo-azul, AAB es rojo-rojo-azul y ABC usa tres elementos.'], ['¿Desde qué edad?', 'Las series de colores hacia los 4 años y las de números hacia los 6–8.'], ['¿Hay versión online?', 'Sí: juega a «¿Qué viene después?» en nuestros juegos gratis.']],
    ar: [['ماذا تعني AB وABC وAAB؟', 'أسماء للوحدة التي تتكرّر: AB أحمر-أزرق-أحمر-أزرق، وAAB أحمر-أحمر-أزرق، وABC تستعمل ثلاثة عناصر.'], ['من أي عمر؟', 'متتاليات الألوان من نحو 4 سنوات، ومتتاليات الأعداد نحو 6–8 سنوات.'], ['هل توجد نسخة على الإنترنت؟', 'نعم: العب «ما الذي يأتي بعد؟» في ألعابنا المجانية.']],
  },
},

];
