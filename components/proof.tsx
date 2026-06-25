import { Reveal } from "./reveal";

/*
  实绩 / 社会证明区块。
  ⚠️ 下面的数字、案例均为占位示例,上线前必须替换为真实数据,
     否则不要发布(虚假实绩有品牌与合规风险)。
*/

// TODO 替换为真实统计
const stats = [
  { num: "200", suffix: "+", label: "累计辅导学员" },
  { num: "85", suffix: "%", label: "进入目标行业" },
  { num: "60", suffix: "+", label: "覆盖目标企业" },
];

// 学员主攻赛道(框架可保留,具体可调整)
const tracks = [
  "综合咨询 / Big4",
  "综合商社",
  "外资 / 日系金融",
  "外资メーカー",
  "日系大手企画",
  "IT / 战略",
];

// TODO 替换为真实(脱敏)案例
const cases = [
  {
    who: "T 同学 · 文系修士",
    start: "提前 18 个月启动",
    result: "综合商社 内定",
  },
  {
    who: "L 同学 · 理工本科",
    start: "大三启动 L2",
    result: "外资メーカー 内定",
  },
  {
    who: "W 同学 · 语言学校",
    start: "赴日即布局",
    result: "Big4 咨询 内定",
  },
];

export function Proof() {
  return (
    <section id="proof" className="bg-canvas">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] font-black leading-[1.12]">
            权威不靠说,靠落子的结果。
          </h2>
          <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-ink/70">
            我们用真实案例和数据建立信任,而不是口号。
          </p>
        </Reveal>

        {/* stats */}
        <Reveal delay={0.05}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-ink/12 bg-ink/10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-canvas px-7 py-9">
                <p className="font-display text-[clamp(2.6rem,6vw,4rem)] font-black leading-none tracking-display text-ink">
                  {s.num}
                  <span className="text-green-deep">{s.suffix}</span>
                </p>
                <p className="mt-3 text-[14.5px] text-ink/65">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* tracks */}
        <Reveal delay={0.08}>
          <div className="mt-6 rounded-[var(--radius-card)] bg-ink p-7 sm:p-9">
            <p className="mb-5 font-display text-[12.5px] font-extrabold tracking-[0.18em] text-green-bright">
              TARGET TRACKS · 学员主攻赛道
            </p>
            <ul className="flex flex-wrap gap-2.5">
              {tracks.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-white/15 px-4 py-2 text-[14px] text-[#e3e0d6]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* case cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.who} delay={0.05 * i}>
              <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-ink/12 bg-paper p-7 transition-colors duration-200 hover:border-ink/25">
                <p className="text-[15px] font-black text-ink">{c.who}</p>
                <p className="mt-3 text-[13.5px] text-ink/55">{c.start}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-ink/10 pt-5">
                  <span className="h-2 w-2 rounded-full bg-green" />
                  <span className="text-[15px] font-bold text-green-deep">
                    {c.result}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <p className="mt-6 text-[13px] text-ink/40">
            以上为示例,实际实绩数据以咨询时提供为准。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
