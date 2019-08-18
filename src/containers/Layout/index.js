import React, {Component} from 'react';
// import {HashRouter as Router, Link, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import {asyncComponent} from '@/App.js'

export default class Layout extends Component {
  render () {
    console.log(this.props)
    return (
      <div className="app">
        <aside className="sidebar">
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/menu">Menu</Link></li>
          </ul>
        </aside>
        <main>
          <header>
            <div>Header</div>
          </header>
          <div className="main-container">
            {this.props.children}
          </div>
        </main>
      </div>
      // <Router>
      //   <div>
      //     <Link to="/home/dashboard">Dashboard</Link>
      //     <p>Home</p>
      //     <Switch>
      //       <Route path="/home/dashboard" component={asyncComponent(() => import('@/pages/dashboard/index.js'))}/>
      //     </Switch>
      //   </div>
      // </Router>
    )
  }
}
