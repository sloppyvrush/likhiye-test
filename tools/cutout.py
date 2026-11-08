# Вырезает фигуры с розового хромакея (#FF00FF) и выравнивает позы одного героя по ногам.
# python3 tools/cutout.py <out_prefix> <idle.jpg> [<hover.jpg>] [--height 1100]
# Выход: assets/main/<prefix>.webp и assets/main/<prefix>-hover.webp — одинаковый размер холста,
# центр холста по горизонтали = середина между стопами, низ холста = подошвы.
import sys, numpy as np
from PIL import Image
from scipy import ndimage

def key(path):
    a = np.asarray(Image.open(path).convert('RGB')).astype(np.float32)
    R, G, B = a[..., 0], a[..., 1], a[..., 2]
    m = np.minimum(R, B) - G                     # «розовость»: у фона ~240, у фигуры ≤ 0
    alpha = 1 - np.clip((m - 45) / (165 - 45), 0, 1)
    solid = alpha > .5                           # оставляем только главный силуэт
    lab, n = ndimage.label(solid)
    if n > 1:
        sizes = ndimage.sum(solid, lab, range(1, n + 1))
        keep = lab == (np.argmax(sizes) + 1)
        keep = ndimage.binary_dilation(keep, iterations=3)
        alpha = alpha * keep
    alpha = ndimage.gaussian_filter(alpha, .6)
    alpha[alpha < .04] = 0
    # убираем розовый отсвет с краёв
    spill = np.clip(np.minimum(R, B) - G, 0, None) * (1 - alpha * .35)
    R2 = np.clip(R - spill, 0, 255); B2 = np.clip(B - spill, 0, 255)
    out = np.dstack([R2, G, B2, alpha * 255]).astype(np.uint8)
    return out

def bbox(rgba):
    ys, xs = np.where(rgba[..., 3] > 20)
    return xs.min(), ys.min(), xs.max(), ys.max()

def feet_x(rgba, y1):
    band = rgba[max(0, y1 - int((y1) * .05)):y1 + 1, :, 3] > 60   # нижние 5% фигуры
    xs = np.where(band.any(0))[0]
    return (xs.min() + xs.max()) / 2

def main():
    args = sys.argv[1:]; H = 1100
    if '--height' in args:
        i = args.index('--height'); H = int(args[i + 1]); del args[i:i + 2]
    prefix, paths = args[0], args[1:]
    imgs = []
    for p in paths:
        rgba = key(p); x0, y0, x1, y1 = bbox(rgba)
        fx = feet_x(rgba, y1); s = H / (y1 - y0 + 1)
        imgs.append((rgba, x0, y0, x1, y1, fx, s))
    half = max(max(fx - x0, x1 - fx) * s for (_, x0, y0, x1, y1, fx, s) in imgs) + 8
    W = int(half * 2)
    for k, (rgba, x0, y0, x1, y1, fx, s) in enumerate(imgs):
        crop = Image.fromarray(rgba).crop((x0, y0, x1 + 1, y1 + 1))
        crop = crop.resize((round(crop.width * s), H), Image.LANCZOS)
        canvas = Image.new('RGBA', (W, H), (0, 0, 0, 0))
        canvas.alpha_composite(crop, (round(W / 2 - (fx - x0) * s), 0))
        name = f'assets/main/{prefix}{"-hover" if k else ""}.webp'
        canvas.save(name, 'WEBP', quality=86, method=6)
        print(name, canvas.size)

main()
