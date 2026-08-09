import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HudCorners, GlassCard } from "./HudDecorations";
import { portfolioData } from "../data/portfolioData";

const domainStyles = {
  lightning: {
    accent: "text-ether",
    border: "border-ether/30",
    bg: "bg-ether/5",
    hoverBg: "hover:bg-ether/10",
    barClass: "skill-bar-fill-ether",
    glowClass: "shadow-ether-sm",
    tabActive: "bg-ether/15 border-ether/50 text-ether",
  },
  iron: {
    accent: "text-spirit",
    border: "border-spirit/30",
    bg: "bg-spirit/5",
    hoverBg: "hover:bg-spirit/10",
    barClass: "skill-bar-fill-spirit",
    glowClass: "shadow-spirit",
    tabActive: "bg-spirit/15 border-spirit/50 text-spirit",
  },
  glass: {
    accent: "text-quantum",
    border: "border-quantum/30",
    bg: "bg-quantum/5",
    hoverBg: "hover:bg-quantum/10",
    barClass: "skill-bar-fill-quantum",
    glowClass: "shadow-quantum",
    tabActive: "bg-quantum/15 border-quantum/50 text-quantum",
  },
  shadow: {
    accent: "text-ether",
    border: "border-ether/30",
    bg: "bg-ether/5",
    hoverBg: "hover:bg-ether/10",
    barClass: "skill-bar-fill-ether",
    glowClass: "shadow-ether-sm",
    tabActive: "bg-ether/15 border-ether/50 text-ether",
  },
};

const SkillTree = () => {
  const [activeDomain, setActiveDomain] = useState("lightning");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const domains = portfolioData.skills.domains;
  const active = domains.find((d) => d.id === activeDomain);
  const style = domainStyles[activeDomain];

  return (
    <section id="skills" className="relative px-4 md:px-8 py-20 md:py-28 overflow-hidden">
      {/* Subtle BG */}
      <div className="absolute inset-0 bg-void-mid/50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ether/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">CHARACTER STATS</div>
          <h2 className="section-title">
            Skill <span className="text-ether ether-glow-text">Tree</span> &amp; Tech Stack
          </h2>
        </motion.div>

        {/* Domain Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-8"
        >
          {domains.map((domain) => {
            const ds = domainStyles[domain.id];
            const isActive = activeDomain === domain.id;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveDomain(domain.id)}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl border font-mono text-[11px] md:text-xs tracking-[1px] transition-all cursor-pointer ${
                  isActive
                    ? ds.tabActive
                    : "border-glass-border bg-glass text-hud-text-dim hover:border-glass-border-bright"
                }`}
              >
                <span className="text-base">{domain.emoji}</span>
                <span className="uppercase">{domain.name}</span>
                <span className="hidden sm:inline text-hud-text-ghost">— {domain.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          key={activeDomain}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {active.skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="relative"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <HudCorners
                color={active.color === "ether" ? "ether" : active.color === "spirit" ? "spirit" : "quantum"}
                className={`glass-pane rounded-xl p-5 transition-all duration-300 hover:border-opacity-40 ${style.hoverBg} ${
                  hoveredSkill === skill.name ? style.glowClass : ""
                }`}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg ${style.bg} ${style.border} border flex items-center justify-center`}>
                      <i className={`${skill.icon} ${style.accent} text-sm`} />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-hud-text">{skill.name}</div>
                      <div className="font-mono text-[10px] text-hud-text-ghost tracking-wide">LVL {skill.level}</div>
                    </div>
                  </div>
                  <div className={`font-mono text-xs font-bold ${style.accent}`}>{skill.level}%</div>
                </div>

                {/* EXP Bar */}
                <div className="skill-bar-track h-2 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${style.barClass}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                  />
                </div>

                {/* Combo Tooltip */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 px-3 py-2 rounded-lg bg-void-deep border border-glass-border font-mono text-[10px] text-ether/70 flex items-center gap-2"
                  >
                    <span className="text-quantum text-[10px]">⚔ COMBO:</span>
                    <span>{skill.combo}</span>
                  </motion.div>
                )}
              </HudCorners>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillTree;
