import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/index.scss';
import { Swiper } from './components/Swiper/Swiper';

export { Button } from './components/Button/Button';
export { Image } from './components/Image/Image';
export { Popup } from './components/Popup/Popup';

ReactDOM.render(
  <React.StrictMode>
    <Swiper />
  </React.StrictMode>,
  document.getElementById('root')
);
