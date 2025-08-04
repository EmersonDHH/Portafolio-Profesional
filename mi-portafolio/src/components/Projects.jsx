/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import dataEN from "../data/projectsData.en";
import dataES from "../data/projectsData.es";

export default function Projects() {
  const { t, i18n } = useTranslation(); 
  const lang = i18n.language;

  const projects = lang === 'es' ? dataES : dataEN;

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="proyectos" className="py-20 px-4 md:px-8 scroll-mt-32 sm:scroll-mt-0  text-white w-full">
      <div className="w-full max-w-7xl mx-auto">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-5xl font-extrabold text-[#4ACAE2]"
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 text-[#B3B3B3] text-lg max-w-2xl mx-auto"
          >
            {t('projects.description')}
          </motion.p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row bg-[#2D2D2D]/60 backdrop-blur-sm border border-[#4ACAE2]/20 rounded-lg overflow-hidden hover:shadow-[0_0_20px_#4ACAE220] transition">
                <img
                  src={projects[index].image}
                  alt={projects[index].title}
                  className="w-full h-60 sm:h-72 md:w-2/3 md:h-[400px] object-cover"
                />
                <div className="p-6 flex flex-col justify-between w-full md:w-1/3">

                  <div>
                    <h3 className="text-2xl font-bold text-[#4ACAE2] mb-2">
                      {projects[index].title}
                    </h3>
                    <p className="text-[#B3B3B3] mb-4">
                      {projects[index].description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {projects[index].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border cursor-pointer transition-all hover:bg-[#4ACAE2] border-[#4ACAE2] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={projects[index].link}
                    className="inline-flex items-center text-center justify-center bg-[#4ACAE2] hover:bg-[#37a2b0] text-[#1E1E1E] font-semibold px-4 py-2 mt-3 rounded transition"
                  >
                    {t('projects.gitHub')} <SiGithub className="ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botones y Paginación */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="bg-[#4ACAE2] hover:cursor-pointer hover:bg-[#37a2b0] text-[#1E1E1E] w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full hover:cursor-pointer transition ${i === index ? "bg-[#4ACAE2]" : "bg-[#4ACAE2]/30"
                  }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="bg-[#4ACAE2] hover:cursor-pointer hover:bg-[#37a2b0] text-[#1E1E1E] w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
