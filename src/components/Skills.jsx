import React, { useState } from "react";
import {
  FaAngleDown,
  FaPencilRuler,
  FaCode,
  FaDatabase,
  FaLanguage,
  FaJava,
  FaWindows,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiLua,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiLinux,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const skillsData = [
  {
    title: "Programming Languages",
    icon: <FaPencilRuler size={24} className="text-blue-400" />,
    skills: [
      { name: "JavaScript", icon: <SiJavascript size={20} className="text-yellow-300" /> },
      { name: "Java", icon: <FaJava size={20} className="text-red-600" /> },
      { name: "Python", icon: <SiPython size={20} className="text-blue-500" /> },
      { name: "HTML5", icon: <SiHtml5 size={20} className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 size={20} className="text-blue-300" /> },
      { name: "Lua", icon: <SiLua size={20} className="text-purple-500" /> },
    ],
  },
  {
    title: "Frameworks / Libraries",
    icon: <FaCode size={24} className="text-purple-400" />,
    skills: [
      { name: "React", icon: <SiReact size={20} className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-teal-400" /> },
      { name: "Next.js", icon: <SiNextdotjs size={20} className="text-black" /> },
      { name: "Express.js", icon: <SiExpress size={20} className="text-gray-700" /> },
    ],
  },
  {
    title: "Databases & OS",
    icon: <FaDatabase size={24} className="text-yellow-400" />,
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size={20} className="text-blue-700" /> },
      { name: "MySQL", icon: <SiMysql size={20} className="text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb size={20} className="text-green-600" /> },
      { name: "Linux", icon: <SiLinux size={20} className="text-gray-500" /> },
      { name: "Windows", icon: <FaWindows size={20} className="text-blue-500" /> },
    ],
  },
  {
    title: "Languages",
    icon: <FaLanguage size={24} className="text-indigo-400" />,
    skills: [
      { name: "English (Fluent)", icon: <FaLanguage size={20} className="text-indigo-600" /> },
      { name: "Vietnamese (Fluent)", icon: <FaLanguage size={20} className="text-red-500" /> },
    ],
  },
];

// Framer Motion variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(-1);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? -1 : idx);

  return (
    <>
      <motion.section
        id="skills"
        className="py-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            Skills
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-8 text-gray-300 dark:text-gray-600"
          >
            My technical expertise
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillsData.map((group, idx) => (
              <motion.div
                key={group.title}
                variants={fadeInUp}
                className="border border-gray-700 dark:border-gray-300 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 bg-gray-800 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors focus:outline-none"
                >
                  <div className="flex items-center space-x-3">
                    {group.icon}
                    <span className="text-xl font-semibold">{group.title}</span>
                  </div>
                  <FaAngleDown
                    className={`transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-gray-900 dark:bg-white text-gray-200 dark:text-gray-800 list-none p-6 space-y-3"
                    >
                      {group.skills.map((skill) => (
                        <li key={skill.name} className="flex items-center space-x-2">
                          {skill.icon}
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <div className="w-full h-px bg-gray-800 dark:bg-gray-200 opacity-60 my-8" />
    </>
  );
}
