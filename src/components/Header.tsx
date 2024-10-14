import React, { useState } from "react";
import { Menu, Sun, Moon, X } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-blue-800 dark:bg-blue-900 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
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
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto mt-4 md:mt-0`}>
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
          <a
            href="#inscribirse"
            className="bg-blue-700 dark:bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 inline-block"
          >
            Inscribirse
          </a>
        </nav>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="mr-4 p-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-800"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;