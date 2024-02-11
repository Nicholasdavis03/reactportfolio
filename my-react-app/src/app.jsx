import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  const handleNavigationClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="app">
      {/* Header */}
      <header>
        <h1>Developer's Portfolio</h1>
        <nav>
          <ul>
            <li
              className={currentSection === 'About Me' ? 'active' : ''}
              onClick={() => handleNavigationClick('About Me')}
            >
              About Me
            </li>
            <li
              className={currentSection === 'Portfolio' ? 'active' : ''}
              onClick={() => handleNavigationClick('Portfolio')}
            >
              Portfolio
            </li>
            <li
              className={currentSection === 'Contact' ? 'active' : ''}
              onClick={() => handleNavigationClick('Contact')}
            >
              Contact
            </li>
            <li
              className={currentSection === 'Resume' ? 'active' : ''}
              onClick={() => handleNavigationClick('Resume')}
            >
              Resume
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        {/* Conditional Rendering based on currentSection */}
        {currentSection === 'About Me' && (
          <section className="about-me-section">
            <h2>About Me</h2>
            <div className="bio">
              <img src="avatar.jpg" alt="Avatar" />
              <p>Short bio about the developer...</p>
            </div>
          </section>
        )}

        {currentSection === 'Portfolio' && (
          <section className="portfolio-section">
            <h2>Portfolio</h2>
            <div className="portfolio-items">
              {/* Render titled images of developer's applications */}
              {/* Each item should have a link to deployed app and GitHub repository */}
            </div>
          </section>
        )}

        {currentSection === 'Contact' && (
          <section className="contact-section">
            <h2>Contact</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" required />
              {/* Add similar inputs for email and message */}
              <button type="submit">Submit</button>
            </form>
          </section>
        )}

        {currentSection === 'Resume' && (
          <section className="resume-section">
            <h2>Resume</h2>
            <p>Downloadable resume link</p>
            {/* List of developer's proficiencies */}
          </section>
        )}
      </main>

      {/* Footer */}
      <footer>
        {/* Links to GitHub, LinkedIn, and third platform */}
        <a href="#">GitHub</a>
        <a href="#">LinkedIn</a>
        {/* Add link to third platform */}
      </footer>
    </div>
  );
};

export default App;
