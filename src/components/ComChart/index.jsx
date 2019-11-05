import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';

import {debounce} from '@/utils/common';
import './index.scss';

class ComChart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chart: null
    }
    this.__resizeHandler = debounce(this.resizeWindow.bind(this), 500)
    this.__destroyChart = this.destroyChart.bind(this)
  }

  initChart (selector, options) {
    let chart = echarts.init(document.getElementById(selector))
    chart.setOption(options)
    this.setState({
      chart: chart
    })
  }

  updateChart (options) {
    if (!this.state.chart) return
    this.state.chart.setOption(options)
  }

  // 销毁图表
  destroyChart () {
    if (!this.state.chart) return
    this.state.chart.dispose()
    this.setState({
      chart: null
    })
  }

  resizeWindow () {
    if (this.chart) {
      // let width = document.getElementById(this.props.chartId).clientWidth
      // this.state.chart.resize({width: width})
      this.state.chart.resize()
    }
  }

  componentDidMount () {
    this.initChart(this.props.chartId, this.props.chartOptions)
    window.addEventListener('resize', this.__resizeHandler)
  }

  componentWillUnmount () {
    this.__destroyChart()
  }

  render () {
    return (
      <div className="com-chart" id={this.props.chartId}></div>
    )
  }
}

export default ComChart;