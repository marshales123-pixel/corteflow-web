export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
      {/* Hexágono */}
      <polygon
        points="20,2 35,11 35,29 20,38 5,29 5,11"
        fill="url(#logoGrad)"
      />
      {/* C geométrica */}
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontSize="20"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        C
      </text>
    </svg>
  );
}
