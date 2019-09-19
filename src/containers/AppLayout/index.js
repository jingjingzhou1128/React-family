import React, {Component} from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {Layout} from 'antd';
import {connect} from 'react-redux';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import MyTags from '@/components/MyTags';
import './index.scss';

import {contentRoutes} from '@/router';
import contentRouterMap from '@/router/config';
import {debounce} from '@/utils/common';
import {setDevice, closeSidebar} from '@/redux/actions/app';

const {Sider, Header, Content} = Layout;

const mapStateToProps = (state) => {
  return {
    collapsed: state.app.collapsed,
    device: state.app.device
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDevice: (device) => {
      dispatch(setDevice(device))
    },
    closeSidebar: () => {
      dispatch(closeSidebar())
    }
  }
}

class AppLayout extends Component {
  constructor (props) {
    super(props)
    this.__resizeHandler = debounce(this.resizeWindow.bind(this))
  }

  nprogressStart () {
    NProgress.start()
  }

  nprogressDone () {
    NProgress.done()
  }

  resizeWindow () {
    // 获取当前屏幕宽度
    let screenWidth = window.innerWidth || document.documentElement.clientWidth
    if (screenWidth >= 1024) {
      if (this.props.device === 'mobile') {
        this.props.setDevice('desktop')
      }
    } else {
      if (this.props.device === 'desktop') {
        this.props.setDevice('mobile')
      }
      if (!this.props.collapsed) {
        this.props.closeSidebar()
      }
    }
  }

  initDevice () {
    this.resizeWindow()
  }

  componentDidMount () {
    this.nprogressDone()
    this.initDevice()
    window.addEventListener('resize', this.__resizeHandler)
  }

  componentDidUpdate (oldProps) {
    this.nprogressDone()
    if (this.props.location.pathname === oldProps.location.pathname) return
    this.props.closeSidebar()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.__resizeHandler)
  }

  componentDidCatch () {
    console.log('didCatch')
  }

  render () {
    this.nprogressStart()
    const collapsed = this.props.collapsed
    return (
      <Layout id="app">
        {
          this.props.device === 'mobile' && !collapsed ? (
            <div className="backstage" onClick={() => {this.props.closeSidebar()}}></div>
          ) : null
        }
        <Sider trigger={null} collapsible collapsed={collapsed} className={`sidebar ${this.props.device}`}>
          {/* <div className="logo">Logo</div> */}
          <Sidebar menus={contentRouterMap}/>
        </Sider>
        <Layout>
          <Header className="app-header">
            <Navbar/>
            <MyTags/>
          </Header>
          <Content className="app-main">
            {
              contentRoutes
            }
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout)
