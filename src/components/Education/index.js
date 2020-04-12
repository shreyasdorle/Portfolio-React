import React from 'react';
import {Row, Col} from 'antd';
import './index.css';
import SdsuImg from '../../img/sdsu_logo.jpg';
import NgpImg from '../../img/nagpur_university_logo.jpg';

export default function Education(){
  return(
    <div id="education" className="education">
      <div className="container">
        <h1 className="heading">Education</h1>
        <Row align="middle">
          <Col span={24} lg={{span:8}} className="img-wrapper">
            <img src={SdsuImg} alt="logo" />
          </Col>
          <Col span={24} lg={{span:16}}>
            <div className="text-wrapper">
              <p>Master of Science in Computer Science</p>
              <p>San Diego State University, CA</p>
              <p>2013 - 2015</p>
              <p>Grade: 3.68 GPA</p>
            </div>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={24} lg={{span:8}} className="img-wrapper">
            <img src={NgpImg} alt="logo" />
          </Col>
          <Col span={24} lg={{span:16}}>
            <div className="text-wrapper">
              <p>Bachelor of Engineering in Computer Science &amp; Engineering</p>
              <p>Nagpur University, India</p>
              <p>2009 - 2013</p>
              <p>Grade: First Division</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}