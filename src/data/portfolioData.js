// ============================================================================
//  PORTFOLIO DATA - SINGLE SOURCE OF TRUTH
// ----------------------------------------------------------------------------
//  This is the ONLY file you need to edit to update your portfolio.
//
//  HOW VISIBILITY WORKS:
//    Every project, skill, experience, and education item has `visible: true`.
//    Set it to `false` and that item disappears from the website completely -
//    it is filtered out BEFORE rendering, so hidden data never reaches the
//    browser UI (it won't show on the page or in the visible DOM).
//
//  HOW TO ADD A NEW PROJECT:
//    Copy any object inside the `projects` array, paste it, and edit the
//    fields. Make sure `category` matches one of the keys in `projectFilters`.
//
//  HOW TO HIDE A PROJECT / SKILL / JOB:
//    Change its `visible` value to false.
//
//  Images use placeholder gradients generated in code (see ProjectCard) -
//  no real image files are required. Swap `image` for a real path later.
// ============================================================================

// ---- Personal / contact info -------------------------------------------------
export const profile = {
  name: "Swati Lukhi",
  // Shown in the hero, rotates through these roles
  roles: [
    "AI & Data Science Analyst",
    "Data Analyst",
    "Machine Learning Engineer",
    "Full-Stack Developer",
  ],
  headline:
    "I build scalable data solutions, machine learning models, and analytics dashboards that transform complex data into actionable business insights.",
  location: "United States",
  email: "swatidl0209@gmail.com",
  phone: "+1 336 488 9253",
  linkedin: "https://www.linkedin.com/in/swati-lukhi-896845266",
  github: "https://github.com/Swatilukhi29",
  resumePath: "Swati_Lukhi_Resume.pdf", // file lives in /public
};

// ---- About section -----------------------------------------------------------
export const about = {
  visible: true,
  // ATS-friendly professional summary
  summary:
    "Data and AI analyst with an M.S. in Data Science and Analytics and hands-on experience building end-to-end data pipelines, machine learning models, and business intelligence dashboards. I specialize in transforming high-volume, unstructured data into trustworthy, decision-ready insights - combining strengths in ETL/ELT, OCR and computer vision, predictive analytics, and full-stack development.",
  highlights: [
    "Architect automated ETL/ELT pipelines using Azure AI Vision, OCR, and Azure OpenAI LLMs for AI-powered data extraction.",
    "Build supervised ML models for classification, recommendation, segmentation, and forecasting with Python and Scikit-Learn.",
    "Develop interactive Tableau and Power BI dashboards that automate KPI tracking and reporting.",
    "Ship data-driven web applications with React, TypeScript, Node.js, and REST/GraphQL APIs.",
  ],
  // Quick-glance stats shown as cards
  stats: [
    { label: "Listings analyzed", value: "123K+" },
    { label: "Graduate GPA", value: "3.90" },
    { label: "Years building", value: "4+" },
    { label: "Core domains", value: "AI · Data · Web" },
  ],
};

// ---- Experience (timeline) ---------------------------------------------------
// Ordered newest → oldest. Set visible:false to hide any role.
export const experience = [
  {
    visible: true,
    role: "AI & Data Science Analyst",
    company: "Wetechforu IT Company",
    project: "GreenAssetIQ - AI Asset Recognition Platform",
    location: "Remote",
    start: "May 2026",
    end: "Present",
    bullets: [
      "Engineered OCR, computer vision, and catalog-matching workflows that improved AI device-identification accuracy, raising data quality and reducing manual review across thousands of asset records.",
      "Architected automated ETL pipelines using Azure AI Vision, OCR, and Azure OpenAI LLMs for AI-powered data extraction, transforming and loading high-volume asset data to accelerate reporting.",
      "Developed Python data validation and transformation logic for make/model/category classification, strengthening data quality and downstream predictive analytics.",
    ],
  },
  {
    visible: true,
    role: "Data & Technology Intern",
    company: "Wetechforu IT Company",
    project: "",
    location: "Remote",
    start: "Jan 2026",
    end: "May 2026",
    bullets: [
      "Analyzed website traffic and SEO performance using Google Analytics and Google Search Console, conducting keyword research, SEO audits, competitor analysis, market research, and campaign performance analysis.",
      "Built SQL queries, processed REST API and CSV data, developed Power BI and Tableau dashboards, and automated reporting workflows to deliver KPI tracking and actionable business insights.",
      "Performed business analysis, data validation, and technical documentation while collaborating on AI, data engineering, digital marketing, and cross-functional projects to improve operational efficiency and decision-making.",
    ],
  },
  {
    visible: true,
    role: "IT Help Desk - Student Assistant",
    company: "SUNY Buffalo State University",
    project: "",
    location: "Buffalo, NY",
    start: "May 2025",
    end: "May 2026",
    bullets: [
      "Resolved first-level technical support across Windows and macOS and triaged tickets in a structured ticketing system, reducing issue-resolution time.",
      "Improved equipment reliability and uptime by diagnosing hardware issues, escalating complex cases, and maintaining structured resolution data for tracking and auditing.",
    ],
  },
  {
    visible: true,
    role: "Web Developer",
    company: "N R Crew",
    project: "",
    location: "Ahmedabad, India",
    start: "Aug 2022",
    end: "Dec 2024",
    bullets: [
      "Engineered data-driven applications with React.js and TypeScript, integrating REST APIs and Node.js services for real-time data extraction, transformation, and exchange.",
      "Delivered client projects including an AI investment platform (RISI), property management app (EBuilding), dairy management tool (Trackhub), and babysitter booking platform (Ankle Patrol).",
    ],
  },
  {
    visible: true,
    role: "Jr. Web Developer",
    company: "SystemSeeders Infotech LLP",
    project: "",
    location: "Ahmedabad, India",
    start: "Jan 2022",
    end: "Apr 2022",
    bullets: [
      "Developed responsive web apps using HTML, CSS, JavaScript, and PHP; contributed to the PedagogicalAura educational platform with interactive learning modules and backend API integration.",
    ],
  },
];

// ---- Skills ------------------------------------------------------------------
// Each category has its own `visible` flag, and each skill has one too.
// Hide a whole group with the category flag, or hide individual skills.
export const skillCategories = [
  {
    visible: true,
    name: "Data & Analytics",
    icon: "BarChart3",
    skills: [
      { name: "Python (Pandas, NumPy)", visible: true },
      { name: "SQL", visible: true },
      { name: "ETL / ELT", visible: true },
      { name: "Data Pipelines", visible: true },
      { name: "Data Warehousing", visible: true },
      { name: "Data Modeling", visible: true },
      { name: "Statistical Analysis", visible: true },
      { name: "Exploratory Data Analysis", visible: true },
      { name: "Feature Engineering", visible: true },
      { name: "Forecasting", visible: true },
      { name: "KPI Tracking", visible: true },
    ],
  },
  {
    visible: true,
    name: "BI & Reporting",
    icon: "PieChart",
    skills: [
      { name: "Tableau", visible: true },
      { name: "Power BI", visible: true },
      { name: "Dashboard Development", visible: true },
      { name: "Data Visualization", visible: true },
      { name: "Reporting Automation", visible: true },
      { name: "Requirements Gathering", visible: true },
      { name: "Stakeholder Collaboration", visible: true },
      { name: "Process Improvement", visible: true },
    ],
  },
  {
    visible: true,
    name: "Databases & Tools",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", visible: true },
      { name: "MySQL", visible: true },
      { name: "REST APIs", visible: true },
      { name: "Sequelize", visible: true },
      { name: "Swagger", visible: true },
      { name: "Git / GitHub", visible: true },
      { name: "Jira", visible: true },
      { name: "VS Code", visible: true },
    ],
  },
  {
    visible: true,
    name: "AI & Cloud",
    icon: "Cloud",
    skills: [
      { name: "Azure OpenAI", visible: true },
      { name: "Azure AI Vision", visible: true },
      { name: "OCR", visible: true },
      { name: "Computer Vision", visible: true },
      { name: "LLM Applications", visible: true },
      { name: "Prompt Engineering", visible: true },
      { name: "Azure Blob Storage", visible: true },
      { name: "AWS S3", visible: true },
    ],
  },
  {
    visible: true,
    name: "Development",
    icon: "Code2",
    skills: [
      { name: "React.js", visible: true },
      { name: "TypeScript", visible: true },
      { name: "JavaScript", visible: true },
      { name: "Node.js", visible: true },
      { name: "Express.js", visible: true },
      { name: "GraphQL", visible: true },
      { name: "HTML5", visible: true },
      { name: "CSS3", visible: true },
    ],
  },
  {
    visible: true,
    name: "Machine Learning",
    icon: "BrainCircuit",
    skills: [
      { name: "Scikit-Learn", visible: true },
      { name: "Supervised Learning", visible: true },
      { name: "Classification", visible: true },
      { name: "Clustering (KMeans)", visible: true },
      { name: "Random Forest", visible: true },
      { name: "Predictive Analytics", visible: true },
      { name: "Model Evaluation", visible: true },
      { name: "NLP / BERT", visible: true },
      { name: "Time Series (ARIMA, Prophet)", visible: true },
    ],
  },
];

// ---- Project filter tabs -----------------------------------------------------
// The `key` must match each project's `category` value.
export const projectFilters = [
  { key: "all", label: "All" },
  { key: "ai-ml", label: "AI / ML" },
  { key: "data-analytics", label: "Data Analytics" },
  { key: "web-development", label: "Web Development" },
  { key: "database", label: "Database" },
  { key: "forecasting", label: "Forecasting" },
];

// ---- Projects ----------------------------------------------------------------
// `category` must be one of the filter keys above.
// `accent` picks the card's gradient: "cyan" | "violet" | "mint".
export const projects = [
  {
    visible: true,
    featured: true,
    title: "AutoGuard ML - AI Vehicle Recommendation System",
    visual: "car",
    category: "ai-ml",
    accent: "cyan",
    shortDescription:
      "End-to-end ML platform that recommends vehicles by safety, fuel economy, emissions, and ownership cost using government data and a weighted scoring model.",
    fullDescription:
      "AutoGuard ML helps buyers choose the best vehicle based on safety, fuel economy, emissions, ownership cost, and overall value. It combines EPA vehicle data, NHTSA safety information, and MarketCheck listings with machine learning models and external REST APIs to generate personalized, explainable recommendations.",
    problem:
      "Buying a vehicle means weighing price, fuel efficiency, emissions, maintenance cost, and safety at once. Traditional search platforms focus on price and specs, making informed decisions hard.",
    methodology:
      "Built a recommendation engine that integrates EPA, NHTSA, and MarketCheck data, applies EDA, data validation, and feature engineering, then scores vehicles with ML classification and regression on a weighted model spanning safety, cost, and fuel efficiency.",
    technologies: [
      "Python", "Scikit-Learn", "Pandas", "NumPy", "Flask",
      "REST APIs", "NHTSA API", "FuelEconomy.gov API", "MarketCheck API",
    ],
    features: [
      "Vehicle recommendation engine with personalized scoring",
      "Feature engineering across safety, cost, and efficiency",
      "ML classification and regression models",
      "Safety and recall integration",
      "Fuel economy analysis",
      "Interactive web application",
    ],
    results: [
      "Processed 49,000+ raw vehicle records",
      "Cleaned dataset to 21,000+ vehicles",
      "Integrated multiple government APIs",
      "Generated intelligent ML-based recommendations",
    ],
    impact:
      "Gives buyers explainable, data-driven recommendations that balance safety, cost, and efficiency instead of price alone.",
    githubLink: "https://github.com/Swatilukhi29/AutoGuardML/",
    demoLink: "",
    dates: "Jan 2026 - May 2026",
  },
  {
    visible: true,
    featured: true,
    title: "Airbnb Investment Analytics Platform",
    visual: "property",
    category: "data-analytics",
    accent: "violet",
    shortDescription:
      "Analyzed 123K+ Airbnb listings with Python, SQL, and Tableau to rank the most profitable markets for real-estate investment.",
    fullDescription:
      "This project analyzes over 123,000 Airbnb listings across multiple countries to identify the most profitable locations for real estate investment. It transforms raw listing data into actionable business insights by evaluating pricing, occupancy, reviews, host performance, and geographic trends through an end-to-end analytics pipeline.",
    problem:
      "Investors struggle to determine which Airbnb markets offer the highest ROI because listing data is scattered across thousands of properties and many factors influence profitability.",
    methodology:
      "Cleaned and preprocessed an 89-feature dataset (missing values, pricing, textual features, dimensionality reduction), performed extensive EDA on pricing, geography, host response, reviews, occupancy, and amenities, then built interactive Tableau dashboards ranking investment opportunities.",
    technologies: [
      "Python", "Pandas", "NumPy", "SQL", "Tableau",
      "Jupyter Notebook", "Data Visualization", "EDA",
    ],
    features: [
      "Large-scale analysis of 123K+ listings",
      "Interactive Tableau dashboards",
      "Investment opportunity ranking",
      "Revenue trend and pricing analysis",
      "Geographic market comparison",
      "Host performance analysis",
    ],
    results: [
      "Analyzed 123,061 listings across 89 features",
      "Identified top countries and markets for investment",
      "Surfaced revenue drivers and pricing patterns",
      "Delivered investor-ready BI dashboards",
    ],
    impact:
      "Enables investors to make informed decisions by identifying high-revenue markets and the factors that drive Airbnb profitability.",
    githubLink: "https://github.com/Swatilukhi29/",
    demoLink: "",
    dates: "Aug 2025 - Dec 2025",
  },
  {
    visible: true,
    featured: true,
    title: "Morth's Landscaping - Business Dashboard",
    visual: "landscape",
    category: "database",
    accent: "mint",
    shortDescription:
      "MySQL relational data model with Node.js services that automates real-time KPI reporting for a landscaping business.",
    fullDescription:
      "A business intelligence dashboard for Morth's Landscaping built on a MySQL relational data model with Node.js services. It automates real-time KPI reporting to reduce manual effort and support day-to-day operational decisions.",
    problem:
      "The business tracked KPIs manually, which was slow, error-prone, and made operational decisions harder to support with current data.",
    methodology:
      "Designed a normalized MySQL relational schema, built Node.js services to query and aggregate operational data, and automated KPI calculations surfaced through a reporting dashboard.",
    technologies: ["MySQL", "Node.js", "Express.js", "SQL", "REST APIs", "Data Modeling"],
    features: [
      "Normalized relational data model",
      "Automated real-time KPI reporting",
      "Node.js service layer",
      "Operational decision support",
    ],
    results: [
      "Reduced manual reporting effort",
      "Delivered real-time operational KPIs",
      "Supported data-driven decisions",
    ],
    impact:
      "Replaced manual tracking with automated, real-time reporting that supports faster operational decisions.",
    githubLink: "https://github.com/Swatilukhi29/",
    demoLink: "",
    dates: "Jan 2025 - May 2025",
  },
  {
    visible: true,
    featured: false,
    title: "Customer Segmentation & Subscription Prediction",
    visual: "segments",
    category: "ai-ml",
    accent: "violet",
    shortDescription:
      "ML solution that segments customers into behavioral groups and predicts subscription likelihood from e-commerce data (~85% accuracy).",
    fullDescription:
      "A machine learning solution that segments customers into behavioral groups and predicts subscription likelihood using e-commerce purchasing data, enabling personalized marketing instead of one-size-fits-all campaigns.",
    problem:
      "Businesses often apply identical marketing to all customers, leading to low retention, poor targeting, and inefficient spend.",
    methodology:
      "Engineered 19 behavioral features, applied KMeans clustering to segment customers, and trained a Random Forest classifier to predict subscription enrollment, then translated segments into marketing recommendations.",
    technologies: [
      "Python", "Pandas", "NumPy", "Scikit-Learn",
      "KMeans Clustering", "Random Forest", "Matplotlib", "Seaborn",
    ],
    features: [
      "Customer segmentation",
      "Subscription prediction",
      "Feature engineering",
      "Behavioral analysis",
      "Business recommendations",
    ],
    results: [
      "Processed 3,800+ customer records",
      "Engineered 19 behavioral features",
      "Identified four customer segments",
      "Achieved ~85% prediction accuracy",
    ],
    impact:
      "Enables personalized marketing by revealing distinct customer segments and predicting who is likely to subscribe.",
    githubLink: "https://github.com/Swatilukhi29/",
    demoLink: "",
    dates: "2025",
  },
  {
    visible: true,
    featured: false,
    title: "Tesla Stock Time Series Forecasting",
    visual: "timeseries",
    category: "forecasting",
    accent: "cyan",
    shortDescription:
      "End-to-end forecasting of Tesla stock prices comparing ARIMA, SARIMA, and Prophet across 1,835 trading days.",
    fullDescription:
      "An end-to-end time series forecasting project that predicts Tesla stock price trends by developing and comparing multiple statistical forecasting models on historical market data.",
    problem:
      "Financial markets are highly volatile, making accurate stock forecasting difficult. Investors need analytical methods to better understand likely future price movements.",
    methodology:
      "Engineered time features, analyzed trends, moving averages, and volatility, then developed and compared ARIMA, SARIMA, and Facebook Prophet models, evaluating them with RMSE, MAE, and MAPE.",
    technologies: [
      "Python", "Pandas", "NumPy", "Matplotlib",
      "Statsmodels", "Prophet", "Scikit-Learn",
    ],
    features: [
      "Time series forecasting",
      "Trend and volatility analysis",
      "Moving averages",
      "Model comparison (ARIMA / SARIMA / Prophet)",
      "Forecast visualization",
    ],
    results: [
      "Analyzed 1,835 trading days of data",
      "Generated 60-day future forecasts",
      "Compared three forecasting models",
      "Evaluated accuracy via RMSE, MAE, MAPE",
    ],
    impact:
      "Demonstrates a rigorous, comparative approach to forecasting volatile financial time series.",
    githubLink: "https://github.com/Swatilukhi29/",
    demoLink: "",
    dates: "2025",
  },
  {
    visible: true,
    featured: false,
    title: "Sentiment Analysis - Classical ML vs. Transformers",
    visual: "sentiment",
    category: "ai-ml",
    accent: "mint",
    shortDescription:
      "Compared Logistic Regression, Naive Bayes, and BERT for sentiment classification on ~10,000 IMDB movie reviews.",
    fullDescription:
      "Developed and compared traditional machine learning algorithms with transformer-based deep learning models for sentiment classification of movie reviews, highlighting the trade-offs between classical ML and modern NLP.",
    problem:
      "Automatically identifying sentiment from text is essential for understanding opinions, improving products, and supporting business decisions.",
    methodology:
      "Preprocessed text and extracted TF-IDF features for classical models (Logistic Regression, Naive Bayes), fine-tuned a BERT transformer, then compared accuracy and performed error analysis across approaches.",
    technologies: [
      "Python", "Scikit-Learn", "Hugging Face Transformers",
      "BERT", "Pandas", "NumPy", "TF-IDF",
    ],
    features: [
      "Text preprocessing",
      "TF-IDF feature extraction",
      "Classical ML classification",
      "Transformer-based NLP",
      "Model comparison and error analysis",
    ],
    results: [
      "Processed ~10,000 IMDB reviews",
      "Compared classical ML and transformer models",
      "Evaluated accuracy and performance",
      "Identified strengths and weaknesses of each approach",
    ],
    impact:
      "Shows when lightweight classical models suffice and when transformers add value for text classification.",
    githubLink: "https://github.com/Swatilukhi29/",
    demoLink: "",
    dates: "2025",
  },
  {
    visible: true,
    featured: false,
    title: "Parking Management System",
    visual: "parking",
    category: "database",
    accent: "cyan",
    shortDescription:
      "PostgreSQL relational database for a parking system handling slot allocation, entry/exit tracking, and automated billing.",
    fullDescription:
      "A relational database system for managing a parking facility, designed in PostgreSQL to handle slot allocation, entry and exit tracking, and automated billing through well-structured schema and constraints.",
    problem:
      "Parking operations need reliable tracking of slots, vehicle entry/exit, and billing - hard to manage without a structured relational model.",
    methodology:
      "Designed a normalized PostgreSQL schema with tables and relationships for slots, vehicles, and transactions, enforcing integrity constraints and automating billing logic from entry/exit timestamps.",
    technologies: ["PostgreSQL", "SQL", "Relational Databases", "Data Modeling"],
    features: [
      "Slot allocation management",
      "Entry / exit tracking",
      "Automated billing",
      "Normalized relational schema",
    ],
    results: [
      "Reliable slot and transaction tracking",
      "Automated billing from entry/exit data",
      "Clean, normalized database design",
    ],
    impact:
      "Provides a structured, reliable backend for parking operations and automated billing.",
    githubLink: "https://github.com/Swatilukhi29/",
    demoLink: "",
    dates: "2024",
  },
];

// ---- Education ---------------------------------------------------------------
export const education = [
  {
    visible: true,
    degree: "M.S. in Data Science and Analytics",
    school: "SUNY Buffalo State University",
    location: "Buffalo, NY",
    start: "Jan 2025",
    end: "May 2026",
    gpa: "3.90 / 4.0",
  },
  {
    visible: true,
    degree: "B.E. in Information Technology",
    school: "Sal College of Engineering (GTU)",
    location: "Ahmedabad, India",
    start: "Aug 2018",
    end: "Apr 2022",
    gpa: "3.18 / 4.0",
  },
];

// ---- Section visibility (master switches) -----------------------------------
// Flip any of these to false to hide an entire section + its nav link.
export const sections = {
  about: true,
  experience: true,
  skills: true,
  projects: true,
  education: true,
  contact: true,
};
