import React, {Component} from 'react'
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
    <Route path="/403" component={asyncComponent(() => import('@/pages/403/index'))}/>
    <Route path="/404" component={asyncComponent(() => import('@/pages/error/index'))}/>
    <Route path="*" render={() => <Redirect to="/404"/>}/>
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

// const PrivateRoute = ({component, ...rest}) => {
//   return class extends Component {
//     constructor (props) {
//       super(props)
//       this.state = {
//         isLogin: false
//       }
//     }

//     componentDidMount () {
//       console.log(component)
//       setTimeout(() => {
//         this.setState({
//           isLogin: !this.state.isLogin
//         })
//       }, 2000)
//     }

//     render () {
//       return (
//         <Route {...rest} render={props => (
//           null
//           // this.state.isLogin ? <Component {...props}/> : <Redirect to="/login"/>
//         )}/>
//       )
//     }
//   }
// }
function PrivateRoute({component: C, ...rest}) {
  const userRole = sessionStorage.getItem('roleKey')
  const {roleKey} = rest.meta || {}
  if (!roleKey) return (
    <Route {...rest} component={C}/>
  )
  let hasPermis = roleKey.findIndex(item => item.toString() === userRole.toString()) >= 0
  return (
    hasPermis ? <Route {...rest} component={C}/> : <Redirect to="/403"/>
  )
}

export const contentRoutes = (
  <Switch>
    {
      getRoutes(contentRouterMap).map(route => {
        return (
          <PrivateRoute key={`route${route.path}`} path={route.path} component={route.component} meta={route.meta} exact={route.isExact}/>
          // <PrivateRoute key={`route${route.path}`} path={route.path} component={route.component} exact={route.isExact}/>
          // <Route key={`route${route.path}`} path={route.path} component={route.component} exact={route.isExact}/>
        )
      })
    }
    <Route path="*" render={() => <Redirect to="/404"/>}/>
  </Switch>
)


console.log(getRoutes(contentRouterMap))

export default rootRoutes