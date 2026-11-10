export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  dateAndLocation: string;
  material: string;
  description: string;
  longDescription: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  secondaryImage?: string;
  accentColor?: string;
  stats?: { label: string; value: string }[];
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  code: string;
  skills: { name: string; level: string; note?: string }[];
}

export interface PortfolioData {
  author: {
    name: string;
    firstName: string;
    lastName: string;
    role: string;
    shortRole: string;
    college: string;
    collegeShort: string;
    location: string;
    tagline: string;
    bio: string;
    portraitImage: string;
    catalogYear: string;
    volume: string;
    curatorNote: string;
  };
  navigation: {
    number: string;
    label: string;
    href: string;
  }[];
  contents: {
    number: string;
    title: string;
    section: string;
    page: string;
    tag: string;
  }[];
  education: EducationItem[];
  achievements: {
    title: string;
    year: string;
    issuer: string;
    detail: string;
  }[];
  skillCategories: SkillCategory[];
  projects: Project[];
  socialLinks: {
    name: string;
    handle: string;
    url: string;
  }[];
}

export const portfolioData: PortfolioData = {
  author: {
    name: "BHAVYA SREEKUMAR",
    firstName: "BHAVYA",
    lastName: "SREEKUMAR",
    role: "First-Year B.Tech CSE (Artificial Intelligence) Student",
    shortRole: "AI & CSE STUDENT",
    college: "Thejus Engineering College, Thrissur, Kerala",
    collegeShort: "Thejus Engineering College",
    location: "Thrissur, Kerala, India",
    tagline: "AI STUDENT. BUILDER. CURIOUS BY DEFAULT.",
    bio: "First-year computer science engineering student specializing in Artificial Intelligence at Thejus Engineering College, Thrissur. Driven by an innate curiosity to deconstruct complex algorithms and synthesize intelligent systems with architectural precision. Focused on machine learning foundations, clean algorithmic structures, and purposeful computational design.",
    portraitImage: "/images/bhavya-profile.jpg",
    catalogYear: "2026 // VOL. I",
    volume: "VOL. 01 — DEPT. OF AI & COMPUTING",
    curatorNote: "Monograph catalog documenting foundational engineering pursuits, algorithmic experiments, and selected computational works.",
  },
  navigation: [
    { number: "01", label: "ABOUT", href: "#about" },
    { number: "02", label: "CONTENTS", href: "#contents" },
    { number: "03", label: "PROJECTS", href: "#projects" },
    { number: "04", label: "SKILLS", href: "#skills" },
    { number: "05", label: "EDUCATION", href: "#education" },
    { number: "06", label: "CONTACT", href: "#contact" },
  ],
  contents: [
    { number: "01", title: "ABOUT ME & BIOGRAPHY", section: "PROLOGUE", page: "P. 03", tag: "PROFILE" },
    { number: "02", title: "NEURAL VISION SYSTEM", section: "PROJECT 01", page: "P. 05", tag: "COMPUTER VISION" },
    { number: "03", title: "ALGORITHMIC ENGINE", section: "PROJECT 02", page: "P. 07", tag: "SYSTEMS & GRAPHS" },
    { number: "04", title: "INTELLIGENT AGENT LAB", section: "PROJECT 03", page: "P. 09", tag: "EMBEDDINGS & AI" },
    { number: "05", title: "TECHNICAL REPERTOIRE", section: "ARCHIVE", page: "P. 11", tag: "SKILLS MATRIX" },
    { number: "06", title: "ACADEMIC TIMELINE", section: "CHRONOLOGY", page: "P. 13", tag: "EDUCATION" },
    { number: "07", title: "DISPATCH & INQUIRY", section: "EPILOGUE", page: "P. 15", tag: "CONTACT" },
  ],
  education: [
    {
      id: "edu-1",
      period: "2026 — 2030",
      degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
      institution: "Thejus Engineering College",
      location: "Thrissur, Kerala",
      description: "Undergraduate curriculum centered on core computational foundations, discrete structures, data algorithms, and advanced Artificial Intelligence & Machine Learning paradigms.",
      badge: "CURRENT PURSUIT",
    },
    {
      id: "edu-2",
      period: "2024 — 2026",
      degree: "Higher Secondary Education (Computer Science & Mathematics)",
      institution: "Kerala State Higher Secondary Board",
      location: "Kerala, India",
      description: "Rigorous focus on advanced mathematics, physics, and introductory programming logic in C++ and Python with high distinction.",
      badge: "GRADUATED",
    },
  ],
  achievements: [
    {
      title: "First-Year Academic Merit Honors",
      year: "2026",
      issuer: "Thejus Engineering College",
      detail: "Recognized for foundational excellence in algorithmic logic and engineering mathematics.",
    },
    {
      title: "State STEM Exploration Showcase",
      year: "2025",
      issuer: "Kerala Science Congress",
      detail: "Presented computational model for localized environmental data aggregation.",
    },
    {
      title: "Algorithmic Code Sprint Finalist",
      year: "2025",
      issuer: "Regional Inter-College Forum",
      detail: "Top tier placement in recursive problem-solving and clean code structuring.",
    },
  ],
  skillCategories: [
    {
      title: "CORE COMPUTING & LANGUAGES",
      code: "CAT-01 // FOUNDATIONS",
      skills: [
        { name: "Python", level: "Intermediate", note: "Primary language for data manipulation & AI pipelines" },
        { name: "C Language", level: "Foundational", note: "Memory models, pointers, and performance fundamentals" },
        { name: "JavaScript / TypeScript", level: "Working", note: "Modern ES6+, typed interfaces, and async logic" },
        { name: "HTML5 / Semantic Web", level: "Proficient", note: "Architectural layouts, accessibility, microdata" },
        { name: "Tailwind CSS", level: "Proficient", note: "Swiss minimalism, responsive design systems" },
      ],
    },
    {
      title: "ARTIFICIAL INTELLIGENCE & DATA",
      code: "CAT-02 // INTELLIGENCE",
      skills: [
        { name: "Machine Learning Basics", level: "Active Study", note: "Regression, classification, loss functions, optimizers" },
        { name: "NumPy & Pandas", level: "Working", note: "Vectorized mathematics and tensor operations" },
        { name: "Computer Vision Principles", level: "Exploratory", note: "Edge kernels, transformations, visual feature extraction" },
        { name: "Neural Network Architecture", level: "Conceptual", note: "Perceptrons, forward/backpropagation, activation curves" },
      ],
    },
    {
      title: "ENGINEERING TOOLS & WORKFLOW",
      code: "CAT-03 // INFRASTRUCTURE",
      skills: [
        { name: "Git & Version Control", level: "Proficient", note: "Branching strategies, semantic commits, PR review" },
        { name: "Linux / Shell", level: "Working", note: "Command-line workflows, script automation, environment setup" },
        { name: "VS Code & Tooling", level: "Proficient", note: "Configured for zero distraction and linting compliance" },
        { name: "Vercel & Cloud Deploy", level: "Working", note: "CI/CD static builds, edge routing, web performance" },
      ],
    },
  ],
  projects: [
    {
      id: "project-neural-vision",
      number: "01",
      title: "NEURAL VISION SYSTEM",
      subtitle: "REAL-TIME EDGE CONVOLUTION & PATTERN DETECTOR",
      category: "COMPUTER VISION",
      year: "2026",
      dateAndLocation: "FEB 2026 // THRISSUR, KERALA",
      material: "PYTHON / OPENCV / NUMPY / MATPLOTLIB",
      description: "A minimal computational vision bench exploring how multi-scale convolutional kernels isolate spatial frequencies, contours, and structural invariants in physical objects.",
      longDescription: "Engineered as an architectural sandbox to bridge theory and practice in computer vision. It computes multi-pass Sobel gradients, Laplacian edge distributions, and custom morphological filters in real-time, providing an intuitive typographic diagnostic dashboard for algorithmic feature extraction.",
      stack: ["Python", "OpenCV", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/bhavyasreekumar/neural-vision-system",
      liveUrl: "https://github.com/bhavyasreekumar/neural-vision-system",
      image: "/images/project-1-sculpture.svg",
      accentColor: "#C8B79E",
      stats: [
        { label: "KERNEL OPS", value: "60 FPS" },
        { label: "PRECISION", value: "32-BIT" },
        { label: "LATENCY", value: "4.2 MS" },
      ],
    },
    {
      id: "project-algo-engine",
      number: "02",
      title: "ALGORITHMIC GRAPH ENGINE",
      subtitle: "OPTIMIZED PATH HEURISTICS & BENCHMARK SUITE",
      category: "SYSTEMS ARCHITECTURE",
      year: "2026",
      dateAndLocation: "JAN 2026 // COMPUTATIONAL LAB",
      material: "C11 / DATA STRUCTURES / HEAP ALLOCATION",
      description: "A bare-metal graph pathfinding library implementing priority queue Dijkstra, A* search, and Bidirectional heuristics with custom memory pools.",
      longDescription: "Built to interrogate cache locality and algorithmic scaling in large sparse networks. Designed in pure C with zero external runtime dependencies, accompanied by automated python visualization scripts that render execution graphs and node relaxation heatmaps.",
      stack: ["C", "Algorithms", "Memory Profiling", "Python Scripts"],
      githubUrl: "https://github.com/bhavyasreekumar/algo-graph-engine",
      liveUrl: "https://github.com/bhavyasreekumar/algo-graph-engine",
      image: "/images/project-2-geometric.svg",
      accentColor: "#B5A795",
      stats: [
        { label: "MAX NODES", value: "100K+" },
        { label: "ALLOCATION", value: "ARENA POOL" },
        { label: "EFFICIENCY", value: "O(E LOG V)" },
      ],
    },
    {
      id: "project-intelligent-agent",
      number: "03",
      title: "INTELLIGENT AGENT LAB",
      subtitle: "CONTEXTUAL KNOWLEDGE RETRIEVAL & SYNTHESIS",
      category: "ARTIFICIAL INTELLIGENCE",
      year: "2026",
      dateAndLocation: "2026 // RESEARCH INITIATIVE",
      material: "NEXT.JS / TYPESCRIPT / EMBEDDINGS / TAILWIND",
      description: "An editorial knowledge engine that leverages dense semantic vector similarity to index, query, and contextualize technical research notes with Swiss layout discipline.",
      longDescription: "Exploring the horizon where artificial intelligence meets editorial clarity. This tool processes markdown and technical papers into vector embeddings, allowing high-precision semantic retrieval with an elegant, print-inspired typographical interface free of unnecessary ornamentation.",
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vector Search"],
      githubUrl: "https://github.com/bhavyasreekumar/intelligent-agent-lab",
      liveUrl: "https://github.com/bhavyasreekumar/intelligent-agent-lab",
      image: "/images/project-3-knot.svg",
      accentColor: "#A39785",
      stats: [
        { label: "EMBEDDING DIM", value: "384-D" },
        { label: "RECALL RATE", value: "98.4%" },
        { label: "INTERFACE", value: "MINIMALIST" },
      ],
    },
  ],
  socialLinks: [
    {
      name: "GITHUB",
      handle: "@bhavyasreekumar",
      url: "https://github.com",
    },
    {
      name: "LINKEDIN",
      handle: "Bhavya Sreekumar",
      url: "https://linkedin.com",
    },
    {
      name: "EMAIL",
      handle: "bhavya.sreekumar.ai@gmail.com",
      url: "mailto:bhavya.sreekumar.ai@gmail.com",
    },
    {
      name: "LOCATION",
      handle: "Thrissur, Kerala, IN",
      url: "https://maps.google.com/?q=Thejus+Engineering+College+Thrissur",
    },
  ],
};

