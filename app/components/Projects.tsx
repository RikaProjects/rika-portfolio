"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "SIMARPOS — Management Report Information System",
    description:
      "A web-based management reporting system developed for PT Pos Indonesia (Persero). The system supports data validation, reporting workflows, approval processes, and management report preparation.",
    image: "/Images/project.jpg",
    tags: ["Python", "Django", "PostgreSQL", "System Analysis"],
    githubUrl: "https://github.com/RikaProjects/simarpos",
    documentationUrl:
      "https://drive.google.com/drive/folders/1znjHYr3oV4rSVEVivMgpIUUVUgPZDhYq?usp=sharing",
    color: "from-orange-500 to-purple-600",
    featured: true,
    category: "Information System",
  },
  {
    title: "SaFaNa — System Analytics Fauna Nusantara",
    description:
      "An AI-powered wildlife detection platform designed to identify Indonesian wildlife from images. Developed as a capstone project during Coding Camp by DBS Foundation.",
    image: "/Images/project.jpg",
    tags: ["Python", "TensorFlow", "Roboflow", "Computer Vision"],
    demoUrl:
      "https://tim-capstone-cc25-cf161.github.io/frontend-safana-deteksi-hewan-langka/#/",
    githubUrl: "https://github.com/Tim-Capstone-CC25-CF161",
    documentationUrl:
      "https://drive.google.com/drive/folders/1sqjKOjbZ1Wxfca03zuM1r-CY5B3m-rcT?usp=sharing",
    color: "from-blue-500 to-indigo-500",
    featured: true,
    category: "Machine Learning",
  },
  {
    title: "SIPOSPEDA",
    description:
      "A web-based information system for managing chicken meat inventory and sales. Developed to support stock monitoring and sales transaction management.",
    image: "/Images/project.jpg",
    tags: ["PHP", "CodeIgniter 4", "MySQL", "AdminLTE"],
    githubUrl: "https://github.com/RikaProjects/SIPOSPEDA-PROYEK",
    documentationUrl:
      "https://drive.google.com/drive/folders/12miJLEK6R4v0O7ENFCNN41gg7VcclDOP?usp=sharing",
    color: "from-cyan-500 to-blue-600",
    category: "Web Development",
  },
  {
    title: "ETL Pipeline — Fashion Studio",
    description:
      "An automated ETL pipeline that extracts e-commerce product data, processes and cleans the collected information, and prepares it for further analysis.",
    image: "/Images/project.jpg",
    tags: ["Python", "BeautifulSoup", "Pandas", "gspread"],
    githubUrl: "https://github.com/RikaProjects/etl-fashion-studio",
    color: "from-emerald-500 to-teal-500",
    category: "Data Engineering",
  },
  {
    title: "E-commerce Data Analysis",
    description:
      "An exploratory data analysis project examining product categories, customer review scores, and monthly order trends, presented through an interactive Streamlit application.",
    image: "/Images/project.jpg",
    tags: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    demoUrl: "https://dqei4s7x3efcqfdzrvr7944.streamlit.app/",
    githubUrl: "https://github.com/RikaProjects/Proyek-Analisis-Data",
    color: "from-purple-500 to-pink-500",
    category: "Data Analytics",
  },
  {
    title: "Shopee Review Sentiment Analysis",
    description:
      "A natural language processing project that analyzes Shopee product reviews using machine learning techniques to classify sentiment and explore customer opinions.",
    image: "/Images/project.jpg",
    tags: ["Python", "Pandas", "Scikit-learn", "TensorFlow"],
    githubUrl:
      "https://github.com/RikaProjects/Proyek_Analisis_Sentimen",
    color: "from-pink-500 to-rose-500",
    category: "Data Science",
  },
  {
    title: "Animal Image Classification",
    description:
      "An image classification project that uses deep learning to categorize animal images, including dogs, cats, and wildlife.",
    image: "/Images/project.jpg",
    tags: ["Python", "TensorFlow", "Keras", "NumPy"],
    githubUrl: "https://github.com/RikaProjects/Klasifikasi_Gambar",
    color: "from-violet-500 to-purple-600",
    category: "Deep Learning",
  },
  {
    title: "Book Recommendation System — GoodBooks-10k",
    description:
      "A recommendation system that explores book preferences and generates personalized recommendations using content-based and collaborative filtering approaches.",
    image: "/Images/project.jpg",
    tags: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Recommendation Systems",
    ],
    githubUrl:
      "https://github.com/RikaProjects/rekomendasi-buku-machine-learning",
    color: "from-emerald-500 to-teal-500",
    category: "Machine Learning",
  },
  {
    title: "Credit Risk Prediction — ID/X Partners",
    description:
      "A data science project involving exploratory data analysis and classification techniques to analyze credit risk in lending-related data.",
    image: "/Images/project.jpg",
    tags: ["Python", "Pandas", "Scikit-learn", "Classification"],
    githubUrl:
      "https://github.com/RikaProjects/IDX-Partners-Data-Scientist-Project",
    color: "from-teal-500 to-emerald-600",
    category: "Data Science",
  },
  {
    title: "Credit Scoring Model — Home Credit Indonesia",
    description:
      "A machine learning project that applies logistic regression to credit scoring and explores factors relevant to credit risk assessment.",
    image: "/Images/project.jpg",
    tags: [
      "Python",
      "Logistic Regression",
      "Machine Learning",
      "Risk Analysis",
    ],
    githubUrl:
      "https://github.com/RikaProjects/home-credit-risk-analysis",
    color: "from-green-500 to-teal-500",
    category: "Machine Learning",
  },
  {
    title: "BMLP Final Project — Classification & Clustering",
    description:
      "A machine learning project applying classification and clustering techniques to bank transaction data, including dimensionality reduction and pattern exploration.",
    image: "/Images/project.jpg",
    tags: ["Python", "Scikit-learn", "PCA", "K-Means", "Decision Tree"],
    githubUrl: "https://github.com/RikaProjects/bmlp-final-project",
    color: "from-blue-500 to-indigo-500",
    category: "Machine Learning",
  },
  {
    title: "Tebak Angka Game",
    description:
      "A number guessing game built as a personal project to practice React, JavaScript, and Tailwind CSS while developing interactive user interfaces.",
    image: "/Images/project.jpg",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    demoUrl: "https://tebak-angka-game.vercel.app/",
    githubUrl: "https://github.com/RikaProjects/tebak-angka-game",
    color: "from-yellow-400 to-orange-500",
    category: "Web Development",
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function DocumentationIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M7 3.75h7l4.25 4.25v12.25H7A2.25 2.25 0 014.75 18V6A2.25 2.25 0 017 3.75Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M14 3.75V8h4.25M8.5 12h5.5M8.5 15.5h5.5"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-20 dark:bg-black"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-purple-200 bg-purple-50 px-4 py-1.5 text-sm font-medium text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300">
            My Portfolio
          </span>

          <h2 className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent dark:from-purple-400 dark:to-indigo-400 lg:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            A selection of projects showcasing my experience in information
            systems, web development, data analytics, and machine learning.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.08,
              }}
              className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900/70 ${
                project.featured
                  ? "border-purple-300/80 dark:border-purple-500/40"
                  : "border-gray-200 dark:border-gray-800"
              }`}
            >
              {/* Project image */}
              <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Category and featured labels */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                      Featured
                    </span>
                  )}
                </div>

                {/* Technology tags */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/20 bg-black/40 px-2.5 py-1 text-xs text-white backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  {project.title}
                </h3>

                <p className="mb-6 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                {/* Project links */}
                {(project.demoUrl ||
                  project.githubUrl ||
                  project.documentationUrl) && (
                  <div className="mt-auto flex flex-wrap gap-3 border-t border-gray-100 pt-5 dark:border-gray-800">
                    {project.demoUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo of ${project.title}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-purple-600 px-3 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-500/20 transition-colors hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                      >
                        Live Demo
                        <ExternalLinkIcon />
                      </motion.a>
                    )}

                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code for ${project.title} on GitHub`}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-purple-500/50 dark:hover:bg-gray-700"
                      >
                        <GitHubIcon />
                        View Code
                      </motion.a>
                    )}

                    {project.documentationUrl && (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open project documentation for ${project.title}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-purple-200 bg-purple-50 px-3 py-2.5 text-sm font-semibold text-purple-700 transition-colors hover:border-purple-400 hover:bg-purple-100 dark:border-purple-500/30 dark:bg-purple-500/10 dark:text-purple-300 dark:hover:bg-purple-500/20"
                      >
                        <DocumentationIcon />
                        Project Documentation
                        <ExternalLinkIcon />
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="mb-5 text-gray-600 dark:text-gray-300">
            Interested in exploring more of my work?
          </p>

          <a
            href="https://github.com/RikaProjects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition-all hover:border-purple-500 hover:bg-purple-50 hover:text-purple-700 dark:border-gray-700 dark:text-white dark:hover:border-purple-500 dark:hover:bg-purple-500/10 dark:hover:text-purple-300"
          >
            <GitHubIcon />
            Explore My GitHub
            <ExternalLinkIcon />
          </a>
        </motion.div>
      </div>
    </section>
  );
}