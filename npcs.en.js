/*
  ЛИХИЕ: люди района (NPC).

  Чтобы добавить человека:
  1. Положите портрет в assets/npc/ (вертикальный, 3:4).
  2. Скопируйте любой блок { ... }, вставьте после последнего через запятую и поменяйте тексты.

  Поля:
  name        имя, как на подписи под фото
  nick        кличка или как его зовут свои (можно пустую строку)
  role        кто он, одной строкой
  group       в какую колонку доски: "svoi", "kontora", "rayon", "proshloe"
  photo, pos  путь к портрету и какая часть кадра видна ("50% 20%": по центру, ближе к верху)
  line        одна фраза на карточке
  about       абзацы в раскрытом деле
  note        пометка ручкой на полях (можно пустую строку)
  who         чей это человек: "Витя", "Лёша" или "оба"
*/
window.NPC_GROUPS = [
  ["svoi", "Our Own"],
  ["kontora", "The Office"],
  ["rayon", "District Bosses"],
  ["proshloe", "From the Past"]
];

window.NPCS = [
  {
    "id": "kornilov",
    "name": "Dima Kornilov",
    "nick": "",
    "role": "lieutenant, Viktor’s operative, 24",
    "group": "svoi",
    "photo": "assets/npc/kornilov.webp",
    "pos": "50% 25%",
    "line": "Hot-headed, brave, always first through the door.",
    "about": [
      "Lanky, freckled all over, hides a boyish face behind a wispy moustache. Worships Viktor and charges ahead of everyone, for which he regularly gets an earful.",
      "To his lads Viktor is like an older brother: first-name terms, he’ll cover for you and give you his last rouble, but he’ll come down on you hard, too."
    ],
    "note": "Went into the stairwell first again.",
    "who": "Vitya"
  },
  {
    "id": "marina",
    "name": "Marina",
    "nick": "",
    "role": "Viktor’s younger sister, Kolpino",
    "group": "svoi",
    "photo": "assets/npc/marina.webp",
    "pos": "50% 22%",
    "line": "Sharp tongue, always in a rush, always trying to marry her brother off.",
    "about": [
      "Tall like him, an ash blonde with his grey-green eyes. Raising Petka and Anyutka on her own, and the two of them hang off Uncle Vitya like a bunch of grapes: the canteen at the Izhora Plant by day, sewing to order by night. On the first of every month her brother brings money; she grumbles that she’s no charity case and takes it for the kids’ sake.",
      "Since Irina, she worries for her brother and eyes any woman beside him warily at first."
    ],
    "note": "Vit, come on, when already?..",
    "who": "Vitya"
  },
  {
    "id": "barinov",
    "name": "Oleg Barinov",
    "nick": "Barin",
    "role": "childhood friend, owner of Balt-Import and the White Nights casino",
    "group": "svoi",
    "photo": "assets/npc/barinov.webp",
    "pos": "50% 22%",
    "line": "Five years younger than Vitya, he used to tag along after him around the yard on Stachek. Now he wears Italian suits and keeps a security detail of Afghan vets.",
    "about": [
      "Thirty, a languages degree from Leningrad University, onyx rings and cigars. A charming talker and a generous show-off, always counting behind the smile. To him, Vitya is the older brother he never had.",
      "His firm, Balt-Import: food and alcohol “from Europe” through the Sea Port, warehouse No. 7. The port is under Lysy, so Barinov pays him too, and he has his own dealings with Captain Zorin. He won the White Nights casino on the Lieutenant Schmidt Embankment at preferans.",
      "Once a month he and Vitya have dinner without bodyguards in a little bar near Avtovo and reminisce about the yard; they never talk business. Both know their interests may one day collide."
    ],
    "note": "Don’t ask about the port.",
    "who": "Vitya"
  },
  {
    "id": "berezhnoy",
    "name": "Nikolai Fyodorovich Berezhnoy",
    "nick": "",
    "role": "colonel, head of GUVD homicide",
    "group": "kontora",
    "photo": "assets/npc/berezhnoy.webp",
    "pos": "50% 20%",
    "line": "A kindly “uncle” who calls Viktor “son.”",
    "about": [
      "Rosy-cheeked, soft hands, a silvery mane, horn-rimmed glasses, an immaculate uniform, smells of good cognac. Praises Viktor at meetings.",
      "Now and then he asks, in a fatherly way, not to rush certain cases. He has his own people upstairs, at the Smolny. Viktor worked it all out long ago and smiles back just as warmly.",
      "Viktor suspects Lysy’s money is behind every fatherly “don’t rush it”. No proof yet. He and Yershov, Viktor’s old boss, go way back."
    ],
    "note": "Smiles. Don’t trust him.",
    "who": "Vitya"
  },
  {
    "id": "zhanna",
    "name": "Zhanna Kovalchuk",
    "nick": "",
    "role": "Berezhnoy’s secretary, 29",
    "group": "kontora",
    "photo": "assets/npc/zhanna.webp",
    "pos": "50% 20%",
    "line": "First to hear every bit of gossip in the department.",
    "about": [
      "Platinum blonde with a tall fringe, bright nails, tight skirts, heels too high for the corridors, imported perfume.",
      "Has had her eye on Viktor for ages: brings him coffee, stays late, leans over his desk. He’s polite, cracks jokes and seems not to notice a thing, and that drives her up the wall more than anything."
    ],
    "note": "Don’t drink the coffee.",
    "who": "Vitya"
  },
  {
    "id": "trofimov",
    "name": "Gennady Ilyich Trofimov",
    "nick": "",
    "role": "senior investigator, Kirovsky District prosecutor’s office",
    "group": "kontora",
    "photo": "assets/npc/trofimov.webp",
    "pos": "50% 22%",
    "line": "An old wolf of the prosecutor’s office. Drinks, grumbles, but can’t be bought.",
    "about": [
      "Wiry, grey-faced, bushy eyebrows, a nicotine-yellow moustache, a rumpled raincoat, a scuffed briefcase, one Belomor after another.",
      "In ’96, murders are formally his to lead. He works almost every case in the district with Viktor and Lyosha, and they understand each other without finishing a sentence."
    ],
    "note": "Dominoes on Fridays.",
    "who": "both"
  },
  {
    "id": "gusev",
    "name": "Major Gusev",
    "nick": "",
    "role": "head of Kirovsky District CID, Lyosha’s boss",
    "group": "kontora",
    "photo": "assets/npc/gusev.webp",
    "pos": "50% 18%",
    "line": "Knife-edge creases, shiny shoes, a smile with one corner of the mouth.",
    "about": [
      "Trim, manicured hands, hair neatly parted, shaved till his jaw is blue, strong cologne. Picks up other people’s papers by the very edge.",
      "Can’t stand it when the city lot poke into his district. Viktor is pointedly polite with him, and keeps a separate page for Gusev in his notebook."
    ],
    "note": "His own page. Waiting.",
    "who": "both"
  },
  {
    "id": "zorin",
    "name": "Captain Zorin",
    "nick": "",
    "role": "FSB",
    "group": "kontora",
    "photo": "assets/npc/zorin.webp",
    "pos": "50% 22%",
    "line": "A face you forget at once. Eyes that forget nothing.",
    "about": [
      "About forty, medium height, grey suit, deliberately forgettable.",
      "Owes Viktor for a big case back in ’95. Can help with information, once, and only if it suits him.",
      "Not a friend, not a colleague: a debt. Has his own business around Barinov’s port deliveries."
    ],
    "note": "Call from a payphone only.",
    "who": "Vitya"
  },
  {
    "id": "lysy",
    "name": "Lysy",
    "nick": "",
    "role": "district boss",
    "group": "rayon",
    "photo": "assets/npc/lysy.webp",
    "pos": "50% 25%",
    "line": "Markets, car washes, a chunk of the port. Has his eye on the Tallinn Highway.",
    "about": [
      "Just over thirty: bull neck, shaved head with a pale scar above the right ear, leather jacket, heavy gold chain. Stands too close and holds your gaze longer than he should.",
      "In ’95 he tried to buy Viktor with money and a cut of the highway. Viktor turned him down in front of witnesses. It’s been a personal war ever since."
    ],
    "note": "Promised to “take him out.” We’ll see.",
    "who": "both"
  },
  {
    "id": "kot",
    "name": "Vadim Kotelnikov",
    "nick": "Kot",
    "role": "Lysy’s right hand, ex-detective",
    "group": "rayon",
    "photo": "assets/npc/kot.webp",
    "pos": "50% 22%",
    "line": "A thin smile that never reaches his eyes.",
    "about": [
      "Lean, moves softly, pale watchful eyes, a good suede jacket, a signet ring. Once worked in Kirovsky CID alongside Lyosha.",
      "In ’93 Viktor caught him running protection for dealers, and Kot got the sack. Now he handles “security” for Lysy, knows the militsiya kitchen inside out and is biding his time."
    ],
    "note": "Hasn’t forgotten. Won’t forget.",
    "who": "both"
  },
  {
    "id": "irina",
    "name": "Irina",
    "nick": "",
    "role": "Viktor’s ex-wife, a hairdresser from Narvskaya",
    "group": "proshloe",
    "photo": "assets/npc/irina.webp",
    "pos": "50% 22%",
    "line": "Beautiful, well-groomed and always in something new that someone else paid for.",
    "about": [
      "Dyed chestnut hair, a perfect set, long nails, a thin, petulant mouth. Gets her way with tears and silence.",
      "They were married from ’85 to ’92. Now she lives with Kot and has suddenly started ringing Viktor in the evenings: “Vit, remember when…” He has no wish to talk to her."
    ],
    "note": "Don’t pick up.",
    "who": "Vitya"
  },
  {
    "id": "lapin",
    "name": "Sergei Lapin",
    "nick": "Professor",
    "role": "captain, Viktor’s operative, 31",
    "group": "svoi",
    "photo": "assets/npc/lapin.webp",
    "pos": "50% 16%",
    "line": "Lives among papers and card files, finds what everyone else missed.",
    "about": [
      "Thin, stooped, thick glasses with one arm wrapped in electrical tape. A neat parting, ink on his fingers, the same grey suit every day.",
      "Quiet. Viktor trusts his conclusions more than the forensic experts’ reports."
    ],
    "note": "Ask the Professor, he’ll find it.",
    "who": "Vitya"
  },
  {
    "id": "shevchuk",
    "name": "Pal Palych Shevchuk",
    "nick": "",
    "role": "captain, Viktor’s operative, 53",
    "group": "svoi",
    "photo": "assets/npc/shevchuk.webp",
    "pos": "50% 16%",
    "line": "An old cynic, a year off retirement. Grumbles, drinks, knows his job.",
    "about": [
      "Heavy-set, red nose, a bald head with a grey horseshoe of hair, a baggy jacket, a Belomor tucked behind his ear. Been a captain since Brezhnev.",
      "When things get rough, he’s the one Viktor goes to for advice."
    ],
    "note": "Palych, don’t pour.",
    "who": "Vitya"
  },
  {
    "id": "gena",
    "name": "Gena",
    "nick": "",
    "role": "Marina’s ex-husband",
    "group": "svoi",
    "photo": "",
    "pos": "50% 20%",
    "line": "Charming, hopeless, a drinker.",
    "about": [
      "Marina threw him out in ’94. Every few months he turns up: either sober and pitiful, swearing he’s quit, or drunk outside the door, demanding money and “his” kids.",
      "Every time, Vitya comes over, marches him down the stairs by the scruff of the neck and has a quiet word with him in the yard. Then Gena vanishes for another six months."
    ],
    "note": "",
    "who": "Vitya"
  },
  {
    "id": "kids",
    "name": "Petka and Anyutka",
    "nick": "",
    "role": "Viktor’s nephew and niece, 8 and 5",
    "group": "svoi",
    "photo": "assets/npc/kids.webp",
    "pos": "50% 22%",
    "line": "Hang off Uncle Vitya like grapes.",
    "about": [
      "Petka: skinny, scraped knees, a missing front tooth. Anyutka: golden pigtails and huge eyes.",
      "They ride on Vitya’s shoulders and in the “Volvo.” With them he’s a big soft bear."
    ],
    "note": "A doll for Anyutka. NOT a gun for Petka.",
    "who": "Vitya"
  },
  {
    "id": "valya",
    "name": "Granny Valya",
    "nick": "",
    "role": "Valentina Petrovna, neighbour, 71",
    "group": "svoi",
    "photo": "assets/npc/valya.webp",
    "pos": "50% 16%",
    "line": "Pirozhki, gossip and walks with Naida.",
    "about": [
      "Small, round, a flowery headscarf, a quilted vest over her housecoat, glasses on a string.",
      "Walks Naida when Viktor’s away, feeds him pirozhki and grumbles that it’s high time he got married."
    ],
    "note": "Knows everything. Ask carefully.",
    "who": "Vitya"
  },
  {
    "id": "mikhalych",
    "name": "Mikhalych",
    "nick": "",
    "role": "ex-warrant officer of their company, car repair shop on the Tallinn Highway",
    "group": "svoi",
    "photo": "assets/npc/mikhalych.webp",
    "pos": "45% 14%",
    "line": "Hands of gold, swears quietly and nonstop.",
    "about": [
      "Wiry, straight as a rod, grey crew cut, bristly moustache, oil ground into his gnarled hands, a faded army jacket with no insignia.",
      "Sees every car coming into the city and is the first to call Viktor. Lyosha still addresses him formally."
    ],
    "note": "Suspicious car? Straight to Mikhalych.",
    "who": "both"
  },
  {
    "id": "rogov",
    "name": "Lieutenant Colonel Rogov",
    "nick": "",
    "role": "head of the Kirovsky OVD",
    "group": "kontora",
    "photo": "assets/npc/rogov.webp",
    "pos": "50% 16%",
    "line": "Leans back in his chair and folds his hands over his belly.",
    "about": [
      "Heavy-set, steel-grey hair with a deeply receding hairline, a broad red face, thick tinted glasses he peers over when the conversation turns unpleasant.",
      "Lets Lyosha do anything he’d rather not look into. Lyosha brings the awkward stuff straight to him, past Gusev."
    ],
    "note": "Pretends not to know. Convenient.",
    "who": "Lyosha"
  },
  {
    "id": "bondar",
    "name": "Sergei Bondar",
    "nick": "",
    "role": "lieutenant, Lyosha’s operative, 26",
    "group": "kontora",
    "photo": "assets/npc/bondar.webp",
    "pos": "40% 16%",
    "line": "Honest, thorough, and digging in the wrong place.",
    "about": [
      "Thin, long-armed, a fair cowlick, sticking-out ears, dark circles from lack of sleep. A clean collar, old boots polished to a shine.",
      "An outsider in the department. Lyosha is pushing him up the ladder."
    ],
    "note": "Good lad. That’s the trouble.",
    "who": "Lyosha"
  },
  {
    "id": "pestov",
    "name": "Lieutenant Colonel Pestov",
    "nick": "",
    "role": "traffic police, car registration",
    "group": "kontora",
    "photo": "assets/npc/pestov.webp",
    "pos": "50% 14%",
    "line": "Loud, greedy and reliable in his own way.",
    "about": [
      "Fat, red, sweaty, uniform stretched tight, a gold tooth flashing when he laughs.",
      "Registers imported cars, no awkward questions asked. Not a colleague but a bought man: Mikhalych’s cars go through him like a knife through butter."
    ],
    "note": "Cognac. Not the cheap stuff.",
    "who": "Vitya"
  },
  {
    "id": "zhora",
    "name": "Zhora Sapog",
    "nick": "Sapog",
    "role": "director of the Avtovo market, owner of bathhouses and warehouses, 42",
    "group": "rayon",
    "photo": "assets/npc/zhora.webp",
    "pos": "50% 20%",
    "line": "Ex-wrestler. Backgammon on Thursdays in the steam room.",
    "about": [
      "Stocky, short powerful neck, a dark crew cut going grey, a cauliflower ear and a flattened nose, small watchful eyes. Wool trousers, a soft turtleneck, a single gold signet ring.",
      "Besides the bathhouses and warehouses, he runs the Avtovo market as its director: the market pays Lyosha, not Lysy, and Lysy is leaning on Zhora harder and harder.",
      "He and Lyosha haggled for six months; now they remember each other’s birthdays. Now and then he feeds Viktor names from Lysy’s crew."
    ],
    "note": "Thursday. Banya. Don’t be late.",
    "who": "both"
  },
  {
    "id": "korney",
    "name": "Grandpa Korney",
    "nick": "",
    "role": "old-school thief, the district’s overseer",
    "group": "rayon",
    "photo": "assets/npc/korney.webp",
    "pos": "45% 16%",
    "line": "Tea held in both hands, and a deal both sides keep.",
    "about": [
      "Wizened, stooped, thin grey hair, a yellow wrinkled face, watery blue eyes, steel crowns, faded tattoos on his fingers.",
      "The deal with Gromov: children and old folk are off-limits, and Gromov keeps his hands off the obshchak."
    ],
    "note": "Keeps his word. For now.",
    "who": "both"
  },
  {
    "id": "mama",
    "name": "Lyosha’s Mum",
    "nick": "",
    "role": "lives nearby, calls in the evenings",
    "group": "proshloe",
    "photo": "assets/npc/mama.webp",
    "pos": "50% 18%",
    "line": "Wipes her palms on her apron before touching her son’s face.",
    "about": [
      "Big-boned, plump, strong hands, her once reddish-chestnut hair now almost grey and pinned up in a small bun. She has Lyosha’s grey-green eyes.",
      "Lyosha is noticeably softer around her. She feeds Vitya too whenever he drops by."
    ],
    "note": "Call Mum!",
    "who": "Lyosha"
  },
  {
    "id": "ershov",
    "name": "Lieutenant Colonel Yershov",
    "nick": "",
    "role": "Viktor’s former boss",
    "group": "proshloe",
    "photo": "",
    "pos": "50% 20%",
    "line": "Put Viktor on night shifts. Knew why.",
    "about": [
      "Viktor’s boss in the early nineties.",
      "Vitya won’t discuss the details."
    ],
    "note": "Don’t bring it up.",
    "who": "Vitya"
  },
  {
    "id": "moshkin",
    "name": "Moshkin",
    "nick": "",
    "role": "Lyosha’s informant",
    "group": "proshloe",
    "photo": "assets/npc/moshkin.webp",
    "pos": "50% 20%",
    "line": "Always sat facing the door. Found dead in the spring of ’96.",
    "about": [
      "Around forty, hollow cheeks, grey stubble, thin gold-rimmed glasses, tobacco-yellow fingers, a nylon jacket and a knitted hat he was forever twisting in his hands.",
      "The trail leads to Lysy’s people. Vitya and Lyosha are digging together."
    ],
    "note": "Who? What for?",
    "who": "both"
  },
  {
    "id": "lyonin",
    "name": "Shura Lyonin",
    "nick": "",
    "role": "small-time market reseller",
    "group": "proshloe",
    "photo": "assets/npc/lyonin.webp",
    "pos": "50% 20%",
    "line": "November ’95, Obvodny Canal. An accident. That’s what it says on paper.",
    "about": [
      "Skinny, long nose, fair hair down to his collar, a chipped-tooth grin, a jacket with a load of pockets, a loud synthetic sweater.",
      "Counted money fast."
    ],
    "note": "Case closed.",
    "who": "Lyosha"
  },
  {
    "id": "ryaboy",
    "name": "Tolik Ryabtsev",
    "nick": "Ryaboy",
    "role": "killed by the garages on Zaitseva St, aged 31",
    "group": "proshloe",
    "photo": "assets/npc/ryaboy.webp",
    "pos": "50% 22%",
    "line": "Night of 8 October, the garages on Zaitseva. One knife blow, upward under the ribs.",
    "about": [
      "Ex-boxer: broken nose, short haircut, a dark tracksuit, with a black leather jacket over it when it’s cold. Officially unemployed, drove a “wet asphalt” grey “devyatka”, lived with his mother on Veteranov. The kiosk girls called him Tolik: polite, bought prison-song tapes every week and never haggled.",
      "Once a week he collected a fat envelope at the market and drove it off somewhere. A tidy man: he wrote every sum down in a squared exercise book. The inside pocket of his jacket was ripped out, and the notebook wasn’t on him."
    ],
    "note": "Whose money? Driven where? Why the garages at two in the morning?",
    "who": "both"
  }
];

