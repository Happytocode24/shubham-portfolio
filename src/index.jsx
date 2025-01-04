import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

const link = document.createElement('link');
link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

link.rel = "stylesheet";
document.head.appendChild(link);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode classNme='app-container'>
    <App />
  </React.StrictMode>
);


reportWebVitals();
