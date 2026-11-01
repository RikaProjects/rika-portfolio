"use client";

import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCode,
  FaBrain,
  FaGlobe,
  FaDatabase,
  FaBookOpen,
  FaDiagramProject,
} from "react-icons/fa6";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  icon: "system" | "ai" | "web" | "data" | "book" | "pipeline";
  gradient: string;
  githubUrl?: string;
  demoUrl?: string;
  documentationUrl?: string;
  featured?: boolean;
  highlight?: string;
};

const projects: Project[] = [
  {
    title: "SIMARPOS — Management Report Information System",
    description:
      "A web-based Management Report Information System developed for PT Pos Indonesia as a final academic project. The system streamlines management reporting by transforming Excel data into PowerPoint reports, providing performance dashboards, and supporting a structured approval workflow.",
    tags: [
      "Python",
      "Django",
      "PostgreSQL",
      "Bootstrap",
      "BPMN",
      "UML",
    ],
    category: "Information System",
    icon: "system",
    gradient: "from-indigo-500 to-blue-700",
    githubUrl: "https://github.com/RikaProjects/simarpos",
    documentationUrl:
      "https://drive.google.com/drive/folders/1znjHYr3oV4rSVEVivMgpIUUVUgPZDhYq?usp=sharing",
    featured: true,
    highlight: "Published in a SINTA 5 Accredited Journal",
  },
  {
    title: "SaFaNa — System Analytics Fauna Nusantara",
    description:
      "A machine learning-based wildlife detection platform designed to identify 11 endangered Indonesian species. The project integrates object detection models with a web application featuring wildlife distribution mapping and recommendations for nearby conservation agencies.",
    tags: [
      "Python",
      "YOLOv8",
      "RetinaNet",
      "TensorFlow",
      "Roboflow",
      "Machine Learning",
    ],
    category: "Machine Learning",
    icon: "ai",
    gradient: "from-emerald-500 to-teal-700",
    githubUrl: "https://github.com/Tim-Capstone-CC25-CF161",
    demoUrl:
      "https://tim-capstone-cc25-cf161.github.io/frontend-safana-deteksi-hewan-langka/#/",
    documentationUrl:
      "https://drive.google.com/drive/folders/1sqjKOjbZ1Wxfca03zuM1r-CY5B3m-rcT?usp=sharing",
    featured: true,
    highlight: "Detects 11 Endangered Indonesian Species",
  },
  {
    title: "SIPOSPEDA — Stock & Sales Information System",
    description:
      "An inventory and sales management system developed for CV Sukahati Pratama to improve stock monitoring and sales administration. The application replaces manual processes with centralized data management and a dashboard for business monitoring.",
    tags: [
      "PHP",
      "CodeIgniter 4",
      "MySQL",
      "Bootstrap",
      "AdminLTE",
    ],
    category: "Web Development",
    icon: "web",
    gradient: "from-orange-500 to-red-600",
    githubUrl: "https://github.com/RikaProjects/SIPOSPEDA-PROYEK",
    documentationUrl:
      "https://drive.google.com/drive/folders/12miJLEK6R4v0O7ENFCNN41gg7VcclDOP?usp=sharing",
    highlight: "Inventory & Sales Management",
  },
  {
    title: "Pospay Sentiment & Topic Analysis",
    description:
      "A natural language processing project analyzing 118 Google Play reviews of Pospay. IndoBERT was used to classify positive, neutral, and negative sentiments, while BERTopic identified recurring customer feedback topics. The results were also validated against user ratings.",
    tags: ["Python", "IndoBERT", "BERTopic", "NLP", "Pandas"],
    category: "Data Science",
    icon: "data",
    gradient: "from-pink-500 to-purple-700",
    githubUrl:
      "https://github.com/RikaProjects/Analisis_Sentimen_Pospay",
    highlight: "118 Google Play Reviews Analyzed",
  },
  {
    title: "Book Recommendation System",
    description:
      "A recommendation system built using the GoodBooks-10k dataset, containing more than 10,000 books and approximately 980,000 ratings. The project applies content-based filtering and collaborative filtering to generate personalized book recommendations.",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Scikit-surprise",
      "Machine Learning",
    ],
    category: "Machine Learning",
    icon: "book",
    gradient: "from-amber-500 to-orange-700",
    githubUrl:
      "https://github.com/RikaProjects/rekomendasi-buku-machine-learning",
    highlight: "10K+ Books & 980K+ Ratings",
  },
  {
    title: "E-commerce Data Analysis",
    description:
      "An exploratory data analysis project focused on identifying business insights from e-commerce transaction data. The analysis covers sales performance, customer behavior, and product trends, with interactive visualizations presented through a Streamlit dashboard.",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
    category: "Data Analytics",
    icon: "data",
    gradient: "from-cyan-500 to-blue-700",
    githubUrl: "https://github.com/RikaProjects/Proyek-Analisis-Data",
    demoUrl: "https://dqei4s7x3efcqfdzrvr7944.streamlit.app/",
    highlight: "Interactive Data Analysis Dashboard",
  },
  {
    title: "ETL Pipeline — Fashion Studio",
    description:
      "An ETL pipeline project that collects fashion product data through web scraping, processes and cleans the extracted information, and prepares structured datasets for further analysis and storage.",
    tags: ["Python", "BeautifulSoup", "Pandas", "ETL", "Data Pipeline"],
    category: "Data Engineering",
    icon: "pipeline",
    gradient: "from-violet-500 to-purple-700",
    githubUrl: "https://github.com/RikaProjects/etl-fashion-studio",
    highlight: "End-to-End ETL Workflow",
  },
  {
    title: "Credit Risk Analysis — ID/X Partners",
    description:
      "A credit risk analysis project completed through the ID/X Partners and Rakamin Academy virtual internship. The project involved data cleaning, exploratory data analysis, Logistic Regression modeling, and business recommendations to support credit risk assessment.",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "Data Science",
    ],
    category: "Data Science",
    icon: "data",
    gradient: "from-rose-500 to-red-700",
    githubUrl:
      "https://github.com/RikaProjects/IDX-Partners-Data-Scientist-Project",
    highlight: "87.26/100 — Excellent Performance",
  },
];

