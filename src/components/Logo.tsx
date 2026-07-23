// Aspect ratio real del arte aprobado (public/logo-mark.png), 704x800
const ASPECT = 704 / 800;

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <img
      src="/logo-mark.png"
      alt="Logo CorteFlow"
      width={Math.round(size * ASPECT)}
      height={size}
      style={{ height: size, width: "auto", display: "block" }}
      draggable={false}
    />
  );
}
