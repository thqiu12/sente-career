import { Reveal } from "./reveal";
import { Stone } from "./brand";

export function Positioning() {
  return (
    <section id="positioning" className="relative bg-paper">
      <div className="board-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <div className="mb-6 flex items-center gap-3 text-[12.5px] font-semibold tracking-[0.16em] text-green-deep">
            <span className="h-px w-8 bg-green" />
            <span className="font-display uppercase">Why Sente</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] font-black leading-[1.1] tracking-[0.01em]">
            一个名字,装下你
            <span className="text-green-deep">唯一抄不走的壁垒</span>。
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
          <Reveal delay={0.1}>
            <p className="text-[16.5px] leading-[1.85] text-ink/80">
              市面上的日本就职产品高度同质化,清一色是“毕业前三到六个月帮你改简历、教面试”的速成班。
              它们的玩法,谁都能抄。
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-[16.5px] leading-[1.85] text-ink/80">
              「先手」把唯一难被复制的能力直接写进了名字:
              <strong className="font-bold text-ink">
                从私塾、语言学校阶段就启动就职布局,提前一到两年落子。
              </strong>
              这是速成班结构上学不来的。
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <figure className="relative mt-14 overflow-hidden rounded-[var(--radius-card)] border border-ink/10 bg-ink px-7 py-10 text-paper sm:px-12 sm:py-14">
            <Stone
              variant="green"
              className="absolute right-8 top-8 h-10 w-10 opacity-90 sm:right-12"
            />
            <blockquote className="max-w-2xl text-[clamp(1.3rem,2.6vw,2rem)] font-bold leading-[1.4]">
              别人帮你赶末班车,
              <span className="text-green-bright">
                我们让你提前两年坐进头等舱。
              </span>
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
