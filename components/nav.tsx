import { SenteLockup } from "./brand";
import { Button } from "./button";

const links = [
  { href: "#positioning", label: "定位" },
  { href: "#paths", label: "适合谁" },
  { href: "#programs", label: "课程" },
  { href: "#toolkit", label: "工具链" },
  { href: "#process", label: "流程" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="先手就职 首页">
          <SenteLockup tone="ink" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-semibold text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button href="#contact" variant="accent" className="px-5 py-2.5 text-[14px]">
          加微信咨询
        </Button>
      </div>
    </header>
  );
}
