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
      "Web platform created to help Costa Rican farmers promote and sell their products online efficiently.",
    link: "#",
    technologies: ["Node.js", "MongoDB"],
  },
  {
    image: proyecto3,
    title: "HealthTag",
    description:
      "Medical alert system based on NFC technology to access critical information during emergencies.",
    link: "https://github.com/Alexlop175Cenfotec/HealthTag",
    technologies: [".NET", "SQL Server", "Bootstrap", "JS"],
  },
  {
    image: proyecto4,
    title: "SMT",
    description:
      "Traffic fine management system with user roles and license plate recognition using artificial intelligence.",
    link: "https://github.com/Alexlop175Cenfotec/Proyecto2",
    technologies: [
      ".NET",
      "React",
      "Tailwind",
      "SQL Server",
      "MongoDB",
      "Python (AI)",
    ],
  },
  {
    image: proyecto5,
    title: "CenfoScore",
    description:
      "Platform that allows students to rate professors and make informed decisions about their courses.",
    link: "#",
    technologies: ["FastAPI", "React", "Next.js", "Tailwind", "TypeScript"],
  },
];

export default projects;
