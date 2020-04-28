import React, { useState, useEffect } from 'react';
import './index.css';
import { Row, Col, Menu, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined} from '@ant-design/icons';

export default function Nav(){
  const [current, setCurrent] = useState('home')
  const [visible, setVisible] = useState(false)
  const [nav, setNav] = useState(true)
  const [scroll, setScroll] = useState(0)
  const [sc, setSc] = useState(0)

  const handleScroll = function(){
    setSc(window.scrollY)
    if (scroll < sc && sc > 10) {
      setNav(false)
    } else {
      setNav(true)
    }
    setScroll(sc)
    setActiveNav()
  }

  const setActiveNav = function(){
    var list = document.getElementsByClassName('ant-menu-item');
    for (let item of list) {
      var text = item.textContent.toLowerCase();
      if ((window.innerHeight + window.scrollY) >= document.getElementById('root').offsetHeight) {
        setCurrent('contact')
      }else if( document.querySelector('#'+text).getBoundingClientRect().top >= 0 && document.querySelector('#'+text).getBoundingClientRect().top < 80 ){
        setCurrent(text)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleClick = function(e){
    setCurrent(e.key)
    window.location.href = '/#'+e.key;
    hideDrawer()
  };

  const showDrawer = () => {
    setVisible(true)
  };

  const hideDrawer = () => {
    setVisible(false)
  };

  return(
    <>
    <div className="nav">
      <Row>
        <Col span={0} md={{span:24}} className={`desktop ${nav ? 'show' : 'hide'}`}>
          <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home">
              Home
            </Menu.Item>
            <Menu.Item key="about">
              About
            </Menu.Item>
            <Menu.Item key="education">
              Education
            </Menu.Item>
            <Menu.Item key="skills">
              Skills
            </Menu.Item>
            <Menu.Item key="experience">
              Experience
            </Menu.Item>
            <Menu.Item key="contact">
              Contact
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={24} md={{span:0}} className="mobile">
          <MenuOutlined onClick={showDrawer} style={{ fontSize: '30px', color: '#08c', padding: '15px' }}/>
          <Drawer
            title={<CloseOutlined onClick={hideDrawer} style={{ fontSize: '30px', color: '#08c'}}/>}
            placement="left"
            closable={false}
            onClose={hideDrawer}
            visible={visible}
          >
            <Menu onClick={handleClick} selectedKeys={[current]} mode="verical">
              <Menu.Item key="home">
                Home
              </Menu.Item>
              <Menu.Item key="about">
                About
              </Menu.Item>
              <Menu.Item key="education">
                Education
              </Menu.Item>
              <Menu.Item key="skills">
                Skills
              </Menu.Item>
              <Menu.Item key="experience">
                Experience
              </Menu.Item>
              <Menu.Item key="contact">
                Contact
              </Menu.Item>
            </Menu>
          </Drawer>
        </Col>
      </Row>
    </div>
    </>
  )
}