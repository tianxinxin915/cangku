import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export default class Basics extends Component {
    
    render() {
        
        return (
            <div>
                <Form name="normal_login" className="login-form" initialValues={{ remember: true, }} >
                    <Form.Item name="username" rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
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
                            <Checkbox>记住我</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="xxx">
                            密码
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">  登录 </Button>
                             <a href="/High">立即注册</a>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}
