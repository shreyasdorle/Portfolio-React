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
          <Col span={6} md={{span:8}} style={{textAlign: 'center'}}>
            <a href="https://www.freedomfinancialnetwork.com/" target="_blank" rel="noopener noreferrer"><img src={freedomLogo} alt="logo" /></a>
          </Col>
          <Col span={18} md={{span:16}} style={{borderBottom: '1px solid #bfacac', marginBottom: '10px'}}>
            <h2>Senior Software Engineer</h2>
            <h3><a href="https://www.linkedin.com/company/freedom-financial/" target="_blank" rel="noopener noreferrer">Freedom Financial Network</a></h3>
            <p>Feb 2020 - Present</p>
            <h5>San Mateo</h5>
            <ul className="list hide">
              <li> Developed multiple responsive websites from scratch, which recommends products to users after collecting information. </li>
              <li> Architected the web UI in a way that is scalable, reusable, and easy to understand to increase the team velocity. </li>
              <li> Used A/B testing to determine the most efficient user experience and application workflow to generate more conversions. </li>
              <li> Researched and compared A/B testing tools such as Google Optimize, Optimizely, and Launch Darkly. </li>
              <li> Implemented tags & triggers on Google Tag Manager for page views, button & link clicks, FB pixel tracking, and hotjar. </li>
              <li> Implemented the logic to fire the Facebook pixel by accessing the global dataLayer object through GTM as per requirement. </li>
              <li> Designed and implemented graphic representation using libraries like react-d3-graph and react-chartjs-2. </li>
              <li> Implemented the custom tracking for web analytics to track the events on a webpage accurately. </li>
              <li> Created webpages for blogs and newsroom on product’s website by fetching content from WordPress APIs. </li>
              <li> Worked closely with UX team to make the website look pixel perfect. </li>
            </ul>
            <Button type="link" onClick = {(e) => toggle(e)}>...see more</Button>
          </Col>
        </Row>
        <Row gutter={[20,30]}>
          <Col span={6} md={{span:8}} style={{textAlign: 'center'}}>
            <a href="https://www.asurion.com/" target="_blank" rel="noopener noreferrer"><img src={asurionLogo} alt="logo" /></a>
          </Col>
          <Col span={18} md={{span:16}} style={{borderBottom: '1px solid #bfacac', marginBottom: '10px'}}>
            <h2>Software Engineer 3 - Web</h2>
            <h3><a href="https://www.linkedin.com/company/asurion/" target="_blank" rel="noopener noreferrer">Asurion</a></h3>
            <p>Jul 2018 - Jan 2020</p>
            <h5>San Mateo</h5>
            <ul className="list hide">
              <li> Developed the web responsive templates using react components for the AT&T protech app. </li>
              <li> Developed and tested the CATO compliant templates using Switch Control and VoiceOver on IOS and Android Devices. </li>
              <li> Architecture the dashboard before implementing it from scratch while using various boilerplate templates. </li>
              <li> Developed the user-interfacing dashboard using React with Redux also used many other react components. </li>
              <li> Implemented the different features on the dashboard like Dark mode / Light mode toggle, Localization, Analytics. </li>
              <li> Restructured complete codebase using React Hooks after attending the workshop conducted by react training. </li>
              <li> Developed the react component library and deployed it on npmjs which is used by different teams. </li>
              <li> Developed the user authentication, login workflow using AWS cognito and AWS amplify react SDK. </li>
              <li> Worked on AWS API Gateway, DynamoDb, S3 bucket, and other AWS services during hackathon project. </li>
            </ul>
            <Button type="link" onClick = {(e) => toggle(e)}>...see more</Button>
          </Col>
        </Row>
        <Row gutter={[20,30]}>
          <Col span={6} md={{span:8}} style={{textAlign: 'center'}}>
            <a href="https://www.tvpage.com/" target="_blank" rel="noopener noreferrer"><img src={tvpageLogo} alt="logo" /></a>
          </Col>
          <Col span={18} md={{span:16}} style={{borderBottom: '1px solid #bfacac', marginBottom: '10px'}}>
            <h2>Full Stack Web Developer</h2>
            <h3><a href="https://www.linkedin.com/company/tvpage-inc-/" target="_blank" rel="noopener noreferrer">TVPage, Inc.</a></h3>
            <p>Nov 2015 - Jul 2018</p>
            <h5>San Diego</h5>
            <ul className="list hide">
              <li> Developed various websites as per client requirements and worked on resolving the bugs/issues on the client’s website. </li>
              <li> Developed the cross-browser and cross-platform compatible websites, also used AJAX with restful APIs. </li>
              <li> Optimized the website for maximum speed and scalability by considering SEO SiteCheckup & Google PageSpeed Insights. </li>
              <li> Developed an Iterator to sync products from IBM WebSphere Commerce into the TVPage platform. </li>
              <li> Contributed to the development of video player along with Youtube Iframe and Google IMA Ads integration. </li>
              <li> Maintained and developed codebases by considering scrutinizer checks and writing unit tests. </li>
              <li> Worked in the agile environment while having Daily standup and Bi-weekly sprint meetings and planning with the team. </li>
            </ul>
            <Button type="link" onClick = {(e) => toggle(e)}>...see more</Button>
          </Col>
        </Row>
        <Row gutter={[20,30]}>
          <Col span={6} md={{span:8}} style={{textAlign: 'center'}}>
            <a href="https://ue.co/" target="_blank" rel="noopener noreferrer"><img src={UELogo} alt="logo" /></a>
          </Col>
          <Col span={18} md={{span:16}}>
            <h2>Software Engineer</h2>
            <h3><a href="https://www.linkedin.com/company/underground-elephant/" target="_blank" rel="noopener noreferrer">Underground Elephant</a></h3>
            <p>Dec 2014 - Oct 2015</p>
            <h5>San Diego</h5>
            <ul className="list hide">
              <li> Designed and developed an email newsletter for the client using front-end technologies likes HTML5, CSS, and Bootstrap. </li>
              <li> Created various web application forms by using Content Management System “UELab”. </li>
              <li> Responsible for requirement analysis, designing, planning, tracking, and execution of the application. </li>
              <li> Generated various reports using joins, dimensions, measures, views, models, and dashboards on Looker. </li>
              <li> Learned to create EC2 Instances, different alarms, and metrics on Cloud watch, VPC architecture on Amazon web services. </li>
              <li> Developed a script to get a Google app back up and stored it on the Amazon servers using a Linux command shell. </li>
            </ul>
            <Button type="link" onClick = {(e) => toggle(e)}>...see more</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}