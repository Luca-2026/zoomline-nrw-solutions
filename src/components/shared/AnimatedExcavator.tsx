/**
 * Animated SVG excavator in Zoomlion lime-green.
 * Pure CSS / SMIL animations (no framer-motion). GPU-friendly transforms only.
 * Respects prefers-reduced-motion via the global CSS rule in index.css.
 */
export function AnimatedExcavator({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Animierter Zoomlion Bagger"
    >
      <defs>
        <linearGradient id="bodyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(72 70% 60%)" />
          <stop offset="100%" stopColor="hsl(72 62% 45%)" />
        </linearGradient>
        <linearGradient id="armGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(72 70% 60%)" />
          <stop offset="100%" stopColor="hsl(72 62% 50%)" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(72 62% 55%)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="hsl(72 62% 55%)" stopOpacity="0" />
        </radialGradient>

        <style>{`
          @keyframes excBob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-2px); } }
          @keyframes excArm { 0%,100% { transform: rotate(-8deg); } 50% { transform: rotate(6deg); } }
          @keyframes excBucket { 0%,100% { transform: rotate(-10deg); } 50% { transform: rotate(15deg); } }
          @keyframes excSparkle { 0%,100% { opacity: 0; transform: scale(0.5); } 50% { opacity: 1; transform: scale(1.5); } }
          .exc-bob { animation: excBob 3s ease-in-out infinite; transform-origin: 200px 220px; transform-box: fill-box; }
          .exc-arm { animation: excArm 4s ease-in-out infinite; transform-origin: 232px 178px; transform-box: fill-box; }
          .exc-bucket { animation: excBucket 4s ease-in-out infinite; transform-origin: 335px 190px; transform-box: fill-box; }
          .exc-spark { animation: excSparkle 2.5s ease-in-out infinite; transform-box: fill-box; }
          .exc-spark-1 { transform-origin: 80px 80px; animation-delay: 0s; }
          .exc-spark-2 { transform-origin: 340px 60px; animation-delay: 0.8s; }
          .exc-spark-3 { transform-origin: 60px 200px; animation-delay: 1.6s; }
        `}</style>
      </defs>

      {/* Glow halo */}
      <circle cx="200" cy="180" r="170" fill="url(#glow)" />

      {/* Ground shadow */}
      <ellipse cx="200" cy="295" rx="120" ry="8" fill="hsl(210 20% 25%)" opacity="0.18" />

      {/* Tracks (caterpillar) */}
      <g>
        <rect x="90" y="240" width="220" height="42" rx="20" fill="hsl(210 20% 22%)" />
        <rect x="100" y="248" width="200" height="26" rx="12" fill="hsl(210 18% 32%)" />
        {[120, 160, 200, 240, 280].map((cx) => (
          <circle key={cx} cx={cx} cy="261" r="9" fill="hsl(210 20% 18%)" />
        ))}
      </g>

      {/* Body / cabin base — gently bobs */}
      <g className="exc-bob">
        <rect x="115" y="200" width="170" height="45" rx="6" fill="url(#bodyGrad)" />
        <rect x="225" y="208" width="55" height="30" rx="3" fill="hsl(72 50% 40%)" opacity="0.6" />
        <rect x="232" y="214" width="40" height="3" fill="hsl(210 20% 20%)" />
        <rect x="232" y="221" width="40" height="3" fill="hsl(210 20% 20%)" />
        <rect x="232" y="228" width="40" height="3" fill="hsl(210 20% 20%)" />
        <path d="M 130 200 L 145 150 L 210 150 L 225 200 Z" fill="url(#bodyGrad)" />
        <path d="M 148 195 L 158 158 L 205 158 L 215 195 Z" fill="hsl(200 60% 75%)" opacity="0.85" />
        <path d="M 148 195 L 158 158 L 205 158 L 215 195 Z" fill="none" stroke="hsl(210 20% 25%)" strokeWidth="2" />
        <path d="M 158 158 L 165 158 L 152 195 L 148 195 Z" fill="white" opacity="0.25" />
      </g>

      {/* Arm assembly */}
      <g className="exc-arm">
        <line x1="232" y1="178" x2="295" y2="115" stroke="url(#armGrad)" strokeWidth="20" strokeLinecap="round" />
        <circle cx="232" cy="178" r="7" fill="hsl(210 20% 22%)" />
        <circle cx="232" cy="178" r="2.5" fill="hsl(72 62% 55%)" />
        <line x1="295" y1="115" x2="335" y2="190" stroke="url(#armGrad)" strokeWidth="16" strokeLinecap="round" />
        <circle cx="295" cy="115" r="6" fill="hsl(210 20% 22%)" />
        <circle cx="295" cy="115" r="2" fill="hsl(72 62% 55%)" />

        <g className="exc-bucket">
          <path
            d="M 318 188 L 352 188 L 358 210 L 345 224 L 325 224 L 314 210 Z"
            fill="url(#bodyGrad)"
            stroke="hsl(72 50% 35%)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M 325 224 L 327 230 L 332 224 M 333 224 L 335 230 L 340 224 M 341 224 L 343 230 L 348 224"
            fill="hsl(210 20% 22%)"
            stroke="hsl(210 20% 22%)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="335" cy="190" r="5" fill="hsl(210 20% 22%)" />
          <circle cx="335" cy="190" r="1.8" fill="hsl(72 62% 55%)" />
        </g>
      </g>

      {/* Sparkles */}
      <circle className="exc-spark exc-spark-1" cx="80" cy="80" r="3" fill="hsl(72 62% 55%)" />
      <circle className="exc-spark exc-spark-2" cx="340" cy="60" r="2.5" fill="hsl(72 62% 55%)" />
      <circle className="exc-spark exc-spark-3" cx="60" cy="200" r="2" fill="hsl(72 62% 55%)" />
    </svg>
  );
}
