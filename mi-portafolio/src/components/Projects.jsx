import React, { useState } from 'react';
import { motion } from 'framer-motion';

import logo512 from '../assets/logo-512.png'

function Projects() {
  const projects = [
    {
      image: logo512,
      title: 'Proyecto 1',
      description: 'Este es el primer proyecto. Una breve descripción aquí.',
      link: '#',
    },
    {
      image: logo512,
      title: 'Proyecto 2',
      description: 'Este es el segundo proyecto. Más detalles sobre este proyecto.',
      link: '#',
    },
    {
      image: logo512,
      title: 'Proyecto 3',
      description: 'Este es el tercer proyecto. Otra descripción breve.',
      link: '#',
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
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 py-10">
      {/* Carrusel */}
      <div className="relative flex items-center justify-center w-full max-w-6xl">
        {projects.map((project, i) => {
          const isActive = i === index;
          const isPrev = i === (index - 1 + projects.length) % projects.length;

          // Si no es activo ni previo, no se muestra
          if (!isActive && !isPrev) return null;

          return (
            <motion.div
              key={i}
              className="absolute w-[90%] md:w-[85%] cursor-pointer"
              initial={{ scale: 0.8, opacity: 0, x: 100 }}
              animate={{
                scale: isActive ? 1 : 0.75,
                opacity: isActive ? 1 : 0.4,
                zIndex: isActive ? 10 : 1,
                x: isActive ? 0 : '-65%',
              }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row bg-[#222] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/2 h-64 md:h-[400px] object-cover"
                />
                <div className="p-6 flex flex-col justify-between w-full md:w-1/2">
                  <div>
                    <h2 className="text-3xl font-bold text-[#4ACAE2] mb-2">{project.title}</h2>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  </div>
                  <a
                    href={project.link}
                    className="inline-block bg-[#4ACAE2] hover:bg-[#37a2b0] text-[#1E1E1E] font-semibold px-4 py-2 rounded w-max"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Botones */}
      <button
        onClick={prev}
        className="absolute left-4 bottom-10 bg-[#4ACAE2] hover:bg-[#37a2b0] text-[#1E1E1E] w-10 h-10 rounded-full flex items-center justify-center"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute right-4 bottom-10 bg-[#4ACAE2] hover:bg-[#37a2b0] text-[#1E1E1E] w-10 h-10 rounded-full flex items-center justify-center"
      >
        ▶
      </button>
    </div>
  );
}

export default Projects;
