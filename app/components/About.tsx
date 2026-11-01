"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaProjectDiagram,
  FaDatabase,
  FaCode,
  FaTools,
} from "react-icons/fa";

const experiences = [
  {
    number: "01",
    title: "Operational Data Analysis",
    description:
      "Performed data matching, mapping, cleansing, and validation of more than 4,000 post office master records across six regional offices using Microsoft Excel. The work included LPU and Non-LPU classification and profitability analysis.",
  },
  {
    number: "02",
    title: "Executive Dashboard",
    description:
      "Identified and mapped reporting requirements for four main dashboard panels: Courier Performance, Logistics, Financial Services, and Complaints (CCH). Contributed to dashboard UI design and the presentation of performance information, including transactions, revenue, targets, growth, SLA, and regional performance.",
  },
  {
    number: "03",
    title: "Sentiment & Topic Analysis",
    description:
      "Analyzed sentiment and topics from 118 Pospay application reviews using IndoBERT and BERTopic, with sentiment results validated against user ratings.",
  },
  {
    number: "04",
    title: "Documentation & Coordination",
    description:
      "Prepared the Executive Dashboard User Manual (Juknis), coordinated with relevant stakeholders, and documented discussions and requirements through Minutes of Meeting (MoM).",
  },
];

const skillGroups = [
  {
    icon: FaProjectDiagram,
    title: "System & Business Analysis",
    description:
      "Analyzing business needs, modeling processes, and documenting system requirements.",
    skills: [
      "PIECES Framework",
      "KANO Model",
      "5 Whys",
      "Ishikawa Diagram",
      "Porter's Value Chain",
      "BPMN",
      "UML",
      "Use Case Diagram",
      "Requirement Gathering",
      "Technical Documentation",
    ],
  },
  {
    icon: FaDatabase,
    title: "Data Analytics & Machine Learning",
    description:
      "Preparing, exploring, analyzing, and modeling data to generate meaningful insights.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "YOLOv8",
      "EDA",
      "Data Cleansing",
      "Data Mapping",
      "IndoBERT",
      "BERTopic",
      "Looker Studio",
    ],
  },
  {
    icon: FaCode,
    title: "Programming & Databases",
    description:
      "Developing web applications and working with relational database systems.",
    skills: [
      "Python",
      "PHP",
      "JavaScript",
      "Django",
      "CodeIgniter 4",
      "PostgreSQL",
      "MySQL",
      "Oracle Database",
    ],
  },
  {
    icon: FaTools,
    title: "Tools & Platforms",
    description:
      "Using development, modeling, testing, design, and productivity tools.",
    skills: [
      "Enterprise Architect",
      "Microsoft Visio",
      "Figma",
      "Balsamiq",
      "PowerDesigner",
      "Bizagi Modeler",
      "Git",
      "GitHub",
      "SAP ERP",
      "Postman",
      "Katalon Studio",
      "pgAdmin",
      "Google Colab",
      "VS Code",
      "Microsoft Project",
      "Microsoft Excel",
      "Microsoft PowerPoint",
      "Google Workspace",
    ],
  },
];

const areasOfInterest = [
  "System Analysis",
  "Business Analysis",
  "Data Analytics",
  "Machine Learning",
  "Web Development",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 dark:bg-black sm:py-28"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full bg-purple-500/10 px-5 py-2 text-sm font-semibold text-purple-600 dark:text-purple-400">
            About Me
          </span>

          <h2 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Bridging Business Needs and{" "}
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            Combining system analysis, business understanding, data analytics,
            and software development to create practical solutions.
          </p>
        </motion.div>

        {/* Background & Professional Experience */}
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Professional Background */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
              My Background
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-snug text-gray-900 dark:text-white sm:text-3xl">
              From Business Requirements to Digital Solutions
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              <p>
                I am a fresh graduate of the{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  D-III Information Management
                </strong>{" "}
                program at Universitas Logistik dan Bisnis Internasional
                (ULBI), with a GPA of 3.93/4.00. My academic background has
                equipped me with knowledge of information systems, business
                processes, data management, and software development.
              </p>

              <p>
                During my internship as a{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  Growth Hacking Intern at PT Pos Indonesia (Persero)
                </strong>{" "}
                from March to June 2026, I worked on operational data analysis
                and Executive Dashboard development. My responsibilities
                included processing more than 4,000 post office records across
                six regional offices, identifying reporting requirements,
                contributing to dashboard UI design, and preparing its User
                Manual (Juknis).
              </p>

              <p>
                I also gained experience in analyzing Pospay application
                reviews using{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  IndoBERT and BERTopic
                </strong>
                . In addition, I coordinated with stakeholders and documented
                discussions through Minutes of Meeting (MoM).
              </p>

              <p>
                My project experience covers the software development
                lifecycle, from requirement gathering and business process
                modeling to application development, testing, and
                documentation. One of my main projects is{" "}
                <strong className="font-semibold text-gray-900 dark:text-white">
                  SIMARPOS
                </strong>
                , a web-based Management Reporting Information System
                developed using Python, Django, and PostgreSQL in collaboration
                with PT Pos Indonesia as my final academic project.
              </p>

              <p>
                I am interested in understanding complex business problems,
                translating requirements into system solutions, and using data
                and technology to support better decision-making.
              </p>
            </div>
          </motion.div>

          {/* Professional Experience Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl border border-gray-200 bg-gray-50/80 p-6 dark:border-gray-800 dark:bg-gray-900/60 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/40">
                  <FaBriefcase className="text-xl text-purple-600 dark:text-purple-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Professional Experience
                  </p>

                  <h4 className="font-bold text-gray-900 dark:text-white">
                    PT Pos Indonesia (Persero)
                  </h4>

                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Growth Hacking Intern · Mar 2026 – Jun 2026
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-7">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    className="relative border-l-2 border-purple-200 pl-6 dark:border-purple-900"
                  >
                    <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-200 bg-white text-xs font-bold text-purple-600 dark:border-purple-800 dark:bg-gray-900 dark:text-purple-400">
                      {experience.number}
                    </span>

                    <h5 className="font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h5>

                    <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {experience.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="mt-6 rounded-3xl border border-purple-200 bg-purple-50/70 p-6 dark:border-purple-900/60 dark:bg-purple-950/20 sm:p-8">
              <h4 className="font-bold text-gray-900 dark:text-white">
                Areas of Interest
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Professional fields I am interested in exploring and
                developing further.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {areasOfInterest.map((area) => (
                  <span
                    key={area}
                    className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-purple-700 shadow-sm dark:bg-gray-900 dark:text-purple-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="mb-10 text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
              Technical Toolkit
            </span>

            <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Skills & Technologies
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
              Tools, methods, and technologies I have used across academic,
              professional, and project-based work.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/70"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/40">
                      <Icon className="text-lg text-purple-600 dark:text-purple-400" />
                    </div>

                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {group.title}
                    </h4>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {group.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
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