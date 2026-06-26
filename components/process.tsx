import { Reveal } from "./reveal";
import { CheckerWave, Stone } from "./brand";

const steps = [
  {
    n: "01",
    title: "免费方向诊断",
    desc: "一次就职方向体检,聊清年级、目标行业与时间线。",
  },
  {
    n: "02",
    title: "定制布局方案",
    desc: "给出企业地图与落子节奏,确定适合你的服务档位。",
  },
  {
    n: "03",
    title: "系统化训练",
    desc: "ES、面试、GD、笔试、商务日语,带着你练到能上场。",
  },
  {
    n: "04",
    title: "长期实习实战",
    desc: "匹配 3-6 个月长期实习,把真实经历写进简历。",
  },
  {
    n: "05",
    title: "冲刺到内定",
    desc: "高频 Case / Fit 训练,陪你一路走到拿下 offer。",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <div className="overflow-hidden rounded-[var(--radius-panel)] border border-ink/10 lg:grid lg:grid-cols-[0.82fr_1.4fr]">
            {/* left green panel — deck "目录" style */}
            <div className="relative overflow-hidden bg-green p-10 text-ink sm:p-12 lg:p-14">
              <CheckerWave
                className="pointer-events-none absolute -bottom-10 -right-10 h-[260px] w-auto opacity-[0.14]"
                color="var(--color-ink)"
                lanes={5}
              />
              <p className="relative font-display text-[12.5px] font-extrabold tracking-[0.2em] text-ink/70">
                THE PATH
              </p>
              <h2 className="relative mt-6 text-[clamp(1.9rem,3.4vw,2.8rem)] font-black leading-[1.14]">
                从一次咨询,
                <br />
                到一纸内定。
              </h2>
              <p className="relative mt-5 max-w-xs text-[15.5px] leading-relaxed text-ink/75">
                每一步都比上一步更高。先手的价值,
                就是让这条路提前开始。
              </p>
              <Stone
                variant="black"
                className="relative mt-10 h-12 w-12 shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
              />
            </div>

            {/* right white card — numbered agenda */}
            <ol className="bg-canvas p-8 sm:p-10 lg:p-12">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className={`flex items-start gap-5 py-6 sm:gap-7 ${
                    i === 0 ? "pt-0" : "border-t border-ink/10"
                  } ${i === steps.length - 1 ? "pb-0" : ""}`}
                >
                  <span className="w-[58px] shrink-0 font-display text-[34px] font-black leading-none text-green-deep sm:text-[40px]">
                    {s.n}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-[18px] font-black leading-snug">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink/65">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
