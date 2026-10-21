# Общая часть для сборки английской версии: находит русские фрагменты в исходниках.
import re
CYR = re.compile(r'[А-Яа-яЁё]')
FILES = ['index.html', 'bots.js', 'music.js', 'npcs.js', 'delo.js']

def mask_comments(s, name):
    """Возвращает список (start,end) диапазонов комментариев."""
    rng = []
    for m in re.finditer(r'<!--[\s\S]*?-->', s):
        rng.append((m.start(), m.end()))
    for m in re.finditer(r'/\*[\s\S]*?\*/', s):
        rng.append((m.start(), m.end()))
    for m in re.finditer(r'(?:(?<=[\s;{}(),])|^)//[^\n]*', s, re.M):
        rng.append((m.start(), m.end()))
    return rng

SPLIT = re.compile(r'\$\{|(?<!\{)\{(?!\{)|(?<!\})\}(?!\})|[\"\'`<>]')

def segments(s, name):
    """Фрагменты: (start, end, text) — text без пробелов по краям, содержит кириллицу."""
    com = mask_comments(s, name)
    def in_com(i):
        for a, b in com:
            if a <= i < b: return True
        return False
    out = []
    ends = {m.start(): m.end() for m in SPLIT.finditer(s)}
    for a, b in com:  # комментарии — отдельные куски, их не переводим
        ends[a] = a; ends.setdefault(b, b)
    bounds = sorted(ends) + [len(s)]
    ends[len(s)] = len(s)
    prev = 0
    for b in bounds:
        tok = s[prev:b]
        if CYR.search(tok):
            l = len(tok) - len(tok.lstrip()); r = len(tok.rstrip())
            a0, a1 = prev + l, prev + r
            if not in_com(a0):
                out.append((a0, a1, s[a0:a1]))
        prev = ends[b]
        if prev == b and any(a == b for a, _ in com):
            prev = next(e for a, e in com if a == b)
    return out

CODEY = re.compile(r'\.test\(|\.replace\(|=>|\(\?=|clearRect')
