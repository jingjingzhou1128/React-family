// import React from 'react';
// import logo from './assets/images/logo.svg';
// import './App.scss';
// import {DatePicker} from 'antd';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <DatePicker/>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// import Layout from '@/components/Layout/index.js';

function asyncComponent (importComponent) {
  class AsyncComponent extends Component {
    constructor (props) {
      super(props);
      this.state = {
        component: null
      };
    }
  
    async componentDidMount () {
      const {default: component} = await importComponent();
      this.setState({
        component: component
      });
    }
  
    render () {
      const C = this.state.component;
      return C ? <C {...this.props}/> : null;
    }
  }
  return AsyncComponent;
}

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Redirect exact from="/" to="/login"/>
          <Route path="/login" component={asyncComponent(() => import('@/pages/login/index.js'))}/>
          <Route path="/404" component={asyncComponent(() => import('@/pages/error/404page.js'))}/>
          <Route path="*" render={(props) => <Redirect to="/404"/>}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
