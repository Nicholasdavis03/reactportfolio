import React from 'react';

const Portfolio = () => {
  // Sample data for portfolio items
  const portfolioItems = [
    {
      title: 'workday tracker',
      description: 'Description of Project 1',
      deployedLink: 'https://nicholasdavis03.github.io/workdaytracker-chall5/',
      githubLink: 'https://github.com/Nicholasdavis03/workdaytracker-chall5',
    },
    {
      title: 'Streamline Cinemas',
      description: 'Movie Project',
     
      githubLink: 'https://github.com/jbrowning824/Where-To-Streaming-App',
    },
    // Add more portfolio items as needed
  ];

  return (
    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        {/* Map through portfolioItems array and render each item */}
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="links">
              <a href={item.deployedLink} target="_blank" rel="noopener noreferrer">Deployed</a>
              <a href={item.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
