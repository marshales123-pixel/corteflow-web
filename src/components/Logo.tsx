import Image from "next/image";

// Aspect ratio real del arte aprobado (public/logo-mark.png, 704x800).
// Se sirve una versión chica (logo-mark-144.webp, ~5 KB) en vez del PNG de 322 KB.
const ASPECT = 704 / 800;

export default function Logo({
  size = 40,
  alt = "",
  priority = false,
}: {
  size?: number;
  /** Vacío cuando el nombre "CorteFlow" va escrito al lado (si no, el lector de pantalla lo dice dos veces). */
  alt?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo-mark-144.webp"
      alt={alt}
      width={Math.round(size * ASPECT)}
      height={size}
      priority={priority}
      unoptimized
      style={{ height: size, width: "auto", display: "block" }}
      draggable={false}
    />
  );
}
