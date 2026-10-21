/*
  ЛИХИЕ: квартира Олега Баринова. Все тексты здесь, страница oleg.html только рисует.
  Без спойлеров: только то, что можно знать до игры.

  Как поправить:
  · records  — пластинки: artist, title, year, note (записка Олега), c1/c2 — цвета конверта, secret:true — спрятанная
  · book     — записная книжка: буква → записи {name, tel, note, cross:true — номер зачёркнут}
  · album    — фотоальбом: страницы по две-три фотографии {cap — подпись, img — путь к картинке или пусто}
               Картинку можно положить в assets/oleg/ и вписать путь, например "assets/oleg/dvor-1974.webp"
  · dossier  — досье
  · eggs     — подписи к мелочам в гостиной
*/
window.OLEG = {
ru:{
  title:'Квартира Баринова',
  where:'Васильевский остров · пентхаус · октябрь 1996',
  hint:'Хозяина нет, но тётя Зина разрешила посмотреть. Нажимайте на вещи.',
  welcome:['тётя Зина', 'Проходите. Только ничего не трогайте! Хотя трогайте, он всё равно не заметит.'],
  nav:{room:'Гостиная', records:'Пластинки', book:'Записная книжка', album:'Фотоальбом', dossier:'Досье', back:'← Подъезд', backShort:'←', close:'← В гостиную', lang:'EN', langHref:'oleg.en.html'},
  tags:{records:'Пластинки', book:'Записная книжка', album:'Фотоальбом', dossier:'Досье'},
  cards:[
    ['records', 'Пластинки', 'Синатра, когда не спится. «Кино», когда никто не видит.'],
    ['book', 'Записная книжка', 'Кому он звонит, кому нет и что пишет на полях.'],
    ['album', 'Фотоальбом', 'Двор на Стачек, Алина, Дейзи и «Белые ночи».'],
    ['dossier', 'Досье', 'Кто он такой, как говорит и чего не выносит.']
  ],
  nowPlaying:'Сейчас играет',
  recordsH:'Пластинки', recordsSub:'Джаз на виниле, в алфавитном беспорядке. Нажмите на конверт, чтобы поставить.',
  play:'Поставить', playing:'Играет',
  records:[
    {artist:'Frank Sinatra', title:'In the Wee Small Hours', year:1955, c1:'#1b2a44', c2:'#6f8fb8', note:'Для бессонницы. То есть на каждую ночь.'},
    {artist:'Ella Fitzgerald & Louis Armstrong', title:'Ella and Louis', year:1956, c1:'#e9dcc0', c2:'#a8261f', note:'Ставлю, когда в доме гости и надо, чтобы все помолчали и улыбнулись.'},
    {artist:'Chet Baker', title:'Chet Baker Sings', year:1954, c1:'#2c2c2c', c2:'#d9b56a', note:'Голос человека, который проиграл всё и всё равно улыбается. Знакомо.'},
    {artist:'Miles Davis', title:'Kind of Blue', year:1959, c1:'#0f3b46', c2:'#e6e0cf', note:'Перед переговорами. Майлз учит главному: вовремя молчать.'},
    {artist:'Dave Brubeck Quartet', title:'Time Out', year:1959, c1:'#b9461f', c2:'#f1e2b8', note:'Пять четвертей. Никто не понимает, как это устроено, но все кивают в такт. Как с моими делами.'},
    {artist:'Frank Sinatra', title:'Songs for Swingin’ Lovers!', year:1956, c1:'#2f5a3a', c2:'#f3d27a', note:'Под эту можно танцевать на кухне. Проверено. Почти.'},
    {artist:'Billie Holiday', title:'Lady in Satin', year:1958, c1:'#5a1a3a', c2:'#e8c3c9', note:'Только после второго бокала и только одну сторону.'},
    {artist:'Кино', title:'Группа крови', year:1988, c1:'#111', c2:'#c22a22', secret:true, note:'Это не моё, это Алина забыла. (Моё. Знаю наизусть.)'}
  ],
  bookH:'Записная книжка', bookSub:'Кожаная, с золотым обрезом. Половина номеров записана по-фински, чтобы никто не прочитал.',
  book:{
    'А':[{name:'Алина', tel:'219-04-77', note:'Сестра, 22 года. Единственная, кто меня не боится. Звонить каждый день. Денег давать не больше, чем просит. (Всё равно даю больше.)'}],
    'Б':[{name:'«Белые ночи»', tel:'213-96-96', note:'Казино, наб. Лейтенанта Шмидта. Выиграно в преферанс. Кто спросит, как именно, тому анекдот.'},
         {name:'«Балт-Импорт»', tel:'251-30-12', note:'Контора в Морском порту. Импорт из Финляндии. И не только из Финляндии.'}],
    'В':[{name:'Витька Громов', tel:'дом 157-23-41 · Литейный 278-…', note:'Друг из соседнего подъезда, почти старший брат. Зовёт меня «Олежа». Звонить, если плохо. Если хорошо, тоже звонить, а то обидится.'}],
    'Д':[{name:'Дейзи', tel:'—', note:'Русская борзая. Телефона нет. Звонить не надо: она и так всё знает.'}],
    'З':[{name:'Тётя Зина', tel:'ключи у неё', note:'Главнокомандующая. Соседка по двору, знает меня с пелёнок. Спорить бесполезно, проверено с 1974 года.'}],
    'Л':[{name:'Лёша Тихонов', tel:'Кировский ОВД, угрозыск', note:'Рыжий. Витин напарник. Зовёт меня «мелким», хотя я выше. Не друг, но свой.'}],
    'М':[{name:'Мама', tel:'Стачек, старая квартира', note:'Врач. Моим деньгам не рада. Передавать через Алину. Звонить по воскресеньям.'}],
    'О':[{name:'Отец', tel:'Германия, +49 …', cross:true, note:'Не звонить.'}]
  },
  albumH:'Фотоальбом', albumSub:'Старый советский альбом с серыми страницами. Подписи белым карандашом, почерк хозяина.',
  photoSoon:'фото будет', prev:'← назад', next:'дальше →', page:'стр.',
  album:[
    [{cap:'Стачек, 1974. Крыша сарая. Снимали всем двором'}, {cap:'Двор. Витька, я и один велосипед на двоих'}],
    [{cap:'1 сентября 1981. Алина идёт в первый класс, я веду'}, {cap:'Выпускной, 1983. Мама плачет, отец делает вид, что нет'}],
    [{cap:'Иняз ЛГУ. Английский и финский'}, {cap:'Первый итальянский костюм. Носил, как броню'}],
    [{cap:'Дейзи, первый день дома. Съела ботинок. Итальянский'}, {cap:'«Белые ночи». Утро после той самой партии'}, {cap:'1996. Фотограф просил улыбнуться', img:'assets/npc/barinov.webp'}]
  ],
  dossierH:'Досье', dossierSub:'Олег Львович Баринов, «Барин». Без спойлеров: то, что можно знать до первой встречи.',
  fields:[['Полное имя','Олег Львович Баринов'],['Прозвище','Барин'],['Возраст','30 лет'],['Рост','190 см, поджарый'],['Образование','Иняз ЛГУ: английский и финский'],['Дело','«Балт-Импорт» и казино «Белые ночи»'],['Живёт','Пентхаус на Васильевском, окна на краны'],['Ездит','Чёрный «Мерседес» W140'],['Собака','Русская борзая Дейзи']],
  looksH:'Как выглядит',
  looks:'Тёмные волосы зачёсаны назад, к вечеру одна прядь падает на лоб. Светлые серо-зелёные глаза под тяжёлыми бровями, взгляд с ленцой. Тонкий шрамик на брови, маленькая родинка над губой. Итальянские двубортные костюмы, белый платок в нагрудном кармане, пальто цвета кэмел. Перстни с ониксом, золотые запонки и часы. Дома ходит в рубашке нараспашку и босиком. Над договорами надевает очки для чтения в тонкой золотой оправе и стесняется их.',
  traitsH:'Характер',
  traits:[['Обаятельный болтун','Заговорит кого угодно, от таможенника до бабки у подъезда. Сыплет анекдотами даже тогда, когда страшно.'],['Щедрый до показухи','Платит за всех, дарит слишком дорогое. Деньги для него и подарок, и броня.'],['Холодный расчёт','За улыбкой всегда считает ходы. Чем злее, тем вежливее.'],['Интеллигент со Стачек','Сын инженера и врача. Читает Бродского и Фицджеральда. С чиновниками он филолог, с бандитами дворовый пацан.'],['Хочет, чтобы им гордились','Родители его не одобряют, их гордость — честный Витя Громов.'],['Бессонница','Спит урывками, ложится под утро. Ночью стоит на причале с сигарой или играет в шахматы сам с собой.']],
  voiceH:'Как говорит',
  voice:'Низкий бархатный голос с сигарной хрипотцой. Смеётся сначала глазами. Вставляет «окей» и «се ля ви», иногда целую фразу по-фински. Витю зовёт «Витька».',
  quotes:['Сударыня, я снимаю шляпу. Шляпы у меня, правда, нет, но это детали.','Я предлагаю человеку деньги за то, чтобы он перестал брать деньги.','Мадемуазель, я человек состоятельный, но совершенно неавторитетный.'],
  lovesH:'Любит', loves:['Джаз на пластинках','Тайно — «Кино», знает всего Цоя','Море, порт, краны на рассвете','Шахматы и преферанс','Филармонию и Мариинку (ходит один)','Свою турку: кофе варит только сам'],
  hatesH:'Не выносит', hates:['Враньё и предательство','Тех, кто обижает слабых и женщин','Беспредельщиков и наркоторговцев','Дешёвку','Когда его жалеют','Тишину в пустой квартире'],
  startsNote:'Старты для Олега пишутся. Когда бот выйдет, они появятся здесь.',
  eggs:{
    window:'Краны Морского порта. Когда не спится, он стоит тут с сигарой и считает огоньки.',
    bar:'Виски, коньяк и финская водка для гостей. Сам почти не пьёт: пьяным его почти не видели.',
    chess:'Партия против самого себя. Третью ночь ничья.',
    glasses:'Бродский и очки для чтения в тонкой золотой оправе. Очков он стесняется, так что вы их не видели.',
    coat:'Пальто цвета кэмел. Тётя Зина велит вешать на вешалку, он вешает на диван.',
    daisy:'Дейзи. Русская борзая и настоящая хозяйка квартиры. К симпатичным людям привязывается сразу.',
    chip:'Фишка «Белых ночей». Он катает её по костяшкам, когда думает.',
    cup:'Кофе. Варит только сам, в своей старой турке со вмятиной. Никому не доверяет.',
    lamp:'Лампа с зелёным абажуром. Над ней он читает договоры. В очках, но об этом молчок.',
    sofa:'Честерфилд, кожа, Англия. Привезли через порт. Как именно, лучше не спрашивать.',
    phone:'Радиотелефон «Панасоник». Звонит по ночам, и он всегда берёт трубку.',
    turntable:'Проигрыватель. Пластинки ставит сам, тётю Зину к нему не подпускает.',
    portrait:'Его портрет. Говорит, что повесил ради интерьера.'
  }
},
en:{
  title:'Barinov’s flat',
  where:'Vasilievsky Island · penthouse · October 1996',
  hint:'The owner is out, but Aunt Zina said you can look around. Click on things.',
  welcome:['Aunt Zina', 'Come in. Just don’t touch anything! Oh, touch it, he won’t notice anyway.'],
  nav:{room:'Living room', records:'Records', book:'Address book', album:'Photo album', dossier:'File', back:'← Stairwell', backShort:'←', close:'← Back to the room', lang:'RU', langHref:'oleg.html'},
  tags:{records:'Records', book:'Address book', album:'Photo album', dossier:'File'},
  cards:[
    ['records', 'Records', 'Sinatra when he can’t sleep. Kino when nobody’s looking.'],
    ['book', 'Address book', 'Who he calls, who he doesn’t, and what he writes in the margins.'],
    ['album', 'Photo album', 'The Stachek courtyard, Alina, Daisy and the White Nights.'],
    ['dossier', 'File', 'Who he is, how he talks and what he can’t stand.']
  ],
  nowPlaying:'Now playing',
  recordsH:'Records', recordsSub:'Jazz on vinyl, in alphabetical disorder. Click a sleeve to put it on.',
  play:'Put it on', playing:'Playing',
  records:[
    {artist:'Frank Sinatra', title:'In the Wee Small Hours', year:1955, c1:'#1b2a44', c2:'#6f8fb8', note:'For insomnia. So, every night.'},
    {artist:'Ella Fitzgerald & Louis Armstrong', title:'Ella and Louis', year:1956, c1:'#e9dcc0', c2:'#a8261f', note:'For when there are guests and everyone needs to stop talking and smile.'},
    {artist:'Chet Baker', title:'Chet Baker Sings', year:1954, c1:'#2c2c2c', c2:'#d9b56a', note:'The voice of a man who lost everything and is still smiling. Sounds familiar.'},
    {artist:'Miles Davis', title:'Kind of Blue', year:1959, c1:'#0f3b46', c2:'#e6e0cf', note:'Before negotiations. Miles teaches the main thing: knowing when to shut up.'},
    {artist:'Dave Brubeck Quartet', title:'Time Out', year:1959, c1:'#b9461f', c2:'#f1e2b8', note:'Five-four time. Nobody understands how it works, but everyone nods along. Like my business.'},
    {artist:'Frank Sinatra', title:'Songs for Swingin’ Lovers!', year:1956, c1:'#2f5a3a', c2:'#f3d27a', note:'You can dance to this one in the kitchen. Tested. Almost.'},
    {artist:'Billie Holiday', title:'Lady in Satin', year:1958, c1:'#5a1a3a', c2:'#e8c3c9', note:'Only after the second glass, and only one side.'},
    {artist:'Kino', title:'Gruppa Krovi', year:1988, c1:'#111', c2:'#c22a22', secret:true, note:'Not mine, Alina left it here. (Mine. I know every word.)'}
  ],
  bookH:'Address book', bookSub:'Leather with gilt edges. Half the numbers are written in Finnish so nobody can read them.',
  book:{
    'A':[{name:'Alina', tel:'219-04-77', note:'Sister, 22. The only one who isn’t afraid of me. Call every day. Never give her more money than she asks for. (I always do.)'}],
    'D':[{name:'Daisy', tel:'—', note:'Borzoi. No phone. No need to call: she knows everything anyway.'}],
    'F':[{name:'Father', tel:'Germany, +49 …', cross:true, note:'Do not call.'}],
    'L':[{name:'Lyosha Tikhonov', tel:'Kirovsky police, CID', note:'The redhead. Vitya’s partner. Calls me “shorty” although I’m taller. Not a friend, but one of ours.'}],
    'M':[{name:'Mum', tel:'Stachek, the old flat', note:'A doctor. Not happy about my money. Send it through Alina. Call on Sundays.'}],
    'V':[{name:'Vitka Gromov', tel:'home 157-23-41 · Liteyny 278-…', note:'My friend from the next stairwell, almost a big brother. Calls me “Olezha”. Call if things are bad. If they’re good, call too, or he’ll sulk.'}],
    'W':[{name:'White Nights', tel:'213-96-96', note:'The casino on Lieutenant Schmidt Embankment. Won at preference. Anyone who asks how gets a joke.'},
         {name:'Balt-Import', tel:'251-30-12', note:'Office in the Sea Port. Imports from Finland. And not only from Finland.'}],
    'Z':[{name:'Aunt Zina', tel:'she has the keys', note:'Commander-in-chief. A neighbour from the old courtyard, knew me in nappies. No point arguing, tested since 1974.'}]
  },
  albumH:'Photo album', albumSub:'An old Soviet album with grey pages. Captions in white pencil, in the owner’s hand.',
  photoSoon:'photo coming', prev:'← back', next:'next →', page:'p.',
  album:[
    [{cap:'Stachek, 1974. The shed roof. The whole courtyard got me down'}, {cap:'The courtyard. Vitka, me and one bike between us'}],
    [{cap:'1 September 1981. Alina’s first day at school, I’m taking her'}, {cap:'Graduation, 1983. Mum is crying, Dad pretends he isn’t'}],
    [{cap:'Leningrad University, foreign languages. English and Finnish'}, {cap:'My first Italian suit. Wore it like armour'}],
    [{cap:'Daisy’s first day home. She ate a shoe. An Italian one'}, {cap:'White Nights. The morning after that card game'}, {cap:'1996. The photographer asked me to smile', img:'assets/npc/barinov.webp'}]
  ],
  dossierH:'File', dossierSub:'Oleg Lvovich Barinov, “Barin”. No spoilers: what you can know before you meet him.',
  fields:[['Full name','Oleg Lvovich Barinov'],['Nickname','Barin (“the Squire”)'],['Age','30'],['Height','190 cm, lean'],['Education','Leningrad University: English and Finnish'],['Business','Balt-Import and the White Nights casino'],['Lives','Penthouse on Vasilievsky, windows onto the cranes'],['Drives','Black Mercedes W140'],['Dog','Daisy, a borzoi']],
  looksH:'Looks',
  looks:'Dark hair slicked back, by evening one lock falls onto his forehead. Pale grey-green eyes under heavy brows, a lazy look. A thin scar through one eyebrow, a small mole above his lip. Italian double-breasted suits, a white pocket square, a camel coat. Onyx rings, gold cufflinks and a watch. At home: shirt open, barefoot. Puts on gold-rimmed reading glasses for contracts and is embarrassed by them.',
  traitsH:'Character',
  traits:[['Charming talker','Can talk to anyone, from a customs officer to the old woman by the door. Tells jokes even when he’s scared.'],['Showily generous','Pays for everyone, gives gifts that are far too expensive. Money is both his present and his armour.'],['Cold calculation','Behind the smile he is always counting moves. The angrier he gets, the more polite.'],['An intellectual from Stachek','Son of an engineer and a doctor. Reads Brodsky and Fitzgerald. With officials he’s a philologist, with gangsters a courtyard kid.'],['Wants them to be proud','His parents don’t approve of him. Their pride is honest Vitya Gromov.'],['Insomnia','Sleeps in snatches, goes to bed at dawn. At night he stands on the pier with a cigar or plays chess against himself.']],
  voiceH:'How he talks',
  voice:'A low velvet voice, husky from cigars. Laughs with his eyes first. Drops in “okay” and “c’est la vie”, sometimes a whole sentence in Finnish. Calls Vitya “Vitka”.',
  quotes:['Madam, I take my hat off to you. I don’t have a hat, but that’s a detail.','I offer a man money to stop taking money.','Mademoiselle, I am a wealthy man, but I have no authority whatsoever.'],
  lovesH:'Loves', loves:['Jazz on vinyl','Secretly, Kino: knows every Tsoi song','The sea, the port, cranes at dawn','Chess and preference','The Philharmonia and the Mariinsky (goes alone)','His own coffee pot: makes coffee only himself'],
  hatesH:'Can’t stand', hates:['Lies and betrayal','Anyone who hurts the weak or women','Lawless thugs and drug dealers','Anything cheap','Being pitied','Silence in an empty flat'],
  startsNote:'Oleg’s starts are being written. They will appear here when the bot is released.',
  eggs:{
    window:'The cranes of the Sea Port. When he can’t sleep, he stands here with a cigar and counts the lights.',
    bar:'Whisky, cognac and Finnish vodka for guests. He hardly drinks himself: almost nobody has seen him drunk.',
    chess:'A game against himself. A draw for the third night running.',
    glasses:'Brodsky and gold-rimmed reading glasses. He’s embarrassed by the glasses, so you didn’t see them.',
    coat:'The camel coat. Aunt Zina tells him to use the hanger, he uses the sofa.',
    daisy:'Daisy. A borzoi and the real owner of the flat. Takes to nice people at once.',
    chip:'A White Nights chip. He rolls it across his knuckles when he’s thinking.',
    cup:'Coffee. He makes it only himself, in his old dented coffee pot. Trusts nobody else with it.',
    lamp:'The green banker’s lamp. He reads contracts under it. In glasses, but keep that quiet.',
    sofa:'A Chesterfield, leather, England. Came in through the port. Better not ask how.',
    phone:'A Panasonic cordless. It rings at night, and he always picks up.',
    turntable:'The record player. He puts the records on himself and won’t let Aunt Zina near it.',
    portrait:'His portrait. He says he hung it for the interior.'
  }
}
};
