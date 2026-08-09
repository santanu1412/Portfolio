import React from "react";

/* ═══════════════════════════════════════
   HUD Corner Brackets — wraps any card
   ═══════════════════════════════════════ */
export const HudCorners = ({ children, className = "", color = "ether" }) => {
  const borderColor = {
    ether: "border-ether/40",
    spirit: "border-spirit/40",
    quantum: "border-quantum/40",
  }[color] || "border-ether/40";

  return (
    <div className={`relative ${className}`}>
      {/* top-left */}
      <span className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${borderColor} pointer-events-none`} />
      {/* top-right */}
      <span className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${borderColor} pointer-events-none`} />
      {/* bottom-left */}
      <span className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${borderColor} pointer-events-none`} />
      {/* bottom-right */}
      <span className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${borderColor} pointer-events-none`} />
      {children}
    </div>
  );
};

/* ═══════════════════════════════════════
   Section Divider — glowing ether line
   ═══════════════════════════════════════ */
export const SectionDivider = () => (
  <div className="w-full flex items-center justify-center py-6">
    <div className="flex items-center gap-3 w-full max-w-[600px]">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ether/30 to-transparent" />
      <span className="text-ether/40 font-mono text-[10px] tracking-[4px]">◆◆◆</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ether/30 to-transparent" />
    </div>
  </div>
);

/* ═══════════════════════════════════════
   Scan Line Overlay — subtle animated line
   ═══════════════════════════════════════ */
export const ScanLineOverlay = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden opacity-[0.03]">
    <div className="absolute left-0 right-0 h-[2px] bg-ether animate-scan-line" />
  </div>
);

/* ═══════════════════════════════════════
   Energy Circuit Background SVG
   ═══════════════════════════════════════ */
export const EnergyCircuits = ({ className = "" }) => (
  <svg
    className={`absolute pointer-events-none opacity-[0.04] ${className}`}
    width="100%"
    height="100%"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 300 H200 L230 270 H400 L430 300 H600 L630 270 H800" stroke="#00F0FF" strokeWidth="1" />
    <path d="M0 350 H150 L180 380 H350 L380 350 H550 L580 380 H800" stroke="#00F0FF" strokeWidth="0.5" />
    <path d="M400 0 V150 L430 180 V300 L400 330 V600" stroke="#00F0FF" strokeWidth="0.5" />
    <circle cx="230" cy="270" r="3" fill="#00F0FF" opacity="0.6" />
    <circle cx="430" cy="300" r="3" fill="#00F0FF" opacity="0.6" />
    <circle cx="180" cy="380" r="3" fill="#00F0FF" opacity="0.6" />
    <circle cx="400" cy="330" r="3" fill="#00F0FF" opacity="0.6" />
  </svg>
);

/* ═══════════════════════════════════════
   Rank Badge Component
   ═══════════════════════════════════════ */
export const RankBadge = ({ rank, size = "md" }) => {
  const colors = {
    S: "bg-quantum/20 text-quantum border-quantum/40 shadow-quantum",
    A: "bg-spirit/20 text-spirit border-spirit/40 shadow-spirit",
    B: "bg-ether/20 text-ether border-ether/40 shadow-ether-sm",
  };
  const sizes = {
    sm: "w-7 h-7 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-12 h-12 text-lg",
  };

  return (
    <div className={`${sizes[size]} ${colors[rank] || colors.B} rounded-lg border font-display font-bold flex items-center justify-center`}>
      {rank}
    </div>
  );
};

/* ═══════════════════════════════════════
   Glass Card wrapper
   ═══════════════════════════════════════ */
export const GlassCard = ({ children, className = "", hover = true }) => (
  <div className={`glass-pane rounded-xl transition-all duration-300 ${hover ? "hover:border-ether/30 hover:shadow-ether-sm hover:-translate-y-1" : ""} ${className}`}>
    {children}
  </div>
);

/* ═══════════════════════════════════════
   Status Dot — pulsing online indicator
   ═══════════════════════════════════════ */
export const StatusDot = ({ color = "ether" }) => {
  const c = color === "ether" ? "bg-ether shadow-[0_0_8px_rgba(0,240,255,0.6)]" : "bg-spirit shadow-[0_0_8px_rgba(255,42,133,0.6)]";
  return (
    <span className="relative flex h-2 w-2">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${c}`} />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${c}`} />
    </span>
  );
};
