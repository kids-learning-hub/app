/* Deepened 2026-10 (was ~450 words). General educational guidance only —
   ADHD is mentioned for recognition and referral, never diagnosis or treatment. */
const { cta, meta } = require('./_cta.js');

module.exports = {
  slug: 'managing-stress-and-adhd-in-kids',
  date: '2026-08-05',
  minutes: 11,

  dataTitle: {
    en: 'School Stress and Restless Learners: How Parents Can Help | Kids Learning Hub',
    fr: 'Stress scolaire et enfants agités : comment les parents peuvent aider | Kids Learning Hub',
    es: 'Estrés escolar y niños inquietos: cómo pueden ayudar las familias | Kids Learning Hub',
    ar: 'الضغط المدرسي والأطفال كثيرو الحركة: كيف يساعد الأولياء | Kids Learning Hub',
  },

  body: {
    en: `
    <span class="tag tips">Parenting</span>
    <h1>Managing School Stress and Supporting Restless, Active Learners</h1>
    ${meta('en', 11)}
    <p class="lede">Some children worry about every test. Others cannot sit still for ten minutes of homework. Many do both. School stress and restlessness look different, but they often respond to the same things: predictable routines, short focused work, movement, enough sleep and calm adults. This guide explains what parents can do at home, and when it is worth asking for professional advice.</p>

    <div class="toc"><b>In this guide</b><ol>
      <li>Signs of school stress</li>
      <li>What causes it</li>
      <li>A calmer daily routine</li>
      <li>Supporting restless or easily distracted children</li>
      <li>About ADHD: when to ask for an assessment</li>
      <li>Working with the school</li>
    </ol></div>

    <h2>1. Signs of school stress</h2>
    <div class="tablewrap"><table>
      <tr><th>Body</th><th>Behaviour</th><th>Words</th></tr>
      <tr><td>Stomach aches or headaches on school mornings; trouble falling asleep; tiredness</td><td>Irritability, tears over small things, avoiding homework, reluctance to go to school</td><td>"I'm bad at everything", "The teacher hates me", "I'll fail"</td></tr>
    </table></div>
    <p>A little stress before a test is normal and can even help concentration. It becomes a problem when it lasts for weeks, spoils sleep or appetite, or stops a child from enjoying things they used to like.</p>

    <h2>2. What causes it</h2>
    <ul>
      <li><strong>Gaps in understanding.</strong> When a child does not understand a lesson, every following lesson feels harder, and worry grows.</li>
      <li><strong>Overloaded schedules.</strong> School, homework, tutoring and activities can leave no time to rest or play.</li>
      <li><strong>Pressure about results.</strong> Comparisons with siblings or classmates, or a focus on grades rather than effort.</li>
      <li><strong>Social worries.</strong> Friendship problems are a frequent hidden cause of reluctance to go to school.</li>
      <li><strong>Lack of sleep.</strong> Tired children have less patience, less focus and more worries.</li>
    </ul>

    <h2>3. A calmer daily routine</h2>
    <ol>
      <li><strong>Decompress after school.</strong> A snack, some movement or outdoor play, and no questions about grades for the first half hour.</li>
      <li><strong>Homework at a fixed time and place,</strong> with the materials ready and screens out of sight.</li>
      <li><strong>Short work blocks:</strong> about 10–15 minutes for younger children, 20–25 for older ones, each followed by a short break.</li>
      <li><strong>Start with something achievable,</strong> then tackle the hardest task while energy is still good.</li>
      <li><strong>Protect sleep:</strong> regular bedtimes and no screens in the hour before bed. Primary-school children generally need about 9 to 12 hours a night.</li>
    </ol>
    <div class="tipbox try"><b>Try this tonight</b>Ask your child to rate their day from 1 to 5 with their fingers, then ask "What would make tomorrow one point better?" It opens a conversation about worries without making it heavy.</div>

    <h2>4. Supporting restless or easily distracted children</h2>
    <p>Some children have more energy, more impulsivity or a shorter attention span than their classmates. Whatever the reason, these strategies help:</p>
    <ul>
      <li><strong>Movement first:</strong> ten minutes of running, jumping or cycling before homework often makes the next twenty minutes much calmer.</li>
      <li><strong>Make tasks visible:</strong> a checklist of three to five small steps, ticked off one by one, is easier to follow than "do your homework".</li>
      <li><strong>Use a timer:</strong> "Work until the timer rings, then a two-minute break." A clear end makes starting easier.</li>
      <li><strong>Allow quiet movement:</strong> sitting on a cushion, squeezing a soft ball or standing at a counter can help some children concentrate.</li>
      <li><strong>Give one instruction at a time,</strong> with eye contact, and ask your child to repeat it.</li>
      <li><strong>Catch good moments:</strong> specific praise ("You worked for ten minutes without stopping!") motivates far more than criticism.</li>
    </ul>
    <div class="tipbox"><b>Teacher's note</b>In class, active children often do their best work when they have a job: handing out sheets, cleaning the board, carrying books. Giving their energy a useful purpose works better than asking them to suppress it.</div>

    <h2>5. About ADHD: when to ask for an assessment</h2>
    <p>Attention-deficit/hyperactivity disorder (ADHD) is a recognised condition that affects attention, activity levels and impulse control. Being lively, chatty or easily bored does not mean a child has ADHD; many children go through restless phases. It may be worth asking for an assessment if:</p>
    <ul>
      <li>difficulties with attention, restlessness or impulsivity have lasted for at least several months;</li>
      <li>they appear in several places, for example both at home and at school;</li>
      <li>they clearly affect learning, friendships or family life despite good routines.</li>
    </ul>
    <div class="tipbox warn"><b>Important</b>Only a qualified health professional can assess ADHD or other learning difficulties. If you are concerned, talk to your child's doctor and their teacher, and bring concrete examples. This article offers general educational guidance and does not replace medical or psychological advice.</div>

    <h2>6. Working with the school</h2>
    <ul>
      <li><strong>Share what you see at home,</strong> and ask what the teacher sees in class. The two pictures together are much more useful.</li>
      <li><strong>Agree on one or two small adjustments:</strong> sitting closer to the teacher, shorter written tasks, extra time, or permission to move.</li>
      <li><strong>Use the same language</strong> at home and at school for routines and rewards, so the child gets consistent messages.</li>
      <li><strong>Meet again after a few weeks</strong> to see what helped.</li>
    </ul>

    <h2>More on Kids Learning Hub</h2>
    <p>For practical attention-building ideas, read our guide to <a href="boosting-child-focus-and-attention.html">boosting focus and attention</a>. For worries around maths specifically, see <a href="overcoming-math-anxiety-in-kids.html">why kids say "I hate maths"</a>. Our <a href="../play/">short browser games</a> last only a few minutes, which suits children who need frequent breaks.</p>
    ${cta('mathokids', 'Short, calm maths sessions with clear goals and frequent rewards — suited to children who learn best in small steps. Offline and free.')}

    <p>Calm routines, short tasks, movement and sleep solve more problems than any lecture. And when they are not enough, asking for help early is a sign of good parenting, not of failure.</p>`,

    fr: `
    <span class="tag tips">Parentalité</span>
    <h1>Gérer le stress scolaire et accompagner les enfants agités ou distraits</h1>
    ${meta('fr', 11)}
    <p class="lede">Certains enfants s'inquiètent avant chaque contrôle. D'autres ne tiennent pas assis dix minutes devant leurs devoirs. Beaucoup font les deux. Stress scolaire et agitation se manifestent différemment, mais répondent souvent aux mêmes leviers : des routines prévisibles, un travail court et concentré, du mouvement, assez de sommeil et des adultes calmes. Ce guide explique ce que les parents peuvent faire à la maison, et quand demander un avis professionnel.</p>

    <div class="toc"><b>Dans ce guide</b><ol>
      <li>Les signes du stress scolaire</li>
      <li>Ses causes</li>
      <li>Une routine quotidienne plus sereine</li>
      <li>Accompagner les enfants agités ou facilement distraits</li>
      <li>À propos du TDAH : quand demander un bilan</li>
      <li>Travailler avec l'école</li>
    </ol></div>

    <h2>1. Les signes du stress scolaire</h2>
    <div class="tablewrap"><table>
      <tr><th>Le corps</th><th>Le comportement</th><th>Les mots</th></tr>
      <tr><td>Maux de ventre ou de tête les matins d'école ; difficultés à s'endormir ; fatigue</td><td>Irritabilité, larmes pour un rien, devoirs évités, refus d'aller à l'école</td><td>« Je suis nul en tout », « La maîtresse me déteste », « Je vais rater »</td></tr>
    </table></div>
    <p>Un peu de stress avant un contrôle est normal et peut même aider à se concentrer. Il devient un problème quand il dure des semaines, perturbe le sommeil ou l'appétit, ou empêche l'enfant de profiter de ce qu'il aimait.</p>

    <h2>2. Ses causes</h2>
    <ul>
      <li><strong>Des lacunes de compréhension.</strong> Quand une leçon n'est pas comprise, chaque leçon suivante paraît plus difficile, et l'inquiétude grandit.</li>
      <li><strong>Des emplois du temps surchargés.</strong> École, devoirs, soutien scolaire et activités peuvent ne laisser aucun temps pour se reposer ou jouer.</li>
      <li><strong>La pression des résultats.</strong> Comparaisons avec les frères, sœurs ou camarades, ou attention portée aux notes plutôt qu'à l'effort.</li>
      <li><strong>Les soucis entre enfants.</strong> Les problèmes d'amitié sont une cause cachée fréquente du refus d'aller à l'école.</li>
      <li><strong>Le manque de sommeil.</strong> Un enfant fatigué a moins de patience, moins de concentration et plus d'inquiétudes.</li>
    </ul>

    <h2>3. Une routine quotidienne plus sereine</h2>
    <ol>
      <li><strong>Décompresser après l'école :</strong> un goûter, du mouvement ou du jeu dehors, et aucune question sur les notes pendant la première demi-heure.</li>
      <li><strong>Les devoirs à heure et à place fixes,</strong> avec le matériel prêt et les écrans hors de vue.</li>
      <li><strong>Des blocs de travail courts :</strong> environ 10 à 15 minutes pour les plus jeunes, 20 à 25 pour les plus grands, suivis chacun d'une petite pause.</li>
      <li><strong>Commencer par quelque chose de faisable,</strong> puis attaquer le plus difficile tant qu'il reste de l'énergie.</li>
      <li><strong>Protéger le sommeil :</strong> heures de coucher régulières et pas d'écran dans l'heure qui précède. Les enfants d'âge primaire ont généralement besoin de 9 à 12 heures par nuit.</li>
    </ol>
    <div class="tipbox try"><b>À essayer ce soir</b>Demandez à votre enfant de noter sa journée de 1 à 5 avec ses doigts, puis demandez « Qu'est-ce qui rendrait demain un point meilleur ? ». Cela ouvre une conversation sur les soucis sans la rendre pesante.</div>

    <h2>4. Accompagner les enfants agités ou facilement distraits</h2>
    <p>Certains enfants ont plus d'énergie, plus d'impulsivité ou une attention plus courte que leurs camarades. Quelle qu'en soit la raison, ces stratégies aident :</p>
    <ul>
      <li><strong>Bouger d'abord :</strong> dix minutes de course, de sauts ou de vélo avant les devoirs rendent souvent les vingt minutes suivantes bien plus calmes.</li>
      <li><strong>Rendre les tâches visibles :</strong> une liste de trois à cinq petites étapes, cochées une par une, est plus facile à suivre que « fais tes devoirs ».</li>
      <li><strong>Utiliser un minuteur :</strong> « Travaille jusqu'à la sonnerie, puis deux minutes de pause. » Une fin claire aide à commencer.</li>
      <li><strong>Autoriser un mouvement discret :</strong> s'asseoir sur un coussin, serrer une balle souple ou travailler debout aide certains enfants à se concentrer.</li>
      <li><strong>Donner une consigne à la fois,</strong> en le regardant, et lui demander de la reformuler.</li>
      <li><strong>Repérer les bons moments :</strong> un compliment précis (« Tu as travaillé dix minutes sans t'arrêter ! ») motive bien plus que la critique.</li>
    </ul>
    <div class="tipbox"><b>Le mot de l'enseignant</b>En classe, les enfants très actifs donnent souvent le meilleur d'eux-mêmes quand ils ont une mission : distribuer les feuilles, effacer le tableau, porter les livres. Donner un but utile à leur énergie marche mieux que leur demander de la réprimer.</div>

    <h2>5. À propos du TDAH : quand demander un bilan</h2>
    <p>Le trouble du déficit de l'attention avec ou sans hyperactivité (TDAH) est un trouble reconnu qui touche l'attention, le niveau d'activité et le contrôle des impulsions. Être vif, bavard ou vite lassé ne signifie pas qu'un enfant a un TDAH ; beaucoup d'enfants traversent des périodes agitées. Un bilan peut être utile si :</p>
    <ul>
      <li>les difficultés d'attention, l'agitation ou l'impulsivité durent depuis au moins plusieurs mois ;</li>
      <li>elles apparaissent dans plusieurs contextes, par exemple à la maison et à l'école ;</li>
      <li>elles gênent nettement les apprentissages, les amitiés ou la vie de famille malgré de bonnes routines.</li>
    </ul>
    <div class="tipbox warn"><b>Important</b>Seul un professionnel de santé qualifié peut évaluer un TDAH ou d'autres troubles des apprentissages. Si vous êtes inquiet, parlez-en au médecin de votre enfant et à son enseignant, avec des exemples concrets. Cet article donne des repères éducatifs généraux et ne remplace pas un avis médical ou psychologique.</div>

    <h2>6. Travailler avec l'école</h2>
    <ul>
      <li><strong>Partagez ce que vous observez à la maison,</strong> et demandez ce que l'enseignant observe en classe. Les deux regards réunis sont bien plus utiles.</li>
      <li><strong>Convenez d'un ou deux petits aménagements :</strong> être placé près de l'enseignant, des écrits plus courts, du temps supplémentaire ou le droit de bouger.</li>
      <li><strong>Utilisez le même langage</strong> à la maison et à l'école pour les routines et les encouragements, afin que l'enfant reçoive des messages cohérents.</li>
      <li><strong>Refaites le point après quelques semaines</strong> pour voir ce qui a aidé.</li>
    </ul>

    <h2>Plus sur Kids Learning Hub</h2>
    <p>Pour des idées concrètes sur l'attention, lisez notre guide sur <a href="boosting-child-focus-and-attention.html">la concentration et l'attention</a>. Pour les inquiétudes liées aux maths, voyez <a href="overcoming-math-anxiety-in-kids.html">pourquoi les enfants disent « je déteste les maths »</a>. Nos <a href="../play/fr/">jeux en ligne</a> ne durent que quelques minutes, ce qui convient aux enfants qui ont besoin de pauses fréquentes.</p>
    ${cta('mathokids', 'De courtes séances de maths sereines, avec des objectifs clairs et des récompenses fréquentes — adaptées aux enfants qui apprennent mieux par petites étapes. Hors ligne et gratuit.')}

    <p>Des routines calmes, des tâches courtes, du mouvement et du sommeil règlent plus de problèmes que n'importe quel sermon. Et quand cela ne suffit pas, demander de l'aide tôt est un signe de bonne parentalité, pas d'échec.</p>`,

    es: `
    <span class="tag tips">Crianza</span>
    <h1>Gestionar el estrés escolar y acompañar a los niños inquietos o distraídos</h1>
    ${meta('es', 11)}
    <p class="lede">Algunos niños se preocupan antes de cada examen. Otros no aguantan sentados diez minutos de deberes. Muchos, las dos cosas. El estrés escolar y la inquietud se ven distintos, pero a menudo responden a lo mismo: rutinas previsibles, trabajo corto y concentrado, movimiento, dormir lo suficiente y adultos tranquilos. Esta guía explica qué pueden hacer las familias en casa y cuándo conviene pedir una opinión profesional.</p>

    <div class="toc"><b>En esta guía</b><ol>
      <li>Señales de estrés escolar</li>
      <li>Qué lo causa</li>
      <li>Una rutina diaria más tranquila</li>
      <li>Acompañar a niños inquietos o que se distraen con facilidad</li>
      <li>Sobre el TDAH: cuándo pedir una evaluación</li>
      <li>Trabajar con el colegio</li>
    </ol></div>

    <h2>1. Señales de estrés escolar</h2>
    <div class="tablewrap"><table>
      <tr><th>Cuerpo</th><th>Conducta</th><th>Palabras</th></tr>
      <tr><td>Dolor de tripa o de cabeza las mañanas de colegio; le cuesta dormirse; cansancio</td><td>Irritabilidad, lágrimas por poca cosa, evitar los deberes, no querer ir al colegio</td><td>«Soy malo en todo», «La profe me odia», «Voy a suspender»</td></tr>
    </table></div>
    <p>Un poco de estrés antes de un examen es normal e incluso puede ayudar a concentrarse. Se convierte en un problema cuando dura semanas, altera el sueño o el apetito, o impide disfrutar de lo que antes le gustaba.</p>

    <h2>2. Qué lo causa</h2>
    <ul>
      <li><strong>Lagunas de comprensión.</strong> Cuando no entiende una lección, cada lección siguiente parece más difícil y la preocupación crece.</li>
      <li><strong>Agendas sobrecargadas.</strong> Colegio, deberes, clases particulares y actividades pueden no dejar tiempo para descansar ni jugar.</li>
      <li><strong>Presión por los resultados.</strong> Comparaciones con hermanos o compañeros, o atención a las notas en vez de al esfuerzo.</li>
      <li><strong>Preocupaciones sociales.</strong> Los problemas de amistad son una causa oculta frecuente de no querer ir al colegio.</li>
      <li><strong>Falta de sueño.</strong> Un niño cansado tiene menos paciencia, menos concentración y más preocupaciones.</li>
    </ul>

    <h2>3. Una rutina diaria más tranquila</h2>
    <ol>
      <li><strong>Desconectar después del colegio:</strong> una merienda, algo de movimiento o juego al aire libre, y ninguna pregunta sobre notas durante la primera media hora.</li>
      <li><strong>Deberes a una hora y en un lugar fijos,</strong> con el material preparado y las pantallas fuera de la vista.</li>
      <li><strong>Bloques de trabajo cortos:</strong> unos 10–15 minutos para los pequeños y 20–25 para los mayores, cada uno seguido de una pausa breve.</li>
      <li><strong>Empezar por algo asequible,</strong> y después atacar lo más difícil mientras queda energía.</li>
      <li><strong>Proteger el sueño:</strong> horarios regulares y nada de pantallas la hora antes de dormir. Los niños de primaria suelen necesitar entre 9 y 12 horas por noche.</li>
    </ol>
    <div class="tipbox try"><b>Pruébalo esta noche</b>Pide a tu hijo que puntúe su día del 1 al 5 con los dedos y luego pregunta «¿Qué haría que mañana fuera un punto mejor?». Abre una conversación sobre sus preocupaciones sin que pese.</div>

    <h2>4. Acompañar a niños inquietos o que se distraen con facilidad</h2>
    <p>Algunos niños tienen más energía, más impulsividad o una atención más corta que sus compañeros. Sea cual sea el motivo, estas estrategias ayudan:</p>
    <ul>
      <li><strong>Primero moverse:</strong> diez minutos de correr, saltar o ir en bici antes de los deberes suelen hacer mucho más tranquilos los veinte minutos siguientes.</li>
      <li><strong>Hacer visibles las tareas:</strong> una lista de tres a cinco pasos pequeños, que se van tachando, es más fácil de seguir que «haz los deberes».</li>
      <li><strong>Usar un temporizador:</strong> «Trabaja hasta que suene y luego dos minutos de descanso». Un final claro ayuda a empezar.</li>
      <li><strong>Permitir un movimiento discreto:</strong> sentarse en un cojín, apretar una pelota blanda o trabajar de pie ayuda a algunos niños a concentrarse.</li>
      <li><strong>Dar una instrucción cada vez,</strong> mirándole a los ojos, y pedirle que la repita.</li>
      <li><strong>Pillar los buenos momentos:</strong> un elogio concreto («¡Has trabajado diez minutos sin parar!») motiva mucho más que la crítica.</li>
    </ul>
    <div class="tipbox"><b>Nota del profesor</b>En clase, los niños muy activos suelen rendir mejor cuando tienen una tarea: repartir hojas, borrar la pizarra, llevar libros. Dar a su energía un propósito útil funciona mejor que pedirles que la repriman.</div>

    <h2>5. Sobre el TDAH: cuándo pedir una evaluación</h2>
    <p>El trastorno por déficit de atención e hiperactividad (TDAH) es una condición reconocida que afecta a la atención, al nivel de actividad y al control de los impulsos. Ser movido, hablador o aburrirse pronto no significa tener TDAH; muchos niños pasan por etapas inquietas. Puede ser útil pedir una evaluación si:</p>
    <ul>
      <li>las dificultades de atención, la inquietud o la impulsividad duran al menos varios meses;</li>
      <li>aparecen en varios contextos, por ejemplo en casa y en el colegio;</li>
      <li>afectan claramente al aprendizaje, las amistades o la vida familiar pese a tener buenas rutinas.</li>
    </ul>
    <div class="tipbox warn"><b>Importante</b>Solo un profesional sanitario cualificado puede evaluar el TDAH u otras dificultades de aprendizaje. Si te preocupa, habla con el pediatra y con el profesor de tu hijo, con ejemplos concretos. Este artículo ofrece orientaciones educativas generales y no sustituye el consejo médico o psicológico.</div>

    <h2>6. Trabajar con el colegio</h2>
    <ul>
      <li><strong>Comparte lo que ves en casa</strong> y pregunta qué ve el profesor en clase. Las dos miradas juntas son mucho más útiles.</li>
      <li><strong>Acordad uno o dos ajustes pequeños:</strong> sentarse cerca del profesor, tareas escritas más cortas, más tiempo o permiso para moverse.</li>
      <li><strong>Usad el mismo lenguaje</strong> en casa y en el colegio para rutinas y refuerzos, para que el niño reciba mensajes coherentes.</li>
      <li><strong>Volved a reuniros al cabo de unas semanas</strong> para ver qué ha funcionado.</li>
    </ul>

    <h2>Más en Kids Learning Hub</h2>
    <p>Para ideas prácticas sobre la atención, lee nuestra guía sobre <a href="boosting-child-focus-and-attention.html">la concentración y la atención</a>. Para las preocupaciones con las matemáticas, mira <a href="overcoming-math-anxiety-in-kids.html">por qué los niños dicen «odio las mates»</a>. Nuestros <a href="../play/es/">juegos en el navegador</a> duran solo unos minutos, ideal para niños que necesitan pausas frecuentes.</p>
    ${cta('mathokids', 'Sesiones de matemáticas cortas y tranquilas, con objetivos claros y premios frecuentes — pensadas para niños que aprenden mejor en pasos pequeños. Sin conexión y gratis.')}

    <p>Rutinas tranquilas, tareas cortas, movimiento y sueño resuelven más problemas que cualquier sermón. Y cuando no basta, pedir ayuda pronto es señal de buena crianza, no de fracaso.</p>`,

    ar: `
    <span class="tag tips">تربية</span>
    <h1>إدارة الضغط المدرسي ومرافقة الأطفال كثيري الحركة أو سريعي التشتّت</h1>
    ${meta('ar', 11)}
    <p class="lede">بعض الأطفال يقلقون قبل كل اختبار، وبعضهم لا يستطيع الجلوس عشر دقائق أمام واجباته، وكثيرون يجمعون الأمرين. يختلف الضغط المدرسي عن فرط الحركة في مظهره، لكنهما يستجيبان غالبًا للأمور نفسها: روتين متوقَّع، وعمل قصير مركّز، وحركة، ونوم كافٍ، وكبار هادئون. يشرح هذا الدليل ما يستطيع الأولياء فعله في البيت، ومتى يستحق الأمر استشارة مختصّ.</p>

    <div class="toc"><b>في هذا الدليل</b><ol>
      <li>علامات الضغط المدرسي</li>
      <li>أسبابه</li>
      <li>روتين يومي أهدأ</li>
      <li>مرافقة الطفل كثير الحركة أو سريع التشتّت</li>
      <li>عن اضطراب فرط الحركة وتشتّت الانتباه: متى نطلب تقييمًا</li>
      <li>التعاون مع المدرسة</li>
    </ol></div>

    <h2>1. علامات الضغط المدرسي</h2>
    <div class="tablewrap"><table>
      <tr><th>الجسد</th><th>السلوك</th><th>الكلام</th></tr>
      <tr><td>ألم في البطن أو الرأس صباح أيام الدراسة، وصعوبة في النوم، وتعب</td><td>انفعال، وبكاء لأتفه الأسباب، وتهرّب من الواجبات، ورفض الذهاب إلى المدرسة</td><td>«أنا فاشل في كل شيء»، «المعلّمة تكرهني»، «سأرسب»</td></tr>
    </table></div>
    <p>قليل من التوتّر قبل الاختبار أمر طبيعي، وقد يساعد على التركيز. ويصبح مشكلة حين يستمرّ أسابيع، أو يُفسد النوم أو الشهية، أو يمنع الطفل من الاستمتاع بما كان يحبّه.</p>

    <h2>2. أسبابه</h2>
    <ul>
      <li><strong>ثغرات في الفهم.</strong> حين لا يفهم الطفل درسًا، يبدو كل درس بعده أصعب، فيكبر القلق.</li>
      <li><strong>جداول مزدحمة.</strong> المدرسة والواجبات والدروس الإضافية والأنشطة قد لا تترك وقتًا للراحة أو اللعب.</li>
      <li><strong>الضغط على النتائج.</strong> المقارنة بالإخوة أو الزملاء، أو الاهتمام بالنقاط بدل الجهد.</li>
      <li><strong>هموم اجتماعية.</strong> مشكلات الصداقة سبب خفيّ شائع لرفض الذهاب إلى المدرسة.</li>
      <li><strong>قلّة النوم.</strong> الطفل المتعب أقلّ صبرًا وتركيزًا وأكثر قلقًا.</li>
    </ul>

    <h2>3. روتين يومي أهدأ</h2>
    <ol>
      <li><strong>فترة استرخاء بعد المدرسة:</strong> وجبة خفيفة، وحركة أو لعب في الخارج، ولا أسئلة عن النقاط في نصف الساعة الأولى.</li>
      <li><strong>الواجبات في وقت ومكان ثابتين،</strong> مع تحضير الأدوات وإبعاد الشاشات عن النظر.</li>
      <li><strong>فترات عمل قصيرة:</strong> نحو 10–15 دقيقة للصغار و20–25 للأكبر، تليها كل مرة استراحة قصيرة.</li>
      <li><strong>البدء بشيء سهل المنال،</strong> ثم مواجهة المهمّة الأصعب ما دامت الطاقة جيدة.</li>
      <li><strong>حماية النوم:</strong> مواعيد نوم منتظمة، ولا شاشات في الساعة التي تسبق النوم. يحتاج أطفال الابتدائي عمومًا إلى ما بين 9 و12 ساعة في الليلة.</li>
    </ol>
    <div class="tipbox try"><b>جرّب هذا الليلة</b>اطلب من طفلك أن يقيّم يومه من 1 إلى 5 بأصابعه، ثم اسأله: «ما الذي قد يجعل الغد أفضل بنقطة واحدة؟». هذا يفتح الحديث عن همومه دون أن يثقل عليه.</div>

    <h2>4. مرافقة الطفل كثير الحركة أو سريع التشتّت</h2>
    <p>لدى بعض الأطفال طاقة أكبر، أو اندفاع أكثر، أو انتباه أقصر من زملائهم. وأيًّا كان السبب، تساعد هذه الاستراتيجيات:</p>
    <ul>
      <li><strong>الحركة أولًا:</strong> عشر دقائق من الجري أو القفز أو ركوب الدراجة قبل الواجبات تجعل العشرين دقيقة التالية أهدأ بكثير في الغالب.</li>
      <li><strong>اجعل المهامّ مرئية:</strong> قائمة من ثلاث إلى خمس خطوات صغيرة تُشطب واحدة واحدة أسهل اتّباعًا من «أنجز واجباتك».</li>
      <li><strong>استعمل مؤقّتًا:</strong> «اعمل حتى يرنّ المؤقّت، ثم استراحة دقيقتين». فالنهاية الواضحة تسهّل البداية.</li>
      <li><strong>اسمح بحركة هادئة:</strong> الجلوس على وسادة، أو ضغط كرة ليّنة، أو العمل وقوفًا يساعد بعض الأطفال على التركيز.</li>
      <li><strong>أعطِ تعليمة واحدة في كل مرة،</strong> مع النظر في عينيه، واطلب منه أن يعيدها.</li>
      <li><strong>التقط اللحظات الجيدة:</strong> المدح المحدّد («عملت عشر دقائق دون توقّف!») يحفّز أكثر بكثير من الانتقاد.</li>
    </ul>
    <div class="tipbox"><b>ملاحظة الأستاذ</b>في القسم، كثيرًا ما يقدّم الأطفال كثيرو الحركة أفضل ما عندهم حين تكون لديهم مهمّة: توزيع الأوراق، أو مسح السبّورة، أو حمل الكتب. إعطاء طاقتهم هدفًا نافعًا أنجح من مطالبتهم بكبتها.</div>

    <h2>5. عن اضطراب فرط الحركة وتشتّت الانتباه: متى نطلب تقييمًا</h2>
    <p>اضطراب فرط الحركة وتشتّت الانتباه حالة معروفة تؤثّر في الانتباه ومستوى النشاط والتحكّم في الاندفاع. لكن كون الطفل نشيطًا أو كثير الكلام أو سريع الملل لا يعني أنه مصاب به، فكثير من الأطفال يمرّون بفترات حركة زائدة. وقد يكون التقييم مفيدًا إذا:</p>
    <ul>
      <li>استمرّت صعوبات الانتباه أو فرط الحركة أو الاندفاع عدة أشهر على الأقل؛</li>
      <li>ظهرت في أكثر من مكان، كالبيت والمدرسة معًا؛</li>
      <li>أثّرت بوضوح في التعلّم أو الصداقات أو الحياة العائلية رغم وجود روتين جيد.</li>
    </ul>
    <div class="tipbox warn"><b>مهم</b>وحده المختصّ الصحي المؤهّل يستطيع تقييم هذا الاضطراب أو غيره من صعوبات التعلّم. إن كنت قلقًا فتحدّث إلى طبيب طفلك ومعلّمه، مع أمثلة ملموسة. يقدّم هذا المقال توجيهات تربوية عامة ولا يغني عن الرأي الطبي أو النفسي.</div>

    <h2>6. التعاون مع المدرسة</h2>
    <ul>
      <li><strong>شارِك ما تراه في البيت،</strong> واسأل عمّا يراه المعلّم في القسم. فالصورتان معًا أنفع بكثير.</li>
      <li><strong>اتّفقا على تعديل أو تعديلين صغيرين:</strong> الجلوس قرب المعلّم، أو تمارين كتابية أقصر، أو وقت إضافي، أو السماح بالحركة.</li>
      <li><strong>استعملا اللغة نفسها</strong> في البيت والمدرسة للروتين والتشجيع، حتى يتلقّى الطفل رسائل متّسقة.</li>
      <li><strong>التقيا مجددًا بعد بضعة أسابيع</strong> لمعرفة ما الذي ساعد.</li>
    </ul>

    <h2>المزيد على Kids Learning Hub</h2>
    <p>لأفكار عملية حول الانتباه، اقرأ دليلنا عن <a href="boosting-child-focus-and-attention.html">التركيز والانتباه</a>. وللقلق المرتبط بالرياضيات خصوصًا، انظر <a href="overcoming-math-anxiety-in-kids.html">لماذا يقول الأطفال «أكره الرياضيات»</a>. و<a href="../play/ar/">ألعابنا في المتصفّح</a> لا تدوم إلا بضع دقائق، وهذا يناسب الأطفال الذين يحتاجون إلى استراحات متكرّرة.</p>
    ${cta('mathokids', 'حصص رياضيات قصيرة وهادئة بأهداف واضحة ومكافآت متكرّرة — مناسبة للأطفال الذين يتعلّمون أفضل بخطوات صغيرة. دون إنترنت ومجانًا.')}

    <p>الروتين الهادئ والمهامّ القصيرة والحركة والنوم تحلّ مشكلات أكثر من أي موعظة. وحين لا تكفي، فطلب المساعدة مبكرًا علامة على حسن التربية لا على الفشل.</p>`,
  },

  faq: {
    en: [['What are the signs of school stress in children?', 'Stomach aches or headaches on school days, trouble sleeping, irritability, avoiding homework, reluctance to go to school and negative statements such as "I’m bad at everything".'],
         ['How can I help my restless child do homework?', 'Let them move before starting, break homework into a visible checklist, use a timer for short work blocks with breaks, give one instruction at a time and praise specific efforts.'],
         ['When should I ask for an ADHD assessment?', 'If difficulties with attention, restlessness or impulsivity have lasted for several months, appear both at home and at school, and clearly affect learning or relationships. Only a qualified professional can assess ADHD.']],
    fr: [['Quels sont les signes du stress scolaire chez l’enfant ?', 'Maux de ventre ou de tête les jours d’école, difficultés à dormir, irritabilité, devoirs évités, refus d’aller à l’école et phrases négatives comme « je suis nul en tout ».'],
         ['Comment aider mon enfant agité à faire ses devoirs ?', 'Laissez-le bouger avant de commencer, découpez les devoirs en une liste visible, utilisez un minuteur pour de courts blocs avec des pauses, donnez une consigne à la fois et félicitez des efforts précis.'],
         ['Quand demander un bilan pour un TDAH ?', 'Si les difficultés d’attention, l’agitation ou l’impulsivité durent depuis plusieurs mois, apparaissent à la maison comme à l’école et gênent nettement les apprentissages ou les relations. Seul un professionnel qualifié peut évaluer un TDAH.']],
    es: [['¿Cuáles son las señales de estrés escolar en los niños?', 'Dolor de tripa o de cabeza los días de colegio, problemas para dormir, irritabilidad, evitar los deberes, no querer ir al colegio y frases negativas como «soy malo en todo».'],
         ['¿Cómo ayudo a mi hijo inquieto con los deberes?', 'Deja que se mueva antes de empezar, divide los deberes en una lista visible, usa un temporizador para bloques cortos con pausas, da una instrucción cada vez y elogia esfuerzos concretos.'],
         ['¿Cuándo pedir una evaluación de TDAH?', 'Si las dificultades de atención, la inquietud o la impulsividad duran varios meses, aparecen en casa y en el colegio y afectan claramente al aprendizaje o las relaciones. Solo un profesional cualificado puede evaluar el TDAH.']],
    ar: [['ما علامات الضغط المدرسي عند الأطفال؟', 'ألم البطن أو الرأس في أيام الدراسة، وصعوبة النوم، والانفعال، والتهرّب من الواجبات، ورفض الذهاب إلى المدرسة، وعبارات سلبية مثل «أنا فاشل في كل شيء».'],
         ['كيف أساعد طفلي كثير الحركة على إنجاز واجباته؟', 'دعه يتحرّك قبل البدء، وقسّم الواجبات في قائمة مرئية، واستعمل مؤقّتًا لفترات عمل قصيرة مع استراحات، وأعطِ تعليمة واحدة في كل مرة، وامدح جهودًا محدّدة.'],
         ['متى أطلب تقييمًا لاضطراب فرط الحركة وتشتّت الانتباه؟', 'إذا استمرّت صعوبات الانتباه أو فرط الحركة أو الاندفاع عدة أشهر، وظهرت في البيت والمدرسة معًا، وأثّرت بوضوح في التعلّم أو العلاقات. ووحده المختصّ المؤهّل يستطيع التقييم.']],
  },
};
