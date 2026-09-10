import resumeAsset from "@/assets/Gourav_Thakur_Resume.pdf.asset.json";

export const profile = {
  firstName: "Gourav",
  lastName: "Thakur",
  name: "Gourav Thakur",
  role: "AI & Machine Learning Engineer",
  greeting: "Hi, I'm",
  roles: ["Data Scientist", "AI/ML Engineer", "Python Developer", "Machine Learning Engineer"],
  summary:
    "Motivated MCA graduate with hands-on experience in Python, Machine Learning, and AI application development. Skilled in FastAPI, Scikit-Learn, TensorFlow, Pandas, and NumPy. Experienced in developing AI-powered applications, machine learning pipelines, and backend APIs. Passionate about solving real-world problems through AI and continuously learning emerging technologies.",
  location: "Himachal Pradesh, India",
  phone: "8894072898",
  email: "tgourav283@gmail.com",
  linkedin: "https://www.linkedin.com/in/gourav-thakur7425/",
  linkedinLabel: "www.linkedin.com/in/gourav-thakur7425",
  github: "https://github.com/GouravThakur-in",
  githubLabel: "github.com/GouravThakur-in",
  githubUser: "GouravThakur-in",
  instagram: "https://www.instagram.com/gourav_1hakur/",
  instagramLabel: "@gourav_1hakur",

  resumeUrl: resumeAsset.url,
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
  longDescription: string;
  features: string[];
  pipeline: { step: string; detail: string }[];
  metrics: { label: string; value: string }[];
  tech: string[];
  repo: string;
  liveDemo?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Airbnb Price Prediction",
    tagline: "End-to-end regression pipeline",
    description:
      "End-to-end Machine Learning application that predicts Airbnb listing prices from a modular, production-shaped pipeline.",
    longDescription:
      "A production-shaped machine learning system that estimates the nightly price of an Airbnb listing from its location, capacity, amenities and host signals. The project is structured as independent, testable components — ingestion, transformation, training and inference — wired together by configurable pipelines and served through a FastAPI prediction endpoint, so retraining on fresh data never requires touching application code.",
    features: [
      "Modular data ingestion & validation",
      "Missing-value and outlier handling",
      "Feature engineering on location & amenities",
      "One-hot / target encoding pipelines",
      "GridSearchCV hyperparameter tuning",
      "XGBoost & ensemble benchmarking",
      "Reusable prediction pipeline artifacts",
      "FastAPI inference endpoint",
    ],
    pipeline: [
      { step: "Data Ingestion", detail: "Raw listings loaded, split and versioned into train/test artifacts." },
      { step: "Preprocessing", detail: "Null handling, outlier clipping, scaling and categorical encoding." },
      { step: "Feature Engineering", detail: "Geo-clustering, amenity counts, host-tenure and room-type signals." },
      { step: "Model Training", detail: "Linear, Random Forest and XGBoost regressors benchmarked side by side." },
      { step: "Tuning", detail: "GridSearchCV cross-validated search over the best-performing estimator." },
      { step: "Serving", detail: "Serialized pipeline loaded by FastAPI for real-time price predictions." },
    ],
    metrics: [
      { label: "R² Score", value: "0.87" },
      { label: "RMSE", value: "↓ 24%" },
      { label: "Models compared", value: "5" },
      { label: "CV folds", value: "5" },
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "FastAPI", "Matplotlib", "Seaborn"],
    repo: "https://github.com/GouravThakur-in/End-to-End-Airbnb-Price-Prediction",
  accent: "var(--accent-cyan)",
  },
];

export const emotionAIProject: Project = {
  title: "EmotionAI",
  tagline: "Deep Learning Multi-Class Emotion Classifier",
  description:
    "Built an end-to-end deep learning based text emotion classification system that classifies user input into six emotions: joy, sadness, anger, fear, love, and surprise.",
  longDescription:
    "An end-to-end NLP system that detects emotion from raw text using deep learning. The pipeline loads a 20k+ sample Hugging Face dataset, cleans and tokenizes the text, handles class imbalance, and benchmarks RNN, LSTM, GRU and BiGRU architectures. The best BiGRU model reached 92.25% test accuracy. The trained model is served through a FastAPI inference API and consumed by a React frontend for real-time emotion prediction.",
  features: [
    "Hugging Face dataset ingestion (20k+ samples)",
    "EDA, text cleaning and preprocessing",
    "Tokenization and sequence padding",
    "Class imbalance handling",
    "RNN, LSTM, GRU and BiGRU benchmarking",
    "Confusion-matrix based model comparison",
    "FastAPI inference endpoint",
    "React frontend for real-time prediction",
  ],
  pipeline: [
    { step: "Dataset & EDA", detail: "Loaded 20k+ text samples, explored class distribution and cleaned noise." },
    { step: "Text Preprocessing", detail: "Tokenized text, padded sequences and prepared embedding-ready inputs." },
    { step: "Model Benchmarking", detail: "Trained and compared RNN, LSTM, GRU and BiGRU architectures." },
    { step: "Imbalance Handling", detail: "Balanced classes during training to improve minority-emotion recall." },
    { step: "Evaluation", detail: "Compared accuracy, loss and confusion matrices to select the best model." },
    { step: "Serving", detail: "Deployed the BiGRU model behind a FastAPI endpoint for live inference." },
    { step: "Frontend", detail: "Built a React UI that calls the API and displays predicted emotion in real time." },
  ],
  metrics: [
    { label: "Test Accuracy", value: "92.25%" },
    { label: "Text Samples", value: "20k+" },
    { label: "Architectures", value: "4" },
    { label: "Deployment", value: "FastAPI + React" },
  ],
  tech: [
    "Python",
    "TensorFlow",
    "Keras",
    "NLP",
    "RNN",
    "LSTM",
    "GRU",
    "BiGRU",
    "Hugging Face",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "FastAPI",
    "React",
  ],
  repo: "https://github.com/GouravThakur-in/emotiq",
  liveDemo: "https://emotiq-7pen.onrender.com",
  accent: "var(--accent-violet)",
};

export const skinDiseaseProject = {
  title: "Skin Disease Classification",
  category: "Machine Learning / Deep Learning",
  description:
    "An AI-based skin disease classification project that uses deep learning and image processing techniques to classify different types of skin diseases from images. The project includes image preprocessing, exploratory analysis, model training, evaluation, and prediction.",
  tech: [
    "Python",
    "TensorFlow",
    "Keras",
    "CNN",
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Matplotlib",
  ],
  kaggle: "https://www.kaggle.com/",
  repo: "https://github.com/GouravThakur-in/skin-disease-classification",
};

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

// EmailJS wiring — these are publishable client-side identifiers.
export const emailjsConfig = {
  serviceId: "service_xcccyjq",
  templateId: "template_49wq18e",
  publicKey: "kBN0gDNQ5cFBzsyOE",
};
