// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Globe, ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo-512.png'

const navItems = [
  { name: 'Inicio',     href: '#inicio' },
  { name: 'Sobre Mi',    href: '#sobreMi' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Contacto',  href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY < 50) // <50px del top → transparente
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        sticky top-0 z-50 w-full transition-colors duration-300
        ${atTop 
          ? 'bg-transparent'       /* Transparente en Home */ 
          : 'bg-[#2D2D2D] shadow-md' /* Sólido al bajar */
        }
      `}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo + marca */}
        <a href="#home" className="flex items-center space-x-2">
          <img src={logo} alt="EmerSoft Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-[#4ACAE2]">EmerSoft</span>
        </a>

        {/* Hamburguesa móvil */}
        <button
          className="md:hidden text-[#B3B3B3] hover:text-[#4ACAE2]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Enlaces desktop */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Iconos + idioma desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com" className="text-[#B3B3B3] hover:text-[#4ACAE2]">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" className="text-[#B3B3B3] hover:text-[#4ACAE2]">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-[#B3B3B3] hover:text-[#4ACAE2]">
            <Globe size={20} />
          </a>
          <button className="flex items-center space-x-1 text-[#B3B3B3] hover:text-[#4ACAE2]">
            <span>ES</span><ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className={atTop ? 'bg-transparent' : 'bg-[#2D2D2D]'}>
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors text-lg"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* iconos + idioma aquí... */}
          </nav>
        </div>
      )}
    </header>
  )
}
