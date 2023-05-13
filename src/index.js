import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { reducer } from './components/Redux/IntegrandoReduxAReact';
import { reducer2 } from './components/Redux/ListaTareas';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './components/ReactRouter/UseAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducer)
const store2 = createStore(reducer2)
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Provider store={store2}>
        <App/>
        </Provider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
