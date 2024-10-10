import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-800 dark:bg-blue-900 text-white py-20 relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          filter: "brightness(0.6)"
        }}
      ></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Forma tu futuro con el Grado Superior en DAW</h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Conviértete en un desarrollador experto dominando las tecnologías más demandadas del mercado. 
          Con este grado, adquirirás habilidades prácticas en programación, diseño web, y bases de datos, 
          abriéndote las puertas a una carrera exitosa en el sector tecnológico.
        </p>
        <a href="#plan-estudios" className="bg-blue-700 dark:bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-500">
          Más información
        </a>
      </div>
    </section>
  );
};

export default Hero;