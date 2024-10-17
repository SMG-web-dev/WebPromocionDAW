import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-800 dark:bg-blue-900 text-white py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        }}
        initial={{ filter: "brightness(0.3)", scale: 1.1 }}
        whileInView={{ filter: "brightness(0.6)", scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      ></motion.div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Forma tu futuro con el Grado Superior en DAW
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
        >
          Conviértete en un desarrollador experto dominando las tecnologías más demandadas del mercado.
          Con este grado, adquirirás habilidades prácticas en programación, diseño web, y bases de datos,
          abriéndote las puertas a una carrera exitosa en el sector tecnológico.
        </motion.p>
        <motion.a
          href="https://www.iestetuan.es/cmsj/9-ensenanzas/informatica-y-comunicaciones/8-daw-desarrollo-de-aplicaciones-web.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 dark:bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Más información
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;