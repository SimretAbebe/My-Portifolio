import {
  Project,
  Experience,
  SkillCategory,
  Achievement,
  NavItem,
} from "@/types/portfolio";

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export const ROTATING_TEXTS: string[] = [
  "Credit risk modeling",
  "Fraud detection",
  "Financial NLP",
  "RAG systems",
];

export const EXPERIENCES: Experience[] = [
  {
    id: "melos",
    date: "Jul 2026 — present",
    title: "Back End Developer",
    org: "Melos Technologies PLC · Addis Ababa (Internship)",
    bullets: [
      "Designed and implemented a JWT-based authentication system supporting Buyer, Seller, and Admin roles, including token refresh handling and route-level access control.",
      "Developed custom Django REST Framework APIs with role-based permissions, secure user management, and clean endpoint architecture built for production use and future scaling.",
    ],
  },
  {
    id: "10academy",
    date: "Apr 2026 — present",
    title: "AI & Machine Learning Intern",
    org: "10 Academy · Remote Internship, Addis Ababa",
    bullets: [
      "Built 3+ end-to-end AI and machine learning solutions for real-world Ethiopian fintech challenges, applying Python, Pandas, and scikit-learn across forecasting, credit risk modeling, and financial NLP workflows.",
      "Worked across the full ML lifecycle — data cleaning, feature engineering, model training, evaluation, and explainability — on projects using real Ethiopian banking and financial complaint data.",
    ],
  },
  {
    id: "prodigy",
    date: "Apr–May 2025",
    title: "Web Development Intern",
    org: "Prodigy InfoTech · Remote",
    bullets: [
      "Built and delivered 4 responsive web applications using HTML5, CSS3, and vanilla JavaScript within a 2-month internship, focusing on cross-device consistency and clean UI structure.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "bank-analytics",
    tags: ["TRANSFORMERS", "SPACY", "SHAP", "STREAMLIT"],
    title: "Ethiopian bank customer review intelligence",
    description:
      "Multilingual (English, Amharic, Afaan Oromo) ML system predicting customer risk from CBE, BOA, and Dashen Bank app reviews — achieved 100% recall on high-risk reviews. Delivered SHAP-based explainability and a live interactive dashboard for non-technical stakeholders.",
    github: "https://github.com/SimretAbebe/Fintech-Review-Analytics",
    liveDemo: "https://ethiopian-bank-customer-review.onrender.com/",
  },
  {
    id: "credit-risk",
    tags: ["SCIKIT-LEARN", "SHAP", "DOCKER"],
    title: "Credit risk probability model",
    description:
      "Built an end-to-end ML pipeline for credit risk classification using alternative transaction data and RFM proxy variables, aligned with Basel II principles. Integrated SHAP for model interpretability and containerized the environment with Docker for reproducible, production-style deployment.",
    github: "https://github.com/SimretAbebe/Credit-Risk-Model",
  },
  {
    id: "fraud-detection",
    tags: ["XGBOOST", "LIGHTGBM", "SHAP"],
    title: "Fraud detection system",
    description:
      "Compared Logistic Regression, Random Forest, XGBoost, and LightGBM on e-commerce and credit card transaction data; identified and fixed a cross-validation data leakage bug. Delivered SHAP-driven business recommendations, including risk scoring rules for new-account and geography-based fraud signals.",
    github: "https://github.com/SimretAbebe/Fraud-detection-Model",
  },
  {
    id: "rag-chatbot",
    tags: ["CHROMADB", "GROQ", "GRADIO"],
    title: "RAG-powered customer complaint chatbot",
    description:
      "Built a Retrieval-Augmented Generation conversational agent that analyzes financial customer complaints and retrieves evidence-backed answers via semantic search, reducing response hallucinations.",
    github: "https://github.com/SimretAbebe/RAG-FinTech-Complaint-Chatbot",
  },
  {
    id: "smarthire-ai",
    tags: ["SPACY", "NLTK"],
    title: "SmartHire AI",
    description:
      "Hackathon finalist project at Bahir Dar Institute of Technology (Apr 2026) — a full AI-powered hiring platform built in 48 hours.",
    github: "https://github.com/SimretAbebe/SmartHire-Ai",
    borderColor: "#7A5A2A",
  },
  {
    id: "portfolio-opt",
    tags: ["ARIMA", "LSTM", "MPT"],
    title: "Portfolio optimization",
    description:
      "Applied Modern Portfolio Theory alongside ARIMA and LSTM time-series forecasting to explore quantitative investment strategy.",
    github: "https://github.com/SimretAbebe/Portfolio-Optimization",
    borderColor: "#7A5A2A",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: "LANGUAGES",
    skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "FRAMEWORKS",
    skills: [
      "Django",
      "Django REST Framework",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
    ],
  },
  {
    category: "MACHINE LEARNING & AI",
    skills: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "NLP (spaCy, DistilBERT)",
      "Sentiment Analysis",
      "Statistical Modeling (ANOVA)",
      "SHAP Model Interpretability",
      "XGBoost",
      "LightGBM",
      "scikit-learn",
    ],
  },
  {
    category: "DATA & INFRASTRUCTURE",
    skills: [
      "Docker",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Pandas",
      "Vector Databases",
    ],
  },
  {
    category: "ENGINEERING PRACTICES",
    skills: [
      "Git & GitHub",
      "REST APIs",
      "JWT Authentication",
      "CI/CD",
      "Socket.io",
      "Role-Based Access Control",
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "hackathon",
    title: "Hackathon Finalist — SmartHire AI",
    subtitle: "Bahir Dar Institute of Technology · Apr 2026",
    text: "Built a full AI-powered platform in 48 hours.",
  },
  {
    id: "g17-ambassador",
    title: "G17 UAC Campus Ambassador",
    subtitle: "G17 Ethiopian Chapter · Nov 2025 — present",
    text: "Represent Bahir Dar University on tech & AI innovation initiatives.",
  },
];

export const CERTIFICATES = [
  {
    id: "ai-for-social",
    title: "AI for Social Good",
    image: "/ai-for-social.jpg",
  },
  {
    id: "american-corner",
    title: "American Corner Recognition",
    image: "/american-corner.jpg",
  },
  {
    id: "hackathon",
    title: "Hackathon Certificate",
    image: "/hackaton.jpg",
  },
  {
    id: "leader-of-change",
    title: "Leader of Change",
    image: "/leader-of-change.jpg",
  },
  {
    id: "national-induction",
    title: "National Induction",
    image: "/national-induction.jpg",
  },
];

export const CONTACT_INFO = {
  github: "https://github.com/SimretAbebe",
  githubHandle: "github.com/SimretAbebe",
  linkedin: "https://linkedin.com/in/simret-abebe123",
  linkedinHandle: "linkedin.com/in/simret-abebe123",
  email: "simretabebe24@gmail.com",
  phone: "+251 993 328 821",
  location: "Bahir Dar, Ethiopia",
};
