/* Kids Learning Hub — picture vocabulary shared by the language worksheets
   (picture-words, missing-letters, first-letter, unscramble).
   One emoji + the everyday word in English, French, Spanish and Arabic.
   Single words only (no spaces or hyphens), Arabic without vowel marks.  */
(function(){
  const RAW = [
    ['🍎','apple','pomme','manzana','تفاحة'], ['🍌','banana','banane','plátano','موزة'], ['🍇','grapes','raisin','uvas','عنب'],
    ['🍓','strawberry','fraise','fresa','فراولة'], ['🍊','orange','orange','naranja','برتقالة'], ['🍋','lemon','citron','limón','ليمونة'],
    ['🍉','watermelon','pastèque','sandía','بطيخة'], ['🥕','carrot','carotte','zanahoria','جزرة'], ['🍅','tomato','tomate','tomate','طماطم'],
    ['🐶','dog','chien','perro','كلب'], ['🐱','cat','chat','gato','قطة'], ['🐟','fish','poisson','pez','سمكة'],
    ['🐦','bird','oiseau','pájaro','عصفور'], ['🐴','horse','cheval','caballo','حصان'], ['🐄','cow','vache','vaca','بقرة'],
    ['🐑','sheep','mouton','oveja','خروف'], ['🐭','mouse','souris','ratón','فأر'], ['🐰','rabbit','lapin','conejo','أرنب'],
    ['🦁','lion','lion','león','أسد'], ['🐘','elephant','éléphant','elefante','فيل'], ['🐒','monkey','singe','mono','قرد'],
    ['🐸','frog','grenouille','rana','ضفدع'], ['🦆','duck','canard','pato','بطة'], ['🐢','turtle','tortue','tortuga','سلحفاة'],
    ['🐝','bee','abeille','abeja','نحلة'], ['🦋','butterfly','papillon','mariposa','فراشة'], ['🐔','hen','poule','gallina','دجاجة'],
    ['🐻','bear','ours','oso','دب'], ['🐍','snake','serpent','serpiente','ثعبان'], ['🐳','whale','baleine','ballena','حوت'],
    ['🦒','giraffe','girafe','jirafa','زرافة'], ['🐯','tiger','tigre','tigre','نمر'], ['🐪','camel','chameau','camello','جمل'],
    ['🦉','owl','hibou','búho','بومة'], ['🏠','house','maison','casa','بيت'], ['🚗','car','voiture','coche','سيارة'],
    ['🚌','bus','bus','autobús','حافلة'], ['✈️','plane','avion','avión','طائرة'], ['🚲','bike','vélo','bicicleta','دراجة'],
    ['⛵','boat','bateau','barco','قارب'], ['☀️','sun','soleil','sol','شمس'], ['🌙','moon','lune','luna','قمر'],
    ['⭐','star','étoile','estrella','نجمة'], ['🌳','tree','arbre','árbol','شجرة'], ['🌸','flower','fleur','flor','زهرة'],
    ['📖','book','livre','libro','كتاب'], ['✏️','pencil','crayon','lápiz','قلم'], ['⚽','ball','ballon','pelota','كرة'],
    ['🔑','key','clé','llave','مفتاح'], ['🕐','clock','horloge','reloj','ساعة'], ['✋','hand','main','mano','يد'],
    ['👃','nose','nez','nariz','أنف'], ['👂','ear','oreille','oreja','أذن'], ['🥛','milk','lait','leche','حليب'],
    ['🍞','bread','pain','pan','خبز'], ['🧀','cheese','fromage','queso','جبن'], ['🍰','cake','gâteau','pastel','كعكة'],
    ['🪑','chair','chaise','silla','كرسي'], ['🚪','door','porte','puerta','باب'], ['🌧️','rain','pluie','lluvia','مطر'],
    ['❄️','snow','neige','nieve','ثلج'], ['🔥','fire','feu','fuego','نار'], ['💧','water','eau','agua','ماء'],
    ['🎁','gift','cadeau','regalo','هدية'], ['👑','crown','couronne','corona','تاج'], ['🥚','egg','œuf','huevo','بيضة'],
  ];
  const L = { en: 1, fr: 2, es: 3, ar: 4 };
  /* VOCAB.list(lang) → [{e, w, n}] where n = number of letters */
  window.VOCAB = {
    list(lang){ const i = L[lang] || 1; return RAW.map(r => ({ e: r[0], w: r[i], n: Array.from(r[i]).length })); },
    letters: w => Array.from(w),
    /* the alphabet children learn, in school order */
    ABC: { en: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', fr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', es: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', ar: 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي' },
    dir: lang => lang === 'ar' ? 'rtl' : 'ltr',
    /* n distinct random picks from arr, using the worksheet's seeded random */
    sample(arr, n){ const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(WS.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } return a.slice(0, n); },
  };
})();
