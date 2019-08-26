import React, {Component} from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {Layout} from 'antd';

import Sidebar from '@/components/Sidebar';
import MyIcon from '@/components/MyIcon';

import {contentRoutes} from '@/router';
import contentRouterMap from '@/router/config';

const {Sider, Header, Content} = Layout;

export default class AppLayout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  toggleCollapse () {
    let collapsed = this.state.collapsed
    this.setState({
      collapsed: !collapsed
    })
    console.log(this.state.collapsed)
  }

  nprogressStart () {
    NProgress.start()
  }

  nprogressDone () {
    NProgress.done()
  }

  getCurrentPath () {
    return this.props.location.pathname
  }

  componentDidMount () {
    this.nprogressDone()
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextProps.location.pathname === this.props.location.pathname) {
      return false
    }
    return true
  }

  componentDidUpdate () {
    console.log('didUpdate')
    this.nprogressDone()
  }

  componentWillUnmount () {
    console.log('willUnmount')
  }

  componentDidCatch () {
    console.log('didCatch')
  }
  render () {
    this.nprogressStart()
    let collapsed = this.state.collapsed
    return (
      <Layout className="app">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo">Logo</div>
          <Sidebar menus={contentRouterMap} activeMenu={this.getCurrentPath()}/>
        </Sider>
        <Layout>
          <Header style={{background: '#fff', padding: 0}}>
            <MyIcon type={collapsed ? 'icon-zhankai' : 'icon-shousuo'} onClick={() => {this.toggleCollapse()}}/>
          </Header>
          <Content>
            {
              contentRoutes
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}
