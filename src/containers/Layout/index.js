import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import contentRouterMap from '@/router/config'

export default class Layout extends Component {
  render () {
    return (
      <div className="app">
        <aside className="sidebar">
          <ul>
            <li><Link to="/home/dashboard">Dashboard</Link></li>
            <li><Link to="/home/nest/menu1">Menu1</Link></li>
            <li><Link to="/home/nest/menu1">Menu2</Link></li>
          </ul>
        </aside>
        <main>
          <header>
            <div>Header</div>
          </header>
          <div className="main-container">
            <Switch>
              {
                contentRouterMap.map(route => {
                  if (route.children) {
                    let subRoutes = route.children.map(subRoute => {
                      return (
                        <Route path={route.path} Component={path.component}/>
                      )
                    })
                  } else {
                    return (
                      <Route path={route.path} Component={path.component}/>
                    )
                  }
                })
              }
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}
