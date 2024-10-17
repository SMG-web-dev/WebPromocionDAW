import React from 'react';
import { motion } from 'framer-motion';

const modules = [
  {
    year: 1,
    subjects: [
      { name: "Programación", description: "Fundamentos de programación y algoritmos", hours: 230 },
      { name: "Bases de Datos", description: "Diseño y gestión de bases de datos", hours: 165 },
      { name: "Lenguajes de Marcas", description: "HTML, CSS y XML", hours: 140 },
      { name: "Sistemas Informáticos", description: "Arquitectura y mantenimiento de sistemas", hours: 170 },
      { name: "Entornos de Desarrollo", description: "IDEs y herramientas de desarrollo", hours: 90 },
      { name: "Formación y Orientación Laboral", description: "Preparación para el mundo laboral", hours: 90 },
    ]
  },
  {
    year: 2,
    subjects: [
      { name: "Desarrollo Web Entorno Cliente", description: "JavaScript y frameworks frontend", hours: 125 },
      { name: "Desarrollo Web Entorno Servidor", description: "PHP, Java EE o ASP.NET", hours: 165 },
      { name: "Despliegue de Aplicaciones Web", description: "Configuración de servidores web", hours: 85 },
      { name: "Diseño de Interfaces Web", description: "UX/UI y accesibilidad", hours: 120 },
      { name: "Proyecto DAW", description: "Desarrollo de un proyecto web completo", hours: 30 },
      { name: "Empresa e Iniciativa Emprendedora", description: "Creación y gestión de empresas", hours: 65 },
      { name: "Formación en Centros de Trabajo", description: "Prácticas en empresas del sector", hours: 370 },
    ]
  }
];

const PlanEstudios: React.FC = () => {
  return (
    <section id="plan-estudios" className="py-12 sm:py-16 md:py-20 bg-gray-200 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-blue-800 dark:text-blue-300"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Plan de Estudios
        </motion.h2>
        {modules.map((year, yearIndex) => (
          <motion.div
            key={yearIndex}
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: yearIndex * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-700 dark:text-blue-400">{year.year}º Año</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {year.subjects.map((module, index) => (
                <motion.div
                  key={index}
                  className={`p-4 sm:p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${index % 2 === 0 ? 'bg-blue-100 dark:bg-blue-800 hover:bg-blue-200 dark:hover:bg-blue-700' : 'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 text-blue-800 dark:text-blue-300">{module.name}</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">{module.description}</p>
                  <p className="text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-400">{module.hours} horas</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlanEstudios;