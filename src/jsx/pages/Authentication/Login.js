
import React from 'react'
import "../Authentication/Login.css"
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined } from "@ant-design/icons"
import "./Login.css"
function Login() {
	const onFinish = (values) => {
		console.log('Success:', values);
	  };
	  const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	  };
  return (
	  <div style={{backgroundColor:"#EAEAEA"}}>
		 <Form
     className='login_main'
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="login_inputs">
    <Form.Item><Input placeholder="User name"  prefix={<UserOutlined />} className="input"/></Form.Item>
    <Form.Item><Input placeholder="Password" prefix={<UserOutlined />} className="input"/>
    <p className='text-end' style={{letterSpacing:"0.6px",margin:"5px 0"}}>Forgot Password ?</p></Form.Item>
    
    </div>
      <Form.Item
        wrapperCol={{
          offset: 8,
          // span: 16,
        }}
        style={{marginTop:"-10px"}}
      >
        <Button type="primary" htmlType="submit" style={{backgroundColor:"#572C81",borderRadius:"15px",padding:"0 26px"}}>
          SIGN IN
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Login