"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Ganti data di bawah ini dengan sertifikat yang kamu miliki
const certificates = [
  {
    title: "Machine Learning Engineer",
    issuer: "Dicoding x DBS Foundation",
    image: "/Images/sertifikat_ml.png", // Ganti dengan path gambar sertifikatmu
    date: "February 10, 2025 - July 16, 2025",
    link: "https://drive.google.com/file/d/1TzYKKueONL6ZpgI4Yu3ZBeweLI0680GL/view?usp=drive_link", // Ganti dengan URL sertifikatmu
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "SAP01 Fundamental",
    issuer: "Edugate",
    image: "/Images/sertifikat_sap.jpg", // Ganti dengan path gambar sertifikatmu
    date: "February 10, 2025",
    link: "https://drive.google.com/file/d/1aIwzR9sX3w3IIW7S6osIzyMD_3YdMm6Q/view?usp=sharing", // Ganti dengan URL sertifikatmu
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Machine Learning Terapan",
    issuer: "Dicoding",
    image: "/Images/sertifikat_terapan.jpg", // Ganti dengan path gambar sertifikatmu
    date: "Juni 2025",
    link: "https://www.dicoding.com/certificates/MEPJQ44EWX3V", // Ganti dengan URL sertifikatmu
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Belajar Analisis Data dengan Python",
    issuer: "Dicoding",
    image: "/Images/sertifikat_analisis.jpg", // Ganti dengan path gambar sertifikatmu
    date: "April 2024",
    link: "https://www.dicoding.com/certificates/RVZKWM75NZD5", // Ganti dengan URL sertifikatmu
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Belajar Pengembangan Machine Learning",
    issuer: "Dicoding",
    image: "/Images/sertifikat_pengembangan_ml.jpg", // Ganti dengan path gambar sertifikatmu
    date: "Juni 2025",
    link: "https://www.dicoding.com/certificates/72ZD5NROVZYW", // Ganti dengan URL sertifikatmu
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Belajar Fundamental Pemrosesan Data",
    issuer: "Dicoding",
    image: "/Images/sertifikat_pemrosesan.jpg", // Ganti dengan path gambar sertifikatmu
    date: "Juni 2025",
    link: "https://www.dicoding.com/certificates/1OP82QE4VPQK", // Ganti dengan URL sertifikatmu
    color: "from-emerald-500 to-teal-500"
  },
];

export default function Certificate() {
  return (
    <section id="certificates" className="relative py-20 bg-white dark:bg-black">
      {/* Background Effects (opsional, bisa disesuaikan) */}
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-blue-100/20 dark:from-blue-900/20 via-transparent to-transparent" />

      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400"
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          >
            My achievements and continuous learning in technology
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden
                         backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-300
                                 group-hover:opacity-30" />
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2
                               group-hover:text-blue-600 dark:group-hover:text-blue-400
                               transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                  **Issued by:** {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  **Date:** {cert.date}
                </p>
                
                {/* View Certificate Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white
                                 rounded-lg flex items-center justify-center gap-2
                                 hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors
                                 shadow-lg shadow-blue-500/20"
                >
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}