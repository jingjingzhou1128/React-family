import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Input, Button, Checkbox} from 'antd'

import MyIcon from '@/components/MyIcon'
import {ROLES} from '@/utils/common'
import {getIsLogin} from '@/utils/permission'
import './index.scss'

// 字符串加密
function compileStr (code) {
  if (code === '') {
    return code
  }
  let c = String.fromCharCode(code.charCodeAt(0) + code.length)
  for (let i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1))
  }
  return escape(c)
}

// 字符串解密
function uncompileStr (code) {
  if (code === '') {
    return code
  }
  code = unescape(code)
  let c = String.fromCharCode(code.charCodeAt(0) - code.length)
  for (let i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1))
  }
  return c
}

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    getIsLogin()
  }



  handleSubmit (event) {
    event.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (err) return
      if (!((values.username === 'admin' || values.username === 'guest') && values.password === '123456')) {
        window.notificationError({
          msg: 'Error',
          desc: 'Username or Password is not correctly'
        })
        return
      }
      if (values.remember) {
        localStorage.setItem('username', values.username)
        localStorage.setItem('password', compileStr(values.password))
      } else {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
      }
      localStorage.setItem('roleKey', values.username === 'admin' ? ROLES.admin : ROLES.tourist)
      localStorage.setItem('isLogin', 1)
      this.props.history.push('/home/dashboard')
    })
  }

  componentDidMount () {
    let username = localStorage.getItem('username')
    let password = localStorage.getItem('password')
    if (username) {
      this.setState({
        username: username
      })
    }
    if (password) {
      this.setState({
        password: uncompileStr(password)
      })
    }
  }

  render () {
    const isLogin = !!+localStorage.getItem('isLogin')
    const {getFieldDecorator} = this.props.form
    return (
      <Fragment>
        {
          !isLogin ? 
          <div className="login">
            <p className="form-title">Login</p>
            <Form onSubmit={(event) => this.handleSubmit(event)} className="login-form">
              <Form.Item>
                {
                  getFieldDecorator('username', {
                    initialValue: this.state.username,
                    rules: [
                      {required: true, message: 'Please input your username'}
                    ]
                  })(
                    <Input prefix={<MyIcon type="icon-user"/>} placeholder="please input your username"/>
                  )
                }
              </Form.Item>
              <Form.Item>
                {
                  getFieldDecorator('password', {
                    initialValue: this.state.password,
                    rules: [
                      {required: true, message: 'Please input your password'}
                    ]
                  })(
                    <Input prefix={<MyIcon type="icon-mima"/>} type="password" placeholder="please input your password"/>
                  )
                }
              </Form.Item>
              <Form.Item>
                {
                  getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox>Remember me</Checkbox>
                  )
                }
              </Form.Item>
              <Form.Item className="form-btn">
                <Button type="primary" htmlType="submit">Sign In</Button>
              </Form.Item>
            </Form>
            <ul className="account-info">
              <li>
                <span>Admin</span>
                <span>Username: admin,Password：123456</span>
              </li>
              <li>
                <span>Tourist</span>
                <span>Username: guest,Password: 123456</span>
              </li>
            </ul>
          </div> : 
          <Redirect to="/home/dashboard"/>
        }
      </Fragment>
    )
  }
}

export default Form.create()(Login)
