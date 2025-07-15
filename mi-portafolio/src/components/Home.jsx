import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import logo from '../assets/appleIcon.png'

const Home = () => {
  const scrollDown = () => {
    const next = document.getElementById("habilidades");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <section
      id="inicio"
      className="relative pt-12 min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center text-white"
    >
      <motion.div
        className="flex items-center justify-center z-10"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="
          relative
          w-80 h-80
          rounded-full
          flex items-center justify-center
          bg-[#2D2D2D]
          border-2 border-[#4ACAE2]/60
          shadow-[0_0_80px_#4ACAE240]
        ">

          <motion.img
            src={logo}
            alt="Logo EmerSoft"
            className="w-44 h-44 object-contain"
            animate={{
              y: [0, -15, 0], // Subir a -15px y volver
            }}
            transition={{
              duration: 4, // Más lento
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />

        </div>
      </motion.div>


      {/* Right: Title, subtitle, CTA */}
      <motion.div
        className="flex flex-col justify-center items-center md:items-start px-6 md:px-12 text-center md:text-left space-y-6 z-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {/* Etiqueta superior */}
        <motion.div
          className="inline-flex items-center bg-[#4ACAE2]/20 border border-[#4ACAE2]/50 text-[#4ACAE2] px-4 py-1 rounded-full text-sm font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          💻 Software Developer
        </motion.div>

        {/* Título */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#4ACAE2]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          EmerSoft
        </motion.h1>

        {/* Slogan */}
        <motion.p
          className="text-lg md:text-xl text-[#B3B3B3] leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Especializado en la construcción de plataformas digitales robustas y optimizadas, centradas en la usabilidad y las mejores prácticas de desarrollo.
        </motion.p>

        {/* Botones */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.a
            href="/cv/CV-EmerSoft.pdf" // Reemplaza con tu ruta de CV
            download
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#4ACAE2] text-gray-900 rounded-lg font-semibold hover:scale-105 transform transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Descargar CV
          </motion.a>
          <motion.a
            href="#contacto"
            className="flex items-center justify-center px-6 py-3 border-2 border-[#4ACAE2] rounded-lg font-semibold hover:bg-[#4ACAE2] hover:text-gray-900 transform transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contáctame
          </motion.a>
        </motion.div>
      </motion.div>

      <br />
      <br />
      {/* Scroll cue */}
      <motion.div
        onClick={scrollDown}
        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FaArrowDown size={24} className="text-[#4ACAE2]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
