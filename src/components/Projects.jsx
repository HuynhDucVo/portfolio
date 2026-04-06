import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const projects = [
  {
    img: '/assets/img/homelab.jpg',
    title: 'Home Lab – Active Directory & Networking',
    desc: 'Virtualized Windows Server + Linux lab with VLANs, AD, DNS, DHCP, GPO, VPN, and simulated outages for real troubleshooting practice.',
    github: 'https://github.com/HuynhDucVo/HomeLab',
  },
  {
    img: '/assets/img/jira.jpg',
    title: 'IT Ticketing System Simulation',
    desc: 'Jira Service Management environment with SLA rules, escalation workflows, documentation standards, and full incident lifecycle simulation.',
    github: 'https://github.com/HuynhDucVo/JiraTicket', 
  },
  {
    img: '/assets/img/cilis-docs.jpg',
    title: 'Cilis Docs – Collaborative Cloud Editor',
    desc: 'Built with Next.js, Liveblocks & Yjs CRDTs for real‑time collaboration, TipTap rich‑text, Clerk auth, and MongoDB storage.',
    github: 'https://github.com/HuynhDucVo/cilisdocs',
  },
  {
    img: '/assets/img/voltguard.png',
    title: 'VoltGuard – Smart Energy Tracker',
    desc: 'Flask + PostgreSQL backend, Auth0 auth, Chart.js analytics, Google Maps & AI chatbot integration.',
    github: 'https://github.com/FortuneDayZ/VoltGuard',
  },
  {
    img: '/assets/img/WebAPI.jpg',
    title: 'Full-Stack Web App',
    desc: 'A full-stack web application built with React JS for the frontend, .NET Core Web API as the backend, and Microsoft SQL Server as the database.',
    github: 'https://github.com/HuynhDucVo/Web-API-SQL-Server-',
  },
  {
    img: '/assets/img/Library.jpg',
    title: 'Library Management System',
    desc: 'The Library Management System is a three-tier web application designed to streamline library operations. It allows administrators and users to manage books, borrowing records, and user accounts efficiently.',
    github: 'https://github.com/HuynhDucVo/Library-Management-System',
  },
];

// Framer Motion variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <>  
      <motion.section
        id="portfolio"
        className="py-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900"
        initial="hidden"
        whileInView="visible"
        variants={container}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-8 max-w-5xl flex flex-col items-center">
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-center mb-8 text-gray-300 dark:text-gray-600"
          >
            Some of my recent work
          </motion.p>

          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
            className="mySwiper mt-5"
          >
            {projects.map((p, i) => (
              <SwiperSlide key={i} className="flex justify-center p-4">
                <motion.div
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="transform-gpu will-change-transform flex flex-col md:flex-row bg-gray-800 dark:bg-white text-white dark:text-gray-900 rounded-2xl overflow-hidden border border-gray-700 dark:border-gray-300 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="md:w-1/2 w-full">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="object-cover w-full h-48 md:h-full"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 md:w-1/2 flex flex-col justify-between">
                    <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
                      {p.title}
                    </h3>
                    <p className="flex-1 mb-6 text-gray-300 dark:text-gray-700 text-center md:text-left">
                      {p.desc}
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow hover:opacity-90 transition"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
      <div className="w-full h-px bg-gray-800 dark:bg-gray-200 opacity-60 my-8" />
    </>
  );
}
