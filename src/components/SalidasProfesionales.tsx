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
    <section id="salidas-profesionales" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800 dark:text-blue-300">Salidas Profesionales</h2>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          El Grado Superior en Desarrollo de Aplicaciones Web te abre las puertas a diversas oportunidades laborales en el sector tecnológico, incluyendo:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careers.map((career, index) => (
            <div key={index} className="text-center">
              <career.icon className="w-16 h-16 mx-auto mb-4 text-blue-700 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">{career.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalidasProfesionales;