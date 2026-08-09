import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillTree from "./components/SkillTree";
import QuestLog from "./components/QuestLog";
import BattleArena from "./components/BattleArena";
import ArcTimeline from "./components/ArcTimeline";
import TerminalContact from "./components/TerminalContact";
import Footer from "./components/Footer";
import { ScanLineOverlay, SectionDivider } from "./components/HudDecorations";
import "./index.css";

const App = () => {
  return (
    <div className="relative w-full overflow-x-clip bg-void min-h-screen">
      {/* Global Overlays */}
      <ScanLineOverlay />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <SectionDivider />
      <SkillTree />
      <SectionDivider />
      <QuestLog />
      <SectionDivider />
      <BattleArena />
      <SectionDivider />
      <ArcTimeline />
      <SectionDivider />
      <TerminalContact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;