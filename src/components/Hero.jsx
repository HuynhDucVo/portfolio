import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Motion variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <>
      <motion.section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-12"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6 items-center">
          {/* Left: intro and socials */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6 flex flex-col items-center md:items-start"
          >
            {/* Social Icons */}
            <motion.div variants={fadeInUp} className="flex space-x-4 mb-4">
              {[
                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/huynh-duc-vo/' },
                { icon: FaGithub,   url: 'https://github.com/HuynhDucVo' }
              ].map(({ icon: Icon, url }) => (
                <motion.a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#10B981' }}
                  className="text-2xl text-gray-200 dark:text-gray-700 p-2 rounded-full bg-gray-800 dark:bg-gray-200 transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
            >
              Hi, I'm Huynh Duc Vo
            </motion.h1>

            {/* Subheading */}
            <motion.h3
              variants={fadeInUp}
              className="text-2xl text-gray-300 dark:text-gray-700"
            >
              Computer Science Student @ SJSU, San Jose, CA
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-200 dark:text-gray-800 max-w-md text-center md:text-left"
            >
              Motivated and curious technology professional who enjoys solving problems, supporting people, and keeping systems running smoothly. 
              Fluent in English and Vietnamese, with a steady approach to learning and adapting in fast‑paced environments.
            </motion.p>

            {/* Call to Action */}
            <motion.a
              variants={fadeInUp}
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:from-green-500 hover:to-blue-600 transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Right: SVG Blob + Image */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center"
            whileHover={{ rotate: 5, scale: 1.05 }}
          >
            <svg
              className="w-64 h-64"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                  165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                  129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                  -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  fill="#111827"
                  className="dark:fill-white"
                />
                <image
                  className="object-cover"
                  x="-49"
                  y="-26"
                  width="300"
                  height="300"
                  href="/assets/img/Pro.jpg"
                />
              </g>
            </svg>
          </motion.div>
        </div>
      </motion.section>
      <div className="w-full h-px bg-gray-800 dark:bg-gray-200 opacity-60 my-8" />
    </>
  );
}
