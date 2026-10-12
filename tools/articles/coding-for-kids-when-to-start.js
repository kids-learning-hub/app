/* Deepened 2026-10 (AdSense content-quality pass). Merged-in topic: teaching-coding-kids-home. */
const { cta, meta } = require('./_cta.js');

module.exports = {
  slug: 'coding-for-kids-when-to-start',
  date: '2026-07-14',
  minutes: 11,

  dataTitle: {
    en: 'Coding for Kids: What Age to Start and How (Ages 4–12) | Kids Learning Hub',
    fr: 'Le codage pour enfants : à quel âge commencer et comment | Kids Learning Hub',
    es: 'Programación para niños: a qué edad empezar y cómo | Kids Learning Hub',
    ar: 'البرمجة للأطفال: في أي عمر نبدأ وكيف؟ (4–12 سنة) | Kids Learning Hub',
  },

  body: {
    en: `
    <span class="tag code">Coding</span>
    <h1>Coding for Kids: What Age Should They Start, and How?</h1>
    ${meta('en', 11)}
    <p class="lede">Children can start learning to code at four or five, often without any screen at all. At that age, coding is not about typing commands. It is about giving clear step-by-step instructions, spotting patterns and fixing mistakes. This guide explains what children can learn at each age, gives you unplugged activities to start tonight, and shows how to move gently to real programming.</p>

    <div class="toc"><b>In this guide</b><ol>
      <li>What "coding" means for a young child</li>
      <li>What to learn at each age</li>
      <li>Four unplugged activities to start with</li>
      <li>Moving to the screen: free tools by age</li>
      <li>How to help if you can't code</li>
      <li>Mistakes to avoid</li>
    </ol></div>

    <h2>1. What "coding" means for a young child</h2>
    <p>Professional programmers spend more time thinking than typing. The thinking skills behind coding, often called <strong>computational thinking</strong>, are exactly what young children can practise:</p>
    <ul>
      <li><strong>Sequencing:</strong> putting instructions in the right order (put on socks, then shoes).</li>
      <li><strong>Loops:</strong> noticing repetition and saying it once ("jump three times" instead of "jump, jump, jump").</li>
      <li><strong>Conditions:</strong> if this happens, do that ("if it rains, take an umbrella").</li>
      <li><strong>Decomposition:</strong> breaking a big task into small steps.</li>
      <li><strong>Debugging:</strong> finding and fixing what went wrong, calmly.</li>
    </ul>
    <p>These skills support mathematics, reading comprehension and problem solving in general, whether or not your child ever becomes a programmer.</p>

    <h2>2. What to learn at each age</h2>
    <div class="tablewrap"><table>
      <tr><th>Age</th><th>Stage</th><th>What it looks like</th></tr>
      <tr><td>4–6</td><td>Unplugged</td><td>Direction games, patterns with beads or blocks, "robot" games with a parent, simple arrow mazes on paper</td></tr>
      <tr><td>5–7</td><td>Picture-based coding</td><td>Apps where children drag arrows or picture blocks to move a character; no reading needed</td></tr>
      <tr><td>7–10</td><td>Block-based coding</td><td>Snapping blocks together to make animations, stories and simple games (for example with Scratch)</td></tr>
      <tr><td>10–12</td><td>Advanced blocks and first text code</td><td>Bigger projects with variables; motivated children can try a beginner-friendly text language such as Python</td></tr>
    </table></div>
    <p>These are typical ranges, not rules. A 9-year-old who has never coded should still start with picture or block coding: the ideas matter more than the format.</p>

    <h2>3. Four unplugged activities to start with</h2>
    <h3>Program the parent robot (ages 4–8)</h3>
    <p>You become a robot that follows instructions <em>exactly</em>. Your child must guide you to make a jam sandwich or to walk to the door. If they say "put jam on the bread" without saying "open the jar", the robot stops. Children laugh, and they discover why programs need precise, ordered steps. It is also the gentlest introduction to debugging.</p>
    <h3>Floor arrow maze (ages 4–7)</h3>
    <p>Make a 4×4 grid with tape on the floor. Place a toy as the "treasure". Your child writes or draws arrow cards (↑ ↓ ← →) to guide a teddy from the start to the treasure, then tests the program by moving the teddy card by card. Add "walls" to make it harder.</p>
    <h3>Bead and LEGO loops (ages 5–8)</h3>
    <p>Build a pattern such as red, blue, blue, red, blue, blue. Ask: "Can you describe it in one short sentence?" ("Repeat red, blue, blue three times"). Your child has just written a loop. Swap roles: they say a loop and you build it.</p>
    <h3>Simon says with conditions (ages 6–10)</h3>
    <p>Play Simon says with rules like "If I touch my head, you clap. If I touch my nose, you jump. Otherwise, do nothing." Then let your child invent the conditions. This is exactly how "if… else" works in every programming language.</p>
    <div class="tipbox"><b>Teacher's note</b>In coding, a mistake is called a "bug", and finding it is part of the job, not a failure. When your child's program goes wrong, ask "Where did it stop doing what you wanted?" and step through it together. Children who learn to debug calmly carry that attitude into maths and beyond.</div>

    <h2>4. Moving to the screen: free tools by age</h2>
    <ul>
      <li><strong>Ages 5–7:</strong> picture-based apps where children drag arrows to move a character. ScratchJr is a well-known free option, and our own CodoKids app offers robot mazes for this age.</li>
      <li><strong>Ages 8–12:</strong> Scratch, a free platform created by the MIT Media Lab, lets children build animations, stories and games with colourful blocks.</li>
      <li><strong>Ages 10–12 and up:</strong> children who enjoy Scratch can try beginner text programming, for example drawing shapes with Python's turtle module, often with an adult nearby.</li>
    </ul>
    <p>Twenty to thirty minutes, two or three times a week, is plenty. Coding should be a creative activity, not another source of endless screen time.</p>
    <div class="tipbox try"><b>Project ideas</b>A birthday card that animates when you click it (age 7+). A story where two characters talk to each other (age 8+). A game where a cat catches falling apples and a score counts up (age 9+). A quiz on a topic your child loves, with a score at the end (age 10+).</div>

    <h2>5. How to help if you can't code</h2>
    <p>You do not need to know how to program to support a young coder. The most useful things you can do are:</p>
    <ul>
      <li><strong>Ask your child to explain their program.</strong> Explaining step by step often reveals the bug on its own.</li>
      <li><strong>Be the user.</strong> Play their game and give honest, kind feedback: "I didn't understand what to do at the start."</li>
      <li><strong>Encourage changes, not just copying.</strong> After following a tutorial, ask "What could you change to make it yours?"</li>
      <li><strong>Celebrate persistence.</strong> Praise the moment they fixed a bug, not only the finished project.</li>
    </ul>

    <h2>6. Mistakes to avoid</h2>
    <ul>
      <li><strong>Starting with typed code too early.</strong> Spelling and punctuation errors frustrate young children before they understand the ideas. Blocks first.</li>
      <li><strong>Only following tutorials.</strong> Copying builds little understanding unless the child then changes and extends the project.</li>
      <li><strong>Turning it into long screen sessions.</strong> Mix screen coding with unplugged games, drawing plans on paper and testing programs together.</li>
      <li><strong>Pushing a child who isn't interested.</strong> Try again in six months, or connect coding to something they already love: stories, music, animals or football.</li>
    </ul>
    <div class="tipbox warn"><b>About online safety</b>Some coding platforms let children share projects and comment. For younger children, check the privacy settings, keep sharing within the family, and talk about never giving personal information online.</div>

    <h2>Free resources on Kids Learning Hub</h2>
    <p>Our <a href="../play/patterns.html">Patterns</a> game trains the pattern-spotting behind loops, and our printable <a href="../worksheets/maze.html">mazes</a> are perfect for drawing arrow "programs" on paper before trying them on screen.</p>
    ${cta('codokids', 'Guide a friendly robot through 40 mazes with arrows, loops and conditions — coding for ages 4 to 13, offline and free.')}

    <p>The best time to start coding is when your child is curious, and the best way is to start without a screen. A sandwich-making robot tonight could be the first step towards building their own games.</p>`,

    fr: `
    <span class="tag code">Codage</span>
    <h1>Le codage pour les enfants : à quel âge commencer, et comment ?</h1>
    ${meta('fr', 11)}
    <p class="lede">Les enfants peuvent commencer à coder dès quatre ou cinq ans, souvent sans aucun écran. À cet âge, coder ne consiste pas à taper des commandes : il s'agit de donner des instructions claires étape par étape, de repérer des motifs et de corriger ses erreurs. Ce guide explique ce que l'enfant peut apprendre à chaque âge, propose des activités sans écran à faire dès ce soir et montre comment passer en douceur à la vraie programmation.</p>

    <div class="toc"><b>Dans ce guide</b><ol>
      <li>Ce que « coder » veut dire pour un jeune enfant</li>
      <li>Quoi apprendre à chaque âge</li>
      <li>Quatre activités débranchées pour commencer</li>
      <li>Passer à l'écran : outils gratuits par âge</li>
      <li>Aider sans savoir coder</li>
      <li>Les erreurs à éviter</li>
    </ol></div>

    <h2>1. Ce que « coder » veut dire pour un jeune enfant</h2>
    <p>Les programmeurs professionnels passent plus de temps à réfléchir qu'à taper. Les capacités de réflexion qui se cachent derrière le codage, souvent appelées <strong>pensée informatique</strong>, sont précisément celles qu'un jeune enfant peut exercer :</p>
    <ul>
      <li><strong>Le séquençage :</strong> mettre les instructions dans le bon ordre (les chaussettes, puis les chaussures).</li>
      <li><strong>Les boucles :</strong> repérer une répétition et la dire une seule fois (« saute trois fois » au lieu de « saute, saute, saute »).</li>
      <li><strong>Les conditions :</strong> si ceci arrive, fais cela (« s'il pleut, prends un parapluie »).</li>
      <li><strong>La décomposition :</strong> découper une grande tâche en petites étapes.</li>
      <li><strong>Le débogage :</strong> trouver ce qui ne va pas et le corriger, calmement.</li>
    </ul>
    <p>Ces capacités soutiennent les mathématiques, la compréhension en lecture et la résolution de problèmes en général, que votre enfant devienne programmeur ou non.</p>

    <h2>2. Quoi apprendre à chaque âge</h2>
    <div class="tablewrap"><table>
      <tr><th>Âge</th><th>Étape</th><th>À quoi cela ressemble</th></tr>
      <tr><td>4–6 ans</td><td>Débranché</td><td>Jeux de directions, motifs avec des perles ou des cubes, jeu du « robot » avec un parent, labyrinthes à flèches sur papier</td></tr>
      <tr><td>5–7 ans</td><td>Codage par images</td><td>Applis où l'on glisse des flèches ou des blocs illustrés pour déplacer un personnage, sans besoin de lire</td></tr>
      <tr><td>7–10 ans</td><td>Codage par blocs</td><td>Assembler des blocs pour créer animations, histoires et petits jeux (par exemple avec Scratch)</td></tr>
      <tr><td>10–12 ans</td><td>Blocs avancés et premier code écrit</td><td>Projets plus grands avec des variables ; les enfants motivés peuvent essayer un langage écrit accessible comme Python</td></tr>
    </table></div>
    <p>Ce sont des repères, pas des règles. Un enfant de 9 ans qui n'a jamais codé doit quand même commencer par le codage par images ou par blocs : les idées comptent plus que le format.</p>

    <h2>3. Quatre activités débranchées pour commencer</h2>
    <h3>Programme le parent-robot (4–8 ans)</h3>
    <p>Vous devenez un robot qui suit les instructions <em>à la lettre</em>. Votre enfant doit vous guider pour faire une tartine de confiture ou marcher jusqu'à la porte. S'il dit « mets la confiture sur le pain » sans dire « ouvre le pot », le robot s'arrête. Les enfants rient, et découvrent pourquoi un programme exige des étapes précises et ordonnées. C'est aussi l'initiation la plus douce au débogage.</p>
    <h3>Le labyrinthe de flèches au sol (4–7 ans)</h3>
    <p>Tracez une grille de 4×4 au ruban adhésif sur le sol et posez un jouet comme « trésor ». L'enfant écrit ou dessine des cartes flèches (↑ ↓ ← →) pour guider un nounours du départ au trésor, puis teste son programme en déplaçant le nounours carte après carte. Ajoutez des « murs » pour corser le jeu.</p>
    <h3>Les boucles en perles et en LEGO (5–8 ans)</h3>
    <p>Construisez un motif comme rouge, bleu, bleu, rouge, bleu, bleu. Demandez : « Peux-tu le décrire en une phrase courte ? » (« Répète rouge, bleu, bleu trois fois »). Votre enfant vient d'écrire une boucle. Inversez les rôles : il dit une boucle, vous la construisez.</p>
    <h3>Jacques a dit avec conditions (6–10 ans)</h3>
    <p>Jouez à Jacques a dit avec des règles comme « Si je touche ma tête, tu tapes dans tes mains. Si je touche mon nez, tu sautes. Sinon, tu ne fais rien. » Puis laissez votre enfant inventer les conditions. C'est exactement le fonctionnement du « si… sinon » dans tous les langages de programmation.</p>
    <div class="tipbox"><b>Le mot de l'enseignant</b>En programmation, une erreur s'appelle un « bug », et la trouver fait partie du travail, ce n'est pas un échec. Quand le programme de votre enfant ne marche pas, demandez « À quel moment a-t-il arrêté de faire ce que tu voulais ? » et parcourez-le ensemble. Les enfants qui apprennent à déboguer calmement gardent cette attitude en maths et ailleurs.</div>

    <h2>4. Passer à l'écran : outils gratuits par âge</h2>
    <ul>
      <li><strong>5–7 ans :</strong> applis à images où l'on glisse des flèches pour déplacer un personnage. ScratchJr est une option gratuite très connue, et notre appli CodoKids propose des labyrinthes de robot pour cet âge.</li>
      <li><strong>8–12 ans :</strong> Scratch, plateforme gratuite créée par le MIT Media Lab, permet de créer animations, histoires et jeux avec des blocs colorés.</li>
      <li><strong>10–12 ans et plus :</strong> les enfants qui aiment Scratch peuvent essayer la programmation écrite, par exemple dessiner des formes avec le module turtle de Python, souvent avec un adulte à côté.</li>
    </ul>
    <p>Vingt à trente minutes, deux ou trois fois par semaine, c'est largement suffisant. Le codage doit rester une activité créative, pas une nouvelle source d'écran sans fin.</p>
    <div class="tipbox try"><b>Idées de projets</b>Une carte d'anniversaire qui s'anime quand on clique (dès 7 ans). Une histoire où deux personnages se parlent (dès 8 ans). Un jeu où un chat attrape des pommes qui tombent avec un score (dès 9 ans). Un quiz sur un sujet que votre enfant adore, avec un score final (dès 10 ans).</div>

    <h2>5. Aider sans savoir coder</h2>
    <p>Pas besoin de savoir programmer pour accompagner un jeune codeur. Le plus utile :</p>
    <ul>
      <li><strong>Demandez-lui d'expliquer son programme.</strong> Expliquer étape par étape révèle souvent le bug tout seul.</li>
      <li><strong>Soyez l'utilisateur.</strong> Jouez à son jeu et donnez un avis honnête et bienveillant : « Je n'ai pas compris quoi faire au début. »</li>
      <li><strong>Encouragez les modifications, pas seulement la copie.</strong> Après un tutoriel, demandez « Que pourrais-tu changer pour qu'il soit vraiment à toi ? »</li>
      <li><strong>Fêtez la persévérance.</strong> Félicitez le moment où il a corrigé un bug, pas seulement le projet fini.</li>
    </ul>

    <h2>6. Les erreurs à éviter</h2>
    <ul>
      <li><strong>Commencer trop tôt par le code tapé.</strong> Les fautes d'orthographe et de ponctuation découragent les jeunes enfants avant qu'ils ne comprennent les idées. Les blocs d'abord.</li>
      <li><strong>Seulement suivre des tutoriels.</strong> Copier apprend peu si l'enfant ne modifie pas ensuite le projet.</li>
      <li><strong>En faire de longues séances d'écran.</strong> Alternez codage sur écran, jeux débranchés, plans dessinés sur papier et tests à deux.</li>
      <li><strong>Pousser un enfant qui n'est pas intéressé.</strong> Réessayez dans six mois, ou reliez le codage à ce qu'il aime déjà : histoires, musique, animaux ou football.</li>
    </ul>
    <div class="tipbox warn"><b>Sécurité en ligne</b>Certaines plateformes permettent de partager des projets et de commenter. Pour les plus jeunes, vérifiez les réglages de confidentialité, gardez le partage dans le cercle familial et rappelez qu'on ne donne jamais d'informations personnelles en ligne.</div>

    <h2>Des ressources gratuites sur Kids Learning Hub</h2>
    <p>Notre jeu <a href="../play/patterns.html?lang=fr">Suites logiques</a> entraîne le repérage de motifs qui se cache derrière les boucles, et nos <a href="../worksheets/maze.html?lang=fr">labyrinthes à imprimer</a> sont parfaits pour dessiner des « programmes » de flèches sur papier avant de passer à l'écran.</p>
    ${cta('codokids', 'Guide un robot sympathique dans 40 labyrinthes avec des flèches, des boucles et des conditions — le codage de 4 à 13 ans, hors ligne et gratuit.')}

    <p>Le meilleur moment pour commencer à coder, c'est quand votre enfant est curieux, et la meilleure façon, c'est sans écran. Un robot qui prépare une tartine ce soir pourrait être le premier pas vers ses propres jeux.</p>`,

    es: `
    <span class="tag code">Programación</span>
    <h1>Programación para niños: ¿a qué edad empezar y cómo?</h1>
    ${meta('es', 11)}
    <p class="lede">Los niños pueden empezar a programar a los cuatro o cinco años, a menudo sin ninguna pantalla. A esa edad, programar no consiste en teclear órdenes: consiste en dar instrucciones claras paso a paso, detectar patrones y corregir errores. Esta guía explica qué pueden aprender a cada edad, propone actividades sin pantalla para empezar esta noche y muestra cómo pasar poco a poco a la programación real.</p>

    <div class="toc"><b>En esta guía</b><ol>
      <li>Qué significa «programar» para un niño pequeño</li>
      <li>Qué aprender a cada edad</li>
      <li>Cuatro actividades desenchufadas para empezar</li>
      <li>Pasar a la pantalla: herramientas gratis por edad</li>
      <li>Cómo ayudar si no sabes programar</li>
      <li>Errores que conviene evitar</li>
    </ol></div>

    <h2>1. Qué significa «programar» para un niño pequeño</h2>
    <p>Los programadores profesionales pasan más tiempo pensando que tecleando. Las habilidades de pensamiento que hay detrás de la programación, a menudo llamadas <strong>pensamiento computacional</strong>, son justo las que puede practicar un niño pequeño:</p>
    <ul>
      <li><strong>Secuenciar:</strong> poner las instrucciones en el orden correcto (primero calcetines, luego zapatos).</li>
      <li><strong>Bucles:</strong> ver una repetición y decirla una sola vez («salta tres veces» en vez de «salta, salta, salta»).</li>
      <li><strong>Condiciones:</strong> si pasa esto, haz aquello («si llueve, coge el paraguas»).</li>
      <li><strong>Descomposición:</strong> dividir una tarea grande en pasos pequeños.</li>
      <li><strong>Depuración:</strong> encontrar lo que ha fallado y arreglarlo con calma.</li>
    </ul>
    <p>Estas habilidades ayudan en matemáticas, en la comprensión lectora y en la resolución de problemas en general, tanto si tu hijo acaba siendo programador como si no.</p>

    <h2>2. Qué aprender a cada edad</h2>
    <div class="tablewrap"><table>
      <tr><th>Edad</th><th>Etapa</th><th>Cómo es</th></tr>
      <tr><td>4–6 años</td><td>Desenchufada</td><td>Juegos de direcciones, patrones con cuentas o bloques, juegos de «robot» con un adulto, laberintos de flechas en papel</td></tr>
      <tr><td>5–7 años</td><td>Programación con imágenes</td><td>Apps en las que se arrastran flechas o bloques con dibujos para mover un personaje, sin necesidad de leer</td></tr>
      <tr><td>7–10 años</td><td>Programación por bloques</td><td>Encajar bloques para crear animaciones, historias y juegos sencillos (por ejemplo con Scratch)</td></tr>
      <tr><td>10–12 años</td><td>Bloques avanzados y primer código escrito</td><td>Proyectos más grandes con variables; los niños motivados pueden probar un lenguaje escrito sencillo como Python</td></tr>
    </table></div>
    <p>Son rangos orientativos, no reglas. Un niño de 9 años que nunca ha programado debería empezar igualmente con imágenes o bloques: las ideas importan más que el formato.</p>

    <h2>3. Cuatro actividades desenchufadas para empezar</h2>
    <h3>Programa al robot papá o mamá (4–8 años)</h3>
    <p>Te conviertes en un robot que sigue las instrucciones <em>al pie de la letra</em>. Tu hijo debe guiarte para preparar una tostada con mermelada o caminar hasta la puerta. Si dice «pon mermelada en el pan» sin decir «abre el bote», el robot se detiene. Los niños se ríen y descubren por qué un programa necesita pasos precisos y ordenados. Es además la introducción más amable a la depuración.</p>
    <h3>Laberinto de flechas en el suelo (4–7 años)</h3>
    <p>Haz una cuadrícula de 4×4 con cinta en el suelo y coloca un juguete como «tesoro». Tu hijo escribe o dibuja tarjetas con flechas (↑ ↓ ← →) para guiar a un peluche desde la salida hasta el tesoro, y luego prueba su programa moviendo el peluche tarjeta a tarjeta. Añade «paredes» para hacerlo más difícil.</p>
    <h3>Bucles con cuentas y LEGO (5–8 años)</h3>
    <p>Construye un patrón como rojo, azul, azul, rojo, azul, azul. Pregunta: «¿Puedes describirlo en una frase corta?» («Repite rojo, azul, azul tres veces»). Tu hijo acaba de escribir un bucle. Cambiad los papeles: él dice un bucle y tú lo construyes.</p>
    <h3>Simón dice con condiciones (6–10 años)</h3>
    <p>Jugad a Simón dice con reglas como «Si me toco la cabeza, aplaudes. Si me toco la nariz, saltas. Si no, no haces nada». Después deja que tu hijo invente las condiciones. Así funciona exactamente el «si… si no» de cualquier lenguaje de programación.</p>
    <div class="tipbox"><b>Nota del profesor</b>En programación, un error se llama «bug», y encontrarlo forma parte del trabajo, no es un fracaso. Cuando el programa de tu hijo falle, pregunta «¿En qué momento dejó de hacer lo que querías?» y recorredlo juntos paso a paso. Los niños que aprenden a depurar con calma se llevan esa actitud a las matemáticas y a todo lo demás.</div>

    <h2>4. Pasar a la pantalla: herramientas gratis por edad</h2>
    <ul>
      <li><strong>5–7 años:</strong> apps con imágenes en las que se arrastran flechas para mover un personaje. ScratchJr es una opción gratuita muy conocida, y nuestra app CodoKids ofrece laberintos de robots para esta edad.</li>
      <li><strong>8–12 años:</strong> Scratch, una plataforma gratuita creada por el MIT Media Lab, permite crear animaciones, historias y juegos con bloques de colores.</li>
      <li><strong>10–12 años en adelante:</strong> a quien le guste Scratch puede probar la programación escrita, por ejemplo dibujando figuras con el módulo turtle de Python, a menudo con un adulto al lado.</li>
    </ul>
    <p>Entre veinte y treinta minutos, dos o tres veces por semana, es más que suficiente. Programar debe ser una actividad creativa, no una nueva fuente de pantalla sin fin.</p>
    <div class="tipbox try"><b>Ideas de proyectos</b>Una tarjeta de cumpleaños que se anima al hacer clic (desde 7 años). Una historia en la que dos personajes conversan (desde 8 años). Un juego en el que un gato atrapa manzanas que caen y suma puntos (desde 9 años). Un concurso sobre un tema que le encante, con puntuación final (desde 10 años).</div>

    <h2>5. Cómo ayudar si no sabes programar</h2>
    <p>No hace falta saber programar para acompañar a un pequeño programador. Lo más útil es:</p>
    <ul>
      <li><strong>Pedirle que explique su programa.</strong> Explicarlo paso a paso suele revelar el error por sí solo.</li>
      <li><strong>Ser el usuario.</strong> Juega a su juego y dale una opinión sincera y amable: «No entendí qué tenía que hacer al principio».</li>
      <li><strong>Animar a cambiar, no solo a copiar.</strong> Después de un tutorial, pregunta «¿Qué podrías cambiar para que sea tuyo?».</li>
      <li><strong>Celebrar la constancia.</strong> Elogia el momento en que arregló un error, no solo el proyecto terminado.</li>
    </ul>

    <h2>6. Errores que conviene evitar</h2>
    <ul>
      <li><strong>Empezar demasiado pronto con código escrito.</strong> Los errores de ortografía y puntuación frustran a los pequeños antes de que entiendan las ideas. Primero los bloques.</li>
      <li><strong>Limitarse a seguir tutoriales.</strong> Copiar enseña poco si el niño no cambia y amplía después el proyecto.</li>
      <li><strong>Convertirlo en largas sesiones de pantalla.</strong> Combina la programación en pantalla con juegos desenchufados, planos dibujados en papel y pruebas en compañía.</li>
      <li><strong>Insistir si no le interesa.</strong> Vuelve a intentarlo en seis meses o relaciona la programación con algo que ya le guste: historias, música, animales o fútbol.</li>
    </ul>
    <div class="tipbox warn"><b>Sobre la seguridad en internet</b>Algunas plataformas permiten compartir proyectos y comentar. Con los más pequeños, revisa la configuración de privacidad, compartid solo en familia y hablad de no dar nunca datos personales en internet.</div>

    <h2>Recursos gratis en Kids Learning Hub</h2>
    <p>Nuestro juego <a href="../play/patterns.html?lang=es">Series lógicas</a> entrena la detección de patrones que hay detrás de los bucles, y nuestros <a href="../worksheets/maze.html?lang=es">laberintos imprimibles</a> son perfectos para dibujar «programas» de flechas en papel antes de pasar a la pantalla.</p>
    ${cta('codokids', 'Guía a un robot simpático por 40 laberintos con flechas, bucles y condiciones — programación para niños de 4 a 13 años, sin conexión y gratis.')}

    <p>El mejor momento para empezar a programar es cuando tu hijo siente curiosidad, y la mejor manera es empezar sin pantalla. Un robot que prepara una tostada esta noche puede ser el primer paso para crear sus propios juegos.</p>`,

    ar: `
    <span class="tag code">البرمجة</span>
    <h1>البرمجة للأطفال: في أي عمر نبدأ؟ وكيف؟</h1>
    ${meta('ar', 11)}
    <p class="lede">يمكن للأطفال أن يبدؤوا تعلّم البرمجة في الرابعة أو الخامسة، وغالبًا دون أي شاشة. في هذا العمر لا تعني البرمجة كتابة الأوامر، بل إعطاء تعليمات واضحة خطوة بخطوة، واكتشاف الأنماط، وتصحيح الأخطاء. يشرح هذا الدليل ما يمكن للطفل تعلّمه في كل عمر، ويقترح أنشطة دون شاشة تبدأ بها الليلة، ويبيّن كيف ننتقل بهدوء إلى البرمجة الحقيقية.</p>

    <div class="toc"><b>في هذا الدليل</b><ol>
      <li>ماذا تعني «البرمجة» لطفل صغير</li>
      <li>ماذا نتعلّم في كل عمر</li>
      <li>أربعة أنشطة دون شاشة للبداية</li>
      <li>الانتقال إلى الشاشة: أدوات مجانية حسب العمر</li>
      <li>كيف تساعد حتى لو لم تكن تبرمج</li>
      <li>أخطاء يجب تجنّبها</li>
    </ol></div>

    <h2>1. ماذا تعني «البرمجة» لطفل صغير</h2>
    <p>يقضي المبرمجون المحترفون وقتًا في التفكير أكثر مما يقضونه في الكتابة. ومهارات التفكير التي تقوم عليها البرمجة، وتسمّى غالبًا <strong>التفكير الحاسوبي</strong>، هي بالضبط ما يستطيع الطفل الصغير التدرّب عليه:</p>
    <ul>
      <li><strong>الترتيب:</strong> وضع التعليمات بالترتيب الصحيح (الجوارب أولًا ثم الحذاء).</li>
      <li><strong>الحلقات:</strong> ملاحظة التكرار والتعبير عنه مرة واحدة («اقفز ثلاث مرات» بدل «اقفز، اقفز، اقفز»).</li>
      <li><strong>الشروط:</strong> إذا حدث هذا فافعل ذاك («إذا أمطرت فخذ المظلة»).</li>
      <li><strong>التفكيك:</strong> تقسيم مهمة كبيرة إلى خطوات صغيرة.</li>
      <li><strong>تصحيح الأخطاء:</strong> إيجاد الخلل وإصلاحه بهدوء.</li>
    </ul>
    <p>تدعم هذه المهارات الرياضيات وفهم المقروء وحلّ المشكلات عمومًا، سواء صار طفلك مبرمجًا أم لا.</p>

    <h2>2. ماذا نتعلّم في كل عمر</h2>
    <div class="tablewrap"><table>
      <tr><th>العمر</th><th>المرحلة</th><th>كيف تبدو</th></tr>
      <tr><td>4–6 سنوات</td><td>دون شاشة</td><td>ألعاب الاتجاهات، وأنماط بالخرز أو المكعّبات، ولعبة «الروبوت» مع أحد الوالدين، ومتاهات الأسهم على الورق</td></tr>
      <tr><td>5–7 سنوات</td><td>البرمجة بالصور</td><td>تطبيقات يسحب فيها الطفل أسهمًا أو كتلًا مصوّرة لتحريك شخصية، دون حاجة إلى القراءة</td></tr>
      <tr><td>7–10 سنوات</td><td>البرمجة بالكتل</td><td>تركيب الكتل لإنشاء رسوم متحركة وقصص وألعاب بسيطة (مثلًا ببرنامج Scratch)</td></tr>
      <tr><td>10–12 سنة</td><td>كتل متقدّمة وأول شيفرة مكتوبة</td><td>مشاريع أكبر فيها متغيّرات، ويمكن للطفل المتحمّس تجربة لغة مكتوبة سهلة مثل Python</td></tr>
    </table></div>
    <p>هذه مجالات تقريبية لا قواعد. الطفل ذو التسع سنوات الذي لم يبرمج قطّ ينبغي أن يبدأ أيضًا بالصور أو الكتل: الأفكار أهم من الشكل.</p>

    <h2>3. أربعة أنشطة دون شاشة للبداية</h2>
    <h3>برمِج الوالد الروبوت (4–8 سنوات)</h3>
    <p>تتحوّل إلى روبوت ينفّذ التعليمات <em>حرفيًا</em>. على طفلك أن يوجّهك لتحضير شطيرة بالمربّى أو للمشي إلى الباب. إذا قال «ضع المربّى على الخبز» دون أن يقول «افتح العلبة»، يتوقّف الروبوت. يضحك الأطفال ويكتشفون لماذا يحتاج البرنامج إلى خطوات دقيقة ومرتّبة. وهي أيضًا ألطف مدخل إلى تصحيح الأخطاء.</p>
    <h3>متاهة الأسهم على الأرض (4–7 سنوات)</h3>
    <p>اصنع شبكة 4×4 بشريط لاصق على الأرض، وضع لعبة تكون «الكنز». يكتب طفلك أو يرسم بطاقات أسهم (↑ ↓ ← →) لتوجيه دمية من نقطة البداية إلى الكنز، ثم يختبر برنامجه بتحريك الدمية بطاقة بعد بطاقة. أضِف «جدرانًا» لتصعيب اللعبة.</p>
    <h3>حلقات بالخرز والليغو (5–8 سنوات)</h3>
    <p>ابنِ نمطًا مثل: أحمر، أزرق، أزرق، أحمر، أزرق، أزرق. واسأل: «هل تستطيع وصفه بجملة قصيرة؟» («كرّر أحمر، أزرق، أزرق ثلاث مرات»). لقد كتب طفلك حلقة للتوّ. تبادلا الأدوار: يقول هو حلقة وتبنيها أنت.</p>
    <h3>«سيمون يقول» بالشروط (6–10 سنوات)</h3>
    <p>العبوا «سيمون يقول» بقواعد مثل: «إذا لمستُ رأسي فصفّق، وإذا لمستُ أنفي فاقفز، وإلا فلا تفعل شيئًا». ثم دع طفلك يخترع الشروط. هكذا تعمل بالضبط «إذا… وإلا» في كل لغات البرمجة.</p>
    <div class="tipbox"><b>ملاحظة الأستاذ</b>في البرمجة يسمّى الخطأ «bug»، وإيجاده جزء من العمل وليس فشلًا. حين لا يعمل برنامج طفلك اسأله: «في أي لحظة توقّف عن فعل ما تريده؟» وتتبّعاه معًا خطوة خطوة. الأطفال الذين يتعلّمون تصحيح الأخطاء بهدوء ينقلون هذا الموقف إلى الرياضيات وغيرها.</div>

    <h2>4. الانتقال إلى الشاشة: أدوات مجانية حسب العمر</h2>
    <ul>
      <li><strong>5–7 سنوات:</strong> تطبيقات مصوّرة يسحب فيها الطفل أسهمًا لتحريك شخصية. ScratchJr خيار مجاني معروف، وتطبيقنا CodoKids يقدّم متاهات روبوت لهذا العمر.</li>
      <li><strong>8–12 سنة:</strong> Scratch منصة مجانية أنشأها مختبر الوسائط في معهد MIT، يصنع فيها الأطفال رسومًا متحركة وقصصًا وألعابًا بكتل ملوّنة.</li>
      <li><strong>10–12 سنة فما فوق:</strong> يمكن لمن أحبّ Scratch أن يجرّب البرمجة المكتوبة، مثل رسم الأشكال بوحدة turtle في Python، ويُفضّل أن يكون بجانبه شخص كبير.</li>
    </ul>
    <p>من عشرين إلى ثلاثين دقيقة، مرتين أو ثلاثًا في الأسبوع، أكثر من كافية. يجب أن تبقى البرمجة نشاطًا إبداعيًا لا مصدرًا جديدًا لشاشة بلا نهاية.</p>
    <div class="tipbox try"><b>أفكار مشاريع</b>بطاقة عيد ميلاد تتحرّك عند النقر عليها (من 7 سنوات). قصة تتحاور فيها شخصيتان (من 8 سنوات). لعبة يلتقط فيها قطّ تفاحات تسقط مع عدّاد للنقاط (من 9 سنوات). مسابقة حول موضوع يحبّه طفلك مع نتيجة نهائية (من 10 سنوات).</div>

    <h2>5. كيف تساعد حتى لو لم تكن تبرمج</h2>
    <p>لا تحتاج إلى معرفة البرمجة لترافق مبرمجًا صغيرًا. أنفع ما يمكنك فعله:</p>
    <ul>
      <li><strong>اطلب منه شرح برنامجه.</strong> الشرح خطوة بخطوة يكشف الخطأ وحده في كثير من الأحيان.</li>
      <li><strong>كن أنت المستخدم.</strong> العب لعبته وقدّم رأيًا صادقًا ولطيفًا: «لم أفهم ماذا أفعل في البداية».</li>
      <li><strong>شجّع التعديل لا النسخ فقط.</strong> بعد درس تطبيقي اسأل: «ماذا يمكنك أن تغيّر ليصبح المشروع خاصًّا بك؟».</li>
      <li><strong>احتفل بالمثابرة.</strong> امدح لحظة إصلاحه للخطأ، لا المشروع النهائي فقط.</li>
    </ul>

    <h2>6. أخطاء يجب تجنّبها</h2>
    <ul>
      <li><strong>البدء بالشيفرة المكتوبة مبكرًا جدًا.</strong> أخطاء الإملاء والترقيم تُحبط الصغار قبل أن يفهموا الأفكار. الكتل أولًا.</li>
      <li><strong>الاكتفاء باتّباع الدروس الجاهزة.</strong> النسخ لا يعلّم كثيرًا ما لم يغيّر الطفل المشروع ويطوّره بعد ذلك.</li>
      <li><strong>تحويلها إلى حصص شاشة طويلة.</strong> امزج البرمجة على الشاشة بالألعاب دون شاشة، ورسم المخطّطات على الورق، والتجريب معًا.</li>
      <li><strong>الضغط على طفل غير مهتمّ.</strong> أعِد المحاولة بعد ستة أشهر، أو اربط البرمجة بشيء يحبّه أصلًا: القصص أو الموسيقى أو الحيوانات أو كرة القدم.</li>
    </ul>
    <div class="tipbox warn"><b>عن الأمان على الإنترنت</b>بعض منصّات البرمجة تتيح مشاركة المشاريع والتعليق عليها. مع الأطفال الصغار راجع إعدادات الخصوصية، واجعل المشاركة داخل العائلة، وتحدّث معهم عن عدم إعطاء أي معلومات شخصية على الإنترنت أبدًا.</div>

    <h2>موارد مجانية على Kids Learning Hub</h2>
    <p>لعبتنا <a href="../play/patterns.html?lang=ar">المتتاليات</a> تدرّب على اكتشاف الأنماط التي تقوم عليها الحلقات، و<a href="../worksheets/maze.html?lang=ar">المتاهات القابلة للطباعة</a> مثالية لرسم «برامج» الأسهم على الورق قبل تجربتها على الشاشة.</p>
    ${cta('codokids', 'وجّه روبوتًا لطيفًا عبر 40 متاهة بالأسهم والحلقات والشروط — البرمجة من 4 إلى 13 سنة، دون إنترنت ومجانًا.')}

    <p>أفضل وقت لبدء البرمجة هو حين يكون طفلك فضوليًا، وأفضل طريقة هي البدء دون شاشة. روبوت يحضّر شطيرة الليلة قد يكون الخطوة الأولى نحو صنع ألعابه الخاصة.</p>`,
  },

  faq: {
    en: [
      ['What age should kids start coding?', 'Children can start around age 4 or 5 with unplugged activities such as direction games and patterns, move to picture-based coding at 5 to 7, block-based coding such as Scratch at 7 to 10, and try simple text coding from about 10 if they are interested.'],
      ['Can kids learn coding without a computer?', 'Yes. Unplugged activities such as guiding a "parent robot", arrow mazes on the floor and patterns with beads teach sequencing, loops, conditions and debugging, the core ideas of programming.'],
      ['Which programming language is best for children?', 'For most children under 10, block-based tools are best because they remove typing errors. Scratch is a popular free choice. From about age 10, motivated children can try Python, which has a simple, readable syntax.']],
    fr: [
      ['À quel âge les enfants peuvent-ils commencer à coder ?', 'Vers 4 ou 5 ans avec des activités débranchées comme les jeux de directions et les motifs, puis le codage par images vers 5–7 ans, le codage par blocs comme Scratch vers 7–10 ans, et un code écrit simple vers 10 ans s’ils sont intéressés.'],
      ['Peut-on apprendre à coder sans ordinateur ?', 'Oui. Des activités débranchées comme guider un « parent-robot », des labyrinthes de flèches au sol ou des motifs de perles enseignent le séquençage, les boucles, les conditions et le débogage, les idées clés de la programmation.'],
      ['Quel langage de programmation choisir pour un enfant ?', 'Pour la plupart des enfants de moins de 10 ans, les outils par blocs sont les meilleurs car ils évitent les erreurs de frappe. Scratch est un choix gratuit très répandu. Vers 10 ans, les enfants motivés peuvent essayer Python, à la syntaxe simple et lisible.']],
    es: [
      ['¿A qué edad pueden empezar los niños a programar?', 'Hacia los 4 o 5 años con actividades desenchufadas como juegos de direcciones y patrones; con imágenes entre los 5 y los 7; por bloques, como Scratch, entre los 7 y los 10; y con código escrito sencillo a partir de los 10 si les interesa.'],
      ['¿Se puede aprender a programar sin ordenador?', 'Sí. Actividades desenchufadas como guiar a un «robot» adulto, laberintos de flechas en el suelo y patrones con cuentas enseñan secuencias, bucles, condiciones y depuración, las ideas clave de la programación.'],
      ['¿Qué lenguaje de programación es mejor para niños?', 'Para la mayoría de los menores de 10 años, las herramientas por bloques son las mejores porque evitan los errores al teclear. Scratch es una opción gratuita muy popular. Hacia los 10 años, los niños motivados pueden probar Python, con una sintaxis sencilla y legible.']],
    ar: [
      ['في أي عمر يبدأ الأطفال تعلّم البرمجة؟', 'يمكن البدء في سنّ 4 أو 5 بأنشطة دون شاشة مثل ألعاب الاتجاهات والأنماط، ثم البرمجة بالصور بين 5 و7، ثم البرمجة بالكتل مثل Scratch بين 7 و10، ثم الشيفرة المكتوبة البسيطة من نحو 10 سنوات إذا كان الطفل مهتمًّا.'],
      ['هل يمكن تعلّم البرمجة دون حاسوب؟', 'نعم. الأنشطة دون شاشة مثل توجيه «الوالد الروبوت» ومتاهات الأسهم على الأرض وأنماط الخرز تعلّم الترتيب والحلقات والشروط وتصحيح الأخطاء، وهي الأفكار الأساسية للبرمجة.'],
      ['ما أفضل لغة برمجة للأطفال؟', 'لأغلب الأطفال دون العاشرة تكون أدوات الكتل هي الأفضل لأنها تُبعد أخطاء الكتابة، وScratch خيار مجاني شائع. ومن نحو العاشرة يمكن للطفل المتحمّس تجربة Python ذات الصياغة البسيطة والواضحة.']],
  },
};
