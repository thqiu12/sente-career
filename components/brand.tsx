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
  lanes = 6,
  style,
}: {
  className?: string;
  color?: string;
  lanes?: number;
  style?: CSSProperties;
}) {
  const W = 440;
  const t = 40; // band thickness = gap
  const H = lanes * 2 * t;
  const s1 = W * 0.3; // first seam
  const s2 = W * 0.6; // second seam
  const tw = t * 1.35; // S-curve transition width
  const c = tw * 0.5;
  const paths: string[] = [];

  for (let k = 0; k < lanes; k++) {
    const yt = k * 2 * t; // flat band top
    const ym = yt + t; // all bands dip down together between the seams

    // top edge: flat -> S to shifted -> flat -> S back -> flat
    const top =
      `M0 ${yt} L${s1} ${yt} ` +
      `C${s1 + c} ${yt} ${s1 + tw - c} ${ym} ${s1 + tw} ${ym} ` +
      `L${s2} ${ym} ` +
      `C${s2 + c} ${ym} ${s2 + tw - c} ${yt} ${s2 + tw} ${yt} ` +
      `L${W} ${yt}`;
    // bottom edge (offset by +t, traced in reverse)
    const bot =
      `L${W} ${yt + t} L${s2 + tw} ${yt + t} ` +
      `C${s2 + tw - c} ${yt + t} ${s2 + c} ${ym + t} ${s2} ${ym + t} ` +
      `L${s1 + tw} ${ym + t} ` +
      `C${s1 + tw - c} ${ym + t} ${s1 + c} ${yt + t} ${s1} ${yt + t} ` +
      `L0 ${yt + t} Z`;
    paths.push(top + bot);
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
