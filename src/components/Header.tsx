import React, { useState } from "react";
import { Menu, Sun, Moon, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo IES Tetuán"
              className="w-12 h-9 mr-2 sm:w-16 sm:h-12 sm:mr-4"
            />
            <a
              href="https://www.iestetuan.es/cmsj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl font-bold"
            >
              IES Tetuán
            </a>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-700"
              aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
            <button
              className="ml-4 md:hidden"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-700 absolute w-full left-0 top-16 z-20`}>
        <div className="container mx-auto px-4 py-2">
          <a href="#plan-estudios" className="block py-2 hover:text-blue-300">
            Plan de estudios
          </a>
          <a href="#salidas-profesionales" className="block py-2 hover:text-blue-300">
            Salidas profesionales
          </a>
          <a href="#proyectos" className="block py-2 hover:text-blue-300">
            Proyectos
          </a>
          <a href="#contacto" className="block py-2 hover:text-blue-300">
            Contacto
          </a>
          <a
            href="https://www.comunidad.madrid/servicios/educacion/admision-formacion-profesional"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 mt-2 bg-blue-600 text-white px-4 rounded-full hover:bg-blue-500 text-center"
          >
            Inscribirse
          </a>
        </div>
      </nav>
      <nav className="hidden md:flex items-center justify-between container mx-auto px-4 py-2">
        <div className="flex space-x-4">
          <a href="#plan-estudios" className="hover:text-blue-300">
            Plan de estudios
          </a>
          <a href="#salidas-profesionales" className="hover:text-blue-300">
            Salidas profesionales
          </a>
          <a href="#proyectos" className="hover:text-blue-300">
            Proyectos
          </a>
          <a href="#contacto" className="hover:text-blue-300">
            Contacto
          </a>
        </div>
        <a
          href="https://www.comunidad.madrid/servicios/educacion/admision-formacion-profesional"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500"
        >
          Inscribirse
        </a>
      </nav>
    </header>
  );
};

export default Header;