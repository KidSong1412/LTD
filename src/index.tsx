import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style/index.scss';
import { Popup } from './components/Popup/Popup';

export { Button } from './components/Button/Button';
export { Image } from './components/Image/Image';

ReactDOM.render(
  <React.StrictMode>
    <Popup content={<div><ul><li>你好</li><li>世界</li></ul><h1>你的名字</h1></div>} show={true} position="center" />
  </React.StrictMode>,
  document.getElementById('root')
);
