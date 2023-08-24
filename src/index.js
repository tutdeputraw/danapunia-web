import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Framework7 from 'framework7/lite';
import Framework7React from 'framework7-react';

Framework7.use(Framework7React)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
