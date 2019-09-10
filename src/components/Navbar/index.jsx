import React, {Component} from 'react';
import MyIcon from '@/components/MyIcon';
import {Menu, Dropdown, Icon} from 'antd';
import {connect} from 'react-redux';

import userAvatar from '@/assets/images/avatar.jpeg';
import {toggleSidebar} from '@/redux/actions/app';

const mapStateToProps = (state) => {
  return {
    collapsed: state.app.collapsed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => {
      dispatch(toggleSidebar())
    }
  }
}

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <div className="nav-left">
          <MyIcon type={this.props.collapsed ? 'icon-zhankai' : 'icon-shousuo'} onClick={this.props.toggleSidebar}/>
        </div>
        <ul className="nav-right">
          <li>
            <Dropdown
              trigger={['click']}
              overlay={() => (
                <Menu>
                  <Menu.Item key="theme1">Theme1</Menu.Item>
                  <Menu.Item key="theme2" disabled>Theme2</Menu.Item>
                </Menu>
              )}>
              <span className="ant-dropdown-link">
                <span className="text"><i className="iconfont icon-T-yanse"></i></span>
                <Icon type="caret-down"/>
              </span>
            </Dropdown>
          </li>
          <li>
            <Dropdown
              trigger={['click']}
              overlay={() => (
                <Menu>
                  <Menu.Item key="chinese">中文简体</Menu.Item>
                  <Menu.Item key="english" disabled>English</Menu.Item>
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
                  <Menu.Item key="profile">
                    <span>Profile</span>
                  </Menu.Item>
                  <Menu.Item key="logout">
                    <span>Log Out</span>
                  </Menu.Item>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)