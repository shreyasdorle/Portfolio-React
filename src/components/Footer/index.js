import React from 'react';
import './index.css';
import { UpCircleOutlined } from '@ant-design/icons';

export default function Footer(){
  const handleClick = function(){
    window.location = '/#home'
  }
  return(
    <div id="footer" className="footer">
      <UpCircleOutlined onClick={handleClick} style={{ fontSize: '35px', color: '#fff', position: 'absolute', top: '-36px' }}/>
      <p>Copyright © 2020 Shreyas Dorle. All Rights Reserved.</p>
    </div>
  )
}