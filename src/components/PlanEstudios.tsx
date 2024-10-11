import React from 'react';

const modules = [
  {
    year: 1,
    subjects: [
      { name: 'Sistemas informáticos', description: 'Fundamentos de hardware y software', hours: 170 },
      { name: 'Bases de Datos', description: 'Diseño y gestión de bases de datos', hours: 200 },
      { name: 'Programación', description: 'Fundamentos de programación y algoritmos', hours: 230 },
      { name: 'Lenguajes de marcas y sistemas de gestión de información', description: 'HTML, CSS, XML y JSON', hours: 140 },
      { name: 'Entornos de desarrollo', description: 'IDEs y herramientas de desarrollo', hours: 90 },
      { name: 'Formación y orientación laboral', description: 'Preparación para el mundo laboral', hours: 90 },
    ]
  },
  {
    year: 2,
    subjects: [
      { name: 'Desarrollo web en entorno cliente', description: 'JavaScript y frameworks frontend', hours: 130 },
      { name: 'Desarrollo web en entorno servidor', description: 'PHP, Java o .NET para backend', hours: 170 },
      { name: 'Despliegue de aplicaciones web', description: 'Configuración de servidores web', hours: 100 },
      { name: 'Diseño de interfaces web', description: 'UX/UI y diseño responsivo', hours: 130 },
      { name: 'Empresa e iniciativa emprendedora', description: 'Fundamentos para crear tu propia empresa', hours: 65 },
      { name: 'Inglés Técnico Superior', description: 'Vocabulario y expresiones técnicas en inglés relacionadas con el desarrollo web y la programación.', hours: 40 },
      { name: 'Proyecto de desarrollo de aplicaciones web', description: 'Proyecto final integrador', hours: 40 },
      { name: 'Formación en centros de trabajo', description: 'Prácticas en empresas', hours: 370 },
    ]
  }
];

const PlanEstudios: React.FC = () => {
  return (
    <section id="plan-estudios" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800 dark:text-blue-300">Plan de Estudios</h2>
        {modules.map((year, yearIndex) => (
          <div key={yearIndex} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-400">{year.year}º Año</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {year.subjects.map((module, index) => (
                <div key={index} className={`p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-blue-100 dark:bg-blue-800' : 'bg-white dark:bg-gray-700'}`}>
                  <h4 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-300">{module.name}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{module.description}</p>
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-400">{module.hours} horas</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlanEstudios;