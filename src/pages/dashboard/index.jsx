import React, {Component} from 'react';
import {Button} from 'antd';

import MyBreadcrumb from '@/components/MyBreadcrumb';

export default class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      breads: {
        separator: '/',
        data: [
          {
            title: window.generateMessage('reactFrame.route.dashboard'),
            // link: '/home/dashboard'
          }
        ]
      }
    }
  }
  render () {
    return (
      <div className="main-wrapper">
        <MyBreadcrumb breads={this.state.breads}>
          <div className="btn-group">
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
          </div>
        </MyBreadcrumb>
      </div>
    )
  }
}
