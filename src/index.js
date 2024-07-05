import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const myElement = document.getElementById('root');

const rootElment = ReactDOM.createRoot(myElement);

rootElment.render(<App />)

reportWebVitals();
