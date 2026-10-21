import json, sys, os
sys.path.insert(0, os.path.dirname(__file__))
from i18n_lib import *
root = os.path.join(os.path.dirname(__file__), '..')
seen = {}; order = []; flagged = []
for f in FILES:
    s = open(os.path.join(root, f), encoding='utf-8').read()
    for a, b, t in segments(s, f):
        if CODEY.search(t):
            flagged.append((f, s.count('\n', 0, a) + 1, t[:160])); continue
        if t not in seen:
            seen[t] = {'ru': t, 'file': f, 'ctx': s[max(0, a-100):a].replace('\n', ' ')[-100:] + '⟦…⟧' + s[b:b+60].replace('\n', ' ')}
            order.append(t)
json.dump([seen[t] for t in order], open(sys.argv[1], 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
print(len(order), 'segments', sum(len(t) for t in order), 'chars')
for x in flagged: print('FLAG', x)
