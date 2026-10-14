/* Deepened 2026-10 (was ~440 words). Merged-in topic: teaching-kids-coding-logic.
   Angle: the four thinking skills in everyday life and school subjects, without
   screens — the companion article coding-for-kids-when-to-start covers coding tools. */
const { cta, meta } = require('./_cta.js');

module.exports = {
  slug: 'fostering-computational-thinking-kids',
  date: '2026-08-07',
  minutes: 10,

  dataTitle: {
    en: 'Computational Thinking for Kids: 4 Skills to Practise Without a Screen | Kids Learning Hub',
    fr: 'La pensée informatique chez l’enfant : 4 compétences sans écran | Kids Learning Hub',
    es: 'Pensamiento computacional para niños: 4 habilidades sin pantalla | Kids Learning Hub',
    ar: 'التفكير الحاسوبي للأطفال: 4 مهارات نتدرّب عليها دون شاشة | Kids Learning Hub',
  },

  body: {
    en: `
    <span class="tag code">Coding</span>
    <h1>Computational Thinking for Kids: Four Problem-Solving Skills You Can Practise Without a Screen</h1>
    ${meta('en', 10)}
    <p class="lede">Computational thinking is not about computers. It is a way of solving problems that programmers use, but so do cooks, engineers, teachers and children doing their maths homework. It rests on four skills — breaking problems down, spotting patterns, focusing on what matters and writing clear steps — and every one of them can be practised at the kitchen table.</p>

    <div class="toc"><b>In this guide</b><ol>
      <li>The four skills, in plain words</li>
      <li>Where children already use them</li>
      <li>Activities for each skill</li>
      <li>What to expect at each age</li>
      <li>Questions that build logical thinking</li>
    </ol></div>

    <h2>1. The four skills, in plain words</h2>
    <div class="tablewrap"><table>
      <tr><th>Skill</th><th>In plain words</th><th>Everyday example</th></tr>
      <tr><td>Decomposition</td><td>Break a big problem into small parts</td><td>Tidying a messy room: toys first, then clothes, then books</td></tr>
      <tr><td>Pattern recognition</td><td>Notice what repeats or is similar</td><td>"Every time I add 9, the tens go up and the ones go down by one"</td></tr>
      <tr><td>Abstraction</td><td>Keep what matters, ignore the rest</td><td>A metro map shows the order of stations, not every street</td></tr>
      <tr><td>Algorithms</td><td>Write clear steps that always work</td><td>A recipe, or the method for column addition</td></tr>
    </table></div>
    <p>Together, these skills help children face a new problem without panicking: "What are the parts? Have I seen something like this before? What really matters here? What steps should I follow?"</p>

    <h2>2. Where children already use them</h2>
    <ul>
      <li><strong>Maths:</strong> splitting 46 + 37 into tens and ones is decomposition; noticing that the nine-times table digits add up to 9 is pattern recognition; a written method is an algorithm.</li>
      <li><strong>Reading and writing:</strong> planning a story in beginning, middle and end is decomposition; spotting rhymes and word families is pattern recognition; summarising is abstraction.</li>
      <li><strong>Science:</strong> an experiment is an algorithm, and comparing results is pattern recognition.</li>
      <li><strong>Daily life:</strong> getting dressed in the right order, packing a school bag with a checklist, giving someone directions.</li>
    </ul>
    <p>Naming these skills when they appear helps children transfer them from one subject to another: "You just broke the problem into small parts — that's exactly what programmers do."</p>

    <h2>3. Activities for each skill</h2>
    <h3>Decomposition</h3>
    <ul>
      <li><strong>Plan a party or a picnic</strong> together: guests, food, games, timing. Write each part on a separate card.</li>
      <li><strong>LEGO challenge:</strong> build a model, then ask your child to explain which smaller parts it is made of.</li>
    </ul>
    <h3>Pattern recognition</h3>
    <ul>
      <li><strong>Pattern hunts:</strong> find repeating patterns on tiles, fabrics and buildings, then continue them on paper.</li>
      <li><strong>"What comes next?"</strong> with numbers (2, 4, 6…), shapes or colours. Then ask your child to invent a pattern for you.</li>
    </ul>
    <h3>Abstraction</h3>
    <ul>
      <li><strong>Draw a simple map</strong> of the route to school: which details are needed, and which can be left out?</li>
      <li><strong>Tell a story in one sentence:</strong> after a film or book, ask "What was it really about?"</li>
    </ul>
    <h3>Algorithms</h3>
    <ul>
      <li><strong>Write the recipe:</strong> after making a sandwich, write the steps together, then follow them exactly as written. Missing steps become obvious and funny.</li>
      <li><strong>Directions game:</strong> guide a blindfolded parent across the room with "two steps forward, turn left".</li>
    </ul>
    <div class="tipbox try"><b>Try this tonight</b>Ask your child to write instructions for brushing teeth for a robot who knows nothing. Then "be the robot" and follow them literally. You will both laugh at the missing steps, and your child will learn why precise instructions matter.</div>
    <div class="tipbox"><b>Teacher's note</b>In maths lessons, the children who struggle with word problems often have the arithmetic skills but no strategy for starting. Teaching them to ask "What do I know? What do I need? What are the steps?" is computational thinking, and it helps immediately.</div>

    <h2>4. What to expect at each age</h2>
    <div class="tablewrap"><table>
      <tr><th>Age</th><th>Typical abilities</th><th>Good activities</th></tr>
      <tr><td>4–6</td><td>Simple sequences, sorting, copying patterns</td><td>Daily routine cards in order, bead patterns, sorting toys by colour or size</td></tr>
      <tr><td>6–8</td><td>Creating patterns, following and giving step-by-step directions</td><td>Treasure hunts with directions, writing simple recipes, first block-based coding</td></tr>
      <tr><td>8–10</td><td>Planning multi-step tasks, finding mistakes in instructions</td><td>Logic puzzles, planning a project, debugging a friend's instructions</td></tr>
      <tr><td>10–12</td><td>Generalising rules, comparing different methods</td><td>Strategy games, designing a game's rules, more complex coding projects</td></tr>
    </table></div>

    <h2>5. Questions that build logical thinking</h2>
    <p>The questions you ask shape how your child thinks. Keep these handy:</p>
    <ul>
      <li>"Can we break this into smaller steps?"</li>
      <li>"Have we seen a problem like this before? What did we do?"</li>
      <li>"What is the most important information here?"</li>
      <li>"If we did it again, would the same steps work?"</li>
      <li>"Where exactly did it go wrong?" (the most useful question for finding mistakes)</li>
    </ul>
    <div class="tipbox warn"><b>Avoid rescuing too quickly</b>When your child is stuck, resist giving the answer straight away. One good question is usually enough to get them moving again, and solving it themselves is where the learning happens.</div>

    <h2>More on Kids Learning Hub</h2>
    <p>Our <a href="../play/patterns.html">Patterns</a> game trains pattern recognition, and our printable <a href="../worksheets/sudoku.html">sudoku</a> and <a href="../worksheets/maze.html">mazes</a> are perfect for logical step-by-step thinking. When your child is ready to try real coding, read our guide on <a href="coding-for-kids-when-to-start.html">when and how to start coding</a>.</p>
    ${cta('codokids', 'Guide a robot with arrows, loops and conditions through 40 puzzles — computational thinking for ages 4 to 13, offline and free.')}

    <p>Break it down, look for patterns, keep what matters, write clear steps. These four habits help children far beyond computers: they are simply good ways to think.</p>`,

    fr: `
    <span class="tag code">Codage</span>
    <h1>La pensée informatique chez l'enfant : quatre compétences de résolution de problèmes à exercer sans écran</h1>
    ${meta('fr', 10)}
    <p class="lede">La pensée informatique ne concerne pas les ordinateurs. C'est une façon de résoudre des problèmes qu'utilisent les programmeurs, mais aussi les cuisiniers, les ingénieurs, les enseignants et les enfants qui font leurs devoirs de maths. Elle repose sur quatre compétences — découper un problème, repérer des régularités, garder l'essentiel et écrire des étapes claires — et chacune peut s'exercer à la table de la cuisine.</p>

    <div class="toc"><b>Dans ce guide</b><ol>
      <li>Les quatre compétences, en mots simples</li>
      <li>Où les enfants les utilisent déjà</li>
      <li>Des activités pour chaque compétence</li>
      <li>À quoi s'attendre à chaque âge</li>
      <li>Des questions qui développent la logique</li>
    </ol></div>

    <h2>1. Les quatre compétences, en mots simples</h2>
    <div class="tablewrap"><table>
      <tr><th>Compétence</th><th>En mots simples</th><th>Exemple du quotidien</th></tr>
      <tr><td>Décomposition</td><td>Découper un gros problème en petites parties</td><td>Ranger une chambre en désordre : d'abord les jouets, puis les vêtements, puis les livres</td></tr>
      <tr><td>Reconnaissance de motifs</td><td>Remarquer ce qui se répète ou se ressemble</td><td>« Chaque fois que j'ajoute 9, les dizaines augmentent et les unités baissent de un »</td></tr>
      <tr><td>Abstraction</td><td>Garder l'essentiel, ignorer le reste</td><td>Un plan de métro montre l'ordre des stations, pas chaque rue</td></tr>
      <tr><td>Algorithmes</td><td>Écrire des étapes claires qui marchent toujours</td><td>Une recette, ou la technique de l'addition posée</td></tr>
    </table></div>
    <p>Ensemble, ces compétences aident l'enfant à affronter un problème nouveau sans paniquer : « Quelles sont les parties ? Ai-je déjà vu quelque chose de semblable ? Qu'est-ce qui compte vraiment ? Quelles étapes suivre ? »</p>

    <h2>2. Où les enfants les utilisent déjà</h2>
    <ul>
      <li><strong>En maths :</strong> décomposer 46 + 37 en dizaines et unités, c'est de la décomposition ; remarquer que les chiffres de la table de 9 font toujours 9, c'est repérer un motif ; une technique opératoire est un algorithme.</li>
      <li><strong>En lecture et écriture :</strong> planifier une histoire en début, milieu et fin, c'est décomposer ; repérer les rimes et les familles de mots, c'est trouver des motifs ; résumer, c'est abstraire.</li>
      <li><strong>En sciences :</strong> une expérience est un algorithme, et comparer les résultats revient à chercher des régularités.</li>
      <li><strong>Au quotidien :</strong> s'habiller dans le bon ordre, préparer son cartable avec une liste, indiquer un chemin.</li>
    </ul>
    <p>Nommer ces compétences quand elles apparaissent aide l'enfant à les transférer d'une matière à l'autre : « Tu viens de découper le problème en petites parties, c'est exactement ce que font les programmeurs. »</p>

    <h2>3. Des activités pour chaque compétence</h2>
    <h3>Décomposition</h3>
    <ul>
      <li><strong>Organisez une fête ou un pique-nique</strong> ensemble : invités, nourriture, jeux, horaires. Écrivez chaque partie sur une carte séparée.</li>
      <li><strong>Défi LEGO :</strong> construisez un modèle, puis demandez à l'enfant d'expliquer de quelles petites parties il se compose.</li>
    </ul>
    <h3>Reconnaissance de motifs</h3>
    <ul>
      <li><strong>Chasse aux motifs :</strong> trouvez des motifs qui se répètent sur les carrelages, les tissus et les bâtiments, puis continuez-les sur papier.</li>
      <li><strong>« Qu'est-ce qui vient ensuite ? »</strong> avec des nombres (2, 4, 6…), des formes ou des couleurs. Puis demandez à l'enfant d'inventer un motif pour vous.</li>
    </ul>
    <h3>Abstraction</h3>
    <ul>
      <li><strong>Dessinez un plan simple</strong> du trajet de l'école : quels détails sont nécessaires, lesquels peut-on omettre ?</li>
      <li><strong>Raconter une histoire en une phrase :</strong> après un film ou un livre, demandez « De quoi ça parlait vraiment ? ».</li>
    </ul>
    <h3>Algorithmes</h3>
    <ul>
      <li><strong>Écrire la recette :</strong> après avoir fait un sandwich, écrivez les étapes ensemble, puis suivez-les exactement à la lettre. Les étapes manquantes sautent aux yeux et font rire.</li>
      <li><strong>Le jeu des directions :</strong> guidez un parent aux yeux bandés dans la pièce avec « deux pas en avant, tourne à gauche ».</li>
    </ul>
    <div class="tipbox try"><b>À essayer ce soir</b>Demandez à votre enfant d'écrire les instructions pour se brosser les dents à l'intention d'un robot qui ne sait rien. Puis « soyez le robot » et suivez-les à la lettre. Vous rirez tous les deux des étapes oubliées, et l'enfant comprendra pourquoi des instructions précises comptent.</div>
    <div class="tipbox"><b>Le mot de l'enseignant</b>En maths, les enfants en difficulté face aux problèmes ont souvent les compétences de calcul, mais aucune stratégie pour démarrer. Leur apprendre à se demander « Qu'est-ce que je sais ? De quoi ai-je besoin ? Quelles sont les étapes ? », c'est de la pensée informatique, et cela aide immédiatement.</div>

    <h2>4. À quoi s'attendre à chaque âge</h2>
    <div class="tablewrap"><table>
      <tr><th>Âge</th><th>Capacités habituelles</th><th>Bonnes activités</th></tr>
      <tr><td>4–6 ans</td><td>Suites simples, tri, reproduction de motifs</td><td>Cartes de routine à remettre dans l'ordre, motifs de perles, trier des jouets par couleur ou taille</td></tr>
      <tr><td>6–8 ans</td><td>Inventer des motifs, suivre et donner des consignes pas à pas</td><td>Chasses au trésor avec directions, écrire des recettes simples, premiers codages par blocs</td></tr>
      <tr><td>8–10 ans</td><td>Planifier des tâches en plusieurs étapes, trouver les erreurs dans des consignes</td><td>Énigmes logiques, préparer un projet, corriger les consignes d'un ami</td></tr>
      <tr><td>10–12 ans</td><td>Généraliser des règles, comparer des méthodes</td><td>Jeux de stratégie, inventer les règles d'un jeu, projets de codage plus complexes</td></tr>
    </table></div>

    <h2>5. Des questions qui développent la logique</h2>
    <p>Les questions que vous posez façonnent la façon de penser de votre enfant. Gardez celles-ci sous la main :</p>
    <ul>
      <li>« Peut-on découper ça en plus petites étapes ? »</li>
      <li>« A-t-on déjà vu un problème comme celui-ci ? Qu'avait-on fait ? »</li>
      <li>« Quelle est l'information la plus importante ici ? »</li>
      <li>« Si on recommençait, les mêmes étapes marcheraient-elles ? »</li>
      <li>« À quel endroit exactement ça s'est mal passé ? » (la question la plus utile pour trouver une erreur)</li>
    </ul>
    <div class="tipbox warn"><b>Ne volez pas trop vite au secours</b>Quand votre enfant est bloqué, retenez-vous de donner la réponse tout de suite. Une bonne question suffit généralement à le relancer, et c'est en trouvant seul que l'on apprend.</div>

    <h2>Plus sur Kids Learning Hub</h2>
    <p>Notre jeu <a href="../play/patterns.html?lang=fr">Suites logiques</a> entraîne la reconnaissance de motifs, et nos <a href="../worksheets/sudoku.html?lang=fr">sudokus</a> et <a href="../worksheets/maze.html?lang=fr">labyrinthes</a> à imprimer sont parfaits pour raisonner pas à pas. Quand votre enfant est prêt pour le vrai codage, lisez notre guide sur <a href="coding-for-kids-when-to-start.html">quand et comment commencer à coder</a>.</p>
    ${cta('codokids', 'Guide un robot avec des flèches, des boucles et des conditions à travers 40 énigmes — la pensée informatique de 4 à 13 ans, hors ligne et gratuit.')}

    <p>Découper, repérer les motifs, garder l'essentiel, écrire des étapes claires. Ces quatre habitudes servent bien au-delà de l'informatique : ce sont tout simplement de bonnes façons de penser.</p>`,

    es: `
    <span class="tag code">Programación</span>
    <h1>Pensamiento computacional para niños: cuatro habilidades para resolver problemas sin pantalla</h1>
    ${meta('es', 10)}
    <p class="lede">El pensamiento computacional no trata de ordenadores. Es una forma de resolver problemas que usan los programadores, pero también los cocineros, los ingenieros, los profesores y los niños que hacen los deberes de mates. Se basa en cuatro habilidades — dividir los problemas, detectar patrones, quedarse con lo importante y escribir pasos claros — y cada una se puede practicar en la mesa de la cocina.</p>

    <div class="toc"><b>En esta guía</b><ol>
      <li>Las cuatro habilidades, en palabras sencillas</li>
      <li>Dónde las usan ya los niños</li>
      <li>Actividades para cada habilidad</li>
      <li>Qué esperar a cada edad</li>
      <li>Preguntas que desarrollan la lógica</li>
    </ol></div>

    <h2>1. Las cuatro habilidades, en palabras sencillas</h2>
    <div class="tablewrap"><table>
      <tr><th>Habilidad</th><th>En palabras sencillas</th><th>Ejemplo cotidiano</th></tr>
      <tr><td>Descomposición</td><td>Dividir un problema grande en partes pequeñas</td><td>Ordenar una habitación desordenada: primero juguetes, luego ropa, después libros</td></tr>
      <tr><td>Reconocimiento de patrones</td><td>Notar lo que se repite o se parece</td><td>«Cada vez que sumo 9, las decenas suben y las unidades bajan uno»</td></tr>
      <tr><td>Abstracción</td><td>Quedarse con lo importante e ignorar el resto</td><td>Un plano del metro muestra el orden de las estaciones, no cada calle</td></tr>
      <tr><td>Algoritmos</td><td>Escribir pasos claros que siempre funcionen</td><td>Una receta, o el método de la suma en columna</td></tr>
    </table></div>
    <p>Juntas, estas habilidades ayudan al niño a enfrentarse a un problema nuevo sin agobiarse: «¿Cuáles son las partes? ¿He visto algo parecido? ¿Qué importa de verdad? ¿Qué pasos sigo?».</p>

    <h2>2. Dónde las usan ya los niños</h2>
    <ul>
      <li><strong>En matemáticas:</strong> separar 46 + 37 en decenas y unidades es descomponer; notar que las cifras de la tabla del 9 suman 9 es detectar un patrón; un método escrito es un algoritmo.</li>
      <li><strong>En lectura y escritura:</strong> planificar un cuento en inicio, nudo y desenlace es descomponer; detectar rimas y familias de palabras es reconocer patrones; resumir es abstraer.</li>
      <li><strong>En ciencias:</strong> un experimento es un algoritmo, y comparar resultados es buscar patrones.</li>
      <li><strong>En la vida diaria:</strong> vestirse en el orden correcto, preparar la mochila con una lista, indicar un camino.</li>
    </ul>
    <p>Nombrar estas habilidades cuando aparecen ayuda al niño a llevarlas de una asignatura a otra: «Acabas de dividir el problema en partes pequeñas, justo lo que hacen los programadores».</p>

    <h2>3. Actividades para cada habilidad</h2>
    <h3>Descomposición</h3>
    <ul>
      <li><strong>Organizad una fiesta o un pícnic</strong> juntos: invitados, comida, juegos, horarios. Escribid cada parte en una tarjeta distinta.</li>
      <li><strong>Reto LEGO:</strong> construid un modelo y pide a tu hijo que explique de qué partes más pequeñas está hecho.</li>
    </ul>
    <h3>Reconocimiento de patrones</h3>
    <ul>
      <li><strong>Caza de patrones:</strong> buscad patrones que se repiten en baldosas, telas y edificios, y continuadlos en papel.</li>
      <li><strong>«¿Qué viene después?»</strong> con números (2, 4, 6…), formas o colores. Después pide a tu hijo que invente un patrón para ti.</li>
    </ul>
    <h3>Abstracción</h3>
    <ul>
      <li><strong>Dibujad un plano sencillo</strong> del camino al colegio: ¿qué detalles hacen falta y cuáles se pueden quitar?</li>
      <li><strong>Contar una historia en una frase:</strong> después de una película o un libro, pregunta «¿De qué trataba en realidad?».</li>
    </ul>
    <h3>Algoritmos</h3>
    <ul>
      <li><strong>Escribir la receta:</strong> después de preparar un bocadillo, escribid los pasos juntos y seguidlos exactamente al pie de la letra. Los pasos que faltan saltan a la vista y dan risa.</li>
      <li><strong>Juego de direcciones:</strong> guía a un adulto con los ojos vendados por la habitación con «dos pasos adelante, gira a la izquierda».</li>
    </ul>
    <div class="tipbox try"><b>Pruébalo esta noche</b>Pide a tu hijo que escriba las instrucciones para lavarse los dientes para un robot que no sabe nada. Luego «sé el robot» y síguelas literalmente. Os reiréis de los pasos olvidados, y tu hijo entenderá por qué importan las instrucciones precisas.</div>
    <div class="tipbox"><b>Nota del profesor</b>En matemáticas, los niños a los que les cuestan los problemas suelen saber calcular, pero no tienen una estrategia para empezar. Enseñarles a preguntarse «¿Qué sé? ¿Qué necesito? ¿Cuáles son los pasos?» es pensamiento computacional, y ayuda de inmediato.</div>

    <h2>4. Qué esperar a cada edad</h2>
    <div class="tablewrap"><table>
      <tr><th>Edad</th><th>Capacidades habituales</th><th>Buenas actividades</th></tr>
      <tr><td>4–6 años</td><td>Secuencias sencillas, clasificar, copiar patrones</td><td>Tarjetas de la rutina para ordenar, patrones con cuentas, clasificar juguetes por color o tamaño</td></tr>
      <tr><td>6–8 años</td><td>Crear patrones, seguir y dar instrucciones paso a paso</td><td>Búsquedas del tesoro con direcciones, escribir recetas sencillas, primera programación por bloques</td></tr>
      <tr><td>8–10 años</td><td>Planificar tareas de varios pasos, encontrar errores en instrucciones</td><td>Acertijos lógicos, planificar un proyecto, depurar las instrucciones de un amigo</td></tr>
      <tr><td>10–12 años</td><td>Generalizar reglas, comparar métodos</td><td>Juegos de estrategia, inventar las reglas de un juego, proyectos de programación más complejos</td></tr>
    </table></div>

    <h2>5. Preguntas que desarrollan la lógica</h2>
    <p>Las preguntas que haces moldean la forma de pensar de tu hijo. Tenlas a mano:</p>
    <ul>
      <li>«¿Podemos dividir esto en pasos más pequeños?»</li>
      <li>«¿Hemos visto un problema parecido? ¿Qué hicimos?»</li>
      <li>«¿Cuál es la información más importante aquí?»</li>
      <li>«Si lo hiciéramos otra vez, ¿funcionarían los mismos pasos?»</li>
      <li>«¿En qué punto exacto ha fallado?» (la pregunta más útil para encontrar errores)</li>
    </ul>
    <div class="tipbox warn"><b>No rescates demasiado rápido</b>Cuando tu hijo se atasque, resiste la tentación de darle la respuesta enseguida. Una buena pregunta suele bastar para que siga, y resolverlo por sí mismo es donde ocurre el aprendizaje.</div>

    <h2>Más en Kids Learning Hub</h2>
    <p>Nuestro juego <a href="../play/patterns.html?lang=es">Series lógicas</a> entrena el reconocimiento de patrones, y nuestros <a href="../worksheets/sudoku.html?lang=es">sudokus</a> y <a href="../worksheets/maze.html?lang=es">laberintos</a> imprimibles son perfectos para razonar paso a paso. Cuando tu hijo esté listo para programar de verdad, lee nuestra guía sobre <a href="coding-for-kids-when-to-start.html">cuándo y cómo empezar a programar</a>.</p>
    ${cta('codokids', 'Guía a un robot con flechas, bucles y condiciones a través de 40 retos — pensamiento computacional de 4 a 13 años, sin conexión y gratis.')}

    <p>Dividir, buscar patrones, quedarse con lo importante, escribir pasos claros. Estos cuatro hábitos sirven mucho más allá de la informática: son, sencillamente, buenas maneras de pensar.</p>`,

    ar: `
    <span class="tag code">البرمجة</span>
    <h1>التفكير الحاسوبي للأطفال: أربع مهارات لحلّ المشكلات نتدرّب عليها دون شاشة</h1>
    ${meta('ar', 10)}
    <p class="lede">التفكير الحاسوبي لا يتعلّق بالحواسيب. إنه طريقة في حلّ المشكلات يستعملها المبرمجون، ويستعملها أيضًا الطهاة والمهندسون والمعلّمون والأطفال وهم ينجزون واجبات الرياضيات. ويقوم على أربع مهارات — تفكيك المشكلة، واكتشاف الأنماط، والاحتفاظ بالأهمّ، وكتابة خطوات واضحة — ويمكن التدرّب على كل واحدة منها حول مائدة المطبخ.</p>

    <div class="toc"><b>في هذا الدليل</b><ol>
      <li>المهارات الأربع بكلمات بسيطة</li>
      <li>أين يستعملها الأطفال أصلًا</li>
      <li>أنشطة لكل مهارة</li>
      <li>ماذا نتوقّع في كل عمر</li>
      <li>أسئلة تبني التفكير المنطقي</li>
    </ol></div>

    <h2>1. المهارات الأربع بكلمات بسيطة</h2>
    <div class="tablewrap"><table>
      <tr><th>المهارة</th><th>بكلمات بسيطة</th><th>مثال من الحياة اليومية</th></tr>
      <tr><td>التفكيك</td><td>تقسيم مشكلة كبيرة إلى أجزاء صغيرة</td><td>ترتيب غرفة فوضوية: الألعاب أولًا، ثم الملابس، ثم الكتب</td></tr>
      <tr><td>اكتشاف الأنماط</td><td>ملاحظة ما يتكرّر أو يتشابه</td><td>«كلما أضفت 9، تزيد العشرات وتنقص الوحدات بواحد»</td></tr>
      <tr><td>التجريد</td><td>الاحتفاظ بالمهمّ وإهمال الباقي</td><td>خريطة المترو تُظهر ترتيب المحطّات لا كل الشوارع</td></tr>
      <tr><td>الخوارزميات</td><td>كتابة خطوات واضحة تنجح دائمًا</td><td>وصفة طبخ، أو طريقة الجمع العمودي</td></tr>
    </table></div>
    <p>معًا، تساعد هذه المهارات الطفل على مواجهة مشكلة جديدة دون ارتباك: «ما أجزاؤها؟ هل رأيت شيئًا يشبهها من قبل؟ ما المهمّ هنا فعلًا؟ ما الخطوات التي أتّبعها؟».</p>

    <h2>2. أين يستعملها الأطفال أصلًا</h2>
    <ul>
      <li><strong>في الرياضيات:</strong> تقسيم 46 + 37 إلى عشرات ووحدات تفكيك، وملاحظة أن أرقام نتائج جدول التسعة مجموعها 9 اكتشاف لنمط، وطريقة الحساب الكتابية خوارزمية.</li>
      <li><strong>في القراءة والكتابة:</strong> تخطيط قصة ببداية ووسط ونهاية تفكيك، واكتشاف القوافي وعائلات الكلمات أنماط، والتلخيص تجريد.</li>
      <li><strong>في العلوم:</strong> التجربة خوارزمية، ومقارنة النتائج بحث عن أنماط.</li>
      <li><strong>في الحياة اليومية:</strong> ارتداء الملابس بالترتيب الصحيح، وتحضير المحفظة بقائمة، ووصف طريق لشخص ما.</li>
    </ul>
    <p>تسمية هذه المهارات حين تظهر تساعد الطفل على نقلها من مادة إلى أخرى: «لقد قسّمت المشكلة إلى أجزاء صغيرة، وهذا بالضبط ما يفعله المبرمجون».</p>

    <h2>3. أنشطة لكل مهارة</h2>
    <h3>التفكيك</h3>
    <ul>
      <li><strong>نظّما حفلة أو نزهة</strong> معًا: الضيوف، والطعام، والألعاب، والمواعيد. اكتبا كل جزء على بطاقة مستقلّة.</li>
      <li><strong>تحدّي الليغو:</strong> ابنيا نموذجًا، ثم اطلب من طفلك أن يشرح من أي أجزاء صغيرة يتكوّن.</li>
    </ul>
    <h3>اكتشاف الأنماط</h3>
    <ul>
      <li><strong>صيد الأنماط:</strong> ابحثا عن أنماط متكرّرة في البلاط والأقمشة والمباني، ثم أكملاها على الورق.</li>
      <li><strong>«ماذا يأتي بعد؟»</strong> بالأعداد (2، 4، 6…) أو الأشكال أو الألوان، ثم اطلب من طفلك أن يخترع نمطًا لك.</li>
    </ul>
    <h3>التجريد</h3>
    <ul>
      <li><strong>ارسما خريطة بسيطة</strong> للطريق إلى المدرسة: ما التفاصيل الضرورية؟ وما الذي يمكن حذفه؟</li>
      <li><strong>احكِ القصة في جملة واحدة:</strong> بعد فيلم أو كتاب اسأل «عمّ كانت تتحدّث حقًا؟».</li>
    </ul>
    <h3>الخوارزميات</h3>
    <ul>
      <li><strong>اكتبا الوصفة:</strong> بعد تحضير شطيرة، اكتبا الخطوات معًا ثم نفّذاها حرفيًا كما كُتبت. فتظهر الخطوات الناقصة وتُضحك الجميع.</li>
      <li><strong>لعبة الاتجاهات:</strong> وجّه أحد الوالدين معصوب العينين في الغرفة بعبارات مثل «خطوتان إلى الأمام، استدِر يسارًا».</li>
    </ul>
    <div class="tipbox try"><b>جرّب هذا الليلة</b>اطلب من طفلك أن يكتب تعليمات تنظيف الأسنان لروبوت لا يعرف شيئًا، ثم «كن أنت الروبوت» ونفّذها حرفيًا. ستضحكان معًا من الخطوات المنسية، وسيفهم طفلك لماذا تهمّ التعليمات الدقيقة.</div>
    <div class="tipbox"><b>ملاحظة الأستاذ</b>في حصص الرياضيات، كثيرًا ما يملك الأطفال المتعثّرون في حلّ المسائل مهارات الحساب، لكنهم يفتقدون استراتيجية للبدء. تعليمهم أن يسألوا «ماذا أعرف؟ ماذا أحتاج؟ ما الخطوات؟» هو تفكير حاسوبي، وهو يساعد فورًا.</div>

    <h2>4. ماذا نتوقّع في كل عمر</h2>
    <div class="tablewrap"><table>
      <tr><th>العمر</th><th>القدرات المعتادة</th><th>أنشطة مناسبة</th></tr>
      <tr><td>4–6 سنوات</td><td>متتاليات بسيطة، والتصنيف، ونسخ الأنماط</td><td>بطاقات الروتين اليومي لترتيبها، وأنماط الخرز، وتصنيف الألعاب حسب اللون أو الحجم</td></tr>
      <tr><td>6–8 سنوات</td><td>اختراع الأنماط، واتّباع التعليمات خطوة بخطوة وإعطاؤها</td><td>البحث عن الكنز بالاتجاهات، وكتابة وصفات بسيطة، وأول برمجة بالكتل</td></tr>
      <tr><td>8–10 سنوات</td><td>التخطيط لمهام متعدّدة الخطوات، وإيجاد الأخطاء في التعليمات</td><td>الألغاز المنطقية، والتخطيط لمشروع، وتصحيح تعليمات صديق</td></tr>
      <tr><td>10–12 سنة</td><td>تعميم القواعد، ومقارنة الطرق المختلفة</td><td>ألعاب الاستراتيجية، وتصميم قواعد لعبة، ومشاريع برمجة أكثر تعقيدًا</td></tr>
    </table></div>

    <h2>5. أسئلة تبني التفكير المنطقي</h2>
    <p>الأسئلة التي تطرحها تشكّل طريقة تفكير طفلك. احتفظ بهذه في متناولك:</p>
    <ul>
      <li>«هل يمكن أن نقسّم هذا إلى خطوات أصغر؟»</li>
      <li>«هل رأينا مشكلة كهذه من قبل؟ ماذا فعلنا؟»</li>
      <li>«ما أهمّ معلومة هنا؟»</li>
      <li>«لو أعدنا الأمر، هل ستنجح الخطوات نفسها؟»</li>
      <li>«في أي موضع بالضبط حدث الخطأ؟» (أنفع سؤال لإيجاد الأخطاء)</li>
    </ul>
    <div class="tipbox warn"><b>لا تُسرع إلى الإنقاذ</b>حين يتعثّر طفلك، قاوم إعطاءه الجواب فورًا. فسؤال جيد واحد يكفي غالبًا ليعود إلى الحركة، وحلّ المشكلة بنفسه هو المكان الذي يحدث فيه التعلّم.</div>

    <h2>المزيد على Kids Learning Hub</h2>
    <p>لعبتنا <a href="../play/patterns.html?lang=ar">المتتاليات</a> تدرّب على اكتشاف الأنماط، و<a href="../worksheets/sudoku.html?lang=ar">السودوكو</a> و<a href="../worksheets/maze.html?lang=ar">المتاهات</a> القابلة للطباعة مثالية للتفكير المنطقي خطوة بخطوة. وحين يصبح طفلك مستعدًا للبرمجة الحقيقية، اقرأ دليلنا حول <a href="coding-for-kids-when-to-start.html">متى وكيف نبدأ البرمجة</a>.</p>
    ${cta('codokids', 'وجّه روبوتًا بالأسهم والحلقات والشروط عبر 40 لغزًا — التفكير الحاسوبي من 4 إلى 13 سنة، دون إنترنت ومجانًا.')}

    <p>فكّك المشكلة، وابحث عن الأنماط، واحتفظ بالمهمّ، واكتب خطوات واضحة. هذه العادات الأربع تنفع الطفل أبعد بكثير من الحاسوب، فهي ببساطة طرق جيدة للتفكير.</p>`,
  },

  faq: {
    en: [['What is computational thinking for kids?', 'A problem-solving approach based on four skills: breaking problems into parts, spotting patterns, focusing on the important information and writing clear step-by-step instructions. It is used in coding but also in maths, reading, science and daily life.'],
         ['Can children learn computational thinking without a computer?', 'Yes. Planning a picnic, continuing patterns, drawing simple maps and writing instructions for a "robot" parent all practise the same skills used in programming.'],
         ['Is computational thinking the same as coding?', 'No. Coding is one way to use computational thinking. The thinking skills come first and help children in every subject; coding then gives them a fun place to apply them.']],
    fr: [['Qu’est-ce que la pensée informatique pour les enfants ?', 'Une démarche de résolution de problèmes fondée sur quatre compétences : découper un problème, repérer des motifs, garder l’information importante et écrire des consignes claires pas à pas. On l’utilise en codage, mais aussi en maths, en lecture, en sciences et au quotidien.'],
         ['Peut-on développer la pensée informatique sans ordinateur ?', 'Oui. Organiser un pique-nique, continuer des motifs, dessiner un plan simple ou écrire les instructions d’un parent-robot font travailler les mêmes compétences que la programmation.'],
         ['La pensée informatique, est-ce la même chose que le codage ?', 'Non. Le codage est une façon d’utiliser la pensée informatique. Les compétences de réflexion viennent d’abord et aident dans toutes les matières ; le codage offre ensuite un terrain amusant pour les appliquer.']],
    es: [['¿Qué es el pensamiento computacional para niños?', 'Un enfoque para resolver problemas basado en cuatro habilidades: dividir el problema, detectar patrones, quedarse con la información importante y escribir instrucciones claras paso a paso. Se usa al programar, pero también en matemáticas, lectura, ciencias y la vida diaria.'],
         ['¿Se puede aprender pensamiento computacional sin ordenador?', 'Sí. Planificar un pícnic, continuar patrones, dibujar planos sencillos o escribir instrucciones para un adulto «robot» practican las mismas habilidades que la programación.'],
         ['¿Es lo mismo pensamiento computacional que programar?', 'No. Programar es una forma de usar el pensamiento computacional. Las habilidades de pensamiento van primero y ayudan en todas las asignaturas; la programación ofrece después un lugar divertido para aplicarlas.']],
    ar: [['ما التفكير الحاسوبي للأطفال؟', 'منهج لحلّ المشكلات يقوم على أربع مهارات: تفكيك المشكلة، واكتشاف الأنماط، والتركيز على المعلومة المهمّة، وكتابة تعليمات واضحة خطوة بخطوة. ويُستعمل في البرمجة، وأيضًا في الرياضيات والقراءة والعلوم والحياة اليومية.'],
         ['هل يمكن تعلّم التفكير الحاسوبي دون حاسوب؟', 'نعم. تنظيم نزهة، وإكمال الأنماط، ورسم خرائط بسيطة، وكتابة تعليمات «للوالد الروبوت» كلها تدرّب على المهارات نفسها المستعملة في البرمجة.'],
         ['هل التفكير الحاسوبي هو البرمجة نفسها؟', 'لا. البرمجة طريقة من طرق استعمال التفكير الحاسوبي. فمهارات التفكير تأتي أولًا وتساعد في كل المواد، ثم تمنح البرمجة مجالًا ممتعًا لتطبيقها.']],
  },
};
