"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaBrain,
  FaFileAlt,
  FaTimes,
} from "react-icons/fa";

/* ================= CV LINKS ================= */

const CV_VIEW_URL =
  "https://drive.google.com/drive/folders/1DN15UPVhu1A1S8WeHdOMq7taDpEbBAoZ?usp=drive_link";

const CV_DOWNLOAD_URL = CV_VIEW_URL;

/* ============================================ */

const achievements = [
  {
    icon: FaGraduationCap,
    title: "GPA 3.93 / 4.00",
    description: "Academic Achievement",
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
    description: "Journal Publication",
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

const quickStats = [
  {
    value: "3.93",
    label: "GPA out of 4.00",
  },
  {
    value: "4,000+",
    label: "Post Offices Analyzed",
  },
  {
    value: "6",
    label: "Regional Offices",
  },
  {
    value: "SINTA 5",
    label: "Journal Publication",
  },
];

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitted(false);
    setError(false);
    setIsSending(true);

    try {
      const response = await fetch("https://formspree.io/f/meozdbbr", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  const closeForm = () => {
    setOpenForm(false);
    setSubmitted(false);
    setError(false);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white py-24 dark:bg-black sm:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/5 blur-[150px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="min-w-0"
          >
            {/* Professional Badge */}

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300 sm:px-5"
            >
              <FaAward className="shrink-0" />

              <span>
                System Analyst · Business Analyst · Data Analyst
              </span>
            </motion.div>

            {/* Main Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-7 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
                Rika Rostika Afipah
              </span>
            </motion.h1>

            {/* Professional Summary */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-7"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 sm:text-2xl">
                Turning Business Needs into Digital Solutions
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
                A graduate of D-III Information Management at Universitas
                Logistik dan Bisnis Internasional (ULBI), with a GPA of
                3.93/4.00. Experienced in operational data analysis at
                PT Pos Indonesia, business process modeling, and end-to-end
                information system development. Interested in building
                practical solutions through system analysis, data analytics,
                web development, and machine learning.
              </p>
            </motion.div>

            {/* ================= ACHIEVEMENTS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const styles = colorStyles[achievement.color];

                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.65 + index * 0.1,
                      duration: 0.4,
                    }}
                    whileHover={{ y: -4 }}
                    className={`rounded-2xl border ${styles.border} bg-white/70 p-4 shadow-sm backdrop-blur transition-shadow hover:shadow-lg dark:bg-gray-900/70 sm:p-5`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}
                      >
                        <Icon className={`text-lg ${styles.icon}`} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white sm:text-base">
                          {achievement.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400 sm:text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ================= CTA BUTTONS ================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              {/* See Projects */}

              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-shadow hover:shadow-purple-500/30 sm:px-7"
              >
                See My Projects
                <FaArrowRight />
              </motion.button>

              {/* Download CV */}

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={CV_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open CV folder on Google Drive"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-300 bg-white/70 px-5 py-3.5 font-semibold text-gray-800 transition hover:border-purple-500 hover:text-purple-600 dark:border-purple-800 dark:bg-gray-900/70 dark:text-white dark:hover:text-purple-400 sm:px-6"
              >
                <FaDownload />
                Download CV
              </motion.a>

              {/* View CV */}

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={CV_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View CV folder on Google Drive"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white/70 px-5 py-3.5 font-semibold text-gray-800 transition hover:border-purple-500 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-900/70 dark:text-white dark:hover:text-purple-400 sm:px-6"
              >
                View CV
              </motion.a>

              {/* Contact */}

              <motion.button
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setOpenForm(true)}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-300 px-5 py-3.5 font-semibold text-purple-700 transition hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 dark:hover:bg-purple-950/40 sm:px-6"
              >
                <FaEnvelope />
                Contact Me
              </motion.button>
            </motion.div>

            {/* ================= SOCIAL LINKS ================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4 text-sm font-medium text-gray-600 dark:text-gray-300"
            >
              <a
                href="https://github.com/RikaProjects"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Rika's GitHub profile"
                className="inline-flex items-center gap-2 transition hover:text-purple-600 dark:hover:text-purple-400"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rika-rostika-afipah"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Rika's LinkedIn profile"
                className="inline-flex items-center gap-2 transition hover:text-purple-600 dark:hover:text-purple-400"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>

              <a
                href="mailto:rikarapipah@gmail.com"
                aria-label="Send Rika an email"
                className="inline-flex items-center gap-2 transition hover:text-purple-600 dark:hover:text-purple-400"
              >
                <FaEnvelope className="text-xl" />
                Email
              </a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT PROFILE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Glow */}

            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-indigo-600 opacity-20 blur-3xl"
            />

            {/* Decorative Shapes */}

            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-24 w-24 rounded-3xl border-2 border-purple-500/30"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-28 w-28 rounded-3xl border-2 border-indigo-500/30"
            />

            {/* Profile Image */}

            <div className="relative overflow-hidden rounded-3xl border-8 border-white bg-gray-100 shadow-2xl dark:border-gray-900 dark:bg-gray-900">
              <Image
                src="/Images/me.jpeg"
                alt="Rika Rostika Afipah"
                width={520}
                height={650}
                priority
                sizes="(max-width: 1024px) 85vw, 420px"
                className="aspect-[4/5] w-full object-cover object-center"
              />

              {/* Image Overlay */}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-6 pb-7 pt-24 sm:px-8">
                <p className="text-2xl font-bold text-white">
                  Rika Rostika Afipah
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-200">
                  System Analysis · Business Intelligence · Data Analytics
                </p>

                <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
              </div>
            </div>

            {/* Floating Academic Card */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -left-3 top-10 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-gray-900/95 sm:-left-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/40">
                  <FaGraduationCap className="text-xl text-purple-600 dark:text-purple-400" />
                </div>

                <div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    3.93 / 4.00
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Academic GPA
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Experience Card */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="absolute -right-2 bottom-28 rounded-2xl border border-gray-200 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-gray-900/95 sm:-right-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/40">
                  <FaBriefcase className="text-lg text-blue-600 dark:text-blue-400" />
                </div>

                <div>
                  <p className="text-base font-bold text-gray-900 dark:text-white">
                    4,000+
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Post Office Records
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= QUICK STATS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
        >
          {quickStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-gray-200 bg-white/80 p-5 shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/70 sm:p-6"
            >
              <h3 className="break-words text-2xl font-bold text-purple-600 dark:text-purple-400 sm:text-3xl">
                {item.value}
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400 sm:text-sm">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= CONTACT MODAL ================= */}

      <AnimatePresence>
        {openForm && (
          <motion.div
            key="contact-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeForm();
              }
            }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-title"
              className="relative my-auto w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-800 dark:bg-gray-900 sm:p-8"
            >
              {/* Close Button */}

              <button
                type="button"
                onClick={closeForm}
                aria-label="Close contact form"
                className="absolute right-5 top-5 rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-purple-600 dark:hover:bg-gray-800"
              >
                <FaTimes className="text-xl" />
              </button>

              {/* Modal Heading */}

              <div className="pr-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400">
                  <FaEnvelope />
                  GET IN TOUCH
                </span>

                <h2
                  id="contact-title"
                  className="mt-5 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl"
                >
                  Let&apos;s Work Together
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                  Have a job opportunity, project, or collaboration in mind?
                  Feel free to send me a message.
                </p>
              </div>

              {/* Form Feedback */}

              {submitted ? (
                <div
                  role="status"
                  className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-5 text-center text-green-700 dark:border-green-900 dark:bg-green-900/20 dark:text-green-300"
                >
                  <FaEnvelope className="mx-auto mb-3 text-2xl" />

                  <p className="font-semibold">
                    Message sent successfully!
                  </p>

                  <p className="mt-2 text-sm">
                    Thank you for reaching out. I appreciate your message.
                  </p>

                  <button
                    type="button"
                    onClick={closeForm}
                    className="mt-5 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    Close
                  </button>
                </div>
              ) : error ? (
                <div
                  role="alert"
                  className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-5 text-center text-red-700 dark:border-red-900 dark:bg-red-900/20 dark:text-red-300"
                >
                  <p className="font-semibold">
                    Unable to send your message.
                  </p>

                  <p className="mt-2 text-sm">
                    Please check your connection and try again.
                  </p>

                  <button
                    type="button"
                    onClick={() => setError(false)}
                    className="mt-4 rounded-xl border border-red-300 px-5 py-2 text-sm font-semibold transition hover:bg-red-100 dark:border-red-800 dark:hover:bg-red-900/40"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      maxLength={100}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Email
                    </label>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Message
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      maxLength={5000}
                      placeholder="Tell me about your opportunity or project..."
                      className="w-full resize-y rounded-xl border border-gray-300 bg-transparent px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? "Sending Message..." : "Send Message"}

                    {!isSending && <FaArrowRight />}
                  </button>

                  <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                    Your message will be submitted through Formspree.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}