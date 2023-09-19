import ReactDOM from 'react-dom/client';
// import { App } from './App';
import React from 'react';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { persistore, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
  <BrowserRouter basename="/react-lection-bigprogect">
    <Provider store={store}>
      <PersistGate persistor={persistore}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
