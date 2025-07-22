import React from "react";
import { motion } from "framer-motion";
import { Code, Database, TrendingUp, Layers } from "lucide-react";

const skills = [
  {
    icon: <Code size={28} />,
    title: "Desarrollo Frontend",
    description: "Creación de interfaces web con React, HTML, CSS y JavaScript."
  },
  {
    icon: <Database size={28} />,
    title: "Bases de Datos",
    description: "Trabajo con SQL Server y MongoDB en proyectos web."
  },
  {
    icon: <Layers size={28} />,
    title: "Backend y APIs",
    description: "Desarrollo de APIs REST usando Node.js y ASP.NET Core."
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Mejora Continua",
    description: "Compromiso con el aprendizaje y la optimización constante."
  }
];

const AboutMe = () => {
  return (
    <section id="sobreMi" className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
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
            Sobre mí
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-4 text-[#B3B3B3] text-lg max-w-2xl mx-auto"
          >
            Desarrollador con experiencia en aplicaciones web Full-Stack, trabajando con tecnologías como React, Node.js, C# y bases de datos. Proactivo, adaptable y comprometido con el aprendizaje constante y la creación de soluciones de valor.
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
