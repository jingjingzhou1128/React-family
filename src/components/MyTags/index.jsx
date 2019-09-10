import React, {Component} from 'react';
import {Menu, Dropdown} from 'antd';

import MyIcon from '@/components/MyIcon';

export default class MyTags extends Component {
  render () {
    const contextMenu = (
      <Menu>
        <Menu.Item key="tag-cont-refresh">Refresh</Menu.Item>
        <Menu.Item key="tag-cont-other">Close Other</Menu.Item>
        <Menu.Item key="tag-cont-all">Close All</Menu.Item>
      </Menu>
    )
    return (
      <div className="tags">
        <Dropdown
          overlay={contextMenu}
          trigger={['contextMenu']}>
          <span className="text">
            <a className="tag-link" href="#/home/dashboard">Dashboard</a>
            <MyIcon type="icon-close"/>
          </span>
        </Dropdown>
      </div>
    )
  }
}