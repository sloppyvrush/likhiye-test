# en.html = index.html с английскими метаданными (тексты меняет JS по lang)
import re, pathlib
root = pathlib.Path(__file__).resolve().parent.parent
s = (root / 'index.html').read_text(encoding='utf-8')
rep = [
  ('<html lang="ru">', '<html lang="en">'),
  ('<title>Лихие · ТЕСТ</title>', '<title>Likhiye · TEST</title>'),
  ('content="Лихие: ролевые боты, у которых один город на всех. Петербург, 1996 год." data-desc', 'content="Likhiye: roleplay bots who share one city. Saint Petersburg, 1996." data-desc'),
  ('<a class="brand" href="index.html" data-home>', '<a class="brand" href="en.html" data-home>'),
  ('<a class="lang" href="en.html" hreflang="en" title="English version" data-langsw>EN</a>', '<a class="lang" href="index.html" hreflang="ru" title="Русская версия" data-langsw>RU</a>'),
  ('<a href="en.html" hreflang="en" data-langsw>English</a>', '<a href="index.html" hreflang="ru" data-langsw>Русский</a>'),
]
for a, b in rep:
    assert s.count(a) == 1, a
    s = s.replace(a, b)
(root / 'en.html').write_text(s, encoding='utf-8')
print('en.html ok')
