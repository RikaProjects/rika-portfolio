"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/RikaProjects",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rika-rostika-afipah-7040162b4/",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rikaraae/",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.584-.012-4.849-.069c-3.252-.149-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.058 1.281-.072 1.689-.072 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.668-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163c3.403 0 6.162-2.759 6.162-6.163 0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z" />
      </svg>
    ),
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Certificates", href: "/#certificates" },
];

function ArrowUpIcon() {
  return (
    <svg
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 17 17 7M7 7h10v10"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#101010] text-white">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link
              href="/"
              aria-label="Rika Rostika Afipah - Home"
              className="group inline-flex items-center"
            >
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent transition-opacity group-hover:opacity-80">
                RK
              </span>
              <span className="ml-3 text-sm font-medium text-gray-400">
                Personal Portfolio
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Exploring technology and building digital solutions through web
              development, data science, and machine learning.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.name} profile`}
                  title={social.name}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-800 bg-white/5 text-gray-300 transition-colors hover:border-purple-500/40 hover:bg-purple-500/15 hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-purple-300 focus:outline-none focus:text-purple-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500/60 transition-transform group-hover:scale-150" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <a
                href="mailto:rikarapipah@gmail.com"
                className="group flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-purple-300"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="break-all transition-transform group-hover:translate-x-0.5">
                  rikarapipah@gmail.com
                </span>
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-400">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span>Bandung, Indonesia</span>
              </div>

              <p className="pt-1 text-sm leading-6 text-gray-500">
                Feel free to reach out for professional opportunities,
                collaborations, or project discussions.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/80 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs leading-6 text-gray-500">
              © {currentYear} Rika Rostika Afipah. All rights reserved.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-purple-300"
            >
              Back to Home
              <ArrowUpIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}