/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown, FaDownload } from "react-icons/fa";
import logo from '../assets/appleIcon.png';
import { useTranslation } from 'react-i18next';


const Home = () => {
  const scrollDown = () => {
    const next = document.querySelector('#sobreMi');
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative pt-12 min-h-[80vh] grid grid-cols-1 md:grid-cols-2 items-center text-white"
    >
      <motion.div
        className="flex items-center justify-center z-10 relative"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Glow detrás */}
        <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-[#4ACAE2]/10 rounded-full blur-2xl"></div>

        <div
          className="
            relative
            w-56 h-56
            sm:w-72 sm:h-72
            md:w-80 md:h-80
            rounded-full
            flex items-center justify-center
            border-2 border-[#4ACAE2]/60
            shadow-[0_0_80px_#4ACAE240]
          "
        >
          <motion.img
            src={logo}
            alt="Logo EmerSoft"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 object-contain"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
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
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <motion.div
          className="
          inline-flex
          items-center
          bg-[#4ACAE2]/20
          border border-[#4ACAE2]/50
          text-[#4ACAE2]
          px-4 py-1
          rounded-full
          text-sm
          font-medium
          mt-1 md:mt-0
        "
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          💻 {t('hero.badge')}
        </motion.div>


        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#4ACAE2]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
        >
          EmerSoft
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-[#B3B3B3] leading-snug"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto justify-center md:justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          <motion.a
            href="/Curriculum-Emerson-Hidalgo-Espanol.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#4ACAE2] text-gray-900 rounded-lg font-semibold hover:scale-105 hover:shadow-[0_0_20px_#4ACAE2] transform transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            {t('hero.buttons.download_cv')}
          </motion.a>
          <motion.a
            href="#contacto"
            className="flex items-center justify-center px-6 py-3 border-2 border-[#4ACAE2] rounded-lg font-semibold hover:bg-[#4ACAE2] hover:text-gray-900 hover:shadow-[0_0_20px_#4ACAE2] transform transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.buttons.contact_me')}
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="col-span-full flex justify-center mt-4">
        <motion.div
          onClick={scrollDown}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
        >
          <FaArrowDown size={20} className="text-[#4ACAE2] drop-shadow-[0_0_4px_#4ACAE2]" />
        </motion.div>
      </div>



    </section>
  );
};

export default Home;
