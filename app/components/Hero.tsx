"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

/* ================= CV LINKS ================= */
const CV_VIEW_URL =
  "https://drive.google.com/file/d/1bTJqTso5nhqJAS78XxljqafvCTgqsayD/view?usp=sharing";

const CV_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1bTJqTso5nhqJAS78XxljqafvCTgqsayD";
/* ============================================ */

export default function Hero() {
  const [openForm, setOpenForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    setSubmitted(false);
    setError(false);

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
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-1/4 w-10 h-10 md:w-96 md:h-96 bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 md:w-80 md:h-80 bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl text-center lg:text-left"
        >
          <span className="inline-block px-4 py-1.5 bg-purple-500/5 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-6">
            System Analyst • Web Developer • Machine Learning Engineer
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Rika Rostika Afipah
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl mt-8 mb-10 leading-relaxed max-w-2xl">
            A D3 Information Management student who builds web applications,
            analyzes systems, and develops data-driven & machine learning
            solutions.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            {/* See Projects */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-xl hover:shadow-purple-500/25 transition"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              See My Projects
            </motion.button>

            {/* View CV */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CV_VIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition flex items-center justify-center"
            >
              View CV
            </motion.a>

            {/* Download CV */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CV_DOWNLOAD_URL}
              className="px-8 py-4 border border-purple-500/30 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-500/5 transition flex items-center justify-center"
            >
              Download CV
            </motion.a>

            {/* Contact */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-purple-500/30 text-purple-600 dark:text-purple-400 rounded-xl hover:bg-purple-500/5 transition"
              onClick={() => setOpenForm(true)}
            >
              Get in Touch
            </motion.button>

          </div>
          {/* ========================================== */}
        </motion.div>
      </div>

      {/* ================= MODAL FORM ================= */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-500"
              onClick={() => setOpenForm(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Contact Me
            </h2>

            {submitted ? (
              <p className="text-green-600 font-semibold text-center">
                Message sent successfully!
              </p>
            ) : error ? (
              <p className="text-red-600 font-semibold text-center">
                Something went wrong.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border rounded-lg"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full p-3 border rounded-lg"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      {/* ============================================= */}
    </section>
  );
}
