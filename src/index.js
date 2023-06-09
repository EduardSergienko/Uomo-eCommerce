import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './bootstrap.scss';
import './index.css';
import './scssUtils/heroSliderPagination.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>

  // </React.StrictMode>
);
