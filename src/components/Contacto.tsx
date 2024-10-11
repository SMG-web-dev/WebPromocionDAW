import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Contacto: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-800 dark:text-blue-300">
          Contacto
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 mr-2 text-blue-700 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                +34 91 314 76 50 / 91 314 67 06
              </span>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 mr-2 text-blue-700 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                ies.tetuan.madrid@educa.madrid.org
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-blue-700 dark:text-blue-400" />
              <span className="text-gray-700 dark:text-gray-300">
                C/ Vía Límite 14, 28029 Madrid
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.09443087625!2d-3.7001628230229784!3d40.4731758714307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422912c3f95711%3A0xfd6d0a1eb67bcfc!2sIES%20Tetu%C3%A1n%20de%20las%20Victorias!5e0!3m2!1ses!2ses!4v1728630389538!5m2!1ses!2ses"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
