import React from 'react';
import {Row, Col} from 'antd';
import './index.css';
import { MailOutlined, PhoneOutlined, LinkedinOutlined} from '@ant-design/icons';

export default function Contact(){
  return(
    <div id="contact" className="contact">
      <div className="container holder">
        <h1 className="heading">Contact</h1>
        <Row gutter={[30,0]} type="flex" align="top">
          <Col span={4} md={{span:8}} className="col-1">
            <MailOutlined style={{ fontSize: '20px', color: '#fff' }}/>
          </Col>
          <Col span={20} md={{span:16}}>
            <h3>Email</h3>
            <a href="mailto:shreyas.dorle7@gmail.com">shreyas.dorle7@gmail.com</a>
          </Col>
        </Row>
        <Row gutter={[30,0]} type="flex" align="top">
          <Col span={4} md={{span:8}} className="col-1">
            <PhoneOutlined style={{ fontSize: '20px', color: '#fff', transform: 'rotate(100deg)' }}/>
          </Col>
          <Col span={20} md={{span:16}}>
            <h3>Phone</h3>
            <a href="tel:1-619-316-4227">(619) 316-4227 (Mobile)</a>
          </Col>
        </Row>
        <Row gutter={[30,0]} type="flex" align="top">
          <Col span={4} md={{span:8}} className="col-1">
            <LinkedinOutlined style={{ fontSize: '20px', color: '#fff' }}/>
          </Col>
          <Col span={20} md={{span:16}}>
            <h3>LinkedIn</h3>
            <a href="https://www.linkedin.com/in/shreyasdorle" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/shreyasdorle</a>
          </Col>
        </Row>
      </div>
    </div>
  )
}