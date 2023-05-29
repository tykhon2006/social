import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Spin } from "antd";
import { connect } from "react-redux";

// 1eda7d5d3daedb1d1e9fe0736b9b9f3d30f0298b
const Entry = (props) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }
  return (
    <div>
      {errorMessage}
      {props.loading ? (
        <Spin />
      ) : (
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Sign in
            </Button>
            Or <a href="/login">register now!</a>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: { message: "error" },
  };
};

export default connect(mapStateToProps)(Entry);
