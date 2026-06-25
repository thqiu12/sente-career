import { Reveal } from "./reveal";
import { Check, X } from "@phosphor-icons/react/dist/ssr";

const usps = [
  {
    n: "01",
    title: "全链路",
    them: "只服务毕业前 3-6 个月",
    us: "升学 + 就业全链路打通,从私塾、语校阶段即启动。这就是“先手”。",
  },
  {
    n: "02",
    title: "商务日语",
    them: "只教简历与面试技巧",
    us: "覆盖日企邮件、会议、面试真实场景,解决“过了 N1 却不会工作”。",
  },
  {
    n: "03",
    title: "长期实习",
    them: "没有真实资源,或仅短期参观",
    us: "提供 3-6 个月长期实习与官方证明,补齐留学生最大的简历短板。",
  },
  {
    n: "04",
    title: "咨询专精",
    them: "泛泛而谈各行业",
    us: "咨询 Case、事业会社企画专项体系训练,锁定高溢价高难度岗位。",
  },
];

export function Moat() {
  return (
    <section id="moat" className="relative bg-ink text-paper">
      <div className="board-grid-dark absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-[clamp(1.9rem,4.2vw,3rem)] font-black leading-[1.12]">
            四件事,
            <span className="text-green-bright">速成班抄不动</span>。
          </h2>
        </Reveal>

        <div className="mt-14">
          {usps.map((u, i) => (
            <Reveal key={u.n} delay={i * 0.06}>
              <div className="grid grid-cols-1 gap-6 border-t border-white/12 py-9 md:grid-cols-[120px_1fr] md:gap-10 lg:py-10">
                <div className="flex items-baseline gap-4 md:flex-col md:gap-2">
                  <span className="font-display text-[40px] font-black leading-none text-green-bright md:text-[52px]">
                    {u.n}
                  </span>
                  <h3 className="text-[22px] font-black md:text-[24px]">
                    {u.title}
                  </h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[var(--radius-card)] border border-white/10 px-5 py-5">
                    <p className="mb-2 flex items-center gap-2 text-[12.5px] font-bold tracking-[0.06em] text-muted-d">
                      <X size={15} weight="bold" />
                      市面速成班
                    </p>
                    <p className="text-[15px] leading-relaxed text-muted-d">
                      {u.them}
                    </p>
                  </div>
                  <div className="rounded-[var(--radius-card)] border border-green/40 bg-green/[0.08] px-5 py-5">
                    <p className="mb-2 flex items-center gap-2 text-[12.5px] font-bold tracking-[0.06em] text-green-bright">
                      <Check size={15} weight="bold" />
                      先手就职
                    </p>
                    <p className="text-[15px] leading-relaxed text-[#e3e0d6]">
                      {u.us}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-white/12" />
        </div>
      </div>
    </section>
  );
}
