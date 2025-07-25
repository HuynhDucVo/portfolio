import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

// Framer Motion variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Contact() {
  return (
    <>
      <motion.section
        id="contact"
        className="py-12 bg-gray-900 dark:bg-white text-gray-100 dark:text-gray-900 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container max-w-3xl mx-auto px-6">
          {/* Section heading */}
          <h2 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-lg mb-8 text-center text-gray-300 dark:text-gray-600">
            Get in touch
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact details */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {[
                { icon: FaPhone, label: 'Phone', value: '(657)-866-2413' },
                { icon: FaEnvelope, label: 'Email', value: 'kenjivo1298@gmail.com' },
                { icon: FaMapMarkerAlt, label: 'Location', value: 'San Jose, CA' }
              ].map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={fadeInUp}
                  className="flex items-center gap-3"
                >
                  <Icon className="text-2xl text-blue-400" />
                  <div>
                    <h3 className="text-xl font-semibold">{label}</h3>
                    <p className="text-gray-300 dark:text-gray-600">{value}</p>
                  </div>
                </motion.div>
              ))}
              {/* Social links */}
              <motion.div variants={fadeInUp} className="flex space-x-4 mt-4">
                {[
                  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/huynh-duc-vo/' },
                  { icon: FaGithub,   url: 'https://github.com/HuynhDucVo' }
                ].map(({ icon: Icon, url }) => (
                  <motion.a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full border border-white dark:border-gray-900 bg-gray-800 dark:bg-white text-white dark:text-gray-900 transition"
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.form
              variants={fadeInUp}
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // handle form submission
              }}
            >
              <motion.div variants={fadeInUp}>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-800 dark:bg-white border border-gray-700 dark:border-gray-200 text-white dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-800 dark:bg-white border border-gray-700 dark:border-gray-200 text-white dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Message"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-800 dark:bg-white border border-gray-700 dark:border-gray-200 text-white dark:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </motion.div>

              <motion.button
                type="submit"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Divider */}
      <div className="w-full h-px bg-gray-800 dark:bg-gray-200 opacity-60 my-8" />
    </>
  );
}
