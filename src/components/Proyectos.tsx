"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    image:
      "https://images.appypie.com/wp-content/uploads/2021/09/27075440/ecommerce_banner.png",
    title: "Aplicación de comercio electrónico",
    description:
      "Una plataforma completa de e-commerce con carrito de compras, pagos en línea y gestión de inventario.",
  },
  {
    id: 2,
    image:
      "https://www.timecamp.com/es/blog/wp-content/uploads/2021/05/MeisterTask-839x525.png",
    title: "Sistema de gestión de tareas",
    description:
      "Aplicación para organizar proyectos, asignar tareas y hacer seguimiento del progreso en tiempo real.",
  },
  {
    id: 3,
    image:
      "https://media.slidesgo.com/storage/44269958/responsive-images/0-modern-and-interactive-portfolio___media_library_original_548_308.jpg",
    title: "Portafolio interactivo",
    description:
      "Sitio web dinámico para mostrar proyectos con animaciones y diseño responsivo.",
  },
  {
    id: 4,
    image:
      "https://blog.hootsuite.com/wp-content/uploads/2022/06/social-media-scheduling-tools-1.png",
    title: "Red social para desarrolladores",
    description:
      "Plataforma para que los desarrolladores compartan proyectos, colaboren y encuentren oportunidades laborales.",
  },
  {
    id: 5,
    image:
      "https://www.elearningfacil.com/wp-content/uploads/elfacil-banner-blog_05-21-post-7-6.jpg",
    title: "Plataforma de aprendizaje en línea",
    description:
      "Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones y seguimiento del progreso.",
  },
];

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 relative max-w-4xl">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-blue-600 dark:text-blue-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Proyectos de Estudiantes
        </motion.h2>

        <div className="relative">
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full" style={{ paddingBottom: "75%" }}>
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-white dark:bg-gray-800 h-full flex flex-col">
                    <div className="relative h-1/2 sm:h-3/5">
                      <img
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="h-1/2 sm:h-2/5 p-3 sm:p-4 flex flex-col justify-center">
                      <h3 className="text-base sm:text-sm md:text-xl font-semibold text-blue-600 dark:text-blue-300 mb-1 sm:mb-2">
                        {projects[currentIndex].title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 line-clamp-3 sm:line-clamp-4">
                        {projects[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="absolute left-2 top-2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-lg z-10"
              onClick={prevProject}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="absolute right-2 top-2 bg-white dark:bg-gray-800 p-1 sm:p-2 rounded-full shadow-lg z-10"
              onClick={nextProject}
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </div>

        <div className="mt-4 sm:mt-6 flex justify-center">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`mx-1 w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                index === currentIndex
                  ? "bg-blue-500 w-4"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
