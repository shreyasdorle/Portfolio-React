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
          <Col span={24} lg={{span:8}} style={{textAlign: 'center'}}>
            <div className="profile-img" style={{backgroundImage: `url(${ProfileImg})` }}/>
          </Col>
          <Col span={24} lg={{span:16}}>
            <p> My web development career started when I created a simple web-page using HTML in High-school.
            I got excited to learn more about web developement.
            During my Bachelor's I worked on some projects in which I have used HTML, CSS, Javascript.
            As time flies by and new technologies take over in web development.
            To learn new stuff, I enrolled in web development coursework in San Diego State University while pursing my Master's in Computer Science.
            I have learned and used HTML5, CSS3, Javascript, PHP, AJAX, XML.
            Thereafter, I took some online tutorials for Angular.js, Grunt.js, Node.js, LESS, Bootstrap.
            I have built some dashboards using React, Redux & Webpack while working for tech companies in Bay Area.
            I am professionally working in the field of web development since past 6 years. During this period, I have gained tremendous knowledge about web technologies.
            But there is always something new to learn, so I enjoy learning new stuff.
            </p>
            <p>
            People call me "Smiley face" because I always keep smiling.
            I work with a positive attitude.
            I like to keep myself busy by doing some extra-curricular activities.
            My hobbies include Gym, Swimming, Dancing, Hiking, Pool, Ping Pong, listening quality music and watching movies.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}