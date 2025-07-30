import proyecto1 from "../assets/projects/Ecosecha.png";
// import proyecto2 from "../assets/projects/logo-512-copy.png";
import proyecto3 from "../assets/projects/HealthTag.png";
import proyecto4 from "../assets/projects/SMT-Multas.png";
import proyecto5 from "../assets/projects/CenfoScore.png";

const projects = [
  {
    image: proyecto1,
    title: "Ecosecha",
    description:
      "Platforma web creada para ayudar a agricultores costarricenses a promocionar y vender sus productos en línea de forma eficiente.",
    link: "#",
    technologies: ["Node.js", "MongoDB"],
  },
  {
    image: proyecto3,
    title: "HealthTag",
    description:
      "Sistema de alerta médica basado en NFC para acceder a información clave en emergencias.",
    link: "https://github.com/Alexlop175Cenfotec/HealthTag",
    technologies: [".NET", "SQL Server", "Bootstrap", "JS"],
  },
  {
    image: proyecto4,
    title: "SMT",
    description:
      "Sistema de multas de tránsito con roles de usuario y reconocimiento de placas mediante inteligencia artificial.",
    link: "https://github.com/Alexlop175Cenfotec/Proyecto2",
    technologies: [
      ".NET",
      "React",
      "Tailwind",
      "SQL Server",
      "MongoDB",
      "Python (IA)",
    ],
  },
  {
    image: proyecto5,
    title: "CenfoScore",
    description:
      "Plataforma para que los estudiantes califiquen profesores y tomen decisiones informadas sobre sus cursos.",
    link: "#",
    technologies: ["FastAPI", "React", "Next.js", "Tailwind", "TypeScript"],
  },
];

export default projects;
