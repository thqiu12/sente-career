import type { CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/*  SENTE mark - a single rising "step" band + 落子 stone.             */
/*  Faithful to the VI: one lane of the wave (领先一步) plus a dot.    */
/* ------------------------------------------------------------------ */
export function SenteMark({
  className,
  color = "var(--color-green)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 44"
      className={className}
      role="img"
      aria-label="先手就职 SENTE"
      fill={color}
    >
      {/* rising band: low-left, S-curve step up to the right */}
      <path d="M0 30 L0 18 L26 18 C33 18 33 4 40 4 L60 4 L60 16 L42 16 C37 16 38 30 31 30 Z" />
      {/* 落子 stone */}
      <circle cx="50" cy="34" r="9" />
    </svg>
  );
}

/* Full lockup: mark + SENTE / CAREER + 先手就職 */
export function SenteLockup({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  const text = tone === "ink" ? "text-ink" : "text-paper";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <SenteMark className="h-7 w-auto" />
      <span className="flex flex-col leading-[0.92]">
        <span
          className={`font-display text-[13px] font-extrabold tracking-[0.02em] ${text}`}
        >
          SENTE
          <span className="ml-1 text-[var(--color-green-deep)]">CAREER</span>
        </span>
        <span className={`text-[15px] font-bold tracking-[0.06em] ${text}`}>
          先手就职
        </span>
      </span>
    </span>
  );
}

/* 落子 - a single placed go stone */
export function Stone({
  className,
  variant = "green",
  style,
}: {
  className?: string;
  variant?: "green" | "white" | "black";
  style?: CSSProperties;
}) {
  const bg =
    variant === "green"
      ? "radial-gradient(circle at 34% 28%, #4dff9e, var(--color-green) 62%, #0f9b53)"
      : variant === "white"
        ? "radial-gradient(circle at 34% 28%, #ffffff, #d7d2c4)"
        : "radial-gradient(circle at 34% 28%, #3a3b42, #0b0c0f)";
  return (
    <span
      className={`block rounded-full ${className ?? ""}`}
      style={{ background: bg, ...style }}
      aria-hidden
    />
  );
}

/* ------------------------------------------------------------------ */
/*  CheckerWave — faithful reproduction of the VI / deck motif:         */
/*  stacked green bands that step up/down at aligned seams, interlocking */
/*  with the white gaps into a woven checkerboard of rounded squares.    */
/* ------------------------------------------------------------------ */
export function CheckerWave({
  className,
  color = "var(--color-green)",
  lanes = 5,
  style,
}: {
  className?: string;
  color?: string;
  lanes?: number;
  style?: CSSProperties;
}) {
  const c = 70; // cell size (ribbon thickness = gap = step drop)
  const flat = c * 1.9; // flat run before each step (blockier checker)
  const s = c * 0.95; // S-curve transition width
  const P = flat + s; // horizontal period of one step
  const e = s * 0.45; // cubic ease handle
  const W = Math.round(7.4 * c); // ~518
  const H = lanes * 2 * c;
  const descent = (Math.ceil(W / P) + 1) * c; // how far a ribbon falls across W

  // one descending-staircase ribbon (thickness c) as a closed path
  const ribbon = (startY: number, phase: number) => {
    // top-edge anchors: [x, y, isCurve(from previous)]
    const a: [number, number, boolean][] = [[0, startY, false]];
    let x = phase > 0 ? phase : 0;
    let y = startY;
    if (phase > 0) a.push([phase, y, false]);
    while (x < W) {
      const xe = Math.min(x + s, W);
      a.push([xe, y + c, true]); // S-curve down by c
      y += c;
      x = xe;
      if (x >= W) break;
      const xf = Math.min(x + flat, W);
      a.push([xf, y, false]); // flat run
      x = xf;
    }
    if (a[a.length - 1][0] < W) a.push([W, y, false]);

    // forward (top edge)
    let d = `M${a[0][0]} ${a[0][1].toFixed(1)}`;
    for (let i = 1; i < a.length; i++) {
      const [x1, y1] = a[i - 1];
      const [x2, y2, curve] = a[i];
      d += curve
        ? ` C${(x1 + (x2 - x1) * 0.0 + e).toFixed(1)} ${y1.toFixed(1)} ${(x2 - e).toFixed(1)} ${y2.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`
        : ` L${x2.toFixed(1)} ${y2.toFixed(1)}`;
    }
    // reverse (bottom edge, offset +c)
    const last = a[a.length - 1];
    d += ` L${last[0].toFixed(1)} ${(last[1] + c).toFixed(1)}`;
    for (let i = a.length - 1; i > 0; i--) {
      const [x1, y1] = a[i - 1];
      const [x2, y2, curve] = a[i];
      d += curve
        ? ` C${(x2 - e).toFixed(1)} ${(y2 + c).toFixed(1)} ${(x1 + e).toFixed(1)} ${(y1 + c).toFixed(1)} ${x1.toFixed(1)} ${(y1 + c).toFixed(1)}`
        : ` L${x1.toFixed(1)} ${(y1 + c).toFixed(1)}`;
    }
    return d + " Z";
  };

  const paths: string[] = [];
  let idx = 0;
  for (let startY = -descent; startY < H + c; startY += 2 * c, idx++) {
    const phase = (idx % 2) * (P / 2); // offset alternate ribbons -> interlock
    paths.push(ribbon(startY, phase));
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      style={style}
      fill={color}
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/* 棋局进度图 — a go board with three rising stones (L1→L2→L3) */
export function BoardProgress({ className }: { className?: string }) {
  const coords = [20, 56, 92, 128, 164, 200];
  const stones = [
    { x: 56, y: 164, lv: "L1" },
    { x: 128, y: 92, lv: "L2" },
    { x: 164, y: 56, lv: "L3" },
  ];
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden>
      {coords.map((c) => (
        <line
          key={`h${c}`}
          x1="20"
          y1={c}
          x2="200"
          y2={c}
          stroke="var(--color-ink)"
          strokeOpacity="0.14"
          strokeWidth="1"
        />
      ))}
      {coords.map((c) => (
        <line
          key={`v${c}`}
          x1={c}
          y1="20"
          x2={c}
          y2="200"
          stroke="var(--color-ink)"
          strokeOpacity="0.14"
          strokeWidth="1"
        />
      ))}
      <polyline
        points={stones.map((s) => `${s.x},${s.y}`).join(" ")}
        fill="none"
        stroke="var(--color-green)"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeDasharray="3 5"
      />
      {stones.map((s, i) => (
        <g key={s.lv}>
          <circle
            cx={s.x}
            cy={s.y}
            r={i === 2 ? 13 : 11}
            fill="var(--color-green)"
          />
          <text
            x={s.x}
            y={s.y + 4}
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fill="var(--color-ink)"
            fontFamily="var(--font-archivo)"
          >
            {s.lv}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* 碁盘 star points (9 点) overlay for hero */
export function StarPoints({ className }: { className?: string }) {
  const pts = [25, 50, 75];
  return (
    <div className={`pointer-events-none ${className ?? ""}`} aria-hidden>
      {pts.map((top) =>
        pts.map((left) => {
          const center = top === 50 && left === 50;
          return (
            <span
              key={`${top}-${left}`}
              className="absolute rounded-full"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: center ? 9 : 6,
                height: center ? 9 : 6,
                transform: "translate(-50%,-50%)",
                background: center
                  ? "var(--color-green-bright)"
                  : "rgba(255,255,255,0.18)",
              }}
            />
          );
        }),
      )}
    </div>
  );
}
