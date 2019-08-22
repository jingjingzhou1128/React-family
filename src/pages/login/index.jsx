import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';

export default class Login extends Component {
  render () {
    return (
      <Router>
        <div>
          <p>Login Page</p>
          <Link to="/home/dashboard">Home</Link>
        </div>
      </Router>
    )
  }
}
