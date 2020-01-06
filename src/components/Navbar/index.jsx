import React, {Component} from 'react'
import MyIcon from '@/components/MyIcon'
import {Menu, Dropdown, Icon} from 'antd'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import userAvatar from '@/assets/images/avatar.jpeg'
import {toggleSidebar} from '@/redux/actions/app'
import ChangeTheme from '@/components/ChangeTheme'
import ChangeLang from '@/components/ChangeLang'

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
  logout () {
    this.props.history.push('/login')
  }
  
  render () {
    return (
      <div className="navbar">
        <div className="nav-left">
          <MyIcon type={this.props.collapsed ? 'icon-zhankai' : 'icon-shousuo'} onClick={this.props.toggleSidebar}/>
        </div>
        <ul className="nav-right">
          <li>
            <ChangeTheme/>
          </li>
          <li>
            <ChangeLang/>
          </li>
          <li>
            <Dropdown
              trigger={['click']}
              overlay={() => (
                <Menu>
                  <Menu.Item key="profile">
                    <span>{window.generateMessage('reactFrame.user.profile')}</span>
                  </Menu.Item>
                  <Menu.Item key="logout" onClick={() => {this.logout()}}>
                    <span>{window.generateMessage('reactFrame.user.logout')}</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar))