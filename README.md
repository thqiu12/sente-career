# 先手就职 SENTE CAREER · 官网

面向**在日中国留学生**与**计划赴日就职学生**的日本就职生涯规划品牌官网。
知日教育集团出品。

## 技术栈

- **Next.js 16**（App Router）+ **TypeScript**
- **Tailwind CSS v4**（设计令牌在 `app/globals.css` 的 `@theme`）
- **Motion**（滚动入场动效，尊重 `prefers-reduced-motion`）
- **Phosphor Icons**（`@phosphor-icons/react/dist/ssr`）
- 字体：拉丁/品牌字 **Archivo**（`next/font` 自托管）；中文走系统字体栈
  （PingFang SC → Noto Sans SC 兜底），不打包多 MB 中文 web 字体，首屏更快。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 生产构建（纯静态，可部署到 Vercel / 任意静态主机）
```

## 页面结构（单页长滚动）

`app/page.tsx` 按顺序组合 `components/` 下的分区：

| 区块 | 文件 | 说明 |
| --- | --- | --- |
| 导航 | `nav.tsx` | 吸顶，移动端折叠为 Logo + CTA |
| 首屏 | `hero.tsx` | 墨黑 + 碁盘网格 + 先手波纹 + 落子 |
| 定位 | `positioning.tsx` | 「名字即壁垒」 |
| 适合谁 | `two-paths.tsx` | 两类客群：已在日 / 计划赴日 |
| 壁垒 | `moat.tsx` | 四大差异化 vs 速成班 |
| 课程 | `programs.tsx` | L1/L2/L3 棋局叙事 + 完整对照表 |
| 工具链 | `toolkit.tsx` | 配套物料 bento |
| 流程 | `process.tsx` | 咨询到内定 5 步 |
| 为什么是先手 | `why.tsx` | 人设 + 集团背书 |
| 加微信 | `contact.tsx` | 二维码 CTA |
| 页脚 | `footer.tsx` | |

品牌图形（Logo 标、先手波纹、落子、星位）在 `components/brand.tsx`。

## 上线前需替换的占位

1. **顾问微信二维码** — 把图片放到 `public/wechat-qr.png`，再到
   `components/contact.tsx` 用 `<Image src="/wechat-qr.png" .../>` 替换占位框，并填写「微信号」。
2. **价格** — 按品牌策略，L2/L3 当前写「咨询顾问」（价格留白）；L1 显示「知日塾生免费」。
   如需放出具体金额，改 `components/programs.tsx` 的 `tiers`。
3. **域名 / OG 图** — `app/layout.tsx` 的 `metadata` 可补 `metadataBase`、`openGraph.images`。

## 设计基调

锁定 VI：先手绿 `#18d873` 为唯一强调色，墨黑 / 碁盘米白为底；围棋「先手 · 落子」母题；
咨询公司式冷静、大量留白，刻意远离留学机构「花花绿绿」的观感。
