import React, {Component} from 'react'

import './index.scss'

class PanelTitle extends Component {
  /**
   * panelTitle: {
   *    title: ''
   * }
   */
  render () {
    return (
      <div className="panel-title">
        <span className="title">{this.props.panelTitle.title}</span>
        <div className="operate">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default PanelTitle
