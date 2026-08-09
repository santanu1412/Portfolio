export const portfolioData = {
  personal: {
    name: "Santanu Raj",
    title: "SOFTWARE ENGINEER / CSE ARCHITECT",
    roles: ["Amazon ML Trainee", "Software Development Engineer", "GenAI Engineer", "Full-Stack Architect"],
    level: 21,
    class: "SDE",
    guild: "CSE '27",
    mana: 100,
    bio: "Trainee at Amazon ML Summer School — selected among 3,000 from 135,000+ applicants — with hands-on experience building production-ready Node.js and Python systems, integrating Agentic AI/LLM APIs, and designing scalable async architectures.",
    heroStats: [
      { label: "LEVEL", value: "21" },
      { label: "CLASS", value: "SDE" },
      { label: "GUILD", value: "CSE '27" },
      { label: "RANK", value: "S" },
    ],
    specializations: ["AI/ML", "Full-Stack", "DSA & Systems", "Cybersecurity"],
    resumeLink: "Santanu_S.pdf",
    heroImage: "/images/Santanu Profile Pic.jpeg",
    email: "santanu.raj.30.01@gmail.com",
    linkedin: "https://linkedin.com/in/santanu-raj-in",
    github: "https://github.com/santanu1412",
    portfolio: "https://santanu-raj-three.vercel.app",
  },

  /* ═══════════════════════════════════════
     SKILLS — RPG ELEMENTAL DOMAINS
     ═══════════════════════════════════════ */
  skills: {
    domains: [
      {
        id: "lightning",
        name: "Lightning",
        emoji: "⚡",
        label: "AI / Data Science",
        color: "ether",
        skills: [
          { name: "Python", level: 85, icon: "fab fa-python", combo: "Python + TensorFlow: Deep Learning Mastery" },
          { name: "Data Analytics", level: 80, icon: "fas fa-chart-line", combo: "Analytics + MongoDB: Real-Time Insights Pipeline" },
          { name: "Vertex AI", level: 75, icon: "fas fa-cloud", combo: "Vertex AI + Gemini: Production AI Deployment" },
          { name: "Agentic AI", level: 80, icon: "fas fa-robot", combo: "Agentic AI + LLMs: Autonomous Workflows" },
        ]
      },
      {
        id: "iron",
        name: "Iron",
        emoji: "🛡️",
        label: "Backend & Systems",
        color: "spirit",
        skills: [
          { name: "Node.js", level: 95, icon: "fab fa-node-js", combo: "Node.js + Express: Scalable REST APIs" },
          { name: "C++", level: 90, icon: "fas fa-code", combo: "C++ + DSA: Fast Execution & Optimization" },
          { name: "Java", level: 85, icon: "fab fa-java", combo: "Java + Spring: Enterprise Backend Systems" },
          { name: "Docker", level: 85, icon: "fab fa-docker", combo: "Docker + CI/CD: Containerized Deployments" },
          { name: "MongoDB", level: 85, icon: "fas fa-leaf", combo: "MongoDB + Mongoose: NoSQL Data Modeling" },
        ]
      },
      {
        id: "glass",
        name: "Glass",
        emoji: "💎",
        label: "Frontend & UI",
        color: "quantum",
        skills: [
          { name: "React / Next.js", level: 90, icon: "fab fa-react", combo: "React + Framer Motion: Cinematic UIs" },
          { name: "React Native", level: 80, icon: "fab fa-react", combo: "React Native + Expo: Cross-Platform Mobile" },
          { name: "JavaScript", level: 92, icon: "fab fa-js", combo: "JS + TypeScript: Type-Safe Full-Stack" },
          { name: "Tailwind CSS", level: 88, icon: "fas fa-paint-brush", combo: "Tailwind + Responsive: Pixel-Perfect Layouts" },
        ]
      },
      {
        id: "shadow",
        name: "Shadow",
        emoji: "🔒",
        label: "Cybersecurity & Networks",
        color: "ether",
        skills: [
          { name: "Security Testing", level: 78, icon: "fas fa-shield-alt", combo: "Sec Testing + OWASP: Vulnerability Assessment" },
          { name: "Network Security", level: 75, icon: "fas fa-network-wired", combo: "NetSec + Firewalls: Perimeter Defense" },
          { name: "AWS / GCP", level: 80, icon: "fab fa-aws", combo: "Cloud + IAM: Secure Infrastructure" },
          { name: "SQL / PostgreSQL", level: 82, icon: "fas fa-database", combo: "SQL + Injection Prevention: Secure Queries" },
        ]
      }
    ],
  },

  /* ═══════════════════════════════════════
     PROJECTS — QUEST LOG
     ═══════════════════════════════════════ */
  projects: [
    {
      id: "q1",
      cat: "web",
      rank: "S",
      name: "NexusFund — Crowdfunding Platform",
      desc: "Architected async backend with WebSockets for real-time telemetry; implemented JWT-based auth and NoSQL injection sanitization. Containerized client and server using Docker multi-stage builds.",
      difficulty: "Legendary",
      rewards: ["+Real-Time Telemetry", "JWT Auth", "Docker Deploy"],
      tags: ["Node.js", "MongoDB", "Docker", "Socket.IO"],
      image: "/images/nexusfund.png",
      github: "https://github.com/santanu1412",
      demo: "https://nexus-fund.vercel.app/",
    },
    {
      id: "q2",
      cat: "backend",
      rank: "A",
      name: "Shado Text — Secure Messaging Engine",
      desc: "Engineered a real-time distributed messaging engine achieving sub-50ms latency using Node.js and Socket.IO with end-to-end encryption. Packaged with Docker.",
      difficulty: "Epic",
      rewards: ["Sub-50ms Latency", "E2E Encryption", "Distributed"],
      tags: ["Node.js", "Socket.IO", "Docker", "Cryptography"],
      image: "/images/shado.png",
      github: "https://github.com/santanu1412",
      demo: "",
    },
  ],

  /* ═══════════════════════════════════════
     COMPETITIVE PROGRAMMING — BATTLE ARENA
     ═══════════════════════════════════════ */
  competitive: {
    platforms: [
      {
        name: "TCS CodeVita",
        icon: "fas fa-trophy",
        color: "quantum",
        stats: [
          { label: "Global Rank", value: "4,419" },
          { label: "Edition", value: "Season 12" },
        ],
        badge: "Elite Coder",
      },
    ],
    trophies: [
      { icon: "🏆", title: "TCS CodeVita Global Rank 4419", desc: "Advanced algorithmic problem-solving in competitive coding", color: "quantum" },
      { icon: "🌟", title: "Aspire Institute AAG Awardee", desc: "Selected from 44+ countries for academic excellence & leadership", color: "ether" },
      { icon: "🚀", title: "Amazon ML Summer School", desc: "Top 3,000 from 135,000+ applicants — intensive AI/ML mentorship", color: "spirit" },
    ],
  },

  /* ═══════════════════════════════════════
     EXPERIENCE — STORY ARCS
     ═══════════════════════════════════════ */
  experience: [
    {
      role: "Trainee",
      company: "Amazon ML Summer School",
      logo: "/images/amazon.png",
      duration: "Jul 2026 – Aug 2026",
      arc: "guild",
      points: [
        "Selected among 3,000 from 135,000+ applicants for Amazon's flagship ML Summer School, engaging in intensive mentorship under Amazon Scientists.",
        "Gained deep exposure to advanced AI/ML concepts and industry best practices, with focus on real-world problem-solving techniques."
      ],
    },
    {
      role: "Intern / Lead Technician",
      company: "Paytm",
      logo: "/images/paytm.png",
      duration: "Jun 2026 – Jul 2026",
      arc: "guild",
      points: [
        "Built scalable JavaScript and React Native solutions for Paytm's tech ecosystem, driving a 15% increase in customer satisfaction.",
        "Leveraged AI/ML integrations (Cursor, Vertex AI) to accelerate sprint development by 20% and improve code quality.",
        "Analyzed JIRA data trends to diagnose bottlenecks and formulate action plans, reducing bug resolution time by 30%."
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Bluestock™",
      logo: "/images/blue.webp",
      duration: "Oct 2025 – Jan 2026",
      arc: "guild",
      points: [
        "Built an integration layer using Node.js for suppliers and B2B partners, processing 5,000+ daily requests.",
        "Automated Python data ingestion across Item and Supply Chain channels, reducing manual workload by 40%.",
        "Designed comprehensive test scenarios and conducted rigorous QA to ensure software quality."
      ],
    },
    {
      role: "Cyber Security Analyst",
      company: "Lovely Professional University",
      logo: "/images/lpu.jpg",
      duration: "Jun 2025 – Aug 2025",
      arc: "guild",
      points: [
        "Built a strong theoretical framework in network security implementation, vulnerability assessments, and cyber operations."
      ],
    },
    {
      role: "Full-stack Developer",
      company: "EY Global Delivery Services",
      logo: "/images/EY.png",
      duration: "Feb 2025 – Apr 2025",
      arc: "guild",
      points: [
        "Developed and deployed a Crowd Funding Platform using the MERN stack with responsive interfaces and robust RESTful APIs."
      ],
    },
    {
      role: "AI Intern",
      company: "Tech Saksham (Microsoft & SAP)",
      logo: "/images/Microsoft.png",
      duration: "Feb 2025 – Apr 2025",
      arc: "guild",
      points: [
        "Designed a React dashboard for the largest private customer database (1M+ records), transforming JSON logs into visual KPI trackers.",
        "Engineered Python analytics pipelines to aggregate 10GB+ of raw activity data daily within a Service-Oriented Architecture."
      ],
    },
  ],

  /* ═══════════════════════════════════════
     EDUCATION
     ═══════════════════════════════════════ */
  education: [
    {
      logo: "/images/lpu.jpg",
      degree: "Bachelor of Technology, Computational Science",
      inst: "Lovely Professional University, Phagwara, Punjab",
      years: "Aug 2023 - Aug 2027 (Expected)",
      loc: "Punjab, India",
      grade: "GPA: 8.71/10",
      arc: "academy",
    },
    {
      logo: null,
      degree: "Intermediate (Class XII)",
      inst: "Modern English School",
      years: "2021 - 2023",
      loc: "Nawada, Bihar",
      grade: "Percentage: 67%",
      arc: "academy",
    },
    {
      logo: null,
      degree: "Matriculation (Class X)",
      inst: "Modern English School",
      years: "2019 - 2021",
      loc: "Nawada, Bihar",
      grade: "Percentage: 85%",
      arc: "academy",
    }
  ],

  /* ═══════════════════════════════════════
     CERTIFICATIONS — CONQUESTS
     ═══════════════════════════════════════ */
  certifications: [
    {
      icon: "🤖",
      title: "Prompt Design in Vertex AI Skill Badge",
      issuer: "Google Cloud",
      logo: "/images/google.svg",
      date: "2025",
      link: "",
    },
    {
      icon: "🧠",
      title: "Build Real World AI Apps with Gemini & Imagen",
      issuer: "Google Cloud",
      logo: "/images/google.svg",
      date: "2025",
      link: "",
    },
    {
      icon: "🔒",
      title: "Fortinet NSE 3 — Cybersecurity",
      issuer: "Fortinet",
      logo: "/images/fortinet.png",
      date: "2025",
      link: "",
    },
    {
      icon: "🧠",
      title: "Gen AI Academy",
      issuer: "Google Cloud & Hack2Skills",
      logo: "/images/google.svg",
      date: "Aug 2025",
      link: "https://certificate.hack2skill.com/user/genai13/2025H2S04GENAI-A1300111",
    },
    {
      icon: "💻",
      title: "Node.js (Intermediate)",
      issuer: "HackerRank",
      logo: "/images/hackerrank.svg",
      date: "Feb 2026",
      link: "https://www.hackerrank.com/certificates/4747c4769d45",
    },
    {
      icon: "☁️",
      title: "Oracle Cloud AI Foundations Associate",
      issuer: "Oracle",
      logo: "/images/oracle.png",
      date: "Oct 2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B47C950590DC438772C60947D7E600BAB4F992DBC7891E62C7F22CA03BC8224A",
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      issuer: "NPTEL",
      logo: "/images/nptel.jpg",
      date: "Oct 2025",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS107S135870028110821164",
    },
    {
      icon: "🐍",
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
      logo: "/images/hackerrank.svg",
      date: "2025",
      link: "",
    },
    {
      icon: "🌐",
      title: "TCP/IP and Advanced Topics",
      issuer: "Coursera",
      logo: "/images/coursera.jpg",
      date: "Jul 2024",
      link: "https://coursera.org/share/607811b248441d0202bf1c4a8f70bd15",
    },
  ],

  /* ═══════════════════════════════════════
     TERMINAL COMMANDS
     ═══════════════════════════════════════ */
  terminalCommands: {
    help: [
      "Available commands:",
      "  help        — Show this help menu",
      "  about       — About the operator",
      "  skills      — List active skill domains",
      "  contact     — Show contact information",
      "  socials     — Display comm channels",
      "  sudo hire   — Initiate recruitment protocol",
      "  clear       — Clear terminal output",
    ],
    about: [
      "┌─ OPERATOR PROFILE ───────────────────────┐",
      "│  Name: Santanu Raj                        │",
      "│  Class: Software Development Engineer     │",
      "│  Level: 21 | Rank: S                      │",
      "│  Guild: CSE '27 — LPU                     │",
      "│  Status: ACTIVE — OPEN TO OPPORTUNITIES   │",
      "└───────────────────────────────────────────┘",
    ],
    skills: [
      "⚡ LIGHTNING — AI / Data Science: Python, Data Analytics, Vertex AI, Agentic AI",
      "🛡️ IRON     — Backend & Systems: Node.js, C++, Java, Docker, MongoDB",
      "💎 GLASS    — Frontend & UI: React, React Native, JavaScript, Tailwind",
      "🔒 SHADOW   — Security & Networks: Sec Testing, NetSec, AWS/GCP, SQL",
    ],
    contact: [
      "╔══ SECURE COMM CHANNELS ══╗",
      "║  📧 santanu.raj.30.01@gmail.com",
      "║  🔗 linkedin.com/in/santanu-raj-in",
      "║  🐙 github.com/santanu1412",
      "║  🌐 santanu-raj-three.vercel.app",
      "╚══════════════════════════╝",
    ],
    socials: [
      "ENCRYPTED COMM CHANNELS:",
      "  [GitHub]   → github.com/santanu1412",
      "  [LinkedIn] → linkedin.com/in/santanu-raj-in",
      "  [Email]    → santanu.raj.30.01@gmail.com",
      "  [Portfolio] → santanu-raj-three.vercel.app",
    ],
    "sudo hire": [
      "🔐 ACCESS GRANTED — RECRUITMENT PROTOCOL INITIATED",
      "",
      "Operator Santanu Raj is AVAILABLE for:",
      "  → Full-time SDE Roles",
      "  → AI/ML Engineering Positions",
      "  → Full-Stack Development",
      "  → Research Internships",
      "",
      "📧 Contact: santanu.raj.30.01@gmail.com",
      "📄 Resume: Download from the nav bar above.",
    ],
  },
};