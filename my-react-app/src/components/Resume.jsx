import React from 'react';

const Resume = () => {
 
  const proficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
   
  ];

  return (
    <section className="resume-section">
      <h2>Resume</h2>
      <p>
        Download my resume <a href="/path/to/resume.pdf" download>here</a>.
      </p>
      <h3>Proficiencies</h3>
      <ul>
        {/* Map through proficiencies array and render each proficiency */}
        {proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))}
      </ul>
    </section>
  );
};

export default Resume;
