"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaBrain,
  FaFileAlt,
  FaTimes,
} from "react-icons/fa";

/* ================= CV LINK ================= */

// Sementara diarahkan ke folder Google Drive.
// Nanti ganti dengan link PDF langsung jika ingin fitur download.

const CV_URL =
  "https://drive.google.com/drive/folders/1DN15UPVhu1A1S8WeHdOMq7taDpEbBAoZ?usp=drive_link";

/* ================= ACHIEVEMENTS ================= */

const achievements = [
  {
    icon: FaGraduationCap,
    value: "3.93 / 4.00",
    label: "Academic GPA",
    color: "purple",
  },
  {
    icon: FaBriefcase,
    value: "4,000+",
    label: "Post Offices Analyzed",
    color: "blue",
  },
  {
    icon: FaBrain,
    value: "ML Engineer",
    label: "Coding Camp · DBS Foundation",
    color: "green",
  },
  {
    icon: FaFileAlt,
    value: "SINTA 5",
    label: "Accredited Journal",
    color: "orange",
  },
];

const colorStyles: Record<
  string,
  { border: string; iconBg: string; icon: string }
> = {
  purple: {
    border: "border-purple-200 dark:border-purple-900/70",
    iconBg: "bg-purple-100 dark:bg-purple-900/40",
    icon: "text-purple-600 dark:text-purple-400",
  },
  blue: {
    border: "border-blue-200 dark:border-blue-900/70",
    iconBg: "bg-blue-100 dark:bg-blue-900/40",
    icon: "text-blue-600 dark:text-blue-400",
  },
  green: {
    border: "border-green-200 dark:border-green-900/70",
    iconBg: "bg-green-100 dark:bg-green-900/40",
    icon: "text-green-600 dark:text-green-400",
  },
  orange: {
    border: "border-orange-200 dark:border-orange-900/70",
    iconBg: "bg-orange-100 dark:bg-orange-900/40",
    icon: "text-orange-600 dark:text-orange-400",
  },
};

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  /* ================= CONTACT FORM ================= */

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
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-white py-28 dark:bg-black lg:py-32"
      >
        {/* BACKGROUND DECORATION */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="min-w-0"
            >
              {/* PROFESSIONAL BADGE */}

              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-xs font-semibold tracking-wide text-purple-700 dark:text-purple-300 sm:text-sm">
                <FaAward />

                <span>
                  SYSTEM ANALYSIS · BUSINESS ANALYSIS · DATA ANALYTICS
                </span>
              </div>

              {/* NAME */}

              <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
                  Rika Rostika Afipah.
                </span>
              </h1>

              {/* PROFESSIONAL HEADLINE */}

              <h2 className="mt-7 text-xl font-semibold leading-relaxed text-gray-800 dark:text-gray-200 sm:text-2xl">
                Turning Business Challenges into Digital Solutions.
              </h2>

              {/* SUMMARY */}

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-300 sm:text-lg">
                An Information Management graduate from Universitas Logistik
                dan Bisnis Internasional (ULBI), with a GPA of 3.93/4.00.
                Experienced in operational data analysis, business process
                improvement, and information system development. Passionate
                about translating business needs into practical technology
                solutions through system analysis, data analytics, and
                web development.
              </p>

              {/* ACHIEVEMENTS */}

              <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {achievements.map((item, index) => {
                  const Icon = item.icon;
                  const styles = colorStyles[item.color];

                  return (
                    <motion.div
                      key={item.value}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                      }}
                      whileHover={{ y: -4 }}
                      className={`flex items-center gap-4 rounded-2xl border ${styles.border} bg-white/80 p-4 shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-900/70 sm:p-5`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}
                      >
                        <Icon className={`text-lg ${styles.icon}`} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white sm:text-base">
                          {item.value}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400 sm:text-sm">
                          {item.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ACTION BUTTONS */}

              <div className="mt-9 flex flex-wrap gap-3">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg transition-shadow hover:shadow-purple-500/30"
                >
                  View My Projects
                  <FaArrowRight />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-300 bg-white/70 px-6 py-3.5 font-semibold text-gray-800 transition hover:border-purple-500 hover:text-purple-600 dark:border-purple-800 dark:bg-gray-900/70 dark:text-white dark:hover:text-purple-400"
                >
                  View CV
                </motion.a>

                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setOpenForm(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-6 py-3.5 font-semibold text-gray-700 transition hover:border-purple-500 hover:text-purple-600 dark:border-gray-700 dark:text-gray-200 dark:hover:text-purple-400"
                >
                  <FaEnvelope />
                  Contact Me
                </motion.button>
              </div>

              {/* SOCIAL LINKS */}

              <div className="mt-9 flex flex-wrap items-center gap-7 text-sm font-medium text-gray-600 dark:text-gray-300">
                <a
                  href="https://github.com/RikaProjects"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex items-center gap-2 transition hover:text-purple-600 dark:hover:text-purple-400"
                >
                  <FaGithub className="text-xl" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/rika-rostika-afipah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex items-center gap-2 transition hover:text-purple-600 dark:hover:text-purple-400"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn
                </a>

                <a
                  href="mailto:rikarapipah@gmail.com"
                  aria-label="Send email"
                  className="inline-flex items-center gap-2 transition hover:text-purple-600 dark:hover:text-purple-400"
                >
                  <FaEnvelope className="text-xl" />
                  Email
                </a>
              </div>
            </motion.div>

            {/* RIGHT PROFILE IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >
              {/* IMAGE GLOW */}

              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-purple-600 via-fuchsia-500 to-indigo-600 opacity-20 blur-3xl"
              />

              {/* DECORATIVE FRAME */}

              <div
                aria-hidden="true"
                className="absolute -right-4 -top-4 h-24 w-24 rounded-3xl border-2 border-purple-500/30"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 h-28 w-28 rounded-3xl border-2 border-indigo-500/30"
              />

              {/* PROFILE PHOTO */}

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

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent px-6 pb-7 pt-24">
                  <p className="text-2xl font-bold text-white">
                    Rika Rostika Afipah
                  </p>

                  <p className="mt-2 text-sm text-gray-200">
                    System Analysis · Business Analysis · Data Analytics
                  </p>

                  <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}

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
              <button
                type="button"
                onClick={closeForm}
                aria-label="Close contact form"
                className="absolute right-5 top-5 rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-purple-600 dark:hover:bg-gray-800"
              >
                <FaTimes className="text-xl" />
              </button>

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
    </>
  );
}