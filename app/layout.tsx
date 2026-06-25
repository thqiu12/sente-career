import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "先手就职 SENTE CAREER｜在日中国留学生的日本就职生涯规划",
  description:
    "先手就职 SENTE CAREER：面向在日中国留学生与计划赴日就职学生的生涯规划品牌。从私塾/语校阶段提前布局，覆盖商务日语、长期实习、咨询与事业会社专项训练。知日教育集团出品。",
  keywords: [
    "日本就职",
    "在日留学生就职",
    "赴日就职",
    "商务日语",
    "咨询就职",
    "事业会社",
    "ES添削",
    "先手就职",
    "SENTE CAREER",
  ],
  openGraph: {
    title: "先手就职 SENTE CAREER｜赢在起点",
    description:
      "从私塾/语校阶段提前一到两年落子。覆盖商务日语、长期实习、咨询与事业会社专项的日本就职全链路训练。",
    type: "website",
    locale: "zh_CN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0f12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={archivo.variable}>
      <body className="min-h-[100dvh] antialiased">{children}</body>
    </html>
  );
}
