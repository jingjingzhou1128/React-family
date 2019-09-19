import React, {Component} from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import {connect} from 'react-redux';
import {setLang} from '@/redux/actions/app';

const mapStateToProps = (state) => {
  return {
    currentLang: state.app.language
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (lang) => {
      dispatch(setLang(lang))
    }
  }
}

class ChangeLang extends Component {
  initLang () {
    // let language = this.props.currentLang
  }

  componentDidMount () {
    console.log('mount')
    this.initLang()
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
                    onClick={() => {this.props.changeLang(item.value)}}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLang)
