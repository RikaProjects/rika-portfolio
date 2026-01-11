"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
              <div className="relative rounded-lg overflow-hidden bg-white dark:bg-gray-900">
                <Image
                  src="/Images/me.jpg"
                  alt="Rika Rostika Afipah"
                  width={600}
                  height={700}
                  priority
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

            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hi, I&apos;m <strong>Rika Rostika Afipah</strong>, a final-year D3 Informatics Management 
                student with a strong interest in <strong>Data Science, Machine Learning, and Web Development</strong>. 
                I enjoy building data-driven solutions and web-based systems that help improve business processes 
                and decision-making.
              </p>

              <p>
                I have hands-on experience working with <strong>Python, SQL, PHP, and JavaScript</strong>, 
                developing both frontend interfaces and backend systems. My background includes projects in 
                <strong> credit risk modeling, inventory management systems, NLP, and computer vision</strong>, 
                gained through academic projects and virtual data science internships.
              </p>

              <p>
                I&apos;m passionate about learning new technologies, solving real-world problems with data, 
                and collaborating in team-based projects to deliver impactful and scalable digital solutions.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mt-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                Technologies & Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  // Programming & Web
                  'Python', 'PHP', 'JavaScript', 'HTML', 'CSS', 'SQL',
                  'React', 'Next.js', 'Laravel', 'CodeIgniter', 'Bootstrap',

                  // Data & AI
                  'Data Analysis', 'Machine Learning', 'Credit Risk Modeling',
                  'NLP', 'Computer Vision', 'TensorFlow', 'Scikit-Learn',

                  // System & Tools
                  'System Analysis', 'UML', 'BPMN', 'Git', 'Google Colab'
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
