import React, { useState, useEffect } from "react";
import { Menu, Sun, Moon, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <header className={`bg-gray-800 text-white overflow-hidden`}>
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className={`transform transition-all duration-1000 ease-out ${isLoaded ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'}`}>
              <img
                src="/logo.png"
                alt="Logo IES Tetuán"
                className="w-12 h-9 mr-2 sm:w-16 sm:h-12 sm:mr-4"
              />
            </div>
            <motion.a
              href="https://www.iestetuan.es/cmsj/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-lg sm:text-xl font-bold transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              {Array.from("IES Tetuán").map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
            </motion.a>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full hover:bg-gray-700 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
              aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
            <button
              className={`ml-4 md:hidden transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <nav className={`${isMenuOpen ? 'max-h-screen' : 'max-h-0'} md:hidden bg-gray-700 overflow-hidden transition-all duration-500 ease-in-out`}>
        <div className="container mx-auto px-4 py-2">
          {['Plan de estudios', 'Salidas profesionales', 'Proyectos', 'Contacto'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="block py-2 hover:text-blue-300 transition-all duration-300 ease-out"
              style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)', transitionDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
          <motion.a
            href="https://www.comunidad.madrid/servicios/educacion/admision-formacion-profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 mt-2 bg-blue-600 text-white px-4 rounded-full hover:bg-blue-500 text-center transition-all duration-300 ease-out"
            style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)', transitionDelay: '400ms' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Inscribirse
          </motion.a>
        </div>
      </nav>
      <nav className={`hidden md:block`}>
        <div className={`flex items-center justify-between container mx-auto px-4 py-2 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex space-x-4">
            {['Plan de estudios', 'Salidas profesionales', 'Proyectos', 'Contacto'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                className={`hover:text-blue-300 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>
          <motion.a
            href="https://www.comunidad.madrid/servicios/educacion/admision-formacion-profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-full transition-all duration-300 ease-in-out hover:bg-blue-500 hover:shadow-lg"
            whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
          >
            Inscribirse
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Header;