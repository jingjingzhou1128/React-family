import {Switch, Route, Redirect} from 'react-router-dom'
import asyncComponent from '@/utils/asyncComponent'
import Layout from '@/containers/Layout'

const rootRoutes = (
  <Switch>
    <Route path="/" exact render={() => {
      return (<Redirect to="/login"/>)
    }}/>
    <Route path="/login" component={asyncComponent(() => import('@/pages/login/index'))}/>
    <Route path="/home" component={Layout}/>
    <Route path="/404" component={asyncComponent(() => import('@/pages/error/index'))}/>
    <Route path="*" render={() => <Redirect to="404"/>}/>
  </Switch>
)

export default rootRoutes;