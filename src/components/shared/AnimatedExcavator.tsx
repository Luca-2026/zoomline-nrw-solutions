import { motion } from "framer-motion";

/**
 * Animated SVG excavator in Zoomlion lime-green.
 * Boom + arm + bucket gently dig and lift on a loop.
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
      </defs>

      {/* Glow halo */}
      <circle cx="200" cy="180" r="170" fill="url(#glow)" />

      {/* Ground shadow */}
      <motion.ellipse
        cx="200"
        cy="295"
        rx="120"
        ry="8"
        fill="hsl(210 20% 25%)"
        opacity="0.18"
        animate={{ rx: [120, 110, 120], opacity: [0.18, 0.12, 0.18] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Tracks (caterpillar) */}
      <g>
        <rect x="90" y="240" width="220" height="42" rx="20" fill="hsl(210 20% 22%)" />
        <rect x="100" y="248" width="200" height="26" rx="12" fill="hsl(210 18% 32%)" />
        {/* Track wheels */}
        {[120, 160, 200, 240, 280].map((cx) => (
          <circle key={cx} cx={cx} cy="261" r="9" fill="hsl(210 20% 18%)" />
        ))}
        {/* Track pattern lines */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.rect
            key={i}
            x={95 + i * 22}
            y="244"
            width="3"
            height="34"
            fill="hsl(210 20% 15%)"
            opacity="0.5"
            animate={{ x: [95 + i * 22, 95 + i * 22 + 22] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </g>

      {/* Body / cabin base — gently bobs */}
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Lower body */}
        <rect x="115" y="200" width="170" height="45" rx="6" fill="url(#bodyGrad)" />
        {/* Engine block detail */}
        <rect x="225" y="208" width="55" height="30" rx="3" fill="hsl(72 50% 40%)" opacity="0.6" />
        <rect x="232" y="214" width="40" height="3" fill="hsl(210 20% 20%)" />
        <rect x="232" y="221" width="40" height="3" fill="hsl(210 20% 20%)" />
        <rect x="232" y="228" width="40" height="3" fill="hsl(210 20% 20%)" />

        {/* Cabin */}
        <path
          d="M 130 200 L 145 150 L 210 150 L 225 200 Z"
          fill="url(#bodyGrad)"
        />
        {/* Cabin window */}
        <path
          d="M 148 195 L 158 158 L 205 158 L 215 195 Z"
          fill="hsl(200 60% 75%)"
          opacity="0.85"
        />
        <path
          d="M 148 195 L 158 158 L 205 158 L 215 195 Z"
          fill="none"
          stroke="hsl(210 20% 25%)"
          strokeWidth="2"
        />
        {/* Window highlight */}
        <path d="M 158 158 L 165 158 L 152 195 L 148 195 Z" fill="white" opacity="0.25" />
      </motion.g>

      {/* Arm assembly — gently swings up and down as one piece */}
      <motion.g
        style={{ transformOrigin: "232px 178px", transformBox: "fill-box" } as any}
        animate={{ rotate: [-8, 6, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Boom (upper arm) — angled from body up to elbow */}
        <line
          x1="232"
          y1="178"
          x2="295"
          y2="115"
          stroke="url(#armGrad)"
          strokeWidth="20"
          strokeLinecap="round"
        />
        <line
          x1="232"
          y1="178"
          x2="295"
          y2="115"
          stroke="hsl(72 50% 35%)"
          strokeWidth="20"
          strokeLinecap="round"
          fill="none"
          opacity="0.0"
        />

        {/* Pivot bolt at body */}
        <circle cx="232" cy="178" r="7" fill="hsl(210 20% 22%)" />
        <circle cx="232" cy="178" r="2.5" fill="hsl(72 62% 55%)" />

        {/* Stick (forearm) — from elbow down to bucket */}
        <line
          x1="295"
          y1="115"
          x2="335"
          y2="190"
          stroke="url(#armGrad)"
          strokeWidth="16"
          strokeLinecap="round"
        />

        {/* Elbow joint */}
        <circle cx="295" cy="115" r="6" fill="hsl(210 20% 22%)" />
        <circle cx="295" cy="115" r="2" fill="hsl(72 62% 55%)" />

        {/* Bucket — small wrist motion at stick tip */}
        <motion.g
          style={{ transformOrigin: "335px 190px", transformBox: "fill-box" } as any}
          animate={{ rotate: [-10, 15, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
            <path
              d="M 318 188 L 352 188 L 358 210 L 345 224 L 325 224 L 314 210 Z"
              fill="url(#bodyGrad)"
              stroke="hsl(72 50% 35%)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Bucket teeth */}
            <path
              d="M 325 224 L 327 230 L 332 224 M 333 224 L 335 230 L 340 224 M 341 224 L 343 230 L 348 224"
              fill="hsl(210 20% 22%)"
              stroke="hsl(210 20% 22%)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Bucket joint */}
            <circle cx="335" cy="190" r="5" fill="hsl(210 20% 22%)" />
            <circle cx="335" cy="190" r="1.8" fill="hsl(72 62% 55%)" />
        </motion.g>
      </motion.g>

      {/* Floating sparkle accents */}
      <motion.circle
        cx="80"
        cy="80"
        r="3"
        fill="hsl(72 62% 55%)"
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
      />
      <motion.circle
        cx="340"
        cy="60"
        r="2.5"
        fill="hsl(72 62% 55%)"
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
      />
      <motion.circle
        cx="60"
        cy="200"
        r="2"
        fill="hsl(72 62% 55%)"
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1.6 }}
      />
    </svg>
  );
}
