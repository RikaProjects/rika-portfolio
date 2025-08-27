"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Javascript", level: 80 },
      { name: "TailwindCSS", level: 75 },
      { name: "Codeigniter 3 dan 4", level: 95 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PHP",      level: 85 },
      { name: "MySQL",   level: 80 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Python", level: 75 },
      { name: "TensorFlow", level: 70 },
      { name: "Scikit-learn", level: 80 },
      { name: "Pandas / NumPy", level: 80 },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.5 14c-1.553 0-2.946-.792-3.946-2.274a7.024 7.024 0 00-3.946 2.274c-1.553 0-2.946-.792-3.946-2.274a7.024 7.024 0 00-3.946 2.274M16 10v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v.5m4 0a2.5 2.5 0 01-.5 1.5m-3 0a2.5 2.5 0 00-.5 1.5m6 2.5H6m6-2a6 6 0 01-3 5.196M9 8.196a9 9 0 00-9 0m9-2.196A9 9 0 0118 6m-3 10c.23-.083.488-.11.76-.11a2.5 2.5 0 002.5-2.5v-2.5a2.5 2.5 0 00-2.5-2.5H9.5a2.5 2.5 0 00-2.5 2.5v2.5a2.5 2.5 0 002.5 2.5h.24" />
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
                      transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
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
                            delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
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