import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HudCorners } from "./HudDecorations";
import { portfolioData } from "../data/portfolioData";

/* ─── ARC DEFINITIONS ───────────────────────── */
const arcs = [
  { id: "academy", num: "I", title: "The Academy Arc", subtitle: "Education & Foundation", color: "ether" },
  { id: "guild", num: "II", title: "The Guild Apprenticeship", subtitle: "Internships & Industry", color: "spirit" },
  { id: "conquests", num: "III", title: "Conquests & Certifications", subtitle: "Achievements & Learning", color: "quantum" },
];

const arcColorMap = {
  ether: {
    line: "from-ether/40 via-ether/20 to-ether/5",
    dot: "bg-ether shadow-[0_0_12px_rgba(0,240,255,0.6)]",
    dotRing: "border-ether/30",
    accent: "text-ether",
    badge: "bg-ether/10 border-ether/30 text-ether",
    border: "border-ether/20",
    bg: "bg-ether/5",
  },
  spirit: {
    line: "from-spirit/40 via-spirit/20 to-spirit/5",
    dot: "bg-spirit shadow-[0_0_12px_rgba(255,42,133,0.6)]",
    dotRing: "border-spirit/30",
    accent: "text-spirit",
    badge: "bg-spirit/10 border-spirit/30 text-spirit",
    border: "border-spirit/20",
    bg: "bg-spirit/5",
  },
  quantum: {
    line: "from-quantum/40 via-quantum/20 to-quantum/5",
    dot: "bg-quantum shadow-[0_0_12px_rgba(255,215,0,0.6)]",
    dotRing: "border-quantum/30",
    accent: "text-quantum",
    badge: "bg-quantum/10 border-quantum/30 text-quantum",
    border: "border-quantum/20",
    bg: "bg-quantum/5",
  },
};

const ArcTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeArc, setActiveArc] = useState("guild");

  /* ─── Build data for each arc ─── */
  const arcData = {
    academy: portfolioData.education.map((e) => ({
      title: e.degree,
      subtitle: e.inst,
      duration: e.years,
      location: e.loc,
      grade: e.grade,
      logo: e.logo,
      points: [],
    })),
    guild: portfolioData.experience.map((e) => ({
      title: e.role,
      subtitle: e.company,
      duration: e.duration,
      logo: e.logo,
      points: e.points,
    })),
    conquests: portfolioData.certifications.map((c) => ({
      title: c.title,
      subtitle: c.issuer,
      duration: c.date,
      logo: c.logo,
      link: c.link,
      points: [],
    })),
  };

  const currentArcDef = arcs.find((a) => a.id === activeArc);
  const arcColors = arcColorMap[currentArcDef.color];
  const entries = arcData[activeArc] || [];

  return (
    <section id="timeline" className="relative px-4 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-void/50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ether/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-[1000px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">STORY ARCS</div>
          <h2 className="section-title">
            The <span className="text-ether ether-glow-text">Timeline</span>
          </h2>
        </motion.div>

        {/* Arc Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-10"
        >
          {arcs.map((arc) => {
            const c = arcColorMap[arc.color];
            const isActive = activeArc === arc.id;
            return (
              <button
                key={arc.id}
                onClick={() => setActiveArc(arc.id)}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl border font-mono text-[10px] md:text-[11px] tracking-[1px] transition-all cursor-pointer ${
                  isActive
                    ? `${c.badge}`
                    : "border-glass-border bg-glass text-hud-text-dim hover:border-glass-border-bright"
                }`}
              >
                <span className={`font-display font-bold text-xs ${isActive ? c.accent : "text-hud-text-ghost"}`}>ARC {arc.num}</span>
                <span className="hidden sm:inline">— {arc.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Timeline Entries */}
        <motion.div
          key={activeArc}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Vertical Power Conduit Line */}
          <div className={`absolute left-5 md:left-7 top-0 bottom-0 w-px bg-gradient-to-b ${arcColors.line}`} />

          <div className="flex flex-col gap-6">
            {entries.map((entry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                className="relative flex gap-4 md:gap-6 pl-0"
              >
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0 w-10 md:w-14 flex justify-center pt-5">
                  <div className={`absolute w-3 h-3 rounded-full ${arcColors.dot} z-10`}>
                    <span className={`absolute -inset-1.5 rounded-full border ${arcColors.dotRing} animate-ping opacity-30`} />
                  </div>
                </div>

                {/* Entry Card */}
                <div className={`flex-1 glass-pane rounded-xl p-5 transition-all hover:border-opacity-30 hover:-translate-y-0.5 ${arcColors.border} border`}>
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    {/* Logo */}
                    <div className={`w-10 h-10 rounded-xl ${arcColors.bg} ${arcColors.border} border flex-shrink-0 flex items-center justify-center overflow-hidden`}>
                      {entry.logo && (typeof entry.logo === 'string' && entry.logo.startsWith('/')) ? (
                        <img src={entry.logo} alt={entry.subtitle} className="w-full h-full object-contain p-1" />
                      ) : (
                        <span className={`font-display text-sm font-bold ${arcColors.accent}`}>
                          {entry.subtitle?.charAt(0) || "?"}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-display text-sm font-bold text-hud-text leading-tight">{entry.title}</div>
                      <div className={`font-mono text-[11px] ${arcColors.accent} mt-0.5`}>{entry.subtitle}</div>
                    </div>
                  </div>

                  {/* Duration + Grade */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-hud-text-ghost tracking-wider flex items-center gap-1.5">
                      <i className="far fa-calendar-alt" />
                      {entry.duration}
                    </span>
                    {entry.location && (
                      <span className="font-mono text-[10px] text-hud-text-ghost tracking-wider flex items-center gap-1.5">
                        <i className="fas fa-map-marker-alt" />
                        {entry.location}
                      </span>
                    )}
                    {entry.grade && (
                      <span className={`font-mono text-[10px] ${arcColors.accent} px-2 py-0.5 rounded-md ${arcColors.bg} border ${arcColors.border}`}>
                        ⭐ {entry.grade}
                      </span>
                    )}
                    {entry.link && (
                      <a href={entry.link} target="_blank" rel="noreferrer" className={`font-mono text-[10px] ${arcColors.accent} hover:underline flex items-center gap-1`}>
                        <i className="fas fa-external-link-alt text-[8px]" /> Verify
                      </a>
                    )}
                  </div>

                  {/* Points */}
                  {entry.points && entry.points.length > 0 && (
                    <ul className="flex flex-col gap-1.5">
                      {entry.points.map((pt, i) => (
                        <li key={i} className="font-mono text-[11px] text-hud-text-dim leading-relaxed flex items-start gap-2">
                          <span className={`${arcColors.accent} text-[8px] mt-1.5 flex-shrink-0`}>▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArcTimeline;
