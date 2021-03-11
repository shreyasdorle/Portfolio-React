import React from 'react';
import { Row, Col } from 'antd';
import './index.css';

export default function Skills(){
  const data = [
    {
      field: 'Web Technologies:',
      value: 'HTML5, CSS3, Javascript, PHP, LESS, SASS, Bootstrap, JSON, AJAX, XML, TWIG, Material UI, Antd.'
    },
    {
      field: 'JS Libraries / Frameworks:',
      value: 'React, Redux, React Hooks, jQuery, Backbone.js, Underscore.js, AngularJS, NodeJS, GruntJS.'
    },
    {
      field: 'Tools:',
      value: 'GitHub, Bitbucket, AWS, Google Cloud Platform, Postman, Docker, JIRA, HUGO, Looker, CircleCI.'
    },
    {
      field: 'UX Tools:',
      value: 'InVision, Sketch, Zeplin, Figma.'
    },
    {
      field: 'Database:',
      value: 'MySQL, DynamoDb, Firebase.'
    },
    {
      field: 'Operating System:',
      value: 'Linux, Macintosh, Windows.'
    }
  ];

  return(
    <div id="skills" className="skills">
      <h1 className="heading">Skills</h1>
      <div className="container">
        {data.map((value, index) => {
          return (
            <Row key={index}>
              <Col span={8} className="field">
                {value.field}
              </Col>
              <Col span={16}>
                {value.value}
              </Col>
            </Row>
          )
        })}
      </div>
    </div>
  )
}