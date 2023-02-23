import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './Context/DataContext';
import { LoginContextProvider } from './Context/LoginContext';
import { CreateCartProvider } from './Context/CartContext';
import { CartProductContextProvider } from "./Context/CartProductsContext"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider>
      <CreateCartProvider>
        <CartProductContextProvider>
          <DataContextProvider>
            <Router>
              <App />
            </Router>
          </DataContextProvider>
        </CartProductContextProvider>
      </CreateCartProvider>
    </LoginContextProvider>
  </React.StrictMode>
);

