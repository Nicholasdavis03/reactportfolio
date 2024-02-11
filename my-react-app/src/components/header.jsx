import React from 'react';

const Header = ({ currentSection, handleNavigationClick }) => {
  return (
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
  );
};

export default Header;
