import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import {asyncComponent} from '@/utils/asyncComponent'
import AppLayout from '@/containers/AppLayout'
import contentRouterMap from '@/router/config'

const rootRoutes = (
  <Switch>
    <Route path="/" exact render={() => {
      return (<Redirect to="/login"/>)
    }}/>
    <Route path="/login" component={asyncComponent(() => import('@/pages/login/index'))}/>
    <Route path="/home" component={AppLayout}/>
    <Route path="/404" component={asyncComponent(() => import('@/pages/error/index'))}/>
    <Route path="*" render={() => <Redirect to="404"/>}/>
  </Switch>
)

function getRoutes (routesMap) {
  let routesList = []
  for (let routes of routesMap) {
    if (routes.children) {
      routesList.push(...getRoutes(routes.children))
    } else {
      routesList.push({...routes})
    }
  }
  return routesList
}

export const contentRoutes = (
  <Switch>
    {
      getRoutes(contentRouterMap).map(route => {
        return (
          <Route key={`route${route.path}`} path={route.path} component={route.component}/>
        )
      })
    }
  </Switch>
)

export default rootRoutes;