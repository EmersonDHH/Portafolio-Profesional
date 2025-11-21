/* eslint-disable no-unused-vars */
// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitch from './LanguageSwitch';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const { t } = useTranslation();


  const navItems = [
    { name: t('navbar.menu.home'), href: 'top' },
    { name: t('navbar.menu.about'), href: '#sobreMi' },
    { name: t('navbar.menu.tools'), href: '#herramientas' },
    { name: t('navbar.menu.projects'), href: '#proyectos' },
    { name: t('navbar.menu.contact'), href: '#contacto' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-colors duration-300 ${atTop ? 'bg-[#2D2D2D]/30' : 'bg-[#2D2D2D]'
        }`}

    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2"
        >
          {/* <img src={logo} alt="Logo" className="w-8 h-8" /> */}
          <span className="text-xl font-bold text-[#4ACAE2]">EmerSoft</span>
        </motion.a>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-[#B3B3B3] hover:text-[#4ACAE2] transition-transform"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Links desktop */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href === "top" ? "#" : item.href}
              onClick={(e) => {
                if (item.href === "top") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="relative group text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors"
            >
              {item.name}
              <span
                className="
        absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#4ACAE2] transition-all
        group-hover:w-full
      "
              />
            </a>
          ))}

        </nav>

        {/* Íconos */}
        <div className="hidden md:flex items-center space-x-4">
          {[{
            href: 'https://github.com/EmersonDHH',
            icon: <Github size={20} />
          }, {
            href: 'https://www.linkedin.com/in/emerson-hidalgoh/',
            icon: <Linkedin size={20} />
          }, {
            icon: <Globe size={20} />
          }].map(({ href, icon }, idx) => (
            <motion.a
              key={idx}
              href={href}
              whileHover={{ scale: 1.2 }}
              className="text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors"
            >
              {icon}
            </motion.a>
          ))}
          <LanguageSwitch />

        </div>
      </div>

      {/* Menú móvil con animación */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`md:hidden overflow-hidden transition-colors duration-100 ${atTop ? 'bg-[#2D2D2D]/50' : 'bg-[#2D2D2D]'}`}
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              {/* {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors text-lg"
                >
                  {item.name}
                </a>

              ))} */}
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      if (item.href === "top") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const target = document.querySelector(item.href);
                        if (target) {
                          target.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }, 100);
                  }}
                  className="text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors text-lg"
                >
                  {item.name}
                </button>
              ))}

              <LanguageSwitch />

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
