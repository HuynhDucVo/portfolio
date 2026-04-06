import React from 'react';
import { motion } from 'framer-motion';

// Framer Motion variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Qualification() {
  return (
    <>
      <motion.section
        id="qualification"
        className="py-16 bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ---------------- LEFT: EDUCATION ---------------- */}
          <div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
            >
              Education
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 text-gray-300 dark:text-gray-600"
            >
              My academic background
            </motion.p>

            <ol className="relative border-l-2 border-white dark:border-gray-900 pl-6 space-y-10">

              {/* SJSU */}
              <motion.li variants={fadeInUp} className="relative">
                <span className="absolute -left-6 top-2 w-3 h-3 bg-blue-500 dark:bg-green-500 rounded-full ring-4 ring-gray-900 dark:ring-white"></span>
                <h3 className="text-2xl font-semibold">San Jose State University</h3>
                <p className="italic text-gray-300 dark:text-gray-700">
                  B.S. Computer Science — GPA 3.93
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  Aug 2023 – May 2025 • San Jose, CA
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-300 dark:text-gray-700 space-y-1">
                  <li>Object-Oriented Programming & Data Structures</li>
                  <li>Computer Systems & Software Engineering</li>
                  <li>Theory of Computation & Discrete Math</li>
                  <li>Database Management Systems</li>
                </ul>
              </motion.li>

              {/* EVC */}
              <motion.li variants={fadeInUp} className="relative">
                <span className="absolute -left-6 top-2 w-3 h-3 bg-blue-500 dark:bg-green-500 rounded-full ring-4 ring-gray-900 dark:ring-white"></span>
                <h3 className="text-2xl font-semibold">Evergreen Valley College</h3>
                <p className="italic text-gray-300 dark:text-gray-700">
                  A.S. Computer Science, AS‑T
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  Aug 2020 – May 2023 • San Jose, CA
                </p>
              </motion.li>

            </ol>
          </div>

          {/* ---------------- RIGHT: CERTIFICATIONS ---------------- */}
          <div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Certifications
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg mb-8 text-gray-300 dark:text-gray-600"
            >
              Verified credentials & achievements
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="bg-gray-800 dark:bg-gray-100 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            >
              <img
                src="/assets/img/comptia-aplus.png"
                alt="CompTIA A+ Certification"
                className="w-32 mb-4"
              />
              <h3 className="text-2xl font-semibold mb-1">CompTIA A+</h3>
              <p className="text-gray-400 dark:text-gray-700 text-sm mb-4">
                Certified in 2026 — Core IT troubleshooting, hardware, OS, networking, and security fundamentals.
              </p>

              <a
                href="YOUR_CERT_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
              >
                View Credential
              </a>
            </motion.div>
          </div>

        </div>
      </motion.section>

      <div className="w-full h-px bg-gray-800 dark:bg-gray-200 opacity-60 my-8" />
    </>
  );
}
