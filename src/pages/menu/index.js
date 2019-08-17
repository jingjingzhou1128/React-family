import React, {Component} from 'react'
import {Link, Route, Switch} from 'react-router-dom'

export default class Menu extends Component {
  render () {
    return (
      <div>
        <p>Menu Page</p>
        <Link to="/menu/menu1">menu1</Link>
        <Switch>
          <Route path="/menu/menu1" component={asyncComponent(() => import('@/pages/menu/menu1/index.js'))}/>
        </Switch>
      </div>
    )
  }
}
