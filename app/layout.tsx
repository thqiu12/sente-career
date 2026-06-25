import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESC } from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "先手就职 SENTE CAREER｜在日中国留学生的日本就职生涯规划",
  description: SITE_DESC,
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
  alternates: { canonical: "/" },
  openGraph: {
    title: "先手就职 SENTE CAREER｜赢在起点",
    description:
      "从私塾/语校阶段提前一到两年落子。覆盖商务日语、长期实习、咨询与事业会社专项的日本就职全链路训练。",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "先手就职 SENTE CAREER｜赢在起点",
    description:
      "面向在日中国留学生与计划赴日学生的日本就职生涯规划品牌。知日教育集团出品。",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0f12",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  alternateName: "SENTE CAREER",
  url: SITE_URL,
  description: SITE_DESC,
  areaServed: "JP",
  parentOrganization: { "@type": "Organization", name: "知日教育集团" },
  knowsLanguage: ["zh", "ja"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN" className={archivo.variable}>
      <body className="min-h-[100dvh] antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
