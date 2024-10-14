import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo IES Tetuán"
                className="w-12 h-9 mr-2 sm:w-16 sm:h-12 sm:mr-4"
              />
              <a
                href="https://www.iestetuan.es/cmsj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg sm:text-xl font-bold"
              >
                IES Tetuán
              </a>
            </div>
            <p className="text-gray-400">Formando profesionales desde 1975</p>
          </div>
          <div className="text-center md:text-right">
            <div className="flex flex-col items-start space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm">+34 91 314 76 50 / 91 314 67 06</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm">ies.tetuan.madrid@educa.madrid.org</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-sm">C/ Vía Límite 14, 28029 Madrid</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} IES Tetuán de las Victorias. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;