const iconMap = {
  system: FaDiagramProject,
  ai: FaBrain,
  web: FaGlobe,
  data: FaDatabase,
  book: FaBookOpen,
  pipeline: FaCode,
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-24 text-gray-900 transition-colors duration-300 dark:bg-[#080b16] dark:text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
            MY WORK
          </span>

          <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Featured <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>

          <p className="text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            A selection of projects showcasing my experience in information
            systems, data analytics, machine learning, and web development.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon];

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-xl dark:border-white/10 dark:bg-[#101626] dark:hover:border-indigo-400/40"
              >
                {/* Project Banner */}
                <div
                  className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-black/10" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-4xl text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </div>

                  {project.featured && (
                    <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      Featured
                    </span>
                  )}

                  <span className="absolute bottom-4 left-5 text-sm font-semibold tracking-wide text-white/90">
                    {project.category}
                  </span>
                </div>

                {/* Project Details */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                    {project.title}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <div className="mb-5 rounded-lg border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-300">
                      {project.highlight}
                    </div>
                  )}

                  {/* Technology Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="mt-auto flex flex-wrap gap-3 border-t border-gray-100 pt-5 dark:border-white/10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-white/10 dark:hover:bg-indigo-500"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-white/10 dark:text-gray-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                      >
                        Live Demo
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </a>
                    )}

                    {project.documentationUrl && (
                      <a
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600 dark:border-white/10 dark:text-gray-200 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
                      >
                        Documentation
                        <FaArrowUpRightFromSquare className="text-xs" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-5 text-gray-600 dark:text-gray-400">
            Interested in exploring more of my work?
          </p>

          <a
            href="https://github.com/RikaProjects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:-translate-y-1 hover:bg-indigo-700"
          >
            <FaGithub className="text-xl" />
            Explore My GitHub
            <FaArrowUpRightFromSquare className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}