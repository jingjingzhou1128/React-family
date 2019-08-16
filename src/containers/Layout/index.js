import React, {Component} from 'react';
import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {asyncComponent} from '@/App.js'

export default class Layout extends Component {
  render () {
    return (
      <Router>
        <div>
          <Link to="/home/dashboard">Dashboard</Link>
          <p>Home</p>
          <Switch>
            <Route path="/home/dashboard" component={asyncComponent(() => import('@/pages/dashboard/index.js'))}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
