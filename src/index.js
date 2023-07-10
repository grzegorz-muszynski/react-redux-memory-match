import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import { store } from './app/store.js';
// Add import statement below


ReactDOM.render(
  // Implement Provider component with store below
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);