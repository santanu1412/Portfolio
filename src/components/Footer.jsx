import React from "react";
import { Link } from "react-scroll";
import { ChevronUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="relative px-4 md:px-8 pt-12 pb-6 border-t border-glass-border bg-void-deep/80 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void-mid/30 to-void-deep pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg border border-ether/30 flex items-center justify-center bg-ether/5">
                <span className="font-display font-bold text-ether text-xs">SR</span>
              </div>
              <span className="font-display text-lg font-bold text-hud-text">
                &lt;{portfolioData.personal.name}/&gt;
              </span>
            </div>
            <p className="font-mono text-[10px] text-hud-text-ghost tracking-wider text-center md:text-left max-w-[280px]">
              Building things that matter, one line at a time. Open to collaborations and opportunities.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2">
            {[
              { icon: "fab fa-github", link: portfolioData.personal.github },
              { icon: "fab fa-linkedin-in", link: portfolioData.personal.linkedin },
              { icon: "fas fa-envelope", link: `mailto:${portfolioData.personal.email}` },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl border border-glass-border bg-glass flex items-center justify-center text-hud-text-dim text-sm transition-all hover:border-ether/30 hover:text-ether hover:bg-ether/5 hover:-translate-y-1"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-glass-border to-transparent mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono text-[10px] text-hud-text-ghost tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-hud-text-ghost tracking-wider">
              BUILD <span className="text-ether/50">v2.4.0-EETHER</span>
            </span>

            {/* Back to Top — Warp Thruster */}
            <Link
              to="hero"
              smooth={true}
              duration={800}
              className="btn-shine group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-glass-border bg-glass font-mono text-[10px] tracking-wider text-hud-text-dim hover:border-ether/30 hover:text-ether hover:bg-ether/5 transition-all cursor-pointer"
            >
              <ChevronUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
              <span>WARP</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
