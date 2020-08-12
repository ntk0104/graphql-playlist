import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { onLogin } from 'features/App/slice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './index.scss';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

LoginPage.propTypes = {};

function LoginPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = values => {
    dispatch(onLogin(values.email, values.password))
      .then(() => {
        message.success('login successfully');
        history.push('/');
      })
      .catch(error => {
        message.error(error.message);
      });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <div style={{ width: '33%' }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Email"
            name="email"
            initialValue="eve.holt@reqres.in"
            rules={[{ required: true, message: 'Please input your email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            initialValue="cityslicka"
            rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
