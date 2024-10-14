import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlanEstudios from './components/PlanEstudios';
import SalidasProfesionales from './components/SalidasProfesionales';
import Proyectos from './components/Proyectos';
import DondeEstamos from './components/DondeEstamos';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
        <Header />
        <main>
          <Hero />
          <PlanEstudios />
          <SalidasProfesionales />
          <Proyectos />
          <DondeEstamos />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;