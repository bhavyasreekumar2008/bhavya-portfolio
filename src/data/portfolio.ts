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
    { number: "03", label: "SKILLS", href: "#skills" },
    { number: "04", label: "EDUCATION", href: "#education" },
    { number: "05", label: "CONTACT", href: "#contact" },
  ],
  contents: [
    { number: "01", title: "ABOUT ME & BIOGRAPHY", section: "PROLOGUE", page: "P. 03", tag: "PROFILE" },
    { number: "02", title: "TECHNICAL REPERTOIRE", section: "ARCHIVE", page: "P. 05", tag: "SKILLS MATRIX" },
    { number: "03", title: "ACADEMIC TIMELINE", section: "CHRONOLOGY", page: "P. 07", tag: "EDUCATION" },
    { number: "04", title: "DISPATCH & INQUIRY", section: "EPILOGUE", page: "P. 09", tag: "CONTACT" },
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
  projects: [],
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

