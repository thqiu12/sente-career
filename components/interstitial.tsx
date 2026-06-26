import { Reveal } from "./reveal";
import { StepWave } from "./brand";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

/*
  全幅品牌分隔区 — 呼应业务 PPT 的"绿色双色调照片 + 棋格波纹"分节版式。
  默认是干净的 墨黑+棋格+波纹 面板;把一张纪实照片(求职/面试/校园场景)
  放到 /public/interstitial.jpg,即自动变成 PPT 那种绿色双色调照片面板。
  不依赖任何外部图床(国内访问也稳)。
*/
export function Interstitial() {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      {/* deck-style background: clean ink+棋格 panel by default; drop a photo
          at /public/interstitial.jpg to turn it into a green-duotone image
          (no external calls — safe for users in China). */}
      <div className="absolute inset-0" aria-hidden>
        <div className="board-grid-dark absolute inset-0" />
        <div
          className="absolute inset-0 bg-cover bg-center grayscale"
          style={{ backgroundImage: "url('/interstitial.jpg')" }}
        />
        {/* green duotone tint (only shows over photo mid-tones) */}
        <div className="absolute inset-0 bg-green opacity-40 mix-blend-color" />
        <div className="absolute inset-0 bg-ink/30" />
        {/* left scrim keeps text legible while a photo shows on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
      </div>

      {/* checker wave on the right (dial opacity down if you add a photo) */}
      <StepWave
        className="pointer-events-none absolute -right-10 top-1/2 hidden h-[150%] w-auto -translate-y-1/2 opacity-80 lg:block"
        lanes={6}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <p className="mb-5 font-display text-[12.5px] font-extrabold tracking-[0.22em] text-green-bright">
            先手就職 · CAREER IS LIMITLESS
          </p>
          <h2 className="max-w-2xl text-[clamp(1.9rem,4.4vw,3.2rem)] font-black leading-[1.18]">
            在日本就职这盘棋,
            <br />
            <span className="text-green-bright">落子越早,赢面越大。</span>
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-[15.5px] font-bold text-paper transition-colors hover:text-green-bright"
          >
            现在,落下你的第一手
            <ArrowRight size={17} weight="bold" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
