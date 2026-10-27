"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaChartLine,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

const experiences = [
  {
    company: "PT Pos Indonesia (Persero)",
    position: "Growth Hacking Intern",
    period: "Mar 2026 – Jun 2026",
    color: "purple",
    icon: <FaBriefcase />,
    description:
      "Contributed to enterprise management reporting by supporting business analysis, data cleansing, data mapping, executive dashboard planning, and stakeholder requirement gathering.",
    technologies: [
      "Business Analysis",
      "Data Cleansing",
      "Data Mapping",
      "SQL",
      "Excel",
      "Dashboard",
    ],
  },
  {
    company: "Home Credit Indonesia × Rakamin Academy",
    position: "Project-Based Virtual Internship – Data Scientist",
    period: "Dec 2025",
    color: "blue",
    icon: <FaChartLine />,
    description:
      "Developed a credit risk prediction model through exploratory data analysis, feature engineering, machine learning modeling, and model evaluation.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "EDA",
      "Credit Risk",
    ],
  },
  {
    company: "Coding Camp powered by DBS Foundation",
    position: "Machine Learning Engineer",
    period: "2025",
    color: "green",
    icon: <FaBrain />,
    description:
      "Completed an intensive machine learning program covering deep learning, computer vision, TensorFlow, recommendation systems, and real-world AI implementation.",
    technologies: [
      "TensorFlow",
      "Computer Vision",
      "Deep Learning",
      "YOLO",
      "Python",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 bg-gray-50 dark:bg-neutral-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm font-semibold">
            Professional Experience
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-6">
            My Professional
            <span className="block bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-8">
            My experiences in industry, virtual internships, and intensive
            training programs have strengthened my expertise in business
            analysis, software engineering, data analytics, and machine
            learning while collaborating on real-world business problems.
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-5 lg:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-indigo-500 -translate-x-1/2 rounded-full" />

          <div className="space-y-16">

            {experiences.map((exp, index) => (

              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .2 }}
                className={`flex flex-col ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } items-center gap-10`}
              >

                {/* Timeline Dot */}

                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white dark:bg-neutral-900 border-4 border-purple-600 shadow-xl items-center justify-center text-purple-600 text-xl">
                  {exp.icon}
                </div>

                {/* Card */}

                <div className="w-full lg:w-5/12">
                  <div className="rounded-3xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur border border-gray-200 dark:border-neutral-800 shadow-xl p-8 hover:-translate-y-2 transition-all duration-300">

                    <p className="text-sm font-semibold text-purple-600 mb-2">
                      {exp.period}
                    </p>

                    <h3 className="text-2xl font-bold">
                      {exp.company}
                    </h3>

                    <p className="text-lg font-medium mt-2 text-gray-700 dark:text-gray-300">
                      {exp.position}
                    </p>

                    <p className="mt-5 text-gray-600 dark:text-gray-400 leading-7">
                      {exp.description}
                    </p>

                    {/* Technologies*/}
                    <div className="mt-6 flex flex-wrap gap-3">
  {exp.technologies.map((tech) => (
    <span
      key={tech}
      className="px-3 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium border border-purple-200 dark:border-purple-800"
    >
      {tech}
    </span>
  ))}
</div>

                  </div>
                </div>

                {/* Empty Column */}
                <div className="hidden lg:block lg:w-5/12" />

              </motion.div>

            ))}

          </div>

        </div>

        {/* ================= KEY ACHIEVEMENTS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-28"
        >

          <div className="text-center mb-12">

            <span className="inline-flex items-center px-5 py-2 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold">
              Key Achievements
            </span>

            <h3 className="text-3xl lg:text-4xl font-bold mt-5">
              Highlights of My Journey
            </h3>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "Enterprise System Development",
                description:
                  "Designed and analyzed a web-based Management Reporting System during my internship at PT Pos Indonesia to improve reporting efficiency and business monitoring.",
              },
              {
                title: "Credit Risk Prediction",
                description:
                  "Built and evaluated machine learning models for customer credit risk prediction using real business datasets during the Home Credit Indonesia virtual internship.",
              },
              {
                title: "Machine Learning Engineer",
                description:
                  "Completed an intensive machine learning program powered by DBS Foundation, covering computer vision, deep learning, recommendation systems, and TensorFlow.",
              },
              {
                title: "Research & Publication",
                description:
                  "Published an applied research paper in a SINTA-accredited journal focusing on enterprise information system design and business process improvement.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-lg p-6 hover:-translate-y-2 transition-all duration-300"
              >

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <FaDatabase className="text-purple-600 text-xl" />
                  </div>

                  <h4 className="text-xl font-bold">
                    {item.title}
                  </h4>

                </div>

                <p className="leading-7 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}
