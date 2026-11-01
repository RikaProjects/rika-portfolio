"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaAward,
  FaExternalLinkAlt,
  FaFolderOpen,
  FaShieldAlt,
} from "react-icons/fa";

const certificates = [
  {
    title: "Junior Web Developer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    date: "November 2025 – November 2028",
    image: "/Images/sertifikasi_bnsp.jpeg",
    link: "https://drive.google.com/file/d/1GIhsgqTmkEetn_J-u6Bwv0PMnlEwqUef/view?usp=sharing",
    category: "Professional Certification",
    badge: "BNSP Certified",
    description:
      "Professional competency certification in Junior Web Development.",
    featured: true,
  },
  {
    title: "Machine Learning Engineer",
    issuer: "Dicoding x DBS Foundation",
    date: "February – July 2025",
    image: "/Images/sertifikat_ml.png",
    link: "https://drive.google.com/file/d/1TzYKKueONL6ZpgI4Yu3ZBeweLI0680GL/view?usp=drive_link",
    category: "Machine Learning",
    badge: "Graduate Program",
    description:
      "Completed an intensive learning program in Machine Learning Engineering.",
    featured: true,
  },
  {
    title: "SAP BC400 – ABAP Workbench",
    issuer: "Edugate",
    date: "July 2025",
    image: "/Images/sertifikat_sapbc.jpeg",
    link: "https://drive.google.com/file/d/1QrihXpyMtV6DAIrI3W7dKfi7Z5DPF_iS/view?usp=sharing",
    category: "Enterprise Systems",
    badge: "SAP Training",
    description:
      "Training in SAP ABAP Workbench and enterprise application development.",
    featured: false,
  },
  {
    title: "SAP01 – SAP Fundamental",
    issuer: "Edugate",
    date: "February 2025",
    image: "/Images/sertifikat_sap.jpg",
    link: "https://drive.google.com/file/d/1aIwzR9sX3w3IIW7S6osIzyMD_3YdMm6Q/view?usp=sharing",
    category: "Enterprise Systems",
    badge: "SAP Training",
    description:
      "Introduction to SAP fundamentals and enterprise resource planning.",
    featured: false,
  },
  {
    title: "Membangun Sistem Machine Learning",
    issuer: "Dicoding Indonesia",
    date: "November 2025",
    image: "/Images/sertifikat_membangunML.jpg",
    link: "https://www.dicoding.com/certificates/81P2563YNPOY",
    category: "Machine Learning",
    badge: "Course Completion",
    description:
      "Learning to develop and implement Machine Learning systems.",
    featured: false,
  },
  {
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    date: "June 2025",
    image: "/Images/sertifikat_terapan.jpg",
    link: "https://www.dicoding.com/certificates/MEPJQ44EWX3V",
    category: "Machine Learning",
    badge: "Course Completion",
    description:
      "Practical implementation of Machine Learning techniques and models.",
    featured: false,
  },
  {
    title: "Belajar Analisis Data dengan Python",
    issuer: "Dicoding Indonesia",
    date: "April 2024",
    image: "/Images/sertifikat_analisis.jpg",
    link: "https://www.dicoding.com/certificates/RVZKWM75NZD5",
    category: "Data Analytics",
    badge: "Course Completion",
    description:
      "Learning data analysis techniques using Python.",
    featured: false,
  },
  {
    title: "Belajar Pengembangan Machine Learning",
    issuer: "Dicoding Indonesia",
    date: "June 2025",
    image: "/Images/sertifikat_pengembangan_ml.jpg",
    link: "https://www.dicoding.com/certificates/72ZD5NROVZYW",
    category: "Machine Learning",
    badge: "Course Completion",
    description:
      "Learning the development process of Machine Learning applications.",
    featured: false,
  },
  {
    title: "Belajar Fundamental Pemrosesan Data",
    issuer: "Dicoding Indonesia",
    date: "June 2025",
    image: "/Images/sertifikat_pemrosesan.jpg",
    link: "https://www.dicoding.com/certificates/1OP82QE4VPQK",
    category: "Data Analytics",
    badge: "Course Completion",
    description:
      "Understanding fundamental concepts and techniques in data processing.",
    featured: false,
  },
];

const categories = [
  "Professional Certification",
  "Machine Learning",
  "Enterprise Systems",
  "Data Analytics",
];

export default function Sertifikat() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-white px-6 py-24 transition-colors duration-300 dark:bg-[#050816]"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 dark:border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-300">
            <FaAward />
            Certifications & Learning
          </span>

          <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg">
            A collection of professional certifications and learning
            achievements that reflect my commitment to continuous learning
            and professional development.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <FaAward className="mx-auto mb-3 text-2xl text-purple-600 dark:text-purple-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              9
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
              Certificates
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <FaShieldAlt className="mx-auto mb-3 text-2xl text-blue-600 dark:text-blue-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              1
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
              Professional Certification
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <FaAward className="mx-auto mb-3 text-2xl text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              4
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
              Learning Categories
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-center dark:border-white/10 dark:bg-white/[0.03]">
            <FaFolderOpen className="mx-auto mb-3 text-2xl text-orange-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              2024–2025
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
              Learning Journey
            </p>
          </div>
        </motion.div>

        {/* Category Labels */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category, index) => (
            <span
              key={category}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 sm:text-sm"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Certificate Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-white/10 dark:bg-[#0c1224] dark:hover:border-purple-500/40"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-white/5">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {certificate.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    Featured
                  </span>
                )}
              </div>

              {/* Certificate Information */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="rounded-full bg-purple-50 px-3 py-1 text-[11px] font-semibold text-purple-700 dark:bg-purple-500/10 dark:text-purple-300">
                    {certificate.category}
                  </span>

                  <span className="text-[11px] text-gray-500 dark:text-gray-400">
                    {certificate.date}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-purple-600 dark:text-white dark:group-hover:text-purple-400">
                  {certificate.title}
                </h3>

                <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                  {certificate.issuer}
                </p>

                <p className="mb-5 min-h-[48px] text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {certificate.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 dark:border-white/10">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {certificate.badge}
                  </span>

                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 transition-colors hover:text-indigo-600 dark:text-purple-400 dark:hover:text-indigo-300"
                  >
                    View Certificate
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Explore more of my learning achievements and certificates.
          </p>

          <a
            href="https://drive.google.com/drive/folders/1DkB-pd9-WSPcQA8ktVygRmsl6mYTiKjO?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30"
          >
            <FaFolderOpen />
            View All Certificates
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}