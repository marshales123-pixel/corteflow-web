import type { ReactNode } from "react";

/** Marco de celular para mostrar pantallas reales del sistema (fotos o videos). */
export default function MarcoCelular({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-[2.25rem] border border-borde-2 bg-grafito p-2 shadow-[0_30px_80px_-30px_var(--glow)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.75rem] bg-navaja aspect-[540/1168]">
        {children}
      </div>
    </div>
  );
}
