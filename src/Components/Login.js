import React, { Component } from 'react'
// import { UserOutlined }  from '@ant-design/icons'

import {
    Button,
    Form,
    Input,
  } from 'antd';

export default class Login extends Component {
  render() {
    const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '100px 0',

        }}>
            <Form 
            {...formItemLayout}
            name="register"
            onFinish={onFinish}
            initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
            }}
            scrollToFirstError
            >
            <Form.Item 
                name="nickname"
                
                tooltip="What do you want others to call you?"
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите ваше имя пользователя!',
                    whitespace: true,
                },
                ]}
                >
                <Input
                    placeholder="Имя пользователя"
                    // prefix={<UserOutlined style={{
                    //     marginInlineEnd: '0px',
                    //     width: 14,  
                    // }} /> }
                    style={{
                        flexDirection: 'row-reverse',
                        width: 300,
                    }}

                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                {
                    type: 'email',
                    message: 'Введена неверныая электронная почта!',
                },
                {
                    required: true,
                    message: 'Пожалуйста введите вашу электронную почту!',
                },
                ]}
            >
                <Input 
                    placeholder="Электронная почта"
                    style={{
                        width: 300
                    }}
                />
            </Form.Item>
        
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите ваш пароль!',
                },
                ]}
                hasFeedback
            >
                <Input.Password 
                    placeholder='Пароль'
                    style={{
                        width: 300
                    }}
                />
            </Form.Item>
        
            <Form.Item
                name="confirm"
                dependencies={['password']}
                hasFeedback
                rules={[
                {
                    required: true,
                    message: 'Пожалуйста введите подтверждение пароя!',
                },
                ({ getFieldValue }) => ({
                    validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('Два введенных вами пароля не совпадают!'));
                    },
                }),
                ]}
            >
                <Input.Password 
                    placeholder='Подтвердите пароль'
                    style={{
                        width: 300
                    }}
                />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit"
                    style= {{
                    alignSelf: 'flex-start'
                }}>
                    Регистрация
                </Button>
            </Form.Item>
            </Form>
        </div>
        )
    }
}