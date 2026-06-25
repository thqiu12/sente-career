import { Reveal } from "./reveal";
import {
  Compass,
  MapTrifold,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";

const paths = [
  {
    tag: "A",
    Icon: Compass,
    title: "已在日本的中国留学生",
    who: "本科大二、大三 / 修士 研一、研二,人已经在日本",
    pain: [
      "N1 在手,却不会日企面试与邮件里的“工作语言”",
      "看不懂选考节奏,等回过神,早期窗口已经关了",
      "简历上缺一段拿得出手的长期实习",
    ],
    help: [
      "提前 1-2 年锁定目标行业与企业地图",
      "商务日语 + ES + 面试,系统化闭环训练",
      "3-6 个月长期实习匹配,补齐最大短板",
    ],
  },
  {
    tag: "B",
    Icon: MapTrifold,
    title: "计划赴日就职的中国学生",
    who: "国内准备赴日留学,或刚刚抵达日本",
    pain: [
      "把“留学”和“就职”当成两件事,等毕业才想起就职",
      "选校、选专业时,完全没考虑过目标行业",
      "信息差最大的阶段,却最没人带",
    ],
    help: [
      "在留学决策期就植入职业规划",
      "选校选专业对齐目标行业与赛道",
      "入学即启动布局,留学全程都是就职的铺垫",
    ],
  },
];

export function TwoPaths() {
  return (
    <section id="paths" className="bg-canvas">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="max-w-2xl text-[clamp(1.9rem,4.2vw,3rem)] font-black leading-[1.12]">
            两类人,同一步先手。
          </h2>
          <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-ink/70">
            无论你已经在日本,还是刚动了赴日的念头,
            真正的差距从“什么时候开始布局”就拉开了。
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {paths.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.08}>
              <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-ink/12 bg-paper p-7 sm:p-9">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper">
                    <p.Icon size={24} weight="bold" />
                  </span>
                  <span className="font-display text-[13px] font-extrabold tracking-[0.2em] text-green-deep">
                    路径 {p.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-[22px] font-black leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14.5px] text-ink/55">{p.who}</p>

                <div className="mt-7 border-t border-ink/10 pt-6">
                  <p className="mb-3 text-[13px] font-bold tracking-[0.04em] text-ink/45">
                    你的处境
                  </p>
                  <ul className="space-y-2.5">
                    {p.pain.map((t) => (
                      <li
                        key={t}
                        className="flex gap-2.5 text-[15px] leading-snug text-ink/75"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-[var(--radius-card)] bg-ink p-6 text-paper">
                  <p className="mb-3 flex items-center gap-2 text-[13px] font-bold tracking-[0.04em] text-green-bright">
                    先手怎么帮你
                    <ArrowUpRight size={15} weight="bold" />
                  </p>
                  <ul className="space-y-2.5">
                    {p.help.map((t) => (
                      <li
                        key={t}
                        className="flex gap-2.5 text-[15px] leading-snug text-[#d6d3c8]"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-green" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-[var(--radius-card)] border border-ink/12 bg-paper px-7 py-6 sm:flex-row sm:items-center">
            <p className="text-[15.5px] text-ink/75">
              <span className="font-bold text-ink">已经毕业、想转职跳槽?</span>{" "}
              先手同样为职场再落子的你保留位置。
            </p>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-1.5 text-[14.5px] font-bold text-green-deep hover:underline"
            >
              聊聊我的情况
              <ArrowUpRight size={15} weight="bold" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
