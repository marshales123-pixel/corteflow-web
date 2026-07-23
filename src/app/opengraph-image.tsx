import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CorteFlow — Sistema de gestión para barberías";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Glow radial */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(244,92,36,0.28) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#141009",
            border: "1px solid rgba(255,244,232,0.16)",
            borderRadius: 999,
            padding: "8px 20px",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #EF4444, #F97316)",
            }}
          />
          <span style={{ color: "#A79F97", fontSize: 18 }}>
            Sistema de gestión para barberías · Buenos Aires
          </span>
        </div>

        {/* Título */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#F7F3EE",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 8,
            letterSpacing: "-2px",
          }}
        >
          Corte
          <span
            style={{
              background: "linear-gradient(135deg, #EF4444, #F97316)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Flow
          </span>
        </div>

        {/* Subtítulo */}
        <div
          style={{
            fontSize: 28,
            color: "#A79F97",
            marginTop: 16,
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Sin papel. Sin WhatsApp caótico. Sin excusas.
        </div>

        {/* Precios rápidos */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 48,
          }}
        >
          {["Básico USD 100 + 40/mes", "Profesional USD 150 + 60/mes", "Multi USD 200 + 40/mes × sede"].map(
            (p) => (
              <div
                key={p}
                style={{
                  background: "#141009",
                  border: "1px solid rgba(255,244,232,0.16)",
                  borderRadius: 12,
                  padding: "10px 20px",
                  color: "#F7F3EE",
                  fontSize: 16,
                }}
              >
                {p}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
