import React from 'react';
import { Row, Col, Table } from 'antd';
import './index.css';

export default function Skills(){
  const columns = [
    {
      dataIndex: 'field',
    },
    {
      dataIndex: 'value',
    }
  ];
  const data = [
    {
      field: 'Languages:',
      value: 'Javascript, PHP'
    },
    {
      field: 'Web Technologies:',
      value: 'JavaScript, HTML5, CSS3, LESS, SASS, Bootstrap, PHP, AJAX, XML, TWIG.'
    },
    {
      field: 'JS Libraries/Frameworks:',
      value: 'React, Redux, React Hooks, jQuery, Backbone.js, Underscore.js, AngularJS, NodeJS, GruntJS.'
    },
    {
      field: 'Tools:',
      value: 'GitHub, Bitbucket, AWS, phpMyAdmin, Docker, JIRA, HUGO, Visual Studio, Looker, CircleCI.'
    },
    {
      field: 'UX Tools:',
      value: 'InVision, Sketch, Zeplin, Figma.'
    },
    {
      field: 'Database:',
      value: 'MySQL, Oracle11g.'
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
        <div className="table-holder">
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={data} size="small" pagination={false} showHeader={false} bordered={false} />
          </Col>
        </Row>
        </div>
      </div>
    </div>
  )
}