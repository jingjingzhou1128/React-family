import React, {Component} from 'react';
import { Row, Col } from 'antd';

import MyBreadcrumb from '@/components/MyBreadcrumb';
import './index.scss';

export default class GridPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      /**
       * @author zhoujingjing
       * @description 面包屑导航栏数据
       */
      breads: {
        separator: '/',
        data: [
          {
            title: window.generateMessage('reactFrame.route.dashboard'),
            link: '/home/dashboard'
          },
          {
            title: window.generateMessage('reactFrame.route.layout')
          },
          {
            title: window.generateMessage('reactFrame.route.grid')
          }
        ]
      }
    }
  }
  render () {
    return (
      <div className="main-wrapper">
        <MyBreadcrumb breads={this.state.breads}></MyBreadcrumb>
        <div className="main-content">
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </div>
      </div>
    )
  }
}