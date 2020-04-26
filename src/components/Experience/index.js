import React from 'react';
import {Row, Col, Button} from 'antd';
import './index.css';
import freedomLogo from '../../img/freedom_logo.svg';
import asurionLogo from '../../img/asurion_logo.svg';
import tvpageLogo from '../../img/tvpage_logo.png';
import UELogo from '../../img/UE_logo.png';

export default function Experience(){

  const toggle = (e) =>{
    e.preventDefault()
    const listElement = e.currentTarget.previousSibling;
    if(listElement.classList.contains('hide')){
      listElement.classList.remove('hide')
      listElement.classList.add('show')
      e.currentTarget.innerHTML = '...see less'
    }
    else if(listElement.classList.contains('show')){
      listElement.classList.remove('show')
      listElement.classList.add('hide')
      e.currentTarget.innerHTML = '...see more'
    }
  }

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
            <ul className="list hide">
              <li>Developed the website to run the credit score of client and generate more leads.</li>
              <li>Implemented the A/B testing on web app by using google optimize.</li>
              <li>Created blogs and newsroom on webpage by fetching the content from wordpress.</li>
            </ul>
            <Button type="link" onClick = {(e) => toggle(e)}>...see more</Button>
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
            <ul className="list hide">
              <li> Developed the web responsive templates using react components for AT&T protech app. </li>
              <li> Developed and tested the CATO complaint templates using Switch Control and Voice Over on IOS and Android Devices. </li>
              <li> Architecture the dashboard before implementing it from scratch while using various boilerplate templates. </li>
              <li> Developed the user-interfacing dashboard using React with Redux also used many other react components. </li>
              <li> Implemented the different features on dashboard like Dark mode / Light mode toggle, Localization, Analytics. </li>
              <li> Restructured complete codebase using React Hooks after attending the workshop conducted by react training. </li>
              <li> Developed the react component library and deployed it on npmjs which is used by different teams. </li>
              <li> Redesigned the email templates using HTML and inline CSS for the better visual UI which was sent to user weekly. </li>
              <li> Developed the user authentication and login workflow using AWS cognito and AWS amplify react SDK. </li>
            </ul>
            <Button type="link" onClick = {(e) => toggle(e)}>...see more</Button>
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
            <ul className="list hide">
              <li> Developed various websites as per client requirement and worked on resolving the bugs/issues on client’s website. </li>
              <li> Developed the cross-browser and cross-platform compatible websites, also used AJAX with restful APIs. </li>
              <li> Coordinated with UX team to review the design and monitor whether its implemented based on the business need. </li>
              <li> Optimized the website for maximum speed and scalability by considering SEO SiteCheckup & Google PageSpeed Insights. </li>
              <li> Developed an Iterator to sync products from IBM WebSphere Commerce into the TVPage platform. </li>
              <li> Contributed in development of video player along with Youtube Iframe and Google IMA Ads integration. </li>
              <li> Maintained and developed codebase by considering scrutinizer checks and writing unit tests. </li>
              <li> Worked in the agile environment while having Daily standup and Bi-weekly sprint meeting and planning with the team. </li>
            </ul>
            <Button type="link" onClick = {(e) => toggle(e)}>...see more</Button>
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
            <ul className="list hide">
              <li> Designed and developed email newsletter for client using front-end technologies like HTML5, CSS and Bootstrap. </li>
              <li> Created various web application forms by using Content Management System “UELab”. </li>
              <li> Responsible for requirement analysis, designing, planning, tracking and execution of the application. </li>
              <li> Coordinated with QA team to review the test plans and work to resolve issues. </li>
              <li> Generated various reports using joins, dimensions, measures, views, models, dashboards on Looker. </li>
              <li> Learned to create EC2 Instances, different alarms and metrics on Cloud watch, VPC architecture on Amazon web services. </li>
              <li> Developed a script to get a Google app backup and stored it on one of the Amazon servers using Linux command shell. </li>
            </ul>
            <Button type="link" onClick = {(e) => toggle(e)}>...see more</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}