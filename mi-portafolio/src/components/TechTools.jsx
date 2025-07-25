import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  SiHtml5,
  SiReact,
  SiJavascript,
  SiSpringboot,
  SiDotnet,
  SiOracle,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiTailwindcss,
} from 'react-icons/si';
import { FaDatabase, FaJava, FaNodeJs } from 'react-icons/fa'; // Ícono genérico
// Define your technology categories and items
const techCategories = [
  {
    title: 'Front-end',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Back-end',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: 'NodeJS', icon: FaNodeJs },
      { name: 'ASP.NET Core', icon: SiDotnet },
    ],
  },
  {
    title: 'Bases de Datos',
    items: [
      { name: 'Oracle', icon: SiOracle },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQL Server', icon: FaDatabase },
    ],
  },
  {
    title: 'Otros',
    items: [
      { name: 'GitHub', icon: SiGithub },
    ],
  },
];

export default function TechTools() {
  const allItems = techCategories.flatMap(cat => cat.items);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="herramientas" className="py-5 px-4 md:px-8 scroll-mt-14 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
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
            Herramientas Tecnológicas
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="mt-4 text-[#B3B3B3] text-lg max-w-2xl mx-auto"
          >
            Tecnologías y frameworks que utilizo para crear aplicaciones robustas, modernas y eficientes.
          </motion.p>
        </motion.div>


        {/* Category Cards with simple hover animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="bg-[#2D2D2D]/60 backdrop-blur-sm border border-[#4ACAE2]/20 rounded-lg p-6 hover:shadow-[0_0_20px_#4ACAE220]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >


              <h3 className="text-2xl font-semibold mb-4 border-b border-[#4ACAE2]/50 pb-2">
                {cat.title}
              </h3>
              <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cat.items.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex flex-col items-center space-y-2">
                    <Icon className="text-4xl text-[#4ACAE2]" />
                    <span className="text-sm text-[#B3B3B3]">{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Automatic Continuous Carousel using react-slick */}
        <div className="mt-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="text-center mb-6"
          >
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-3xl md:text-4xl font-bold text-[#4ACAE2]"
            >
              Todas las Tecnologías
            </motion.h3>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mt-2 text-[#B3B3B3] text-lg max-w-2xl mx-auto"
            >
              Un vistazo general a las herramientas y tecnologías que forman parte de mi stack de desarrollo.
            </motion.p>
          </motion.div>

          <Slider {...settings} className="space-x-4">
            {allItems.map(({ name, icon: Icon }) => (
              <div key={name} className="px-2">
                <div className="w-full h-20 bg-[#2D2D2D]/60 backdrop-blur-sm border border-[#4ACAE2]/20 rounded-lg flex flex-col items-center justify-center">
                  <Icon className="text-3xl text-[#4ACAE2] mb-1" />
                  <span className="text-sm text-[#B3B3B3]">{name}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
