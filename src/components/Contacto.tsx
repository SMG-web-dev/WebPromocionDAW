import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Contacto: React.FC = () => {
  const { darkMode } = useTheme();

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.09443087625!2d-3.7001628230229784!3d40.4731758714307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422912c3f95711%3A0xfd6d0a1eb67bcfc!2sIES%20Tetu%C3%A1n%20de%20las%20Victorias!5e0!3m2!1ses!2ses!4v1728630389538!5m2!1ses!2ses&mode=${
    darkMode ? 'dark' : 'light'
  }`;

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-blue-800 dark:text-blue-300">
          Contacto
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-700 dark:text-blue-400 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                +34 91 314 76 50 / 91 314 67 06
              </span>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-700 dark:text-blue-400 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                ies.tetuan.madrid@educa.madrid.org
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-700 dark:text-blue-400 flex-shrink-0" />
              <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                C/ Vía Límite 14, 28029 Madrid
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;