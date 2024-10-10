import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 dark:bg-blue-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} IES Tetuán de las Victorias. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;