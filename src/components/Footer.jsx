import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-tr from-gray-900 to-gray-800 text-white py-12 border-t border-gray-700"
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-extrabold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Huynh Duc Vo
          </h1>
          <p className="text-gray-400">Computer Science Student, SJSU</p>
        </div>

        {/* Links */}
        <ul className="flex justify-center space-x-6">
          {[
            { href: '#qualification', label: 'Education' },
            { href: '#portfolio',   label: 'Projects'  },
            { href: '#contact',     label: 'Contact'   }
          ].map(({ href, label }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-gray-300 hover:text-white px-2 py-1 transition-all"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          {[
            { icon: FaLinkedin, url: 'https://www.linkedin.com/in/huynh-duc-vo/' },
            { icon: FaGithub,   url: 'https://github.com/HuynhDucVo' }
          ].map(({ icon: Icon, url }) => (
            <motion.a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>

      <motion.p
        className="mt-8 text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} Huynh Duc Vo. All rights reserved.
      </motion.p>
    </motion.footer>
  );
}
