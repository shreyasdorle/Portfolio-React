import React from 'react';
import {Row, Col} from 'antd';
import './index.css';
import ProfileImg from '../../img/profile.jpg'

export default function About(){
  return(
    <div id="about" className="about">
      <div className="container">
        <h1 className="heading">About Me</h1>
        <Row align="middle">
          <Col span={24} md={{span:8}} style={{textAlign: 'center'}}>
            <div className="profile-img" style={{backgroundImage: `url(${ProfileImg})` }}/>
          </Col>
          <Col span={24} md={{span:16}} style={{padding: '30px 0'}}>
            <p>
              I'm web developer with 6 years of professional work experience, currently residing in Bay Area.
              My web development journey started in high school when I created my first User Interface and developed keen interest in web technologies.
              To enhanced my skillset, I took web development coursework while pursuing my Bachelor’s and Master’s in computer science.
            </p>
            <p>
              Other than web development, I like to indulge in making delicious cuisines, dancing on bhangra beats, playing billiards and listening to different genres of music.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}