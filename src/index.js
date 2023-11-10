import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import {
  Collapse,
  Dropdown,
  Ripple,
  Carousel,
  initTE
} from 'tw-elements';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export const ImgOne = require('./assets/img2.jpg');
export const ImgTwo = require('./assets/img4.jpg');
export const ImgThree = require('./assets/img5.jpg');
export const ImgFour = require('./assets/img6.jpg');
export const ImgFive = require('./assets/img7.jpg');
export const ImgSix = require('./assets/img8.jpg');
export const ImgSeven = require('./assets/img9.jpg');
export const ImgEight = require('./assets/img10.jpg');
export const ImgNine = require('./assets/img11.jpg');
export const ImgTen = require('./assets/img12.jpg');


initTE({ Collapse, Dropdown, Ripple, Carousel });