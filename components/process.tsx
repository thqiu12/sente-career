import { Reveal } from "./reveal";

const steps = [
  {
    n: "01",
    title: "免费方向诊断",
    desc: "一次就职方向体检,聊清年级、目标行业与时间线。",
    lift: "lg:-translate-y-0",
  },
  {
    n: "02",
    title: "定制布局方案",
    desc: "给出企业地图与落子节奏,确定适合你的服务档位。",
    lift: "lg:-translate-y-4",
  },
  {
    n: "03",
    title: "系统化训练",
    desc: "ES、面试、GD、笔试、商务日语,带着你练到能上场。",
    lift: "lg:-translate-y-8",
  },
  {
    n: "04",
    title: "长期实习实战",
    desc: "匹配 3-6 个月长期实习,把真实经历写进简历。",
    lift: "lg:-translate-y-12",
  },
  {
    n: "05",
    title: "冲刺到内定",
    desc: "高频 Case / Fit 训练,陪你一路走到拿下 offer。",
    lift: "lg:-translate-y-16",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-paper">
      <div className="board-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] font-black leading-[1.12]">
            从一次咨询,到一纸内定。
          </h2>
          <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-ink/70">
            每一步都比上一步更高。先手的价值,就是让这条路提前开始。
          </p>
        </Reveal>

        <ol className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08} className={s.lift}>
              <div className="border-t-2 border-ink/15 pt-5">
                <span className="mb-4 flex h-3 w-3 -translate-y-[1.55rem] rounded-full bg-green" />
                <span className="font-display text-[34px] font-black leading-none text-ink/25">
                  {s.n}
                </span>
                <h3 className="mt-3 text-[18px] font-black leading-snug">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/65">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
