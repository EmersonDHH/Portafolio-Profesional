import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navLinks = [
    { label: "Inicio", href: "#" },
    { label: "Sobre mí", href: "#sobreMi" },
    { label: "Herramientas", href: "#herramientas" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/EmersonDHH",
      icon: <Github className="text-[#4ACAE2]" />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emerson-hidalgo/",
      icon: <Linkedin className="text-[#4ACAE2]" />,
    },
    {
      label: "Email",
      href: "mailto:ehidalgoh@ucenfotec.ac.cr",
      icon: <Mail className="text-[#4ACAE2]" />,
    },
  ];

  return (
    <footer className="bg-transparent text-[#B3B3B3]  px-6 md:px-16 py-12 border-t border-[#4ACAE2]/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold text-[#4ACAE2]">EmerSoft</h2>
          <p className="mt-2">Codificando ideas, creando realidades.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="relative text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#4ACAE2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="text-white font-semibold mb-3">Redes</h3>
          <ul className="space-y-2">
            {socialLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                {link.icon}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#4ACAE2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>


        {/* Legal */}
        {/* <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors">Política de privacidad</a></li>
            <li><a href="#" className="text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors">Términos de uso</a></li>
          </ul>
        </div> */}
      </div>

      <div className="mt-12 text-center text-xs text-[#B3B3B3]">
        © {currentYear} EmerSoft. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer