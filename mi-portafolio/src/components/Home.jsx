import { motion } from 'framer-motion';
import React from 'react';
import logo from '../assets/logo-512.png';

const Home = () => {
    return (
        <section
            id="inicio"
            className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center  text-white"
        >
            {/* Lado izquierdo: Logo animado continuamente */}
            <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.img
                    src={logo}
                    alt="Logo EmerSoft"
                    className="w-80 h-80 md:w-[24rem] md:h-[24rem]"
                    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                />
            </motion.div>

            {/* Lado derecho: Nombre + Slogan */}
            <motion.div
                className="flex flex-col justify-center items-center md:items-start px-6 md:px-12 text-center md:text-left space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <motion.h1
                    className="text-6xl md:text-7xl font-extrabold tracking-tight text-[#4ACAE2]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    EmerSoft
                </motion.h1>

                <motion.p
                    className="text-2xl md:text-3xl text-[#B3B3B3] leading-snug"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    Codificando ideas,<br />
                    creando realidades.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Home;