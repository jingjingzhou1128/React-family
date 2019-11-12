import React, {Component} from 'react';
import {Row, Col, Button} from 'antd';

import MyBreadcrumb from '@/components/MyBreadcrumb';
import PanelTitle from '@/components/PanelTitle';
import './index.scss';

export default class ButtonPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
      }
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
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Button Group'}}></PanelTitle>
              <div className="panel-body">
                <Button.Group>
                  <Button>Prev</Button>
                  <Button>Middle</Button>
                  <Button>Next</Button>
                </Button.Group>
                <Button.Group>
                  <Button type="primary">Prev</Button>
                  <Button type="primary">Middle</Button>
                  <Button type="primary">Next</Button>
                </Button.Group>
                <Button.Group>
                  <Button type="danger">Prev</Button>
                  <Button type="danger">Middle</Button>
                  <Button type="danger">Next</Button>
                </Button.Group>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}