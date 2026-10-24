import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale } from "@/i18n/config";

export const alt = "Cifra — AI-powered personal finance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#052618",
          padding: "70px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -140,
            width: 520,
            height: 520,
            borderRadius: 999,
            backgroundColor: "#138E5E",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 60,
            bottom: 60,
            width: 200,
            height: 200,
            borderRadius: 999,
            backgroundColor: "#0c3d2a",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              backgroundColor: "#138E5E",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#9fd9bd",
              display: "flex",
            }}
          >
            Cifra
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 120,
              lineHeight: 1,
              color: "#ffffff",
              fontWeight: 700,
              display: "flex",
            }}
          >
            Cifra
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 34,
              color: "#cdeede",
              maxWidth: 800,
              display: "flex",
            }}
          >
            {dict.meta.description}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#9fd9bd" }}>
          cifra.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
