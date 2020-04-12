import React from 'react';
import {Row, Col} from 'antd';
import './index.css';
import freedomLogo from '../../img/freedom_logo.svg';
import asurionLogo from '../../img/asurion_logo.svg';
import tvpageLogo from '../../img/tvpage_logo.png';
import UELogo from '../../img/UE_logo.png';

export default function Experience(){
  return(
    <div id="experience" className="experience">
      <div className="container">
        <h1 className="heading">Experience</h1>
        <Row gutter={[20,30]}>
          <Col span={6} lg={{span:8}} style={{textAlign: 'center'}}>
            <img src={freedomLogo} alt="logo" />
          </Col>
          <Col span={18} lg={{span:16}} style={{borderBottom: '1px solid #bfacac', marginBottom: '10px'}}>
            <h2>Senior Software Engineer</h2>
            <h3>Freedom Financial Network</h3>
            <p>Feb 2020 - Present</p>
            <h5>San Mateo</h5>
            <ul>
              <li>Developed the website to run the credit score of client and generate more leads.</li>
              <li>Implemented the A/B testing on web app by using google optimize.</li>
            </ul>
          </Col>
        </Row>
        <Row gutter={[20,30]}>
          <Col span={6} lg={{span:8}} style={{textAlign: 'center'}}>
            <img src={asurionLogo} alt="logo" />
          </Col>
          <Col span={18} lg={{span:16}} style={{borderBottom: '1px solid #bfacac', marginBottom: '10px'}}>
            <h2>Software Engineer 3 - Web</h2>
            <h3>Asurion</h3>
            <p>Jul 2018 - Jan 2020</p>
            <h5>San Mateo</h5>
            <ul>
              <li>Developed the user-interfacing dashboard using React with Redux also used many other react components.</li>
              <li>Developed the react component library and deployed it on npmjs which is used by different teams.</li>
            </ul>
          </Col>
        </Row>
        <Row gutter={[20,30]}>
          <Col span={6} lg={{span:8}} style={{textAlign: 'center'}}>
            <img src={tvpageLogo} alt="logo" />
          </Col>
          <Col span={18} lg={{span:16}} style={{borderBottom: '1px solid #bfacac', marginBottom: '10px'}}>
            <h2>Full Stack Web Developer</h2>
            <h3>TVPage, Inc.</h3>
            <p>Nov 2015 - Jul 2018</p>
            <h5>San Diego</h5>
            <ul>
              <li>Developed various websites as per client requirement and worked on resolving the bugs/issues on client’s website.</li>
              <li>Contributed in development of video player along with Youtube Iframe and Google IMA Ads integration.</li>
            </ul>
          </Col>
        </Row>
        <Row gutter={[20,30]}>
          <Col span={6} lg={{span:8}} style={{textAlign: 'center'}}>
            <img src={UELogo} alt="logo" />
          </Col>
          <Col span={18} lg={{span:16}}>
            <h2>Software Engineer</h2>
            <h3>Underground Elephant</h3>
            <p>Dec 2014 - Oct 2015</p>
            <h5>San Diego</h5>
            <ul>
              <li>Designed and developed email newsletter for client using front-end technologies like HTML5, CSS and Bootstrap.</li>
              <li>Generated various reports using joins, dimensions, measures, views, models and dashboards on Looker.</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  )
}