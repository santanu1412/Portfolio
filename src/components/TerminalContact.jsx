import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const TerminalContact = () => {
  const [lines, setLines] = useState([
    { type: "system", text: "╔══════════════════════════════════════════════╗" },
    { type: "system", text: "║  CYBER COMMS RELAY v2.4.0-EETHER             ║" },
    { type: "system", text: "║  Operator: Santanu Raj | Status: ONLINE      ║" },
    { type: "system", text: "╚══════════════════════════════════════════════╝" },
    { type: "system", text: "" },
    { type: "info", text: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cmds = portfolioData.terminalCommands;

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines = [
      ...lines,
      { type: "input", text: `> ${cmd}` },
    ];

    if (trimmed === "clear") {
      setLines([{ type: "info", text: "Terminal cleared." }]);
      return;
    }

    if (cmds[trimmed]) {
      cmds[trimmed].forEach((line) => {
        newLines.push({ type: "output", text: line });
      });
    } else if (trimmed === "") {
      // do nothing
    } else {
      newLines.push({ type: "error", text: `Command not found: "${cmd}". Type "help" for available commands.` });
    }

    setLines(newLines);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const lineColors = {
    system: "text-ether/60",
    info: "text-hud-text-dim",
    input: "text-spirit",
    output: "text-ether/80",
    error: "text-red-400",
  };

  return (
    <section id="terminal" ref={sectionRef} className="relative px-4 md:px-8 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-void-mid/50 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ether/10 to-transparent" />

      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">CYBER COMMS RELAY</div>
          <h2 className="section-title">
            <span className="text-ether ether-glow-text">Terminal</span> &amp; Contact
          </h2>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-pane-dark rounded-xl overflow-hidden border border-ether/15"
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-glass-border bg-void-deep/50">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-[10px] text-hud-text-ghost tracking-wider ml-2">santanu@cyber-relay:~</span>
            </div>
            <span className="font-mono text-[9px] text-hud-text-ghost tracking-wider">v2.4.0-EETHER</span>
          </div>

          {/* Terminal Output */}
          <div
            ref={scrollRef}
            className="terminal-scroll h-[320px] md:h-[380px] overflow-y-auto p-4 font-mono text-xs leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div key={i} className={`${lineColors[line.type] || "text-hud-text-dim"} ${line.text === "" ? "h-3" : ""}`}>
                {line.text}
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center mt-1">
              <span className="text-spirit mr-2 flex-shrink-0">&gt;_</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="terminal-input flex-1 bg-transparent text-ether font-mono text-xs border-none outline-none"
                placeholder="type a command..."
                autoComplete="off"
                spellCheck="false"
              />
            </form>
          </div>
        </motion.div>

        {/* Quick Command Hints */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mt-4 justify-center"
        >
          {["help", "about", "contact", "skills", "socials", "sudo hire"].map((cmd) => (
            <button
              key={cmd}
              onClick={() => { handleCommand(cmd); }}
              className="px-3 py-1 rounded-lg border border-glass-border bg-glass font-mono text-[10px] text-hud-text-dim tracking-wider hover:border-ether/30 hover:text-ether transition-all cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </motion.div>

        {/* Social Links — Encrypted Comm Channels */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-3 mt-8 justify-center"
        >
          {[
            { icon: "fab fa-github", link: portfolioData.personal.github, label: "GitHub" },
            { icon: "fab fa-linkedin-in", link: portfolioData.personal.linkedin, label: "LinkedIn" },
            { icon: "fas fa-envelope", link: `mailto:${portfolioData.personal.email}`, label: "Email" },
            { icon: "fas fa-globe", link: portfolioData.personal.portfolio, label: "Portfolio" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              className="btn-shine group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-glass-border bg-glass font-mono text-[10px] tracking-wider text-hud-text-dim hover:border-ether/30 hover:text-ether hover:bg-ether/5 transition-all"
            >
              <i className={`${s.icon} text-sm group-hover:text-ether transition-colors`} />
              <span className="hidden sm:inline">{s.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalContact;
