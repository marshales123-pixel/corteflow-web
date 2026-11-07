import { ImageResponse } from "next/og";
import { PLANES, ORDEN_PLANES, SETUP_SIN_CARGO, textoMensual } from "@/lib/precios";

// Se genera una sola vez en el build (sin runtime edge). Los precios salen de
// lib/precios.ts, la misma fuente que la página y el JSON-LD.
export const alt = "CorteFlow — Sistema de turnos, caja y sueldos para barberías";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const NAVAJA = "#080808";
const GRAFITO = "#141009";
const BORDE = "rgba(255,244,232,0.16)";
const FILO = "#f7f3ee";
const HUMO = "#a79f97";
const GRADIENTE = "linear-gradient(135deg, #ef4444, #f97316)";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: NAVAJA,
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            background: "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(244,92,36,0.25) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: GRAFITO,
            border: `1px solid ${BORDE}`,
            borderRadius: 999,
            padding: "8px 22px",
            marginBottom: 28,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: GRADIENTE, display: "flex" }} />
          <span style={{ color: HUMO, fontSize: 22 }}>Sistema para barberías · Buenos Aires</span>
        </div>

        <div style={{ display: "flex", fontSize: 96, fontWeight: 800, letterSpacing: "-3px", lineHeight: 1 }}>
          <span style={{ color: FILO, marginRight: -6 }}>Corte</span>
          <span style={{ backgroundImage: GRADIENTE, backgroundClip: "text", color: "transparent" }}>Flow</span>
        </div>

        <div style={{ display: "flex", fontSize: 34, color: FILO, marginTop: 24, textAlign: "center" }}>
          Turnos online, caja que cuadra y sueldos calculados solos.
        </div>

        <div style={{ display: "flex", gap: 18, marginTop: 44 }}>
          {ORDEN_PLANES.map((id) => (
            <div
              key={id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                background: GRAFITO,
                border: `1px solid ${BORDE}`,
                borderRadius: 14,
                padding: "12px 24px",
              }}
            >
              <span style={{ color: HUMO, fontSize: 18 }}>{PLANES[id].nombre}</span>
              <span style={{ color: FILO, fontSize: 24, fontWeight: 700 }}>{textoMensual(PLANES[id])}</span>
              {PLANES[id].porSede && (
                <span style={{ color: HUMO, fontSize: 16 }}>desde {PLANES[id].sedesMinimas} sedes</span>
              )}
            </div>
          ))}
        </div>

        {SETUP_SIN_CARGO && (
          <div style={{ display: "flex", marginTop: 22, color: "#34d399", fontSize: 22 }}>Hoy el setup va sin cargo</div>
        )}
      </div>
    ),
    { ...size },
  );
}
