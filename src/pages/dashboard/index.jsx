import React, {Component} from 'react';
import {Button, Row, Col} from 'antd';

import MyBreadcrumb from '@/components/MyBreadcrumb';
import PanelTitle from '@/components/PanelTitle';
import MyIcon from '@/components/MyIcon';
import ComChart from '@/components/ComChart';
import './index.scss';

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      breads: {
        separator: '/',
        data: [
          {
            title: window.generateMessage('reactFrame.route.dashboard')
            // link: '/home/dashboard'
          }
        ]
      },
      chartOptions: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
    }
  }
  render () {
    return (
      <div className="main-wrapper">
        <MyBreadcrumb breads={this.state.breads}>
          <div className="btn-group">
            <Button type="primary" className="ant-btn-mini">Setting</Button>
          </div>
        </MyBreadcrumb>
        <Row gutter={16} type="flex">
          <Col span={12}>
            <div className="panel">
              <PanelTitle panelTitle={{title: 'Title1'}}>
                <div className="btn-group">
                  <span className="btn btn-text">
                    <MyIcon type="icon-guanbi"/>
                  </span>
                </div>
              </PanelTitle>
              <div>
                <ComChart chartOptions={this.state.chartOptions} chartId="lineChart"/>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="panel">2</div>
          </Col>
          <Col span={12}>
            <div className="panel">3</div>
          </Col>
          <Col span={12}>
            <div className="panel">4</div>
          </Col>
        </Row>
      </div>
    )
  }
}
