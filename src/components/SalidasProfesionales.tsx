import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';

const careers = [
  { title: 'Desarrollador web frontend', icon: Globe },
  { title: 'Desarrollador web backend', icon: Server },
  { title: 'Desarrollador full-stack', icon: Code },
  { title: 'Administrador de bases de datos', icon: Database },
];

const SalidasProfesionales: React.FC = () => {
  return (
    <section id="salidas-profesionales" className="py-12 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 text-blue-800 dark:text-blue-300">Salidas Profesionales</h2>
        <p className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          El Grado Superior en Desarrollo de Aplicaciones Web te abre las puertas a diversas oportunidades laborales en el sector tecnológico, incluyendo:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {careers.map((career, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <career.icon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-blue-700 dark:text-blue-400" />
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 dark:text-blue-300">{career.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalidasProfesionales;