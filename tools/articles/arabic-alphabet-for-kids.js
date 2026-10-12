/* Deepened 2026-10 (AdSense content-quality pass). */
const { cta, meta } = require('./_cta.js');
const A = (s) => `<span dir="rtl" lang="ar" style="font-size:1.15em">${s}</span>`;

const FAMILIES = [
  ['ب ت ث', 'b, t, th'], ['ج ح خ', 'j, ḥ, kh'], ['د ذ', 'd, dh'], ['ر ز', 'r, z'],
  ['س ش', 's, sh'], ['ص ض', 'ṣ, ḍ'], ['ط ظ', 'ṭ, ẓ'], ['ع غ', 'ʿ, gh'], ['ف ق', 'f, q'],
];
const famRows = FAMILIES.map(([l, s]) => `<tr><td>${A(l)}</td><td>${s}</td></tr>`).join('\n      ');

module.exports = {
  slug: 'arabic-alphabet-for-kids',
  date: '2026-07-14',
  minutes: 12,

  dataTitle: {
    en: 'Arabic Alphabet for Kids: Teach It Step by Step (Letter Families) | Kids Learning Hub',
    fr: 'L’alphabet arabe pour enfants : l’apprendre pas à pas | Kids Learning Hub',
    es: 'El alfabeto árabe para niños: enseñarlo paso a paso | Kids Learning Hub',
    ar: 'تعليم الحروف العربية للأطفال خطوة بخطوة (عائلات الحروف) | Kids Learning Hub',
  },

  body: {
    en: `
    <span class="tag lang">Languages</span>
    <h1>Arabic Alphabet for Kids: How to Teach It Step by Step</h1>
    ${meta('en', 12)}
    <p class="lede">The Arabic alphabet has 28 letters, is written from right to left, and most letters change shape depending on where they sit in a word. That sounds like a lot for a child, but Arabic has a gift for learners: many letters share the same basic shape and differ only by their dots. Teach the letters in these families, sounds first and names second, and children usually make fast progress.</p>

    <div class="toc"><b>In this guide</b><ol>
      <li>Five things to know before you start</li>
      <li>Teach in letter families, not alphabetical order</li>
      <li>The vowels that unlock reading</li>
      <li>A six-week plan</li>
      <li>Writing: tips for small hands</li>
      <li>Playful activities</li>
      <li>Mistakes to avoid</li>
    </ol></div>

    <h2>1. Five things to know before you start</h2>
    <ul>
      <li><strong>28 letters</strong>, all consonants or long vowels. Short vowels are written as small marks above or below the letters.</li>
      <li><strong>Right to left:</strong> reading and writing start on the right side of the page.</li>
      <li><strong>Joined writing:</strong> letters connect to each other in a word, like cursive handwriting.</li>
      <li><strong>Up to four shapes per letter:</strong> isolated, at the start, in the middle and at the end of a word. For example ${A('ع')} looks different in ${A('عين')}, ${A('بعد')} and ${A('سمع')}. The core shape stays recognisable.</li>
      <li><strong>Six letters never join to the next one:</strong> ${A('ا د ذ ر ز و')}. After them, the next letter starts fresh. Children find it helpful to learn this short list early.</li>
    </ul>

    <h2>2. Teach in letter families, not alphabetical order</h2>
    <p>Many Arabic letters share the same skeleton and are distinguished by the number and position of dots. Learning them together turns three hard letters into one shape plus a simple rule about dots:</p>
    <div class="tablewrap"><table>
      <tr><th>Family (same shape)</th><th>Sounds</th></tr>
      ${famRows}
    </table></div>
    <p>The remaining letters, ${A('ا ك ل م ن ه و ي')}, have distinct shapes. Note that ${A('ن')} and ${A('ي')} look very similar to the ${A('ب')} family at the start of a word, which is a nice discovery for children once they can read short words.</p>
    <div class="tipbox"><b>Teacher's note</b>Sounds matter more than names at first. A child who knows that ${A('ب')} says "b" can start reading syllables; a child who only knows its name "baa" often tries to read ${A('بَاب')} as "baa-alif-baa". Say the sound first, and introduce the name later.</div>

    <h2>3. The vowels that unlock reading</h2>
    <p>Short vowels are small marks called <strong>harakat</strong>. Children's books and school texts include them, and they are the key to reading aloud:</p>
    <div class="tablewrap"><table>
      <tr><th>Mark</th><th>Name</th><th>Sound</th><th>Example</th></tr>
      <tr><td>${A('بَ')}</td><td>fatha (above)</td><td>short "a"</td><td>ba</td></tr>
      <tr><td>${A('بِ')}</td><td>kasra (below)</td><td>short "i"</td><td>bi</td></tr>
      <tr><td>${A('بُ')}</td><td>damma (above)</td><td>short "u"</td><td>bu</td></tr>
      <tr><td>${A('بْ')}</td><td>sukun</td><td>no vowel</td><td>b (as in ${A('أَبْ')})</td></tr>
      <tr><td>${A('بّ')}</td><td>shadda</td><td>doubled letter</td><td>bb</td></tr>
    </table></div>
    <p>The long vowels are letters: ${A('ا')} (long "aa"), ${A('و')} (long "uu") and ${A('ي')} (long "ii"). Once a child knows a handful of letters and the three short vowels, they can read hundreds of syllables and their first real words: ${A('بَابٌ')} (door), ${A('دَارٌ')} (house), ${A('قَلَمٌ')} (pen).</p>

    <h2>4. A six-week plan</h2>
    <p>This plan suits children of about 5 to 7, with 15 minutes a day. Older children can move faster; younger ones can take two weeks per step.</p>
    <div class="tablewrap"><table>
      <tr><th>Week</th><th>Focus</th><th>Activities</th></tr>
      <tr><td>1</td><td>${A('ا ب ت ث')} + fatha</td><td>Sounds with pictures, trace isolated shapes, read ${A('بَ تَ ثَ')}</td></tr>
      <tr><td>2</td><td>${A('ج ح خ د ذ')} + kasra and damma</td><td>Dot games, read syllables ${A('بِ بُ دَ دِ دُ')}</td></tr>
      <tr><td>3</td><td>${A('ر ز س ش')}</td><td>First words: ${A('رَسَمَ')}, ${A('شَرِبَ')}; learn the six non-joining letters</td></tr>
      <tr><td>4</td><td>${A('ص ض ط ظ ع غ')}</td><td>Pronunciation practice, word-picture matching</td></tr>
      <tr><td>5</td><td>${A('ف ق ك ل م ن ه و ي')}</td><td>Long vowels, read short words with pictures</td></tr>
      <tr><td>6</td><td>Review + joined forms</td><td>Find letters in words, read and write three-letter words</td></tr>
    </table></div>

    <h2>5. Writing: tips for small hands</h2>
    <ul>
      <li><strong>Start on the right.</strong> Put a small green dot on the right edge of the line as a "start here" sign.</li>
      <li><strong>Body first, dots last.</strong> Children write the main stroke of the letter, then add the dots or marks.</li>
      <li><strong>Use a baseline.</strong> Most letters sit on the line, but some tails go below it (${A('ج ح خ ع غ م')} at the end of a word, and ${A('ر ز و')}). Lined paper with a clear baseline helps.</li>
      <li><strong>Big before small.</strong> Trace letters in the air, in sand or with a finger on the table before using a pencil.</li>
      <li><strong>Short sessions.</strong> Five minutes of careful writing is better than a full page of tired letters.</li>
    </ul>

    <h2>6. Playful activities</h2>
    <ul>
      <li><strong>Letter of the day:</strong> find it on food packets, street signs and book covers.</li>
      <li><strong>Dot detectives:</strong> show a letter skeleton without dots, and let your child add one, two or three dots to make different letters.</li>
      <li><strong>Sand and dough:</strong> write letters in a tray of sand or salt, or shape them with playdough.</li>
      <li><strong>Picture memory:</strong> pairs of cards with a letter and an object that starts with it (${A('ب')} and a door, ${A('ق')} and a pen).</li>
      <li><strong>Syllable bingo:</strong> call out "ba, bi, bu" and your child covers the right card.</li>
    </ul>
    <div class="tipbox try"><b>Try this tonight</b>Write ${A('ب')} large on a sheet of paper. Ask your child to add the dots needed to turn it into ${A('ت')} and then ${A('ث')}, saying each sound aloud. Three letters learned in five minutes.</div>

    <h2>7. Mistakes to avoid</h2>
    <ul>
      <li><strong>Teaching only the alphabet song.</strong> Reciting the letters in order is fun but does not teach reading. Mix sounds, shapes and syllables.</li>
      <li><strong>Skipping the short vowels.</strong> Without harakat, children can name letters but cannot read words.</li>
      <li><strong>All four forms at once.</strong> Start with isolated shapes, then introduce joined forms gradually through real words.</li>
      <li><strong>Too much copying, too early.</strong> Long writing exercises before the shapes are familiar lead to tears. Reading and play first.</li>
    </ul>
    <div class="tipbox warn"><b>Sounds without English equivalents</b>Letters such as ${A('ع ح خ غ ق')} and the "heavy" letters ${A('ص ض ط ظ')} take time. Children who speak Darija or another Arabic dialect at home already produce most of them. For others, listening to clear audio and exaggerating the sounds in a playful way helps a lot.</div>

    <h2>Free resources on Kids Learning Hub</h2>
    <p>Print our <a href="../worksheets/arabic-letters.html">Arabic letter tracing worksheets</a> (all 28 letters), turn letters into colouring pages with <a href="../worksheets/coloring-letters.html">giant letter outlines</a>, and read our <a href="../stories/ar/">bedtime stories in Arabic</a> together once your child can read short words.</p>
    ${cta('arabikids', 'Learn the 28 Arabic letters with tracing, sounds, games and stories — offline and free.')}

    <p>Group the letters in families, teach sounds before names, add the three short vowels early, and keep it playful. Within weeks, your child will be reading their first Arabic words with pride.</p>`,

    fr: `
    <span class="tag lang">Langues</span>
    <h1>L'alphabet arabe pour les enfants : comment l'enseigner pas à pas</h1>
    ${meta('fr', 12)}
    <p class="lede">L'alphabet arabe compte 28 lettres, s'écrit de droite à gauche, et la plupart des lettres changent de forme selon leur place dans le mot. Cela paraît beaucoup pour un enfant, mais l'arabe offre un cadeau aux apprenants : beaucoup de lettres partagent la même forme de base et ne diffèrent que par leurs points. Enseignez-les par familles, le son d'abord et le nom ensuite, et les enfants progressent généralement vite.</p>

    <div class="toc"><b>Dans ce guide</b><ol>
      <li>Cinq choses à savoir avant de commencer</li>
      <li>Enseigner par familles de lettres, pas dans l'ordre alphabétique</li>
      <li>Les voyelles qui ouvrent la lecture</li>
      <li>Un plan sur six semaines</li>
      <li>L'écriture : conseils pour les petites mains</li>
      <li>Des activités ludiques</li>
      <li>Les erreurs à éviter</li>
    </ol></div>

    <h2>1. Cinq choses à savoir avant de commencer</h2>
    <ul>
      <li><strong>28 lettres</strong>, toutes des consonnes ou des voyelles longues. Les voyelles courtes s'écrivent par de petits signes au-dessus ou au-dessous des lettres.</li>
      <li><strong>De droite à gauche :</strong> la lecture et l'écriture commencent à droite de la page.</li>
      <li><strong>Écriture liée :</strong> les lettres se rattachent entre elles dans un mot, comme en écriture cursive.</li>
      <li><strong>Jusqu'à quatre formes par lettre :</strong> isolée, en début, au milieu et en fin de mot. Par exemple ${A('ع')} change d'aspect dans ${A('عين')}, ${A('بعد')} et ${A('سمع')}. La forme de base reste reconnaissable.</li>
      <li><strong>Six lettres ne se lient jamais à la suivante :</strong> ${A('ا د ذ ر ز و')}. Après elles, la lettre suivante repart à neuf. Il est utile d'apprendre tôt cette courte liste.</li>
    </ul>

    <h2>2. Enseigner par familles de lettres, pas dans l'ordre alphabétique</h2>
    <p>Beaucoup de lettres arabes partagent le même squelette et se distinguent par le nombre et la position des points. Les apprendre ensemble transforme trois lettres difficiles en une seule forme plus une règle simple sur les points :</p>
    <div class="tablewrap"><table>
      <tr><th>Famille (même forme)</th><th>Sons</th></tr>
      ${famRows}
    </table></div>
    <p>Les autres lettres, ${A('ا ك ل م ن ه و ي')}, ont des formes bien distinctes. Remarquez qu'en début de mot ${A('ن')} et ${A('ي')} ressemblent beaucoup à la famille de ${A('ب')} : une jolie découverte pour l'enfant quand il commence à lire de petits mots.</p>
    <div class="tipbox"><b>Le mot de l'enseignant</b>Au début, les sons comptent plus que les noms. Un enfant qui sait que ${A('ب')} fait « b » peut lire des syllabes ; un enfant qui ne connaît que son nom « ba » essaie souvent de lire ${A('بَاب')} comme « ba-alif-ba ». Dites d'abord le son, le nom viendra plus tard.</div>

    <h2>3. Les voyelles qui ouvrent la lecture</h2>
    <p>Les voyelles courtes sont de petits signes appelés <strong>harakat</strong>. Les livres pour enfants et les textes scolaires les indiquent, et ils sont la clé de la lecture à voix haute :</p>
    <div class="tablewrap"><table>
      <tr><th>Signe</th><th>Nom</th><th>Son</th><th>Exemple</th></tr>
      <tr><td>${A('بَ')}</td><td>fatha (au-dessus)</td><td>« a » bref</td><td>ba</td></tr>
      <tr><td>${A('بِ')}</td><td>kasra (au-dessous)</td><td>« i » bref</td><td>bi</td></tr>
      <tr><td>${A('بُ')}</td><td>damma (au-dessus)</td><td>« ou » bref</td><td>bou</td></tr>
      <tr><td>${A('بْ')}</td><td>soukoun</td><td>pas de voyelle</td><td>b (comme dans ${A('أَبْ')})</td></tr>
      <tr><td>${A('بّ')}</td><td>chadda</td><td>lettre doublée</td><td>bb</td></tr>
    </table></div>
    <p>Les voyelles longues sont des lettres : ${A('ا')} (« aa » long), ${A('و')} (« ouu » long) et ${A('ي')} (« ii » long). Dès qu'un enfant connaît quelques lettres et les trois voyelles brèves, il peut lire des centaines de syllabes et ses premiers vrais mots : ${A('بَابٌ')} (porte), ${A('دَارٌ')} (maison), ${A('قَلَمٌ')} (stylo).</p>

    <h2>4. Un plan sur six semaines</h2>
    <p>Ce plan convient aux enfants de 5 à 7 ans environ, à raison de 15 minutes par jour. Les plus grands peuvent aller plus vite ; les plus jeunes peuvent consacrer deux semaines à chaque étape.</p>
    <div class="tablewrap"><table>
      <tr><th>Semaine</th><th>Objectif</th><th>Activités</th></tr>
      <tr><td>1</td><td>${A('ا ب ت ث')} + fatha</td><td>Sons avec images, tracer les formes isolées, lire ${A('بَ تَ ثَ')}</td></tr>
      <tr><td>2</td><td>${A('ج ح خ د ذ')} + kasra et damma</td><td>Jeux de points, lire les syllabes ${A('بِ بُ دَ دِ دُ')}</td></tr>
      <tr><td>3</td><td>${A('ر ز س ش')}</td><td>Premiers mots : ${A('رَسَمَ')}, ${A('شَرِبَ')} ; apprendre les six lettres qui ne se lient pas</td></tr>
      <tr><td>4</td><td>${A('ص ض ط ظ ع غ')}</td><td>Travail de prononciation, associer mots et images</td></tr>
      <tr><td>5</td><td>${A('ف ق ك ل م ن ه و ي')}</td><td>Voyelles longues, lire de petits mots illustrés</td></tr>
      <tr><td>6</td><td>Révision + formes liées</td><td>Retrouver les lettres dans les mots, lire et écrire des mots de trois lettres</td></tr>
    </table></div>

    <h2>5. L'écriture : conseils pour les petites mains</h2>
    <ul>
      <li><strong>Commencer à droite.</strong> Mettez un petit point vert au bord droit de la ligne pour indiquer « on commence ici ».</li>
      <li><strong>Le corps d'abord, les points ensuite.</strong> L'enfant trace le trait principal de la lettre, puis ajoute les points ou les signes.</li>
      <li><strong>Utiliser une ligne de base.</strong> La plupart des lettres reposent sur la ligne, mais certaines queues descendent dessous (${A('ج ح خ ع غ م')} en fin de mot, et ${A('ر ز و')}). Un papier ligné avec une ligne bien visible aide beaucoup.</li>
      <li><strong>Grand avant petit.</strong> Tracer les lettres dans l'air, dans le sable ou du doigt sur la table avant de prendre un crayon.</li>
      <li><strong>Des séances courtes.</strong> Cinq minutes d'écriture soignée valent mieux qu'une page entière de lettres fatiguées.</li>
    </ul>

    <h2>6. Des activités ludiques</h2>
    <ul>
      <li><strong>La lettre du jour :</strong> la chercher sur les emballages, les panneaux et les couvertures de livres.</li>
      <li><strong>Les détectives des points :</strong> montrez le squelette d'une lettre sans points, et laissez l'enfant ajouter un, deux ou trois points pour obtenir différentes lettres.</li>
      <li><strong>Sable et pâte à modeler :</strong> écrire les lettres dans un plateau de sable ou de sel, ou les modeler en pâte.</li>
      <li><strong>Le mémory illustré :</strong> des paires de cartes avec une lettre et un objet qui commence par elle (${A('ب')} et une porte, ${A('ق')} et un stylo).</li>
      <li><strong>Le loto des syllabes :</strong> annoncez « ba, bi, bou » et l'enfant couvre la bonne carte.</li>
    </ul>
    <div class="tipbox try"><b>À essayer ce soir</b>Écrivez ${A('ب')} en grand sur une feuille. Demandez à votre enfant d'ajouter les points nécessaires pour la transformer en ${A('ت')}, puis en ${A('ث')}, en disant chaque son à voix haute. Trois lettres apprises en cinq minutes.</div>

    <h2>7. Les erreurs à éviter</h2>
    <ul>
      <li><strong>Se limiter à la chanson de l'alphabet.</strong> Réciter les lettres dans l'ordre est amusant, mais n'apprend pas à lire. Mélangez sons, formes et syllabes.</li>
      <li><strong>Négliger les voyelles brèves.</strong> Sans harakat, l'enfant sait nommer les lettres mais ne peut pas lire de mots.</li>
      <li><strong>Les quatre formes d'un coup.</strong> Commencez par les formes isolées, puis introduisez progressivement les formes liées à travers de vrais mots.</li>
      <li><strong>Trop de copie, trop tôt.</strong> De longs exercices d'écriture avant que les formes soient familières finissent en larmes. La lecture et le jeu d'abord.</li>
    </ul>
    <div class="tipbox warn"><b>Les sons qui n'existent pas en français</b>Des lettres comme ${A('ع ح خ غ ق')} et les lettres « emphatiques » ${A('ص ض ط ظ')} demandent du temps. Les enfants qui parlent darija ou un autre dialecte arabe à la maison en prononcent déjà la plupart. Pour les autres, écouter un audio clair et exagérer les sons de façon ludique aide beaucoup.</div>

    <h2>Des ressources gratuites sur Kids Learning Hub</h2>
    <p>Imprimez nos <a href="../worksheets/arabic-letters.html?lang=fr">fiches de tracé des lettres arabes</a> (les 28 lettres), transformez les lettres en coloriages avec nos <a href="../worksheets/coloring-letters.html?lang=fr">lettres géantes à colorier</a>, et lisez ensemble nos <a href="../stories/ar/">histoires du soir en arabe</a> quand votre enfant sait lire de petits mots.</p>
    ${cta('arabikids', 'Apprendre les 28 lettres arabes avec le tracé, les sons, des jeux et des histoires — hors ligne et gratuit.')}

    <p>Regroupez les lettres par familles, enseignez les sons avant les noms, ajoutez tôt les trois voyelles brèves et gardez le plaisir. En quelques semaines, votre enfant lira fièrement ses premiers mots en arabe.</p>`,

    es: `
    <span class="tag lang">Idiomas</span>
    <h1>El alfabeto árabe para niños: cómo enseñarlo paso a paso</h1>
    ${meta('es', 12)}
    <p class="lede">El alfabeto árabe tiene 28 letras, se escribe de derecha a izquierda y la mayoría de las letras cambian de forma según su posición en la palabra. Parece mucho para un niño, pero el árabe tiene un regalo para quien aprende: muchas letras comparten la misma forma básica y solo se diferencian por los puntos. Enséñalas por familias, primero el sonido y después el nombre, y los niños suelen avanzar rápido.</p>

    <div class="toc"><b>En esta guía</b><ol>
      <li>Cinco cosas que conviene saber antes de empezar</li>
      <li>Enseñar por familias de letras, no por orden alfabético</li>
      <li>Las vocales que abren la lectura</li>
      <li>Un plan de seis semanas</li>
      <li>La escritura: consejos para manos pequeñas</li>
      <li>Actividades divertidas</li>
      <li>Errores que conviene evitar</li>
    </ol></div>

    <h2>1. Cinco cosas que conviene saber antes de empezar</h2>
    <ul>
      <li><strong>28 letras</strong>, todas consonantes o vocales largas. Las vocales cortas se escriben con pequeños signos encima o debajo de las letras.</li>
      <li><strong>De derecha a izquierda:</strong> la lectura y la escritura empiezan por el lado derecho de la página.</li>
      <li><strong>Escritura ligada:</strong> las letras se unen entre sí dentro de la palabra, como en la letra cursiva.</li>
      <li><strong>Hasta cuatro formas por letra:</strong> aislada, al principio, en medio y al final de la palabra. Por ejemplo ${A('ع')} cambia en ${A('عين')}, ${A('بعد')} y ${A('سمع')}. La forma básica sigue siendo reconocible.</li>
      <li><strong>Seis letras nunca se unen a la siguiente:</strong> ${A('ا د ذ ر ز و')}. Después de ellas la siguiente letra empieza de nuevo. Ayuda aprender pronto esta lista corta.</li>
    </ul>

    <h2>2. Enseñar por familias de letras, no por orden alfabético</h2>
    <p>Muchas letras árabes comparten el mismo esqueleto y se distinguen por el número y la posición de los puntos. Aprenderlas juntas convierte tres letras difíciles en una sola forma y una regla sencilla sobre los puntos:</p>
    <div class="tablewrap"><table>
      <tr><th>Familia (misma forma)</th><th>Sonidos</th></tr>
      ${famRows}
    </table></div>
    <p>Las letras restantes, ${A('ا ك ل م ن ه و ي')}, tienen formas propias. Fíjate en que, al principio de palabra, ${A('ن')} y ${A('ي')} se parecen mucho a la familia de ${A('ب')}: un descubrimiento bonito para el niño cuando empieza a leer palabras cortas.</p>
    <div class="tipbox"><b>Nota del profesor</b>Al principio importan más los sonidos que los nombres. Un niño que sabe que ${A('ب')} suena «b» puede leer sílabas; uno que solo conoce su nombre, «ba», suele intentar leer ${A('بَاب')} como «ba-alif-ba». Di primero el sonido; el nombre llegará después.</div>

    <h2>3. Las vocales que abren la lectura</h2>
    <p>Las vocales cortas son pequeños signos llamados <strong>harakat</strong>. Los libros infantiles y los textos escolares los incluyen, y son la llave para leer en voz alta:</p>
    <div class="tablewrap"><table>
      <tr><th>Signo</th><th>Nombre</th><th>Sonido</th><th>Ejemplo</th></tr>
      <tr><td>${A('بَ')}</td><td>fatha (encima)</td><td>«a» corta</td><td>ba</td></tr>
      <tr><td>${A('بِ')}</td><td>kasra (debajo)</td><td>«i» corta</td><td>bi</td></tr>
      <tr><td>${A('بُ')}</td><td>damma (encima)</td><td>«u» corta</td><td>bu</td></tr>
      <tr><td>${A('بْ')}</td><td>sukún</td><td>sin vocal</td><td>b (como en ${A('أَبْ')})</td></tr>
      <tr><td>${A('بّ')}</td><td>shadda</td><td>letra doble</td><td>bb</td></tr>
    </table></div>
    <p>Las vocales largas son letras: ${A('ا')} («aa» larga), ${A('و')} («uu» larga) y ${A('ي')} («ii» larga). En cuanto un niño conoce unas cuantas letras y las tres vocales cortas, puede leer cientos de sílabas y sus primeras palabras de verdad: ${A('بَابٌ')} (puerta), ${A('دَارٌ')} (casa), ${A('قَلَمٌ')} (bolígrafo).</p>

    <h2>4. Un plan de seis semanas</h2>
    <p>Este plan sirve para niños de unos 5 a 7 años, con 15 minutos al día. Los mayores pueden ir más rápido; los pequeños pueden dedicar dos semanas a cada paso.</p>
    <div class="tablewrap"><table>
      <tr><th>Semana</th><th>Objetivo</th><th>Actividades</th></tr>
      <tr><td>1</td><td>${A('ا ب ت ث')} + fatha</td><td>Sonidos con imágenes, trazar las formas aisladas, leer ${A('بَ تَ ثَ')}</td></tr>
      <tr><td>2</td><td>${A('ج ح خ د ذ')} + kasra y damma</td><td>Juegos de puntos, leer las sílabas ${A('بِ بُ دَ دِ دُ')}</td></tr>
      <tr><td>3</td><td>${A('ر ز س ش')}</td><td>Primeras palabras: ${A('رَسَمَ')}, ${A('شَرِبَ')}; aprender las seis letras que no se unen</td></tr>
      <tr><td>4</td><td>${A('ص ض ط ظ ع غ')}</td><td>Práctica de pronunciación, unir palabras e imágenes</td></tr>
      <tr><td>5</td><td>${A('ف ق ك ل م ن ه و ي')}</td><td>Vocales largas, leer palabras cortas con imágenes</td></tr>
      <tr><td>6</td><td>Repaso + formas unidas</td><td>Buscar letras en palabras, leer y escribir palabras de tres letras</td></tr>
    </table></div>

    <h2>5. La escritura: consejos para manos pequeñas</h2>
    <ul>
      <li><strong>Empezar por la derecha.</strong> Pon un puntito verde en el borde derecho de la línea como señal de «se empieza aquí».</li>
      <li><strong>Primero el cuerpo, después los puntos.</strong> El niño traza el trazo principal de la letra y luego añade los puntos o signos.</li>
      <li><strong>Usar una línea base.</strong> La mayoría de las letras se apoyan en la línea, pero algunas colas bajan (${A('ج ح خ ع غ م')} al final de palabra, y ${A('ر ز و')}). Un papel pautado con la línea bien marcada ayuda.</li>
      <li><strong>Grande antes que pequeño.</strong> Trazar las letras en el aire, en arena o con el dedo sobre la mesa antes de usar el lápiz.</li>
      <li><strong>Sesiones cortas.</strong> Cinco minutos de escritura cuidada valen más que una página entera de letras cansadas.</li>
    </ul>

    <h2>6. Actividades divertidas</h2>
    <ul>
      <li><strong>La letra del día:</strong> buscarla en envases, carteles y portadas de libros.</li>
      <li><strong>Detectives de puntos:</strong> muestra el esqueleto de una letra sin puntos y deja que tu hijo añada uno, dos o tres para formar letras distintas.</li>
      <li><strong>Arena y plastilina:</strong> escribir las letras en una bandeja con arena o sal, o modelarlas con plastilina.</li>
      <li><strong>Memoria con imágenes:</strong> parejas de cartas con una letra y un objeto que empieza por ella (${A('ب')} y una puerta, ${A('ق')} y un bolígrafo).</li>
      <li><strong>Bingo de sílabas:</strong> di «ba, bi, bu» y el niño tapa la carta correcta.</li>
    </ul>
    <div class="tipbox try"><b>Pruébalo esta noche</b>Escribe ${A('ب')} en grande en una hoja. Pide a tu hijo que añada los puntos necesarios para convertirla en ${A('ت')} y luego en ${A('ث')}, diciendo cada sonido en voz alta. Tres letras aprendidas en cinco minutos.</div>

    <h2>7. Errores que conviene evitar</h2>
    <ul>
      <li><strong>Quedarse solo con la canción del alfabeto.</strong> Recitar las letras en orden es divertido, pero no enseña a leer. Mezcla sonidos, formas y sílabas.</li>
      <li><strong>Saltarse las vocales cortas.</strong> Sin harakat, el niño sabe nombrar las letras pero no puede leer palabras.</li>
      <li><strong>Las cuatro formas a la vez.</strong> Empieza por las formas aisladas e introduce poco a poco las formas unidas con palabras reales.</li>
      <li><strong>Demasiada copia, demasiado pronto.</strong> Los ejercicios largos de escritura antes de que las formas resulten familiares acaban en lágrimas. Primero la lectura y el juego.</li>
    </ul>
    <div class="tipbox warn"><b>Sonidos que no existen en español</b>Letras como ${A('ع ح خ غ ق')} y las letras «enfáticas» ${A('ص ض ط ظ')} requieren tiempo. Los niños que hablan dariya u otro dialecto árabe en casa ya pronuncian la mayoría. Para los demás, escuchar un audio claro y exagerar los sonidos jugando ayuda mucho.</div>

    <h2>Recursos gratis en Kids Learning Hub</h2>
    <p>Imprime nuestras <a href="../worksheets/arabic-letters.html?lang=es">fichas para trazar las letras árabes</a> (las 28 letras), convierte las letras en dibujos para colorear con nuestras <a href="../worksheets/coloring-letters.html?lang=es">letras gigantes</a> y leed juntos nuestros <a href="../stories/ar/">cuentos para dormir en árabe</a> cuando tu hijo ya lea palabras cortas.</p>
    ${cta('arabikids', 'Aprende las 28 letras árabes con trazos, sonidos, juegos y cuentos — sin conexión y gratis.')}

    <p>Agrupa las letras por familias, enseña los sonidos antes que los nombres, añade pronto las tres vocales cortas y que sea un juego. En pocas semanas tu hijo leerá con orgullo sus primeras palabras en árabe.</p>`,

    ar: `
    <span class="tag lang">لغات</span>
    <h1>تعليم الحروف العربية للأطفال: كيف نعلّمها خطوة بخطوة</h1>
    ${meta('ar', 12)}
    <p class="lede">للحروف العربية 28 حرفًا، تُكتب من اليمين إلى اليسار، ويتغيّر شكل أغلبها حسب موقعه في الكلمة. يبدو هذا كثيرًا على الطفل، لكن العربية تقدّم للمتعلّم هدية: حروف كثيرة تشترك في الشكل الأساسي نفسه ولا تختلف إلا في النقاط. علّمها في عائلات، الصوت أولًا والاسم بعده، وغالبًا ما يتقدّم الأطفال بسرعة.</p>

    <div class="toc"><b>في هذا الدليل</b><ol>
      <li>خمسة أمور يجب معرفتها قبل البدء</li>
      <li>علّم بعائلات الحروف لا بالترتيب الأبجدي</li>
      <li>الحركات التي تفتح باب القراءة</li>
      <li>خطة في ستة أسابيع</li>
      <li>الكتابة: نصائح للأيدي الصغيرة</li>
      <li>أنشطة ممتعة</li>
      <li>أخطاء يجب تجنّبها</li>
    </ol></div>

    <h2>1. خمسة أمور يجب معرفتها قبل البدء</h2>
    <ul>
      <li><strong>28 حرفًا</strong>، كلها صوامت أو حروف مدّ. أما الحركات القصيرة فتُكتب علامات صغيرة فوق الحروف أو تحتها.</li>
      <li><strong>من اليمين إلى اليسار:</strong> تبدأ القراءة والكتابة من الجهة اليمنى للصفحة.</li>
      <li><strong>الكتابة المتّصلة:</strong> تتّصل الحروف ببعضها داخل الكلمة.</li>
      <li><strong>حتى أربعة أشكال للحرف:</strong> منفصل، وفي أول الكلمة، وفي وسطها، وفي آخرها. مثلًا يتغيّر شكل «ع» في «عين» و«بعد» و«سمع»، لكن الشكل الأساسي يبقى واضحًا.</li>
      <li><strong>ستة حروف لا تتّصل بما بعدها أبدًا:</strong> ا د ذ ر ز و. وبعدها يبدأ الحرف التالي من جديد. من المفيد أن يتعلّم الطفل هذه القائمة القصيرة مبكرًا.</li>
    </ul>

    <h2>2. علّم بعائلات الحروف لا بالترتيب الأبجدي</h2>
    <p>تشترك حروف عربية كثيرة في الهيكل نفسه، وتتميّز بعدد النقاط وموضعها. تعلّمها معًا يحوّل ثلاثة حروف صعبة إلى شكل واحد وقاعدة بسيطة عن النقاط:</p>
    <div class="tablewrap"><table>
      <tr><th>العائلة (الشكل نفسه)</th><th>الأصوات بالحروف اللاتينية</th></tr>
      ${famRows}
    </table></div>
    <p>أما الحروف الباقية «ا ك ل م ن ه و ي» فلها أشكال مميّزة. ولاحظ أن «ن» و«ي» في أول الكلمة يشبهان كثيرًا عائلة «ب»، وهذا اكتشاف جميل للطفل حين يبدأ قراءة الكلمات القصيرة.</p>
    <div class="tipbox"><b>ملاحظة الأستاذ</b>في البداية الأصوات أهم من الأسماء. الطفل الذي يعرف أن «ب» تُنطق «بْ» يستطيع قراءة المقاطع، أما الذي لا يعرف إلا اسمها «باء» فيحاول غالبًا قراءة «بَاب» على أنها «باء-ألف-باء». قل الصوت أولًا، ويأتي الاسم لاحقًا.</div>

    <h2>3. الحركات التي تفتح باب القراءة</h2>
    <p>الحركات القصيرة علامات صغيرة تسمّى <strong>الحركات</strong>، وتتضمّنها كتب الأطفال والنصوص المدرسية، وهي مفتاح القراءة بصوت مرتفع:</p>
    <div class="tablewrap"><table>
      <tr><th>العلامة</th><th>الاسم</th><th>الصوت</th><th>مثال</th></tr>
      <tr><td>بَ</td><td>الفتحة (فوق الحرف)</td><td>«a» قصيرة</td><td>بَ</td></tr>
      <tr><td>بِ</td><td>الكسرة (تحت الحرف)</td><td>«i» قصيرة</td><td>بِ</td></tr>
      <tr><td>بُ</td><td>الضمّة (فوق الحرف)</td><td>«u» قصيرة</td><td>بُ</td></tr>
      <tr><td>بْ</td><td>السكون</td><td>دون حركة</td><td>أَبْ</td></tr>
      <tr><td>بّ</td><td>الشدّة</td><td>حرف مضعّف</td><td>رَبّ</td></tr>
    </table></div>
    <p>أما حروف المدّ فهي: «ا» (مدّ بالفتح)، و«و» (مدّ بالضمّ)، و«ي» (مدّ بالكسر). حين يعرف الطفل بضعة حروف والحركات الثلاث، يستطيع قراءة مئات المقاطع وأولى كلماته الحقيقية: «بَابٌ» و«دَارٌ» و«قَلَمٌ».</p>

    <h2>4. خطة في ستة أسابيع</h2>
    <p>تناسب هذه الخطة الأطفال من نحو 5 إلى 7 سنوات، بمعدّل 15 دقيقة يوميًا. يمكن للأكبر أن يتقدّموا أسرع، وللأصغر أن يخصّصوا أسبوعين لكل مرحلة.</p>
    <div class="tablewrap"><table>
      <tr><th>الأسبوع</th><th>الهدف</th><th>الأنشطة</th></tr>
      <tr><td>1</td><td>ا ب ت ث + الفتحة</td><td>الأصوات مع الصور، وتتبّع الأشكال المنفصلة، وقراءة «بَ تَ ثَ»</td></tr>
      <tr><td>2</td><td>ج ح خ د ذ + الكسرة والضمّة</td><td>ألعاب النقاط، وقراءة المقاطع «بِ بُ دَ دِ دُ»</td></tr>
      <tr><td>3</td><td>ر ز س ش</td><td>أولى الكلمات: «رَسَمَ»، «شَرِبَ»، وتعلّم الحروف الستة التي لا تتّصل بما بعدها</td></tr>
      <tr><td>4</td><td>ص ض ط ظ ع غ</td><td>تدريب على النطق، ومطابقة الكلمات بالصور</td></tr>
      <tr><td>5</td><td>ف ق ك ل م ن ه و ي</td><td>حروف المدّ، وقراءة كلمات قصيرة مصوّرة</td></tr>
      <tr><td>6</td><td>مراجعة + الأشكال المتّصلة</td><td>البحث عن الحروف داخل الكلمات، وقراءة كلمات من ثلاثة حروف وكتابتها</td></tr>
    </table></div>

    <h2>5. الكتابة: نصائح للأيدي الصغيرة</h2>
    <ul>
      <li><strong>ابدأ من اليمين.</strong> ضع نقطة خضراء صغيرة على الطرف الأيمن للسطر علامةً على «نبدأ من هنا».</li>
      <li><strong>الجسم أولًا والنقاط أخيرًا.</strong> يكتب الطفل الخط الرئيسي للحرف، ثم يضيف النقاط أو العلامات.</li>
      <li><strong>استعمل سطرًا أساسيًا.</strong> تجلس أغلب الحروف على السطر، لكن بعض الذيول تنزل تحته («ج ح خ ع غ م» في آخر الكلمة، و«ر ز و»). الورق المسطّر بسطر واضح يساعد كثيرًا.</li>
      <li><strong>الكبير قبل الصغير.</strong> يتتبّع الطفل الحروف في الهواء أو في الرمل أو بإصبعه على الطاولة قبل استعمال القلم.</li>
      <li><strong>حصص قصيرة.</strong> خمس دقائق من الكتابة المتأنّية أفضل من صفحة كاملة من الحروف المتعبة.</li>
    </ul>

    <h2>6. أنشطة ممتعة</h2>
    <ul>
      <li><strong>حرف اليوم:</strong> نبحث عنه على علب الطعام ولافتات الشوارع وأغلفة الكتب.</li>
      <li><strong>محقّقو النقاط:</strong> اعرض هيكل حرف دون نقاط، ودع طفلك يضيف نقطة أو نقطتين أو ثلاثًا ليصنع حروفًا مختلفة.</li>
      <li><strong>الرمل والعجين:</strong> كتابة الحروف في صينية رمل أو ملح، أو تشكيلها بالعجين.</li>
      <li><strong>ذاكرة الصور:</strong> أزواج من البطاقات فيها حرف وشيء يبدأ به (ب والباب، ق والقلم).</li>
      <li><strong>لوطو المقاطع:</strong> قل «بَ، بِ، بُ» ويغطّي طفلك البطاقة الصحيحة.</li>
    </ul>
    <div class="tipbox try"><b>جرّب هذا الليلة</b>اكتب «ب» كبيرة على ورقة، واطلب من طفلك أن يضيف النقاط اللازمة لتصبح «ت» ثم «ث»، وهو ينطق كل صوت بصوت مرتفع. ثلاثة حروف في خمس دقائق.</div>

    <h2>7. أخطاء يجب تجنّبها</h2>
    <ul>
      <li><strong>الاكتفاء بأنشودة الحروف.</strong> ترديد الحروف بالترتيب ممتع، لكنه لا يعلّم القراءة. امزج الأصوات والأشكال والمقاطع.</li>
      <li><strong>إهمال الحركات القصيرة.</strong> دون الحركات يعرف الطفل أسماء الحروف لكنه لا يستطيع قراءة الكلمات.</li>
      <li><strong>الأشكال الأربعة دفعة واحدة.</strong> ابدأ بالأشكال المنفصلة، ثم أدخِل الأشكال المتّصلة تدريجيًا عبر كلمات حقيقية.</li>
      <li><strong>النسخ الكثير مبكرًا.</strong> تمارين الكتابة الطويلة قبل أن تصبح الأشكال مألوفة تنتهي بالبكاء. القراءة واللعب أولًا.</li>
    </ul>
    <div class="tipbox warn"><b>الحروف الحلقية والمفخّمة</b>تحتاج حروف مثل «ع ح خ غ ق» والحروف المفخّمة «ص ض ط ظ» إلى وقت. الأطفال الذين يتكلّمون الدارجة أو لهجة عربية أخرى في البيت ينطقون أغلبها أصلًا. وللآخرين يفيد كثيرًا الاستماع إلى تسجيل واضح والمبالغة في نطق الأصوات بطريقة مرحة.</div>

    <h2>موارد مجانية على Kids Learning Hub</h2>
    <p>اطبع <a href="../worksheets/arabic-letters.html?lang=ar">أوراق تتبّع الحروف العربية</a> (الحروف الثمانية والعشرون كلها)، وحوّل الحروف إلى صفحات تلوين بـ<a href="../worksheets/coloring-letters.html?lang=ar">الحروف العملاقة</a>، واقرآ معًا <a href="../stories/ar/">قصص قبل النوم بالعربية</a> حين يصبح طفلك قادرًا على قراءة كلمات قصيرة.</p>
    ${cta('arabikids', 'تعلّم الحروف العربية الثمانية والعشرين بالتتبّع والأصوات والألعاب والقصص — دون إنترنت ومجانًا.')}

    <p>جمّع الحروف في عائلات، وعلّم الأصوات قبل الأسماء، وأدخِل الحركات الثلاث مبكرًا، واجعل الأمر لعبًا. خلال أسابيع سيقرأ طفلك أولى كلماته العربية بفخر.</p>`,
  },

  faq: {
    en: [
      ['What is the best order to teach the Arabic alphabet?', 'Teach letters in shape families, such as ب ت ث or ج ح خ, rather than strict alphabetical order. Introduce the short vowels early so children can read syllables and simple words from the first weeks.'],
      ['How long does it take a child to learn the Arabic letters?', 'With about 15 minutes a day, many children aged 5 to 7 recognise all 28 letters and read simple vowelled words in six to ten weeks. Writing all the joined forms fluently takes longer.'],
      ['Should children learn letter names or sounds first?', 'Sounds first. Knowing that ب says "b" lets a child blend syllables and read words. Letter names can be added once the sounds are secure.']],
    fr: [
      ['Dans quel ordre enseigner l’alphabet arabe ?', 'Par familles de formes, comme ب ت ث ou ج ح خ, plutôt que dans l’ordre alphabétique strict. Introduisez tôt les voyelles brèves pour que l’enfant lise des syllabes et des mots simples dès les premières semaines.'],
      ['Combien de temps faut-il pour apprendre les lettres arabes ?', 'Avec environ 15 minutes par jour, beaucoup d’enfants de 5 à 7 ans reconnaissent les 28 lettres et lisent des mots vocalisés simples en six à dix semaines. Écrire aisément toutes les formes liées prend plus de temps.'],
      ['Faut-il apprendre d’abord le nom ou le son des lettres ?', 'Le son d’abord. Savoir que ب fait « b » permet d’assembler des syllabes et de lire des mots. Les noms des lettres viennent ensuite, une fois les sons acquis.']],
    es: [
      ['¿En qué orden se enseña el alfabeto árabe?', 'Por familias de formas, como ب ت ث o ج ح خ, en lugar del orden alfabético estricto. Introduce pronto las vocales cortas para que el niño lea sílabas y palabras sencillas desde las primeras semanas.'],
      ['¿Cuánto tarda un niño en aprender las letras árabes?', 'Con unos 15 minutos al día, muchos niños de 5 a 7 años reconocen las 28 letras y leen palabras sencillas con vocales en seis a diez semanas. Escribir con soltura todas las formas unidas lleva más tiempo.'],
      ['¿Primero los nombres de las letras o sus sonidos?', 'Primero los sonidos. Saber que ب suena «b» permite unir sílabas y leer palabras. Los nombres pueden añadirse cuando los sonidos estén afianzados.']],
    ar: [
      ['ما أفضل ترتيب لتعليم الحروف العربية؟', 'علّمها في عائلات حسب الشكل، مثل «ب ت ث» و«ج ح خ»، بدل الترتيب الأبجدي الصارم، وأدخِل الحركات القصيرة مبكرًا ليقرأ الطفل المقاطع والكلمات البسيطة منذ الأسابيع الأولى.'],
      ['كم يستغرق الطفل لتعلّم الحروف العربية؟', 'مع نحو 15 دقيقة يوميًا، يتعرّف كثير من الأطفال بين 5 و7 سنوات على الحروف الثمانية والعشرين ويقرؤون كلمات بسيطة مشكولة خلال ستة إلى عشرة أسابيع. أما إتقان كتابة كل الأشكال المتّصلة فيحتاج وقتًا أطول.'],
      ['هل يتعلّم الطفل أسماء الحروف أولًا أم أصواتها؟', 'الأصوات أولًا. معرفة أن «ب» تُنطق «بْ» تمكّن الطفل من تركيب المقاطع وقراءة الكلمات، ثم تُضاف أسماء الحروف بعد أن تثبت الأصوات.']],
  },
};
