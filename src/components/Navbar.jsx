import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Download } from "lucide-react";
import { StatusDot } from "./HudDecorations";
import { portfolioData } from "../data/portfolioData";

const navLinks = [
  { num: "01", label: "OVERVIEW", to: "hero" },
  { num: "02", label: "SKILLS", to: "skills" },
  { num: "03", label: "QUESTS", to: "quests" },
  { num: "04", label: "ARENA", to: "arena" },
  { num: "05", label: "TIMELINE", to: "timeline" },
  { num: "06", label: "TERMINAL", to: "terminal" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] glass-pane-dark border-b border-glass-border px-4 md:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-14 md:h-16">

          {/* LEFT — Logo + Status */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            {/* Logo Emblem */}
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden border border-ether/30 flex items-center justify-center bg-ether/5">
              <img src="/images/sr-logo.png" alt="SR Logo" className="w-full h-full object-cover" />
              <span className="absolute -top-px -right-px w-2 h-2 rounded-full z-10 bg-ether shadow-[0_0_6px_rgba(0,240,255,0.8)]" />
            </div>

            {/* Status */}
            <div className="hidden md:flex items-center gap-2 font-mono text-[10px] tracking-[1.5px] text-hud-text-dim uppercase">
              <StatusDot />
              <span>ONLINE</span>
              <span className="text-hud-text-ghost">|</span>
              <span className="text-hud-text-ghost">SYSTEM NOMINAL</span>
            </div>
          </div>

          {/* CENTER — Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={600}
                offset={-64}
                className="group flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer transition-all hover:bg-ether/5"
              >
                <span className="font-mono text-[10px] text-ether/50 group-hover:text-ether transition-colors">{link.num}.</span>
                <span className="font-mono text-[11px] tracking-[1px] text-hud-text-dim group-hover:text-hud-text transition-colors">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* RIGHT — Mana + Resume + Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            {/* Mana Bar */}
            <div className="hidden md:flex items-center gap-2">
              <span className="font-mono text-[10px] text-spirit/70 tracking-wider">MANA</span>
              <div className="w-16 h-1.5 rounded-full bg-spirit/10 border border-spirit/20 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-spirit/80 to-spirit animate-pulse-soft" style={{ width: "100%" }} />
              </div>
              <span className="font-mono text-[10px] text-spirit/60">100%</span>
            </div>

            {/* Resume Download */}
            <a
              href={portfolioData.personal.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="btn-shine flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-lg border border-ether/30 bg-ether/5 font-mono text-[10px] md:text-[11px] tracking-[1px] text-ether hover:bg-ether/10 hover:border-ether/50 hover:shadow-ether-sm transition-all"
            >
              <Download size={12} />
              <span className="hidden sm:inline">EXTRACT DATA</span>
              <span className="sm:hidden">RESUME</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-9 h-9 rounded-lg border border-glass-border flex items-center justify-center text-hud-text-dim hover:text-ether hover:border-ether/30 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[999] bg-void/95 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center gap-6 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close X */}
        <button
          className="absolute top-4 right-4 w-10 h-10 rounded-lg border border-glass-border flex items-center justify-center text-hud-text-dim hover:text-ether transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          <X size={20} />
        </button>

        {/* Mobile HUD Header */}
        <div className="flex items-center gap-2 font-mono text-[10px] tracking-[2px] text-hud-text-ghost uppercase mb-4">
          <StatusDot />
          <span>NAVIGATION MENU</span>
        </div>

        {navLinks.map((link, i) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-64}
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-3 cursor-pointer"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <span className="font-mono text-xs text-ether/40 group-hover:text-ether transition-colors">{link.num}.</span>
            <span className="font-display text-xl tracking-[3px] text-hud-text group-hover:text-ether transition-colors">{link.label}</span>
          </Link>
        ))}

        {/* Mobile Resume */}
        <a
          href={portfolioData.personal.resumeLink}
          target="_blank"
          rel="noreferrer"
          className="mt-6 flex items-center gap-2 px-5 py-2.5 rounded-lg border border-ether/30 bg-ether/5 font-mono text-xs tracking-[1px] text-ether hover:bg-ether/10 transition-all"
        >
          <Download size={14} />
          EXTRACT DATA ARTIFACT
        </a>
      </div>
    </>
  );
};

export default Navbar;
