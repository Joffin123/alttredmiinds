const rings = [470, 441, 400, 371, 331, 312, 285, 271, 243, 228, 201, 186, 158, 144, 116, 102, 75, 60, 32];
const ticks = Array.from({ length: 80 }, (_, i) => (i * 360) / 80);
const spokes = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5];
const VIEWBOX = '-700 -700 1400 1400';

/**
 * The blueprint dial: concentric rings with two counter-rotating tick bands.
 * Each band is its own full-size layer spun with a CSS animation. Every SVG shares the centred
 * viewBox, so the layer's centre is the dial's centre (no wobble) and the spin runs on the
 * compositor instead of re-rendering the SVG from JS every frame.
 * `children` are extra SVG shapes drawn on top, in the same -700…700 coordinate space.
 */
export default function Dial({ outerSpin = 120, innerSpin = 90, children }) {
  const layer = 'absolute inset-0 h-full w-full';
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <svg viewBox={VIEWBOX} className={layer}>
        <g stroke="#fff" fill="none" strokeWidth="0.7" opacity="0.14">
          {rings.map((r) => (
            <circle key={r} r={r} />
          ))}
        </g>
        <g stroke="#fff" strokeWidth="0.8" opacity="0.08">
          {spokes.map((a) => (
            <line key={a} x1="0" y1="-700" x2="0" y2="700" transform={`rotate(${a})`} />
          ))}
        </g>
      </svg>
      <svg
        viewBox={VIEWBOX}
        className={`${layer} animate-[spin_120s_linear_infinite] will-change-transform`}
        style={{ animationDuration: `${outerSpin}s` }}
      >
        {ticks.map((a) => (
          <line key={a} x1="0" y1="-303" x2="0" y2="-272" transform={`rotate(${a})`} stroke="#861D2C" strokeWidth="1.3" opacity="0.7" />
        ))}
        <path d="M 250 -101 A 270 270 0 0 0 -97 -252" stroke="#fff" strokeWidth="24" fill="none" opacity="0.05" />
        <path d="M -330 70 A 338 338 0 0 0 -190 280" stroke="#fff" strokeWidth="30" fill="none" opacity="0.06" />
      </svg>
      <svg
        viewBox={VIEWBOX}
        className={`${layer} animate-[spin_90s_linear_infinite] will-change-transform [animation-direction:reverse]`}
        style={{ animationDuration: `${innerSpin}s` }}
      >
        {ticks.map((a) => (
          <line key={a} x1="0" y1="-180" x2="0" y2="-160" transform={`rotate(${a})`} stroke="#ececec" strokeWidth="1" opacity="0.18" />
        ))}
        <path d="M 145 55 A 155 155 0 0 1 60 142" stroke="#fff" strokeWidth="14" fill="none" opacity="0.07" />
      </svg>
      <svg viewBox={VIEWBOX} className={layer}>
        <circle r="150" fill="#141413" opacity="0.5" />
        {children}
      </svg>
    </div>
  );
}
