import React, {Component} from 'react';
import {Modal} from 'antd';

export default class ComModal extends Component {
  render () {
    return (
      <Modal
        title="Setting"
        visible={this.props.modalData.visible}
        maskClosable={false}
        keyboard={false}
        afterClose={this.props.modalData.afterClose}
        footer={null}>
        {this.props.children}
      </Modal>
    )
  }
}