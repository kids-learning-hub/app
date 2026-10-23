/* Kids Learning Hub — guide content for the fourth batch of printables
   (October 2026): coordinates, number pyramids, column multiplication,
   fact families, odd one out, comparing fractions.
   Merged into tools/worksheets-data.js.                                    */
'use strict';

module.exports = [

{
  slug: 'coordinates',
  meta: {
    en: { title: 'Coordinate Grid Worksheets — Read & Plot Points | Kids Learning Hub', desc: 'Free printable coordinate grid worksheets: read the coordinates of pictures on a 5×5 or 10×10 grid, or plot points from their coordinates. First quadrant, (x, y). A new A4 sheet every click, with answers. Grades 3–6.' },
    fr: { title: 'Fiches repérage sur quadrillage — lire et placer des points | Kids Learning Hub', desc: 'Fiches gratuites de repérage : lis les coordonnées d’images sur un quadrillage 5×5 ou 10×10, ou place des points à partir de leurs coordonnées. Une nouvelle fiche A4 à chaque clic, avec corrigé.' },
    es: { title: 'Fichas de coordenadas — leer y situar puntos | Kids Learning Hub', desc: 'Fichas gratis de coordenadas: lee las coordenadas de dibujos en una cuadrícula de 5×5 o 10×10, o sitúa puntos a partir de sus coordenadas. Una hoja A4 nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق الإحداثيات — قراءة النقاط وتعيينها | Kids Learning Hub', desc: 'أوراق مجانية للإحداثيات: اقرأ إحداثيات صور على شبكة 5×5 أو 10×10، أو عيّن نقاطًا من إحداثياتها. ورقة A4 جديدة مع كل ضغطة مع الحلول.' },
  }, emoji: '📍', ages: '8–12',
  lede: {
    en: 'Coordinates are how maps, games and graphs say exactly where something is. A point is written as a pair (x, y): first how far across, then how far up. Children often swap the two numbers, so these sheets give lots of practice in the right order. The first level uses a small 5×5 grid with big pictures; the second a 10×10 grid with ten pictures; and the third reverses the task, asking children to plot lettered points from their coordinates.',
    fr: 'Les coordonnées permettent aux cartes, aux jeux et aux graphiques de dire exactement où se trouve quelque chose. Un point s’écrit avec un couple (x ; y) : d’abord de combien on avance vers la droite, puis de combien on monte. Les enfants inversent souvent les deux nombres, d’où beaucoup d’entraînement dans le bon ordre. Le premier niveau utilise un petit quadrillage 5×5 avec de grandes images, le deuxième un quadrillage 10×10 avec dix images, et le troisième inverse la tâche : placer des points nommés par une lettre à partir de leurs coordonnées.',
    es: 'Las coordenadas sirven a los mapas, los juegos y las gráficas para decir exactamente dónde está algo. Un punto se escribe como un par (x, y): primero cuánto se avanza hacia la derecha y luego cuánto se sube. Los niños suelen intercambiar los dos números, así que estas fichas dan mucha práctica en el orden correcto. El primer nivel usa una cuadrícula de 5×5 con dibujos grandes, el segundo una de 10×10 con diez dibujos, y el tercero invierte la tarea: situar puntos con letra a partir de sus coordenadas.',
    ar: 'الإحداثيات هي الطريقة التي تحدّد بها الخرائط والألعاب والتمثيلات البيانية موضع الشيء بدقة. تُكتب النقطة بزوج (x، y): أولًا كم نتقدّم أفقيًا، ثم كم نصعد. وكثيرًا ما يعكس الأطفال العددين، لذا تقدّم هذه الأوراق تدريبًا كثيرًا على الترتيب الصحيح. المستوى الأول شبكة صغيرة 5×5 بصور كبيرة، والثاني شبكة 10×10 بعشر صور، والثالث يعكس المهمة: تعيين نقاط مسمّاة بحروف انطلاقًا من إحداثياتها.',
  },
  how: {
    en: ['Teach the rhyme “along the corridor, then up the stairs”: x first, then y.', 'Put a finger on 0, move along the bottom to x, then straight up to y.', 'Check each answer by reading it back: does (3, 5) really land on the picture?', 'Play sea battle afterwards: it uses the same skill.'],
    fr: ['Apprenez la formule « d’abord le couloir, puis l’escalier » : x d’abord, puis y.', 'Posez le doigt sur 0, avancez en bas jusqu’à x, puis montez tout droit jusqu’à y.', 'Vérifiez chaque réponse en la relisant : (3 ; 5) tombe-t-il vraiment sur l’image ?', 'Jouez ensuite à la bataille navale : c’est la même compétence.'],
    es: ['Enseña la frase «primero el pasillo y luego la escalera»: primero x, luego y.', 'Pon el dedo en 0, avanza por abajo hasta x y sube recto hasta y.', 'Comprueba cada respuesta leyéndola: ¿(3, 5) cae de verdad en el dibujo?', 'Después jugad a hundir la flota: usa la misma habilidad.'],
    ar: ['علّمه العبارة «الممرّ أولًا ثم الدرج»: x أولًا ثم y.', 'ضع إصبعك على 0، وتقدّم أفقيًا حتى x، ثم اصعد مباشرة حتى y.', 'تحقّق من كل جواب بقراءته: هل تقع النقطة (3، 5) فعلًا على الصورة؟', 'العبا بعدها المعركة البحرية: إنها المهارة نفسها.'],
  },
  faq: {
    en: [['Which number comes first?', 'Always x, the horizontal one, then y, the vertical one: (across, up).'], ['Are there negative numbers?', 'No, these grids use only the first quadrant (0 to 5 or 0 to 10), as in primary school.'], ['Is there an answer key?', 'Yes: the coordinates for the reading levels, and the grid with the points plotted for the plotting level.']],
    fr: [['Quel nombre vient en premier ?', 'Toujours x, l’horizontal, puis y, le vertical : (vers la droite ; vers le haut).'], ['Y a-t-il des nombres négatifs ?', 'Non, ces quadrillages n’utilisent que le premier quadrant (de 0 à 5 ou de 0 à 10), comme à l’école primaire.'], ['Y a-t-il un corrigé ?', 'Oui : les coordonnées pour les niveaux de lecture, et le quadrillage avec les points placés pour le niveau « placer ».']],
    es: [['¿Qué número va primero?', 'Siempre x, el horizontal, y luego y, el vertical: (derecha, arriba).'], ['¿Hay números negativos?', 'No, estas cuadrículas solo usan el primer cuadrante (de 0 a 5 o de 0 a 10), como en primaria.'], ['¿Hay soluciones?', 'Sí: las coordenadas en los niveles de lectura y la cuadrícula con los puntos situados en el nivel de situar.']],
    ar: [['أيّ عدد يأتي أولًا؟', 'دائمًا x الأفقي، ثم y العمودي: (أفقيًا، ثم إلى الأعلى).'], ['هل توجد أعداد سالبة؟', 'لا، تستعمل هذه الشبكات الربع الأول فقط (من 0 إلى 5 أو إلى 10) كما في الابتدائي.'], ['هل توجد ورقة حلول؟', 'نعم: الإحداثيات في مستويات القراءة، والشبكة مع النقاط معيّنة في مستوى التعيين.']],
  },
},

{
  slug: 'number-pyramids',
  meta: {
    en: { title: 'Number Pyramid Worksheets — Addition Pyramids for Kids | Kids Learning Hub', desc: 'Free printable number pyramids: each brick is the sum of the two bricks below it. 3-row and 4-row pyramids, and pyramids with missing bricks that need subtraction. A new A4 sheet every click, with answers.' },
    fr: { title: 'Pyramides de nombres à imprimer — pyramides d’additions | Kids Learning Hub', desc: 'Pyramides de nombres gratuites : chaque brique est la somme des deux briques du dessous. Pyramides à 3 et 4 étages, et pyramides à trous qui demandent des soustractions. Avec corrigé.' },
    es: { title: 'Pirámides de números para imprimir — pirámides de sumas | Kids Learning Hub', desc: 'Pirámides de números gratis: cada ladrillo es la suma de los dos de abajo. Pirámides de 3 y 4 pisos y pirámides con ladrillos que faltan que piden restas. Con soluciones.' },
    ar: { title: 'أهرامات الأعداد للطباعة — أهرامات الجمع | Kids Learning Hub', desc: 'أهرامات أعداد مجانية: كل لبنة مجموع اللبنتين تحتها. أهرامات من 3 و4 طوابق، وأهرامات بلبنات ناقصة تحتاج إلى الطرح. مع الحلول.' },
  }, emoji: '🔺', ages: '6–10',
  lede: {
    en: 'Number pyramids turn a page of additions into a puzzle with a goal: reach the top. Each brick is the sum of the two bricks under it, so children add again and again without the boredom of a plain list. The last level hides bricks anywhere in the pyramid, and that changes everything: to find a lower brick, children must subtract — a natural way to see that addition and subtraction undo each other. Every pyramid with missing bricks has been checked to have exactly one solution.',
    fr: 'Les pyramides de nombres transforment une page d’additions en énigme avec un but : atteindre le sommet. Chaque brique est la somme des deux briques du dessous, l’enfant additionne encore et encore sans l’ennui d’une simple liste. Le dernier niveau cache des briques n’importe où, et cela change tout : pour retrouver une brique du bas, il faut soustraire — une façon naturelle de voir que l’addition et la soustraction se défont l’une l’autre. Chaque pyramide à trous a été vérifiée pour n’avoir qu’une seule solution.',
    es: 'Las pirámides de números convierten una página de sumas en un acertijo con una meta: llegar a la cima. Cada ladrillo es la suma de los dos de abajo, así que el niño suma una y otra vez sin el aburrimiento de una lista. El último nivel esconde ladrillos en cualquier lugar, y eso lo cambia todo: para encontrar uno de abajo hay que restar, una forma natural de ver que la suma y la resta se deshacen. Cada pirámide con huecos se ha comprobado para que tenga una única solución.',
    ar: 'تحوّل أهرامات الأعداد صفحة من عمليات الجمع إلى لغز له هدف: الوصول إلى القمّة. كل لبنة مجموع اللبنتين تحتها، فيجمع الطفل مرّة بعد مرّة دون ملل القائمة العادية. وفي المستوى الأخير تختفي لبنات في أيّ مكان، وهذا يغيّر كل شيء: لإيجاد لبنة في الأسفل يجب الطرح — طريقة طبيعية لفهم أن الجمع والطرح عمليتان متعاكستان. وكل هرم بلبنات ناقصة تمّ التحقّق من أن له حلًّا واحدًا فقط.',
  },
  how: {
    en: ['Show one brick and its two “feet”: top = left foot + right foot.', 'Work from the bottom up, row by row.', 'For missing bricks, look for a group of three where two are known.', 'Check the top: it should match when you add up again.'],
    fr: ['Montrez une brique et ses deux « pieds » : haut = pied gauche + pied droit.', 'Travaillez de bas en haut, étage par étage.', 'Pour les briques manquantes, cherchez un trio dont deux nombres sont connus.', 'Vérifiez le sommet en refaisant les additions.'],
    es: ['Enseña un ladrillo y sus dos «pies»: arriba = pie izquierdo + pie derecho.', 'Trabaja de abajo arriba, piso a piso.', 'Para los ladrillos que faltan, busca un trío en el que se conozcan dos.', 'Comprueba la cima volviendo a sumar.'],
    ar: ['وضّح لبنة وقدميها: الأعلى = القدم اليسرى + القدم اليمنى.', 'اشتغل من الأسفل إلى الأعلى، طابقًا طابقًا.', 'للّبنات الناقصة ابحث عن ثلاثية يُعرف فيها عددان.', 'تحقّق من القمّة بإعادة الجمع.'],
  },
  faq: {
    en: [['How big do the numbers get?', 'With 3 rows the top stays under about 40; with 4 rows it can reach about 120.'], ['Can a pyramid with missing bricks have two answers?', 'No. Each one is checked by the generator so that it has exactly one solution.'], ['From what age?', '3 rows from about 6, 4 rows from 7, missing bricks from 8.']],
    fr: [['Jusqu’où vont les nombres ?', 'Avec 3 étages, le sommet reste sous 40 environ ; avec 4 étages, il peut atteindre 120 environ.'], ['Une pyramide à trous peut-elle avoir deux réponses ?', 'Non. Le générateur vérifie que chacune a une seule solution.'], ['À partir de quel âge ?', '3 étages vers 6 ans, 4 étages vers 7 ans, briques manquantes vers 8 ans.']],
    es: [['¿Hasta dónde llegan los números?', 'Con 3 pisos la cima queda por debajo de unos 40; con 4 pisos puede llegar a unos 120.'], ['¿Puede una pirámide con huecos tener dos respuestas?', 'No. El generador comprueba que cada una tenga una sola solución.'], ['¿Desde qué edad?', '3 pisos hacia los 6 años, 4 pisos a los 7 y ladrillos que faltan a los 8.']],
    ar: [['إلى أيّ حدّ تكبر الأعداد؟', 'مع 3 طوابق تبقى القمّة تحت 40 تقريبًا، ومع 4 طوابق قد تصل إلى 120 تقريبًا.'], ['هل يمكن أن يكون لهرم ناقص حلّان؟', 'لا. يتحقّق المولّد من أن لكل هرم حلًّا واحدًا فقط.'], ['من أي عمر؟', '3 طوابق من نحو 6 سنوات، و4 طوابق في 7 سنوات، واللبنات الناقصة في 8 سنوات.']],
  },
},

{
  slug: 'column-multiplication',
  meta: {
    en: { title: 'Column Multiplication Worksheets — 2 and 3 Digits | Kids Learning Hub', desc: 'Free printable long multiplication worksheets: 2-digit × 1-digit, 3-digit × 1-digit and 2-digit × 2-digit, set out in columns on squared boxes with room for carrying. A new A4 sheet every click, with answers. Grades 3–5.' },
    fr: { title: 'Fiches de multiplications posées — 2 et 3 chiffres | Kids Learning Hub', desc: 'Fiches gratuites de multiplications posées : 2 chiffres × 1 chiffre, 3 chiffres × 1 chiffre et 2 chiffres × 2 chiffres, sur des carreaux avec la place des retenues. Avec corrigé. Du CE2 au CM2.' },
    es: { title: 'Fichas de multiplicaciones en columna — 2 y 3 cifras | Kids Learning Hub', desc: 'Fichas gratis de multiplicaciones en columna: 2 cifras × 1, 3 cifras × 1 y 2 cifras × 2, en cuadritos con espacio para las llevadas. Con soluciones. De 3.º a 5.º de primaria.' },
    ar: { title: 'أوراق الضرب العمودي — رقمان وثلاثة أرقام | Kids Learning Hub', desc: 'أوراق مجانية للضرب العمودي: رقمان × رقم، وثلاثة أرقام × رقم، ورقمان × رقمين، في مربّعات مع مكان للاحتفاظ. مع الحلول. من السنة الثالثة إلى الخامسة.' },
  }, emoji: '✖️', ages: '8–11',
  lede: {
    en: 'Once the times tables are known, the written method lets children multiply any numbers. The difficulty is rarely the tables themselves: it is keeping digits in the right column and remembering what to carry. That is why every problem here is set out on squares, with a small row above for carried digits. The levels go from 2-digit × 1-digit to 3-digit × 1-digit, and then to 2-digit × 2-digit, with two lines for the partial products before the final addition.',
    fr: 'Une fois les tables connues, la technique opératoire permet de multiplier n’importe quels nombres. La difficulté vient rarement des tables : c’est de garder chaque chiffre dans sa colonne et de penser aux retenues. C’est pourquoi chaque opération est posée sur des carreaux, avec une petite ligne au-dessus pour les retenues. Les niveaux vont de 2 chiffres × 1 chiffre à 3 chiffres × 1 chiffre, puis à 2 chiffres × 2 chiffres, avec deux lignes pour les produits partiels avant l’addition finale.',
    es: 'Cuando ya se saben las tablas, el método escrito permite multiplicar cualquier número. La dificultad rara vez está en las tablas: está en mantener cada cifra en su columna y en acordarse de las llevadas. Por eso cada operación va en cuadritos, con una fila pequeña arriba para las llevadas. Los niveles van de 2 cifras × 1 a 3 cifras × 1 y luego a 2 cifras × 2, con dos filas para los productos parciales antes de la suma final.',
    ar: 'بعد حفظ جداول الضرب تتيح الطريقة المكتوبة ضرب أيّ أعداد. والصعوبة نادرًا ما تكون في الجداول نفسها: إنها في إبقاء كل رقم في منزلته وتذكّر الاحتفاظ. لذلك وُضعت كل عملية على مربّعات مع سطر صغير في الأعلى للاحتفاظ. وتتدرّج المستويات من رقمين × رقم إلى ثلاثة أرقام × رقم، ثم إلى رقمين × رقمين مع سطرين للنواتج الجزئية قبل الجمع النهائي.',
  },
  how: {
    en: ['Always start with the ones column, on the right.', 'Write the carried digit small in the top row, above the next column.', 'In 2-digit × 2-digit, remember the 0 at the start of the second line (you are multiplying by tens).', 'Estimate first: 47 × 26 is about 50 × 25 = 1250, so 1222 is believable.'],
    fr: ['Commencez toujours par la colonne des unités, à droite.', 'Écrivez la retenue en petit sur la ligne du haut, au-dessus de la colonne suivante.', 'Pour 2 chiffres × 2 chiffres, n’oubliez pas le 0 au début de la deuxième ligne (on multiplie par des dizaines).', 'Estimez d’abord : 47 × 26, c’est environ 50 × 25 = 1250, donc 1222 est plausible.'],
    es: ['Empieza siempre por la columna de las unidades, a la derecha.', 'Escribe la llevada en pequeño en la fila de arriba, sobre la columna siguiente.', 'En 2 cifras × 2, no olvides el 0 al principio de la segunda fila (multiplicas por decenas).', 'Estima antes: 47 × 26 es más o menos 50 × 25 = 1250, así que 1222 es creíble.'],
    ar: ['ابدأ دائمًا بمنزلة الآحاد على اليمين.', 'اكتب العدد المحتفظ به صغيرًا في السطر العلوي فوق المنزلة التالية.', 'في رقمين × رقمين لا تنسَ الصفر في بداية السطر الثاني (لأنك تضرب في العشرات).', 'قدّر أولًا: 47 × 26 تقريبًا 50 × 25 = 1250، فالجواب 1222 معقول.'],
  },
  faq: {
    en: [['Which method is this?', 'The standard column (long multiplication) method used in most schools in the US, UK, France, Spain and the Arab world.'], ['Do the numbers always need carrying?', 'Not always: the numbers are random, so some problems have no carrying and others carry several times.'], ['Is there an answer key?', 'Yes, every product is listed on the answer page.']],
    fr: [['Quelle technique est utilisée ?', 'La multiplication posée en colonnes, enseignée dans la plupart des écoles en France, en Espagne, au Royaume-Uni, aux États-Unis et dans le monde arabe.'], ['Y a-t-il toujours des retenues ?', 'Pas toujours : les nombres sont tirés au hasard, certaines opérations n’ont pas de retenue, d’autres en ont plusieurs.'], ['Y a-t-il un corrigé ?', 'Oui, tous les produits sont sur la page de corrigé.']],
    es: [['¿Qué método se usa?', 'La multiplicación en columna que se enseña en la mayoría de escuelas de España, Francia, Reino Unido, EE. UU. y el mundo árabe.'], ['¿Siempre hay llevadas?', 'No siempre: los números son aleatorios, algunas operaciones no llevan y otras llevan varias veces.'], ['¿Hay soluciones?', 'Sí, todos los productos aparecen en la página de soluciones.']],
    ar: [['ما الطريقة المستعملة؟', 'الضرب العمودي المعتمد في أغلب المدارس في البلدان العربية وفرنسا وإسبانيا وبريطانيا وأمريكا.'], ['هل يوجد احتفاظ دائمًا؟', 'ليس دائمًا: الأعداد عشوائية، فبعض العمليات بلا احتفاظ وبعضها باحتفاظ متعدّد.'], ['هل توجد ورقة حلول؟', 'نعم، كل النواتج في صفحة الحلول.']],
  },
},

{
  slug: 'fact-families',
  meta: {
    en: { title: 'Fact Family Worksheets — Number Triangles + − × ÷ | Kids Learning Hub', desc: 'Free printable fact family worksheets: three numbers in a triangle, write the four related facts. Addition and subtraction within 10 or 20, or multiplication and division. A new A4 sheet every click, with answers. Grades 1–3.' },
    fr: { title: 'Fiches familles de calculs — triangles de nombres + − × ÷ | Kids Learning Hub', desc: 'Fiches gratuites de familles de calculs : trois nombres dans un triangle, écris les quatre calculs associés. Additions et soustractions jusqu’à 10 ou 20, ou multiplications et divisions. Avec corrigé.' },
    es: { title: 'Fichas de familias de operaciones — triángulos + − × ÷ | Kids Learning Hub', desc: 'Fichas gratis de familias de operaciones: tres números en un triángulo, escribe las cuatro operaciones relacionadas. Sumas y restas hasta 10 o 20, o multiplicaciones y divisiones. Con soluciones.' },
    ar: { title: 'أوراق عائلات العمليات — مثلّثات الأعداد + − × ÷ | Kids Learning Hub', desc: 'أوراق مجانية لعائلات العمليات: ثلاثة أعداد في مثلّث، اكتب العمليات الأربع المرتبطة بها. جمع وطرح حتى 10 أو 20، أو ضرب وقسمة. مع الحلول.' },
  }, emoji: '🔺', ages: '6–9',
  lede: {
    en: 'A fact family is a group of three numbers that are linked by four facts. 3, 5 and 8 give 3 + 5 = 8, 5 + 3 = 8, 8 − 3 = 5 and 8 − 5 = 3. Seeing them together shows children that subtraction is not a new set of facts to learn but addition backwards, which halves the work. The triangle puts the whole at the top and the two parts below. The same idea works for multiplication and division: 4, 6 and 24 give two products and two quotients.',
    fr: 'Une famille de calculs est un groupe de trois nombres reliés par quatre calculs. 3, 5 et 8 donnent 3 + 5 = 8, 5 + 3 = 8, 8 − 3 = 5 et 8 − 5 = 3. Les voir ensemble montre à l’enfant que la soustraction n’est pas une nouvelle liste à apprendre mais l’addition à l’envers, ce qui divise le travail par deux. Le triangle met le tout en haut et les deux parties en bas. La même idée vaut pour la multiplication et la division : 4, 6 et 24 donnent deux produits et deux quotients.',
    es: 'Una familia de operaciones es un grupo de tres números unidos por cuatro operaciones. 3, 5 y 8 dan 3 + 5 = 8, 5 + 3 = 8, 8 − 3 = 5 y 8 − 5 = 3. Verlas juntas enseña que la resta no es una lista nueva que aprender sino la suma al revés, lo que reduce el trabajo a la mitad. El triángulo pone el total arriba y las dos partes abajo. La misma idea vale para multiplicar y dividir: 4, 6 y 24 dan dos productos y dos cocientes.',
    ar: 'عائلة العمليات ثلاثة أعداد تربطها أربع عمليات. فـ3 و5 و8 تعطي 3 + 5 = 8 و5 + 3 = 8 و8 − 3 = 5 و8 − 5 = 3. ورؤيتها معًا تُظهر للطفل أن الطرح ليس قائمة جديدة يحفظها، بل هو الجمع معكوسًا، فيقلّ الجهد إلى النصف. يضع المثلّث الكلّ في الأعلى والجزأين في الأسفل. والفكرة نفسها تصلح للضرب والقسمة: 4 و6 و24 تعطي جُداءين وخارجَي قسمة.',
  },
  how: {
    en: ['Cover the top number with a finger: “what do the two bottom numbers make?”.', 'Cover one bottom number: “top minus the other one gives…”.', 'Write the two additions first, then the two subtractions.', 'Talk about it: when both parts are equal (5 + 5), how many different facts are there?'],
    fr: ['Cachez le nombre du haut : « que font les deux nombres du bas ensemble ? ».', 'Cachez un nombre du bas : « le haut moins l’autre, ça fait… ».', 'Écrivez d’abord les deux additions, puis les deux soustractions.', 'Discutez : quand les deux parties sont égales (5 + 5), combien de calculs différents trouve-t-on ?'],
    es: ['Tapa el número de arriba: «¿cuánto hacen los dos de abajo juntos?».', 'Tapa uno de abajo: «el de arriba menos el otro da…».', 'Escribe primero las dos sumas y después las dos restas.', 'Comentad: cuando las dos partes son iguales (5 + 5), ¿cuántas operaciones distintas hay?'],
    ar: ['غطِّ العدد العلوي: «كم يساوي العددان السفليان معًا؟».', 'غطِّ أحد العددين السفليين: «العلوي ناقص الآخر يساوي…».', 'اكتب عمليتَي الجمع أولًا، ثم عمليتَي الطرح.', 'ناقشا: عندما يتساوى الجزآن (5 + 5)، كم عملية مختلفة نجد؟'],
  },
  faq: {
    en: [['What if both parts are the same number?', 'Then the family has only two different facts, for example 5 + 5 = 10 and 10 − 5 = 5. It is a good discussion point.'], ['Which level for which age?', 'Within 10 from about 6, within 20 from 7, and × ÷ once the times tables are being learnt (8–9).'], ['Is there an answer key?', 'Yes, the four facts for every triangle.']],
    fr: [['Et si les deux parties sont égales ?', 'La famille n’a alors que deux calculs différents, par exemple 5 + 5 = 10 et 10 − 5 = 5. C’est un bon sujet de discussion.'], ['Quel niveau pour quel âge ?', 'Jusqu’à 10 vers 6 ans, jusqu’à 20 vers 7 ans, et × ÷ quand on apprend les tables (8–9 ans).'], ['Y a-t-il un corrigé ?', 'Oui, les quatre calculs de chaque triangle.']],
    es: [['¿Y si las dos partes son iguales?', 'Entonces la familia solo tiene dos operaciones distintas, por ejemplo 5 + 5 = 10 y 10 − 5 = 5. Es un buen tema de conversación.'], ['¿Qué nivel para qué edad?', 'Hasta 10 hacia los 6 años, hasta 20 a los 7 y × ÷ cuando se aprenden las tablas (8–9).'], ['¿Hay soluciones?', 'Sí, las cuatro operaciones de cada triángulo.']],
    ar: [['ماذا لو تساوى الجزآن؟', 'عندها تكون للعائلة عمليتان مختلفتان فقط، مثل 5 + 5 = 10 و10 − 5 = 5. وهذه نقطة جيدة للنقاش.'], ['أيّ مستوى لأيّ عمر؟', 'حتى 10 من نحو 6 سنوات، وحتى 20 في 7 سنوات، والضرب والقسمة عند تعلّم الجداول (8–9 سنوات).'], ['هل توجد ورقة حلول؟', 'نعم، العمليات الأربع لكل مثلّث.']],
  },
},

{
  slug: 'odd-one-out',
  meta: {
    en: { title: 'Odd One Out Worksheets for Kids — Which One Does Not Belong? | Kids Learning Hub', desc: 'Free printable odd one out worksheets: circle the picture that does not belong, then say why. Easy, tricky and hard rows from fruit, vegetables, animals, vehicles, clothes and more. A new A4 sheet every click, with answers. Ages 4–8.' },
    fr: { title: 'Fiches trouve l’intrus pour enfants — gratuites | Kids Learning Hub', desc: 'Fiches gratuites « trouve l’intrus » : entoure l’image qui n’appartient pas au groupe, puis explique pourquoi. Niveaux facile, astucieux et difficile : fruits, légumes, animaux, véhicules, vêtements… Avec corrigé.' },
    es: { title: 'Fichas de ¿cuál sobra? para niños — gratis | Kids Learning Hub', desc: 'Fichas gratis de «¿cuál sobra?»: rodea el dibujo que no pertenece al grupo y explica por qué. Niveles fácil, con truco y difícil: frutas, verduras, animales, vehículos, ropa… Con soluciones.' },
    ar: { title: 'أوراق «جِد الدخيل» للأطفال — مجانية | Kids Learning Hub', desc: 'أوراق مجانية «جِد الدخيل»: أحِط الصورة التي لا تنتمي إلى المجموعة واشرح السبب. مستويات سهلة وذكية وصعبة: فواكه وخضر وحيوانات ووسائل نقل وملابس… مع الحلول.' },
  }, emoji: '🔍', ages: '4–8',
  lede: {
    en: 'Finding the odd one out is a classification exercise: the child has to notice what three pictures share and which one breaks the rule. That builds the vocabulary of categories — fruit, vegetables, farm and wild animals, vehicles, clothes, instruments — and the habit of explaining a choice. The easy level mixes very different groups. The tricky and hard levels use groups that look alike, such as fruit and vegetables, or cars and aeroplanes, so children really have to think.',
    fr: 'Trouver l’intrus est un exercice de classement : l’enfant doit remarquer ce que trois images ont en commun et laquelle ne suit pas la règle. Cela construit le vocabulaire des catégories — fruits, légumes, animaux de la ferme et sauvages, véhicules, vêtements, instruments — et l’habitude de justifier un choix. Le niveau facile mélange des groupes très différents. Les niveaux astucieux et difficile utilisent des groupes proches, comme les fruits et les légumes ou les voitures et les avions : il faut vraiment réfléchir.',
    es: 'Encontrar el que sobra es un ejercicio de clasificación: el niño tiene que ver qué comparten tres dibujos y cuál rompe la regla. Así se construye el vocabulario de categorías —frutas, verduras, animales de granja y salvajes, vehículos, ropa, instrumentos— y la costumbre de explicar una elección. El nivel fácil mezcla grupos muy distintos. Los niveles con truco y difícil usan grupos parecidos, como frutas y verduras o coches y aviones, así que hay que pensar de verdad.',
    ar: 'إيجاد الدخيل تمرين تصنيف: على الطفل أن يلاحظ ما تشترك فيه ثلاث صور، وأيّها يخالف القاعدة. وهذا يبني مفردات الفئات — فواكه وخضر وحيوانات المزرعة والبرّية ووسائل النقل والملابس والآلات الموسيقية — ويعوّده على تعليل اختياره. المستوى السهل يمزج مجموعات مختلفة جدًا، أما المستويان الذكي والصعب فيستعملان مجموعات متقاربة، مثل الفواكه والخضر أو السيارات والطائرات، فيحتاج الطفل إلى تفكير حقيقي.',
  },
  how: {
    en: ['Ask your child to name every picture before choosing.', 'Always ask “why?”: the explanation matters more than the circle.', 'Accept a different answer if the reason makes sense — that is good thinking.', 'Make your own rows at home with real objects from the kitchen or toy box.'],
    fr: ['Demandez à l’enfant de nommer chaque image avant de choisir.', 'Demandez toujours « pourquoi ? » : l’explication compte plus que le rond.', 'Acceptez une autre réponse si la raison tient debout : c’est une belle réflexion.', 'Créez vos propres séries avec de vrais objets de la cuisine ou du coffre à jouets.'],
    es: ['Pide que nombre cada dibujo antes de elegir.', 'Pregunta siempre «¿por qué?»: la explicación importa más que el círculo.', 'Acepta otra respuesta si la razón tiene sentido: eso es pensar bien.', 'Haced vuestras propias filas con objetos reales de la cocina o del baúl de juguetes.'],
    ar: ['اطلب من الطفل أن يسمّي كل صورة قبل الاختيار.', 'اسأله دائمًا «لماذا؟»: التعليل أهمّ من الدائرة.', 'اقبل جوابًا آخر إن كان تعليله منطقيًا — فهذا تفكير جيّد.', 'اصنعا صفوفًا خاصّة بكما بأشياء حقيقية من المطبخ أو صندوق الألعاب.'],
  },
  faq: {
    en: [['Can there be more than one right answer?', 'The answer key gives the intended picture, but if your child finds another rule and can explain it, that is excellent reasoning.'], ['What makes the hard level hard?', 'Five pictures instead of four, and the groups are close — for example a vegetable hidden among fruit.'], ['Do the sheets need reading?', 'No, only pictures. The instructions can be read aloud by an adult.']],
    fr: [['Peut-il y avoir plusieurs bonnes réponses ?', 'Le corrigé donne l’intrus prévu, mais si l’enfant trouve une autre règle et l’explique, c’est un excellent raisonnement.'], ['Qu’est-ce qui rend le niveau difficile ?', 'Cinq images au lieu de quatre, et des groupes proches — par exemple un légume caché parmi des fruits.'], ['Faut-il savoir lire ?', 'Non, il n’y a que des images. Un adulte peut lire la consigne.']],
    es: [['¿Puede haber más de una respuesta correcta?', 'Las soluciones dan el dibujo previsto, pero si el niño encuentra otra regla y la explica, es un razonamiento excelente.'], ['¿Qué hace difícil el nivel difícil?', 'Cinco dibujos en lugar de cuatro y grupos parecidos, por ejemplo una verdura escondida entre frutas.'], ['¿Hace falta saber leer?', 'No, solo hay dibujos. Un adulto puede leer la consigna.']],
    ar: [['هل يمكن أن يكون هناك أكثر من جواب صحيح؟', 'ورقة الحلول تعطي الصورة المقصودة، لكن إن وجد الطفل قاعدة أخرى وعلّلها فذلك تفكير ممتاز.'], ['ما الذي يجعل المستوى الصعب صعبًا؟', 'خمس صور بدل أربع، ومجموعات متقاربة — مثل خضرة مخبّأة بين الفواكه.'], ['هل يحتاج الطفل إلى القراءة؟', 'لا، الأوراق صور فقط، ويمكن لشخص بالغ أن يقرأ التعليمة.']],
  },
},

{
  slug: 'compare-fractions',
  meta: {
    en: { title: 'Comparing Fractions Worksheets with Fraction Bars | Kids Learning Hub', desc: 'Free printable comparing fractions worksheets: write <, > or = between two fractions, helped by fraction bars. Same denominator, same numerator, or different denominators and equivalent fractions. A new A4 sheet every click, with answers. Grades 3–5.' },
    fr: { title: 'Fiches comparer des fractions avec des bandes | Kids Learning Hub', desc: 'Fiches gratuites pour comparer des fractions : écris <, > ou = entre deux fractions, avec des bandes pour aider. Même dénominateur, même numérateur, ou dénominateurs différents et fractions égales. Avec corrigé.' },
    es: { title: 'Fichas para comparar fracciones con barras | Kids Learning Hub', desc: 'Fichas gratis para comparar fracciones: escribe <, > o = entre dos fracciones, con barras de ayuda. Mismo denominador, mismo numerador o denominadores distintos y fracciones equivalentes. Con soluciones.' },
    ar: { title: 'أوراق مقارنة الكسور بالأشرطة | Kids Learning Hub', desc: 'أوراق مجانية لمقارنة الكسور: اكتب < أو > أو = بين كسرين بمساعدة الأشرطة. المقام نفسه، أو البسط نفسه، أو مقامات مختلفة وكسور متكافئة. مع الحلول.' },
  }, emoji: '➗', ages: '8–11',
  lede: {
    en: 'Comparing fractions surprises children: 1/8 is smaller than 1/3, even though 8 is bigger than 3. Fraction bars make the reason visible — the more pieces you cut, the smaller each piece. Each problem shows both fractions as bars of the same length, so children can check their reasoning with their eyes. The levels follow the order teachers use: same denominator, then same numerator, then different denominators, including equivalent fractions such as 2/3 and 4/6.',
    fr: 'Comparer des fractions surprend les enfants : 1/8 est plus petit que 1/3, alors que 8 est plus grand que 3. Les bandes rendent la raison visible : plus on coupe de parts, plus chaque part est petite. Chaque exercice montre les deux fractions sous forme de bandes de même longueur, pour vérifier son raisonnement à l’œil. Les niveaux suivent l’ordre des enseignants : même dénominateur, puis même numérateur, puis dénominateurs différents, avec des fractions égales comme 2/3 et 4/6.',
    es: 'Comparar fracciones sorprende a los niños: 1/8 es menor que 1/3, aunque 8 es mayor que 3. Las barras hacen visible el motivo: cuantas más partes se cortan, más pequeña es cada una. Cada ejercicio muestra las dos fracciones como barras de la misma longitud, para comprobar el razonamiento con los ojos. Los niveles siguen el orden de los maestros: mismo denominador, después mismo numerador y luego denominadores distintos, con fracciones equivalentes como 2/3 y 4/6.',
    ar: 'مقارنة الكسور تفاجئ الأطفال: 1/8 أصغر من 1/3 مع أن 8 أكبر من 3. والأشرطة تجعل السبب مرئيًا: كلما قسمنا إلى أجزاء أكثر صغر كل جزء. ويُعرض الكسران في كل تمرين بشريطين بالطول نفسه، فيتحقّق الطفل من تفكيره بعينيه. وتتبع المستويات ترتيب المعلّمين: المقام نفسه، ثم البسط نفسه، ثم مقامات مختلفة مع كسور متكافئة مثل 2/3 و4/6.',
  },
  how: {
    en: ['Same bottom number: compare the tops — more pieces of the same size is more.', 'Same top number: the bigger bottom number means smaller pieces, so a smaller fraction.', 'Different bottoms: look at the shaded length of each bar.', 'Remind your child that the open side of < and > faces the bigger number.'],
    fr: ['Même dénominateur : comparez les numérateurs — plus de parts de même taille, c’est plus.', 'Même numérateur : un dénominateur plus grand fait des parts plus petites, donc une fraction plus petite.', 'Dénominateurs différents : regardez la longueur coloriée de chaque bande.', 'Rappelez que le côté ouvert de < et > est tourné vers le plus grand nombre.'],
    es: ['Mismo denominador: compara los numeradores; más partes del mismo tamaño es más.', 'Mismo numerador: un denominador mayor da partes más pequeñas, así que la fracción es menor.', 'Denominadores distintos: mira la longitud coloreada de cada barra.', 'Recuerda que el lado abierto de < y > mira al número mayor.'],
    ar: ['المقام نفسه: قارن البسطين — أجزاء أكثر بالحجم نفسه تعني كسرًا أكبر.', 'البسط نفسه: المقام الأكبر يعني أجزاء أصغر، فالكسر أصغر.', 'مقامات مختلفة: انظر إلى الطول الملوّن في كل شريط.', 'ذكّر الطفل بأن الجهة المفتوحة من < و> تتّجه نحو العدد الأكبر.'],
  },
  faq: {
    en: [['Why do some problems have the answer “=”?', 'At the last level some pairs are equivalent fractions, like 2/3 and 4/6: the bars are shaded to exactly the same length.'], ['Are the bars accurate?', 'Yes, both bars have the same length and are cut into equal parts, so the shaded lengths can be compared directly.'], ['Is there an answer key?', 'Yes, each comparison is written out with the right sign.']],
    fr: [['Pourquoi certaines réponses sont-elles « = » ?', 'Au dernier niveau, certaines paires sont des fractions égales, comme 2/3 et 4/6 : les bandes sont coloriées exactement sur la même longueur.'], ['Les bandes sont-elles exactes ?', 'Oui, les deux bandes ont la même longueur et sont partagées en parts égales : on peut comparer directement les longueurs coloriées.'], ['Y a-t-il un corrigé ?', 'Oui, chaque comparaison est écrite avec le bon signe.']],
    es: [['¿Por qué algunas respuestas son «=»?', 'En el último nivel algunas parejas son fracciones equivalentes, como 2/3 y 4/6: las barras están coloreadas exactamente hasta la misma longitud.'], ['¿Las barras son exactas?', 'Sí, las dos barras miden lo mismo y están divididas en partes iguales, así que se comparan directamente.'], ['¿Hay soluciones?', 'Sí, cada comparación aparece con el signo correcto.']],
    ar: [['لماذا يكون الجواب «=» أحيانًا؟', 'في المستوى الأخير بعض الأزواج كسور متكافئة مثل 2/3 و4/6: يُلوَّن الشريطان إلى الطول نفسه تمامًا.'], ['هل الأشرطة دقيقة؟', 'نعم، للشريطين الطول نفسه وكل منهما مقسوم إلى أجزاء متساوية، فتمكن مقارنة الأطوال الملوّنة مباشرة.'], ['هل توجد ورقة حلول؟', 'نعم، كل مقارنة مكتوبة بالرمز الصحيح.']],
  },
},

];
