import React from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-blue-800 dark:bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="./public/logo.png"
            alt="Logo IES Tetuán"
            className="w-20 h-12 mr-4"
          />
          <a
            href="https://www.iestetuan.es/cmsj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold"
          >
            IES Tetuán
          </a>
        </div>
        <nav className="hidden md:flex space-x-4">
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
            className="bg-blue-700 dark:bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500"
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
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
          <button className="md:hidden">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