/*
  Пробковая доска на вкладке «Люди».
  pos     где висит карточка: x и y центра на доске 1960×1850, r наклон в градусах
  decor   карта, вырезки и снимки: type map / news (статья) / ad (объявление) / photo (снимок), x, y центра, ширина w, примерная высота h, наклон r;
          у статей: газета, дата, заголовок, подзаголовок, фото и body — абзацы, которые видно, если открыть вырезку;
          у снимков: src картинки (пока её нет, висит пустая рамка) и подпись cap; pen — приписка ручкой поверх (Витя или Лёша)
  links   ниточки: [кто, с кем, цвет], можно тянуть и к вырезкам по их id; цвета: red враги, blue свои и служба, gold деньги и сделки, white личное
  notes   записки ручкой: x, y, текст, кто писал (v Витя, l Лёша), что написано под ней, если сорвать; big: true для важных
  viktor, lesha, naida, pirat — герои и звери из bots.js, их фото берутся оттуда.
  Миниатюры на доске берутся из assets/thumbs/ (уменьшенная копия того же файла с подтянутой резкостью); если миниатюры нет, ставится оригинал.
*/
window.NPC_BOARD = {
  pos: {
    zorin:[130,130,-3], berezhnoy:[330,135,2], zhanna:[530,125,-2], trofimov:[730,135,1], rogov:[950,125,-2], gusev:[1140,140,3], pestov:[1470,125,-1],
    kornilov:[110,450,2], lapin:[280,450,-2], shevchuk:[450,460,3], viktor:[680,600,-2], lesha:[900,600,2], bondar:[1150,450,-3], mama:[1480,455,2],
    barinov:[110,640,-2], pirat:[1520,675,-4], mikhalych:[1000,860,-1],
    marina:[450,902,2], irina:[150,1157,-3], kot:[530,1157,2], lysy:[800,975,-2], zhora:[1060,1125,3], korney:[1400,885,-2], kids:[280,902,3], valya:[110,902,-3], naida:[1330,650,2], moshkin:[650,1085,-3], lyonin:[1200,1370,2], ryaboy:[1585,905,3]
  },
  links: [
    ['viktor','lesha','blue'],
    ['viktor','kornilov','blue'], ['viktor','lapin','blue'], ['viktor','shevchuk','blue'],
    ['viktor','berezhnoy','blue'], ['berezhnoy','zhanna','blue'], ['zhanna','viktor','white'],
    ['viktor','zorin','blue'], ['viktor','trofimov','blue'], ['lesha','trofimov','blue'],
    ['lesha','rogov','blue'], ['rogov','gusev','blue'], ['lesha','gusev','red'], ['lesha','bondar','blue'],
    ['gusev','lysy','gold'], ['viktor','lysy','red'], ['lesha','lysy','red'], ['lysy','kot','gold'],
    ['kot','viktor','red'], ['kot','lesha','red'], ['kot','irina','white'], ['irina','viktor','white'], ['irina','ershov','white'], ['ershov','viktor','red'], ['lesha','irina','red'],
    ['viktor','marina','white'], ['marina','gena','white'], ['marina','kids','white'], ['viktor','kids','white'],
    ['viktor','valya','white'], ['valya','naida','white'], ['viktor','naida','white'],
    ['viktor','barinov','white'], ['viktor','mikhalych','blue'], ['lesha','mikhalych','blue'], ['viktor','pestov','gold'], ['lesha','zhora','gold'], ['viktor','zhora','blue'],
    ['zhora','lyonin','red'], ['lesha','lyonin','blue'], ['lesha','moshkin','blue'], ['moshkin','lysy','red'], ['moshkin','lyonin','white'],
    ['viktor','korney','blue'], ['lesha','korney','blue'], ['lesha','mama','white'], ['mama','viktor','white'], ['lesha','pirat','white'],
    ['korney','lysy','red'], ['korney','zhora','gold'], ['korney','kot','red'],
    ['zhora','lysy','red'], ['zhora','kot','red'], ['ad_market','zhora','gold'], ['ryaboy','zhora','gold'], ['rogov','zhora','gold'], ['bondar','zhora','red'], ['lyonin','zhora','gold'],
    ['gusev','kot','gold'], ['gusev','bondar','blue'], ['gusev','trofimov','blue'], ['rogov','trofimov','blue'], ['rogov','bondar','blue'], ['berezhnoy','ershov','blue'], ['berezhnoy','zorin','blue'], ['berezhnoy','lysy','gold'],
    ['zhanna','shevchuk','blue'], ['kornilov','lapin','blue'], ['lapin','shevchuk','blue'], ['kornilov','shevchuk','blue'],
    ['zorin','barinov','gold'], ['barinov','lysy','gold'], ['pestov','mikhalych','gold'], ['lesha','pestov','gold'],
    ['irina','marina','red'], ['irina','lysy','white'], ['valya','marina','white'], ['kot','moshkin','red'],
    ['n_yard','viktor','blue'], ['n_yard','ryaboy','white'], ['viktor','ryaboy','blue'], ['lesha','ryaboy','blue'], ['ryaboy','mikhalych','blue'], ['n_yard','lesha','blue'], ['n_fire','lesha','blue'], ['n_canal','lyonin','red'], ['n_road','lysy','red'], ['n_road','mikhalych','blue'],
    ['ph_gk','gusev','gold'], ['ph_gk','kot','gold'], ['ph_ik','irina','white'], ['ph_ik','kot','white'], ['n_lysy','lysy','red'], ['ad_barinov','barinov','gold'], ['ph_lz','lesha','gold'], ['ph_lz','zhora','gold'], ['ph_lz','bondar','blue'], ['n_press','viktor','blue'], ['n_press','berezhnoy','gold']
  ],
  decor: [
    {id:'map', type:'map', x:1800, y:330, w:300, h:400, r:2},
    {id:'n_yard', type:'news', x:1790, y:862, w:290, h:250, r:-2, paper:'Evening City', date:'8 October 1996', head:'Body Found by Garages on Zaitseva St', sub:'Stab wound. Twelve witnesses, and each saw something different.', photo:'assets/yard.webp',
      body:['On the night of 8 October, residents found the body of a man of about thirty in a leather jacket in the courtyard of a building on Zaitseva Street. According to neighbours, at around two in the morning “someone was shouting” by the garages, but nobody went to the window.', 'The Kirovsky District CID was first on the scene, followed by officers from the GUVD homicide department. The victim’s identity is being established. Asked by our correspondent, one of the detectives answered briefly: “We’re on it.”', 'This is already the third murder in the district since the start of autumn.'],
      pen:'“We’re on it” — that’s Lyokha. I’d have kept it shorter. — V.'},
    {id:'n_fire', type:'news', x:1672, y:175, w:236, h:180, r:-3, paper:'Evening City', date:'22 October 1996', head:'Fire at Avtovo Market', sub:'Meat pavilion burns down, watchman killed.',
      body:['At around three in the morning, a meat pavilion caught fire at Avtovo Market. Firefighters had the blaze out by morning. The body of the night watchman was found inside the pavilion.', 'Market director G. A. Sapozhnikov blamed old wiring and promised trading would reopen as early as Monday. Tenants of neighbouring pavilions say that the day before they had been “advised” to change their security.', 'The Kirovsky District CID does not rule out arson.'],
      pen:'Wiring, he says. Sure. — L.'},
    {id:'n_canal', type:'news', x:330, y:1395, w:200, h:190, r:-3, paper:'Smena', date:'28 November 1995', head:'Body in the Obvodny Canal', sub:'Market trader. Investigators say: an accident.',
      body:['The body of 34-year-old Alexander L., a trader at Avtovo Market, was found in the Obvodny Canal near the Baltic Station. According to the militsiya, the deceased was drunk and probably slipped on the icy embankment.', 'The case has been closed for lack of a criminal offence.'],
      pen:''},
    {id:'n_road', type:'news', x:1480, y:1110, w:230, h:170, r:4, paper:'Business Petersburg', date:'October 1996', head:'Who Runs the Tallinn Highway?', sub:'Garages, petrol stations, car washes: the road’s new masters.',
      body:['Over the past year, nearly every petrol station and car wash on the Tallinn Highway has changed hands. The new owners prefer not to give their names, and the old ones prefer not to remember.', 'Locally, people mention one surname, or rather one nickname. Our source asked us not to print it.', 'Only a couple of car repair shops still run the old way, and rumour has it you’d “better not go poking your nose in” there.'],
      pen:'That’s about Mikhalych. Mikhalych is pleased. — V.'},
    {id:'ph_gk', type:'photo', x:1320, y:320, w:200, h:190, r:-4, src:'assets/board/gusev-kot.webp', cap:'Gusev and Kot, garages on Stachek, 2:10. An envelope?', pen:''},
    {id:'ad_market', type:'ad', x:1858, y:592, w:176, h:190, r:6, paper:'Advertisement. “Evening City”', head:'AVTOVO MARKET', body:['Stalls and pavilions for rent.', '24-hour security. Order and peace of mind.', 'Enquiries to the director: G. A. Sapozhnikov.'], pen:'“Order and peace of mind.” Yeah, right. — L.'},
    {id:'ph_ik', type:'photo', x:340, y:1157, w:220, h:200, r:2, src:'assets/board/irina-kot.webp', cap:'Irina and Kotelnikov, Nevsky, outside a restaurant. October.', pen:''},
    {id:'n_lysy', type:'news', x:850, y:1250, w:260, h:230, r:-2, paper:'Evening City', date:'29 December 1995', head:'Gifts for the Orphanage', sub:'A Kirovsky District businessman brought the orphans tangerines, sweets and a new TV.', photo:'assets/board/lysy-charity.webp',
      body:['On the eve of the New Year, a local businessman who wished to remain anonymous visited Children’s Home No. 7. The children received tangerines, sweets and a Japanese TV: the old one had broken back in spring.', '“Children are sacred,” he told our correspondent, and asked us not to photograph his face.', 'The orphanage administration expressed its gratitude and its hope for further cooperation.'],
      pen:'A saint. A proper icon. — V.'},
    {id:'ad_barinov', type:'ad', x:318, y:650, w:236, h:190, r:3, paper:'Advertisement. “Business Petersburg”', head:'“BALT-IMPORT”', body:['European food and alcohol, wholesale and retail.', 'Direct deliveries via the Sea Port.', 'Warehouse No. 7. Discounts for regular customers.'], pen:'Olezha, “from Europe.” Of course. — V.'},
    {id:'n_press', type:'news', x:1790, y:1255, w:330, h:520, r:2, wide:true, paper:'Smena', date:'11 October 1996', head:'Major Gromov: “We’ll Find Him”', sub:'GUVD homicide on the murder by the garages on Zaitseva St. Briefly.', photo:'assets/board/viktor-press.webp',
      body:['Yesterday, outside the GUVD building at Liteyny 4, journalists waited nearly an hour for anyone at all to tell them how the investigation into the murder by the garages on Zaitseva Street was going. Out onto the steps came Major Viktor Gromov of the homicide department.', '“Any suspects?” “Yes.” “How many?” “Enough.” “Is the murder linked to the carve-up of Avtovo Market?” “No comment.”', 'Asked when to expect results, the major looked at his watch, said “We’ll find him,” and went back inside. The GUVD press office promised details later.'],
      pen:'They wheeled Semyonych out to the press. Berezhnoy promised him a bonus for it. Didn’t say whether in cash or in Zhanna. — L.', pen2:'One word, and a whole article. Last time you talked at them for two hours, and all they printed was “ginger major.” — V.'},
    {id:'ph_lz', type:'photo', x:1250, y:1125, w:200, h:190, r:3, src:'assets/board/lesha-zhora.webp', cap:'Tikhonov and Sapog outside the banya, Thursday. Bondar’s shot?', pen:'Bondar, you’ll answer for this photo one day. — L.'}
  ],
  notes: [
    {x:1140, y:292, t:'Goose → Lysy. Leaks the raids. Prove it!', w:'v', big:true, under:'Hey! That’s the key evidence. Put it back. — V.'},
    {x:330, y:292, t:'Smiles. Don’t trust. Calls the Smolny.', w:'v', under:'Put it back. If Berezhnoy sees I’ve pinned him on the board, I’m done. — V.'},
    {x:150, y:1327, t:'Irka’s with Kot. Calls in the evenings. Do NOT pick up.', w:'l', under:'Give it back. I wrote that for Vitya so he wouldn’t forget. — L.'},
    {x:1160, y:985, t:'Thursday: banya, backgammon. Don’t be late.', w:'l', under:'And now who’s going to tell Zhora I’m running late? — L.'},
    {x:1290, y:815, t:'Zhora runs the market now too. The bathhouse director.', w:'l', under:'That’s not rubbish, that’s operational intelligence. — L.'},
    {x:915, y:1075, t:'Who? Lysy’s people? Or…', w:'l', big:true, under:'Don’t touch. I haven’t decided what to make of it myself yet. — L.'},
    {x:205, y:1027, t:'Granny Valya knows more than the GUVD.', w:'v', under:'That’s it. Now she’ll find out I put her on the board. — V.'},
    {x:905, y:827, t:'Mikhalych: every car off the highway. Call him first: 130-47-82.', w:'v', under:'Hands off! That’s been up since ninety-two. — V.'},
    {x:560, y:832, t:'Marina: money on the 1st. Drive out to Kolpino!!! tel. 484-33-12', w:'v', under:'Give it back, or I’ll forget again and Marinka will kill me. — V.'},
    {x:530, y:290, t:'Don’t drink Zhanna’s coffee.', w:'l', under:'I mean it. Don’t. — L.'},
    {x:1470, y:300, t:'Pestov: plates, no questions asked. Cognac.', w:'v', under:'You never saw this. Hang it back up. — V.'},
    {x:1150, y:600, t:'Bondar’s digging. Good lad. Trouble.', w:'l', big:true, under:'What are you doing?! Put it back before he sees. — L.'},
    {x:530, y:1302, t:'Kotelnikov. Biding his time since ’93.', w:'v', under:'You tore it down, so now you’re the one watching him. — V.'},
    {x:1080, y:1245, t:'Promised to “take him out.” We’ll see.', w:'v', under:'That promise wasn’t made to you. Give it back. — V.'},
    {x:130, y:290, t:'Call from a payphone only.', w:'v', under:'Great. Now everyone knows where I call from. — V.'},
    {x:1030, y:398, t:'Lyokha, was it you who nicked the pushpins? — V.', w:'v', under:'Me. — L.'},
    {x:1390, y:1395, t:'DON’T TOUCH THE BOARD. Vitya.', w:'v', big:true, under:'I wrote it, didn’t I? Don’t touch. — V.'},
    {x:1580, y:1050, t:'Who’s “T.” in the notebook?', w:'v', under:'Put it down. I don’t know yet if I even want to know. — V.'},
    {x:1655, y:545, t:'All three in one district. Coincidence?', w:'l', under:'Tore it off? Then you work out whether it’s a coincidence. — L.'}
  ]
};
