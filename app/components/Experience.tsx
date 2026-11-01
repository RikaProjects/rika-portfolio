"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaChartLine,
  FaBrain,
  FaDatabase,
  FaGraduationCap,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";

const experiences = [
  {
    company: "PT Pos Indonesia (Persero)",
    position: "Growth Hacking Intern",
    period: "Mar 2026 – Jun 2026",
    type: "Professional Internship",
    icon: FaBriefcase,
    color: "purple",
    description:
      "Contributed to operational data analysis, Executive Dashboard development, and business reporting initiatives within the Corporate Performance function.",
    responsibilities: [
      "Processed and validated more than 4,000 post office master records across six regional offices, including LPU and Non-LPU classification and profitability analysis.",
      "Identified and mapped data requirements for four Executive Dashboard panels: Courier Performance, Logistics, Financial Services, and Complaints (CCH).",
      "Contributed to Executive Dashboard UI design and prepared its User Manual (Juknis).",
      "Analyzed sentiment and topics from 118 Pospay application reviews using IndoBERT and BERTopic.",
      "Coordinated with stakeholders and documented discussions through Minutes of Meeting (MoM).",
      "Analyzed requirements and developed SIMARPOS, a web-based Management Reporting System, as a final academic project in collaboration with PT Pos Indonesia.",
    ],
    technologies: [
      "Microsoft Excel",
      "Business Analysis",
      "Data Mapping",
      "Data Cleansing",
      "IndoBERT",
      "BERTopic",
      "Python",
      "Django",
      "PostgreSQL",
    ],
  },
  {
    company: "ID/X Partners × Rakamin Academy",
    position: "Project-Based Virtual Intern – Data Scientist",
    period: "Dec 2025",
    type: "Virtual Internship",
    icon: FaChartLine,
    color: "blue",
    description:
      "Developed a credit scoring model to predict loan eligibility and translate analytical findings into business recommendations.",
    responsibilities: [
      "Performed data cleaning and exploratory data analysis (EDA) to understand the dataset and identify relevant patterns.",
      "Developed a credit scoring model using Logistic Regression to predict loan eligibility.",
      "Prepared business recommendations based on credit risk analysis to help reduce potential loan defaults.",
      "Completed the project with a final score of 87.26/100 (Excellent).",
    ],
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Logistic Regression",
      "EDA",
      "Credit Scoring",
    ],
  },
  {
    company: "Home Credit Indonesia × Rakamin Academy",
    position: "Project-Based Virtual Intern – Data Scientist",
    period: "Oct 2025 – Nov 2025",
    type: "Virtual Internship",
    icon: FaDatabase,
    color: "indigo",
    description:
      "Worked on a machine learning project focused on credit risk prediction and identifying patterns associated with potential loan defaults.",
    responsibilities: [
      "Performed data preprocessing and exploratory data analysis to understand customer credit data.",
      "Applied feature engineering and developed machine learning models for credit risk prediction.",
      "Evaluated model performance and analyzed patterns associated with credit defaults.",
      "Visualized analytical findings to communicate credit risk insights to business stakeholders.",
      "Completed the project with a final score of 87.35/100 (Excellent).",
    ],
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Feature Engineering",
      "EDA",
      "Data Visualization",
    ],
  },
];

const training = {
  title: "Machine Learning Engineer Graduate",
  organization: "Coding Camp powered by DBS Foundation",
  period: "Feb 2025 – Jul 2025",
  description:
    "Completed an intensive six-month program covering AI, SQL, Python, Data Analysis, Machine Learning, and Deep Learning, with end-to-end project experience.",
  project:
    "SAFANA (System Analytics Fauna Nusantara): Contributed as a Machine Learning Engineer in a six-member team, developing object detection models using YOLOv8 and RetinaNet ResNet-50-FPN for 11 endangered Indonesian wildlife species.",
  technologies: [
    "Python",
    "TensorFlow",
    "YOLOv8",
    "RetinaNet",
    "Roboflow",
    "Computer Vision",
    "Git",
  ],
};

const achievements = [
  {
    icon: FaLaptopCode,
    title: "SIMARPOS",
    subtitle: "Web-Based Management Reporting System",
    description:
      "Developed a Django and PostgreSQL-based reporting system featuring automated PowerPoint report generation, dashboard visualization, approval workflows, and Telegram Bot notifications.",
    highlight: "Published in a SINTA 5-accredited journal",
    color: "purple",
  },
  {
    icon: FaBrain,
    title: "SAFANA",
    subtitle: "Wildlife Object Detection",
    description:
      "Developed object detection models for 11 endangered Indonesian wildlife species using YOLOv8 and RetinaNet ResNet-50-FPN as part of a six-member capstone team.",
    highlight: "11 wildlife species",
    color: "green",
  },
  {
    icon: FaChartLine,
    title: "Credit Scoring Project",
    subtitle: "ID/X Partners × Rakamin Academy",
    description:
      "Built a Logistic Regression credit scoring model supported by data cleaning, exploratory data analysis, and business recommendations.",
    highlight: "87.26/100 · Excellent",
    color: "blue",
  },
  {
    icon: FaAward,
    title: "Credit Risk Prediction",
    subtitle: "Home Credit Indonesia × Rakamin Academy",
    description:
      "Developed and evaluated machine learning models through data preprocessing, feature engineering, exploratory analysis, and risk visualization.",
    highlight: "87.35/100 · Excellent",
    color: "orange",
  },
];

