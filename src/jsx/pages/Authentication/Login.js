import React from "react";
import "../Authentication/Login.css";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { BsLock, BsPersonFill } from "react-icons/bs";
import "./Login.css";
import { useForm } from "antd/es/form/Form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../../store/actions";
function Login() {
  const dispatch=useDispatch();
  const {isAuthenticated} = useSelector(state => ({
		isAuthenticated: state.Login.isAuthenticated,
	}))
  
  const [form] = useForm();
  const history=useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);
    // dispatch(loginSuccess());
  };
  console.log(isAuthenticated);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="main">
      <Form
      form={form}
        className="login_main"
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
        <div style={{ textAlign: "center" }}>
          <UserOutlined
            style={{
              fontSize: "33px",
              margin: "0 0 40px 0",
              border: "1px solid black",
              borderRadius: "50%",
              padding: "3px",
            }}
          />
        </div>
        <div className="login_inputs">
        <Form.Item className="ant-form-item-row" name="user-name">
            <Input
              placeholder="User name"
              prefix={
                <UserOutlined
                  style={{ fontSize: "18px", paddingLeft: "20px" }}
                />
              }
              className="input"
            />
          </Form.Item>
        
          <Form.Item className="ant-form-item-row" name="password">
            <Input
              placeholder="Password"
              prefix={
                <BsLock style={{ fontSize: "18px", marginLeft: "20px" }} />
              }
              type="password"
              className="input"
            />
           
          </Form.Item>
           <p
              className="text-end"
              style={{ letterSpacing: "0.6px" ,marginTop:"-20px"}}
            >
              Forgot Password ?
            </p>
        </div>
        <Form.Item
          wrapperCol={{
            offset: 10,
            // span: 16,
          }}
          style={{ marginTop: "-10px" }}
        >
         {/* <Link to="/dashboard">  */}
         <Button
            type="primary"
            htmlType="submit"
            style={{
              backgroundColor: "#572C81",
              borderRadius: "15px",
              padding: "0px 26px",
              letterSpacing:"0.5px"
            }}
          >
            SIGN IN
          </Button>
          {/* </Link> */}
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
