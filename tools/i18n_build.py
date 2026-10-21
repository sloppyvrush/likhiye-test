# Собирает английскую версию сайта: en.html, bots.en.js, music.en.js, npcs.en.js, delo.en.js.
# Русские файлы не меняются. Переводы лежат в tools/i18n_en.json (русский фрагмент → английский).
# Запуск: python3 tools/i18n_build.py   (из любой папки)
# Фрагменты без перевода остаются русскими и печатаются списком — их потом добавляют в словарь
# (python3 tools/i18n_extract.py new.json выдаёт все фрагменты; переводятся только новые).
import json, os, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from i18n_lib import FILES, segments

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
TR = json.load(open(os.path.join(ROOT, 'tools', 'i18n_en.json'), encoding='utf-8'))

# Точечные правки кода английской версии (после перевода текста). Каждая строка обязана найтись.
PATCHES = {
  'index.html': [
    ('<html lang="ru"', '<html lang="en"'),
    ('<a class="brand" href="#/">Likhiye</a>', '<a class="brand" href="#/">Лихие</a>'),  # логотип остаётся кириллицей
    ('<script src="bots.js">', '<script src="bots.en.js">'),
    ('<script src="music.js">', '<script src="music.en.js">'),
    ('<script src="npcs.js">', '<script src="npcs.en.js">'),
    ('<script src="delo.js">', '<script src="delo.en.js">'),
    ('href="en.html" hreflang="en" title="English version">EN</a>', 'href="index.html" hreflang="ru" title="Русская версия">RU</a>'),
    ("Intl.DateTimeFormat('ru-RU'", "Intl.DateTimeFormat('en-GB'"),
    # английское множественное число
    ('const plural = (n, one, few, many) => (n % 10 === 1 && n % 100 !== 11) ? one : (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) ? few : many;',
     'const plural = (n, one, few, many) => n === 1 ? one : many;'),
    ('(?<=[.!?…»])\\s+(?=[А-ЯЁA-Z«—])', '(?<=[.!?…»”])\\s+(?=[А-ЯЁA-Z«“—])'),
    ('/win|ПРИЗ|ВЫИГРЫШ/.test(prize.textContent) && !/БЕЗ/.test(prize.textContent)',
     '/WIN|PRIZE/.test(prize.textContent) && !/NO WIN/.test(prize.textContent)'),
    ('/^От автора:/.test(back)', '/^(От автора|From the author|Author’s note):/.test(back)'),
    ('back.replace(/^От автора:\\s*/', 'back.replace(/^(От автора|From the author|Author’s note):\\s*/'),
    ('/Найд/.test(text)', '/Naid/.test(text)'),
    ('/^(Подполковник|Майор|Капитан|Лейтенант)\\s+/', '/^(Lieutenant Colonel|Major|Captain|Lieutenant)\\s+/'),
    # реплики в титрах: в английском прямая речь остаётся в кавычках “…”, только подсвечивается
    ('    const dlg = par => {\n', '    const dlg = par => md(par).replace(/“([^”]*)”/g, (m, q) => \'<span class="vc-say">“\' + q + \'”</span>\');\n    const dlgRu = par => {\n'),
  ],
}
MULTI = {'index.html': [("/— Л\\.?$/.test(", "/— (Л|L)\\.?$/.test("),
  # кавычки вокруг названий и прозвищ в коде: в английском “…”
  ("«${t.title}»", "“${t.title}”"), ("«${esc(p.nick)}»", "“${esc(p.nick)}”"),
  ("', «' + t.title + '». '", "', “' + t.title + '”. '"), ("'«' + b.story + '»'", "'“' + b.story + '”'")]}  # встречается несколько раз

def out_name(f):
    return 'en.html' if f == 'index.html' else f.replace('.js', '.en.js')

missing = []
for f in FILES:
    s = open(os.path.join(ROOT, f), encoding='utf-8').read()
    segs = segments(s, f)
    for a, b, t in reversed(segs):
        e = TR.get(t)
        if e is None:
            missing.append((f, s.count('\n', 0, a) + 1, t)); continue
        s = s[:a] + e + s[b:]
    for old, new in PATCHES.get(f, []):
        if old not in s:
            sys.exit(f'PATCH NOT FOUND in {f}: {old[:80]}')
        s = s.replace(old, new, 1)
    for old, new in MULTI.get(f, []):
        s = s.replace(old, new)
    open(os.path.join(ROOT, out_name(f)), 'w', encoding='utf-8').write(s)
    print('written', out_name(f))

if missing:
    print(f'\n{len(missing)} fragments without translation (left in Russian):')
    for f, ln, t in missing: print(f'  {f}:{ln}: {t[:90]}')