const colorStyles: Record<
  string,
  {
    iconBg: string;
    icon: string;
    border: string;
    highlight: string;
  }
> = {
  purple: {
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    icon: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
    highlight: "text-purple-700 dark:text-purple-300",
  },
  blue: {
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    icon: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
    highlight: "text-blue-700 dark:text-blue-300",
  },
  green: {
    iconBg: "bg-green-100 dark:bg-green-900/40",
    icon: "text-green-600 dark:text-green-400",
    border: "border-green-200 dark:border-green-800",
    highlight: "text-green-700 dark:text-green-300",
  },
  indigo: {
    iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
    icon: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-200 dark:border-indigo-800",
    highlight: "text-indigo-700 dark:text-indigo-300",
  },
  orange: {
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    icon: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800",
    highlight: "text-orange-700 dark:text-orange-300",
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-gray-50 py-24 dark:bg-neutral-950 sm:py-28"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
            Professional Experience
          </span>

          <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            My Professional{" "}
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
            My experience across professional internships and
            project-based programs has strengthened my ability to analyze
            business problems, work with data, and develop technology-driven
            solutions.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 top-0 hidden w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-indigo-500 lg:block"
          />

          <div className="space-y-10 lg:space-y-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative grid items-start gap-6 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Timeline Marker */}
                  <div className="absolute left-0 top-8 z-10 hidden h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-purple-500 bg-white text-lg text-purple-600 shadow-lg dark:bg-neutral-900 lg:flex">
                    <Icon />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`lg:col-span-1 ${
                      index % 2 === 0
                        ? "lg:col-start-1"
                        : "lg:col-start-2"
                    }`}
                  >
                    <div className="group rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900/80 sm:p-8">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400">
                          {exp.type}
                        </span>

                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {exp.period}
                        </span>
                      </div>

                      <div className="mt-5 flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-xl text-purple-600 dark:bg-purple-900/40 dark:text-purple-400 lg:hidden">
                          <Icon />
                        </div>

                        <div>
                          <h3 className="text-xl font-bold leading-snug text-gray-900 dark:text-white sm:text-2xl">
                            {exp.company}
                          </h3>

                          <p className="mt-2 font-medium text-purple-600 dark:text-purple-400">
                            {exp.position}
                          </p>
                        </div>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                        {exp.description}
                      </p>

                      <div className="mt-6">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                          Key Responsibilities
                        </h4>

                        <ul className="mt-3 space-y-3">
                          {exp.responsibilities.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-400"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 border-t border-gray-100 pt-5 dark:border-neutral-800">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                          Skills & Tools
                        </h4>

                        <div className="mt-3 flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Professional Development */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mb-10 text-center">
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-5 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              Professional Development
            </span>

            <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Training & Learning Experience
            </h3>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900/80 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-2xl text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
                <FaGraduationCap />
              </div>

              <div className="flex-1">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {training.title}
                    </h4>

                    <p className="mt-1 font-medium text-indigo-600 dark:text-indigo-400">
                      {training.organization}
                    </p>
                  </div>

                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {training.period}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
                  {training.description}
                </p>

                <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50/70 p-5 dark:border-indigo-900/60 dark:bg-indigo-950/20">
                  <h5 className="font-bold text-gray-900 dark:text-white">
                    Capstone Project: SAFANA
                  </h5>

                  <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {training.project}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {training.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Selected Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mb-10 text-center">
            <span className="inline-flex items-center rounded-full bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
              Selected Achievements
            </span>

            <h3 className="mt-5 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Projects & Measurable Outcomes
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
              Selected outcomes from my academic, industry-based, and
              project-based experiences.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((item, index) => {
              const styles = colorStyles[item.color];
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className={`rounded-2xl border ${styles.border} bg-white/90 p-6 shadow-sm transition-shadow hover:shadow-lg dark:bg-neutral-900/80`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}
                    >
                      <Icon className={`text-xl ${styles.icon}`} />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>

                  <div className="mt-5 border-t border-gray-100 pt-4 dark:border-neutral-800">
                    <span className={`text-sm font-bold ${styles.highlight}`}>
                      {item.highlight}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}