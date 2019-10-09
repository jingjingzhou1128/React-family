import React, {Component} from 'react';
import {DatePicker} from 'antd';

const {RangePicker} = DatePicker;

export default class Dashboard extends Component {
  render () {
    return (
      <div>
        Dashboard Page
        <RangePicker/>
      </div>
    )
  }
}
