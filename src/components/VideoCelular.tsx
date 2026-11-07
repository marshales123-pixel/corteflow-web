"use client";

import { useEffect, useRef } from "react";

/**
 * Video corto del sistema real, mudo y en loop.
 *
 * - No baja nada hasta que entra en pantalla (preload="none" + IntersectionObserver):
 *   no compite con la carga de arriba de todo ni con el LCP.
 * - Al entrar en pantalla se reproduce solo (autoplay muted playsinline); al salir se pausa.
 * - Con "reducir movimiento" activado no arranca: queda quieto en el póster.
 */
export default function VideoCelular({
  src,
  poster,
  label,
}: {
  /** Ruta sin extensión: se sirve .mp4 (H.264) o .webm (VP9), lo que el navegador soporte. */
  src: string;
  poster: string;
  label: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (quieto.matches || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          if (!video.getAttribute("src")) {
            const mp4 = video.canPlayType('video/mp4; codecs="avc1.640028"') !== "";
            video.src = `${src}.${mp4 ? "mp4" : "webm"}`;
            video.autoplay = true;
          }
          video.play().catch(() => {
            // Si el navegador no deja reproducir, queda el póster.
          });
        } else if (!video.paused) {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.25 },
    );
    obs.observe(video);
    return () => obs.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className="absolute inset-0 h-full w-full object-cover object-top"
    />
  );
}
