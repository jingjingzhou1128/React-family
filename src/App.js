import React, {Component} from 'react'
import {HashRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import {ConfigProvider} from 'antd'
import moment from 'moment'
import 'moment/locale/zh-cn'

import antdEnLocale from 'antd/es/locale/en_US'
import antdZhLocale from 'antd/es/locale/zh_CN'

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

const mapStateToProps = (state) => {
  return {
    language: state.app.language
  }
}

class App extends Component {
  componentDidMount () {
    moment.locale(this.props.language)
  }

  render () {
    let antLocale = getAntLocale(this.props.language)
    return (
      <ConfigProvider locale={antLocale}>
        <Router children={rootRoutes}></Router>
      </ConfigProvider>
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
