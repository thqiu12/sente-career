import { Reveal } from "./reveal";

const items = [
  {
    title: "个人课题模板",
    sub: "ガクチカ / 自己 PR",
    desc: "用日企常用框架拆解经历:背景、课题、行动、成果、学习。",
  },
  {
    title: "面试想定问答清单",
    sub: "S / A / B / C 分级",
    desc: "按出现频率与重要度排序,让你先准备最高频的问题。",
  },
  {
    title: "ES 参考集",
    sub: "商社 · 金融限定版",
    desc: "理解日企 ES 的题型、表达结构、字数限制与志望动机深度。",
  },
  {
    title: "Logical Thinking · Case Book",
    sub: "Case 专项 / GD",
    desc: "系统训练 MECE、逻辑树、Fermi 与 Case 拆解。",
  },
  {
    title: "SPI / 玉手箱对策",
    sub: "笔试题型与节奏",
    desc: "提前熟悉笔试题型、时间分配,语言与非语言备考有序推进。",
  },
  {
    title: "外资系企业地图",
    sub: "Top 106 投递地图",
    desc: "咨询 / 金融 / メーカー / IT 企业群,辅助建立投递优先级。",
  },
];

export function Toolkit() {
  return (
    <section id="toolkit" className="bg-canvas">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] font-black leading-[1.12]">
            我们交付的是工具链,不是空话。
          </h2>
          <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-ink/70">
            从模板、题库、案例,到行业图谱与笔试资料,
            每一步落子背后都有可复用的训练工具。
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* feature statement cell */}
          <Reveal className="sm:col-span-2 lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-[var(--radius-card)] bg-ink p-8 text-paper">
              <p className="font-display text-[13px] font-extrabold tracking-[0.2em] text-green-bright">
                TRAINING TOOLCHAIN
              </p>
              <p className="mt-8 text-[clamp(1.4rem,2.6vw,2rem)] font-black leading-[1.3]">
                每一份资料,都对应一个真实的选考动作。
                不是发给你自学,而是带着你练。
              </p>
            </div>
          </Reveal>

          {/* green stat cell */}
          <Reveal delay={0.06} className="sm:col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-center rounded-[var(--radius-card)] bg-green p-8 text-ink">
              <p className="font-display text-[clamp(3rem,7vw,4.2rem)] font-black leading-none tracking-display">
                14+
              </p>
              <p className="mt-3 text-[15.5px] font-bold leading-snug">
                套可复用的模板、题库与行业图谱,
                ES、面试、笔试、行研每一步都有据可依。
              </p>
            </div>
          </Reveal>

          {/* item cells */}
          {items.map((it, i) => (
            <Reveal key={it.title} delay={0.04 * i}>
              <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-ink/12 bg-paper p-7 transition-colors duration-200 hover:border-ink/25">
                <p className="font-display text-[12px] font-bold tracking-[0.12em] text-green-deep">
                  {it.sub}
                </p>
                <h3 className="mt-2 text-[18.5px] font-black leading-snug">
                  {it.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/65">
                  {it.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <p className="mt-6 text-[14px] text-ink/55">
            更多:行业就活时间轴、测试中心单词集、企业地图细分页、成长经历整理页等,
            将在咨询与服务过程中逐步开放。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
