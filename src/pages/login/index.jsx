import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {Form, Input, Button, Checkbox} from 'antd';

import MyIcon from '@/components/MyIcon';
import './index.scss';

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
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err)
      console.log(values)
      if (err) return
      if (values.remember) {
        localStorage.setItem('username', values.username)
        localStorage.setItem('password', compileStr(values.password))
      } else {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
      }
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
    const {getFieldDecorator} = this.props.form
    return (
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
        {/* <Link to="/home/dashboard">Home</Link> */}
      </div>
    )
  }
}

export default Form.create()(Login)
