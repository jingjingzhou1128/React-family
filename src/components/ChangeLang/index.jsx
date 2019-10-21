import React, {Component} from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentLang: state.app.language
  }
}

class ChangeLang extends Component {
  changeLang (lang) {
    sessionStorage.setItem('language', lang)
    window.location.reload(true)
  }

  render () {
    const langList = [
      {
        label: '中文简体',
        value: 'zh-CN'
      },
      {
        label: 'English',
        value: 'en-US'
      }
    ]
    return (
      <Dropdown
        trigger={['click']}
        overlay={() => (
          <Menu>
            {
              langList.map(item => 
                (
                  <Menu.Item
                    key={item.value}
                    disabled={item.value === this.props.currentLang}
                    onClick={() => {this.changeLang(item.value)}}>
                    {item.label}
                  </Menu.Item>
                )
              )
            }
          </Menu>
        )}>
        <span className="ant-dropdown-link">
          <span className="text"><i className="iconfont icon-language"></i></span>
          <Icon type="caret-down"/>
        </span>
      </Dropdown>
    )
  }
}

export default connect(mapStateToProps, null)(ChangeLang)
