"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Tailwind CSS
export default function About() {
  return (
    <section id="about" className="relative py-20 bg-white dark:bg-black">
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-purple-100/20 dark:from-purple-900/20 via-transparent to-transparent" />
      
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="relative group">              
              <div className="relative rounded-lg overflow-hidden bg-white">
                <Image
                  src="/Images/me.jpg"
                  alt="Rika Rostika Afipah"
                  width={600}
                  height={700}
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Hello! I&apos;m Rika Rostika Afipah, a passionate D3 Information Management student 
                specializing in Full Stack Development, system analysis, and data management. 
                I create websites, applications, and data-driven solutions to support business growth 
                and enhance user engagement.
              </p>

              <p>
                Throughout my studies and projects, I&apos;ve gained experience in programming languages 
                such as Python, SQL, and PHP, as well as developing user-friendly interfaces and efficient 
                backend systems. I enjoy solving complex problems, learning new technologies, and applying 
                them to build meaningful digital experiences.
              </p>

              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new tools, contributing to projects, 
                or collaborating with others to create impactful solutions.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'Next.js', 'TypeScript', 'Node.js', 
                  'Javascript', 'CSS', 'MySQL', 'Python', 'PHP',
                  'Laravel', 'CodeIgniter', 'Bootstrap',
                  'TensorFlow', 'Deep Learning', 'ETL Pipeline', 'Git', 'Machine Learning', 'Data Analysis','System Analysis'
                ].map((skill) => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 ring-1 ring-purple-500/20 
                    text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:ring-purple-500/40 
                    shadow-sm hover:shadow transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
