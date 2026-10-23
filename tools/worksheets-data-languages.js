/* Kids Learning Hub — guide content for the language & reading printables
   (October 2026): picture words, missing letters, first letter, word
   scramble, alphabet order, uppercase & lowercase / Arabic letter forms.
   They share the picture vocabulary in /worksheets/vocab.js.
   Merged into tools/worksheets-data.js.                                    */
'use strict';

module.exports = [

{
  slug: 'picture-words',
  meta: {
    en: { title: 'Picture Vocabulary Worksheets — Match Words to Pictures | Kids Learning Hub', desc: 'Free printable vocabulary worksheets: draw a line from each picture to its word. 66 everyday words in English, French, Spanish and Arabic, 3 levels. A new A4 sheet every click, with answers.' },
    fr: { title: 'Fiches de vocabulaire en images — relier image et mot | Kids Learning Hub', desc: 'Fiches de vocabulaire gratuites : relie chaque image à son mot. 66 mots du quotidien en français, anglais, espagnol et arabe, 3 niveaux. Une nouvelle fiche A4 à chaque clic, avec corrigé.' },
    es: { title: 'Fichas de vocabulario con imágenes — unir dibujo y palabra | Kids Learning Hub', desc: 'Fichas de vocabulario gratis: une cada dibujo con su palabra. 66 palabras cotidianas en español, inglés, francés y árabe, 3 niveles. Una hoja A4 nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق المفردات بالصور — صِل الصورة بالكلمة | Kids Learning Hub', desc: 'أوراق مفردات مجانية: صِل كل صورة بكلمتها. 66 كلمة يومية بالعربية والفرنسية والإنجليزية والإسبانية، 3 مستويات. ورقة A4 جديدة مع كل ضغطة مع الحلول.' },
  }, emoji: '🖼️', ages: '4–9',
  lede: {
    en: 'Matching a picture to its written word is one of the first steps in reading: the child already knows the object and its spoken name, and now links them to the letters on the page. The sheets draw from 66 everyday words — fruit, animals, nature, food and things at home — so every new sheet brings a different mix. They work just as well for children learning a second language: switch the page to French, Spanish or Arabic and the same pictures come with words in that language.',
    fr: 'Associer une image à son mot écrit est l’un des premiers pas de la lecture : l’enfant connaît déjà l’objet et son nom à l’oral, et il le relie maintenant aux lettres sur la page. Les fiches puisent dans 66 mots du quotidien — fruits, animaux, nature, nourriture, maison — donc chaque fiche apporte un mélange différent. Elles conviennent aussi très bien à l’apprentissage d’une deuxième langue : passez la page en anglais, espagnol ou arabe, et les mêmes images arrivent avec les mots de cette langue.',
    es: 'Unir un dibujo con su palabra escrita es uno de los primeros pasos de la lectura: el niño ya conoce el objeto y su nombre hablado, y ahora lo une a las letras de la página. Las fichas usan 66 palabras cotidianas —frutas, animales, naturaleza, comida y cosas de casa—, así que cada hoja trae una mezcla distinta. También sirven para aprender una segunda lengua: cambia la página a inglés, francés o árabe y los mismos dibujos llegan con las palabras de ese idioma.',
    ar: 'ربط الصورة بكلمتها المكتوبة من أولى خطوات القراءة: فالطفل يعرف الشيء واسمه المنطوق، وهو الآن يربطه بالحروف على الورقة. وتأخذ الأوراق من 66 كلمة يومية — فواكه وحيوانات وطبيعة وطعام وأشياء البيت — فتأتي كل ورقة بمزيج جديد. وهي مناسبة أيضًا لتعلّم لغة ثانية: غيّر لغة الصفحة إلى الفرنسية أو الإنجليزية أو الإسبانية، فتأتي الصور نفسها بكلمات تلك اللغة.',
  },
  how: {
    en: ['Name the pictures together first, then let your child find the words.', 'Encourage sounding out: the first letter is often the best clue.', 'Draw the lines with a ruler, from dot to dot, so the sheet stays easy to check.', 'For a second language, print the same sheet number in both languages and compare.'],
    fr: ['Nommez d’abord les images ensemble, puis laissez l’enfant trouver les mots.', 'Encouragez le déchiffrage : la première lettre est souvent le meilleur indice.', 'Tracez les traits à la règle, de point à point, pour que la fiche reste facile à corriger.', 'Pour une deuxième langue, imprimez le même numéro de fiche dans les deux langues et comparez.'],
    es: ['Nombrad primero juntos los dibujos y después deja que encuentre las palabras.', 'Anima a leer sonido a sonido: la primera letra suele ser la mejor pista.', 'Traza las líneas con regla, de punto a punto, para que la hoja sea fácil de corregir.', 'Para una segunda lengua, imprime el mismo número de hoja en los dos idiomas y comparadlas.'],
    ar: ['سمِّيا الصور معًا أولًا، ثم دع الطفل يجد الكلمات.', 'شجّعه على التهجئة: الحرف الأول غالبًا أفضل دليل.', 'ارسم الخطوط بالمسطرة من نقطة إلى نقطة، لتبقى الورقة سهلة التصحيح.', 'لتعلّم لغة ثانية اطبع رقم الورقة نفسه باللغتين وقارن بينهما.'],
  },
  faq: {
    en: [['How many words are there?', '66 everyday words, each available in English, French, Spanish and Arabic.'], ['Can I print the same sheet in two languages?', 'Yes. Note the sheet number, switch the language and open the same number: the pictures stay the same, only the words change.'], ['From what age?', '6 words from about 4–5 with help, 8 words at 6, and 10 words from 7.']],
    fr: [['Combien y a-t-il de mots ?', '66 mots du quotidien, chacun en français, anglais, espagnol et arabe.'], ['Peut-on imprimer la même fiche en deux langues ?', 'Oui. Notez le numéro de la fiche, changez de langue et rouvrez ce numéro : les images restent les mêmes, seuls les mots changent.'], ['À partir de quel âge ?', '6 mots vers 4–5 ans avec aide, 8 mots vers 6 ans, et 10 mots à partir de 7 ans.']],
    es: [['¿Cuántas palabras hay?', '66 palabras cotidianas, cada una en español, inglés, francés y árabe.'], ['¿Puedo imprimir la misma hoja en dos idiomas?', 'Sí. Apunta el número de la hoja, cambia el idioma y abre ese número: los dibujos son los mismos y solo cambian las palabras.'], ['¿Desde qué edad?', '6 palabras hacia los 4–5 años con ayuda, 8 palabras a los 6 y 10 palabras desde los 7.']],
    ar: [['كم عدد الكلمات؟', '66 كلمة يومية، كل واحدة بالعربية والفرنسية والإنجليزية والإسبانية.'], ['هل يمكن طباعة الورقة نفسها بلغتين؟', 'نعم. سجّل رقم الورقة، غيّر اللغة وافتح الرقم نفسه: تبقى الصور نفسها وتتغيّر الكلمات فقط.'], ['من أي عمر؟', '6 كلمات من نحو 4–5 سنوات بالمساعدة، و8 كلمات في 6 سنوات، و10 كلمات من 7 سنوات.']],
  },
},

{
  slug: 'missing-letters',
  meta: {
    en: { title: 'Missing Letter Worksheets — Fill in the Missing Letters | Kids Learning Hub', desc: 'Free printable missing letter worksheets: look at the picture and write the missing letters, from one letter to the whole word. English, French, Spanish and Arabic. A new A4 sheet every click, with answers.' },
    fr: { title: 'Fiches lettres manquantes — compléter les mots | Kids Learning Hub', desc: 'Fiches gratuites de lettres manquantes : regarde l’image et écris les lettres qui manquent, d’une lettre au mot entier. Français, anglais, espagnol et arabe. Une nouvelle fiche A4 à chaque clic, avec corrigé.' },
    es: { title: 'Fichas de letras que faltan — completar palabras | Kids Learning Hub', desc: 'Fichas gratis de letras que faltan: mira el dibujo y escribe las letras que faltan, de una letra a la palabra entera. Español, inglés, francés y árabe. Una hoja A4 nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق الحروف الناقصة — أكمل الكلمة | Kids Learning Hub', desc: 'أوراق مجانية للحروف الناقصة: انظر إلى الصورة واكتب الحروف الناقصة، من حرف واحد إلى الكلمة كاملة. بالعربية والفرنسية والإنجليزية والإسبانية. ورقة A4 جديدة مع كل ضغطة مع الحلول.' },
  }, emoji: '🔡', ages: '5–9',
  lede: {
    en: 'Completing a word with a missing letter makes children listen to every sound in the word, not only the first one. The picture tells them which word it is, so all their attention goes to spelling. The first level hides one letter in short words, the second hides two letters in longer words, and the last level asks for the whole word, one letter per box — a gentle first step towards spelling tests.',
    fr: 'Compléter un mot auquel il manque une lettre oblige l’enfant à écouter chaque son du mot, pas seulement le premier. L’image lui dit de quel mot il s’agit, donc toute son attention va à l’orthographe. Le premier niveau cache une lettre dans des mots courts, le deuxième deux lettres dans des mots plus longs, et le dernier demande le mot entier, une lettre par case — un premier pas en douceur vers la dictée.',
    es: 'Completar una palabra a la que le falta una letra obliga a escuchar cada sonido, no solo el primero. El dibujo dice qué palabra es, así que toda la atención va a la ortografía. El primer nivel esconde una letra en palabras cortas, el segundo dos letras en palabras más largas, y el último pide la palabra entera, una letra por casilla: un primer paso suave hacia el dictado.',
    ar: 'إكمال كلمة ينقصها حرف يجعل الطفل يستمع إلى كل صوت في الكلمة، لا إلى الأول فقط. والصورة تخبره ما هي الكلمة، فيذهب كل انتباهه إلى الإملاء. المستوى الأول يُخفي حرفًا واحدًا في كلمات قصيرة، والثاني حرفين في كلمات أطول، والأخير يطلب الكلمة كاملة حرفًا في كل مربّع — خطوة أولى هادئة نحو الإملاء.',
  },
  how: {
    en: ['Say the word slowly together, stretching each sound.', 'Count the boxes: each box is one letter.', 'At the “whole word” level, let your child check with the picture-words sheet if stuck.', 'Read the finished words aloud and point to each letter.'],
    fr: ['Dites le mot lentement ensemble, en étirant chaque son.', 'Comptez les cases : une case, une lettre.', 'Au niveau « mot entier », l’enfant peut vérifier avec la fiche images et mots s’il bloque.', 'Lisez les mots terminés à voix haute en montrant chaque lettre.'],
    es: ['Decid la palabra despacio, alargando cada sonido.', 'Contad las casillas: una casilla, una letra.', 'En el nivel «palabra entera», puede comprobar con la ficha de imágenes y palabras si se atasca.', 'Leed en voz alta las palabras terminadas señalando cada letra.'],
    ar: ['انطقا الكلمة ببطء معًا مع مدّ كل صوت.', 'عُدّا المربّعات: لكل مربّع حرف واحد.', 'في مستوى «الكلمة كاملة» يمكن للطفل أن يستعين بورقة الصور والكلمات إن توقّف.', 'اقرآ الكلمات المكتملة بصوت عالٍ مع الإشارة إلى كل حرف.'],
  },
  faq: {
    en: [['Is the first letter ever missing?', 'Not at levels 1 and 2: the first letter stays as a clue. At the whole-word level every box is empty.'], ['How are Arabic words shown?', 'One letter per box, in its separate form, from right to left. The child can then write the word joined underneath.'], ['Do French and Spanish accents count?', 'Yes: é, è, á, ó and the others are part of the spelling and appear in the answer key.']],
    fr: [['La première lettre peut-elle manquer ?', 'Pas aux niveaux 1 et 2 : elle reste comme indice. Au niveau « mot entier », toutes les cases sont vides.'], ['Comment sont présentés les mots arabes ?', 'Une lettre par case, sous sa forme isolée, de droite à gauche. L’enfant peut ensuite écrire le mot attaché en dessous.'], ['Les accents comptent-ils ?', 'Oui : é, è, â et les autres font partie de l’orthographe et figurent dans le corrigé.']],
    es: [['¿Puede faltar la primera letra?', 'En los niveles 1 y 2 no: se queda como pista. En el nivel «palabra entera» todas las casillas están vacías.'], ['¿Cómo aparecen las palabras en árabe?', 'Una letra por casilla, en su forma aislada, de derecha a izquierda. Después el niño puede escribir la palabra unida debajo.'], ['¿Cuentan las tildes?', 'Sí: á, é, ó y las demás forman parte de la ortografía y aparecen en las soluciones.']],
    ar: [['هل يمكن أن يكون الحرف الأول ناقصًا؟', 'ليس في المستويين 1 و2: يبقى الحرف الأول دليلًا. وفي مستوى «الكلمة كاملة» تكون كل المربّعات فارغة.'], ['كيف تظهر الكلمات العربية؟', 'حرف في كل مربّع بشكله المنفصل، من اليمين إلى اليسار. ويمكن للطفل بعدها أن يكتب الكلمة متّصلة تحتها.'], ['هل الحروف مكتوبة بالتشكيل؟', 'لا، الكلمات دون حركات كما في الكتب المدرسية للمبتدئين بعد مرحلة الحروف.']],
  },
},

{
  slug: 'first-letter',
  meta: {
    en: { title: 'Beginning Sounds Worksheets — What Letter Does It Start With? | Kids Learning Hub', desc: 'Free printable beginning sounds worksheets: look at the picture and circle or write the first letter, or find the last letter. English, French, Spanish and Arabic. A new A4 sheet every click, with answers.' },
    fr: { title: 'Fiches son du début — par quelle lettre commence le mot ? | Kids Learning Hub', desc: 'Fiches gratuites sur le son du début : regarde l’image, entoure ou écris la première lettre, ou trouve la dernière. Français, anglais, espagnol et arabe. Une nouvelle fiche A4 à chaque clic, avec corrigé.' },
    es: { title: 'Fichas de sonido inicial — ¿con qué letra empieza? | Kids Learning Hub', desc: 'Fichas gratis de sonido inicial: mira el dibujo, rodea o escribe la primera letra, o busca la última. Español, inglés, francés y árabe. Una hoja A4 nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق الصوت الأول — بأيّ حرف تبدأ الكلمة؟ | Kids Learning Hub', desc: 'أوراق مجانية للصوت الأول: انظر إلى الصورة وأحِط الحرف الأول أو اكتبه، أو ابحث عن الحرف الأخير. بالعربية والفرنسية والإنجليزية والإسبانية. ورقة A4 جديدة مع كل ضغطة مع الحلول.' },
  }, emoji: '🅰️', ages: '4–7',
  lede: {
    en: 'Hearing the first sound of a word is the skill teachers call phonemic awareness, and it is one of the best predictors of how easily a child will learn to read. These sheets train it with pictures: the child says the word, listens to its first sound and finds the matching letter. The first level offers three letters to choose from, the second asks the child to write it, and the third moves to the last letter, which is harder to hear.',
    fr: 'Entendre le premier son d’un mot, c’est ce que les enseignants appellent la conscience phonologique, et c’est l’un des meilleurs indices de la facilité avec laquelle un enfant apprendra à lire. Ces fiches l’entraînent avec des images : l’enfant dit le mot, écoute le premier son et trouve la lettre. Le premier niveau propose trois lettres au choix, le deuxième demande de l’écrire, et le troisième passe à la dernière lettre, plus difficile à entendre.',
    es: 'Oír el primer sonido de una palabra es lo que los maestros llaman conciencia fonológica, y es uno de los mejores indicadores de lo fácil que será aprender a leer. Estas fichas la entrenan con dibujos: el niño dice la palabra, escucha el primer sonido y busca la letra. El primer nivel da tres letras para elegir, el segundo pide escribirla y el tercero pasa a la última letra, que cuesta más oír.',
    ar: 'سماع الصوت الأول في الكلمة هو ما يسمّيه المعلّمون الوعي الصوتي، وهو من أفضل المؤشّرات على سهولة تعلّم القراءة. وهذه الأوراق تدرّبه بالصور: ينطق الطفل الكلمة، ويستمع إلى صوتها الأول، ويجد الحرف المناسب. المستوى الأول يقترح ثلاثة حروف للاختيار، والثاني يطلب كتابة الحرف، والثالث ينتقل إلى الحرف الأخير الذي يصعب سماعه أكثر.',
  },
  how: {
    en: ['Say the word with your child, exaggerating the first sound: “mmm-moon”.', 'Say the sound of the letter (“mmm”), not only its name (“em”).', 'If a picture has two possible names, accept the one your child uses and check the sound.', 'Make it a game at home: “I spy something that starts with…”.'],
    fr: ['Dites le mot avec l’enfant en exagérant le premier son : « lllune ».', 'Prononcez le son de la lettre (« lll »), pas seulement son nom (« elle »).', 'Si une image a deux noms possibles, acceptez celui de l’enfant et vérifiez le son.', 'Jouez à la maison : « Je vois quelque chose qui commence par… ».'],
    es: ['Decid la palabra exagerando el primer sonido: «lllluna».', 'Di el sonido de la letra («lll»), no solo su nombre («ele»).', 'Si un dibujo tiene dos nombres posibles, acepta el del niño y comprueba el sonido.', 'Jugad en casa a «Veo, veo, una cosita que empieza por…».'],
    ar: ['انطقا الكلمة معًا مع إطالة الصوت الأول: «قـــمر».', 'انطق صوت الحرف («قَ») لا اسمه فقط («قاف»).', 'إن كان للصورة اسمان، اقبل اسم الطفل وتحقّق من الصوت.', 'العبا في البيت: «أرى شيئًا يبدأ بحرف…».'],
  },
  faq: {
    en: [['Why not only the first letter?', 'The last-letter level makes children listen to the whole word, which helps later with spelling.'], ['What about words starting with silent or special letters?', 'Words whose first or last letter would be confusing (like œuf in French) are left out of this sheet.'], ['How is Arabic handled?', 'Words starting with أ show أ as the answer; at the last-letter level, ة counts as its own letter.']],
    fr: [['Pourquoi aussi la dernière lettre ?', 'Le niveau « dernière lettre » oblige à écouter tout le mot, ce qui aide ensuite pour l’orthographe.'], ['Et les mots qui commencent par une lettre spéciale ?', 'Les mots dont la première ou la dernière lettre prêterait à confusion (comme œuf) sont écartés de cette fiche.'], ['Et en arabe ?', 'Les mots qui commencent par أ ont أ comme réponse ; au niveau « dernière lettre », ة compte comme une lettre à part.']],
    es: [['¿Por qué también la última letra?', 'El nivel de última letra obliga a escuchar toda la palabra, lo que ayuda después con la ortografía.'], ['¿Y las palabras con letras especiales?', 'Las palabras cuya primera o última letra pueda confundir se dejan fuera de esta ficha; las tildes no cuentan para la letra.'], ['¿Y en árabe?', 'Las palabras que empiezan por أ tienen أ como respuesta; en el nivel de última letra, ة cuenta como letra propia.']],
    ar: [['لماذا الحرف الأخير أيضًا؟', 'مستوى الحرف الأخير يجعل الطفل يستمع إلى الكلمة كلها، وهذا يساعده لاحقًا في الإملاء.'], ['ماذا عن الهمزة والتاء المربوطة؟', 'الكلمات التي تبدأ بـ«أ» جوابها «أ»، وفي مستوى الحرف الأخير تُعدّ «ة» حرفًا قائمًا بذاته.'], ['من أي عمر؟', 'اختيار الحرف من نحو 4 سنوات، وكتابته في 5 سنوات، والحرف الأخير في 6–7 سنوات.']],
  },
},

{
  slug: 'unscramble',
  meta: {
    en: { title: 'Word Scramble Worksheets for Kids — Unscramble the Words | Kids Learning Hub', desc: 'Free printable word scramble worksheets with picture clues: put the letters in the right order. Short, medium and long words in English, French, Spanish and Arabic. A new A4 sheet every click, with answers.' },
    fr: { title: 'Fiches mots mélangés pour enfants — remettre les lettres en ordre | Kids Learning Hub', desc: 'Fiches gratuites de mots mélangés avec image : remets les lettres dans l’ordre. Mots courts, moyens et longs en français, anglais, espagnol et arabe. Une nouvelle fiche A4 à chaque clic, avec corrigé.' },
    es: { title: 'Fichas de palabras desordenadas para niños — ordenar letras | Kids Learning Hub', desc: 'Fichas gratis de palabras desordenadas con dibujo de pista: ordena las letras. Palabras cortas, medianas y largas en español, inglés, francés y árabe. Una hoja A4 nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق الكلمات المبعثرة للأطفال — رتّب الحروف | Kids Learning Hub', desc: 'أوراق مجانية للكلمات المبعثرة مع صورة مساعدة: رتّب الحروف. كلمات قصيرة ومتوسطة وطويلة بالعربية والفرنسية والإنجليزية والإسبانية. ورقة A4 جديدة مع كل ضغطة مع الحلول.' },
  }, emoji: '🔀', ages: '6–11',
  lede: {
    en: 'Unscrambling a word is a small puzzle that pulls together everything a young reader knows: the sounds of the letters, which letters usually go together, and how the word looks on the page. The picture clue keeps it fair, so children are never stuck guessing which word it is. Short words suit beginning readers, while the long words make a real challenge for older children, and for anyone learning a second language.',
    fr: 'Remettre un mot dans l’ordre est une petite énigme qui fait appel à tout ce que sait un jeune lecteur : le son des lettres, les lettres qui vont souvent ensemble et l’aspect du mot sur la page. L’image d’aide rend l’exercice juste : l’enfant ne reste jamais à deviner de quel mot il s’agit. Les mots courts conviennent aux débutants, les mots longs sont un vrai défi pour les plus grands et pour l’apprentissage d’une deuxième langue.',
    es: 'Ordenar una palabra es un pequeño acertijo que reúne todo lo que sabe un lector que empieza: el sonido de las letras, qué letras suelen ir juntas y cómo se ve la palabra. El dibujo de pista lo hace justo: el niño nunca se queda adivinando qué palabra es. Las palabras cortas son para principiantes y las largas son un reto de verdad para los mayores y para quien aprende otra lengua.',
    ar: 'ترتيب كلمة مبعثرة لغز صغير يجمع كل ما يعرفه القارئ الصغير: أصوات الحروف، والحروف التي تأتي معًا عادة، وشكل الكلمة على الورقة. والصورة المساعدة تجعل التمرين منصفًا فلا يبقى الطفل يخمّن ما هي الكلمة. الكلمات القصيرة للمبتدئين، والطويلة تحدٍّ حقيقي للأكبر سنًّا ولمن يتعلّم لغة ثانية.',
  },
  how: {
    en: ['Name the picture first, then look for its first letter among the tiles.', 'Cross out each letter tile once it has been used.', 'Say the word slowly and write the letters in the order you hear them.', 'Check: the word must use every letter exactly once.'],
    fr: ['Nommez d’abord l’image, puis cherchez sa première lettre parmi les cases.', 'Barrez chaque lettre une fois utilisée.', 'Dites le mot lentement et écrivez les lettres dans l’ordre où on les entend.', 'Vérifiez : le mot doit utiliser chaque lettre une seule fois.'],
    es: ['Nombra primero el dibujo y busca su primera letra entre las casillas.', 'Tacha cada letra cuando la uses.', 'Di la palabra despacio y escribe las letras en el orden en que las oyes.', 'Comprueba: la palabra usa cada letra una sola vez.'],
    ar: ['سمِّ الصورة أولًا، ثم ابحث عن حرفها الأول بين المربّعات.', 'اشطب كل حرف بعد استعماله.', 'انطق الكلمة ببطء واكتب الحروف بالترتيب الذي تسمعه.', 'تحقّق: يجب أن تستعمل الكلمة كل حرف مرة واحدة.'],
  },
  faq: {
    en: [['What do short, medium and long mean?', 'Short words have 3–4 letters, medium 5, and long 6 or more. In Arabic, without written short vowels, each band is one letter shorter.'], ['Could the letters accidentally spell the word?', 'No, the mixed order is always different from the real word.'], ['Is there an answer key?', 'Yes, switch it on before printing to get every word.']],
    fr: [['Que veulent dire court, moyen et long ?', 'Mots courts : 3–4 lettres, moyens : 5, longs : 6 ou plus. En arabe, sans voyelles courtes écrites, chaque niveau compte une lettre de moins.'], ['Les lettres peuvent-elles être déjà dans l’ordre ?', 'Non, l’ordre mélangé est toujours différent du vrai mot.'], ['Y a-t-il un corrigé ?', 'Oui, activez-le avant d’imprimer pour avoir tous les mots.']],
    es: [['¿Qué significan cortas, medianas y largas?', 'Cortas: 3–4 letras, medianas: 5, largas: 6 o más. En árabe, sin vocales breves escritas, cada nivel tiene una letra menos.'], ['¿Pueden salir las letras ya ordenadas?', 'No, el orden mezclado siempre es distinto de la palabra real.'], ['¿Hay soluciones?', 'Sí, actívalas antes de imprimir para tener todas las palabras.']],
    ar: [['ماذا تعني قصيرة ومتوسطة وطويلة؟', 'بالعربية: القصيرة 3 حروف، والمتوسطة 4، والطويلة 5 فأكثر، لأن الحركات القصيرة لا تُكتب. وفي اللغات الأخرى يزيد كل مستوى حرفًا.'], ['هل يمكن أن تأتي الحروف مرتّبة أصلًا؟', 'لا، الترتيب المبعثر يختلف دائمًا عن الكلمة الحقيقية.'], ['هل توجد ورقة حلول؟', 'نعم، فعّلها قبل الطباعة لتحصل على كل الكلمات.']],
  },
},

{
  slug: 'alphabet-order',
  meta: {
    en: { title: 'Missing Alphabet Letters Worksheets — ABC Order | Kids Learning Hub', desc: 'Free printable alphabet order worksheets: fill in the missing letters of the alphabet, before, after and between, up to writing the whole alphabet. Latin, Spanish (with Ñ) and Arabic alphabets. A new A4 sheet every click, with answers.' },
    fr: { title: 'Fiches ordre alphabétique — lettres manquantes | Kids Learning Hub', desc: 'Fiches gratuites d’ordre alphabétique : complète les lettres manquantes avant, après et entre, jusqu’à l’alphabet entier. Alphabet latin, espagnol (avec Ñ) et arabe. Une nouvelle fiche A4 à chaque clic, avec corrigé.' },
    es: { title: 'Fichas de orden alfabético — letras que faltan | Kids Learning Hub', desc: 'Fichas gratis de orden alfabético: completa las letras que faltan antes, después y entre, hasta el abecedario entero (con la Ñ). También alfabeto árabe. Una hoja A4 nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق ترتيب الحروف الهجائية — الحروف الناقصة | Kids Learning Hub', desc: 'أوراق مجانية لترتيب الحروف الهجائية: أكمل الحروف الناقصة قبل وبعد وبين، حتى كتابة الحروف كلها من ا إلى ي. ورقة A4 جديدة مع كل ضغطة مع الحلول.' },
  }, emoji: '🔤', ages: '5–8',
  lede: {
    en: 'Knowing the alphabet in order is more than a song: children need it to use a dictionary, a glossary or a class list, and it strengthens the link between letter names and shapes. These sheets show short runs of the alphabet with gaps to fill — one gap, then two, in capital and then small letters — and finally the whole alphabet with only a few letters given. The Spanish version includes Ñ, and the Arabic version follows the order ا ب ت ث… taught at school.',
    fr: 'Connaître l’alphabet dans l’ordre, c’est plus qu’une comptine : il en faut pour chercher dans un dictionnaire ou une liste, et cela renforce le lien entre le nom et la forme des lettres. Ces fiches montrent de courts morceaux d’alphabet à compléter — un trou, puis deux, en majuscules puis en minuscules — et enfin l’alphabet entier avec quelques lettres seulement. La version espagnole inclut le Ñ et la version arabe suit l’ordre ا ب ت ث… appris à l’école.',
    es: 'Saber el abecedario en orden es más que una canción: hace falta para buscar en un diccionario o en una lista, y refuerza la unión entre el nombre y la forma de cada letra. Estas fichas muestran trozos cortos del abecedario con huecos —uno, luego dos, en mayúsculas y después en minúsculas— y al final el abecedario entero con solo algunas letras. La versión en español incluye la Ñ y la árabe sigue el orden ا ب ت ث… de la escuela.',
    ar: 'معرفة الحروف بالترتيب أكثر من أنشودة: يحتاجها الطفل للبحث في القاموس أو في قائمة، وهي تقوّي الربط بين اسم الحرف وشكله. تعرض هذه الأوراق مقاطع قصيرة من الحروف فيها فراغات — فراغ واحد ثم فراغان — وأخيرًا الحروف الثمانية والعشرون كلها مع بعض الحروف فقط. والترتيب هو الترتيب المدرسي ا ب ت ث… إلى ي.',
  },
  how: {
    en: ['Sing or say the alphabet together before starting.', 'For a gap, say the letters before it aloud: the missing one usually comes by itself.', 'Keep an alphabet strip on the table for the first sheets, then hide it.', 'For the whole-alphabet level, write in pencil and check with the key.'],
    fr: ['Chantez ou récitez l’alphabet ensemble avant de commencer.', 'Pour un trou, dites à voix haute les lettres d’avant : celle qui manque vient souvent toute seule.', 'Gardez une bande alphabet sur la table pour les premières fiches, puis cachez-la.', 'Au niveau « alphabet entier », écrivez au crayon et vérifiez avec le corrigé.'],
    es: ['Cantad o decid juntos el abecedario antes de empezar.', 'Ante un hueco, di en voz alta las letras de antes: la que falta suele salir sola.', 'Deja una tira del abecedario en la mesa para las primeras hojas y luego escóndela.', 'En el nivel de abecedario entero, escribe a lápiz y comprueba con las soluciones.'],
    ar: ['أنشِدا الحروف أو ردّداها معًا قبل البدء.', 'أمام الفراغ انطق الحروف التي قبله: غالبًا يأتي الحرف الناقص وحده.', 'ضع شريط الحروف على الطاولة في الأوراق الأولى، ثم أخفِه.', 'في مستوى «الحروف كلها» اكتب بقلم الرصاص وتحقّق بورقة الحلول.'],
  },
  faq: {
    en: [['Which Arabic order is used?', 'The order taught in schools: ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي (28 letters).'], ['Does Spanish include Ñ?', 'Yes, the Spanish alphabet has 27 letters, with Ñ after N.'], ['Are there small letters?', 'Yes: level 1 uses capitals, level 2 small letters. Arabic has no capitals, so its levels only change the number of gaps.']],
    fr: [['Quel ordre pour l’arabe ?', 'L’ordre appris à l’école : ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي (28 lettres).'], ['L’espagnol a-t-il le Ñ ?', 'Oui, l’alphabet espagnol a 27 lettres, avec le Ñ après le N.'], ['Y a-t-il des minuscules ?', 'Oui : le niveau 1 est en majuscules, le niveau 2 en minuscules. L’arabe n’a pas de majuscules, seuls les trous changent.']],
    es: [['¿Qué orden se usa en árabe?', 'El orden escolar: ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي (28 letras).'], ['¿Incluye la Ñ?', 'Sí, el abecedario español tiene 27 letras, con la Ñ después de la N.'], ['¿Hay minúsculas?', 'Sí: el nivel 1 va en mayúsculas y el 2 en minúsculas. El árabe no tiene mayúsculas, así que solo cambian los huecos.']],
    ar: [['أيّ ترتيب مستعمل؟', 'الترتيب المدرسي: ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي (28 حرفًا).'], ['هل توجد حروف لاتينية أيضًا؟', 'نعم، غيّر لغة الصفحة إلى الإنجليزية أو الفرنسية أو الإسبانية (مع Ñ) لتحصل على الأبجدية اللاتينية بالحروف الكبيرة والصغيرة.'], ['هل توجد ورقة حلول؟', 'نعم، فعّلها قبل الطباعة: تظهر الحروف الناقصة لكل سطر.']],
  },
},

{
  slug: 'uppercase-lowercase',
  meta: {
    en: { title: 'Uppercase and Lowercase Letters Worksheets — Free | Kids Learning Hub', desc: 'Free printable uppercase and lowercase letter worksheets: write the small or capital letter for each one. In Arabic: write the beginning, middle and end forms of each letter. A new A4 sheet every click, with answers.' },
    fr: { title: 'Fiches majuscules et minuscules — gratuites | Kids Learning Hub', desc: 'Fiches gratuites majuscules et minuscules : écris la minuscule ou la majuscule de chaque lettre. En arabe : les formes de début, de milieu et de fin de chaque lettre. Une nouvelle fiche A4 à chaque clic, avec corrigé.' },
    es: { title: 'Fichas de mayúsculas y minúsculas — gratis | Kids Learning Hub', desc: 'Fichas gratis de mayúsculas y minúsculas: escribe la minúscula o la mayúscula de cada letra. En árabe: las formas de inicio, medio y final de cada letra. Una hoja A4 nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق أشكال الحروف العربية — أول الكلمة ووسطها وآخرها | Kids Learning Hub', desc: 'أوراق مجانية لأشكال الحروف العربية: اكتب الحرف كما يُكتب في أول الكلمة ووسطها وآخرها. وبالإنجليزية والفرنسية والإسبانية: الحروف الكبيرة والصغيرة. ورقة A4 جديدة مع كل ضغطة مع الحلول.' },
  }, emoji: '🔠', ages: '5–8',
  lede: {
    en: 'Each Latin letter has two shapes, and some pairs look nothing alike: A and a, G and g, R and r. Children need to recognise both to read any real text. These sheets ask them to write the small letter for a capital, the capital for a small letter, or both mixed. Switch to Arabic and the sheet changes to what matters in Arabic writing: how each letter changes shape at the beginning, in the middle and at the end of a word.',
    fr: 'Chaque lettre latine a deux formes, et certaines paires ne se ressemblent pas du tout : A et a, G et g, R et r. L’enfant doit reconnaître les deux pour lire un vrai texte. Ces fiches lui demandent d’écrire la minuscule d’une majuscule, la majuscule d’une minuscule, ou les deux mélangées. Passez en arabe et la fiche devient ce qui compte en écriture arabe : comment chaque lettre change de forme au début, au milieu et à la fin du mot.',
    es: 'Cada letra latina tiene dos formas, y algunas parejas no se parecen nada: A y a, G y g, R y r. El niño necesita reconocer las dos para leer un texto real. Estas fichas piden escribir la minúscula de una mayúscula, la mayúscula de una minúscula o las dos mezcladas. Cambia al árabe y la ficha pasa a lo importante en la escritura árabe: cómo cambia cada letra al principio, en medio y al final de la palabra.',
    ar: 'الحرف العربي يتغيّر شكله حسب موضعه في الكلمة: بـ في أولها، وـبـ في وسطها، وـب في آخرها، وبعض الحروف (ا د ذ ر ز و) لا تتّصل بما بعدها. وإتقان هذه الأشكال ضروري للقراءة والكتابة المتّصلة. تطلب هذه الأوراق كتابة الحرف في أول الكلمة، أو في آخرها، أو في المواضع الثلاثة. وإذا غيّرت اللغة إلى الإنجليزية أو الفرنسية أو الإسبانية تصبح الورقة: الحروف الكبيرة والصغيرة.',
  },
  how: {
    en: ['Start with the pairs that look alike (C c, O o, S s) to build confidence.', 'Spend extra time on pairs that look different: A a, B b, D d, G g, Q q, R r.', 'Watch out for b and d: say “b has its tummy in front”.', 'Read a short book together and hunt for capitals at the start of sentences.'],
    fr: ['Commencez par les paires qui se ressemblent (C c, O o, S s) pour donner confiance.', 'Insistez sur les paires différentes : A a, B b, D d, G g, Q q, R r.', 'Attention à b et d : ils sont souvent confondus, montrez le sens du ventre.', 'Lisez un petit livre ensemble et cherchez les majuscules en début de phrase.'],
    es: ['Empieza por las parejas parecidas (C c, O o, S s) para dar confianza.', 'Insiste en las parejas distintas: A a, B b, D d, G g, Q q, R r.', 'Cuidado con b y d: se confunden a menudo, fíjate en hacia dónde va la barriga.', 'Leed un libro corto y buscad las mayúsculas al principio de las frases.'],
    ar: ['ابدأ بالحروف المتشابهة الأشكال مثل ب ت ث لأنها تتبع القاعدة نفسها.', 'وضّح الحروف الستة التي لا تتّصل بما بعدها: ا د ذ ر ز و.', 'انتبه إلى الحروف التي يتغيّر شكلها كثيرًا: ع ه ك ي.', 'اقرآ نصًّا قصيرًا معًا وابحثا عن الحرف نفسه في مواضع مختلفة.'],
  },
  faq: {
    en: [['Why does the Arabic page show different exercises?', 'Arabic has no capital letters. Its equivalent challenge is the joined forms, so the Arabic sheet practises beginning, middle and end forms.'], ['Does Spanish include Ñ?', 'Yes, Ñ ñ can appear on the Spanish sheets.'], ['Is there an answer key?', 'Yes: each letter with its pair, or with its three forms in Arabic.']],
    fr: [['Pourquoi la page arabe propose-t-elle autre chose ?', 'L’arabe n’a pas de majuscules. La difficulté équivalente, ce sont les formes attachées : la fiche arabe travaille les formes de début, de milieu et de fin.'], ['L’espagnol inclut-il le Ñ ?', 'Oui, Ñ ñ peut apparaître sur les fiches en espagnol.'], ['Y a-t-il un corrigé ?', 'Oui : chaque lettre avec sa paire, ou avec ses trois formes en arabe.']],
    es: [['¿Por qué la página en árabe es distinta?', 'El árabe no tiene mayúsculas. Su reto equivalente son las formas unidas, así que la ficha árabe practica las formas de inicio, medio y final.'], ['¿Incluye la Ñ?', 'Sí, Ñ ñ puede aparecer en las fichas en español.'], ['¿Hay soluciones?', 'Sí: cada letra con su pareja, o con sus tres formas en árabe.']],
    ar: [['ما الحروف التي لا تتّصل بما بعدها؟', 'ستة حروف: ا د ذ ر ز و. شكلها في أول الكلمة هو شكلها المنفصل، وتتّصل فقط بما قبلها.'], ['ما هذه الشرطة في الحلول (ـ)؟', 'هي «الكشيدة» وتدلّ على موضع اتّصال الحرف بما قبله أو بما بعده.'], ['هل توجد ورقة حلول؟', 'نعم: كل حرف مع شكله المطلوب، أو مع أشكاله الثلاثة.']],
  },
},

];
