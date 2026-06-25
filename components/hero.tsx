import { Button } from "./button";
import { StepWave, StarPoints, Stone } from "./brand";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div className="board-grid-dark absolute inset-0" aria-hidden />
      <StarPoints className="absolute inset-0" />
      {/* soft green glow anchored to the wave, not a generic AI blob */}
      <div
        className="pointer-events-none absolute -right-24 top-[58%] h-[320px] w-[320px] -translate-y-1/2 rounded-full opacity-[0.10] blur-[110px] sm:top-1/2 sm:h-[560px] sm:w-[560px] sm:opacity-[0.16]"
        style={{ background: "var(--color-green)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 pb-20 pt-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:pb-24 lg:pt-24">
        {/* text column */}
        <div className="max-w-xl">
          <Reveal>
            <div className="mb-7 flex items-center gap-3 text-[12.5px] font-semibold tracking-[0.16em] text-muted-d">
              <span className="h-px w-8 bg-green" />
              <span className="font-display uppercase">Japan Career</span>
              <span className="text-muted-d">日本就职 · 生涯规划</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-[clamp(2.6rem,7vw,4.6rem)] font-black leading-[1.04] tracking-[0.01em]">
              先手就职,
              <br />
              <span className="text-green-bright">赢在起点</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-md text-[17px] leading-relaxed text-[#cfccc0]">
              别人毕业前才开始冲刺,你提前一到两年落子。
              把“看不懂规则、被流程推着走”的被动焦虑,换成确定的掌控感。
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#contact" variant="accent">
                加微信咨询
              </Button>
              <Button href="#programs" variant="ghost-dark">
                看课程体系
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-9 text-[13px] tracking-[0.04em] text-muted-d">
              知日教育集团出品 · 专精咨询公司 / 事业会社领域
            </p>
          </Reveal>
        </div>

        {/* visual column */}
        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div className="pointer-events-none absolute inset-x-0 -top-6 select-none text-center font-display text-[clamp(3.5rem,11vw,7rem)] font-black leading-none tracking-display text-white/[0.04] lg:text-right">
            SENTE
          </div>
          <StepWave className="relative mx-auto h-[300px] w-auto sm:h-[380px] lg:ml-auto lg:mr-0 lg:h-[440px]" />
          <Stone
            variant="green"
            className="absolute -bottom-2 left-2 h-14 w-14 shadow-[0_18px_40px_rgba(0,0,0,0.5)] lg:left-6"
          />
        </div>
      </div>
    </section>
  );
}
