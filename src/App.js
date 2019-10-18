import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import {ConfigProvider} from 'antd';
// import moment from 'moment';
import 'moment/locale/zh-cn';
// import {IntlProvider} from 'react-intl';

import antdEnLocale from 'antd/es/locale/en_US';
import antdZhLocale from 'antd/es/locale/zh_CN';
// import enLocale from '@/locale/en-US';
// import zhLocale from '@/locale/zh-CN';

import rootRoutes from '@/router'

function getAntLocale (lang) {
  switch (lang) {
    case 'zh-CN':
      return antdZhLocale
    case 'en-US':
      return antdEnLocale
    default:
      return antdZhLocale
  }
}

// function getLocale (lang) {
//   switch (lang) {
//     case 'zh-CN':
//       return zhLocale
//     case 'en-US':
//       return enLocale
//     default:
//       return zhLocale
//   }
// }

const mapStateToProps = (state) => {
  return {
    language: state.app.language
  }
}

class App extends Component {
  componentDidMount () {
    // moment.locale(this.props.language)
  }

  render () {
    let antLocale = getAntLocale(this.props.language)
    // let messages = getLocale(this.props.language)
    return (
      // <IntlProvider locale={this.props.language} messages={messages}>
      <ConfigProvider locale={antLocale}>
        <Router children={rootRoutes}></Router>
      </ConfigProvider>
      // </IntlProvider>
    )
  }
}
// const App = () => {
//   return (
//     <ConfigProvider locale={antdEnLocale}>
//       <Router children={rootRoutes}></Router>
//     </ConfigProvider>
//   )
// }

export default connect(mapStateToProps, null)(App)
