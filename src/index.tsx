import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import { Image } from './components/Image/Image';

export { Button } from './components/Button/Button';

ReactDOM.render(
  <React.StrictMode>
    <Image url="https://img.mandudu.com/s/20190220225725624307.jpg" tip="安娜贝尔" width="200px" />
    <Image url="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" tip="安娜贝尔" width="200px" lazy />  
  </React.StrictMode>,
  document.getElementById('root')
);
