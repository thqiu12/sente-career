import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "SENTE CAREER · 先手就职";

// Latin-only by design: ImageResponse has no bundled CJK font, so Chinese
// glyphs would render as tofu. The brand wordmark + tagline carry the
// preview; the page <title>/description supply the Chinese text.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0f12",
          color: "#f5f3ec",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* stepped green bars echoing the wave motif */}
        <div
          style={{
            position: "absolute",
            right: 70,
            top: 90,
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: 300,
                height: 40,
                marginLeft: i * 34,
                background: "#18d873",
                borderRadius: 6,
                opacity: 0.92,
              }}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 6,
            color: "#2bef88",
          }}
        >
          CAREER IS LIMITLESS
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 130, fontWeight: 900, letterSpacing: -5, lineHeight: 1 }}>
            SENTE
          </div>
          <div
            style={{
              fontSize: 130,
              fontWeight: 900,
              letterSpacing: -5,
              lineHeight: 1,
              color: "#18d873",
            }}
          >
            CAREER
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#cfccc0" }}>
          Japan Career Strategy · by Chinichi Group
        </div>
      </div>
    ),
    { ...size },
  );
}
