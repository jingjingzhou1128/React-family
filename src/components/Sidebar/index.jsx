import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Icon} from 'antd';

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
            return <SiderbarItem key={`menu${subMenu.path}`} menu={subMenu}/>
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
      <Menu.Item key={menu.path}>
        <Link to={menu.path}>{menu.meta.title}</Link>
      </Menu.Item>
    )
  }
}

export default class Sidebar extends Component {
  render () {
    const menus = this.props.menus
    const defaultSelect = [`menu${this.props.activeMenu}`]
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={defaultSelect}
      >
        {
          menus.map(menu => {
            // return <SiderbarItem key={`menu${menu.path}`} menu={menu}/>
            if (menu.children) {
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
                      if (!subMenu.children) {
                        return (
                          <Menu.Item key={subMenu.path}>
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
                    <Icon type={menu.meta.icon || "pie-chart"}></Icon>
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