"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGraduationCap,
  FaBriefcase,
  FaBrain,
  FaFileAlt,
} from "react-icons/fa";

const achievements = [
  {
    icon: FaGraduationCap,
    title: "GPA 3.93 / 4.00",
    description: "D-III Information Management",
    color: "purple",
  },
  {
    icon: FaBriefcase,
    title: "4,000+ Post Offices",
    description: "PT Pos Indonesia",
    color: "blue",
  },
  {
    icon: FaBrain,
    title: "ML Engineer Graduate",
    description: "Coding Camp · DBS Foundation",
    color: "green",
  },
  {
    icon: FaFileAlt,
    title: "SINTA 5",
    description: "Accredited Journal Publication",
    color: "orange",
  },
];

const colorStyles: Record<
  string,
  { border: string; iconBg: string; icon: string }
> = {
  purple: {
    border: "border-purple-200 dark:border-purple-800",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    icon: "text-purple-600 dark:text-purple-400",
  },
  blue: {
    border: "border-blue-200 dark:border-blue-800",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    icon: "text-blue-600 dark:text-blue-400",
  },
  green: {
    border: "border-green-200 dark:border-green-800",
    iconBg: "bg-green-100 dark:bg-green-900/40",
    icon: "text-green-600 dark:text-green-400",
  },
  orange: {
    border: "border-orange-200 dark:border-orange-800",
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    icon: "text-orange-600 dark:text-orange-400",
  },
};

const technologies = [
  "Python",
  "SQL",
  "PHP",
  "JavaScript",
  "Django",
  "CodeIgniter 4",
  "PostgreSQL",
  "MySQL",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "TensorFlow",
  "BPMN",
  "UML",
  "Git",
  "GitHub",
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
            Turning Business Challenges into{" "}
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
            Combining system analysis, business understanding, and data
            analytics to build meaningful technology solutions.
          </p>
        </motion.div>

        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md lg:mx-0"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-indigo-600 opacity-20 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-2xl dark:border-gray-800 dark:bg-gray-900">
              <Image
                src="/Images/me.jpeg"
                alt="Rika Rostika Afipah"
                width={520}
                height={650}
                priority
                sizes="(max-width: 768px) 100vw, 520px"
                className="aspect-[4/5] w-full object-cover object-center"
              />

              {/* Profile Caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-7 pt-20 sm:px-8">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  Rika Rostika Afipah
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-200 sm:text-base">
                  System Analyst · Business Analyst · Data Analyst
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div
              aria-hidden="true"
              className="absolute -bottom-5 -right-5 -z-10 h-28 w-28 rounded-3xl border-2 border-purple-500/30"
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
              My Background
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-snug text-gray-900 dark:text-white sm:text-3xl">
              Bridging Business Needs and Technology
            </h3>

            <p className="mt-6 text-base leading-8 text-gray-600 dark:text-gray-300">
              Hi, I&apos;m{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                Rika Rostika Afipah
              </strong>
              , a graduate of the D-III Information Management program at
              Universitas Logistik dan Bisnis Internasional (ULBI), with a GPA
              of 3.93/4.00. My primary interests are{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                System Analysis, Business Analysis, and Data Analytics
              </strong>
              , supported by hands-on experience in web development and machine
              learning.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              During my internship at{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                PT Pos Indonesia (Persero)
              </strong>
              , I worked with operational data from more than 4,000 post offices
              across six regional offices. My responsibilities included data
              matching, mapping, cleansing, validation, and consolidation, as
              well as identifying reporting requirements for an Executive
              Dashboard.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              Through academic and industry-based projects, I have worked
              across the software development lifecycle, from requirements
              gathering and business process modeling to application
              development, testing, and technical documentation. My experience
              includes building{" "}
              <strong className="font-semibold text-gray-900 dark:text-white">
                SIMARPOS
              </strong>
              , a web-based management reporting system using Django and
              PostgreSQL, alongside machine learning projects involving
              predictive analytics, recommendation systems, and computer
              vision.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-300">
              I enjoy understanding complex problems, translating business
              requirements into practical solutions, and collaborating with
              stakeholders and cross-functional teams. I am eager to continue
              learning and contribute to projects that create meaningful
              business and technological value.
            </p>

            {/* Achievement Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const styles = colorStyles[achievement.color];

                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl border ${styles.border} bg-white/80 p-4 shadow-sm backdrop-blur transition-shadow hover:shadow-lg dark:bg-gray-900/70 sm:p-5`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}
                      >
                        <Icon className={`text-xl ${styles.icon}`} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>

                        <p className="mt-1 text-sm leading-5 text-gray-500 dark:text-gray-400">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Core Skills & Technologies */}
            <div className="mt-10">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                Core Skills & Technologies
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                Tools and technologies I use for system analysis, data
                analytics, and application development.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:border-purple-500 hover:bg-purple-600 hover:text-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-purple-500 dark:hover:bg-purple-600 dark:hover:text-white"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Focus */}
            <div className="mt-9 rounded-2xl border border-purple-200 bg-purple-50/70 p-5 dark:border-purple-900/60 dark:bg-purple-950/20 sm:p-6">
              <h4 className="font-bold text-gray-900 dark:text-white">
                Areas of Interest
              </h4>

              <div className="mt-4 flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}