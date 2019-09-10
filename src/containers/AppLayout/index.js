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

const {Sider, Header, Content} = Layout;

const mapStateToProps = (state) => {
  return {
    collapsed: state.app.collapsed
  }
}

class AppLayout extends Component {
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     collapsed: false
  //   }
  // }

  // toggleCollapse () {
  //   let collapsed = this.state.collapsed
  //   this.setState({
  //     collapsed: !collapsed
  //   })
  // }

  nprogressStart () {
    NProgress.start()
  }

  nprogressDone () {
    NProgress.done()
  }

  componentDidMount () {
    this.nprogressDone()
  }

  componentDidUpdate () {
    this.nprogressDone()
  }

  componentDidCatch () {
    console.log('didCatch')
  }

  render () {
    this.nprogressStart()
    const collapsed = this.props.collapsed
    return (
      <Layout id="app">
        <Sider trigger={null} collapsible collapsed={collapsed} className="sidebar">
          {/* <div className="logo">Logo</div> */}
          <Sidebar menus={contentRouterMap}/>
        </Sider>
        <Layout>
          <Header className="app-header">
          {/*  toggleCollapse={() => {this.toggleCollapse()}} collapsed={collapsed} */}
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

export default connect(mapStateToProps)(AppLayout)
