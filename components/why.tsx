import { Reveal } from "./reveal";
import { Check, X } from "@phosphor-icons/react/dist/ssr";

const dos = [
  "讲结构、讲规则、讲布局节奏",
  "用数据和真实案例建立权威",
  "笃定、克制,给你确定性",
];
const donts = [
  "“包过”“保 offer”“躺平上岸”",
  "制造焦虑、贩卖恐慌",
  "空洞鸡汤与夸张承诺",
];

export function Why() {
  return (
    <section id="why" className="bg-canvas">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-32">
        <Reveal>
          <h2 className="text-[clamp(1.9rem,4.2vw,3rem)] font-black leading-[1.12]">
            像高手一样布局,
            <br />
            而不是教你速成。
          </h2>
          <p className="mt-7 max-w-md text-[16.5px] leading-[1.85] text-ink/75">
            锐、笃定、有策略感。我们不卖惨、不打鸡血,只做一件事:
            看得比你远,带你少踩三年坑,把你的经历翻译成日本企业听得懂的语言。
          </p>
          <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-ink/15 px-5 py-2.5">
            <span className="h-2 w-2 rounded-full bg-green" />
            <span className="text-[14px] font-bold tracking-[0.02em] text-ink/80">
              先手就职 · 知日教育集团出品
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid overflow-hidden rounded-[var(--radius-card)] border border-ink/12 sm:grid-cols-2">
            <div className="border-b border-ink/12 bg-paper p-7 sm:border-b-0 sm:border-r">
              <p className="mb-5 flex items-center gap-2 text-[13px] font-black tracking-[0.06em] text-ink">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-paper">
                  <Check size={14} weight="bold" />
                </span>
                我们坚持
              </p>
              <ul className="space-y-3.5">
                {dos.map((d) => (
                  <li
                    key={d}
                    className="text-[14.5px] leading-snug text-ink/80"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper-2 p-7">
              <p className="mb-5 flex items-center gap-2 text-[13px] font-black tracking-[0.06em] text-ink/50">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-ink/25 text-ink/40">
                  <X size={13} weight="bold" />
                </span>
                我们拒绝
              </p>
              <ul className="space-y-3.5">
                {donts.map((d) => (
                  <li
                    key={d}
                    className="text-[14.5px] leading-snug text-ink/50"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
