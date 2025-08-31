"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";

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
      // Menangkap error jaringan atau lainnya
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center py-20">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-1/4 w-10 h-10 md:w-96 md:h-96 bg-purple-600/5 dark:bg-purple-600/10 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 md:w-80 md:h-80 bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full filter blur-3xl animate-pulse delay-700" />

      {/* Main Content */}
      <div className="container max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1.5 bg-purple-500/5 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium mb-6"
            >
              System Analyst, Web Developer, & Machine Learning Engineer | AI & Data Enthusiast
            </motion.span>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 dark:text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                  Rika Rostika Afipah
                </span>
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-xl mt-8 mb-10 leading-relaxed max-w-2xl">
              I&apos;m Rika, a passionate D3 Information Management student. I build websites and analyze systems and data to support business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-purple-500/25"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  See My Projects
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </motion.button>

              {/* Get in Touch Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-transparent border border-purple-500/20 dark:border-purple-500/30 hover:border-purple-500 text-purple-600 dark:text-purple-400 rounded-xl transition-all duration-300 hover:bg-purple-500/5 dark:hover:bg-purple-500/10"
                onClick={() => setOpenForm(true)}
              >
                <span className="flex items-center justify-center gap-2">
                  Get in Touch
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m-7-7l7 7-7 7"
                    />
                  </svg>
                </span>
              </motion.button>
            </div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex items-center gap-8 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-purple-500/20 dark:border-purple-500/30 bg-purple-500/5 dark:bg-purple-900/30"
                  />
                ))}
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                <span className="text-purple-600 dark:text-purple-400 font-semibold">
                  9
                </span>{" "}
                Projects Completed
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal Form */}
      {openForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
              onClick={() => setOpenForm(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Contact Me
            </h2>

            {submitted ? (
              <p className="text-green-600 dark:text-green-400 font-semibold text-center">
                Thank you! Your message has been sent.
              </p>
            ) : error ? (
              <p className="text-red-600 dark:text-red-400 font-semibold text-center">
                Oops! Something went wrong.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={4}
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}