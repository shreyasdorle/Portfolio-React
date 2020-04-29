import React, { useState, useEffect } from 'react';
import './index.css';
import Background from '../../img/background-image.jpg';
import { DownCircleOutlined } from '@ant-design/icons';

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}


export default function Home(){
  const size = useWindowSize();
  const handleClick = function(){
    window.location = '/#about'
  }
  return(
    <div id="home" className="home">
      <div className="bg-image" style={{backgroundImage: `url(${Background})`, height: size.height }}>
        <div className="text-container">
          <h1>I am Shreyas Dorle.</h1>
          <p>Front End Development is my Passion!</p>
        </div>
        <DownCircleOutlined onClick={handleClick} style={{ fontSize: '35px', color: '#fff', position: 'absolute', bottom: '13px' }}/>
      </div>
    </div>
  )
}