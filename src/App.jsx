import React, { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { 
  Github, Linkedin, Mail, ChevronDown, ExternalLink, 
  Code2, Cpu, Terminal, Send, Download, Menu, X, Layers 
} from "lucide-react";
import { portfolioData } from "./data/portfolioData";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mousedown", () => setClicked(true));
      document.addEventListener("mouseup", () => setClicked(false));
    };
    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
    };
    const mMove = (el) => {
      setPosition({ x: el.clientX, y: el.clientY });
    };
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <>
      <div 
        className={`fixed z-[9999] pointer-events-none transition-transform duration-100 hidden md:block
          ${clicked ? "scale-75" : "scale-100"}`}
        style={{ left: position.x, top: position.y }}
      >
        <div className="w-8 h-8 -ml-4 -mt-4 border-2 border-cyber-primary rounded-full animate-pulse" />
        <div className="w-2 h-2 -ml-1 -mt-1 bg-cyber-secondary rounded-full absolute top-1/2 left-1/2" />
      </div>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-cyber-black/90 backdrop-blur-md border-b border-cyber-primary/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-cyber text-2xl font-bold text-cyber-primary tracking-widest cursor-pointer">
          SR<span className="text-cyber-secondary">.AI</span>
        </div>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-cyber-primary border-b-2 border-cyber-primary"
              className="text-cyber-text hover:text-cyber-primary font-mono text-sm cursor-pointer transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="md:hidden text-cyber-primary cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-cyber-black/95 border-b border-cyber-primary/20"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-cyber-text hover:text-cyber-primary font-mono text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, icon: Icon }) => (
  <div className="mb-16 text-center">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary font-mono text-sm mb-4">
      <Icon size={14} />
      <span>{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-cyber font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-cyber-dim">
      {title}
    </h2>
    <div className="w-24 h-1 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto mt-4 rounded-full" />
  </div>
);

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          particles: {
            color: { value: "#00f3ff" },
            links: { color: "#7000ff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1 },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
        }}
        className="absolute inset-0 z-0"
      />
      <div className="z-10 text-center px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block relative"
        >
          <div className="absolute inset-0 bg-cyber-primary blur-[40px] opacity-20" />
          <h1 className="relative text-5xl md:text-8xl font-cyber font-bold tracking-tighter mb-2">
            {portfolioData.personal.name.split(" ")[0]} 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary"> {portfolioData.personal.name.split(" ")[1]}</span>
          </h1>
        </motion.div>
        <div className="h-16 md:h-20 text-xl md:text-3xl font-mono text-cyber-text/80 mb-8">
          <TypeAnimation
            sequence={[
              "System.init(GenAI_Architect)", 1000,
              "System.init(MERN_Stack_Dev)", 1000,
              "System.init(RAG_Specialist)", 1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="border-r-2 border-cyber-primary pr-2"
          />
        </div>
        <p className="text-cyber-dim max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          {portfolioData.personal.summary}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-4 bg-cyber-primary text-cyber-black font-bold rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(0,243,255,0.4)] flex items-center justify-center gap-2">
            <Code2 size={20} /> View Projects
          </a>
          <a href="/resume.pdf" target="_blank" className="px-8 py-4 border border-cyber-primary text-cyber-primary font-bold rounded hover:bg-cyber-primary/10 transition-all flex items-center justify-center gap-2">
            <Download size={20} /> Resume_v2.0
          </a>
        </div>
      </div>
      <Link to="about" smooth={true} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyber-primary animate-bounce cursor-pointer">
        <ChevronDown size={32} />
      </Link>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 relative bg-cyber-dark/50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading title="About Me" subtitle="PROFILE_DATA" icon={Terminal} />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary to-cyber-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity" />
          <div className="relative glass-panel rounded-2xl p-2 border border-cyber-primary/30">
            <div className="aspect-square bg-cyber-black/50 rounded-xl overflow-hidden flex items-center justify-center text-cyber-dim">
              {/* FIXED IMAGE TAG HERE */}
              <img 
                 src={portfolioData.personal.heroImage} 
                 alt={portfolioData.personal.name}
                 className="w-full h-full object-cover"
                 onError={(e) => { e.target.style.display = "none"; }} 
               />
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-white">
            Architecting the Future of <span className="text-cyber-primary">AI & Web</span>
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            I specialize in building production-ready, AI-native applications. Currently, I am a Project Lead at <span className="text-cyber-secondary font-bold">Careerflow.ai</span> and have previously engineered automated ML pipelines at Bluestock™.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            My core strength lies in bridging the gap between traditional full-stack architecture (MERN) and modern Generative AI integration (RAG, LLMs).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-cyber-black/50 rounded border border-white/5">
              <div className="text-3xl font-cyber font-bold text-cyber-primary mb-1">2+</div>
              <div className="text-xs font-mono text-gray-500">YEARS EXPERIENCE</div>
            </div>
            <div className="p-4 bg-cyber-black/50 rounded border border-white/5">
              <div className="text-3xl font-cyber font-bold text-cyber-secondary mb-1">10+</div>
              <div className="text-xs font-mono text-gray-500">PROJECTS COMPLETED</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 relative bg-cyber-black bg-cyber-grid bg-fixed">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <SectionHeading title="Tech Arsenal" subtitle="CAPABILITIES" icon={Cpu} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioData.skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="glass-panel p-6 rounded-xl border-t-2 border-t-cyber-primary/0 hover:border-t-cyber-primary transition-all group"
          >
            <skill.icon className="w-10 h-10 text-cyber-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-4 font-mono">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span key={i} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-gray-300">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-24 bg-cyber-dark/50">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeading title="Experience" subtitle="CAREER_LOG" icon={Layers} />
      <div className="space-y-12 relative border-l-2 border-white/10 ml-3 md:ml-0 md:pl-0">
        {portfolioData.experience.map((job, idx) => (
          <motion.div 
            key={job.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-8 md:pl-0"
          >
            <div className={`hidden md:block absolute top-0 w-1/2 ${idx % 2 === 0 ? "left-0 pr-12 text-right" : "right-0 pl-12"}`}>
               <div className="font-cyber text-xl font-bold text-white">{job.company}</div>
               <div className="text-cyber-primary font-mono text-sm mb-2">{job.date}</div>
            </div>
            <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] top-2 w-3 h-3 bg-cyber-black border-2 border-cyber-secondary rounded-full z-10" />
            <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12 md:text-right"}`}>
              <div className="md:hidden">
                <div className="font-cyber text-xl font-bold text-white">{job.company}</div>
                <div className="text-cyber-primary font-mono text-sm mb-2">{job.date}</div>
              </div>
              <div className="glass-panel p-6 rounded-xl hover:border-cyber-primary/50 transition-colors">
                <h4 className="text-lg font-bold text-cyber-secondary mb-2">{job.role}</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{job.description}</p>
                <div className={`flex flex-wrap gap-2 ${idx % 2 !== 0 ? "md:justify-end" : ""}`}>
                  {job.tech.map(t => (
                    <span key={t} className="text-xs text-cyber-dim">#{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading title="Featured Projects" subtitle="DEPLOYMENTS" icon={Code2} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            transition={{ delay: idx * 0.1 }}
            className="group glass-panel rounded-xl overflow-hidden border border-white/5 hover:border-cyber-primary/50 transition-all"
          >
            <div className="h-48 bg-cyber-dark/80 relative overflow-hidden">
               <div className="absolute inset-0 bg-cyber-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.links.github} className="p-2 bg-black rounded-full text-white hover:text-cyber-primary"><Github /></a>
                  <a href={project.links.demo} className="p-2 bg-black rounded-full text-white hover:text-cyber-primary"><ExternalLink /></a>
               </div>
               <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyber-gray to-cyber-black flex items-center justify-center">
                 <Terminal size={48} className="text-white/10" />
               </div>
            </div>
            <div className="p-6">
              <div className="text-xs font-mono text-cyber-secondary mb-2">{project.category}</div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 text-xs bg-white/5 rounded text-gray-400">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-cyber-dark/30">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Initialize Contact" subtitle="TRANSMISSION" icon={Mail} />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let"s Build the Future</h3>
            <p className="text-gray-400 mb-8">
              Interested in collaborating on AI projects or have a question? My inbox is always open for new opportunities.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center gap-4 text-gray-300 hover:text-cyber-primary transition-colors">
                <Mail className="text-cyber-secondary" /> {portfolioData.personal.email}
              </a>
              <a href={portfolioData.personal.linkedin} className="flex items-center gap-4 text-gray-300 hover:text-cyber-primary transition-colors">
                <Linkedin className="text-cyber-secondary" /> LinkedIn Profile
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="glass-panel p-1 rounded-lg">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent p-4 text-white focus:outline-none"
                value={formState.name}
                onChange={e => setFormState({...formState, name: e.target.value})}
                required
              />
            </div>
            <div className="glass-panel p-1 rounded-lg">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent p-4 text-white focus:outline-none"
                value={formState.email}
                onChange={e => setFormState({...formState, email: e.target.value})}
                required
              />
            </div>
            <div className="glass-panel p-1 rounded-lg">
              <textarea 
                rows="4" 
                placeholder="Message" 
                className="w-full bg-transparent p-4 text-white focus:outline-none resize-none"
                value={formState.message}
                onChange={e => setFormState({...formState, message: e.target.value})}
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={status === "sending"}
              className="w-full py-4 bg-gradient-to-r from-cyber-primary to-cyber-secondary text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              {status === "sending" ? "Transmitting..." : status === "success" ? "Transmission Sent!" : <><Send size={18} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-cyber-black min-h-screen text-white selection:bg-cyber-primary selection:text-black">
      <CustomCursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-cyber-primary origin-left z-[100]"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 text-center text-cyber-dim font-mono text-sm bg-cyber-black border-t border-white/5">
        <p>© {new Date().getFullYear()} Santanu Raj. System Status: Online</p>
      </footer>
    </div>
  );
}

export default App;
