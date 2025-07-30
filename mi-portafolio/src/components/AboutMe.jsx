/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, TrendingUp, Layers } from "lucide-react";
import { useTranslation } from 'react-i18next';


const AboutMe = () => {


  const { t } = useTranslation();

  const skills = [
    {
      icon: <Code size={28} />,
      title: t('about.skills.0.title'),
      description: t('about.skills.0.description')
    },
    {
      icon: <Database size={28} />,
      title: t('about.skills.1.title'),
      description: t('about.skills.1.description')
    },
    {
      icon: <Layers size={28} />,
      title: t('about.skills.2.title'),
      description: t('about.skills.2.description')
    },
    {
      icon: <TrendingUp size={28} />,
      title: t('about.skills.3.title'),
      description: t('about.skills.3.description')
    }
  ];

  return (
    <section id="sobreMi" className="py-20 px-4 md:px-8 text-white w-full">

      <div className="w-full max-w-7xl mx-auto">
        {/* Título y descripción */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-4xl md:text-5xl font-extrabold text-[#4ACAE2]"
          >
            {t('about.title')}
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-4 text-[#B3B3B3] text-lg max-w-2xl mx-auto"
          >
            {t('about.description')}
          </motion.p>
        </motion.div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2D2D2D]/60 backdrop-blur-sm border border-[#4ACAE2]/20 rounded-lg p-6 flex items-start space-x-4 hover:shadow-[0_0_20px_#4ACAE220]"
            >
              <div className="text-[#4ACAE2] pt-4">{skill.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className="text-[#B3B3B3] mt-1">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
