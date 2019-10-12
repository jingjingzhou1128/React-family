import React, {Component} from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import {connect} from 'react-redux';
import {setTheme} from '@/redux/actions/app';

const mapStateToProps = (state) => {
  return {
    currentTheme: state.app.theme
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (theme) => {
      document.getElementsByTagName('body')[0].setAttribute('data-theme', theme)
      dispatch(setTheme(theme))
    }
  }
}

class ChangeTheme extends Component {
  initTheme () {
    let theme = this.props.currentTheme
    document.getElementsByTagName('body')[0].setAttribute('data-theme', theme)
  }

  componentDidMount () {
    this.initTheme()
  }

  render () {
    const themeList = [
      {
        label: 'Default',
        value: 'default'
      },
      {
        label: 'Theme1',
        value: 'theme1'
      }
    ]
    return (
      <Dropdown
        trigger={['click']}
        overlay={() => (
          <Menu>
            {
              themeList.map(item => 
                (
                  <Menu.Item
                    key={item.value}
                    disabled={item.value === this.props.currentTheme}
                    onClick={() => {this.props.changeTheme(item.value)}}>
                    {item.label}
                  </Menu.Item>
                )
              )
            }
          </Menu>
        )}>
        <span className="ant-dropdown-link">
          <span className="text"><i className="iconfont icon-T-yanse"></i></span>
          <Icon type="caret-down"/>
        </span>
      </Dropdown>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTheme)
