import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-transparent text-[#B3B3B3] px-6 md:px-16 py-12 border-t border-[#4ACAE2]/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold text-[#4ACAE2]">EmerSoft</h2>
          <p className="mt-2">Codificando ideas, creando realidades.</p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navegación</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#about" className="hover:text-white transition">Sobre mí</a></li>
            <li><a href="#projects" className="hover:text-white transition">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contacto</a></li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="text-white font-semibold mb-3">Redes</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Github className="text-[#4ACAE2]" />
              <a href="https://github.com/EmersonDHH" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="text-[#4ACAE2]" />
              <a href="www.linkedin.com/in/emerson-hidalgo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="text-[#4ACAE2]" />
              <a href="mailto:ehidalgoh@ucenfotec.ac.cr" className="hover:text-white transition">Email</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Política de privacidad</a></li>
            <li><a href="#" className="hover:text-white transition">Términos de uso</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-[#B3B3B3]">
        © {currentYear} EmerSoft. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer