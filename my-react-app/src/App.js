import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import AboutMe from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="app">
      <Header currentSection={currentSection} handleNavigationClick={handleNavigationClick} />
      <main>
        {currentSection === 'About Me' && <AboutMe />}
        {currentSection === 'Portfolio' && <Portfolio />}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Resume' && <Resume />}
      </main>
      {/* Add a footer component if needed */}
    </div>
  );
};

export default App;
