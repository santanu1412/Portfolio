import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { RankBadge, GlassCard, HudCorners } from "./HudDecorations";
import { portfolioData } from "../data/portfolioData";

const categoryFilters = [
  { key: "all", label: "ALL QUESTS" },
  { key: "web", label: "WEB DEV" },
  { key: "backend", label: "SYSTEMS" },
  { key: "ai", label: "AI/ML" },
];

const QuestLog = () => {
  const [filter, setFilter] = useState("all");
  const [selectedQuest, setSelectedQuest] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = filter === "all"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.cat === filter);

  return (
    <section id="quests" className="relative px-4 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-void/50 pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">RAID ARCHIVES</div>
          <h2 className="section-title">
            Quest <span className="text-ether ether-glow-text">Log</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categoryFilters.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-3 md:px-4 py-2 rounded-xl border font-mono text-[10px] md:text-[11px] tracking-[1px] transition-all cursor-pointer ${
                filter === cat.key
                  ? "bg-ether/15 border-ether/50 text-ether"
                  : "border-glass-border bg-glass text-hud-text-dim hover:border-glass-border-bright"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Quest Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((quest, idx) => (
              <motion.div
                key={quest.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <HudCorners
                  color={quest.rank === "S" ? "quantum" : quest.rank === "A" ? "spirit" : "ether"}
                  className="glass-pane rounded-xl overflow-hidden transition-all duration-300 hover:border-ether/30 hover:shadow-ether-sm hover:-translate-y-1 cursor-pointer group"
                >
                  {/* Quest Image */}
                  <div className="relative h-40 sm:h-44 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-void-light bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: quest.image ? `url(${quest.image})` : "none" }}
                    >
                      {!quest.image && (
                        <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">📜</div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

                    {/* Rank Badge */}
                    <div className="absolute top-3 right-3">
                      <RankBadge rank={quest.rank} />
                    </div>

                    {/* Difficulty */}
                    <div className="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-quantum/80 bg-quantum/10 border border-quantum/20 px-2 py-0.5 rounded-md">
                      {quest.difficulty}
                    </div>
                  </div>

                  {/* Quest Info */}
                  <div className="p-5">
                    <h3 className="font-display text-base md:text-lg font-bold text-hud-text mb-2 leading-tight">{quest.name}</h3>
                    <p className="font-mono text-xs text-hud-text-dim leading-relaxed mb-4 line-clamp-2">{quest.desc}</p>

                    {/* Reward Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {quest.rewards.map((r) => (
                        <span key={r} className="px-2 py-0.5 rounded-md bg-quantum/5 border border-quantum/15 font-mono text-[9px] md:text-[10px] text-quantum/70 tracking-wide">
                          {r}
                        </span>
                      ))}
                    </div>

                    {/* Tech Runes */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {quest.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-ether/5 border border-ether/15 font-mono text-[9px] md:text-[10px] text-ether/60 tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-3 pt-3 border-t border-glass-border">
                      {quest.github && (
                        <a
                          href={quest.github}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-shine flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-glass-border font-mono text-[10px] tracking-wider text-hud-text-dim hover:text-ether hover:border-ether/30 transition-all"
                        >
                          <Github size={12} />
                          CODE
                        </a>
                      )}
                      {quest.demo && (
                        <a
                          href={quest.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-shine flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-glass-border font-mono text-[10px] tracking-wider text-hud-text-dim hover:text-spirit hover:border-spirit/30 transition-all"
                        >
                          <ExternalLink size={12} />
                          LIVE DEMO
                        </a>
                      )}
                    </div>
                  </div>
                </HudCorners>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default QuestLog;
