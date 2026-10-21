/*
  РАССЛЕДОВАНИЕ (вкладка «Дело»): материалы уголовного дела, которые игрок вскрывает по мере игры.

  Как устроено:
  open      лист открыт сразу
  seal      «серая» печать: обычная улика, вскрывается одним нажатием
  red       красная печать: спойлер, перед вскрытием сайт переспросит
  img       путь к картинке (пусто — висит рамка «фото приложено позже»); cap — подпись под снимком
  from      из какого старта приходит улика (подсказка игроку)
  lines     абзацы текста; строки, начинающиеся с «✎ », пишутся ручкой на полях
  Что вскрыто, браузер помнит сам; кнопка внизу страницы запечатывает всё обратно.
*/
window.DELO = {
  no: '1147',
  title: 'into the murder of an unidentified man',
  name: 'Ryabtsev Anatoly Viktorovich',
  opened: '8 October 1996',
  who: 'Kirovsky District Prosecutor’s Office',
  ops: 'Operational support: CID, GUVD St Petersburg (Major Gromov V. S.), CID, Kirovsky OVD (Major Tikhonov A. P.)',

  guide: {
    title: 'A note for whoever picked up this case',
    lines: [
      'This case runs in the background of every start. Wherever you begin, Vitya and Lyosha have the same body by the garages on Zaitseva on their desk.',
      'The case moves with the story, not the calendar: the body, the name, the fire, the truth. Want to dig? Dig alongside Vitya. Don’t want to? It will remind you of itself anyway: phone calls, late nights, Vitya’s mood.',
      'Grey seals are clues you can find in the starts. Red ones are spoilers.',
      '✎ Not everything your own people tell you is true. — V.'
    ]
  },

  fabula: {
    title: 'Sheet 1. The Facts',
    lines: [
      'On the night of 8 October 1996 a man’s body was found by the garages in the yard on Zaitseva Street. One knife blow, upward under the ribs. His inside pocket torn out, no papers on him.',
      'Lyosha’s district, Vitya’s murder. Formally the prosecutor’s office runs the case.',
      '✎ A trained blow. Not a drunken fight. — V.'
    ]
  },

  people: {
    title: 'Sheet 2. Persons Involved',
    list: [
      {n: 'Unidentified man', r: 'victim', t: '30–35, broken nose, cropped hair, a tracksuit under a leather jacket. Identity being established.', img: 'assets/npc/ryaboy.webp', reveal: 'stage2', real: 'Ryabtsev Anatoly Viktorovich, “Ryaboy”, 31. A small man from Avtovo market who drove somebody’s money once a week.'},
      {n: 'Gromov Viktor Semyonovich', r: 'Major, CID, GUVD', t: 'Leads the murder case.', img: 'assets/id/viktor.webp'},
      {n: 'Tikhonov Alexei Petrovich', r: 'Major, CID, Kirovsky OVD', t: 'First on the scene. It’s his district.', img: 'assets/id/lesha.webp'}
    ]
  },

  evidence: [
    {id: 'protocol', seal: true, title: 'Crime Scene Examination Report', from: 'start “Murder in the Yard”', img: 'assets/yard.webp', cap: 'The yard by the garages, Zaitseva St., 8.10.96',
      lines: ['No signs of a struggle: the victim let the killer get right up close. Knife not found. The inside pocket torn out: they were after something specific.', '✎ The killer knew him. Or knew where to strike. — V.']},
    {id: 'barsetka', seal: true, title: 'Man-bag', from: 'start “Storm and Naida”', img: 'assets/case/ev-barsetka.webp', cap: 'Man-bag, found by a dog, 9.10.96',
      lines: ['During the storm Naida dragged a soaked man-bag in from the yard. Inside: a wad of money and a page torn from a squared notebook, a column of sums, each marked “T.”', '✎ The money was left. So it wasn’t the bag he wanted. — V.']},
    {id: 'svertok', seal: true, title: 'Parcel “for Tolik”', from: 'start “Got ‘Wings’?”', img: 'assets/case/ev-svertok.webp', cap: 'Tapes from the kiosk by Avtovo',
      lines: ['A regular the kiosk girl called Tolik left a parcel of tapes at the end of September: “Let it sit here, someone will pick it up.” He never came back. Tolik is the dead man.', '✎ Who was supposed to pick it up? — V.']},
    {id: 'devyatka', seal: true, title: 'The “devyatka” at Mikhalych’s', from: 'the “Kopeyka” start', img: 'assets/case/ev-devyatka.webp', cap: 'VAZ-2109, “wet asphalt”, the garage on the Tallinn highway',
      lines: ['The dead man’s car was brought in for repairs, and he never came back for it. A pager in the glovebox. Last message, 7.10.96, 23:48: “GARAGES 2:00. BRING EVERYTHING. K.”', '✎ Who’s “K.”? — V.']},
    {id: 'fire', seal: true, title: 'Fire at Avtovo Market', from: 'night call, stage 3', img: 'assets/starts/market.webp', cap: 'The meat pavilion after the fire',
      lines: ['The meat pavilion burned down in the night. The old watchman was found by the door, killed with the same blow as Ryaboy.', '✎ Same hand. — V.']}
  ],

  stages: [
    {id: 'stage1', red: true, title: 'Stage 1. The Body', when: 'start of the story',
      lines: ['The dead man is unidentified. Vitya is tired and grim. Lyosha is jumpy, and it’s not clear why.']},
    {id: 'stage2', red: true, title: 'Stage 2. The Name', when: 'a couple of in-game days later',
      lines: ['The dead man is Anatoly Ryabtsev, “Ryaboy”, from Avtovo market, who drove somebody’s money once a week.', 'Vitya notices that Lyosha knew him and won’t say. The first crack between them. Lyosha asks for help with the case and won’t say why it matters so much to him.']},
    {id: 'stage3', red: true, title: 'Stage 3. The Fire', when: 'night call',
      lines: ['The meat pavilion burns, the watchman killed with the same blow. Vitya leaves, even if he was with you.', 'It turns dangerous: someone is watching Vitya, and Lysy’s people may come at him through the people he cares about. Lyosha shuts down completely.']},
    {id: 'stage4', red: true, title: 'Stage 4. The Truth', when: 'endgame',
      lines: ['Lyosha tells Vitya everything. What hurts isn’t the money, it’s that his brother kept quiet.', 'The killer is taken. What happens to Lyosha is up to your story.']}
  ],

  secret: [
    {id: 'killer', red: true, deep: true, title: 'Who did it', lines: ['Kot, Lysy’s right hand, an ex-detective. Tall, thin, a suede jacket, the “K.” on the pager. He killed Moshkin in the spring too.', 'Gusev pointed him at Ryaboy and now covers for him.', 'Kot wanted Ryaboy’s notebook: to sink Lyosha with it and hand the market to Lysy.']},
    {id: 'lesha', red: true, deep: true, title: 'What Lyosha is hiding', lines: ['“T.” is Tikhonov. Ryaboy carried the market money into Lyosha’s “department fund”: wages, medical bills, funerals for their own. Vitya knows nothing about it.']}
  ]
};
