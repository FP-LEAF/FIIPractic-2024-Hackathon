import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from 'react-router-dom';
import './Styles/index.scss';
import App from './App';
import 'react-toastify/dist/ReactToastify.css'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Create a root.

root.render( // Use the render method on the created root
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
