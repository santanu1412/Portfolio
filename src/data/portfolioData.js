import { BrainCircuit, Terminal, Database, Globe, Code2, Layers } from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Santanu Raj",
    title: "GenAI & RAG Specialist | Full-Stack Architect",
    email: "santanu.raj.30.01@gmail.com",
    linkedin: "https://www.linkedin.com/in/santanu-raj-in",
    location: "Jalandhar, Punjab, India",
    summary: "I build production-ready, AI-native applications. Bridging the gap between traditional full-stack architecture and modern Generative AI integration.",
    heroImage: "/images/hero-profile.png"
  },
  skills: [
    { 
      category: "AI & GenAI", 
      icon: BrainCircuit,
      items: ["LangChain", "RAG Pipelines", "Gemini/Claude API", "LLM Fine-tuning", "Prompt Engineering"] 
    },
    { 
      category: "Full Stack", 
      icon: Globe,
      items: ["React.js", "Node.js", "Express", "Redux", "Tailwind CSS", "MERN Stack"] 
    },
    { 
      category: "Backend & Core", 
      icon: Terminal,
      items: ["Python", "Java", "C++", "REST APIs", "Microservices"] 
    },
    { 
      category: "Data & DevOps", 
      icon: Database,
      items: ["MongoDB", "Docker", "Git", "Pandas", "Oracle SQL"] 
    }
  ],
  experience: [
    {
      id: 1,
      role: "Project Lead",
      company: "Careerflow.ai",
      date: "Dec 2025 - Present",
      location: "Jalandhar",
      description: "Contributing to the development and optimization of AI-driven career tools. Leading cross-functional teams to translate complex requirements into high-quality code.",
      tech: ["AI Tools", "Team Leadership", "Optimization"]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Bluestock™",
      date: "Nov 2025 - Jan 2026",
      location: "New Delhi",
      description: "Architected automated ML pipelines for financial analysis. Reduced manual data processing by 70% for Nifty 100 companies using Python and Pandas.",
      tech: ["Python", "Pandas", "FinTech", "ML Pipelines"]
    },
    {
      id: 3,
      role: "Full-stack Developer",
      company: "EY Global Delivery Services",
      date: "Feb 2025 - Apr 2025",
      location: "New Delhi",
      description: "Developed scalable web applications using the MERN stack. Designed responsive interfaces with React.js and robust RESTful APIs with Node.js.",
      tech: ["MERN Stack", "REST APIs", "Scalable Web Apps"]
    }
  ],
  projects: [
    {
      id: 1,
      title: "FinTech ML Pipeline",
      category: "Machine Learning",
      description: "Automated financial analysis pipeline for Nifty 100 companies. Integrated Rule-Based ML models with React dashboards.",
      tech: ["Python", "React", "Pandas", "ML"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 2,
      title: "AI Career Assistant",
      category: "GenAI",
      description: "RAG-based application for career guidance and resume optimization using Gemini API.",
      tech: ["GenAI", "RAG", "LangChain", "Node.js"],
      links: { demo: "#", github: "#" }
    },
    {
      id: 3,
      title: "Scalable MERN Dashboard",
      category: "Web App",
      description: "High-performance dashboard for enterprise data visualization developed during EY tenure.",
      tech: ["MongoDB", "Express", "React", "Node"],
      links: { demo: "#", github: "#" }
    }
  ]
};
