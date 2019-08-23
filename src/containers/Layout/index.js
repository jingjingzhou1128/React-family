import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Sidebar from '@/components/Sidebar';

import {contentRoutes} from '@/router';
import contentRouterMap from '@/router/config';

export default class Layout extends Component {
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
    return (
      <div className="app">
        <aside className="sidebar" style={{width: 256}}>
          {/* <ul>
            <li><Link to="/home/dashboard" replace>Dashboard</Link></li>
            <li><Link to="/home/nest/menu1">Menu1</Link></li>
            <li><Link to="/home/nest/menu2">Menu2</Link></li>
          </ul> */}
          <Sidebar menus={contentRouterMap} activeMenu={this.getCurrentPath()}/>
        </aside>
        <main>
          <header>
            <div>Header</div>
          </header>
          <div className="main-container">
            {
              contentRoutes
            }
          </div>
        </main>
      </div>
    )
  }
}
