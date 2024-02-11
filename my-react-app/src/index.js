import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global CSS file
import App from './App'; // Import your main App component

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Render your main App component */}
  </React.StrictMode>,
  document.getElementById('root') // Mount your application to the root HTML element
);
