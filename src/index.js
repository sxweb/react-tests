import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App >
      <h1>first child</h1>
      <h2>second child</h2>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
