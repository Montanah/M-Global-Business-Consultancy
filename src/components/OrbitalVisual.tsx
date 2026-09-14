import { useState } from "react";
import { ArrowUpRight, Pause, Play } from "lucide-react";

// A resolution-independent sculpture that avoids a WebGL or video download.
const OrbitalVisual = () => {
  const [paused, setPaused] = useState(false);
  return (
    <div className={`orbital-visual${paused ? " is-paused" : ""}`}>
      <div className="orbit-coordinate orbit-coordinate-top" aria-hidden="true">
        <span>INDEPENDENT THINKING</span>
        <span>BOUNDLESS POSSIBILITY</span>
      </div>
      <svg
        className="orbital-sculpture"
        viewBox="0 0 640 640"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="planet-fill" cx="35%" cy="26%" r="78%">
            <stop stopColor="var(--orbit-core-light)" />
            <stop offset=".6" stopColor="var(--orbit-core-mid)" />
            <stop offset="1" stopColor="var(--orbit-core-dark)" />
          </radialGradient>
          <radialGradient id="planet-light" cx="27%" cy="24%" r="75%">
            <stop stopColor="var(--orbit-highlight)" stopOpacity=".85" />
            <stop offset=".6" stopColor="var(--orbit-wire)" stopOpacity=".36" />
            <stop offset="1" stopColor="var(--orbit-wire)" stopOpacity=".04" />
          </radialGradient>
          <linearGradient
            id="orbit-light"
            x1="64"
            y1="210"
            x2="564"
            y2="390"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--orbit-highlight)" />
            <stop
              offset=".4"
              stopColor="var(--brand-accent)"
              stopOpacity=".8"
            />
            <stop
              offset="1"
              stopColor="var(--brand-accent)"
              stopOpacity=".06"
            />
          </linearGradient>
          <radialGradient id="orbit-halo">
            <stop stopColor="var(--brand-violet)" stopOpacity=".2" />
            <stop offset="1" stopColor="var(--brand-violet)" stopOpacity="0" />
          </radialGradient>
          <clipPath id="planet-clip">
            <circle cx="320" cy="320" r="190" />
          </clipPath>
        </defs>
        <circle cx="320" cy="320" r="310" fill="url(#orbit-halo)" />
        <g
          className="orbit-guide"
          stroke="var(--orbit-blue)"
          strokeOpacity=".13"
        >
          <circle cx="320" cy="320" r="268" strokeDasharray="2 9" />
          <circle cx="320" cy="320" r="300" />
          <path d="M320 7v21m0 584v21M7 320h21m584 0h21M102 102l15 15m406 406 15 15M102 538l15-15m406-406 15-15" />
        </g>
        <g transform="rotate(-28 320 320)">
          <ellipse
            cx="320"
            cy="320"
            rx="299"
            ry="88"
            stroke="url(#orbit-light)"
            strokeWidth="1.2"
          />
          <ellipse
            cx="320"
            cy="320"
            rx="282"
            ry="79"
            stroke="var(--brand-accent)"
            strokeOpacity=".2"
          />
        </g>
        <circle
          cx="320"
          cy="320"
          r="190"
          fill="url(#planet-fill)"
          stroke="var(--orbit-wire)"
          strokeOpacity=".35"
        />
        <g
          clipPath="url(#planet-clip)"
          transform="rotate(-28 320 320)"
          stroke="url(#planet-light)"
          strokeWidth=".8"
        >
          {Array.from({ length: 17 }, (_, index) => {
            const angle = (((index - 8) / 9) * Math.PI) / 2;
            const y = 320 + Math.sin(angle) * 190;
            const width = Math.cos(angle) * 190;
            return (
              <ellipse
                key={`lat-${index}`}
                cx="320"
                cy={y}
                rx={width}
                ry={width * 0.19}
              />
            );
          })}
          {Array.from({ length: 15 }, (_, index) => (
            <ellipse
              key={`long-${index}`}
              cx="320"
              cy="320"
              rx={12 + index * 12.65}
              ry="190"
            />
          ))}
          <path d="M130 320h380M320 130v380" />
        </g>
        <g transform="rotate(-28 320 320)">
          <path
            d="M21 320a299 88 0 0 0 598 0"
            stroke="url(#orbit-light)"
            strokeWidth="2"
          />
          <path
            d="M38 320a282 79 0 0 0 564 0"
            stroke="var(--orbit-blue)"
            strokeOpacity=".4"
          />
        </g>
        <g className="orbit-satellite">
          <circle
            cx="93"
            cy="186"
            r="16"
            fill="var(--brand-accent)"
            fillOpacity=".08"
          />
          <circle cx="93" cy="186" r="6" fill="var(--brand-accent)" />
          <circle
            cx="93"
            cy="186"
            r="10"
            stroke="var(--brand-accent)"
            strokeOpacity=".5"
          />
        </g>
        <g className="orbit-satellite orbit-satellite-secondary">
          <circle cx="563" cy="432" r="4" fill="var(--brand-accent)" />
        </g>
        <path
          d="M423 178h73l26-26h63M208 448h-72l-31 31H47"
          stroke="var(--orbit-muted)"
          strokeOpacity=".35"
        />
        <circle cx="423" cy="178" r="3" fill="var(--brand-accent)" />
        <circle cx="208" cy="448" r="3" fill="var(--brand-accent)" />
      </svg>
      <div className="orbit-label orbit-label-top">
        <span className="status-dot" /> STRATEGY × TECHNOLOGY
      </div>
      <div className="orbit-label orbit-label-bottom">
        <ArrowUpRight size={14} /> DESIGNED TO GO FURTHER
      </div>
      <div className="orbit-bottom">
        <span>YOUR NEXT CHAPTER STARTS HERE</span>
        <button
          type="button"
          className="orbit-toggle"
          onClick={() => setPaused(!paused)}
          aria-label={
            paused ? "Play orbital animation" : "Pause orbital animation"
          }
          aria-pressed={paused}
        >
          {paused ? <Play size={13} /> : <Pause size={13} />}
        </button>
      </div>
    </div>
  );
};

export default OrbitalVisual;
