import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear()
  const navLinks = [
    { label: t('navbar.menu.home'), href: '#' },
    { label: t('navbar.menu.about'), href: '#sobreMi' },
    { label: t('navbar.menu.tools'), href: '#herramientas' },
    { label: t('navbar.menu.projects'), href: '#proyectos' },
    { label: t('navbar.menu.contact'), href: '#contacto' },
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
    <footer className="bg-transparent text-[#B3B3B3] px-6 md:px-16 py-12 border-t border-[#4ACAE2]/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#4ACAE2]">EmerSoft</h2>
          <p className="mt-2">{t('footer.slogan')}</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">{t('footer.navigation')}</h3>
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

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">{t('footer.social')}</h3>
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
            <li><a href="#" className="text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-[#B3B3B3] hover:text-[#4ACAE2] transition-colors">Terms of Use</a></li>
          </ul>
        </div> */}
      </div>

      <div className="mt-12 text-center text-xs text-[#B3B3B3]">
        © {currentYear} EmerSoft. {t('footer.rights')}.
      </div>
    </footer>
  )
}

export default Footer
