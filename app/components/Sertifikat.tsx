"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    title: "Junior Web Developer (BNSP)",
    issuer: "Badan Nasional Sertifikasi Profesi",
    image: "/Images/sertifikasi_bnsp.jpeg",
    date: "November 2025 – November 2028",
    link: "https://drive.google.com/file/d/1GIhsgqTmkEetn_J-u6Bwv0PMnlEwqUef/view?usp=sharing",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Machine Learning Engineer",
    issuer: "Dicoding x DBS Foundation",
    image: "/Images/sertifikat_ml.png",
    date: "February 10, 2025 – July 16, 2025",
    link: "https://drive.google.com/file/d/1TzYKKueONL6ZpgI4Yu3ZBeweLI0680GL/view?usp=drive_link",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "SAP BC400",
    issuer: "Edugate",
    image: "/Images/sertifikat_sapbc.jpeg",
    date: "July 21, 2025",
    link: "https://drive.google.com/file/d/1QrihXpyMtV6DAIrI3W7dKfi7Z5DPF_iS/view?usp=sharing",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "SAP01 Fundamental",
    issuer: "Edugate",
    image: "/Images/sertifikat_sap.jpg",
    date: "February 10, 2025",
    link: "https://drive.google.com/file/d/1aIwzR9sX3w3IIW7S6osIzyMD_3YdMm6Q/view?usp=sharing",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Membangun Sistem ML",
    issuer: "Dicoding",
    image: "/Images/sertifikat_membangunML.jpg",
    date: "November 2025",
    link: "https://www.dicoding.com/certificates/81P2563YNPOY",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Machine Learning Terapan",
    issuer: "Dicoding",
    image: "/Images/sertifikat_terapan.jpg",
    date: "Juni 2025",
    link: "https://www.dicoding.com/certificates/MEPJQ44EWX3V",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Belajar Analisis Data dengan Python",
    issuer: "Dicoding",
    image: "/Images/sertifikat_analisis.jpg",
    date: "April 2024",
    link: "https://www.dicoding.com/certificates/RVZKWM75NZD5",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Belajar Pengembangan Machine Learning",
    issuer: "Dicoding",
    image: "/Images/sertifikat_pengembangan_ml.jpg",
    date: "Juni 2025",
    link: "https://www.dicoding.com/certificates/72ZD5NROVZYW",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Belajar Fundamental Pemrosesan Data",
    issuer: "Dicoding",
    image: "/Images/sertifikat_pemrosesan.jpg",
    date: "Juni 2025",
    link: "https://www.dicoding.com/certificates/1OP82QE4VPQK",
    color: "from-emerald-500 to-teal-500",
  },
];

function CertificateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.5 14.5-1 6 4.5-2.5 4.5 2.5-1-6"
      />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 5h6v6M19 5l-9 9"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"
      />
    </svg>
  );
}

export default function Certificate() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-white py-20 dark:bg-black"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
            <CertificateIcon />
            Professional Development
          </span>

          <h2 className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-3xl font-bold text-transparent dark:from-blue-400 dark:to-cyan-400 lg:text-4xl">
            Certifications
          </h2>

          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
            Professional certifications and learning achievements that reflect
            my commitment to continuous learning in technology.
          </p>
        </motion.div>

        {/* Certificate Count */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex justify-center"
        >
          <p className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-white">
              {certificates.length}
            </span>{" "}
            Certificates & Learning Achievements
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900/70"
            >
              {/* Top Gradient */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color}`} />

              {/* Certificate Image */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View certificate: ${cert.title}`}
                className="relative block h-52 overflow-hidden bg-gray-100 dark:bg-gray-800"
              >
                <Image
                  src={cert.image}
                  alt={`Certificate: ${cert.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-20" />
              </a>

              {/* Certificate Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {cert.title}
                </h3>

                <div className="mb-5 space-y-2">
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Issued by:
                    </span>{" "}
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      Date:
                    </span>{" "}
                    {cert.date}
                  </p>
                </div>

                {/* View Certificate Button */}
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-900"
                >
                  <CertificateIcon />
                  View Certificate
                  <ExternalLinkIcon />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}