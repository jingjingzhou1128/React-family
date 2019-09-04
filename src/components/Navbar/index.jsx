import React, {Component} from 'react';
import MyIcon from '@/components/MyIcon';
import {Menu, Dropdown, Icon} from 'antd';

import userAvatar from '@/assets/images/avatar.jpeg';

export default class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <div className="nav-left">
          <MyIcon type={this.props.collapsed ? 'icon-zhankai' : 'icon-shousuo'} onClick={this.props.toggleCollapse}/>
        </div>
        <ul className="nav-right">
          <li>
            <Dropdown
              trigger={['click']}
              overlay={() => (
                <Menu>
                  <Menu.item key="chinese">中文简体</Menu.item>
                  <Menu.item key="english" disabled>English</Menu.item>
                </Menu>
              )}>
              <span className="ant-dropdown-link">
                <span className="text"><i className="iconfont icon-language"></i></span>
                <Icon type="caret-down"/>
              </span>
            </Dropdown>
          </li>
          <li>
            <Dropdown
              trigger={['click']}
              overlay={() => (
                <Menu>
                  <Menu.item key="profile">
                    <span>Profile</span>
                  </Menu.item>
                  <Menu.item key="logout">
                    <span>Log Out</span>
                  </Menu.item>
                </Menu>
              )}
              className="user-avatar">
              <span className="ant-dropdown-link">
                <img src={userAvatar} alt="User"/>
                <Icon type="caret-down"/>
              </span>
            </Dropdown>
          </li>
        </ul>
      </div>
    )
  }
}