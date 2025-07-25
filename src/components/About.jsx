// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import coderAnim from '../assets/animations/coder-1.json';

// Framer Motion variants for staggered and fade‑in effects
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <>
      <motion.section
        id="about"
        className="py-12 bg-gray-900 dark:bg-white text-gray-100 dark:text-gray-900 flex items-center justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container max-w-4xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <span className="text-lg mb-8 text-center text-gray-300 dark:text-gray-600">
            My introduction
          </span>

          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            {/* Interactive Lottie animation */}
            <div className="w-80 mx-auto transition-transform duration-300 hover:scale-105">
              <motion.div whileHover={{ y: -10 }} className="shadow-xl rounded-lg overflow-hidden">
                <Lottie
                  animationData={coderAnim}
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </motion.div>
            </div>

            {/* Text & stats */}
            <motion.div className="flex flex-col items-center md:items-start space-y-6">
              <motion.p
                variants={fadeIn}
                className="text-center md:text-left text-gray-200 dark:text-gray-800"
              >
                Computer Science student at San Jose State University (GPA: 3.93, expected May 2025).
                Experienced in collaborative software engineering, real-time web apps, and cloud-first
                solutions. Fluent in English and Vietnamese. Passionate about building impactful,
                scalable products and always eager to learn new technologies.
              </motion.p>

              <div className="flex space-x-8">
                {[
                  { label: 'GPA',    value: '3.93' },
                  { label: 'Projects', value: '6'    },
                  { label: 'Degrees',  value: '2'    },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    variants={fadeIn}
                    className="text-center"
                  >
                    <span className="block text-3xl font-bold">{s.value}+</span>
                    <span className="text-sm text-gray-400 dark:text-gray-600">
                      {s.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                variants={fadeIn}
                download
                href="/assets/file/MyCV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2 rounded border border-white dark:border-gray-900 transition"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-px bg-gray-800 dark:bg-gray-200 opacity-60 my-8" />
    </>
  );
}
