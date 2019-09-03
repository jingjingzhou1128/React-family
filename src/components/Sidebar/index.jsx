import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Menu, Icon} from 'antd';

import MyIcon from '@/components/MyIcon';

const {SubMenu} = Menu;

class SubMenuItem extends Component {
  render () {
    const menu = this.props.menu
    return (
      <SubMenu
        key={`menu${menu.path}`}
        title={
          <Link to={menu.path}>
            <Icon type={menu.meta.icon || "inbox"}/>
            <span>{menu.meta.title}</span>
          </Link>
        }
      >
        {
          menu.children.map(subMenu => {
            return <SiderbarItem key={`menu-${subMenu.path}`} menu={subMenu}/>
          })
        }
      </SubMenu>
    )
  }
}

class SiderbarItem extends Component {
  render () {
    const menu = this.props.menu
    return (
      menu.children ? <SubMenuItem menu={menu}/> : <MenuItem menu={menu}/>
    )
  }
}

class MenuItem extends Component {
  render () {
    const menu = this.props.menu
    return (
      <Menu.Item key={`menu${menu.path}`}>
        <Link to={menu.path}>{menu.meta.title}</Link>
      </Menu.Item>
    )
  }
}

class Sidebar extends Component {
  getSelectedMenu () {
    return [`menu${this.props.location.pathname}`]
  }

  getOpenMenu () {
    console.log(this.props)
  }

  render () {
    const menus = this.props.menus
    const selectedKeys = this.getSelectedMenu()
    this.getOpenMenu()
    return (
      <Menu
        mode="inline"
        selectedKeys={selectedKeys}
        theme="dark"
        className="sidebar-menu"
      >
        {
          menus.map(menu => {
            if (menu.children) {
              return (
                <SubMenu
                  key={`menu${menu.path}`}
                  title={
                    <span>
                      <MyIcon type={menu.meta.icon}/>
                      <span>{menu.meta.title}</span>
                    </span>
                  }
                >
                  {
                    menu.children.map(subMenu => {
                      if (!subMenu.children) {
                        return (
                          <Menu.Item key={`menu${subMenu.path}`}>
                            <Link to={subMenu.path}>{subMenu.meta.title}</Link>
                          </Menu.Item>
                        )
                      } else {
                        return null
                      }
                    })
                  }
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item key={`menu${menu.path}`}>
                  <Link to={menu.path}>
                    <MyIcon type={menu.meta.icon}/>
                    <span>{menu.meta.title}</span>
                  </Link>
                </Menu.Item>
              )
            }
          })
        }
      </Menu>
    )
  }
}

export default withRouter(Sidebar)