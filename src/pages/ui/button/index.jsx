import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';

import MyBreadcrumb from '@/components/MyBreadcrumb';
import PanelTitle from '@/components/PanelTitle';
import './index.scss';

export default class ButtonPage extends Component {
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
            title: window.generateMessage('reactFrame.route.ui')
          },
          {
            title: window.generateMessage('reactFrame.route.button')
          }
        ]
      },
      /**
       * @author zhoujingjing
       * @description 加载状态
       */
      isLoading: false
    }
  }
  render () {
    return (
      <div className="main-wrapper">
        <MyBreadcrumb breads={this.state.breads}></MyBreadcrumb>
        <Row gutter={16} type="flex" className="main-content">
          <Col span={12}>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Type'}}></PanelTitle>
              <div className="panel-body">
                <Button type="primary">Primary</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
                <Button type="link">Link</Button>
                <Button>Default</Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Shape'}}></PanelTitle>
              <div className="panel-body">
                <Button type="primary" shape="circle" icon="search"/>
                <Button type="primary" shape="circle">C</Button>
                <Button type="primary" shape="round">Round</Button>
                <Button type="primary">Primary</Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Size'}}></PanelTitle>
              <div className="panel-body">
                <Button type="primary" size="small">Small</Button>
                <Button type="primary">Primary</Button>
                <Button type="primary" size="large">Large</Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Ghost Button'}}></PanelTitle>
              <div className="panel-body" style={{backgroundColor: '#bec8c8'}}>
                <Button type="primary" ghost>Primary</Button>
                <Button type="danger" ghost>Danger</Button>
                <Button type="dashed" ghost>Dashed</Button>
                <Button ghost>Default</Button>
                <Button type="link" ghost>Link</Button>
              </div>
            </div>
          </Col>
          <Col span={24}>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Loading'}}></PanelTitle>
              <div className="panel-body">
                <Button type="primary" loading>Loading</Button>
                <Button type="danger" loading>Loading</Button>
                <Button type="dashed" loading>Loading</Button>
                <Button loading>Loading</Button>
                <Button type="primary" shape="circle" loading/>
                <Button type="primary" shape="round" loading>Loading</Button>
                <Button type="primary" loading={this.state.isLoading} onClick={() => {this.setState({isLoading: true})}}>Primary</Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Disabled'}}></PanelTitle>
              <div className="panel-body">
                <div>
                  <Button type="primary">Primary</Button>
                  <Button type="primary" disabled>Primary</Button>
                </div>
                <div>
                  <Button type="dashed">Dashed</Button>
                  <Button type="dashed" disabled>Dashed</Button>
                </div>
                <div>
                  <Button type="danger">Danger</Button>
                  <Button type="danger" disabled>Danger</Button>
                </div>
                <div>
                  <Button type="link">Link</Button>
                  <Button type="link" disabled>Link</Button>
                </div>
                <div>
                  <Button>Default</Button>
                  <Button disabled>Default</Button>
                </div>
                <div style={{backgroundColor: '#bec8c8', paddingTop: '20px', paddingLeft: '20px'}}>
                  <Button type="primary" ghost>Primary</Button>
                  <Button type="primary" ghost disabled>Primary</Button>
                </div>
                <div style={{backgroundColor: '#bec8c8', paddingLeft: '20px'}}>
                  <Button type="danger" ghost>Danger</Button>
                  <Button type="danger" ghost disabled>Danger</Button>
                </div>
                <div style={{backgroundColor: '#bec8c8', paddingLeft: '20px'}}>
                  <Button type="dashed" ghost>Dashed</Button>
                  <Button type="dashed" ghost disabled>Dashed</Button>
                </div>
                <div style={{backgroundColor: '#bec8c8', paddingLeft: '20px'}}>
                  <Button ghost>Default</Button>
                  <Button ghost disabled>Default</Button>
                </div>
                <div style={{backgroundColor: '#bec8c8', paddingLeft: '20px'}}>
                  <Button type="link" ghost>Link</Button>
                  <Button type="link" ghost disabled>Link</Button>
                </div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Button Group'}}></PanelTitle>
              <div className="panel-body">
                <div>
                  <Button.Group>
                    <Button>Prev</Button>
                    <Button>Middle</Button>
                    <Button>Next</Button>
                  </Button.Group>
                </div>
                <div>
                  <Button.Group>
                    <Button type="primary">Prev</Button>
                    <Button type="primary">Middle</Button>
                    <Button type="primary">Next</Button>
                  </Button.Group>
                </div>
                <div>
                  <Button.Group>
                    <Button type="danger">Prev</Button>
                    <Button type="danger">Middle</Button>
                    <Button type="danger">Next</Button>
                  </Button.Group>
                </div>
              </div>
            </div>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Block'}}></PanelTitle>
              <div className="panel-body">
                <Button type="primary" block>Primary</Button>
                <Button type="dashed" block>Dashed</Button>
                <Button type="danger" block>Danger</Button>
                <Button type="link" block>Link</Button>
                <Button block>Default</Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}