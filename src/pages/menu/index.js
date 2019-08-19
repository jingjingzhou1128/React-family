import React, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import {asyncComponent} from '@/App.js'

export default class Menu extends Component {
  render () {
    let props = this.props
    return (
      <div>
        <p>Menu Page</p>
        <Link to={`${props.match.url}/menu1`}>menu1</Link>
        <Switch>
          <Route path={`${props.match.url}/menu1`} component={asyncComponent(() => import('@/pages/menu/menu1/index.js'))}/>
        </Switch>
      </div>
    )
  }
}
