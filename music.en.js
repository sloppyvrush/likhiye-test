/*
  Пластинки для проигрывателя на главной. Играют по порядку, после последней снова первая.
  Чтобы добавить песню: положите mp3 в папку music/ (лучше латиницей в названии файла)
  и допишите строку по образцу. color это цвет наклейки на пластинке,
  cover это обложка конверта: квадратная картинка в папке assets/covers/.
*/
window.TRACKS = [
  {
    "artist": "Nautilus Pompilius",
    "title": "Wings",
    "src": "music/02-nautilus-krylya.mp3",
    "color": "#B3261E",
    "cover": "assets/covers/krylya.webp"
  },
  {
    "artist": "Nautilus Pompilius",
    "title": "People on the Hill",
    "src": "music/01-nautilus-lyudi-na-holme.mp3",
    "color": "#B3261E",
    "cover": "assets/covers/lyudi-na-holme.webp"
  },
  {
    "artist": "Nautilus Pompilius",
    "title": "On the Bank of a Nameless River",
    "src": "music/03-nautilus-na-beregu-bezymyannoy-reki.mp3",
    "color": "#B3261E",
    "cover": "assets/covers/na-beregu.webp"
  },
  {
    "artist": "Vladimir Vysotsky",
    "title": "Variations on Gypsy Themes",
    "src": "music/04-vysotsky-variatsii-na-tsyganskie-temy.mp3",
    "color": "#1F3E6E",
    "cover": "assets/covers/vysotsky.webp"
  },
  {
    "artist": "Kino",
    "title": "The Cuckoo",
    "src": "music/05-kino-kukushka.mp3",
    "color": "#C8901A",
    "cover": "assets/covers/kukushka.webp"
  },
  {
    "artist": "Kino",
    "title": "Blood Type",
    "src": "music/06-kino-gruppa-krovi.mp3",
    "color": "#C8901A",
    "cover": "assets/covers/gruppa-krovi.webp"
  },
  {
    "artist": "Kino",
    "title": "Star",
    "src": "music/06b-kino-zvezda.mp3",
    "color": "#C8901A",
    "cover": "assets/covers/zvezda.webp"
  },
  {
    "artist": "Kombinatsiya",
    "title": "Cherry Nine",
    "src": "music/12-kombinatsiya-vishnyovaya-devyatka.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Kombinatsiya",
    "title": "Two Little Pieces of Sausage",
    "src": "music/13-kombinatsiya-dva-kusocheka-kolbaski.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Kombinatsiya",
    "title": "Just You and Me",
    "src": "music/14-kombinatsiya-vdvoyom-s-toboy.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Kombinatsiya",
    "title": "Lyoshka",
    "src": "music/15-kombinatsiya-lyoshka.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Kombinatsiya",
    "title": "And I Love Military Men",
    "src": "music/15b-kombinatsiya-a-ya-lyublyu-voennyh.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Alla Pugacheva",
    "title": "Clocks",
    "src": "music/07-pugacheva-chasy.mp3",
    "color": "#A8466E",
    "cover": "assets/covers/chasy.webp"
  },
  {
    "artist": "Alla Pugacheva",
    "title": "Fancy That!",
    "src": "music/07b-pugacheva-nado-zhe.mp3",
    "color": "#C8501E",
    "cover": "assets/covers/nado-zhe.webp"
  },
  {
    "artist": "Alla Pugacheva",
    "title": "A Little Song About Me",
    "src": "music/07c-pugacheva-pesenka-pro-menya.mp3",
    "color": "#A8466E",
    "cover": "assets/covers/nado-zhe.webp"
  },
  {
    "artist": "Mirage",
    "title": "Music Has Bound Us",
    "src": "music/16-mirazh-muzyka-nas-svyazala.mp3",
    "color": "#5B3FA6",
    "cover": "assets/covers/mirage.webp"
  },
  {
    "artist": "Mirage",
    "title": "I’m Not Joking",
    "src": "music/17-mirazh-ya-ne-shuchu.mp3",
    "color": "#5B3FA6",
    "cover": "assets/covers/mirage.webp"
  },
  {
    "artist": "Mirage",
    "title": "New Hero",
    "src": "music/18-mirazh-novyi-geroi.mp3",
    "color": "#5B3FA6",
    "cover": "assets/covers/mirage.webp"
  },
  {
    "artist": "Alyans",
    "title": "At Dawn",
    "src": "music/08-alyans-na-zare.mp3",
    "color": "#D8431F",
    "cover": "assets/covers/na-zare.webp"
  },
  {
    "artist": "Laskovy May",
    "title": "White Roses",
    "src": "music/09-laskovyi-mai-belye-rozy.mp3",
    "color": "#3E8E3A",
    "cover": "assets/covers/laskovyi-mai.webp"
  },
  {
    "artist": "Laskovy May",
    "title": "Grey Night",
    "src": "music/10-laskovyi-mai-sedaya-noch.mp3",
    "color": "#3E8E3A",
    "cover": "assets/covers/laskovyi-mai.webp"
  },
  {
    "artist": "DDT",
    "title": "What Is Autumn",
    "src": "music/11-ddt-chto-takoe-osen.mp3",
    "color": "#E0662A",
    "cover": "assets/covers/chto-takoe-osen.webp"
  },
  {
    "artist": "Agata Kristi",
    "title": "Like at War",
    "src": "music/19-agata-kristi-kak-na-voyne.mp3",
    "color": "#2F2A5C",
    "cover": "assets/covers/agata.webp"
  },
  {
    "artist": "Tatyana Bulanova",
    "title": "My Darling",
    "src": "music/20-bulanova-moy-nenaglyadnyi.mp3",
    "color": "#B5476A",
    "cover": "assets/covers/bulanova.webp"
  },
  {
    "artist": "Tatyana Bulanova",
    "title": "Forgive Me",
    "src": "music/21-bulanova-prosti-menya.mp3",
    "color": "#B5476A",
    "cover": "assets/covers/bulanova.webp"
  },
  {
    "artist": "Irina Muravyova",
    "title": "Call Me, Call Me",
    "src": "music/22-muravyova-pozvoni-mne-pozvoni.mp3",
    "color": "#2F7E8A",
    "cover": "assets/covers/pozvoni.webp"
  },
  {
    "artist": "Angelika Varum",
    "title": "Winter Cherry",
    "src": "music/23-varum-zimnyaya-vishnya.mp3",
    "color": "#8E2436",
    "cover": "assets/covers/varum.webp"
  },
  {
    "artist": "Sofia Rotaru",
    "title": "That’s Not Enough",
    "src": "music/24-rotaru-etogo-malo.mp3",
    "color": "#C99A1E",
    "cover": "assets/covers/rotaru.webp"
  }
];
