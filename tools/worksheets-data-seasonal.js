/* Kids Learning Hub — guide content for seasonal worksheets (added 2026-10).
   Merged into tools/worksheets-data.js.                                     */
'use strict';

module.exports = [

/* ── winter / Christmas maths ──────────────────────────────────────────── */
{
  slug: 'winter-math',
  meta: {
    en: { title: 'Free Christmas & Winter Math Worksheets (Printable A4) | Kids Learning Hub',
          desc: 'Free printable Christmas and winter math worksheets for ages 3–10: counting snowmen, picture sums, sums to 20, winter word problems and times tables. A new sheet every click, with answer key.' },
    fr: { title: 'Fiches de maths de Noël et d’hiver à imprimer (gratuit, A4) | Kids Learning Hub',
          desc: 'Fiches de maths gratuites sur le thème de Noël et de l’hiver, de 3 à 10 ans : compter, additions en images, calculs jusqu’à 20, problèmes et tables. Nouvelle fiche à chaque clic, avec corrigé.' },
    es: { title: 'Fichas de matemáticas de Navidad e invierno para imprimir (gratis, A4) | Kids Learning Hub',
          desc: 'Fichas de matemáticas gratis de Navidad e invierno de 3 a 10 años: contar, sumas con dibujos, cuentas hasta 20, problemas y tablas. Una hoja nueva con cada clic y con soluciones.' },
    ar: { title: 'أوراق عمل رياضيات الشتاء للطباعة للأطفال (مجانية، A4) | Kids Learning Hub',
          desc: 'أوراق رياضيات مجانية بطابع الشتاء من 3 إلى 10 سنوات: العدّ، والجمع بالصور، والحساب حتى 20، ومسائل، وجداول الضرب. ورقة جديدة بكل ضغطة مع ورقة الحلول.' },
  }, emoji: '⛄', ages: '3–10',
  lede: {
    en: 'The weeks before the winter holidays are hard to teach in. Attention drifts to snow, lights and presents, and a plain sheet of sums feels like a punishment. A seasonal theme does not make the maths easier — it makes children willing to start. Each sheet here keeps exactly the same skill a normal worksheet would practise (counting, adding, word problems, tables) and only changes what is being counted: snowmen instead of dots, scarves instead of boxes.',
    fr: 'Les semaines avant les vacances d’hiver sont difficiles en classe : l’attention part vers la neige, les lumières et les cadeaux, et une fiche de calculs ordinaire ressemble à une punition. Un thème de saison ne rend pas les maths plus faciles — il donne envie de commencer. Chaque fiche travaille exactement la même compétence qu’une fiche habituelle (compter, additionner, résoudre un problème, réciter les tables) ; seul ce que l’on compte change : des bonshommes de neige au lieu de points, des écharpes au lieu de cases.',
    es: 'Las semanas antes de las vacaciones de invierno son difíciles en clase: la atención se va a la nieve, las luces y los regalos, y una hoja de cuentas normal parece un castigo. Un tema de temporada no hace las mates más fáciles, pero hace que los niños quieran empezar. Cada ficha practica exactamente la misma destreza que una ficha habitual (contar, sumar, resolver problemas, las tablas); solo cambia lo que se cuenta: muñecos de nieve en vez de puntos, bufandas en vez de casillas.',
    ar: 'الأسابيع التي تسبق عطلة الشتاء صعبة في القسم: ينشغل انتباه الأطفال بالبرد والمطر والعطلة القادمة، وتبدو ورقة الحساب العادية كأنها عقاب. الموضوع الموسمي لا يجعل الرياضيات أسهل، لكنه يجعل الطفل يرغب في البدء. كل ورقة هنا تدرّب المهارة نفسها التي تدرّبها ورقة عادية (العدّ، الجمع، حل المسائل، جداول الضرب)، والذي يتغيّر فقط هو ما نعدّه: رجال ثلج بدل النقاط، وأوشحة بدل المربعات.',
  },
  how: {
    en: ['Choose the sheet by what your child can already do, not by age. A seven-year-old who still counts on fingers will enjoy the picture sums more than the word problems.',
         'On the counting sheet, ask your child to touch each picture once while counting aloud. Touching stops the most common mistake: counting the same snowman twice.',
         'For word problems, have the question read aloud and ask "is the number going to get bigger or smaller?" before any calculation. That one question chooses the operation.',
         'Print the same sheet number for brothers, sisters or a whole class (it is printed in the footer). Everyone works on identical questions and the answer key fits all of them.'],
    fr: ['Choisissez la fiche selon ce que l’enfant sait déjà faire, pas selon son âge. Un enfant de sept ans qui compte encore sur ses doigts préférera les additions en images aux problèmes.',
         'Sur la fiche « compter », demandez à l’enfant de toucher chaque image une seule fois en comptant à voix haute. Toucher évite l’erreur la plus fréquente : compter deux fois le même bonhomme.',
         'Pour les problèmes, faites lire l’énoncé à voix haute puis demandez « le nombre va-t-il devenir plus grand ou plus petit ? » avant tout calcul. Cette seule question choisit l’opération.',
         'Imprimez le même numéro de fiche pour des frères et sœurs ou toute une classe (il figure en bas de la feuille) : tout le monde a les mêmes questions et un seul corrigé suffit.'],
    es: ['Elige la ficha según lo que tu hijo ya sabe hacer, no según su edad. Un niño de siete años que aún cuenta con los dedos disfrutará más las sumas con dibujos que los problemas.',
         'En la ficha de contar, pide que toque cada dibujo una sola vez mientras cuenta en voz alta. Tocar evita el error más frecuente: contar dos veces el mismo muñeco.',
         'En los problemas, que lea el enunciado en voz alta y pregúntale «¿el número va a ser más grande o más pequeño?» antes de calcular. Esa sola pregunta elige la operación.',
         'Imprime el mismo número de ficha para hermanos o para toda la clase (aparece al pie de la hoja): todos tienen las mismas preguntas y sirve una sola hoja de soluciones.'],
    ar: ['اختر نوع الورقة حسب ما يستطيعه طفلك الآن، لا حسب عمره. طفل في السابعة ما زال يعدّ على أصابعه سيستمتع بالجمع بالصور أكثر من المسائل.',
         'في ورقة العدّ، اطلب من الطفل أن يلمس كل صورة مرة واحدة وهو يعدّ بصوت مرتفع. اللمس يمنع أكثر خطأ شيوعًا: عدّ الصورة نفسها مرتين.',
         'في المسائل، اطلب منه أن يقرأ النص بصوت مرتفع، ثم اسأله قبل أي حساب: «هل سيصبح العدد أكبر أم أصغر؟». هذا السؤال وحده يحدّد العملية.',
         'اطبع رقم الورقة نفسه للإخوة أو للقسم كله (يظهر في أسفل الورقة)، فيعمل الجميع على الأسئلة نفسها وتكفي ورقة حلول واحدة.'],
  },
  faq: {
    en: [['Which sheet should a 5-year-old start with?', 'The counting sheet. When counting up to 10 is reliable and your child writes the number without copying it from you, move on to the picture sums.'],
         ['Are these worksheets only for Christmas?', 'No. The pictures are winter ones — snowmen, mittens, hot chocolate — so the sheets work all through December, January and February, whether or not your family celebrates Christmas.'],
         ['How do I make the answer key?', 'Tick "Answer key" before printing. A second page is added with the answers for the same sheet number, so you can check work quickly or let an older child mark their own.']],
    fr: [['Par quelle fiche commencer à 5 ans ?', 'Par la fiche « compter ». Quand l’enfant compte sûrement jusqu’à 10 et écrit le nombre sans le recopier, passez aux additions en images.'],
         ['Ces fiches sont-elles seulement pour Noël ?', 'Non. Les images sont celles de l’hiver — bonshommes de neige, moufles, chocolat chaud — donc les fiches servent tout décembre, janvier et février, que la famille fête Noël ou non.'],
         ['Comment obtenir le corrigé ?', 'Cochez « Corrigé » avant d’imprimer. Une deuxième page s’ajoute avec les réponses de la même fiche : vous corrigez vite, ou un enfant plus grand se corrige seul.']],
    es: [['¿Con qué ficha empezar a los 5 años?', 'Con la de contar. Cuando cuente bien hasta 10 y escriba el número sin copiarlo de ti, pasa a las sumas con dibujos.'],
         ['¿Estas fichas son solo para Navidad?', 'No. Los dibujos son de invierno — muñecos de nieve, manoplas, chocolate caliente — así que sirven todo diciembre, enero y febrero, celebre o no la familia la Navidad.'],
         ['¿Cómo saco las soluciones?', 'Marca «Soluciones» antes de imprimir. Se añade una segunda página con las respuestas de la misma ficha, para corregir rápido o para que un niño mayor se corrija solo.']],
    ar: [['بأي ورقة يبدأ طفل في الخامسة؟', 'بورقة العدّ. عندما يصبح العدّ حتى 10 مضمونًا ويكتب الطفل العدد دون أن ينقله منك، انتقل إلى الجمع بالصور.'],
         ['هل هذه الأوراق خاصة بمناسبة معيّنة؟', 'لا. صورها شتوية — رجل الثلج والقفازات والشوكولاتة الساخنة — فتصلح طوال ديسمبر ويناير وفبراير لكل الأطفال.'],
         ['كيف أحصل على ورقة الحلول؟', 'ضع علامة على «الحلول» قبل الطباعة. تُضاف صفحة ثانية فيها أجوبة الورقة نفسها، فتصحّح بسرعة، أو يصحّح الطفل الأكبر عمله بنفسه.']],
  },
},

];
