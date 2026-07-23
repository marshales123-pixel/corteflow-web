export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Logo CorteFlow"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
        {/* Glow suave — replica el filtro "soft" del brand book */}
        <filter id="logoGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Hex Flow — anillo hexagonal abierto (hexágono sin el lado derecho, forma de "C") */}
      <path
        d="M135 39.4 L65 39.4 L30 100 L65 160.6 L135 160.6"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth={26}
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#logoGlow)"
      />
    </svg>
  );
}
