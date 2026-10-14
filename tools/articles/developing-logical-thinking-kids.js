/* Deepened 2026-10 (was ~450 words). Angle: reasoning itself (classify, compare,
   if-then, deduce, justify); computational thinking has its own article. */
const { cta, meta } = require('./_cta.js');

module.exports = {
  slug: 'developing-logical-thinking-kids',
  date: '2026-08-01',
  minutes: 10,

  dataTitle: {
    en: 'Developing Logical Thinking in Children: Activities, Puzzles and Games | Kids Learning Hub',
    fr: 'Développer la logique chez l’enfant : activités, énigmes et jeux | Kids Learning Hub',
    es: 'Desarrollar el pensamiento lógico en niños: actividades, acertijos y juegos | Kids Learning Hub',
    ar: 'تنمية التفكير المنطقي عند الأطفال: أنشطة وألغاز وألعاب | Kids Learning Hub',
  },

  body: {
    en: `
    <span class="tag math">Math</span>
    <h1>Developing Logical Thinking in Children: Activities, Puzzles and Games</h1>
    ${meta('en', 10)}
    <p class="lede">Logical thinking is the ability to reason step by step: to sort and compare, to see that "if this, then that", to draw a conclusion from clues and to explain how you know. It is the backbone of mathematics, but also of reading comprehension, science and good decisions. Children are natural reasoners; our job is to give them interesting problems and to keep asking "how do you know?"</p>

    <div class="toc"><b>In this guide</b><ol>
      <li>The building blocks of logical thinking</li>
      <li>What to expect at each age</li>
      <li>Everyday activities</li>
      <li>A logic puzzle to solve together</li>
      <li>Games that build reasoning</li>
      <li>The most powerful question</li>
    </ol></div>

    <h2>1. The building blocks of logical thinking</h2>
    <div class="tablewrap"><table>
      <tr><th>Skill</th><th>What it means</th><th>Example</th></tr>
      <tr><td>Classifying</td><td>Grouping things by what they share</td><td>Sorting buttons by colour, then by number of holes</td></tr>
      <tr><td>Comparing and ordering</td><td>Bigger, smaller, first, last</td><td>Putting five sticks in order of length</td></tr>
      <tr><td>"If… then…"</td><td>Seeing consequences</td><td>"If it rains, the ground gets wet. The ground is dry, so…"</td></tr>
      <tr><td>Deduction</td><td>Reaching a conclusion from clues</td><td>Guessing a hidden card from yes/no answers</td></tr>
      <tr><td>Justifying</td><td>Explaining why an answer is right</td><td>"It can't be 7 because 7 is odd."</td></tr>
    </table></div>

    <h2>2. What to expect at each age</h2>
    <div class="tablewrap"><table>
      <tr><th>Age</th><th>Typical reasoning</th><th>Good challenges</th></tr>
      <tr><td>4–6</td><td>Sorting by one feature, simple patterns, cause and effect</td><td>Odd one out with pictures, matching games, "what happens next?"</td></tr>
      <tr><td>6–8</td><td>Sorting by two features, ordering, first "because" explanations</td><td>Simple logic grids, Guess Who-style games, number puzzles</td></tr>
      <tr><td>8–10</td><td>Combining several clues, checking answers, spotting contradictions</td><td>Sudoku, deduction puzzles, strategy board games</td></tr>
      <tr><td>10–12</td><td>Abstract rules, testing ideas, "what if" reasoning</td><td>Chess, harder logic puzzles, designing their own puzzles</td></tr>
    </table></div>

    <h2>3. Everyday activities</h2>
    <ul>
      <li><strong>Odd one out:</strong> "apple, banana, carrot, pear — which doesn't belong?" Accept any answer that is well justified: carrot (not a fruit) or banana (not round) can both be right.</li>
      <li><strong>Sorting the laundry or the shopping:</strong> by colour, by owner, by type, then ask your child to invent a new sorting rule.</li>
      <li><strong>Ordering:</strong> line up family members by height, or toy cars by size, then ask "Who is between…?"</li>
      <li><strong>Cause and effect at the table:</strong> "What would happen if we left the ice cream out of the freezer?"</li>
      <li><strong>Spot the nonsense:</strong> say a silly sentence ("I put my shoes on before my socks") and let your child explain what's wrong.</li>
    </ul>
    <div class="tipbox"><b>Teacher's note</b>In maths, the children who make the most progress are not always the fastest calculators. They are the ones who check whether an answer makes sense: "37 + 45 can't be 712, that's far too big." Ask for an estimate before every calculation and this habit grows quickly.</div>

    <h2>4. A logic puzzle to solve together</h2>
    <p>Here is a simple deduction puzzle for ages 7 and up. Draw a small grid or use three cups to keep track.</p>
    <p><strong>Lina, Omar and Sara each have one pet: a cat, a dog or a fish.</strong></p>
    <ul>
      <li>Omar's pet cannot swim.</li>
      <li>Sara is allergic to cats.</li>
      <li>Lina's pet lives in water.</li>
    </ul>
    <p>Who has which pet? <em>Solution:</em> Lina's pet lives in water, so Lina has the fish. Sara cannot have the cat, so Sara has the dog. That leaves the cat for Omar, and a cat cannot swim, which matches the first clue.</p>
    <div class="tipbox try"><b>Try this tonight</b>Solve the puzzle above together, then ask your child to invent one for you with three people and three objects. Making a puzzle that has exactly one answer is harder than solving one, and teaches a lot.</div>

    <h2>5. Games that build reasoning</h2>
    <ul>
      <li><strong>Guess Who-style games:</strong> asking questions that eliminate half the options at once.</li>
      <li><strong>Code-breaking games</strong> like Mastermind: test a guess, read the feedback, adjust.</li>
      <li><strong>Connect Four and noughts and crosses:</strong> thinking one move ahead.</li>
      <li><strong>Sudoku:</strong> pure deduction, from easy 4×4 grids to classic 9×9.</li>
      <li><strong>Tangrams and pattern blocks:</strong> spatial reasoning and trial and improvement.</li>
      <li><strong>Chess (from about 6 or 7):</strong> planning, consequences and patience.</li>
    </ul>

    <h2>6. The most powerful question</h2>
    <p>"How do you know?" turns any activity into a reasoning lesson. Ask it after right answers as well as wrong ones, so it never feels like a trap. Help your child use reasoning words: <em>because, so, if… then, it can't be… because, that means</em>. Over time, they start asking themselves the question, which is exactly what logical thinkers do.</p>
    <div class="tipbox warn"><b>Let them struggle a little</b>A puzzle that is solved immediately teaches little. If your child is stuck, give a small hint ("What do you know for sure?") rather than the answer. The effort of reasoning is where the learning happens.</div>

    <h2>Logic resources on Kids Learning Hub</h2>
    <p>Print our <a href="../worksheets/sudoku.html">kids' sudoku</a> (4×4 and 6×6) and <a href="../worksheets/maze.html">mazes</a>, play the <a href="../play/patterns.html">Patterns</a> game, and for problem-solving with step-by-step instructions read our guide to <a href="fostering-computational-thinking-kids.html">computational thinking</a>.</p>
    ${cta('mathokids', 'Logic puzzles, patterns and maths challenges that grow with your child — offline and free.')}

    <p>Sort, compare, deduce and explain. With a few puzzles, some good games and the question "how do you know?", logical thinking becomes part of everyday life.</p>`,

    fr: `
    <span class="tag math">Maths</span>
    <h1>Développer la logique chez l'enfant : activités, énigmes et jeux</h1>
    ${meta('fr', 10)}
    <p class="lede">La pensée logique, c'est la capacité à raisonner étape par étape : trier et comparer, voir que « si ceci, alors cela », tirer une conclusion à partir d'indices et expliquer comment on le sait. C'est la colonne vertébrale des mathématiques, mais aussi de la compréhension en lecture, des sciences et des bonnes décisions. Les enfants raisonnent naturellement ; notre rôle est de leur proposer des problèmes intéressants et de demander sans cesse « comment le sais-tu ? ».</p>

    <div class="toc"><b>Dans ce guide</b><ol>
      <li>Les briques de la pensée logique</li>
      <li>À quoi s'attendre à chaque âge</li>
      <li>Des activités du quotidien</li>
      <li>Une énigme logique à résoudre ensemble</li>
      <li>Des jeux qui développent le raisonnement</li>
      <li>La question la plus puissante</li>
    </ol></div>

    <h2>1. Les briques de la pensée logique</h2>
    <div class="tablewrap"><table>
      <tr><th>Compétence</th><th>Ce que cela veut dire</th><th>Exemple</th></tr>
      <tr><td>Classer</td><td>Regrouper selon ce qu'on a en commun</td><td>Trier des boutons par couleur, puis par nombre de trous</td></tr>
      <tr><td>Comparer et ranger</td><td>Plus grand, plus petit, premier, dernier</td><td>Ranger cinq bâtons du plus court au plus long</td></tr>
      <tr><td>« Si… alors… »</td><td>Voir les conséquences</td><td>« S'il pleut, le sol est mouillé. Le sol est sec, donc… »</td></tr>
      <tr><td>Déduction</td><td>Conclure à partir d'indices</td><td>Deviner une carte cachée grâce à des réponses oui/non</td></tr>
      <tr><td>Justifier</td><td>Expliquer pourquoi une réponse est juste</td><td>« Ça ne peut pas être 7, car 7 est impair. »</td></tr>
    </table></div>

    <h2>2. À quoi s'attendre à chaque âge</h2>
    <div class="tablewrap"><table>
      <tr><th>Âge</th><th>Raisonnement habituel</th><th>Bons défis</th></tr>
      <tr><td>4–6 ans</td><td>Trier selon un critère, motifs simples, cause et effet</td><td>L'intrus en images, jeux d'association, « que se passe-t-il ensuite ? »</td></tr>
      <tr><td>6–8 ans</td><td>Trier selon deux critères, ranger, premières explications avec « parce que »</td><td>Grilles logiques simples, jeux de type Qui est-ce ?, énigmes de nombres</td></tr>
      <tr><td>8–10 ans</td><td>Combiner plusieurs indices, vérifier, repérer les contradictions</td><td>Sudoku, énigmes de déduction, jeux de société de stratégie</td></tr>
      <tr><td>10–12 ans</td><td>Règles abstraites, tester des idées, raisonner sur « et si… »</td><td>Échecs, énigmes plus difficiles, inventer ses propres énigmes</td></tr>
    </table></div>

    <h2>3. Des activités du quotidien</h2>
    <ul>
      <li><strong>Trouve l'intrus :</strong> « pomme, banane, carotte, poire — lequel ne va pas ? ». Acceptez toute réponse bien justifiée : la carotte (pas un fruit) ou la banane (pas ronde) peuvent toutes deux être justes.</li>
      <li><strong>Trier le linge ou les courses :</strong> par couleur, par propriétaire, par type, puis demandez à l'enfant d'inventer une nouvelle règle de tri.</li>
      <li><strong>Ranger :</strong> alignez la famille par taille, ou des petites voitures par longueur, puis demandez « Qui est entre… ? ».</li>
      <li><strong>Cause et effet à table :</strong> « Que se passerait-il si on laissait la glace hors du congélateur ? »</li>
      <li><strong>Repère l'absurdité :</strong> dites une phrase farfelue (« J'ai mis mes chaussures avant mes chaussettes ») et laissez l'enfant expliquer ce qui cloche.</li>
    </ul>
    <div class="tipbox"><b>Le mot de l'enseignant</b>En maths, les enfants qui progressent le plus ne sont pas toujours les plus rapides en calcul. Ce sont ceux qui vérifient si une réponse a du sens : « 37 + 45 ne peut pas faire 712, c'est beaucoup trop grand. » Demandez une estimation avant chaque calcul, et cette habitude grandit vite.</div>

    <h2>4. Une énigme logique à résoudre ensemble</h2>
    <p>Voici une énigme de déduction simple, dès 7 ans. Dessinez un petit tableau ou utilisez trois gobelets pour vous repérer.</p>
    <p><strong>Lina, Omar et Sara ont chacun un animal : un chat, un chien ou un poisson.</strong></p>
    <ul>
      <li>L'animal d'Omar ne sait pas nager.</li>
      <li>Sara est allergique aux chats.</li>
      <li>L'animal de Lina vit dans l'eau.</li>
    </ul>
    <p>Qui a quel animal ? <em>Solution :</em> l'animal de Lina vit dans l'eau, donc Lina a le poisson. Sara ne peut pas avoir le chat, donc Sara a le chien. Il reste le chat pour Omar, et un chat ne sait pas nager, ce qui correspond au premier indice.</p>
    <div class="tipbox try"><b>À essayer ce soir</b>Résolvez l'énigme ensemble, puis demandez à votre enfant d'en inventer une pour vous avec trois personnes et trois objets. Fabriquer une énigme qui n'a qu'une seule réponse est plus difficile que d'en résoudre une, et apprend énormément.</div>

    <h2>5. Des jeux qui développent le raisonnement</h2>
    <ul>
      <li><strong>Les jeux de type Qui est-ce ? :</strong> poser des questions qui éliminent la moitié des possibilités d'un coup.</li>
      <li><strong>Les jeux de code</strong> comme le Mastermind : tester une hypothèse, lire la réponse, ajuster.</li>
      <li><strong>Puissance 4 et morpion :</strong> penser un coup à l'avance.</li>
      <li><strong>Le sudoku :</strong> de la déduction pure, des grilles faciles de 4×4 au classique 9×9.</li>
      <li><strong>Tangrams et formes géométriques :</strong> raisonnement spatial, essais et améliorations.</li>
      <li><strong>Les échecs (vers 6–7 ans) :</strong> planifier, anticiper les conséquences, être patient.</li>
    </ul>

    <h2>6. La question la plus puissante</h2>
    <p>« Comment le sais-tu ? » transforme n'importe quelle activité en leçon de raisonnement. Posez-la après les bonnes réponses comme après les erreurs, pour qu'elle ne ressemble jamais à un piège. Aidez l'enfant à utiliser les mots du raisonnement : <em>parce que, donc, si… alors, ça ne peut pas être… car, cela veut dire que</em>. Avec le temps, il se pose la question tout seul, exactement comme le fait un esprit logique.</p>
    <div class="tipbox warn"><b>Laissez-le chercher un peu</b>Une énigme résolue immédiatement apprend peu. Si l'enfant bloque, donnez un petit indice (« Qu'est-ce que tu sais à coup sûr ? ») plutôt que la réponse. C'est dans l'effort de raisonnement que l'on apprend.</div>

    <h2>Des ressources de logique sur Kids Learning Hub</h2>
    <p>Imprimez nos <a href="../worksheets/sudoku.html?lang=fr">sudokus pour enfants</a> (4×4 et 6×6) et nos <a href="../worksheets/maze.html?lang=fr">labyrinthes</a>, jouez aux <a href="../play/patterns.html?lang=fr">Suites logiques</a>, et pour résoudre des problèmes avec des étapes claires, lisez notre guide sur <a href="fostering-computational-thinking-kids.html">la pensée informatique</a>.</p>
    ${cta('mathokids', 'Énigmes, suites logiques et défis de maths qui grandissent avec votre enfant — hors ligne et gratuit.')}

    <p>Trier, comparer, déduire, expliquer. Avec quelques énigmes, de bons jeux et la question « comment le sais-tu ? », la logique entre dans la vie de tous les jours.</p>`,

    es: `
    <span class="tag math">Matemáticas</span>
    <h1>Desarrollar el pensamiento lógico en los niños: actividades, acertijos y juegos</h1>
    ${meta('es', 10)}
    <p class="lede">El pensamiento lógico es la capacidad de razonar paso a paso: clasificar y comparar, ver que «si pasa esto, entonces aquello», sacar una conclusión a partir de pistas y explicar cómo lo sabes. Es la columna vertebral de las matemáticas, pero también de la comprensión lectora, las ciencias y las buenas decisiones. Los niños razonan de forma natural; nuestro papel es darles problemas interesantes y preguntar una y otra vez «¿cómo lo sabes?».</p>

    <div class="toc"><b>En esta guía</b><ol>
      <li>Las piezas del pensamiento lógico</li>
      <li>Qué esperar a cada edad</li>
      <li>Actividades cotidianas</li>
      <li>Un acertijo lógico para resolver juntos</li>
      <li>Juegos que desarrollan el razonamiento</li>
      <li>La pregunta más poderosa</li>
    </ol></div>

    <h2>1. Las piezas del pensamiento lógico</h2>
    <div class="tablewrap"><table>
      <tr><th>Habilidad</th><th>Qué significa</th><th>Ejemplo</th></tr>
      <tr><td>Clasificar</td><td>Agrupar según lo que tienen en común</td><td>Separar botones por color y luego por número de agujeros</td></tr>
      <tr><td>Comparar y ordenar</td><td>Mayor, menor, primero, último</td><td>Ordenar cinco palitos de más corto a más largo</td></tr>
      <tr><td>«Si… entonces…»</td><td>Ver las consecuencias</td><td>«Si llueve, el suelo se moja. El suelo está seco, así que…»</td></tr>
      <tr><td>Deducción</td><td>Llegar a una conclusión con pistas</td><td>Adivinar una carta escondida con respuestas de sí o no</td></tr>
      <tr><td>Justificar</td><td>Explicar por qué una respuesta es correcta</td><td>«No puede ser 7 porque 7 es impar».</td></tr>
    </table></div>

    <h2>2. Qué esperar a cada edad</h2>
    <div class="tablewrap"><table>
      <tr><th>Edad</th><th>Razonamiento habitual</th><th>Buenos retos</th></tr>
      <tr><td>4–6 años</td><td>Clasificar por un criterio, patrones sencillos, causa y efecto</td><td>El intruso con imágenes, juegos de emparejar, «¿qué pasa después?»</td></tr>
      <tr><td>6–8 años</td><td>Clasificar por dos criterios, ordenar, primeras explicaciones con «porque»</td><td>Tablas lógicas sencillas, juegos tipo ¿Quién es quién?, acertijos numéricos</td></tr>
      <tr><td>8–10 años</td><td>Combinar varias pistas, comprobar respuestas, detectar contradicciones</td><td>Sudoku, acertijos de deducción, juegos de mesa de estrategia</td></tr>
      <tr><td>10–12 años</td><td>Reglas abstractas, poner ideas a prueba, razonar con «¿y si…?»</td><td>Ajedrez, acertijos más difíciles, inventar sus propios acertijos</td></tr>
    </table></div>

    <h2>3. Actividades cotidianas</h2>
    <ul>
      <li><strong>Encuentra el intruso:</strong> «manzana, plátano, zanahoria, pera, ¿cuál no encaja?». Acepta cualquier respuesta bien justificada: la zanahoria (no es fruta) o el plátano (no es redondo) pueden ser correctas.</li>
      <li><strong>Clasificar la ropa o la compra:</strong> por color, por dueño, por tipo, y luego pide que invente una nueva regla de clasificación.</li>
      <li><strong>Ordenar:</strong> poned en fila a la familia por altura, o los coches de juguete por tamaño, y pregunta «¿Quién está entre…?».</li>
      <li><strong>Causa y efecto en la mesa:</strong> «¿Qué pasaría si dejáramos el helado fuera del congelador?».</li>
      <li><strong>Detecta el disparate:</strong> di una frase absurda («Me puse los zapatos antes que los calcetines») y deja que explique qué falla.</li>
    </ul>
    <div class="tipbox"><b>Nota del profesor</b>En matemáticas, los niños que más progresan no siempre son los que calculan más rápido. Son los que comprueban si una respuesta tiene sentido: «37 + 45 no puede ser 712, es demasiado grande». Pide una estimación antes de cada cálculo y este hábito crece rápido.</div>

    <h2>4. Un acertijo lógico para resolver juntos</h2>
    <p>Aquí tienes un acertijo de deducción sencillo, a partir de 7 años. Dibuja una tablita o usa tres vasos para no perderos.</p>
    <p><strong>Lina, Omar y Sara tienen cada uno una mascota: un gato, un perro o un pez.</strong></p>
    <ul>
      <li>La mascota de Omar no sabe nadar.</li>
      <li>Sara es alérgica a los gatos.</li>
      <li>La mascota de Lina vive en el agua.</li>
    </ul>
    <p>¿Quién tiene qué mascota? <em>Solución:</em> la mascota de Lina vive en el agua, así que Lina tiene el pez. Sara no puede tener el gato, así que tiene el perro. Queda el gato para Omar, y un gato no nada, lo que encaja con la primera pista.</p>
    <div class="tipbox try"><b>Pruébalo esta noche</b>Resolved el acertijo juntos y luego pide a tu hijo que invente uno para ti con tres personas y tres objetos. Crear un acertijo con una sola respuesta es más difícil que resolverlo, y enseña muchísimo.</div>

    <h2>5. Juegos que desarrollan el razonamiento</h2>
    <ul>
      <li><strong>Juegos tipo ¿Quién es quién?:</strong> hacer preguntas que descarten la mitad de las opciones de golpe.</li>
      <li><strong>Juegos de descifrar códigos</strong> como Mastermind: probar, leer la respuesta, ajustar.</li>
      <li><strong>Conecta 4 y tres en raya:</strong> pensar una jugada por delante.</li>
      <li><strong>Sudoku:</strong> deducción pura, desde cuadrículas fáciles de 4×4 hasta el clásico 9×9.</li>
      <li><strong>Tangram y bloques de figuras:</strong> razonamiento espacial, probar y mejorar.</li>
      <li><strong>Ajedrez (desde los 6 o 7 años):</strong> planificar, prever consecuencias y tener paciencia.</li>
    </ul>

    <h2>6. La pregunta más poderosa</h2>
    <p>«¿Cómo lo sabes?» convierte cualquier actividad en una lección de razonamiento. Hazla tanto después de los aciertos como de los errores, para que nunca parezca una trampa. Ayuda a tu hijo a usar las palabras del razonamiento: <em>porque, así que, si… entonces, no puede ser… porque, eso significa que</em>. Con el tiempo empieza a hacerse la pregunta a sí mismo, que es justo lo que hace una mente lógica.</p>
    <div class="tipbox warn"><b>Déjale esforzarse un poco</b>Un acertijo que se resuelve al instante enseña poco. Si tu hijo se atasca, dale una pista pequeña («¿Qué sabes seguro?») en lugar de la respuesta. El esfuerzo de razonar es donde ocurre el aprendizaje.</div>

    <h2>Recursos de lógica en Kids Learning Hub</h2>
    <p>Imprime nuestros <a href="../worksheets/sudoku.html?lang=es">sudokus infantiles</a> (4×4 y 6×6) y <a href="../worksheets/maze.html?lang=es">laberintos</a>, juega a <a href="../play/patterns.html?lang=es">Series lógicas</a> y, para resolver problemas con pasos claros, lee nuestra guía sobre <a href="fostering-computational-thinking-kids.html">el pensamiento computacional</a>.</p>
    ${cta('mathokids', 'Acertijos, series lógicas y retos de matemáticas que crecen con tu hijo — sin conexión y gratis.')}

    <p>Clasificar, comparar, deducir y explicar. Con unos cuantos acertijos, buenos juegos y la pregunta «¿cómo lo sabes?», la lógica entra en la vida diaria.</p>`,

    ar: `
    <span class="tag math">الرياضيات</span>
    <h1>تنمية التفكير المنطقي عند الأطفال: أنشطة وألغاز وألعاب</h1>
    ${meta('ar', 10)}
    <p class="lede">التفكير المنطقي هو القدرة على الاستدلال خطوة بخطوة: التصنيف والمقارنة، ورؤية أنه «إذا حدث هذا فسيحدث ذاك»، واستخلاص نتيجة من القرائن، وشرح كيف عرفنا. إنه العمود الفقري للرياضيات، ولفهم المقروء والعلوم والقرارات السليمة أيضًا. والأطفال يستدلّون بطبيعتهم، ودورنا أن نقدّم لهم مسائل مثيرة وأن نسأل باستمرار: «كيف عرفت؟».</p>

    <div class="toc"><b>في هذا الدليل</b><ol>
      <li>لبنات التفكير المنطقي</li>
      <li>ماذا نتوقّع في كل عمر</li>
      <li>أنشطة يومية</li>
      <li>لغز منطقي نحلّه معًا</li>
      <li>ألعاب تبني الاستدلال</li>
      <li>السؤال الأقوى</li>
    </ol></div>

    <h2>1. لبنات التفكير المنطقي</h2>
    <div class="tablewrap"><table>
      <tr><th>المهارة</th><th>معناها</th><th>مثال</th></tr>
      <tr><td>التصنيف</td><td>تجميع الأشياء حسب ما يجمعها</td><td>فرز الأزرار حسب اللون، ثم حسب عدد الثقوب</td></tr>
      <tr><td>المقارنة والترتيب</td><td>أكبر وأصغر، أول وآخر</td><td>ترتيب خمسة أعواد من الأقصر إلى الأطول</td></tr>
      <tr><td>«إذا… فإن…»</td><td>رؤية النتائج</td><td>«إذا أمطرت تبتلّ الأرض. والأرض جافة، إذن…»</td></tr>
      <tr><td>الاستنتاج</td><td>الوصول إلى نتيجة من القرائن</td><td>تخمين بطاقة مخفية من أجوبة بنعم أو لا</td></tr>
      <tr><td>التعليل</td><td>شرح لماذا الجواب صحيح</td><td>«لا يمكن أن يكون 7 لأن 7 عدد فردي».</td></tr>
    </table></div>

    <h2>2. ماذا نتوقّع في كل عمر</h2>
    <div class="tablewrap"><table>
      <tr><th>العمر</th><th>الاستدلال المعتاد</th><th>تحدّيات مناسبة</th></tr>
      <tr><td>4–6 سنوات</td><td>التصنيف حسب خاصية واحدة، وأنماط بسيطة، والسبب والنتيجة</td><td>«الدخيل» بالصور، وألعاب المطابقة، و«ماذا يحدث بعد؟»</td></tr>
      <tr><td>6–8 سنوات</td><td>التصنيف حسب خاصيتين، والترتيب، وأولى التعليلات بـ«لأن»</td><td>شبكات منطقية بسيطة، وألعاب من نوع «من هو؟»، وألغاز الأعداد</td></tr>
      <tr><td>8–10 سنوات</td><td>الجمع بين عدة قرائن، والتحقّق من الأجوبة، واكتشاف التناقض</td><td>السودوكو، وألغاز الاستنتاج، وألعاب الطاولة الاستراتيجية</td></tr>
      <tr><td>10–12 سنة</td><td>القواعد المجرّدة، واختبار الأفكار، والاستدلال بـ«ماذا لو»</td><td>الشطرنج، وألغاز أصعب، وتأليف ألغازه الخاصة</td></tr>
    </table></div>

    <h2>3. أنشطة يومية</h2>
    <ul>
      <li><strong>جِد الدخيل:</strong> «تفاحة، موزة، جزرة، إجاصة — أيّها لا ينتمي؟». اقبل كل جواب معلَّل جيدًا: الجزرة (ليست فاكهة) أو الموزة (ليست مستديرة) كلاهما صحيح.</li>
      <li><strong>فرز الغسيل أو المشتريات:</strong> حسب اللون أو الصاحب أو النوع، ثم اطلب من طفلك أن يخترع قاعدة فرز جديدة.</li>
      <li><strong>الترتيب:</strong> صُفّوا أفراد العائلة حسب الطول، أو السيارات الصغيرة حسب الحجم، ثم اسأل «من يقع بين…؟».</li>
      <li><strong>السبب والنتيجة على المائدة:</strong> «ماذا سيحدث لو تركنا المثلّجات خارج المجمّد؟».</li>
      <li><strong>اكتشف الخطأ العجيب:</strong> قل جملة طريفة («لبست حذائي قبل جواربي») ودع طفلك يشرح ما الخطأ فيها.</li>
    </ul>
    <div class="tipbox"><b>ملاحظة الأستاذ</b>في الرياضيات، ليس الأطفال الأكثر تقدّمًا دائمًا هم الأسرع حسابًا، بل الذين يتحقّقون هل للجواب معنى: «37 + 45 لا يمكن أن تساوي 712، هذا كبير جدًا». اطلب تقديرًا قبل كل عملية حسابية، وستنمو هذه العادة بسرعة.</div>

    <h2>4. لغز منطقي نحلّه معًا</h2>
    <p>إليك لغز استنتاج بسيطًا من سنّ السابعة. ارسم جدولًا صغيرًا أو استعمل ثلاثة أكواب لتتبّع الحلّ.</p>
    <p><strong>لدى لينا وعمر وسارة حيوان أليف لكل واحد منهم: قطّ أو كلب أو سمكة.</strong></p>
    <ul>
      <li>حيوان عمر لا يعرف السباحة.</li>
      <li>سارة لديها حساسية من القطط.</li>
      <li>حيوان لينا يعيش في الماء.</li>
    </ul>
    <p>من يملك أي حيوان؟ <em>الحلّ:</em> حيوان لينا يعيش في الماء، إذن لينا تملك السمكة. سارة لا يمكن أن تملك القطّ، إذن تملك الكلب. ويبقى القطّ لعمر، والقطّ لا يسبح، وهذا يوافق القرينة الأولى.</p>
    <div class="tipbox try"><b>جرّب هذا الليلة</b>حُلّا اللغز معًا، ثم اطلب من طفلك أن يؤلّف لك لغزًا بثلاثة أشخاص وثلاثة أشياء. فتأليف لغز له جواب واحد فقط أصعب من حلّه، ويعلّم الكثير.</div>

    <h2>5. ألعاب تبني الاستدلال</h2>
    <ul>
      <li><strong>ألعاب من نوع «من هو؟»:</strong> طرح أسئلة تُقصي نصف الاحتمالات دفعة واحدة.</li>
      <li><strong>ألعاب فكّ الشيفرة</strong> مثل «ماستر مايند»: جرّب تخمينًا، واقرأ الردّ، وعدّل.</li>
      <li><strong>«أربعة في صف» ولعبة إكس-أو:</strong> التفكير في الحركة التالية مسبقًا.</li>
      <li><strong>السودوكو:</strong> استنتاج خالص، من شبكات 4×4 السهلة إلى 9×9 الكلاسيكية.</li>
      <li><strong>التانغرام وقطع الأشكال:</strong> التفكير المكاني والتجربة والتحسين.</li>
      <li><strong>الشطرنج (من نحو 6 أو 7 سنوات):</strong> التخطيط وتوقّع النتائج والصبر.</li>
    </ul>

    <h2>6. السؤال الأقوى</h2>
    <p>«كيف عرفت؟» يحوّل أي نشاط إلى درس في الاستدلال. اطرحه بعد الأجوبة الصحيحة كما بعد الخاطئة، حتى لا يبدو فخًّا أبدًا. وساعد طفلك على استعمال كلمات الاستدلال: <em>لأن، إذن، إذا… فإن، لا يمكن أن يكون… لأن، هذا يعني أن</em>. ومع الوقت يبدأ بطرح السؤال على نفسه، وهذا بالضبط ما يفعله صاحب العقل المنطقي.</p>
    <div class="tipbox warn"><b>دعه يجتهد قليلًا</b>اللغز الذي يُحلّ فورًا لا يعلّم كثيرًا. إذا تعثّر طفلك، فأعطه تلميحًا صغيرًا («ماذا تعرف بالتأكيد؟») بدل الجواب. ففي جهد الاستدلال يحدث التعلّم.</div>

    <h2>موارد المنطق على Kids Learning Hub</h2>
    <p>اطبع <a href="../worksheets/sudoku.html?lang=ar">سودوكو الأطفال</a> (4×4 و6×6) و<a href="../worksheets/maze.html?lang=ar">المتاهات</a>، والعب <a href="../play/patterns.html?lang=ar">المتتاليات</a>، ولحلّ المسائل بخطوات واضحة اقرأ دليلنا عن <a href="fostering-computational-thinking-kids.html">التفكير الحاسوبي</a>.</p>
    ${cta('mathokids', 'ألغاز ومتتاليات وتحدّيات رياضية تنمو مع طفلك — دون إنترنت ومجانًا.')}

    <p>صنّف وقارِن واستنتج وعلّل. ببضعة ألغاز وألعاب جيدة وسؤال «كيف عرفت؟»، يدخل التفكير المنطقي إلى الحياة اليومية.</p>`,
  },

  faq: {
    en: [['How can I develop my child’s logical thinking?', 'Practise sorting and comparing, play odd-one-out and deduction games, solve simple logic puzzles together, ask for estimates before calculations, and regularly ask "How do you know?"'],
         ['What games help with logical thinking?', 'Guess Who-style games, code-breaking games like Mastermind, Connect Four, sudoku, tangrams and, from about 6 or 7, chess all build reasoning and planning.'],
         ['At what age can children solve logic puzzles?', 'Picture-based odd-one-out and sorting puzzles work from about 4. Simple deduction puzzles with three clues suit ages 7 and up, and sudoku-style puzzles from about 7 or 8.']],
    fr: [['Comment développer la logique de mon enfant ?', 'Entraînez-le à trier et comparer, jouez à trouver l’intrus et à des jeux de déduction, résolvez ensemble de petites énigmes, demandez une estimation avant chaque calcul et posez souvent la question « Comment le sais-tu ? ».'],
         ['Quels jeux développent la logique ?', 'Les jeux de type Qui est-ce ?, les jeux de code comme le Mastermind, le Puissance 4, le sudoku, les tangrams et, dès 6 ou 7 ans, les échecs développent le raisonnement et l’anticipation.'],
         ['À quel âge un enfant peut-il résoudre des énigmes logiques ?', 'Les intrus et tris en images conviennent dès 4 ans environ. Les énigmes de déduction à trois indices conviennent dès 7 ans, et les sudokus vers 7 ou 8 ans.']],
    es: [['¿Cómo desarrollar el pensamiento lógico de mi hijo?', 'Practicad clasificar y comparar, jugad a encontrar el intruso y a juegos de deducción, resolved acertijos sencillos juntos, pide estimaciones antes de calcular y pregunta a menudo «¿Cómo lo sabes?».'],
         ['¿Qué juegos ayudan al pensamiento lógico?', 'Los juegos tipo ¿Quién es quién?, los de descifrar códigos como Mastermind, Conecta 4, el sudoku, el tangram y, desde los 6 o 7 años, el ajedrez desarrollan el razonamiento y la planificación.'],
         ['¿A qué edad pueden resolver acertijos lógicos?', 'Los intrusos y clasificaciones con imágenes funcionan desde los 4 años aproximadamente. Los acertijos de deducción con tres pistas, desde los 7, y los sudokus hacia los 7 u 8.']],
    ar: [['كيف أنمّي التفكير المنطقي عند طفلي؟', 'تدرّبا على التصنيف والمقارنة، والعبا «جِد الدخيل» وألعاب الاستنتاج، وحُلّا ألغازًا بسيطة معًا، واطلب تقديرًا قبل كل عملية حسابية، واسأله كثيرًا «كيف عرفت؟».'],
         ['ما الألعاب التي تنمّي التفكير المنطقي؟', 'ألعاب من نوع «من هو؟»، وألعاب فكّ الشيفرة مثل «ماستر مايند»، و«أربعة في صف»، والسودوكو، والتانغرام، والشطرنج من نحو 6 أو 7 سنوات، كلها تبني الاستدلال والتخطيط.'],
         ['في أي عمر يستطيع الطفل حلّ الألغاز المنطقية؟', 'ألغاز الدخيل والتصنيف بالصور تناسب من نحو 4 سنوات، وألغاز الاستنتاج بثلاث قرائن من سنّ 7، والسودوكو من نحو 7 أو 8 سنوات.']],
  },
};
