import { SenteMark } from "./brand";

const cols = [
  {
    h: "服务",
    links: [
      { label: "L1 看清棋局", href: "#programs" },
      { label: "L2 按谱落子", href: "#programs" },
      { label: "L3 高手对弈", href: "#programs" },
      { label: "训练工具链", href: "#toolkit" },
    ],
  },
  {
    h: "适合谁",
    links: [
      { label: "已在日本的留学生", href: "#paths" },
      { label: "计划赴日的学生", href: "#paths" },
      { label: "已毕业 · 转职", href: "#paths" },
    ],
  },
  {
    h: "了解",
    links: [
      { label: "为什么是先手", href: "#positioning" },
      { label: "差异化壁垒", href: "#moat" },
      { label: "学员实绩", href: "#proof" },
      { label: "常见问题", href: "#faq" },
    ],
  },
  {
    h: "关注",
    // TODO 替换为真实社媒主页链接
    links: [
      { label: "小红书", href: "#" },
      { label: "抖音", href: "#" },
      { label: "视频号", href: "#" },
      { label: "微信公众号", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <SenteMark className="h-9 w-auto" />
              <span className="font-display text-[26px] font-black tracking-display">
                SENTE<span className="text-green-bright">.</span>
              </span>
            </div>
            <p className="mt-5 text-[15px] font-bold text-paper">
              先手就职,赢在起点
            </p>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-d">
              面向在日中国留学生与计划赴日学生的
              <br className="hidden sm:block" />
              日本就职生涯规划品牌。
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-green px-4 py-2 text-[14px] font-bold text-ink transition-[filter] hover:brightness-[1.06]"
            >
              加微信咨询
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.h}>
                <p className="mb-4 text-[13px] font-bold tracking-[0.08em] text-muted-d">
                  {c.h}
                </p>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="inline-block py-0.5 text-[14px] text-[#cfccc0] transition-colors hover:text-green-bright"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[12.5px] tracking-[0.04em] text-muted-d sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 先手就职 SENTE CAREER · 知日教育集团出品</span>
          <div className="flex items-center gap-5">
            {/* TODO 接入真实隐私政策页 */}
            <a href="#" className="transition-colors hover:text-paper">
              隐私政策
            </a>
            <span className="font-display uppercase tracking-[0.18em]">
              Career is limitless
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
