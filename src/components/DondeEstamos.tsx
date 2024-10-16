import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const DondeEstamos: React.FC = () => {
  const { darkMode } = useTheme();

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.09443087625!2d-3.7001628230229784!3d40.4731758714307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422912c3f95711%3A0xfd6d0a1eb67bcfc!2sIES%20Tetu%C3%A1n%20de%20las%20Victorias!5e0!3m2!1ses!2ses!4v1728630389538!5m2!1ses!2ses&mode=${darkMode ? 'dark' : 'light'
    }`;

  return (
    <section id="donde-estamos" className="py-12 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-blue-800 dark:text-blue-300">
          ¿Dónde estamos?
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="relative pb-[75%] h-0">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              title="Ubicación de IES Tetuán de las Victorias"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DondeEstamos;