"use client";

import { useEffect, useState } from "react";
import { SenteLockup } from "./brand";
import { Button } from "./button";

const links = [
  { href: "#positioning", label: "定位", id: "positioning" },
  { href: "#paths", label: "适合谁", id: "paths" },
  { href: "#programs", label: "课程", id: "programs" },
  { href: "#toolkit", label: "工具链", id: "toolkit" },
  { href: "#process", label: "流程", id: "process" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // scrolled = hero has left the area under the nav
  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;
    const obs = new IntersectionObserver(
      ([e]) => setScrolled(!e.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );
    obs.observe(hero);
    return () => obs.disconnect();
  }, []);

  // active section highlight
  useEffect(() => {
    const els = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          aria-label="先手就职 首页"
          className="rounded-sm py-1"
        >
          <SenteLockup tone={scrolled ? "ink" : "paper"} />
        </a>

        <nav aria-label="主导航" className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "true" : undefined}
                className={`rounded-full px-3.5 py-2.5 text-[14px] font-semibold transition-colors ${
                  scrolled
                    ? isActive
                      ? "text-green-deep"
                      : "text-ink/65 hover:text-ink"
                    : isActive
                      ? "text-green-bright"
                      : "text-paper/75 hover:text-paper"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <Button
          href="#contact"
          variant="accent"
          className="px-5 py-3 text-[14px]"
        >
          加微信咨询
        </Button>
      </div>
    </header>
  );
}
