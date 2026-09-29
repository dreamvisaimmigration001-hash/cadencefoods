import React from 'react';

interface VisualProps {
  className?: string;
  variant?: 'hero' | 'copacking' | 'procurement' | 'foodsafety' | 'machinery' | 'partnership';
}

export const VisualAsset: React.FC<VisualProps> = ({ className = '', variant = 'hero' }) => {
  if (variant === 'hero') {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#14161A] ${className}`}>
        {/* Architectural grid overlay */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Ambient atmospheric gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C25737]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#374233]/25 rounded-full blur-3xl pointer-events-none" />

        {/* Cinematic Industrial Food Processing Silhouette SVG */}
        <svg 
          viewBox="0 0 1200 700" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover opacity-85 select-none pointer-events-none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="steelGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3A3F4A" />
              <stop offset="45%" stopColor="#252830" />
              <stop offset="55%" stopColor="#4E5463" />
              <stop offset="100%" stopColor="#1B1D22" />
            </linearGradient>
            <linearGradient id="copperWarmth" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C25737" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6C2E1D" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C25737" stopOpacity="0" />
              <stop offset="50%" stopColor="#E28165" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#C25737" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background facility wall & ceiling truss lines */}
          <line x1="0" y1="120" x2="1200" y2="120" stroke="#2A2E38" strokeWidth="1.5" strokeDasharray="6 6" />
          <line x1="0" y1="220" x2="1200" y2="220" stroke="#252832" strokeWidth="1" />
          <line x1="200" y1="0" x2="200" y2="700" stroke="#252832" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="600" y1="0" x2="600" y2="700" stroke="#252832" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="1000" y1="0" x2="1000" y2="700" stroke="#252832" strokeWidth="1" strokeDasharray="4 8" />

          {/* Stainless Steel Tank 1 (Main Batching Vat) */}
          <rect x="140" y="260" width="220" height="340" rx="20" fill="url(#steelGrad1)" stroke="#5A6172" strokeWidth="1.5" />
          <path d="M 140 290 Q 250 250 360 290" fill="none" stroke="#6E768A" strokeWidth="2" />
          <rect x="235" y="210" width="30" height="50" fill="#3D434F" />
          {/* Manhole & sight glass */}
          <circle cx="250" cy="380" r="38" fill="#181A1F" stroke="#6E768A" strokeWidth="3" />
          <circle cx="250" cy="380" r="28" fill="#C25737" fillOpacity="0.25" stroke="#E28165" strokeWidth="1" />
          <circle cx="250" cy="380" r="8" fill="#E28165" fillOpacity="0.4" />
          {/* Sanitary Tri-clamp piping */}
          <path d="M 250 210 L 250 150 L 520 150 L 520 280" fill="none" stroke="#7A8499" strokeWidth="8" strokeLinecap="round" />
          <path d="M 250 150 L 520 150" fill="none" stroke="#E28165" strokeWidth="2" strokeDasharray="12 12" />

          {/* Tank 2 (Secondary Homogenizer / Mixing Reactor) */}
          <rect x="440" y="280" width="260" height="320" rx="16" fill="url(#steelGrad1)" stroke="#5A6172" strokeWidth="1.5" />
          <rect x="470" y="320" width="200" height="18" fill="#20232A" rx="4" />
          <line x1="480" y1="329" x2="660" y2="329" stroke="url(#glowLine)" strokeWidth="3" />
          {/* Digital sensor node */}
          <rect x="540" y="380" width="60" height="40" rx="6" fill="#121316" stroke="#484E5C" />
          <text x="570" y="405" fill="#E28165" fontSize="13" fontFamily="monospace" textAnchor="middle">98.4°C</text>

          {/* Precision Conveyor Rail & Automated Capping Line */}
          <rect x="740" y="430" width="460" height="16" fill="#2B2F38" stroke="#484F60" />
          <line x1="740" y1="446" x2="1200" y2="446" stroke="#C25737" strokeWidth="2" />
          {/* Support legs */}
          <rect x="800" y="446" width="12" height="180" fill="#202228" />
          <rect x="980" y="446" width="12" height="180" fill="#202228" />
          <rect x="1140" y="446" width="12" height="180" fill="#202228" />

          {/* Packaged Glass Jars / Containers moving along rail */}
          {[780, 840, 900, 960, 1020, 1080, 1140].map((x, i) => (
            <g key={i}>
              <rect x={x} y={382} width="36" height="48" rx="6" fill="#1C1E24" stroke="#687285" strokeWidth="1.2" />
              {/* Product inside jar with warm amber food hue */}
              <rect x={x + 4} y={395} width="28" height="32" rx="3" fill="url(#copperWarmth)" />
              {/* Gold / black cap */}
              <rect x={x + 6} y={376} width="24" height="8" rx="2" fill="#D4AF37" fillOpacity="0.8" />
              {/* Label */}
              <rect x={x + 7} y={403} width="22" height="16" rx="1" fill="#F4EDE2" fillOpacity="0.9" />
            </g>
          ))}

          {/* Stainless Steel Overhead Clean In Place (CIP) manifold */}
          <path d="M 680 180 L 1050 180 L 1050 370" fill="none" stroke="#646E82" strokeWidth="6" />
          <circle cx="1050" cy="370" r="10" fill="#C25737" />

          {/* Subtle industrial measurement calibration overlays */}
          <g opacity="0.4" fontFamily="monospace" fontSize="10" fill="#9BA3B5">
            <text x="160" y="248">ZONE 01 // BATCH_REACTOR_T1</text>
            <text x="460" y="268">ZONE 02 // HOMOGENIZATION_6000L</text>
            <text x="760" y="415">LINE SPEED: 140 BPM · GFSI COMPLIANT</text>
          </g>
        </svg>

        {/* Ambient base vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-transparent to-[#111215]/60 pointer-events-none" />
      </div>
    );
  }

  if (variant === 'copacking') {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#181A1F] ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#20242D] via-[#16181D] to-[#0E1013]" />
        <svg viewBox="0 0 800 600" fill="none" className="w-full h-full object-cover select-none">
          <defs>
            <linearGradient id="sauceGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C25737" />
              <stop offset="100%" stopColor="#822F18" />
            </linearGradient>
            <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8C96A8" />
              <stop offset="50%" stopColor="#4A5260" />
              <stop offset="100%" stopColor="#252A33" />
            </linearGradient>
          </defs>
          
          {/* Engineering Blueprint lines */}
          <line x1="50" y1="100" x2="750" y2="100" stroke="#2B313D" strokeDasharray="4 8" />
          <line x1="50" y1="500" x2="750" y2="500" stroke="#2B313D" strokeDasharray="4 8" />

          {/* Commercial Filling Manifold */}
          <rect x="220" y="80" width="360" height="70" rx="8" fill="url(#chrome)" stroke="#6C778B" />
          <circle cx="310" cy="115" r="16" fill="#181A1E" stroke="#C25737" strokeWidth="2" />
          <circle cx="400" cy="115" r="16" fill="#181A1E" stroke="#C25737" strokeWidth="2" />
          <circle cx="490" cy="115" r="16" fill="#181A1E" stroke="#C25737" strokeWidth="2" />

          {/* Dispensing nozzles */}
          <path d="M 302 150 L 302 240 L 318 240 L 318 150 Z" fill="#6A7588" />
          <path d="M 392 150 L 392 240 L 408 240 L 408 150 Z" fill="#6A7588" />
          <path d="M 482 150 L 482 240 L 498 240 L 498 150 Z" fill="#6A7588" />

          {/* Liquid streams */}
          <line x1="310" y1="240" x2="310" y2="330" stroke="#E28165" strokeWidth="4" strokeLinecap="round" />
          <line x1="400" y1="240" x2="400" y2="330" stroke="#E28165" strokeWidth="4" strokeLinecap="round" />
          <line x1="490" y1="240" x2="490" y2="330" stroke="#E28165" strokeWidth="4" strokeLinecap="round" />

          {/* Conveyor belt */}
          <rect x="80" y="440" width="640" height="30" rx="4" fill="#1E222A" stroke="#3F4654" />
          <line x1="80" y1="455" x2="720" y2="455" stroke="#C25737" strokeWidth="2" strokeDasharray="16 16" />

          {/* Jars on conveyor */}
          {[170, 310, 400, 490, 630].map((cx, idx) => (
            <g key={idx}>
              <rect x={cx - 36} y={310} width="72" height="130" rx="12" fill="#14171C" stroke="#717E94" strokeWidth="1.5" />
              {/* Product inside */}
              <rect x={cx - 30} y={340} width="60" height="95" rx="8" fill="url(#sauceGlow)" />
              {/* Cap */}
              <rect x={cx - 24} y={296} width="48" height="16" rx="4" fill="#C25737" />
              {/* Label area */}
              <rect x={cx - 26} y={360} width="52" height="50" rx="3" fill="#F8F6F0" fillOpacity="0.95" />
              <rect x={cx - 18} y={375} width="36" height="4" fill="#20242D" />
              <rect x={cx - 14} y={385} width="28" height="3" fill="#C25737" />
              <rect x={cx - 18} y={394} width="36" height="3" fill="#788090" />
            </g>
          ))}
        </svg>
        <div className="absolute bottom-4 left-6 text-xs font-mono text-neutral-400">
          TURNKEY CO-PACKING // HIGH-SPEED ACCURACY & PRIVATE LABEL FLEXIBILITY
        </div>
      </div>
    );
  }

  if (variant === 'procurement') {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#1A1816] ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#241F1A] via-[#1A1816] to-[#12100E]" />
        <svg viewBox="0 0 800 600" fill="none" className="w-full h-full object-cover select-none">
          <defs>
            <radialGradient id="ingredientGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C25737" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1A1816" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="400" cy="300" r="280" fill="url(#ingredientGlow)" />

          {/* Sourcing Hub Compass / Supplier Network Topology */}
          <circle cx="400" cy="300" r="220" stroke="#3D352D" strokeWidth="1.5" strokeDasharray="6 8" />
          <circle cx="400" cy="300" r="140" stroke="#52473D" strokeWidth="1" />
          <circle cx="400" cy="300" r="60" stroke="#C25737" strokeWidth="2" fill="#28221D" />

          {/* Central Recipe formulation core */}
          <text x="400" y="295" fill="#F8F6F0" fontSize="13" fontFamily="var(--font-display)" fontWeight="bold" textAnchor="middle">CADENCE</text>
          <text x="400" y="315" fill="#C25737" fontSize="11" fontFamily="monospace" textAnchor="middle">SOURCING</text>

          {/* Supplier network nodes with ingredient tags */}
          {[
            { angle: 30, dist: 220, label: "HEIRLOOM PEPPERS & SPICES", code: "DOMESTIC / IMPORT" },
            { angle: 95, dist: 200, label: "COLD-PRESSED OILS & LIPIDS", code: "DIRECT FARMS" },
            { angle: 155, dist: 220, label: "ORGANIC GRAINS & STABILIZERS", code: "CERTIFIED NON-GMO" },
            { angle: 215, dist: 190, label: "CUSTOM GLASS & CLOSURES", code: "SUSTAINABLE PACKAGING" },
            { angle: 280, dist: 230, label: "NATURAL AROMATICS & EXTRACTS", code: "TRACEABLE BATCH" },
            { angle: 335, dist: 190, label: "SPECIALTY ACIDS & EMULSIONS", code: "FOOD-GRADE TECHNICAL" }
          ].map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 400 + node.dist * Math.cos(rad);
            const y = 300 + node.dist * Math.sin(rad);
            return (
              <g key={i}>
                <line x1="400" y1="300" x2={x} y2={y} stroke="#6E5E4E" strokeWidth="1.2" strokeDasharray="3 4" />
                <circle cx={x} cy={y} r="8" fill="#C25737" stroke="#F5EDE0" strokeWidth="2" />
                <rect x={x - 85} y={y > 300 ? y + 14 : y - 36} width="170" height="26" rx="4" fill="#26211C" stroke="#4F4438" />
                <text x={x} y={y > 300 ? y + 27 : y - 23} fill="#F8F6F0" fontSize="9.5" fontWeight="600" textAnchor="middle">
                  {node.label}
                </text>
                <text x={x} y={y > 300 ? y + 36 : y - 14} fill="#C25737" fontSize="8" fontFamily="monospace" textAnchor="middle">
                  {node.code}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="absolute bottom-4 left-6 text-xs font-mono text-amber-200/70">
          GLOBAL SOURCING ARCHITECTURE // BULK SCALING ADVANTAGE FOR LOCAL PRODUCERS
        </div>
      </div>
    );
  }

  if (variant === 'foodsafety') {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#111915] ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#16241D] via-[#101915] to-[#0A100E]" />
        <svg viewBox="0 0 800 600" fill="none" className="w-full h-full object-cover select-none">
          {/* Subtle safety shield emblem geometry */}
          <path d="M 400 100 L 560 160 L 560 330 C 560 440 400 510 400 510 C 400 510 240 440 240 330 L 240 160 Z" 
                fill="#192A20" stroke="#3D664F" strokeWidth="3" />
          <path d="M 400 130 L 530 180 L 530 325 C 530 415 400 475 400 475 C 400 475 270 415 270 325 L 270 180 Z" 
                fill="#101F17" stroke="#528A6B" strokeWidth="1.5" strokeDasharray="4 4" />

          {/* GFSI Badge center typography */}
          <rect x="300" y="240" width="200" height="42" rx="6" fill="#C25737" />
          <text x="400" y="268" fill="#FFFFFF" fontSize="20" fontWeight="800" fontFamily="var(--font-display)" textAnchor="middle" letterSpacing="2">
            GFSI CERTIFIED
          </text>
          <text x="400" y="315" fill="#E3ECE6" fontSize="13" fontWeight="600" textAnchor="middle">
            GLOBAL FOOD SAFETY INITIATIVE
          </text>
          <text x="400" y="335" fill="#88A895" fontSize="11" fontFamily="monospace" textAnchor="middle">
            BENCHMARKED · RIGOROUS BATCH TRACEABILITY
          </text>

          {/* QA Verification Checkpoints */}
          <line x1="160" y1="200" x2="270" y2="200" stroke="#3D664F" strokeWidth="1.5" />
          <text x="140" y="195" fill="#E3ECE6" fontSize="11" textAnchor="end" fontWeight="500">Critical Control Points (CCP)</text>
          <text x="140" y="210" fill="#88A895" fontSize="9" textAnchor="end" fontFamily="monospace">VERIFIED 100%</text>

          <line x1="530" y1="200" x2="640" y2="200" stroke="#3D664F" strokeWidth="1.5" />
          <text x="660" y="195" fill="#E3ECE6" fontSize="11" textAnchor="start" fontWeight="500">Thermal Validation</text>
          <text x="660" y="210" fill="#88A895" fontSize="9" textAnchor="start" fontFamily="monospace">MICROBIAL KILL-STEP</text>

          <line x1="160" y1="360" x2="260" y2="360" stroke="#3D664F" strokeWidth="1.5" />
          <text x="140" y="355" fill="#E3ECE6" fontSize="11" textAnchor="end" fontWeight="500">Allergen Isolation</text>
          <text x="140" y="370" fill="#88A895" fontSize="9" textAnchor="end" fontFamily="monospace">ZERO-CROSS CONTAMINATION</text>

          <line x1="540" y1="360" x2="640" y2="360" stroke="#3D664F" strokeWidth="1.5" />
          <text x="660" y="355" fill="#E3ECE6" fontSize="11" textAnchor="start" fontWeight="500">Retail Ready</text>
          <text x="660" y="370" fill="#88A895" fontSize="9" textAnchor="start" fontFamily="monospace">AUDITED FOR NATIONAL CHAINS</text>
        </svg>
        <div className="absolute bottom-4 left-6 text-xs font-mono text-emerald-200/70">
          GFSI RECOGNIZED STANDARDS // UNCOMPROMISED QUALITY YOU CAN BUILD ON
        </div>
      </div>
    );
  }

  if (variant === 'machinery') {
    return (
      <div className={`relative w-full h-full overflow-hidden bg-[#15171B] ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1C2027] via-[#14161A] to-[#0D0F12]" />
        <svg viewBox="0 0 800 600" fill="none" className="w-full h-full object-cover select-none">
          {/* Engineering CAD grid */}
          <defs>
            <pattern id="cadGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#252B36" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="800" height="600" fill="url(#cadGrid)" />

          {/* Co-investment specialized machinery isometric schematic */}
          <rect x="220" y="160" width="360" height="280" rx="14" fill="#1C212B" stroke="#485368" strokeWidth="2" />
          
          {/* Custom high-shear rotor / thermal coil cutaway */}
          <circle cx="400" cy="300" r="90" fill="#141820" stroke="#C25737" strokeWidth="3" />
          <circle cx="400" cy="300" r="70" fill="none" stroke="#606E88" strokeWidth="2" strokeDasharray="8 6" />
          <circle cx="400" cy="300" r="30" fill="#C25737" />

          {/* Rotor blades */}
          <line x1="400" y1="210" x2="400" y2="390" stroke="#E28165" strokeWidth="6" strokeLinecap="round" />
          <line x1="310" y1="300" x2="490" y2="300" stroke="#E28165" strokeWidth="6" strokeLinecap="round" />

          {/* Flow ports & sanitary couplings */}
          <rect x="170" y="275" width="50" height="50" rx="6" fill="#2E3646" stroke="#5E6C86" />
          <rect x="580" y="275" width="50" height="50" rx="6" fill="#2E3646" stroke="#5E6C86" />
          
          {/* Dimension calipers and annotation */}
          <line x1="220" y1="130" x2="580" y2="130" stroke="#C25737" strokeWidth="1.5" />
          <line x1="220" y1="120" x2="220" y2="140" stroke="#C25737" strokeWidth="1.5" />
          <line x1="580" y1="120" x2="580" y2="140" stroke="#C25737" strokeWidth="1.5" />
          <text x="400" y="122" fill="#F8F6F0" fontSize="12" fontFamily="monospace" textAnchor="middle">
            CUSTOM PROCESS INTEGRATION: 3,500L/HR
          </text>

          <rect x="290" y="470" width="220" height="34" rx="4" fill="#222834" stroke="#485368" />
          <text x="400" y="492" fill="#C25737" fontSize="11" fontWeight="700" fontFamily="monospace" textAnchor="middle">
            CO-INVESTMENT FINANCED LINE
          </text>
        </svg>
        <div className="absolute bottom-4 left-6 text-xs font-mono text-neutral-400">
          SPECIALIZED TOOLING & EQUIPMENT SOURCING // CUSTOMIZED TO YOUR UNIQUE PROCESS
        </div>
      </div>
    );
  }

  // Variant: Partnership
  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#191614] ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#26201B] via-[#1A1613] to-[#100D0B]" />
      <svg viewBox="0 0 800 600" fill="none" className="w-full h-full object-cover select-none">
        <defs>
          <linearGradient id="warmGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C25737" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#4A5844" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#100D0B" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#warmGlow)" />
        
        {/* Converging vectors: Local culinary craft meets Industrial production */}
        <path d="M 100 450 Q 300 420 400 300 Q 500 180 700 150" fill="none" stroke="#C25737" strokeWidth="3" />
        <path d="M 100 480 Q 300 450 400 300 Q 500 150 700 120" fill="none" stroke="#52634C" strokeWidth="2" strokeDasharray="6 6" />

        <circle cx="400" cy="300" r="14" fill="#C25737" stroke="#FBF9F5" strokeWidth="3" />

        <text x="140" y="430" fill="#E5DFD5" fontSize="13" fontFamily="var(--font-display)" fontWeight="600">Local Food Producer</text>
        <text x="140" y="448" fill="#B3A899" fontSize="11">Vision · Recipe Craft · Brand Soul</text>

        <text x="660" y="190" fill="#E5DFD5" fontSize="13" fontFamily="var(--font-display)" fontWeight="600" textAnchor="end">National Distribution Scale</text>
        <text x="660" y="208" fill="#B3A899" fontSize="11" textAnchor="end">GFSI Compliance · Production Capacity · Market Share</text>
      </svg>
      <div className="absolute bottom-4 left-6 text-xs font-mono text-amber-200/70">
        SHARED VISION // LOCAL INGENUITY BACKED BY MANUFACTURING MUSCLE
      </div>
    </div>
  );
};
