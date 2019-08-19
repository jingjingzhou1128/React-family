import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {
  render () {
    return (
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    )
  }
}