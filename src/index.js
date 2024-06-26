import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.scss';
import './fonts/fonts.scss';
import './style/index.scss';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

