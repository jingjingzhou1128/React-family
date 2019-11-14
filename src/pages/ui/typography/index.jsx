import React, {Component} from 'react';
import {Typography} from 'antd';

import MyBreadcrumb from '@/components/MyBreadcrumb';
import PanelTitle from '@/components/PanelTitle';

export default class TypographyPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      /**
       * @author zhoujingjing
       * @description 面包屑导航栏数据
       */
      breads: {
        separator: '/',
        data: [
          {
            title: window.generateMessage('reactFrame.route.dashboard'),
            link: '/home/dashboard'
          },
          {
            title: window.generateMessage('reactFrame.route.ui')
          },
          {
            title: window.generateMessage('reactFrame.route.typography')
          }
        ]
      },
      /**
       * @author zhoujingjing
       * @description 可编辑文本内容
       */
      editText: 'Ant Design'
    }

    this.__changeEditText = this.changeEditText.bind(this)
  }

  changeEditText (str) {
    this.setState({
      editText: str
    })
  }

  render () {
    return (
      <div className="main-wrapper">
        <MyBreadcrumb breads={this.state.breads}></MyBreadcrumb>
        <div className="main-content">
          <div className="panel">
            <PanelTitle panelTitle={{title: 'Text'}}></PanelTitle>
            <div className="panel-body">
              <Typography.Text>Ant Design</Typography.Text>
              <br/>
              <Typography.Text mark>Ant Design</Typography.Text>
              <br/>
              <Typography.Text code>Ant Design</Typography.Text>
              <br/>
              <Typography.Text underline>Ant Design</Typography.Text>
              <br/>
              <Typography.Text delete>Ant Design</Typography.Text>
              <br/>
              <Typography.Text editable={{onChange: this.__changeEditText}}>{this.state.editText}</Typography.Text>
              <br/>
              <Typography.Text copyable>Ant Design</Typography.Text>
            </div>
          </div>
          <div className="panel">
            <PanelTitle panelTitle={{title: 'Paragraph'}}></PanelTitle>
            <div className="panel-body">
              <Typography.Paragraph>Ant Design, a design language for background applications</Typography.Paragraph>
              <Typography.Paragraph mark>Ant Design, a design language for background applications</Typography.Paragraph>
              <Typography.Paragraph code>Ant Design, a design language for background applications</Typography.Paragraph>
              <Typography.Paragraph underline>Ant Design, a design language for background applications</Typography.Paragraph>
              <Typography.Paragraph delete>Ant Design, a design language for background applications</Typography.Paragraph>
              <Typography.Paragraph copyable>Ant Design, a design language for background applications</Typography.Paragraph>
              <Typography.Paragraph ellipsis>Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team.</Typography.Paragraph>
              <Typography.Paragraph ellipsis={{rows: 3, expandable: true}}>Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team. Ant Design, a design language for background applications, 
                is refined by Ant UED Team.</Typography.Paragraph>
            </div>
          </div>
        </div>
      </div>
    )
  }
}