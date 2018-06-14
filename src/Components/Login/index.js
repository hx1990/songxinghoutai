import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.css'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        window.bshow=false
        this.props.msg(window.bshow)
      }
    });
  }
  constructor(){
    super()
    this.state={

    }
    
  }
  // componentDidMount(){
  //   // ('aaaa')
  //   console.log()
  // }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="logi">
      <Form onSubmit={this.handleSubmit} className="login-form" >
        <h3>送信智递管理后台</h3>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入用户密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
          )}
          <a className="login-form-forgot" href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
         
        </FormItem>
      </Form>
      </div>
    );
  }
}

const Login = Form.create()(NormalLoginForm);



export default Login

