"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Javascript", level: 80 },
      { name: "TypeScript", level: 80 },
      { name: "CSS", level: 75 },
      { name: "Bootstrap", level: 70 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "PHP", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "CodeIgniter", level: 85 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
    {
    title: "Machine Learning & Data",
    skills: [
      { name: "Python", level: 75 },
      { name: "TensorFlow", level: 70 },
      { name: "Deep Learning", level: 70 },
      { name: "ETL Pipeline", level: 80 },
      { name: "Data Analysis", level: 85 },
      { name: "Machine Learning", level: 75 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.5 14c-1.553 0-2.946-.792-3.946-2.274a7.024 7.024 0 00-3.946 2.274c-1.553 0-2.946-.792-3.946-2.274a7.024 7.024 0 00-3.946 2.274M16 10v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v.5m4 0a2.5 2.5 0 01-.5 1.5m-3 0a2.5 2.5 0 00-.5 1.5m6 2.5H6m6-2a6 6 0 01-3 5.196M9 8.196a9 9 0 00-9 0m9-2.196A9 9 0 0118 6m-3 10c.23-.083.488-.11.76-.11a2.5 2.5 0 002.5-2.5v-2.5a2.5 2.5 0 00-2.5-2.5H9.5a2.5 2.5 0 00-2.5 2.5v2.5a2.5 2.5 0 002.5 2.5h.24"
        />
      </svg>
    ),
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 70 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 7v10c0 1.1.9 2 2 2h12a2 2 0 002-2V7M4 7a2 2 0 012-2h12a2 2 0 012 2M4 7h16M9 13h6m-3-3v6"
        />
      </svg>
    ),
  },
  {
    title: "System Analysis",
    skills: [
      { name: "BPMN", level: 85 },
      { name: "UML", level: 75 },
      { name: "DFD", level: 70 },
      { name: "Class Diagram", level: 70 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10c0 1.1.9 2 2 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2M3 7h18M9 13h6m-3-3v6"
        />
        <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6"/>
      </svg>
    ),
  },
  {
    title: "Tools & Methodologies",
    skills: [
      { name: "Git", level: 90 },
      { name: "Jira", level: 70 },
      { name: "Postman", level: 75 },
      { name: "Roboflow", level: 70 },
    ],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.82 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.82 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.82-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.82-3.31 2.37-2.37a1.724 1.724 0 002.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-purple-100/20 dark:from-purple-900/20 via-transparent to-transparent" />

      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            A showcase of my technical skills and proficiency levels across different domains
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="group relative p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl dark:shadow-gray-900/10 hover:border-purple-500/50 dark:hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl text-purple-600 dark:text-purple-400 ring-1 ring-purple-500/20 dark:ring-purple-500/30"
                  >
                    {category.icon}
                  </motion.span>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            ease: [0.34, 1.56, 0.64, 1],
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full relative"
                        >
                          {/* Animated Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}