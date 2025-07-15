import React from 'react';
import { motion } from 'framer-motion';
// import avatar from '../assets/avatar.jpg'; // Reemplaza con tu foto

const AboutMe = () => {
  return (
    <section
      id="SobreMi"
      className="py-20 text-white"
    >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Avatar Foto */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src=""
            alt="Foto de [Tu Nombre]"
            className="w-64 h-64 rounded-full border-4 border-[#4ACAE2] object-cover"
          />
        </motion.div>

        {/* Texto Sobre Mí */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-[#4ACAE2]">Sobre mí</h2>
          <p className="text-lg text-[#B3B3B3] leading-relaxed">
            ¡Hola! Soy [Tu Nombre], desarrollador full-stack con pasión por crear
            soluciones web elegantes y funcionales. Me especializo en tecnologías
            como React, Node.js y bases de datos SQL/NoSQL.
          </p>
          <ul className="list-disc list-inside text-[#B3B3B3] space-y-2">
            <li>🔹 Experiencia en desarrollo de SPAs con React y Tailwind CSS.</li>
            <li>🔹 Implementación de APIs REST y GraphQL con Node.js.</li>
            <li>🔹 Gestión de bases de datos en PostgreSQL y MongoDB.</li>
            <li>🔹 Apasionado por la optimización de rendimiento y UX.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
