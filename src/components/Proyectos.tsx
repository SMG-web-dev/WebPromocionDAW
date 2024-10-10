import React, { useRef, useEffect } from 'react';

const projects = [
  { id: 1, image: 'https://source.unsplash.com/random/800x600?web', title: 'Aplicación de comercio electrónico' },
  { id: 2, image: 'https://source.unsplash.com/random/800x600?coding', title: 'Sistema de gestión de tareas' },
  { id: 3, image: 'https://source.unsplash.com/random/800x600?website', title: 'Portafolio interactivo' },
  { id: 4, image: 'https://source.unsplash.com/random/800x600?app', title: 'Red social para desarrolladores' },
  { id: 5, image: 'https://source.unsplash.com/random/800x600?tech', title: 'Aplicación de inteligencia artificial' },
  { id: 6, image: 'https://source.unsplash.com/random/800x600?software', title: 'Plataforma de aprendizaje en línea' },
];

const Proyectos: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= (carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="proyectos" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800 dark:text-blue-300">Proyectos de Estudiantes</h2>
        <div className="relative overflow-hidden">
          <div ref={carouselRef} className="flex space-x-4 overflow-x-hidden">
            {projects.map((project) => (
              <div key={project.id} className="flex-none w-64 md:w-80">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;