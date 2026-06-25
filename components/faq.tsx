import { Reveal } from "./reveal";
import { Plus } from "@phosphor-icons/react/dist/ssr";

const faqs = [
  {
    q: "需要 N1 在手才能开始吗?",
    a: "不需要。L1 诊断与早期布局不设日语门槛;L2 / L3 含商务日语集训,帮你从“能考试”走到“能在日企工作”。",
  },
  {
    q: "现在大几开始比较合适?",
    a: "越早越好。本科大二、大三,修士研一、研二都可以启动 L1 诊断。先手的价值,就在于比别人早一到两年落子。",
  },
  {
    q: "我还在国内、准备赴日,能开始吗?",
    a: "可以。留学决策期就能植入职业规划,选校、选专业即对齐目标行业,让留学全程都成为就职的铺垫。",
  },
  {
    q: "课程是线上还是线下?",
    a: "线上为主,1V1 与部分环节可线下进行,具体按校区与课程安排。详情可在咨询时确认。", // TODO 按实际授课形式确认
  },
  {
    q: "价格怎么算?三档怎么选?",
    a: "L1 启动诊断对知日塾生免费;L2 / L3 的具体方案与费用,按你的年级、目标行业与时间线在咨询时确定,不做一刀切。",
  },
  {
    q: "长期实习是真实资源吗?",
    a: "是。我们按企业机会与学生条件做项目制匹配,提供 3-6 个月长期实习与官方证明,补齐留学生最大的简历短板。",
  },
  {
    q: "能保证拿到 offer 吗?",
    a: "我们不做“包过”“保 offer”的承诺。先手交付的是系统化的布局与训练,把你拿下内定的概率最大化。",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative bg-paper">
      <div className="board-grid absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-[860px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,4.2vw,3rem)] font-black leading-[1.12]">
            落子之前,先把疑问问清楚。
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i * 0.04, 0.2)}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[17px] font-bold text-ink">
                  {f.q}
                  <Plus
                    size={20}
                    weight="bold"
                    className="shrink-0 text-green-deep transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-[68ch] pb-6 text-[15.5px] leading-[1.8] text-ink/70">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <p className="mt-10 text-[15.5px] text-ink/70">
            还有其他问题?
            <a
              href="#contact"
              className="ml-1 font-bold text-green-deep hover:underline"
            >
              加微信直接问顾问
            </a>
            。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
