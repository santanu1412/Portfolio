import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";
import { HudCorners, StatusDot } from "./HudDecorations";
import { portfolioData } from "../data/portfolioData";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [statIdx, setStatIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const d = portfolioData.personal;

  // Typing effect for stats line
  const statLines = [
    `Level ${d.level} | Class: ${d.class} | Guild: ${d.guild}`,
    `Rank: S | Status: ONLINE | Mana: ${d.mana}%`,
    `Specialization: AI/ML • Full-Stack • DSA`,
  ];

  useEffect(() => {
    let charIdx = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      const current = statLines[statIdx];
      if (!isDeleting) {
        setTypedText(current.substring(0, charIdx + 1));
        charIdx++;
        if (charIdx >= current.length) {
          timer = setTimeout(() => { isDeleting = true; type(); }, 2000);
          return;
        }
        timer = setTimeout(type, 50);
      } else {
        setTypedText(current.substring(0, charIdx - 1));
        charIdx--;
        if (charIdx <= 0) {
          isDeleting = false;
          setStatIdx((prev) => (prev + 1) % statLines.length);
          timer = setTimeout(type, 300);
          return;
        }
        timer = setTimeout(type, 30);
      }
    };

    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, [statIdx]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 pb-12 px-4 md:px-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-void-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-ether/[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-spirit/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5 md:gap-6"
        >
          {/* Status Badge */}
          <div className="flex items-center gap-2 font-mono text-[10px] md:text-[11px] tracking-[2px] text-hud-text-ghost uppercase">
            <StatusDot />
            <span>OPERATOR PROFILE ACTIVE</span>
          </div>

          {/* Glitch Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight">
            <span className="glitch-text text-hud-text" data-text={d.title}>
              {d.title}
            </span>
          </h1>

          {/* Name */}
          <div className="flex flex-col gap-1">
            <h2 className="font-display text-xl md:text-2xl font-bold text-ether ether-glow-text">{d.name}</h2>
            <p className="font-mono text-xs text-hud-text-dim">B.Tech Computational Science — Lovely Professional University</p>
          </div>

          {/* Specialization Badges */}
          <div className="flex flex-wrap gap-2">
            {d.specializations.map((spec) => (
              <span
                key={spec}
                className="px-3 py-1 rounded-md border border-ether/20 bg-ether/5 font-mono text-[10px] md:text-[11px] tracking-[1px] text-ether/80 hover:bg-ether/10 hover:border-ether/40 transition-all"
              >
                {spec}
              </span>
            ))}
          </div>

          {/* Terminal Typing Line */}
          <div className="glass-pane rounded-lg px-4 py-3 font-mono text-xs md:text-sm">
            <span className="text-ether/50 mr-2">&gt;_</span>
            <span className="text-ether">{typedText}</span>
            <span className={`inline-block w-[2px] h-[1em] bg-ether ml-0.5 align-text-bottom ${showCursor ? "opacity-100" : "opacity-0"}`} />
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              to="quests"
              smooth={true}
              duration={600}
              offset={-64}
              className="btn-shine group flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-ether/20 to-ether/10 border border-ether/40 font-display text-sm font-bold tracking-wider text-ether cursor-pointer hover:shadow-ether hover:border-ether/60 transition-all"
            >
              <i className="fas fa-scroll text-xs" />
              EXPLORE QUESTS
            </Link>
            <Link
              to="terminal"
              smooth={true}
              duration={600}
              offset={-64}
              className="btn-shine group flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-spirit/30 bg-spirit/5 font-display text-sm font-bold tracking-wider text-spirit/80 cursor-pointer hover:bg-spirit/10 hover:border-spirit/50 hover:shadow-spirit transition-all"
            >
              <i className="fas fa-terminal text-xs" />
              INITIATE CONTACT
            </Link>
          </div>
        </motion.div>

        {/* RIGHT COLUMN — Holographic Character Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px]">
            {/* Outer Reticle Ring */}
            <div className="absolute inset-0 rounded-full border border-ether/10 animate-reticle-spin">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-ether rounded-full shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-spirit rounded-full shadow-[0_0_6px_rgba(255,42,133,0.6)]" />
            </div>

            {/* Inner Reticle Ring */}
            <div className="absolute inset-6 rounded-full border border-spirit/8 animate-reticle-spin-reverse">
              <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-ether/60 rounded-full" />
            </div>

            {/* Avatar Container */}
            <HudCorners color="ether" className="absolute inset-10 sm:inset-12">
              <div className="w-full h-full rounded-2xl overflow-hidden border border-ether/20 bg-void-mid shadow-ether">
                <img
                  src={d.heroImage}
                  alt={d.name}
                  className="w-full h-full object-cover object-center"
                />
                {/* Scan overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-ether/5 via-transparent to-ether/5 pointer-events-none" />
              </div>
            </HudCorners>

            {/* Corner Data Feeds */}
            <div className="absolute top-2 right-2 font-mono text-[8px] md:text-[9px] text-ether/40 text-right leading-relaxed">
              <div>FPS: <span className="text-ether/70">60</span></div>
              <div>PING: <span className="text-ether/70">12ms</span></div>
            </div>
            <div className="absolute bottom-2 left-2 font-mono text-[8px] md:text-[9px] text-spirit/40 leading-relaxed">
              <div>SYS: <span className="text-spirit/70">NOMINAL</span></div>
              <div>PWR: <span className="text-spirit/70">100%</span></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border border-ether/15 rounded-md animate-float opacity-60" />
            <div className="absolute -bottom-6 -right-6 w-6 h-6 border border-spirit/15 rounded-full animate-float-slow opacity-40" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[2px] text-hud-text-ghost uppercase">Scroll</span>
        <ChevronDown size={16} className="text-ether/40 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
