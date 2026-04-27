import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ---------------- LEFT: EDUCATION (Spans 2 columns) ---------------- */}
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

          {/* ---------------- RIGHT: CERTIFICATIONS (Small & Compact) ---------------- */}
          <div className="flex flex-col gap-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              Certifications
            </motion.h2>

            {/* A+ Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-800/50 dark:bg-gray-50 border border-gray-700 dark:border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm"
            >
              <img src="/assets/img/comptia-aplus.png" alt="A+" className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <h3 className="text-lg font-bold leading-tight">CompTIA A+</h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Core IT & Troubleshooting</p>
                <a href="https://www.credly.com/badges/99f29bfb-4722-4485-aff7-5c7dd02405a8/linked_in_profile" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:underline">Verify Badge →</a>
              </div>
            </motion.div>

            {/* Network+ Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-800/50 dark:bg-gray-50 border border-gray-700 dark:border-gray-200 rounded-xl p-4 flex items-center gap-4 shadow-sm"
            >
              <img src="/assets/img/Comptia_Network+.png" alt="Net+" className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <h3 className="text-lg font-bold leading-tight">CompTIA Network+</h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">Infrastructure & Security</p>
                <a href="https://www.credly.com/badges/2990c976-99a2-41ba-a9a1-d62a8cc516bf/linked_in_profile" target="_blank" rel="noopener noreferrer" className="text-xs text-purple-400 hover:underline">Verify Badge →</a>
              </div>
            </motion.div>
          </div>

        </div>
      </motion.section>

      <div className="w-full h-px bg-gray-800 dark:bg-gray-200 opacity-20 my-8" />
    </>
  );
}
