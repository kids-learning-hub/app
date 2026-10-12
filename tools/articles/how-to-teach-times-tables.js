/* Deepened 2026-10 (AdSense content-quality pass). */
const PLAY_BTN = `<a class="play" href="https://play.google.com/store/apps/details?id=com.matho.primaire" target="_blank" rel="noopener"><svg viewBox="0 0 512 512"><path fill="#34A853" d="M60 12c-5 3-8 9-8 17v454c0 8 3 14 8 17l246-244z"/><path fill="#EA4335" d="M306 256 63 13c1 0 2 0 3 1l312 180-72 62z"/><path fill="#FBBC04" d="M375 194 447 236c18 11 18 30 0 41l-72 42-73-63z"/><path fill="#4285F4" d="M66 499l240-243 69 63L66 500c-1 0-2-1 0-1z"/></svg><span><span class="g-sub">GET IT ON</span><span class="g-main">Google Play</span></span></a>`;
const CTA = (txt) => `
    <div class="appcta">
      <div class="ico" style="background:#3B82F6"><img src="../logos/mathokids.png" alt="MathoKids"></div>
      <div class="txt"><b>MathoKids</b><p>${txt}</p></div>
      ${PLAY_BTN}
    </div>`;

module.exports = {
  slug: 'how-to-teach-times-tables',
  date: '2026-07-09',
  minutes: 12,

  dataTitle: {
    en: 'How to Teach Times Tables: A 4-Week Plan That Works | Kids Learning Hub',
    fr: 'Apprendre les tables de multiplication : un plan en 4 semaines | Kids Learning Hub',
    es: 'Cómo enseñar las tablas de multiplicar: plan de 4 semanas | Kids Learning Hub',
    ar: 'كيف تعلّم طفلك جدول الضرب: خطة عملية في 4 أسابيع | Kids Learning Hub',
  },

  body: {
    en: `
    <span class="tag math">Math</span>
    <h1>How to Teach Times Tables to Kids — A Calm 4-Week Plan That Works</h1>
    <div class="meta"><span class="who"><span class="av">KL</span> Kids Learning Hub</span> · <span>Updated October 2026</span> · <span>12 min read</span></div>
    <p class="lede">A 10×10 times-table grid holds 100 facts, which can look huge to a child. Learn them in the right order, understand them before memorising, and practise ten minutes a day, and you are left with only six genuinely hard facts. This guide shows you exactly how.</p>

    <div class="toc"><b>In this guide</b><ol>
      <li>Understanding comes before memorising</li>
      <li>The right order: from 100 facts down to 6</li>
      <li>A strategy for every table</li>
      <li>A 4-week plan, ten minutes a day</li>
      <li>How to practise so it sticks</li>
      <li>Common mistakes to avoid</li>
      <li>How to know your child is ready to move on</li>
    </ol></div>

    <h2>1. Understanding comes before memorising</h2>
    <p>A child who can recite "seven eights are fifty-six" but cannot tell you what it means will forget it at the first difficulty. Before any chanting, make sure your child sees multiplication as <strong>equal groups</strong>. Take twelve buttons, beans or LEGO bricks and ask: "Can you make 3 groups of 4?" Then: "How many altogether?" Write it down as <strong>3 × 4 = 12</strong> and read it aloud as "3 groups of 4".</p>
    <p>Next, arrange the same objects in a rectangle: 3 rows of 4. This <strong>array</strong> is the most powerful picture in early multiplication. Turn the paper a quarter turn and you now have 4 rows of 3, yet the number of objects has not changed. Your child has just discovered, with their own eyes, that <strong>3 × 4 = 4 × 3</strong>. That single idea, called commutativity, halves the amount of work ahead.</p>
    <div class="tipbox try"><b>Try this at home (5 minutes)</b>Draw a 4 × 6 rectangle of dots on squared paper. Ask your child to cut it into two smaller rectangles, for example 4 × 5 and 4 × 1. They will see that 4 × 6 = 20 + 4 = 24. This is the idea behind almost every trick below.</div>

    <h2>2. The right order: from 100 facts down to 6</h2>
    <p>Most of us learned the tables from 1 to 10 in a row. That is the slowest route. Start with the tables that have obvious patterns, and use the facts already known to unlock the next ones. Look at how quickly the list of "new" facts shrinks:</p>
    <div class="tablewrap"><table>
      <tr><th>Step</th><th>Tables</th><th>Why this order</th></tr>
      <tr><td>1</td><td>×1, ×10</td><td>Immediate patterns: the number stays the same, or gets a zero on the end.</td></tr>
      <tr><td>2</td><td>×2, ×5</td><td>Doubles are familiar; ×5 answers always end in 0 or 5, like a clock face.</td></tr>
      <tr><td>3</td><td>Squares (3×3, 4×4…)</td><td>Easy to picture as real squares of dots and fun to learn.</td></tr>
      <tr><td>4</td><td>×3, ×4</td><td>×4 is "double the double"; ×3 is "×2 plus one more group".</td></tr>
      <tr><td>5</td><td>×9</td><td>The ×10 minus one group trick, and the finger trick.</td></tr>
      <tr><td>6</td><td>The "tricky six"</td><td>Only 6×7, 6×8, 7×8 (plus the squares 6×6, 7×7, 8×8) remain.</td></tr>
    </table></div>
    <p>Because every fact you learn also gives you its reverse (8 × 7 is 7 × 8), a child who has worked through steps 1 to 5 really has only a handful of facts left to memorise. Telling your child this at the start is very motivating: "There are not 100 facts to learn. There are six hard ones."</p>

    <h2>3. A strategy for every table</h2>
    <p>Children remember strategies much better than isolated answers. Each one below rests on facts your child already knows:</p>
    <ul>
      <li><strong>×2:</strong> double the number. 2 × 8 is "8 and 8", which is 16.</li>
      <li><strong>×4:</strong> double, then double again. 4 × 7: double 7 is 14, double 14 is 28.</li>
      <li><strong>×8:</strong> double three times. 8 × 6: 12, 24, 48.</li>
      <li><strong>×5:</strong> half of ×10. 5 × 8: 10 × 8 = 80, half of 80 is 40.</li>
      <li><strong>×3:</strong> ×2 plus one more group. 3 × 7 = 14 + 7 = 21.</li>
      <li><strong>×6:</strong> ×5 plus one more group. 6 × 7 = 35 + 7 = 42.</li>
      <li><strong>×9:</strong> ×10 minus one group. 9 × 7 = 70 − 7 = 63. The digits of the answer also add up to 9 (6 + 3).</li>
      <li><strong>The 9 finger trick:</strong> hold up ten fingers. For 9 × 4, fold down the fourth finger. Three fingers to the left, six to the right: 36.</li>
    </ul>
    <p><strong>Worked example, the famous 7 × 8:</strong> a child who knows 7 × 5 = 35 and 7 × 3 = 21 can build 7 × 8 = 35 + 21 = 56. Another child might double three times: 7, 14, 28, 56. A third might simply remember the pattern "5, 6, 7, 8" which reads as 56 = 7 × 8. All three are fine. What matters is that the child has a way back to the answer when memory fails.</p>

    <h2>4. A 4-week plan, ten minutes a day</h2>
    <p>Short daily sessions beat a long weekly one, because memory is strengthened each time we retrieve a fact after a little forgetting. Here is a realistic plan for a child of 7 to 9 who already understands what multiplication means:</p>
    <div class="tablewrap"><table>
      <tr><th>Week</th><th>New focus</th><th>Daily routine (10 min)</th></tr>
      <tr><td>1</td><td>×1, ×2, ×5, ×10</td><td>3 min with objects or arrays, 4 min game, 3 min "say it out loud" quiz in mixed order.</td></tr>
      <tr><td>2</td><td>×3, ×4 and the squares</td><td>Start with 2 minutes of week-1 facts, then the new strategies (double the double), then a game.</td></tr>
      <tr><td>3</td><td>×9, then ×6</td><td>Finger trick and "×10 minus one group". Keep a small list of facts your child hesitates on.</td></tr>
      <tr><td>4</td><td>The tricky six + mixed review</td><td>Only mixed questions from all tables. Use the hesitation list first, every day.</td></tr>
    </table></div>
    <p>If a week feels too fast, simply repeat it. A slower child who understands will overtake a faster child who only recites.</p>

    <h2>5. How to practise so it sticks</h2>
    <ul>
      <li><strong>Ask, don't show.</strong> Trying to recall an answer strengthens memory far more than reading it again. Flashcards, quick oral quizzes and games all work because they make the child retrieve.</li>
      <li><strong>Mix the tables.</strong> Once two or three tables are known, ask them in random order. Recognising which strategy to use is part of the skill.</li>
      <li><strong>Use three piles.</strong> With flashcards, sort them into "I know it instantly", "I know it slowly" and "I don't know it yet". Practise the last two piles most.</li>
      <li><strong>Say the whole fact.</strong> Ask your child to answer "6 times 7 is 42", not only "42". The full sentence links question and answer.</li>
      <li><strong>Celebrate streaks, not speed.</strong> Five days in a row deserves more praise than a fast time.</li>
    </ul>
    <div class="tipbox"><b>Teacher's note</b>Hesitation is information, not failure. When a child pauses on 6 × 8, that fact goes on the list for tomorrow. Over a week the list gets shorter, and the child can see their own progress.</div>

    <h2>6. Common mistakes to avoid</h2>
    <ul>
      <li><strong>Timed tests too early.</strong> Racing a clock before facts are secure creates anxiety and makes children guess. Introduce speed only when answers are accurate.</li>
      <li><strong>Only chanting from the start.</strong> A child who must chant "7, 14, 21, 28…" to reach 7 × 8 is counting, not remembering. Always ask facts out of order as well.</li>
      <li><strong>Skipping understanding.</strong> Without arrays and groups, multiplication becomes 100 meaningless sentences, and division will be hard later.</li>
      <li><strong>Long sessions.</strong> After about 15 minutes, attention drops. Stop while your child still wants more.</li>
      <li><strong>Comparing with siblings or classmates.</strong> Children learn tables at different speeds between ages 7 and 10. Compare your child only with last week.</li>
    </ul>
    <div class="tipbox warn"><b>A sign to slow down</b>If your child cries, freezes or says "I'm bad at maths" during practice, stop the quiz and go back to objects and games for a few days. Confidence is the foundation of everything else.</div>

    <h2>7. How to know your child is ready to move on</h2>
    <p>A table is truly learned when your child can:</p>
    <ol>
      <li>answer any fact in about three seconds without counting on their fingers;</li>
      <li>answer it in both orders (4 × 9 and 9 × 4);</li>
      <li>use it backwards for division: "56 shared into 8 groups is…?";</li>
      <li>still remember it a week later without extra practice.</li>
    </ol>
    <p>Do not worry if this takes several months. Most children become fluent between ages 8 and 10, and regular short practice matters far more than starting early.</p>

    <h2>Free tools on Kids Learning Hub</h2>
    <p>You can practise every step of this plan for free on our site: the <a href="../play/times-tables.html">Times Tables Race</a> game for daily retrieval, the <a href="../play/math-race.html">Math Race</a> for mixed review, <a href="../worksheets/multiplication.html">printable multiplication worksheets</a> generated at three levels, and a <a href="../worksheets/tables-poster.html">times-tables wall poster</a> to hang near your child's desk.</p>
    ${CTA('Adaptive times-tables practice that remembers which facts your child hesitates on — offline and free.')}

    <p>Keep it light, keep it short, and keep it regular. In a few weeks, the tables that once looked like a mountain will feel like a small hill your child is proud to have climbed.</p>`,

    fr: `
    <span class="tag math">Maths</span>
    <h1>Apprendre les tables de multiplication — un plan serein en 4 semaines</h1>
    <div class="meta"><span class="who"><span class="av">KL</span> Kids Learning Hub</span> · <span>Mis à jour en octobre 2026</span> · <span>12 min de lecture</span></div>
    <p class="lede">Une table de 10 × 10 contient 100 résultats, ce qui paraît énorme pour un enfant. En les apprenant dans le bon ordre, en les comprenant avant de les mémoriser et en s'entraînant dix minutes par jour, il ne reste que six résultats vraiment difficiles. Voici comment faire, étape par étape.</p>

    <div class="toc"><b>Dans ce guide</b><ol>
      <li>Comprendre avant de mémoriser</li>
      <li>Le bon ordre : de 100 résultats à 6</li>
      <li>Une stratégie pour chaque table</li>
      <li>Un plan de 4 semaines, dix minutes par jour</li>
      <li>S'entraîner pour retenir durablement</li>
      <li>Les erreurs fréquentes à éviter</li>
      <li>Comment savoir que l'enfant est prêt à passer à la suite</li>
    </ol></div>

    <h2>1. Comprendre avant de mémoriser</h2>
    <p>Un enfant qui récite « sept fois huit, cinquante-six » sans savoir ce que cela signifie l'oubliera à la première difficulté. Avant toute récitation, vérifiez qu'il voit la multiplication comme des <strong>groupes égaux</strong>. Prenez douze boutons, haricots ou briques LEGO et demandez : « Peux-tu faire 3 groupes de 4 ? » Puis : « Combien en tout ? » Écrivez <strong>3 × 4 = 12</strong> et lisez-le à voix haute : « 3 groupes de 4 ».</p>
    <p>Disposez ensuite les mêmes objets en rectangle : 3 rangées de 4. Ce <strong>tableau de points</strong> est l'image la plus puissante pour débuter la multiplication. Tournez la feuille d'un quart de tour : vous avez maintenant 4 rangées de 3, et pourtant le nombre d'objets n'a pas changé. Votre enfant vient de découvrir, de ses propres yeux, que <strong>3 × 4 = 4 × 3</strong>. Cette seule idée, la commutativité, divise par deux le travail à venir.</p>
    <div class="tipbox try"><b>À essayer à la maison (5 minutes)</b>Dessinez un rectangle de 4 × 6 points sur du papier quadrillé. Demandez à votre enfant de le couper en deux rectangles plus petits, par exemple 4 × 5 et 4 × 1. Il verra que 4 × 6 = 20 + 4 = 24. C'est l'idée qui se cache derrière presque toutes les astuces ci-dessous.</div>

    <h2>2. Le bon ordre : de 100 résultats à 6</h2>
    <p>La plupart d'entre nous ont appris les tables de 1 à 10, dans l'ordre. C'est le chemin le plus lent. Commencez par les tables aux régularités évidentes, puis servez-vous des résultats connus pour débloquer les suivants. Regardez comme la liste des résultats « nouveaux » rétrécit vite :</p>
    <div class="tablewrap"><table>
      <tr><th>Étape</th><th>Tables</th><th>Pourquoi cet ordre</th></tr>
      <tr><td>1</td><td>×1, ×10</td><td>Régularités immédiates : le nombre reste le même, ou on ajoute un zéro.</td></tr>
      <tr><td>2</td><td>×2, ×5</td><td>Les doubles sont familiers ; les résultats de ×5 finissent toujours par 0 ou 5, comme sur une horloge.</td></tr>
      <tr><td>3</td><td>Les carrés (3×3, 4×4…)</td><td>Faciles à imaginer comme de vrais carrés de points, et amusants à apprendre.</td></tr>
      <tr><td>4</td><td>×3, ×4</td><td>×4, c'est « le double du double » ; ×3, c'est « ×2 plus un groupe ».</td></tr>
      <tr><td>5</td><td>×9</td><td>L'astuce « ×10 moins un groupe » et l'astuce des doigts.</td></tr>
      <tr><td>6</td><td>Les « six difficiles »</td><td>Il ne reste que 6×7, 6×8, 7×8 (et les carrés 6×6, 7×7, 8×8).</td></tr>
    </table></div>
    <p>Comme chaque résultat appris donne aussi son inverse (8 × 7, c'est 7 × 8), un enfant qui a franchi les étapes 1 à 5 n'a plus qu'une poignée de résultats à mémoriser. Le lui dire dès le départ est très motivant : « Il n'y a pas 100 résultats à apprendre. Il y en a six difficiles. »</p>

    <h2>3. Une stratégie pour chaque table</h2>
    <p>Les enfants retiennent bien mieux une stratégie qu'un résultat isolé. Chacune s'appuie sur ce que l'enfant sait déjà :</p>
    <ul>
      <li><strong>×2 :</strong> doubler. 2 × 8, c'est « 8 et 8 », donc 16.</li>
      <li><strong>×4 :</strong> doubler, puis doubler encore. 4 × 7 : le double de 7 est 14, le double de 14 est 28.</li>
      <li><strong>×8 :</strong> doubler trois fois. 8 × 6 : 12, 24, 48.</li>
      <li><strong>×5 :</strong> la moitié de ×10. 5 × 8 : 10 × 8 = 80, la moitié de 80 est 40.</li>
      <li><strong>×3 :</strong> ×2 plus un groupe. 3 × 7 = 14 + 7 = 21.</li>
      <li><strong>×6 :</strong> ×5 plus un groupe. 6 × 7 = 35 + 7 = 42.</li>
      <li><strong>×9 :</strong> ×10 moins un groupe. 9 × 7 = 70 − 7 = 63. Les chiffres du résultat font aussi 9 (6 + 3).</li>
      <li><strong>L'astuce des doigts pour ×9 :</strong> levez les dix doigts. Pour 9 × 4, baissez le quatrième doigt. Trois doigts à gauche, six à droite : 36.</li>
    </ul>
    <p><strong>Exemple détaillé, le fameux 7 × 8 :</strong> un enfant qui connaît 7 × 5 = 35 et 7 × 3 = 21 peut construire 7 × 8 = 35 + 21 = 56. Un autre doublera trois fois : 7, 14, 28, 56. Un troisième retiendra la suite « 5, 6, 7, 8 », qui se lit 56 = 7 × 8. Les trois méthodes sont bonnes. L'essentiel est que l'enfant ait un chemin pour retrouver la réponse quand la mémoire flanche.</p>

    <h2>4. Un plan de 4 semaines, dix minutes par jour</h2>
    <p>De courtes séances quotidiennes valent mieux qu'une longue séance hebdomadaire, car la mémoire se renforce chaque fois qu'on retrouve un résultat après l'avoir un peu oublié. Voici un plan réaliste pour un enfant de 7 à 9 ans qui comprend déjà le sens de la multiplication :</p>
    <div class="tablewrap"><table>
      <tr><th>Semaine</th><th>Nouvel objectif</th><th>Routine quotidienne (10 min)</th></tr>
      <tr><td>1</td><td>×1, ×2, ×5, ×10</td><td>3 min avec des objets ou des tableaux de points, 4 min de jeu, 3 min de questions orales dans le désordre.</td></tr>
      <tr><td>2</td><td>×3, ×4 et les carrés</td><td>2 min de révision de la semaine 1, puis les nouvelles stratégies (le double du double), puis un jeu.</td></tr>
      <tr><td>3</td><td>×9, puis ×6</td><td>L'astuce des doigts et « ×10 moins un groupe ». Gardez une petite liste des résultats qui font hésiter l'enfant.</td></tr>
      <tr><td>4</td><td>Les six difficiles + révision mélangée</td><td>Uniquement des questions mélangées de toutes les tables. Commencez chaque jour par la liste des hésitations.</td></tr>
    </table></div>
    <p>Si une semaine paraît trop rapide, recommencez-la simplement. Un enfant plus lent qui comprend dépassera un enfant plus rapide qui ne fait que réciter.</p>

    <h2>5. S'entraîner pour retenir durablement</h2>
    <ul>
      <li><strong>Interroger plutôt que montrer.</strong> Chercher une réponse dans sa mémoire la renforce bien plus que la relire. Cartes, petites interrogations orales et jeux fonctionnent parce qu'ils obligent l'enfant à se souvenir.</li>
      <li><strong>Mélanger les tables.</strong> Dès que deux ou trois tables sont connues, posez les questions au hasard. Reconnaître quelle stratégie utiliser fait partie de la compétence.</li>
      <li><strong>Faire trois tas.</strong> Avec des cartes, triez-les en « je sais tout de suite », « je sais lentement » et « je ne sais pas encore ». Travaillez surtout les deux derniers tas.</li>
      <li><strong>Dire la phrase entière.</strong> Demandez à l'enfant de répondre « 6 fois 7, 42 », pas seulement « 42 ». La phrase complète relie la question à la réponse.</li>
      <li><strong>Fêter la régularité, pas la vitesse.</strong> Cinq jours d'affilée méritent plus de félicitations qu'un temps record.</li>
    </ul>
    <div class="tipbox"><b>Le mot de l'enseignant</b>Une hésitation est une information, pas un échec. Quand un enfant bloque sur 6 × 8, ce résultat va sur la liste du lendemain. En une semaine, la liste raccourcit et l'enfant voit lui-même ses progrès.</div>

    <h2>6. Les erreurs fréquentes à éviter</h2>
    <ul>
      <li><strong>Chronométrer trop tôt.</strong> Courir contre la montre avant que les résultats soient solides crée de l'angoisse et pousse l'enfant à deviner. N'introduisez la vitesse que lorsque les réponses sont justes.</li>
      <li><strong>Seulement réciter depuis le début.</strong> Un enfant qui doit réciter « 7, 14, 21, 28… » pour arriver à 7 × 8 compte, il ne se souvient pas. Posez aussi toujours les questions dans le désordre.</li>
      <li><strong>Sauter l'étape de compréhension.</strong> Sans groupes ni tableaux de points, la multiplication devient 100 phrases sans sens, et la division sera difficile plus tard.</li>
      <li><strong>Les séances trop longues.</strong> Après environ 15 minutes, l'attention baisse. Arrêtez pendant que votre enfant en redemande.</li>
      <li><strong>Comparer avec les frères, sœurs ou camarades.</strong> Entre 7 et 10 ans, chacun apprend les tables à son rythme. Comparez votre enfant seulement avec lui-même la semaine passée.</li>
    </ul>
    <div class="tipbox warn"><b>Un signe qu'il faut ralentir</b>Si votre enfant pleure, se fige ou dit « je suis nul en maths » pendant l'entraînement, arrêtez les questions et revenez quelques jours aux objets et aux jeux. La confiance est la base de tout le reste.</div>

    <h2>7. Comment savoir que l'enfant est prêt à passer à la suite</h2>
    <p>Une table est vraiment acquise quand votre enfant peut :</p>
    <ol>
      <li>donner n'importe quel résultat en trois secondes environ, sans compter sur ses doigts ;</li>
      <li>le donner dans les deux sens (4 × 9 et 9 × 4) ;</li>
      <li>l'utiliser à l'envers pour la division : « 56 partagé en 8 groupes, cela fait… ? » ;</li>
      <li>s'en souvenir encore une semaine plus tard sans entraînement supplémentaire.</li>
    </ol>
    <p>Ne vous inquiétez pas si cela prend plusieurs mois. La plupart des enfants deviennent à l'aise entre 8 et 10 ans, et un entraînement court et régulier compte bien plus que le fait de commencer tôt.</p>

    <h2>Des outils gratuits sur Kids Learning Hub</h2>
    <p>Chaque étape de ce plan peut se pratiquer gratuitement sur notre site : le jeu <a href="../play/times-tables.html?lang=fr">Course aux tables</a> pour la mémorisation quotidienne, la <a href="../play/math-race.html?lang=fr">Course de calcul</a> pour les révisions mélangées, des <a href="../worksheets/multiplication.html?lang=fr">fiches de multiplication à imprimer</a> générées sur trois niveaux, et un <a href="../worksheets/tables-poster.html?lang=fr">poster des tables</a> à accrocher près du bureau de votre enfant.</p>
    ${CTA('Un entraînement adaptatif aux tables qui retient les résultats sur lesquels votre enfant hésite — hors ligne et gratuit.')}

    <p>Restez léger, court et régulier. Dans quelques semaines, les tables qui ressemblaient à une montagne deviendront une petite colline que votre enfant sera fier d'avoir gravie.</p>`,

    es: `
    <span class="tag math">Matemáticas</span>
    <h1>Cómo enseñar las tablas de multiplicar — un plan tranquilo de 4 semanas</h1>
    <div class="meta"><span class="who"><span class="av">KL</span> Kids Learning Hub</span> · <span>Actualizado en octubre de 2026</span> · <span>12 min de lectura</span></div>
    <p class="lede">Una tabla de 10 × 10 contiene 100 resultados, y eso a un niño le parece enorme. Si se aprenden en el orden correcto, se entienden antes de memorizarlos y se practican diez minutos al día, solo quedan seis resultados realmente difíciles. Esta guía te explica cómo hacerlo, paso a paso.</p>

    <div class="toc"><b>En esta guía</b><ol>
      <li>Entender antes de memorizar</li>
      <li>El orden correcto: de 100 resultados a 6</li>
      <li>Una estrategia para cada tabla</li>
      <li>Un plan de 4 semanas, diez minutos al día</li>
      <li>Cómo practicar para que no se olvide</li>
      <li>Errores frecuentes que conviene evitar</li>
      <li>Cómo saber si tu hijo está listo para avanzar</li>
    </ol></div>

    <h2>1. Entender antes de memorizar</h2>
    <p>Un niño que recita «siete por ocho, cincuenta y seis» sin saber qué significa lo olvidará a la primera dificultad. Antes de cualquier canción, asegúrate de que ve la multiplicación como <strong>grupos iguales</strong>. Toma doce botones, alubias o piezas de LEGO y pregunta: «¿Puedes hacer 3 grupos de 4?». Y luego: «¿Cuántos hay en total?». Escríbelo como <strong>3 × 4 = 12</strong> y léelo en voz alta: «3 grupos de 4».</p>
    <p>Después coloca los mismos objetos formando un rectángulo: 3 filas de 4. Esta <strong>matriz</strong> es la imagen más potente para empezar a multiplicar. Gira el papel un cuarto de vuelta y ahora tienes 4 filas de 3, pero la cantidad de objetos no ha cambiado. Tu hijo acaba de descubrir, con sus propios ojos, que <strong>3 × 4 = 4 × 3</strong>. Esa sola idea, la propiedad conmutativa, reduce a la mitad el trabajo que queda.</p>
    <div class="tipbox try"><b>Pruébalo en casa (5 minutos)</b>Dibuja un rectángulo de 4 × 6 puntos en papel cuadriculado. Pide a tu hijo que lo corte en dos rectángulos más pequeños, por ejemplo 4 × 5 y 4 × 1. Verá que 4 × 6 = 20 + 4 = 24. Esa es la idea que hay detrás de casi todos los trucos de esta guía.</div>

    <h2>2. El orden correcto: de 100 resultados a 6</h2>
    <p>La mayoría aprendimos las tablas del 1 al 10, una detrás de otra. Es el camino más lento. Empieza por las tablas con patrones evidentes y usa los resultados ya conocidos para desbloquear los siguientes. Mira lo rápido que se reduce la lista de resultados «nuevos»:</p>
    <div class="tablewrap"><table>
      <tr><th>Paso</th><th>Tablas</th><th>Por qué en este orden</th></tr>
      <tr><td>1</td><td>×1, ×10</td><td>Patrones inmediatos: el número no cambia o se le añade un cero.</td></tr>
      <tr><td>2</td><td>×2, ×5</td><td>Los dobles son conocidos; los resultados de ×5 siempre terminan en 0 o 5, como en un reloj.</td></tr>
      <tr><td>3</td><td>Los cuadrados (3×3, 4×4…)</td><td>Fáciles de imaginar como cuadrados de puntos y divertidos de aprender.</td></tr>
      <tr><td>4</td><td>×3, ×4</td><td>×4 es «el doble del doble»; ×3 es «×2 y un grupo más».</td></tr>
      <tr><td>5</td><td>×9</td><td>El truco «×10 menos un grupo» y el truco de los dedos.</td></tr>
      <tr><td>6</td><td>Los «seis difíciles»</td><td>Solo quedan 6×7, 6×8, 7×8 (y los cuadrados 6×6, 7×7, 8×8).</td></tr>
    </table></div>
    <p>Como cada resultado aprendido también da su inverso (8 × 7 es 7 × 8), un niño que ha superado los pasos 1 a 5 solo tiene un puñado de resultados por memorizar. Decírselo desde el principio motiva mucho: «No hay 100 resultados que aprender. Hay seis difíciles».</p>

    <h2>3. Una estrategia para cada tabla</h2>
    <p>Los niños recuerdan mucho mejor una estrategia que un resultado aislado. Cada una se apoya en lo que tu hijo ya sabe:</p>
    <ul>
      <li><strong>×2:</strong> el doble. 2 × 8 es «8 y 8», es decir, 16.</li>
      <li><strong>×4:</strong> el doble y otra vez el doble. 4 × 7: el doble de 7 es 14, el doble de 14 es 28.</li>
      <li><strong>×8:</strong> doblar tres veces. 8 × 6: 12, 24, 48.</li>
      <li><strong>×5:</strong> la mitad de ×10. 5 × 8: 10 × 8 = 80, la mitad de 80 es 40.</li>
      <li><strong>×3:</strong> ×2 y un grupo más. 3 × 7 = 14 + 7 = 21.</li>
      <li><strong>×6:</strong> ×5 y un grupo más. 6 × 7 = 35 + 7 = 42.</li>
      <li><strong>×9:</strong> ×10 menos un grupo. 9 × 7 = 70 − 7 = 63. Las cifras del resultado también suman 9 (6 + 3).</li>
      <li><strong>El truco de los dedos para ×9:</strong> levanta los diez dedos. Para 9 × 4, baja el cuarto dedo. Tres dedos a la izquierda y seis a la derecha: 36.</li>
    </ul>
    <p><strong>Ejemplo resuelto, el famoso 7 × 8:</strong> un niño que sabe que 7 × 5 = 35 y 7 × 3 = 21 puede construir 7 × 8 = 35 + 21 = 56. Otro doblará tres veces: 7, 14, 28, 56. Un tercero recordará la secuencia «5, 6, 7, 8», que se lee 56 = 7 × 8. Las tres formas son válidas. Lo importante es que el niño tenga un camino para volver a la respuesta cuando falle la memoria.</p>

    <h2>4. Un plan de 4 semanas, diez minutos al día</h2>
    <p>Las sesiones cortas y diarias funcionan mejor que una larga a la semana, porque la memoria se refuerza cada vez que recuperamos un resultado después de haberlo olvidado un poco. Este es un plan realista para un niño de 7 a 9 años que ya entiende qué significa multiplicar:</p>
    <div class="tablewrap"><table>
      <tr><th>Semana</th><th>Nuevo objetivo</th><th>Rutina diaria (10 min)</th></tr>
      <tr><td>1</td><td>×1, ×2, ×5, ×10</td><td>3 min con objetos o matrices, 4 min de juego, 3 min de preguntas orales en desorden.</td></tr>
      <tr><td>2</td><td>×3, ×4 y los cuadrados</td><td>2 min repasando la semana 1, luego las nuevas estrategias (el doble del doble) y un juego.</td></tr>
      <tr><td>3</td><td>×9 y después ×6</td><td>El truco de los dedos y «×10 menos un grupo». Lleva una pequeña lista de los resultados en los que tu hijo duda.</td></tr>
      <tr><td>4</td><td>Los seis difíciles + repaso mezclado</td><td>Solo preguntas mezcladas de todas las tablas. Empieza cada día por la lista de dudas.</td></tr>
    </table></div>
    <p>Si una semana resulta demasiado rápida, simplemente repítela. Un niño más lento que entiende acabará adelantando a uno más rápido que solo recita.</p>

    <h2>5. Cómo practicar para que no se olvide</h2>
    <ul>
      <li><strong>Pregunta, no muestres.</strong> Intentar recordar una respuesta refuerza la memoria mucho más que volver a leerla. Las tarjetas, las preguntas orales rápidas y los juegos funcionan porque obligan a recordar.</li>
      <li><strong>Mezcla las tablas.</strong> En cuanto conozca dos o tres tablas, pregúntalas al azar. Reconocer qué estrategia usar también forma parte de la habilidad.</li>
      <li><strong>Haz tres montones.</strong> Con tarjetas, sepáralas en «lo sé al instante», «lo sé despacio» y «todavía no lo sé». Practica sobre todo los dos últimos.</li>
      <li><strong>Di la frase completa.</strong> Pide a tu hijo que responda «6 por 7, 42», no solo «42». La frase completa une la pregunta con la respuesta.</li>
      <li><strong>Celebra la constancia, no la velocidad.</strong> Cinco días seguidos merecen más elogios que un tiempo récord.</li>
    </ul>
    <div class="tipbox"><b>Nota del profesor</b>Una duda es información, no un fracaso. Cuando un niño se detiene en 6 × 8, ese resultado pasa a la lista de mañana. En una semana la lista se acorta y el niño ve su propio progreso.</div>

    <h2>6. Errores frecuentes que conviene evitar</h2>
    <ul>
      <li><strong>Cronometrar demasiado pronto.</strong> Competir contra el reloj antes de que los resultados estén firmes genera ansiedad y empuja a adivinar. Introduce la velocidad solo cuando las respuestas sean correctas.</li>
      <li><strong>Recitar siempre desde el principio.</strong> Un niño que tiene que recitar «7, 14, 21, 28…» para llegar a 7 × 8 está contando, no recordando. Pregunta siempre también en desorden.</li>
      <li><strong>Saltarse la comprensión.</strong> Sin grupos ni matrices, multiplicar se convierte en 100 frases sin sentido, y la división costará después.</li>
      <li><strong>Sesiones largas.</strong> A partir de unos 15 minutos, la atención baja. Para mientras tu hijo todavía quiera seguir.</li>
      <li><strong>Comparar con hermanos o compañeros.</strong> Entre los 7 y los 10 años, cada niño aprende las tablas a su ritmo. Compara a tu hijo solo con él mismo la semana anterior.</li>
    </ul>
    <div class="tipbox warn"><b>Una señal para ir más despacio</b>Si tu hijo llora, se bloquea o dice «soy malo en mates» mientras practica, deja las preguntas y vuelve unos días a los objetos y los juegos. La confianza es la base de todo lo demás.</div>

    <h2>7. Cómo saber si tu hijo está listo para avanzar</h2>
    <p>Una tabla está realmente aprendida cuando tu hijo puede:</p>
    <ol>
      <li>dar cualquier resultado en unos tres segundos, sin contar con los dedos;</li>
      <li>darlo en los dos órdenes (4 × 9 y 9 × 4);</li>
      <li>usarlo al revés para dividir: «56 repartido en 8 grupos es…?»;</li>
      <li>recordarlo una semana después sin práctica adicional.</li>
    </ol>
    <p>No te preocupes si lleva varios meses. La mayoría de los niños dominan las tablas entre los 8 y los 10 años, y la práctica corta y regular importa mucho más que empezar pronto.</p>

    <h2>Herramientas gratis en Kids Learning Hub</h2>
    <p>Puedes practicar cada paso de este plan gratis en nuestra web: el juego <a href="../play/times-tables.html?lang=es">Carrera de tablas</a> para recordar a diario, la <a href="../play/math-race.html?lang=es">Carrera de cálculo</a> para el repaso mezclado, <a href="../worksheets/multiplication.html?lang=es">fichas de multiplicar para imprimir</a> en tres niveles y un <a href="../worksheets/tables-poster.html?lang=es">póster de las tablas</a> para colgar junto al escritorio de tu hijo.</p>
    ${CTA('Práctica adaptativa de las tablas que recuerda en qué resultados duda tu hijo — sin conexión y gratis.')}

    <p>Que sea ligero, corto y regular. En pocas semanas, las tablas que parecían una montaña serán una pequeña colina que tu hijo estará orgulloso de haber subido.</p>`,

    ar: `
    <span class="tag math">الرياضيات</span>
    <h1>كيف تعلّم طفلك جدول الضرب — خطة هادئة في 4 أسابيع</h1>
    <div class="meta"><span class="who"><span class="av">KL</span> Kids Learning Hub</span> · <span>تحديث أكتوبر 2026</span> · <span>قراءة 12 دقيقة</span></div>
    <p class="lede">يحتوي جدول الضرب من 10 × 10 على 100 نتيجة، وهذا يبدو كثيرًا جدًا في نظر الطفل. لكن حين نتعلّمها بالترتيب الصحيح، ونفهمها قبل حفظها، ونتدرّب عشر دقائق يوميًا، لا يبقى إلا ست نتائج صعبة فعلًا. يشرح لك هذا الدليل الطريقة خطوة بخطوة.</p>

    <div class="toc"><b>في هذا الدليل</b><ol>
      <li>الفهم قبل الحفظ</li>
      <li>الترتيب الصحيح: من 100 نتيجة إلى 6</li>
      <li>استراتيجية لكل جدول</li>
      <li>خطة 4 أسابيع، عشر دقائق يوميًا</li>
      <li>كيف نتدرّب ليبقى الحفظ ثابتًا</li>
      <li>أخطاء شائعة يجب تجنّبها</li>
      <li>كيف تعرف أن طفلك مستعد للانتقال</li>
    </ol></div>

    <h2>1. الفهم قبل الحفظ</h2>
    <p>الطفل الذي يردّد «سبعة في ثمانية تساوي ستة وخمسين» دون أن يعرف معناها سينساها عند أول صعوبة. قبل أي ترديد، تأكّد أن طفلك يرى الضرب على أنه <strong>مجموعات متساوية</strong>. خذ اثني عشر زرًّا أو حبّة فول أو قطعة ليغو واسأله: «هل تستطيع أن تصنع 3 مجموعات في كل واحدة 4؟» ثم: «كم العدد كله؟» اكتب ذلك <strong>3 × 4 = 12</strong> واقرأه بصوت مرتفع: «3 مجموعات من 4».</p>
    <p>بعد ذلك رتّب الأشياء نفسها على شكل مستطيل: 3 صفوف في كل صف 4. هذا <strong>الترتيب الشبكي</strong> هو أقوى صورة لبداية تعلّم الضرب. أدِر الورقة ربع دورة فيصبح لديك 4 صفوف في كل صف 3، ومع ذلك لم يتغيّر عدد الأشياء. لقد اكتشف طفلك بعينيه أن <strong>3 × 4 = 4 × 3</strong>. هذه الفكرة وحدها، وتسمّى التبديلية، تختصر نصف العمل القادم.</p>
    <div class="tipbox try"><b>جرّب هذا في البيت (5 دقائق)</b>ارسم مستطيلًا من 4 × 6 نقاط على ورق مربّعات، واطلب من طفلك أن يقسمه إلى مستطيلين أصغر، مثل 4 × 5 و4 × 1. سيرى أن 4 × 6 = 20 + 4 = 24. هذه هي الفكرة التي تقوم عليها تقريبًا كل الحيل في هذا الدليل.</div>

    <h2>2. الترتيب الصحيح: من 100 نتيجة إلى 6</h2>
    <p>تعلّم أغلبنا الجداول من 1 إلى 10 بالتتابع، وهذا أبطأ طريق. ابدأ بالجداول ذات الأنماط الواضحة، ثم استعمل النتائج المعروفة لفتح الجداول التالية. لاحظ كيف تتقلّص قائمة النتائج «الجديدة» بسرعة:</p>
    <div class="tablewrap"><table>
      <tr><th>المرحلة</th><th>الجداول</th><th>لماذا هذا الترتيب</th></tr>
      <tr><td>1</td><td>×1، ×10</td><td>أنماط فورية: العدد يبقى كما هو، أو نضيف إليه صفرًا.</td></tr>
      <tr><td>2</td><td>×2، ×5</td><td>المضاعفات مألوفة، ونتائج ×5 تنتهي دائمًا بـ 0 أو 5 مثل دقائق الساعة.</td></tr>
      <tr><td>3</td><td>المربّعات (3×3، 4×4…)</td><td>سهلة التخيّل كمربّعات حقيقية من النقاط، وممتعة في الحفظ.</td></tr>
      <tr><td>4</td><td>×3، ×4</td><td>×4 هو «ضعف الضعف»، و×3 هو «×2 ومجموعة إضافية».</td></tr>
      <tr><td>5</td><td>×9</td><td>حيلة «×10 ناقص مجموعة» وحيلة الأصابع.</td></tr>
      <tr><td>6</td><td>«الستّ الصعبة»</td><td>لا يبقى إلا 6×7 و6×8 و7×8 (والمربّعات 6×6 و7×7 و8×8).</td></tr>
    </table></div>
    <p>ولأن كل نتيجة نتعلّمها تعطينا عكسها أيضًا (8 × 7 هي نفسها 7 × 8)، فإن الطفل الذي أنهى المراحل من 1 إلى 5 لا يبقى أمامه إلا عدد قليل جدًا من النتائج. قول هذا له منذ البداية محفّز جدًا: «ليست أمامك 100 نتيجة. أمامك ست صعبة فقط».</p>

    <h2>3. استراتيجية لكل جدول</h2>
    <p>يتذكّر الأطفال الاستراتيجية أفضل بكثير من النتيجة المعزولة. وكل واحدة من هذه الاستراتيجيات تعتمد على ما يعرفه الطفل مسبقًا:</p>
    <ul>
      <li><strong>×2:</strong> ضاعف العدد. 2 × 8 هي «8 و8»، أي 16.</li>
      <li><strong>×4:</strong> ضاعف ثم ضاعف مرة أخرى. 4 × 7: ضعف 7 هو 14، وضعف 14 هو 28.</li>
      <li><strong>×8:</strong> ضاعف ثلاث مرات. 8 × 6: 12، 24، 48.</li>
      <li><strong>×5:</strong> نصف ×10. 5 × 8: 10 × 8 = 80، ونصف 80 هو 40.</li>
      <li><strong>×3:</strong> ×2 ومجموعة إضافية. 3 × 7 = 14 + 7 = 21.</li>
      <li><strong>×6:</strong> ×5 ومجموعة إضافية. 6 × 7 = 35 + 7 = 42.</li>
      <li><strong>×9:</strong> ×10 ناقص مجموعة. 9 × 7 = 70 − 7 = 63. ومجموع رقمي النتيجة يساوي 9 أيضًا (6 + 3).</li>
      <li><strong>حيلة الأصابع لـ ×9:</strong> ارفع أصابعك العشرة. من أجل 9 × 4 اثنِ الإصبع الرابع. ثلاثة أصابع على جهة، وستة على الجهة الأخرى: 36.</li>
    </ul>
    <p><strong>مثال محلول، الشهير 7 × 8:</strong> الطفل الذي يعرف أن 7 × 5 = 35 وأن 7 × 3 = 21 يستطيع أن يبني 7 × 8 = 35 + 21 = 56. وطفل آخر سيضاعف ثلاث مرات: 7، 14، 28، 56. وثالث سيتذكّر تسلسل «5، 6، 7، 8» الذي يُقرأ 56 = 7 × 8. الطرق الثلاث كلها صحيحة. المهم أن يملك الطفل طريقًا يعود به إلى الجواب حين تخونه الذاكرة.</p>

    <h2>4. خطة 4 أسابيع، عشر دقائق يوميًا</h2>
    <p>الحصص القصيرة اليومية أفضل من حصة طويلة في الأسبوع، لأن الذاكرة تقوى في كل مرة نسترجع فيها نتيجة بعد أن ننساها قليلًا. هذه خطة واقعية لطفل بين 7 و9 سنوات يفهم معنى الضرب:</p>
    <div class="tablewrap"><table>
      <tr><th>الأسبوع</th><th>الهدف الجديد</th><th>الروتين اليومي (10 دقائق)</th></tr>
      <tr><td>1</td><td>×1، ×2، ×5، ×10</td><td>3 دقائق بالأشياء أو الترتيب الشبكي، 4 دقائق لعب، 3 دقائق أسئلة شفهية بترتيب عشوائي.</td></tr>
      <tr><td>2</td><td>×3، ×4 والمربّعات</td><td>دقيقتان لمراجعة الأسبوع الأول، ثم الاستراتيجيات الجديدة (ضعف الضعف)، ثم لعبة.</td></tr>
      <tr><td>3</td><td>×9 ثم ×6</td><td>حيلة الأصابع و«×10 ناقص مجموعة». احتفظ بقائمة صغيرة للنتائج التي يتردّد فيها طفلك.</td></tr>
      <tr><td>4</td><td>الستّ الصعبة + مراجعة مختلطة</td><td>أسئلة مختلطة من كل الجداول فقط. ابدأ كل يوم بقائمة التردّد.</td></tr>
    </table></div>
    <p>إذا بدا لك أسبوع ما سريعًا، فأعِده ببساطة. الطفل الأبطأ الذي يفهم سيسبق الطفل الأسرع الذي يردّد فقط.</p>

    <h2>5. كيف نتدرّب ليبقى الحفظ ثابتًا</h2>
    <ul>
      <li><strong>اسأل ولا تُرِ.</strong> محاولة تذكّر الجواب تقوّي الذاكرة أكثر بكثير من إعادة قراءته. البطاقات والأسئلة الشفهية السريعة والألعاب تنجح لأنها تجعل الطفل يسترجع.</li>
      <li><strong>اخلط الجداول.</strong> حين يعرف الطفل جدولين أو ثلاثة، اسأله بترتيب عشوائي. اختيار الاستراتيجية المناسبة جزء من المهارة.</li>
      <li><strong>اصنع ثلاث كومات.</strong> رتّب البطاقات في «أعرفها فورًا» و«أعرفها ببطء» و«لا أعرفها بعد»، وركّز التدريب على الكومتين الأخيرتين.</li>
      <li><strong>قُل الجملة كاملة.</strong> اطلب من طفلك أن يجيب «6 في 7 تساوي 42» لا «42» فقط. الجملة الكاملة تربط السؤال بالجواب.</li>
      <li><strong>احتفل بالاستمرار لا بالسرعة.</strong> خمسة أيام متتالية تستحق ثناءً أكبر من زمن قياسي.</li>
    </ul>
    <div class="tipbox"><b>ملاحظة الأستاذ</b>التردّد معلومة وليس فشلًا. حين يتوقّف الطفل عند 6 × 8، تنتقل هذه النتيجة إلى قائمة الغد. وخلال أسبوع تقصر القائمة، ويرى الطفل تقدّمه بنفسه.</div>

    <h2>6. أخطاء شائعة يجب تجنّبها</h2>
    <ul>
      <li><strong>التوقيت المبكر.</strong> السباق مع الساعة قبل أن تثبت النتائج يولّد القلق ويدفع الطفل إلى التخمين. أدخِل السرعة فقط حين تصبح الأجوبة صحيحة.</li>
      <li><strong>الترديد من البداية فقط.</strong> الطفل الذي يحتاج إلى ترديد «7، 14، 21، 28…» ليصل إلى 7 × 8 يَعُدّ ولا يتذكّر. اسأل دائمًا بترتيب عشوائي أيضًا.</li>
      <li><strong>تجاوز مرحلة الفهم.</strong> دون المجموعات والترتيب الشبكي يصبح الضرب 100 جملة بلا معنى، وتصعب القسمة لاحقًا.</li>
      <li><strong>الحصص الطويلة.</strong> بعد نحو 15 دقيقة ينخفض الانتباه. توقّف وطفلك ما زال يريد المزيد.</li>
      <li><strong>المقارنة بالإخوة أو الزملاء.</strong> بين 7 و10 سنوات يتعلّم كل طفل الجداول بإيقاعه. قارن طفلك بنفسه في الأسبوع الماضي فقط.</li>
    </ul>
    <div class="tipbox warn"><b>علامة على ضرورة التمهّل</b>إذا بكى طفلك أو تجمّد أو قال «أنا ضعيف في الرياضيات» أثناء التدريب، أوقف الأسئلة وعُد بضعة أيام إلى الأشياء والألعاب. الثقة هي أساس كل ما بعدها.</div>

    <h2>7. كيف تعرف أن طفلك مستعد للانتقال</h2>
    <p>يكون الجدول محفوظًا فعلًا حين يستطيع طفلك أن:</p>
    <ol>
      <li>يعطي أي نتيجة في نحو ثلاث ثوانٍ دون العدّ على أصابعه؛</li>
      <li>يعطيها في الاتجاهين (4 × 9 و9 × 4)؛</li>
      <li>يستعملها بالعكس في القسمة: «56 موزّعة على 8 مجموعات تساوي…؟»؛</li>
      <li>يتذكّرها بعد أسبوع دون تدريب إضافي.</li>
    </ol>
    <p>لا تقلق إن استغرق ذلك عدة أشهر. يتقن أغلب الأطفال الجداول بين 8 و10 سنوات، والتدريب القصير المنتظم أهم بكثير من البدء المبكر.</p>

    <h2>أدوات مجانية على Kids Learning Hub</h2>
    <p>يمكنك تطبيق كل خطوة من هذه الخطة مجانًا على موقعنا: لعبة <a href="../play/times-tables.html?lang=ar">سباق جداول الضرب</a> للاسترجاع اليومي، و<a href="../play/math-race.html?lang=ar">سباق الحساب</a> للمراجعة المختلطة، و<a href="../worksheets/multiplication.html?lang=ar">أوراق عمل الضرب للطباعة</a> بثلاثة مستويات، و<a href="../worksheets/tables-poster.html?lang=ar">ملصق جداول الضرب</a> لتعليقه قرب مكتب طفلك.</p>
    ${CTA('تدريب تكيّفي على جداول الضرب يتذكّر النتائج التي يتردّد فيها طفلك — دون إنترنت ومجانًا.')}

    <p>اجعل التدريب خفيفًا وقصيرًا ومنتظمًا. وبعد أسابيع قليلة، ستصبح الجداول التي بدت جبلًا تلّة صغيرة يفخر طفلك بأنه صعدها.</p>`,
  },

  faq: {
    en: [
      ['In what order should kids learn the times tables?', 'Start with 1, 10, 2 and 5, which have clear patterns, then the squares, then 3 and 4, then 9 and 6. Because 3 × 4 is the same as 4 × 3, only a handful of facts such as 6 × 7, 6 × 8 and 7 × 8 are left at the end.'],
      ['At what age should a child know their times tables?', 'Most children learn them between ages 7 and 9 and become fluent by around 10. Understanding what multiplication means and short daily practice matter more than starting early.'],
      ['How long does it take to memorise the times tables?', 'With about ten minutes of varied practice a day, most children who already understand multiplication become fluent in one to three months. Keep a list of the facts your child hesitates on and review it first each day.']],
    fr: [
      ['Dans quel ordre apprendre les tables de multiplication ?', "Commencez par 1, 10, 2 et 5, qui ont des régularités évidentes, puis les carrés, puis 3 et 4, puis 9 et 6. Comme 3 × 4 est égal à 4 × 3, il ne reste à la fin qu'une poignée de résultats comme 6 × 7, 6 × 8 et 7 × 8."],
      ['À quel âge un enfant doit-il connaître ses tables ?', 'La plupart des enfants les apprennent entre 7 et 9 ans et deviennent à l’aise vers 10 ans. Comprendre le sens de la multiplication et s’entraîner un peu chaque jour comptent davantage que commencer tôt.'],
      ['Combien de temps faut-il pour mémoriser les tables ?', 'Avec une dizaine de minutes d’entraînement varié par jour, la plupart des enfants qui comprennent la multiplication deviennent à l’aise en un à trois mois. Gardez une liste des résultats qui font hésiter votre enfant et révisez-la en premier chaque jour.']],
    es: [
      ['¿En qué orden se deben aprender las tablas de multiplicar?', 'Empieza por el 1, el 10, el 2 y el 5, que tienen patrones claros; luego los cuadrados, después el 3 y el 4, y por último el 9 y el 6. Como 3 × 4 es lo mismo que 4 × 3, al final solo quedan unos pocos resultados como 6 × 7, 6 × 8 y 7 × 8.'],
      ['¿A qué edad debe saberse un niño las tablas?', 'La mayoría las aprende entre los 7 y los 9 años y las domina hacia los 10. Entender qué significa multiplicar y practicar un poco cada día importa más que empezar pronto.'],
      ['¿Cuánto tiempo se tarda en memorizar las tablas?', 'Con unos diez minutos diarios de práctica variada, la mayoría de los niños que entienden la multiplicación las dominan en uno a tres meses. Lleva una lista de los resultados en los que tu hijo duda y repásala primero cada día.']],
    ar: [
      ['بأي ترتيب يتعلّم الطفل جداول الضرب؟', 'ابدأ بجداول 1 و10 و2 و5 لأن أنماطها واضحة، ثم المربّعات، ثم 3 و4، ثم 9 و6. ولأن 3 × 4 تساوي 4 × 3، لا يبقى في النهاية إلا عدد قليل من النتائج مثل 6 × 7 و6 × 8 و7 × 8.'],
      ['في أي عمر يجب أن يحفظ الطفل جداول الضرب؟', 'يتعلّمها أغلب الأطفال بين 7 و9 سنوات ويتقنونها نحو 10 سنوات. فهم معنى الضرب والتدريب القصير اليومي أهم من البدء المبكر.'],
      ['كم يستغرق حفظ جداول الضرب؟', 'مع نحو عشر دقائق يوميًا من التدريب المتنوّع، يتقن أغلب الأطفال الذين يفهمون الضرب الجداول خلال شهر إلى ثلاثة أشهر. احتفظ بقائمة النتائج التي يتردّد فيها طفلك وراجعها أولًا كل يوم.']],
  },
};
