import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import CardProvider from './data/CardProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardProvider>
        <App />
        
      </CardProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
