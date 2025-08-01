import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/inter";
import "@fontsource/roboto";
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);