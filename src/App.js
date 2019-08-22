import React from 'react';
import {HashRouter as Router} from 'react-router-dom';

import rootRoutes from '@/router'

const App = () => {
  return (
    <Router children={rootRoutes}></Router>
  )
}

export default App;
