import { Reveal } from "./reveal";
import { Button } from "./button";
import { BoardProgress } from "./brand";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

type Tier = {
  lv: string;
  phase: string;
  en: string;
  desc: string;
  validity: string;
  price: string;
  stones: number;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    lv: "L1",
    phase: "看清棋局",
    en: "Read the board · 诊断",
    desc: "职业定位、目标行业判断、就职路径拆解。一次“就职方向体检”,先把方向拉清楚。",
    validity: "启动诊断包",
    price: "知日塾生免费",
    stones: 1,
  },
  {
    lv: "L2",
    phase: "按谱落子",
    en: "Play the moves · 标准",
    desc: "ES、面试、GD、笔试、行业研究、AI 训练、商务日语的系统化闭环。一个就职季内集中完成。",
    validity: "有效期半年",
    price: "咨询顾问",
    stones: 2,
  },
  {
    lv: "L3",
    phase: "高手对弈",
    en: "Master's game · 强化",
    desc: "面向咨询、外资、大手核心岗位。Case / Fit / GD 高频训练,叠加长期实习经历,跨季高强度冲刺。",
    validity: "有效期一年",
    price: "咨询顾问",
    stones: 3,
    featured: true,
  },
];

const valueAdds = [
  "企业研究资料",
  "OB / OG 分享会",
  "内部推荐岗位",
  "英语托业 / 托福课程",
];

const table = {
  head: ["课程与服务", "L1", "L2", "L3"],
  rows: [
    ["职业定位规划", "方向建议", "6 次", "10 次"],
    ["目标企业地图", "初步", "1 套", "不限"],
    ["履历书 · 自己 PR", "-", "1 套", "3 套"],
    ["ES 添削", "-", "10 社", "15 社"],
    ["模拟面试", "-", "8 次", "12 次"],
    ["GD 练习", "-", "4 次", "8 次"],
    ["SPI / 玉手箱", "-", "4 次", "8 次"],
    ["事业会社研究", "基础", "4 次", "4 次"],
    ["咨询公司研究", "基础", "2 次", "2 次"],
    ["AI 工具训练", "-", "2 次", "3 次"],
    ["商务日语集训", "-", "1 期", "2 期"],
    ["Case 专项 (1V1 Mock)", "-", "3 次", "10 次"],
    ["Fit / 志望动机面试", "-", "-", "1 期"],
    ["学长分享会", "公开场", "3 次", "不限"],
    ["长期实习规划", "初步", "-", "不限"],
    ["长期实习匹配", "-", "-", "不限"],
  ],
};

function Stones({ filled }: { filled: number }) {
  return (
    <span className="flex gap-1.5" aria-hidden>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`h-3 w-3 rounded-full ${
            i < filled ? "bg-green" : "border border-ink/25"
          }`}
        />
      ))}
    </span>
  );
}

export function Programs() {
  return (
    <section id="programs" className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] lg:items-center">
          <Reveal>
            <div className="mb-6 flex items-center gap-3 text-[12.5px] font-semibold tracking-[0.16em] text-green-deep">
              <span className="h-px w-8 bg-green" />
              <span className="font-display uppercase">The Board</span>
            </div>
            <h2 className="max-w-2xl text-[clamp(1.9rem,4.2vw,3rem)] font-black leading-[1.12]">
              把整局棋,拆成三步落子。
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-ink/70">
              从看清方向到高手对弈,三档服务对应就职布局的三个阶段。
              具体价格与方案,按你的年级与目标在咨询时定。
            </p>
          </Reveal>
          <Reveal delay={0.1} className="hidden lg:block">
            <BoardProgress className="ml-auto w-full max-w-[280px]" />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.lv} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col rounded-[var(--radius-card)] p-8 ${
                  t.featured
                    ? "bg-ink text-paper"
                    : "border border-ink/12 bg-canvas text-ink transition-colors duration-200 hover:border-ink/25"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-display text-[13px] font-extrabold tracking-[0.22em] ${
                      t.featured ? "text-green-bright" : "text-green-deep"
                    }`}
                  >
                    {t.lv}
                  </span>
                  <Stones filled={t.stones} />
                </div>

                <h3 className="mt-6 text-[26px] font-black">{t.phase}</h3>
                <p
                  className={`mt-1 text-[13.5px] tracking-[0.02em] ${
                    t.featured ? "text-muted-d" : "text-ink/55"
                  }`}
                >
                  {t.en}
                </p>

                <p
                  className={`mt-5 flex-1 text-[15px] leading-relaxed ${
                    t.featured ? "text-[#d6d3c8]" : "text-ink/75"
                  }`}
                >
                  {t.desc}
                </p>

                <div
                  className={`mt-7 border-t pt-5 ${
                    t.featured ? "border-white/15" : "border-ink/10"
                  }`}
                >
                  <p
                    className={`text-[12.5px] ${
                      t.featured ? "text-muted-d" : "text-ink/55"
                    }`}
                  >
                    {t.validity}
                  </p>
                  <p
                    className={`mt-1 text-[22px] font-black ${
                      t.featured ? "text-green-bright" : "text-ink"
                    }`}
                  >
                    {t.price}
                  </p>
                </div>

                <Button
                  href="#contact"
                  variant={t.featured ? "accent" : "ghost-light"}
                  className="mt-6 w-full"
                >
                  咨询这一档
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        {/* value-adds: 入塾即享 */}
        <Reveal delay={0.05}>
          <div className="mt-6 flex flex-col gap-4 rounded-[var(--radius-card)] border border-ink/12 bg-canvas px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[14.5px] font-bold text-ink">
              知日独家增值服务 · 入塾即享
            </p>
            <ul className="flex flex-wrap gap-2">
              {valueAdds.map((v) => (
                <li
                  key={v}
                  className="rounded-full border border-ink/15 px-3.5 py-1.5 text-[13.5px] text-ink/75"
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* opt-in full comparison table */}
        <Reveal delay={0.05}>
          <details className="group mt-6 rounded-[var(--radius-card)] border border-ink/12 bg-canvas">
            <summary className="flex cursor-pointer list-none items-center justify-between px-7 py-5 text-[15px] font-bold text-ink">
              查看完整服务对照表
              <CaretDown
                size={18}
                weight="bold"
                className="text-ink/50 transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <div className="overflow-x-auto px-3 pb-3 sm:px-5 sm:pb-5">
              <table className="w-full min-w-[560px] border-collapse text-left">
                <thead>
                  <tr className="text-[13px] text-ink/55">
                    <th className="py-3 pl-4 font-semibold">{table.head[0]}</th>
                    {table.head.slice(1).map((h) => (
                      <th
                        key={h}
                        className="px-3 py-3 text-center font-display font-extrabold tracking-[0.1em] text-green-deep"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((r) => (
                    <tr
                      key={r[0]}
                      className="border-t border-ink/8 text-[14px]"
                    >
                      <td className="py-3 pl-4 pr-3 font-medium text-ink/85">
                        {r[0]}
                      </td>
                      {r.slice(1).map((c, ci) => (
                        <td
                          key={ci}
                          className={`px-3 py-3 text-center tabular-nums ${
                            c === "-" ? "text-ink/25" : "text-ink/75"
                          }`}
                        >
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
