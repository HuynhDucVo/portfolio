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
        className="py-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            Education
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-8 text-gray-300 dark:text-gray-600"
          >
            My academic journey
          </motion.p>

          <ol className="relative border-l-2 border-white dark:border-gray-900 pl-6 space-y-8">
            {/* Entry 1 */}
            <motion.li variants={fadeInUp} className="mb-10">
              <span className="absolute -left-6 top-3 w-3 h-3 bg-blue-500 dark:bg-green-500 rounded-full ring-4 ring-gray-900 dark:ring-white"></span>
              <h3 className="text-2xl font-semibold">San Jose State University</h3>
              <p className="italic text-gray-300 dark:text-gray-700">B.S. in Computer Science (GPA: 3.93)</p>
              <p className="text-sm text-gray-400 dark:text-gray-600">May 2023 – May 2025 | San Jose, CA</p>
              <ul className="list-disc ml-6 mt-2 text-gray-300 dark:text-gray-700 space-y-1">
                <li>OOP & Data Structures</li>
                <li>Theory of Computation & Discrete Math</li>
                <li>Computer Systems & Software Engineering</li>
                <li>Database Management Systems</li>
              </ul>
            </motion.li>

            {/* Entry 2 */}
            <motion.li variants={fadeInUp} className="mb-6">
              <span className="absolute -left-6 top-60 w-3 h-3 bg-blue-500 dark:bg-green-500 rounded-full ring-4 ring-gray-900 dark:ring-white"></span>
              <h3 className="text-2xl font-semibold">Evergreen Valley College</h3>
              <p className="italic text-gray-300 dark:text-gray-700">A.S. in Computer Science, AS-T</p>
              <p className="text-sm text-gray-400 dark:text-gray-600">Aug 2020 – May 2023 | San Jose, CA</p>
            </motion.li>
          </ol>
        </div>
      </motion.section>
      <div className="w-full h-px bg-gray-800 dark:bg-gray-200 opacity-60 my-8" />
    </>
  );
}
