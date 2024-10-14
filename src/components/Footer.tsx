import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 dark:bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">IES Tetuán</h2>
            <p className="text-sm mt-2">Formando profesionales desde 1975</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#" className="hover:text-blue-300">Política de privacidad</a>
            <a href="#" className="hover:text-blue-300">Términos de uso</a>
            <a href="#" className="hover:text-blue-300">Contacto</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} IES Tetuán. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;