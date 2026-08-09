import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HudCorners, GlassCard } from "./HudDecorations";
import { portfolioData } from "../data/portfolioData";

const BattleArena = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { platforms, trophies } = portfolioData.competitive;

  const colorMap = {
    quantum: {
      accent: "text-quantum",
      border: "border-quantum/30",
      bg: "bg-quantum/5",
      barClass: "skill-bar-fill-quantum",
      glow: "shadow-quantum",
      badge: "bg-quantum/10 border-quantum/30 text-quantum",
    },
    ether: {
      accent: "text-ether",
      border: "border-ether/30",
      bg: "bg-ether/5",
      barClass: "skill-bar-fill-ether",
      glow: "shadow-ether-sm",
      badge: "bg-ether/10 border-ether/30 text-ether",
    },
    spirit: {
      accent: "text-spirit",
      border: "border-spirit/30",
      bg: "bg-spirit/5",
      barClass: "skill-bar-fill-spirit",
      glow: "shadow-spirit",
      badge: "bg-spirit/10 border-spirit/30 text-spirit",
    },
  };

  return (
    <section id="arena" className="relative px-4 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-void-mid/50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-spirit/10 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">COMBAT RECORD</div>
          <h2 className="section-title">
            Battle <span className="text-spirit spirit-glow-text">Arena</span> Dojo
          </h2>
        </motion.div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {platforms.map((platform, idx) => {
            const c = colorMap[platform.color] || colorMap.ether;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
              >
                <HudCorners
                  color={platform.color}
                  className={`glass-pane rounded-xl p-6 transition-all hover:${c.glow} hover:-translate-y-1`}
                >
                  {/* Platform Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center`}>
                      <i className={`${platform.icon} ${c.accent} text-lg`} />
                    </div>
                    <div>
                      <div className="font-display text-base font-bold text-hud-text">{platform.name}</div>
                      <div className={`font-mono text-[10px] ${c.accent} tracking-wider`}>{platform.badge}</div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {platform.stats.map((stat) => (
                      <div key={stat.label} className="bg-void-deep/50 rounded-lg p-3 border border-glass-border">
                        <div className={`font-display text-xl font-bold ${c.accent}`}>{stat.value}</div>
                        <div className="font-mono text-[9px] text-hud-text-ghost tracking-wider uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </HudCorners>
              </motion.div>
            );
          })}
        </div>

        {/* Trophy Case */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🏆</span>
            <h3 className="font-display text-lg font-bold text-quantum quantum-glow-text">Trophy Case</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trophies.map((trophy, idx) => {
              const c = colorMap[trophy.color] || colorMap.ether;
              return (
                <motion.div
                  key={trophy.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                >
                  <div className={`glass-pane rounded-xl p-5 transition-all hover:-translate-y-1 hover:border-opacity-40 group`}>
                    <div className="flex items-start gap-3">
                      <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {trophy.icon}
                      </div>
                      <div>
                        <div className="font-display text-sm font-bold text-hud-text mb-1 leading-tight">{trophy.title}</div>
                        <div className="font-mono text-[10px] text-hud-text-dim leading-relaxed">{trophy.desc}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BattleArena;
