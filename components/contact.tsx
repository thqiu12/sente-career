import { Reveal } from "./reveal";
import { CheckerWave, Stone } from "./brand";
import { QrCode } from "@phosphor-icons/react/dist/ssr";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-paper">
      <div className="board-grid-dark absolute inset-0" aria-hidden />
      <CheckerWave
        className="pointer-events-none absolute -bottom-10 -left-16 h-[340px] w-auto opacity-[0.16]"
        lanes={5}
      />
      <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-32">
        <div>
          <Reveal>
            <p className="mb-5 font-display text-[13px] font-extrabold tracking-[0.24em] text-green-bright">
              CAREER IS LIMITLESS
            </p>
            <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] font-black leading-[1.08]">
              现在,落下你的
              <span className="text-green-bright">第一手</span>。
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-7 max-w-md text-[17px] leading-relaxed text-[#cfccc0]">
              先来一次免费方向诊断,把年级、目标行业和时间线聊清楚。
              扫码加顾问微信,越早开始,先手越大。
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-9 text-[13px] tracking-[0.04em] text-muted-d">
              知日教育集团出品 · 专精咨询公司 / 事业会社领域
            </p>
          </Reveal>
        </div>

        {/* WeChat QR card */}
        <Reveal delay={0.1}>
          <div className="mx-auto w-full max-w-sm rounded-[var(--radius-card)] bg-paper p-8 text-ink">
            <div className="flex items-center gap-3">
              <Stone variant="green" className="h-7 w-7" />
              <p className="text-[15px] font-black">微信扫码 · 加顾问咨询</p>
            </div>

            {/*
              TODO 替换:把顾问微信二维码图片放到 /public/wechat-qr.png,
              然后用 <Image src="/wechat-qr.png" .../> 替换下面这个占位框。
            */}
            <div className="mt-6 flex aspect-square w-full items-center justify-center rounded-[var(--radius-card)] border-2 border-dashed border-ink/20 bg-paper-2">
              <div className="flex flex-col items-center gap-3 text-ink/35">
                <QrCode size={64} weight="thin" />
                <span className="text-[13px] font-semibold tracking-[0.04em]">
                  微信二维码占位 · 待替换
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5 text-[14px]">
              <span className="text-ink/55">微信号</span>
              <span className="font-bold tracking-[0.04em] text-ink/80">
                待填写
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
