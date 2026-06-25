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
/*  StepWave - the signature rising/woven band motif.                  */
/*  Stacked green bands that each step up via an S-curve, staggered    */
/*  diagonally => 前进 / 领先一步.                                      */
/* ------------------------------------------------------------------ */
export function StepWave({
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
  const W = 400;
  const H = 460;
  const bh = H / (lanes * 2 - 1); // band thickness; gaps equal to bands
  const pitch = bh * 2; // vertical distance between band tops
  const riseW = bh * 1.6; // horizontal length of the S riser
  const paths: string[] = [];

  for (let k = 0; k < lanes; k++) {
    const yTop = H - bh - k * pitch; // top edge of this band's lower (left) part
    const yHi = yTop - pitch; // top edge after the step up
    // stagger the riser diagonally across the canvas
    const riseX = W * 0.12 + (k * (W * 0.62)) / (lanes - 1);
    const xa = riseX;
    const xb = riseX + riseW;
    const d = [
      `M0 ${yTop}`,
      `L${xa} ${yTop}`,
      `C${xa + riseW * 0.45} ${yTop} ${xb - riseW * 0.45} ${yHi} ${xb} ${yHi}`,
      `L${W} ${yHi}`,
      `L${W} ${yHi + bh}`,
      `L${xb} ${yHi + bh}`,
      `C${xb - riseW * 0.45} ${yHi + bh} ${xa + riseW * 0.45} ${yTop + bh} ${xa} ${yTop + bh}`,
      `L0 ${yTop + bh}`,
      "Z",
    ].join(" ");
    paths.push(d);
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
