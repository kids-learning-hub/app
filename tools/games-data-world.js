/* Kids Learning Hub — guide content for the geography & science browser games
   (play/). Used by tools/build-games.js. 4 languages per game.               */
'use strict';

module.exports = [

/* ── capitals ──────────────────────────────────────────────────────── */
{
  slug: 'capitals', emoji: '🌍', ages: '7–13',
  meta: {
    en: { title: 'World Capitals Quiz for Kids — Free Online Geography Game | Kids Learning Hub', desc: 'Free capitals quiz for kids: 10 questions about the capital cities of 20 countries, with stars and a printable certificate. Ages 7–13.' },
    fr: { title: 'Quiz des capitales du monde pour enfants — jeu gratuit | Kids Learning Hub', desc: 'Quiz gratuit des capitales : 10 questions sur les capitales de 20 pays, avec étoiles et diplôme à imprimer. Un jeu de géographie pour les 7–13 ans.' },
    es: { title: 'Quiz de capitales del mundo para niños — juego gratis | Kids Learning Hub', desc: 'Quiz gratis de capitales: 10 preguntas sobre las capitales de 20 países, con estrellas y diploma para imprimir. Juego de geografía de 7 a 13 años.' },
    ar: { title: 'اختبار عواصم العالم للأطفال — لعبة جغرافيا مجانية | Kids Learning Hub', desc: 'اختبار مجاني للعواصم: 10 أسئلة عن عواصم 20 دولة، مع نجوم وشهادة للطباعة. لعبة جغرافيا لأعمار 7–13.' },
  },
  lede: {
    en: 'Learning capital cities is a great door into geography: each name raises questions about where a country is, which language people speak and what the city looks like. This quiz asks ten questions drawn from twenty countries across every continent, with three possible answers each time. It is short enough for a daily challenge and gives children a sense of the world beyond their own country.',
    fr: 'Apprendre les capitales est une belle porte d’entrée vers la géographie : chaque nom soulève des questions sur la situation du pays, la langue qu’on y parle et l’aspect de la ville. Ce quiz pose dix questions tirées de vingt pays de tous les continents, avec trois réponses possibles à chaque fois. Assez court pour un défi quotidien, il ouvre l’enfant au monde au-delà de son propre pays.',
    es: 'Aprender capitales es una gran puerta de entrada a la geografía: cada nombre despierta preguntas sobre dónde está el país, qué idioma se habla y cómo es la ciudad. Este quiz plantea diez preguntas de veinte países de todos los continentes, con tres respuestas posibles cada vez. Es lo bastante corto para un reto diario y abre al niño al mundo más allá de su país.',
    ar: 'تعلّم العواصم باب جميل إلى الجغرافيا: فكل اسم يثير أسئلة عن موقع البلد، واللغة التي يتكلّمها أهله، وشكل المدينة. ويطرح هذا الاختبار عشرة أسئلة من عشرين دولة في كل القارات، مع ثلاثة أجوبة ممكنة في كل مرة. وهو قصير بما يكفي ليكون تحدّيًا يوميًا، ويفتح للطفل نافذة على العالم أبعد من بلده.',
  },
  how: {
    en: ['Look up each country on a world map or globe after the quiz.', 'Connect capitals to stories: food, animals, famous buildings, a friend or relative living there.', 'Group countries by continent to make them easier to remember.', 'Print the certificate after three stars and display it at home.'],
    fr: ['Après le quiz, cherchez chaque pays sur une carte ou un globe.', 'Reliez les capitales à des histoires : cuisine, animaux, monuments, un proche qui y vit.', 'Regroupez les pays par continent pour les retenir plus facilement.', 'Imprimez le diplôme après trois étoiles et affichez-le à la maison.'],
    es: ['Después del quiz, buscad cada país en un mapa o un globo.', 'Relacionad las capitales con historias: comida, animales, monumentos, un familiar que vive allí.', 'Agrupad los países por continente para recordarlos mejor.', 'Imprimid el diploma tras tres estrellas y ponedlo en casa.'],
    ar: ['بعد الاختبار ابحثا عن كل بلد على خريطة العالم أو الكرة الأرضية.', 'اربطا العواصم بقصص: الطعام والحيوانات والمعالم الشهيرة، أو قريب يعيش هناك.', 'جمّعا الدول حسب القارات ليسهل تذكّرها.', 'اطبعا الشهادة بعد ثلاث نجوم وعلّقاها في البيت.'],
  },
  faq: {
    en: [['How many countries are in the quiz?', 'Twenty countries from every continent. Each game picks ten of them, so every round is a little different.'], ['From what age?', 'From about 7 with help, and independently from 8–9. Older children can aim for three stars in a row.'], ['Is there a printable geography activity?', 'Yes — our free continents and flags worksheets let children label, colour and learn more about the world.']],
    fr: [['Combien de pays dans le quiz ?', 'Vingt pays de tous les continents. Chaque partie en tire dix, si bien que chaque manche est un peu différente.'], ['Dès quel âge ?', 'Dès 7 ans environ avec de l’aide, seul vers 8–9 ans. Les plus grands peuvent viser trois étoiles d’affilée.'], ['Existe-t-il une activité de géographie à imprimer ?', 'Oui : nos fiches gratuites des continents et des drapeaux permettent de légender, colorier et découvrir le monde.']],
    es: [['¿Cuántos países hay en el quiz?', 'Veinte países de todos los continentes. Cada partida elige diez, así que cada ronda es un poco distinta.'], ['¿Desde qué edad?', 'Desde los 7 años con ayuda y solos hacia los 8–9. Los mayores pueden intentar tres estrellas seguidas.'], ['¿Hay alguna actividad de geografía para imprimir?', 'Sí: nuestras fichas gratis de continentes y banderas permiten rotular, colorear y conocer el mundo.']],
    ar: [['كم دولة في الاختبار؟', 'عشرون دولة من كل القارات. وتختار كل جولة عشرًا منها، فتختلف كل جولة قليلًا.'], ['من أي عمر؟', 'من نحو 7 سنوات بمساعدة، وباستقلالية من 8–9 سنوات. ويمكن للأكبر سنًّا السعي إلى ثلاث نجوم متتالية.'], ['هل توجد أنشطة جغرافيا للطباعة؟', 'نعم: أوراق القارات والأعلام المجانية تتيح للطفل التسمية والتلوين واكتشاف العالم.']],
  },
},

/* ── flags ─────────────────────────────────────────────────────────── */
{
  slug: 'flags', emoji: '🚩', ages: '6–12',
  meta: {
    en: { title: 'Guess the Flag — Free Flags Quiz Game for Kids | Kids Learning Hub', desc: 'Free flags quiz for kids: see a flag and name the country. 24 countries, 10 questions per game, stars and a certificate. Ages 6–12.' },
    fr: { title: 'Devine le drapeau — quiz des drapeaux gratuit pour enfants | Kids Learning Hub', desc: 'Quiz gratuit des drapeaux : regarde le drapeau et trouve le pays. 24 pays, 10 questions par partie, étoiles et diplôme. 6–12 ans.' },
    es: { title: 'Adivina la bandera — quiz de banderas gratis para niños | Kids Learning Hub', desc: 'Quiz gratis de banderas: mira la bandera y di el país. 24 países, 10 preguntas por partida, estrellas y diploma. De 6 a 12 años.' },
    ar: { title: 'خمّن العلم — اختبار أعلام مجاني للأطفال | Kids Learning Hub', desc: 'اختبار أعلام مجاني: انظر إلى العلم وسمِّ البلد. 24 دولة و10 أسئلة في كل جولة، مع نجوم وشهادة. لأعمار 6–12.' },
  },
  lede: {
    en: 'Flags are colourful, memorable and full of meaning — the perfect starting point for children who are curious about the world. In Guess the Flag, a flag appears and children choose the right country among three answers. Twenty-four countries from every continent are included, and each game picks ten of them. Children learn to notice details — stripes, stars, symbols and colours — which also trains careful observation.',
    fr: 'Les drapeaux sont colorés, faciles à retenir et pleins de sens : le point de départ idéal pour les enfants curieux du monde. Dans Devine le drapeau, un drapeau s’affiche et l’enfant choisit le bon pays parmi trois réponses. Vingt-quatre pays de tous les continents sont inclus, et chaque partie en tire dix. L’enfant apprend à remarquer les détails — bandes, étoiles, symboles et couleurs — ce qui entraîne aussi l’observation.',
    es: 'Las banderas son coloridas, fáciles de recordar y llenas de significado: el punto de partida ideal para niños curiosos por el mundo. En Adivina la bandera aparece una bandera y el niño elige el país correcto entre tres respuestas. Hay veinticuatro países de todos los continentes y cada partida elige diez. El niño aprende a fijarse en los detalles —franjas, estrellas, símbolos y colores—, lo que también entrena la observación.',
    ar: 'الأعلام ملوّنة وسهلة التذكّر ومليئة بالمعاني، وهي نقطة انطلاق مثالية للأطفال الفضوليين تجاه العالم. في خمّن العلم يظهر علم ويختار الطفل البلد الصحيح من بين ثلاثة أجوبة. وتضمّ اللعبة أربعًا وعشرين دولة من كل القارات، وتختار كل جولة عشرًا منها. ويتعلّم الطفل ملاحظة التفاصيل — الخطوط والنجوم والرموز والألوان — وهذا يدرّب أيضًا على الملاحظة الدقيقة.',
  },
  how: {
    en: ['Talk about what the colours and symbols might mean before revealing the answer.', 'Point out flags that look alike and find the one detail that separates them.', 'After the game, find each country on a map.', 'Let your child design a flag for your family and explain its symbols.'],
    fr: ['Parlez de ce que les couleurs et symboles pourraient signifier avant de répondre.', 'Repérez les drapeaux qui se ressemblent et trouvez le détail qui les distingue.', 'Après la partie, situez chaque pays sur une carte.', 'Laissez l’enfant dessiner le drapeau de votre famille et expliquer ses symboles.'],
    es: ['Hablad de lo que podrían significar los colores y símbolos antes de responder.', 'Fijaos en banderas parecidas y encontrad el detalle que las diferencia.', 'Después de la partida, localizad cada país en un mapa.', 'Deja que tu hijo diseñe la bandera de vuestra familia y explique sus símbolos.'],
    ar: ['تحدّثا عمّا قد تعنيه الألوان والرموز قبل الإجابة.', 'لاحظا الأعلام المتشابهة وابحثا عن التفصيل الذي يميّز بينها.', 'بعد اللعب حدّدا موقع كل بلد على الخريطة.', 'دع طفلك يصمّم علمًا لأسرتكم ويشرح رموزه.'],
  },
  faq: {
    en: [['How many flags are there?', 'Twenty-four countries from every continent; each game asks ten of them.'], ['Does it work on phones?', 'Yes, it runs in any browser on phones, tablets and computers.'], ['Can my child colour flags too?', 'Yes — our free flags worksheets include flags to colour and countries and capitals to write.']],
    fr: [['Combien de drapeaux ?', 'Vingt-quatre pays de tous les continents ; chaque partie en propose dix.'], ['Fonctionne-t-il sur téléphone ?', 'Oui, dans n’importe quel navigateur sur téléphone, tablette ou ordinateur.'], ['Peut-on aussi colorier des drapeaux ?', 'Oui : nos fiches gratuites de drapeaux proposent des drapeaux à colorier ainsi que pays et capitales à écrire.']],
    es: [['¿Cuántas banderas hay?', 'Veinticuatro países de todos los continentes; cada partida pregunta diez.'], ['¿Funciona en el móvil?', 'Sí, en cualquier navegador de móvil, tableta u ordenador.'], ['¿También se pueden colorear banderas?', 'Sí: nuestras fichas gratis de banderas incluyen banderas para colorear y países y capitales para escribir.']],
    ar: [['كم علمًا في اللعبة؟', 'أربع وعشرون دولة من كل القارات، وكل جولة تسأل عن عشر منها.'], ['هل تعمل على الهاتف؟', 'نعم، في أي متصفّح على الهاتف أو اللوحة أو الحاسوب.'], ['هل يمكن لطفلي تلوين الأعلام أيضًا؟', 'نعم: أوراق الأعلام المجانية تضمّ أعلامًا للتلوين ودولًا وعواصم للكتابة.']],
  },
},

/* ── science quiz ──────────────────────────────────────────────────── */
{
  slug: 'science-quiz', emoji: '🔬', ages: '6–11',
  meta: {
    en: { title: 'Science Quiz for Kids — Free Online Questions on Space, Animals & the Body | Kids Learning Hub', desc: 'Free science quiz for kids: space, animals, the human body and weather. 10 questions per game, stars and a printable certificate. Ages 6–11.' },
    fr: { title: 'Quiz de sciences pour enfants — espace, animaux et corps humain | Kids Learning Hub', desc: 'Quiz de sciences gratuit pour enfants : l’espace, les animaux, le corps humain et la météo. 10 questions par partie, étoiles et diplôme. 6–11 ans.' },
    es: { title: 'Quiz de ciencias para niños — espacio, animales y cuerpo humano | Kids Learning Hub', desc: 'Quiz de ciencias gratis para niños: el espacio, los animales, el cuerpo humano y el tiempo. 10 preguntas por partida, estrellas y diploma. De 6 a 11 años.' },
    ar: { title: 'اختبار العلوم للأطفال — الفضاء والحيوانات وجسم الإنسان | Kids Learning Hub', desc: 'اختبار علوم مجاني للأطفال: الفضاء والحيوانات وجسم الإنسان والطقس. 10 أسئلة في كل جولة، مع نجوم وشهادة. لأعمار 6–11.' },
  },
  lede: {
    en: 'Children ask hundreds of questions about the world; this quiz turns some of the answers into a game. Ten questions per round cover four big themes from the primary science curriculum — space, animals, the human body and weather — with three possible answers each. A quiz is a powerful way to learn: trying to remember an answer, even a wrong one, makes the right answer stick better afterwards.',
    fr: 'Les enfants posent des centaines de questions sur le monde ; ce quiz transforme certaines réponses en jeu. Dix questions par partie couvrent quatre grands thèmes du programme de sciences du primaire — l’espace, les animaux, le corps humain et la météo — avec trois réponses possibles. Le quiz est une méthode d’apprentissage puissante : chercher une réponse, même fausse, aide ensuite à mieux retenir la bonne.',
    es: 'Los niños hacen cientos de preguntas sobre el mundo; este quiz convierte algunas respuestas en un juego. Diez preguntas por partida cubren cuatro grandes temas de ciencias de primaria —el espacio, los animales, el cuerpo humano y el tiempo— con tres respuestas posibles. El quiz es una forma potente de aprender: intentar recordar una respuesta, aunque sea errónea, ayuda a fijar mejor la correcta.',
    ar: 'يطرح الأطفال مئات الأسئلة عن العالم، وهذا الاختبار يحوّل بعض أجوبتها إلى لعبة. عشرة أسئلة في كل جولة تغطّي أربعة محاور كبرى من برنامج العلوم في الابتدائي — الفضاء والحيوانات وجسم الإنسان والطقس — مع ثلاثة أجوبة ممكنة. والاختبار طريقة قوية للتعلّم: فمحاولة تذكّر الجواب، حتى إن كانت خاطئة، تجعل الجواب الصحيح يرسخ أكثر بعد ذلك.',
  },
  how: {
    en: ['After a wrong answer, ask “What made you think that?” — children’s ideas are often logical.', 'Pick one question per game and find out more together in a book or video.', 'Turn a question into a small home experiment when possible.', 'Replay the quiz a few days later: remembering after a pause strengthens learning.'],
    fr: ['Après une erreur, demandez « Qu’est-ce qui t’a fait penser ça ? » : les idées des enfants sont souvent logiques.', 'Choisissez une question par partie et approfondissez-la ensemble dans un livre ou une vidéo.', 'Quand c’est possible, transformez une question en petite expérience à la maison.', 'Rejouez quelques jours plus tard : se souvenir après une pause renforce l’apprentissage.'],
    es: ['Tras un error, pregunta «¿Qué te hizo pensar eso?»: las ideas de los niños suelen ser lógicas.', 'Elegid una pregunta por partida y buscad más juntos en un libro o un vídeo.', 'Cuando sea posible, convertid una pregunta en un pequeño experimento en casa.', 'Volved a jugar unos días después: recordar tras una pausa refuerza el aprendizaje.'],
    ar: ['بعد الخطأ اسأله «ما الذي جعلك تظنّ ذلك؟»، فأفكار الأطفال كثيرًا ما تكون منطقية.', 'اختارا سؤالًا واحدًا في كل جولة وابحثا فيه أكثر في كتاب أو فيديو.', 'حين يكون ممكنًا، حوّلا السؤال إلى تجربة صغيرة في البيت.', 'أعيدا الاختبار بعد أيام: فالتذكّر بعد فترة يقوّي التعلّم.'],
  },
  faq: {
    en: [['Which topics are covered?', 'Space, animals, the human body and weather — four themes found in most primary science programmes.'], ['From what age?', 'From about 6 with an adult reading the questions, and independently from 7–8.'], ['Where can my child learn more science?', 'Try our easy home science experiments guide and our free ScienKids app, which covers ten science topics with games.']],
    fr: [['Quels thèmes sont abordés ?', 'L’espace, les animaux, le corps humain et la météo — quatre thèmes présents dans la plupart des programmes de sciences du primaire.'], ['Dès quel âge ?', 'Vers 6 ans avec un adulte qui lit les questions, seul vers 7–8 ans.'], ['Où en apprendre plus en sciences ?', 'Essayez notre guide d’expériences scientifiques faciles et notre appli gratuite ScienKids, qui couvre dix thèmes avec des jeux.']],
    es: [['¿Qué temas trata?', 'El espacio, los animales, el cuerpo humano y el tiempo: cuatro temas presentes en la mayoría de programas de ciencias de primaria.'], ['¿Desde qué edad?', 'Hacia los 6 años con un adulto que lea las preguntas, y solos hacia los 7–8.'], ['¿Dónde aprender más ciencias?', 'Prueba nuestra guía de experimentos fáciles y nuestra app gratis ScienKids, que trata diez temas con juegos.']],
    ar: [['ما المحاور التي يغطّيها؟', 'الفضاء والحيوانات وجسم الإنسان والطقس، وهي أربعة محاور موجودة في معظم برامج العلوم بالابتدائي.'], ['من أي عمر؟', 'من نحو 6 سنوات مع شخص بالغ يقرأ الأسئلة، وباستقلالية من 7–8 سنوات.'], ['أين يتعلّم طفلي المزيد من العلوم؟', 'جرّبا دليل التجارب العلمية السهلة في البيت، وتطبيقنا المجاني ScienKids الذي يغطّي عشرة محاور بالألعاب.']],
  },
},

/* ── animal homes ──────────────────────────────────────────────────── */
{
  slug: 'animal-homes', emoji: '🦁', ages: '5–10',
  meta: {
    en: { title: 'Animal Habitats Game for Kids — Free Online Science Game | Kids Learning Hub', desc: 'Free animal habitats game: help each animal find its home — ocean, forest, desert, polar ice, farm or savanna — and learn a fun fact each time. Ages 5–10.' },
    fr: { title: 'Où vivent les animaux ? Jeu gratuit sur les habitats | Kids Learning Hub', desc: 'Jeu gratuit sur les habitats : aide chaque animal à retrouver sa maison — océan, forêt, désert, banquise, ferme ou savane — et découvre une info à chaque fois. 5–10 ans.' },
    es: { title: '¿Dónde viven los animales? Juego gratis de hábitats | Kids Learning Hub', desc: 'Juego gratis de hábitats: ayuda a cada animal a encontrar su casa —océano, bosque, desierto, hielo polar, granja o sabana— y aprende un dato curioso. De 5 a 10 años.' },
    ar: { title: 'أين تعيش الحيوانات؟ لعبة مجانية عن المواطن | Kids Learning Hub', desc: 'لعبة مجانية عن المواطن: ساعد كل حيوان على إيجاد بيته — المحيط والغابة والصحراء والجليد القطبي والمزرعة والسافانا — واكتشف معلومة في كل مرة. لأعمار 5–10.' },
  },
  lede: {
    en: 'Why does a camel have a hump and a polar bear thick fur? Animals are shaped by the places they live. In this game, children help 22 animals find their habitat among six homes — ocean, forest, desert, polar ice, farm and savanna — and after every answer they discover a short, true fact about the animal. It is a gentle introduction to adaptation, one of the big ideas of primary science.',
    fr: 'Pourquoi le chameau a-t-il une bosse et l’ours polaire une épaisse fourrure ? Les animaux sont adaptés aux lieux où ils vivent. Dans ce jeu, l’enfant aide 22 animaux à retrouver leur habitat parmi six milieux — océan, forêt, désert, banquise, ferme et savane — et découvre après chaque réponse une courte info vraie sur l’animal. Une introduction douce à l’adaptation, l’une des grandes idées des sciences du primaire.',
    es: '¿Por qué el camello tiene joroba y el oso polar un pelaje grueso? Los animales están adaptados a los lugares donde viven. En este juego, el niño ayuda a 22 animales a encontrar su hábitat entre seis lugares —océano, bosque, desierto, hielo polar, granja y sabana— y tras cada respuesta descubre un dato breve y real. Una introducción amable a la adaptación, una de las grandes ideas de las ciencias de primaria.',
    ar: 'لماذا للجمل سنام وللدب القطبي فرو كثيف؟ لأن الحيوانات تتكيّف مع الأماكن التي تعيش فيها. في هذه اللعبة يساعد الطفل 22 حيوانًا على إيجاد موطنها بين ستة أماكن — المحيط والغابة والصحراء والجليد القطبي والمزرعة والسافانا — ويكتشف بعد كل جواب معلومة قصيرة وصحيحة عن الحيوان. إنها مدخل لطيف إلى التكيّف، أحد المفاهيم الكبرى في علوم الابتدائي.',
  },
  how: {
    en: ['After each fact, ask: “How does this help the animal live there?”', 'Sort toy animals or pictures into habitats on the floor.', 'Visit a zoo, farm or aquarium and play “guess the habitat” together.', 'Talk about your own home: which animals live in your city or countryside?'],
    fr: ['Après chaque info, demandez : « En quoi cela aide-t-il l’animal à vivre là ? »', 'Classez des figurines ou des images d’animaux par habitat, sur le sol.', 'Visitez un zoo, une ferme ou un aquarium et jouez à « devine l’habitat ».', 'Parlez de chez vous : quels animaux vivent dans votre ville ou votre campagne ?'],
    es: ['Después de cada dato, pregunta: «¿Cómo le ayuda esto a vivir allí?»', 'Clasificad animales de juguete o dibujos por hábitats en el suelo.', 'Visitad un zoo, una granja o un acuario y jugad a «adivina el hábitat».', 'Hablad de vuestro entorno: ¿qué animales viven en vuestra ciudad o en el campo?'],
    ar: ['بعد كل معلومة اسأله: «كيف يساعد هذا الحيوان على العيش هناك؟»', 'صنّفا ألعاب الحيوانات أو صورها حسب المواطن على الأرض.', 'زورا حديقة حيوانات أو مزرعة أو أحواض أسماك والعبا «خمّن الموطن».', 'تحدّثا عن محيطكم: أيّ الحيوانات تعيش في مدينتكم أو في البادية؟'],
  },
  faq: {
    en: [['What is a habitat?', 'The place where an animal finds food, water and shelter. Each animal has body features adapted to its habitat.'], ['Why can some animals have two homes?', 'Penguins, seals and polar bears live on the ice and also hunt in the ocean, so the game never offers the second home as a wrong answer.'], ['Where can my child learn more about animals?', 'Our free ScienKids app has full lessons on animals, plants and the human body.']],
    fr: [['Qu’est-ce qu’un habitat ?', 'Le lieu où un animal trouve nourriture, eau et abri. Chaque animal a un corps adapté à son habitat.'], ['Pourquoi certains animaux ont-ils deux maisons ?', 'Manchots, phoques et ours polaires vivent sur la glace et chassent aussi dans l’océan : le jeu ne propose donc jamais leur deuxième milieu comme mauvaise réponse.'], ['Où en apprendre plus sur les animaux ?', 'Notre appli gratuite ScienKids propose des leçons complètes sur les animaux, les plantes et le corps humain.']],
    es: [['¿Qué es un hábitat?', 'El lugar donde un animal encuentra comida, agua y refugio. Cada animal tiene un cuerpo adaptado a su hábitat.'], ['¿Por qué algunos animales tienen dos casas?', 'Pingüinos, focas y osos polares viven en el hielo y también cazan en el océano, así que el juego nunca ofrece su segundo hogar como respuesta incorrecta.'], ['¿Dónde aprender más sobre animales?', 'Nuestra app gratis ScienKids tiene lecciones completas sobre animales, plantas y el cuerpo humano.']],
    ar: [['ما الموطن؟', 'المكان الذي يجد فيه الحيوان الغذاء والماء والمأوى. ولكل حيوان جسم متكيّف مع موطنه.'], ['لماذا لبعض الحيوانات موطنان؟', 'البطاريق والفقمات والدببة القطبية تعيش على الجليد وتصطاد أيضًا في المحيط، لذلك لا تعرض اللعبة موطنها الثاني أبدًا كجواب خاطئ.'], ['أين يتعلّم طفلي المزيد عن الحيوانات؟', 'تطبيقنا المجاني ScienKids يضمّ دروسًا كاملة عن الحيوانات والنباتات وجسم الإنسان.']],
  },
},

];
