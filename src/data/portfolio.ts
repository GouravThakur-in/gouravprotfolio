export const profile = {
  firstName: "Gourav",
  lastName: "Thakur",
  name: "Gourav Thakur",
  role: "AI & Machine Learning Engineer",
  greeting: "Hi, I'm",
  roles: [
    "AI/ML Engineer",
    "Python Developer",
    "FastAPI Developer",
    "Machine Learning Enthusiast",
    "Deep Learning Learner",
  ],
  summary:
    "Motivated MCA graduate with hands-on experience in Python, Machine Learning, and AI application development. Skilled in FastAPI, Scikit-Learn, TensorFlow, Pandas, and NumPy. Experienced in developing AI-powered applications, machine learning pipelines, and backend APIs. Passionate about solving real-world problems through AI and continuously learning emerging technologies.",
  location: "Himachal Pradesh, India",
  phone: "8894072898",
  email: "tgourav283@gmail.com",
  linkedin: "https://linkedin.com/in/gourav-thakur7425",
  linkedinLabel: "linkedin.com/in/gourav-thakur7425",
  github: "https://github.com/GouravThakur-in",
  githubLabel: "github.com/GouravThakur-in",
  githubUser: "GouravThakur-in",
  resumeUrl: "/gourav-thakur-resume.pdf",
};

export const stats = [
  { value: 4, suffix: "+", label: "AI / ML projects shipped" },
  { value: 25, suffix: "+", label: "Tools & libraries used" },
  { value: 2, suffix: "", label: "Industry traineeships" },
  { value: 2026, suffix: "", label: "MCA graduation year", raw: true },
];

export const experience = [
  {
    company: "ASB Academy",
    role: "AI/ML Trainee",
    period: "April 2026 – Present",
    current: true,
    points: [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "NLP",
      "Transformer Models",
      "Hyperparameter Tuning",
      "FastAPI Integration",
      "End-to-End AI Projects",
    ],
  },
  {
    company: "PrernaGati Technology",
    role: "Data Science Trainee",
    period: "Jan 2026 – April 2026",
    current: false,
    points: [
      "Data Cleaning",
      "Data Preprocessing",
      "Exploratory Data Analysis",
      "Feature Engineering",
      "Regression Models",
      "Classification Models",
      "Model Evaluation",
      "Data Visualization",
    ],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "C", "C++"] },
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Frameworks", items: ["FastAPI", "Streamlit"] },
  {
    title: "Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "TensorFlow"],
  },
  { title: "Databases", items: ["MySQL", "PostgreSQL"] },
  {
    title: "Machine Learning",
    items: [
      "Data Preprocessing",
      "EDA",
      "Feature Engineering",
      "Regression",
      "Classification",
      "NLP",
      "Model Evaluation",
    ],
  },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Kaggle", "REST APIs"] },
];

export type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  tech: string[];
  repo: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Airbnb Price Prediction",
    tagline: "End-to-end regression pipeline",
    description:
      "End-to-end Machine Learning application that predicts Airbnb listing prices from a modular, production-shaped pipeline.",
    features: [
      "Data Ingestion",
      "Data Preprocessing",
      "Feature Engineering",
      "GridSearchCV",
      "Model Evaluation",
      "XGBoost",
      "Prediction Pipeline",
      "Modular Architecture",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "FastAPI"],
    repo: "https://github.com/GouravThakur-in",
    accent: "var(--accent-cyan)",
  },
  {
    title: "HireMind",
    tagline: "AI-powered recruitment platform",
    description:
      "Recruitment platform that parses resumes, embeds candidate profiles and ranks the best matches for a role semantically.",
    features: [
      "Resume Parsing",
      "AI Candidate Matching",
      "Semantic Search",
      "Candidate Ranking",
      "FastAPI Backend",
    ],
    tech: ["Python", "FastAPI", "NLP", "Transformers", "PostgreSQL"],
    repo: "https://github.com/GouravThakur-in",
    accent: "var(--accent-violet)",
  },
  {
    title: "ML Experiment Orchestrator",
    tagline: "Model lifecycle management",
    description:
      "Machine Learning lifecycle management platform for tracking experiments, comparing runs and automating training pipelines.",
    features: [
      "Experiment Tracking",
      "Model Comparison",
      "Pipeline Automation",
      "Performance Dashboard",
      "Version Control",
    ],
    tech: ["Python", "FastAPI", "Scikit-Learn", "Streamlit", "MySQL"],
    repo: "https://github.com/GouravThakur-in",
    accent: "var(--accent-lime)",
  },
  {
    title: "Jarvis Voice Assistant",
    tagline: "Desktop AI companion",
    description:
      "Desktop AI Voice Assistant built with Python that understands spoken commands and automates everyday desktop tasks.",
    features: ["Voice Commands", "Task Automation", "API Integration", "Smart Responses"],
    tech: ["Python", "Speech Recognition", "REST APIs", "Automation"],
    repo: "https://github.com/GouravThakur-in",
    accent: "var(--accent-amber)",
  },
];

export const education = [
  {
    degree: "Master of Computer Applications",
    school: "Sardar Patel University, Mandi",
    period: "2024 – 2026",
  },
  {
    degree: "Bachelor of Computer Applications",
    school: "Rabindranath Tagore Government Degree College, Sarkaghat",
    period: "2020 – 2023",
  },
];

export const technologies = [
  "Python",
  "TensorFlow",
  "Scikit-Learn",
  "FastAPI",
  "Pandas",
  "NumPy",
  "PostgreSQL",
  "MySQL",
  "Git",
  "GitHub",
  "Streamlit",
  "Docker-ready APIs",
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// Optional EmailJS wiring — set these to enable direct form delivery.
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
};
