import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import contentRouterMap from '@/router/config'

function getMenu (routesMap) {
  let routesList = []
  for (let routes of routesMap) {
    if (routes.children) {
      routesList.push(...getMenu(routes.children))
    } else {
      routesList.push({...routes})
    }
  }
  // routesMap.map(routes => {
  //   if (routes.children) {
  //     routesList.push(...getMenu(routes.children))
  //   } else {
  //     routesList.push({...routes})
  //   }
  // })
  return routesList
}

export default class Layout extends Component {
  render () {
    let routes = getMenu(contentRouterMap)
    console.log(routes)
    return (
      <div className="app">
        <aside className="sidebar">
          <ul>
            <li><Link to="/home/dashboard">Dashboard</Link></li>
            <li><Link to="/home/nest/menu1">Menu1</Link></li>
            <li><Link to="/home/nest/menu2">Menu2</Link></li>
          </ul>
        </aside>
        <main>
          <header>
            <div>Header</div>
          </header>
          <div className="main-container">
            <Switch>
              {
                routes.map(route => {
                  return (
                    <Route key={`menu${route.path}`} path={route.path} component={route.component}/>
                  )
                })
              }
            </Switch>
          </div>
        </main>
      </div>
    )
  }
}
