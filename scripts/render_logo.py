"""Render the HelmTech mark (variant A) to PNG at multiple sizes.

Construction (in 100x100 viewBox):
  - Black T outline:  M18 15 H36 V41 H64 V59 H36 V85 H18 Z   stroke=5, miter
  - Green right arm:  rect x=64 y=15 w=18 h=70               stroke=5, miter
  - Colors: ink #0A0A0A, emerald #16A34A

Why outer-minus-inner instead of PIL polygon(outline=, width=):
PIL's stroked outline draws each edge as an independent thick line and produces
visible gaps at concave corners (the two inside corners where the T's bridge
meets the vertical bar). Filling a true outline RING — outer polygon expanded
by stroke/2 minus inner polygon shrunk by stroke/2 — gives clean miter joints
identical to SVG's stroke-linejoin=miter.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageChops

OUT = Path(__file__).resolve().parents[1] / "public"
SIZES = [1024, 512, 192, 32]

# Light-bg variant (saved as logo-light-*): ink T + emerald arm on cream
INK         = (10, 10, 10, 255)
EMERALD     = (22, 163, 74, 255)
CREAM       = (245, 242, 234, 255)

# Dark-bg variant (canonical, saved as logo / favicon): cream T + green-500 arm, transparent bg
DARK_T      = CREAM
DARK_ARM    = (34, 197, 94, 255)

SUPER = 16

# Stroke width = 5 in 100-unit space, so half-stroke d = 2.5
D = 2.5

# T shape (vertical bar 18..36 x 15..85 + crossbar 18..64 x 41..59) outlined
T_OUTER = [(18-D,15-D),(36+D,15-D),(36+D,41-D),(64+D,41-D),
           (64+D,59+D),(36+D,59+D),(36+D,85+D),(18-D,85+D)]
T_INNER = [(18+D,15+D),(36-D,15+D),(36-D,41+D),(64-D,41+D),
           (64-D,59-D),(36-D,59-D),(36-D,85-D),(18+D,85-D)]

# Right arm rect (64..82 x 15..85) outlined
ARM_OUTER = [(64-D,15-D),(82+D,15-D),(82+D,85+D),(64-D,85+D)]
ARM_INNER = [(64+D,15+D),(82-D,15+D),(82-D,85-D),(64+D,85-D)]


def render_ring(canvas_size: int, scale: float, outer, inner, color):
    """Render a single-color outline ring as outer-fill minus inner-cutout."""
    layer = Image.new("RGBA", (canvas_size, canvas_size), (0, 0, 0, 0))
    ImageDraw.Draw(layer).polygon([(x*scale, y*scale) for x, y in outer], fill=color)
    mask = Image.new("L", (canvas_size, canvas_size), 255)
    ImageDraw.Draw(mask).polygon([(x*scale, y*scale) for x, y in inner], fill=0)
    r, g, b, a = layer.split()
    a = ImageChops.multiply(a, mask)
    return Image.merge("RGBA", (r, g, b, a))


def render(size: int, t_color, arm_color, bg=(0, 0, 0, 0)) -> Image.Image:
    s = size * SUPER
    scale = s / 100
    base = Image.new("RGBA", (s, s), bg)
    base = Image.alpha_composite(base, render_ring(s, scale, T_OUTER, T_INNER, t_color))
    base = Image.alpha_composite(base, render_ring(s, scale, ARM_OUTER, ARM_INNER, arm_color))
    return base.resize((size, size), Image.LANCZOS)


def main():
    # Dark-variant PNGs — cream T + green-500 arm, INK background baked in
    # (so they're usable when uploaded to platforms with light/white surfaces)
    ink_bg = (10, 10, 10, 255)
    for n in SIZES:
        img = render(n, t_color=DARK_T, arm_color=DARK_ARM, bg=ink_bg)
        out = OUT / (f"favicon-{n}.png" if n == 32 else f"logo-{n}.png")
        img.save(out, "PNG")
        print(f"wrote {out.name}  {img.size}")
    # Light-variant PNGs — ink T + emerald arm on cream
    for n in SIZES:
        img = render(n, t_color=INK, arm_color=EMERALD, bg=CREAM)
        out = OUT / (f"favicon-light-{n}.png" if n == 32 else f"logo-light-{n}.png")
        img.save(out, "PNG")
        print(f"wrote {out.name}  {img.size}")


if __name__ == "__main__":
    main()
