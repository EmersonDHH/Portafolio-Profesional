import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo512 from "../assets/logo-512.png";

export default function Projects() {
  const projects = [
    {
      image: logo512,
      title: "Proyecto 1",
      description: "Este es el primer proyecto. Una breve descripción aquí.",
      link: "#",
    },
    {
      image: logo512,
      title: "Proyecto 2",
      description: "Este es el segundo proyecto. Más detalles sobre este proyecto.",
      link: "#",
    },
    {
      image: logo512,
      title: "Proyecto 3",
      description: "Este es el tercer proyecto. Otra descripción breve.",
      link: "#",
    },
    {
      image: logo512,
      title: "Proyecto 4",
      description: "Este es el cuarto proyecto. Descripción resumida.",
      link: "#",
    },
    {
      image: logo512,
      title: "Proyecto 5",
      description: "Este es el quinto proyecto. Información relevante.",
      link: "#",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="proyectos" className="py-20 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
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
            Proyectos
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 text-[#B3B3B3] text-lg max-w-2xl mx-auto"
          >
            Algunos de los proyectos que he desarrollado recientemente.
          </motion.p>
        </motion.div>

        {/* Carrusel */}
        <div className="relative flex items-center justify-center w-full max-w-5xl mx-auto mt-8">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              <div className="flex flex-col md:flex-row bg-[#2D2D2D]/60 backdrop-blur-sm border border-[#4ACAE2]/20 rounded-lg overflow-hidden hover:shadow-[0_0_20px_#4ACAE220] transition">
                <img
                  src={projects[index].image}
                  alt={projects[index].title}
                  className="w-full md:w-1/2 h-64 md:h-[400px] object-cover"
                />
                <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
                  <div>
                    <h3 className="text-2xl font-bold text-[#4ACAE2] mb-2">
                      {projects[index].title}
                    </h3>
                    <p className="text-[#B3B3B3] mb-4">
                      {projects[index].description}
                    </p>
                  </div>
                  <a
                    href={projects[index].link}
                    className="inline-block bg-[#4ACAE2] hover:bg-[#37a2b0] text-[#1E1E1E] font-semibold px-4 py-2 rounded transition"
                  >
                    Ver más
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
            className="bg-[#4ACAE2] hover:bg-[#37a2b0] text-[#1E1E1E] w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            ◀
          </button>
          <div className="flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-[#4ACAE2]" : "bg-[#4ACAE2]/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="bg-[#4ACAE2] hover:bg-[#37a2b0] text-[#1E1E1E] w-10 h-10 rounded-full flex items-center justify-center transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
