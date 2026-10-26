/* Kids Learning Hub — guide for the ABC colouring book (October 2026):
   every letter with a word, an outline picture and a sentence, in the
   alphabet of the page language. Merged into tools/worksheets-data.js. */
'use strict';

module.exports = [{
  slug: 'abc-coloring-book',
  meta: {
    en: { title: 'ABC Coloring Pages — A Letter, a Word, a Picture and a Sentence | Kids Learning Hub', desc: 'Free printable alphabet coloring pages: for every letter, a big outlined letter, a word, a picture to color and a short sentence to read and copy. English, French, Spanish (with Ñ) and Arabic (28 letters).' },
    fr: { title: 'Abécédaire à colorier — lettre, mot, dessin et phrase | Kids Learning Hub', desc: 'Abécédaire gratuit à imprimer : pour chaque lettre, une grande lettre à colorier, un mot, un dessin et une petite phrase à lire et recopier. En français, anglais, espagnol et arabe.' },
    es: { title: 'Abecedario para colorear — letra, palabra, dibujo y frase | Kids Learning Hub', desc: 'Abecedario gratis para imprimir: para cada letra, una letra grande para colorear, una palabra, un dibujo y una frase corta para leer y copiar. En español (con Ñ), inglés, francés y árabe.' },
    ar: { title: 'تلوين الحروف العربية — حرف وكلمة ورسم وجملة | Kids Learning Hub', desc: 'أوراق مجانية لتلوين الحروف: لكل حرف حرف كبير للتلوين، وكلمة، ورسم، وجملة قصيرة للقراءة والنسخ. الحروف العربية الـ28، ومعها الإنجليزية والفرنسية والإسبانية.' },
  }, emoji: '🔤', ages: '3–7',
  lede: {
    en: 'An alphabet book is how most children first link a letter to a sound and to a word. This page turns it into a colouring book: for every letter there is a big outlined letter in capital and small form, a word that starts with it, a picture to colour and a short, easy sentence to read and copy. The letter is outlined in blue inside the word, so children see where it is. Print one letter per page, or four letters on one page for a quick review — and switch the language to get the French, Spanish (with Ñ) or Arabic alphabet, each with its own words and sentences.',
    fr: 'Un abécédaire, c’est souvent là que l’enfant relie pour la première fois une lettre, un son et un mot. Cette page en fait un cahier de coloriage : pour chaque lettre, une grande lettre en majuscule et en minuscule, un mot qui commence par elle, un dessin à colorier et une petite phrase facile à lire et à recopier. Dans le mot, la lettre est entourée de bleu pour qu’on la repère. Imprimez une lettre par page, ou quatre lettres sur une page pour réviser — et changez de langue pour l’alphabet anglais, espagnol (avec Ñ) ou arabe, chacun avec ses mots et ses phrases.',
    es: 'Un abecedario es donde muchos niños unen por primera vez una letra, un sonido y una palabra. Esta página lo convierte en un cuaderno para colorear: para cada letra, una letra grande en mayúscula y minúscula, una palabra que empieza por ella, un dibujo para colorear y una frase corta y fácil para leer y copiar. Dentro de la palabra, la letra aparece contorneada en azul para encontrarla. Imprime una letra por página o cuatro letras en una para repasar, y cambia el idioma para el alfabeto inglés, francés o árabe, cada uno con sus palabras y frases.',
    ar: 'دفتر الحروف هو المكان الذي يربط فيه أغلب الأطفال لأول مرة بين الحرف وصوته وكلمة تبدأ به. وهذه الصفحة تجعله دفتر تلوين: لكل حرف من الحروف الثمانية والعشرين حرف كبير للتلوين، وكلمة، ورسم يُلوَّن، وجملة قصيرة سهلة للقراءة والنسخ. اطبع حرفًا في كل صفحة، أو أربعة حروف في صفحة واحدة للمراجعة، وغيّر اللغة لتحصل على الحروف الإنجليزية أو الفرنسية أو الإسبانية بكلماتها وجملها.',
  },
  how: {
    en: ['Say the letter’s sound, not only its name, while your child colours it.', 'Find the blue letter inside the word together.', 'Read the sentence aloud, pointing to each word, then copy it on the lines.', 'Print one letter a week and staple the pages into a home-made alphabet book.'],
    fr: ['Dites le son de la lettre, pas seulement son nom, pendant que l’enfant la colorie.', 'Cherchez ensemble la lettre bleue dans le mot.', 'Lisez la phrase en montrant chaque mot, puis recopiez-la sur les lignes.', 'Imprimez une lettre par semaine et agrafez les pages pour faire votre propre abécédaire.'],
    es: ['Di el sonido de la letra, no solo su nombre, mientras la colorea.', 'Buscad juntos la letra azul dentro de la palabra.', 'Leed la frase señalando cada palabra y luego copiadla en las líneas.', 'Imprime una letra por semana y grapa las hojas para hacer vuestro propio abecedario.'],
    ar: ['انطق صوت الحرف، لا اسمه فقط، أثناء تلوينه.', 'اقرآ الكلمة معًا وابحثا عن الحرف فيها.', 'اقرآ الجملة مع الإشارة إلى كل كلمة، ثم انسخاها على الأسطر.', 'اطبع حرفًا كل أسبوع واجمع الأوراق لتصنع دفتر حروف خاصًّا بطفلك.'],
  },
  faq: {
    en: [['How do I choose the letter?', 'Use the letter menu or the ◀ ▶ buttons above the sheet.'], ['Why do some words not start with the letter?', 'Very few children’s words start with X, so that page uses a word that contains it: fox. The letter is outlined in blue inside the word.'], ['Does it print in black and white?', 'Yes — that is the idea. The letter, the word and the picture are outlines ready to colour.']],
    fr: [['Comment choisir la lettre ?', 'Avec le menu des lettres ou les boutons ◀ ▶ au-dessus de la fiche.'], ['Pourquoi certains mots ne commencent-ils pas par la lettre ?', 'Très peu de mots d’enfants commencent par X : cette page utilise un mot qui contient la lettre, taxi. La lettre est entourée de bleu dans le mot.'], ['Ça s’imprime en noir et blanc ?', 'Oui, c’est voulu : la lettre, le mot et le dessin sont des contours prêts à colorier.']],
    es: [['¿Cómo elijo la letra?', 'Con el menú de letras o los botones ◀ ▶ encima de la ficha.'], ['¿Por qué algunas palabras no empiezan por la letra?', 'Muy pocas palabras infantiles empiezan por Ñ, W o X, así que se usa una palabra que la contiene: piña, kiwi y taxi. La letra aparece contorneada en azul.'], ['¿Se imprime en blanco y negro?', 'Sí, esa es la idea: la letra, la palabra y el dibujo son contornos listos para colorear.']],
    ar: [['كيف أختار الحرف؟', 'من قائمة الحروف أو بزرَّي ◀ ▶ فوق الورقة.'], ['هل الحروف كلها موجودة؟', 'نعم، الحروف الثمانية والعشرون من الألف إلى الياء، ولكل حرف كلمة ورسم وجملة.'], ['هل تُطبع بالأبيض والأسود؟', 'نعم، وهذا هو المقصود: الحرف والكلمة والرسم خطوط خارجية جاهزة للتلوين.']],
  },
}];
