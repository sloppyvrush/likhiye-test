/*
  Пластинки для проигрывателя на главной. Играют по порядку, после последней снова первая.
  Чтобы добавить песню: положите mp3 в папку music/ (лучше латиницей в названии файла)
  и допишите строку по образцу. color это цвет наклейки на пластинке,
  cover это обложка конверта: квадратная картинка в папке assets/covers/.
*/
window.TRACKS = [
  {
    "artist": "Наутилус Помпилиус",
    "title": "Крылья",
    "src": "music/02-nautilus-krylya.mp3",
    "color": "#B3261E",
    "cover": "assets/covers/krylya.webp"
  },
  {
    "artist": "Наутилус Помпилиус",
    "title": "Люди на холме",
    "src": "music/01-nautilus-lyudi-na-holme.mp3",
    "color": "#B3261E",
    "cover": "assets/covers/lyudi-na-holme.webp"
  },
  {
    "artist": "Наутилус Помпилиус",
    "title": "На берегу безымянной реки",
    "src": "music/03-nautilus-na-beregu-bezymyannoy-reki.mp3",
    "color": "#B3261E",
    "cover": "assets/covers/na-beregu.webp"
  },
  {
    "artist": "Владимир Высоцкий",
    "title": "Вариации на цыганские темы",
    "src": "music/04-vysotsky-variatsii-na-tsyganskie-temy.mp3",
    "color": "#1F3E6E",
    "cover": "assets/covers/vysotsky.webp"
  },
  {
    "artist": "Кино",
    "title": "Кукушка",
    "src": "music/05-kino-kukushka.mp3",
    "color": "#C8901A",
    "cover": "assets/covers/kukushka.webp"
  },
  {
    "artist": "Кино",
    "title": "Группа крови",
    "src": "music/06-kino-gruppa-krovi.mp3",
    "color": "#C8901A",
    "cover": "assets/covers/gruppa-krovi.webp"
  },
  {
    "artist": "Кино",
    "title": "Звезда",
    "src": "music/06b-kino-zvezda.mp3",
    "color": "#C8901A",
    "cover": "assets/covers/zvezda.webp"
  },
  {
    "artist": "Комбинация",
    "title": "Вишнёвая девятка",
    "src": "music/12-kombinatsiya-vishnyovaya-devyatka.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Комбинация",
    "title": "Два кусочека колбаски",
    "src": "music/13-kombinatsiya-dva-kusocheka-kolbaski.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Комбинация",
    "title": "Вдвоём с тобой",
    "src": "music/14-kombinatsiya-vdvoyom-s-toboy.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Комбинация",
    "title": "Лёшка",
    "src": "music/15-kombinatsiya-lyoshka.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Комбинация",
    "title": "А я люблю военных",
    "src": "music/15b-kombinatsiya-a-ya-lyublyu-voennyh.mp3",
    "color": "#D9437F",
    "cover": "assets/covers/kombinatsiya.webp"
  },
  {
    "artist": "Алла Пугачёва",
    "title": "Часы",
    "src": "music/07-pugacheva-chasy.mp3",
    "color": "#A8466E",
    "cover": "assets/covers/chasy.webp"
  },
  {
    "artist": "Алла Пугачёва",
    "title": "Надо же!",
    "src": "music/07b-pugacheva-nado-zhe.mp3",
    "color": "#C8501E",
    "cover": "assets/covers/nado-zhe.webp"
  },
  {
    "artist": "Алла Пугачёва",
    "title": "Песенка про меня",
    "src": "music/07c-pugacheva-pesenka-pro-menya.mp3",
    "color": "#A8466E",
    "cover": "assets/covers/nado-zhe.webp"
  },
  {
    "artist": "Мираж",
    "title": "Музыка нас связала",
    "src": "music/16-mirazh-muzyka-nas-svyazala.mp3",
    "color": "#5B3FA6",
    "cover": "assets/covers/mirage.webp"
  },
  {
    "artist": "Мираж",
    "title": "Я не шучу",
    "src": "music/17-mirazh-ya-ne-shuchu.mp3",
    "color": "#5B3FA6",
    "cover": "assets/covers/mirage.webp"
  },
  {
    "artist": "Мираж",
    "title": "Новый герой",
    "src": "music/18-mirazh-novyi-geroi.mp3",
    "color": "#5B3FA6",
    "cover": "assets/covers/mirage.webp"
  },
  {
    "artist": "Альянс",
    "title": "На заре",
    "src": "music/08-alyans-na-zare.mp3",
    "color": "#D8431F",
    "cover": "assets/covers/na-zare.webp"
  },
  {
    "artist": "Ласковый май",
    "title": "Белые розы",
    "src": "music/09-laskovyi-mai-belye-rozy.mp3",
    "color": "#3E8E3A",
    "cover": "assets/covers/laskovyi-mai.webp"
  },
  {
    "artist": "Ласковый май",
    "title": "Седая ночь",
    "src": "music/10-laskovyi-mai-sedaya-noch.mp3",
    "color": "#3E8E3A",
    "cover": "assets/covers/laskovyi-mai.webp"
  },
  {
    "artist": "ДДТ",
    "title": "Что такое осень",
    "src": "music/11-ddt-chto-takoe-osen.mp3",
    "color": "#E0662A",
    "cover": "assets/covers/chto-takoe-osen.webp"
  },
  {
    "artist": "Агата Кристи",
    "title": "Как на войне",
    "src": "music/19-agata-kristi-kak-na-voyne.mp3",
    "color": "#2F2A5C",
    "cover": "assets/covers/agata.webp"
  },
  {
    "artist": "Татьяна Буланова",
    "title": "Мой ненаглядный",
    "src": "music/20-bulanova-moy-nenaglyadnyi.mp3",
    "color": "#B5476A",
    "cover": "assets/covers/bulanova.webp"
  },
  {
    "artist": "Татьяна Буланова",
    "title": "Прости меня",
    "src": "music/21-bulanova-prosti-menya.mp3",
    "color": "#B5476A",
    "cover": "assets/covers/bulanova.webp"
  },
  {
    "artist": "Ирина Муравьёва",
    "title": "Позвони мне, позвони",
    "src": "music/22-muravyova-pozvoni-mne-pozvoni.mp3",
    "color": "#2F7E8A",
    "cover": "assets/covers/pozvoni.webp"
  },
  {
    "artist": "Анжелика Варум",
    "title": "Зимняя вишня",
    "src": "music/23-varum-zimnyaya-vishnya.mp3",
    "color": "#8E2436",
    "cover": "assets/covers/varum.webp"
  },
  {
    "artist": "София Ротару",
    "title": "Этого мало",
    "src": "music/24-rotaru-etogo-malo.mp3",
    "color": "#C99A1E",
    "cover": "assets/covers/rotaru.webp"
  }
];
