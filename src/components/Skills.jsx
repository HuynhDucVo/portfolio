import React from "react";
import {
  FaNetworkWired,
  FaTools,
  FaServer,
  FaTerminal,
  FaLanguage,
  FaWindows,
} from "react-icons/fa";
import {
  SiLinux,
  SiJira,
  SiGit,
  SiDocker,
  SiMysql,
  SiPython,
} from "react-icons/si";
import { motion } from "framer-motion";

// ---------------------- EXPERIENCE DATA ----------------------
const experienceData = [
  {
    title: "Lead Server | Technical Support",
    company: "Pho Wagon",
    date: "Jan 2020 – Present",
    location: "San Jose, CA",
    bullets: [
      "Provided Tier 1 technical support for POS systems, printers, and network connectivity during live business operations.",
      "Diagnosed and resolved Wi‑Fi/LAN outages, minimizing downtime and maintaining business continuity.",
      "Supported 10+ staff with device setup, login issues, and application troubleshooting.",
      "Performed basic system administration tasks including user account setup, credential resets, and device configuration.",
      "Handled high‑pressure incident resolution while serving 50+ customers per shift.",
    ],
  },
  {
    title: "Student Researcher — WITH‑Cyber Program",
    company: "San José State University",
    date: "Aug 2024 – May 2025",
    location: "San Jose, CA",
    bullets: [
      "Developed cybersecurity educational games to teach K‑12 students safe online behavior and threat awareness.",
      "Monitored network and system performance to identify and resolve connectivity issues.",
      "Implemented firewall rules and access controls in lab environments.",
      "Simulated phishing and malware attacks to test detection and response strategies.",
      "Collaborated with faculty to document findings; work featured in the SJSU Research Foundation 2025 Annual Report.",
    ],
  },
];

// ---------------------- SKILLS DATA ----------------------
const skillsData = [
  {
    title: "Networking",
    icon: <FaNetworkWired size={24} className="text-blue-400" />,
    skills: [
      { name: "VLANs", icon: <FaNetworkWired className="text-blue-300" /> },
      { name: "DHCP", icon: <FaNetworkWired className="text-blue-300" /> },
      { name: "DNS", icon: <FaNetworkWired className="text-blue-300" /> },
      { name: "VPN", icon: <FaNetworkWired className="text-blue-300" /> },
      { name: "Subnetting", icon: <FaNetworkWired className="text-blue-300" /> },
      { name: "UniFi (Controller & Firewall)", icon: <FaNetworkWired className="text-blue-300" /> },
    ],
  },
  {
    title: "Systems",
    icon: <FaServer size={24} className="text-green-400" />,
    skills: [
      { name: "Windows 10/11", icon: <FaWindows className="text-blue-500" /> },
      { name: "Windows Server (AD, GPO)", icon: <FaWindows className="text-blue-500" /> },
      { name: "Linux (Ubuntu)", icon: <SiLinux className="text-gray-500" /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaTools size={24} className="text-yellow-400" />,
    skills: [
      { name: "Jira", icon: <SiJira className="text-blue-600" /> },
      { name: "Git", icon: <SiGit className="text-red-600" /> },
      { name: "OS Imaging Tools", icon: <FaTools className="text-yellow-400" /> },
      { name: "VS Code", icon: <FaTools className="text-yellow-400" /> },
      { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    title: "Scripting",
    icon: <FaTerminal size={24} className="text-purple-400" />,
    skills: [
      { name: "Python", icon: <SiPython className="text-yellow-300" /> },
      { name: "Bash", icon: <FaTerminal className="text-purple-400" /> },
    ],
  },
  {
    title: "Languages",
    icon: <FaLanguage size={24} className="text-indigo-400" />,
    skills: [
      { name: "English (Fluent)", icon: <FaLanguage className="text-indigo-600" /> },
      { name: "Vietnamese (Fluent)", icon: <FaLanguage className="text-red-500" /> },
    ],
  },
];

// Animation
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <>
      {/* EXPERIENCE SECTION */}
      <motion.section
        id="experience"
        className="py-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900"
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-8 text-gray-300 dark:text-gray-600"
          >
            My professional background
          </motion.p>

          <ol className="relative border-l-2 border-gray-600 dark:border-gray-300 pl-6 space-y-12">
            {experienceData.map((exp, idx) => (
              <motion.li key={idx} variants={fadeInUp} className="relative">
                <span className="absolute -left-6 top-2 w-3 h-3 bg-purple-500 dark:bg-blue-500 rounded-full ring-4 ring-gray-900 dark:ring-white"></span>

                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="italic text-gray-300 dark:text-gray-700">{exp.company}</p>
                <p className="text-sm text-gray-400 dark:text-gray-600">
                  {exp.date} • {exp.location}
                </p>

                <ul className="list-disc ml-6 mt-3 space-y-1 text-gray-300 dark:text-gray-700">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.section>

      <div className="w-full h-px bg-gray-800 dark:bg-gray-200 opacity-60 my-8" />

      {/* SKILLS SECTION */}
      <motion.section
        id="skills"
        className="py-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900"
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
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
                key={idx}
                variants={fadeInUp}
                className="border border-gray-700 dark:border-gray-300 rounded-xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  {group.icon}
                  <span className="text-xl font-semibold">{group.title}</span>
                </div>

                <ul className="space-y-3">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
