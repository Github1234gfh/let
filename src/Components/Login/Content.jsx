import { UserOutlined } from '@ant-design/icons';
import { Button, Collapse, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../Main/Api';


export const _LoginContent = ({ token, setToken }) => {

	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(false);

	const Navigate = useNavigate();

	useEffect(() => {
		if (token) {
			Navigate('/')
		}
	}, [])

	const Login = async () => {
		try {
			const response = await Api.post('/api/v1/token/', {
				fullname: name,
				password: password,
			});
			localStorage.setItem('user_token', response.data.access);
			console.log('succes')
			setError(false);
			setToken(response.data.access);
			Navigate('/');
		}
		catch {
			console.log('failed');
			setToken(false);
			setError(true);
		}
	}

	return (
		<div className='container-main'>
			{
				!token ? <span className='edit-form'>
					<Form
						className='edit-form'
						name="basic"
						initialValues={{
							remember: true,
						}}
						onFinish={() => console.log(Login())}
						autoComplete="off"
					>					{
							error ? <Form.Item >
								<span className='error' >Имя пользователя или пароль неверны!</span>
							</Form.Item> : null
						}
						<Form.Item
							name={'username'}
							rules={[
								{
									required: true,
									message: 'Пожалуйста введите имя пользователя!',
								},
							]}
						>
							<span className='change-input'>
								<span className='my-input-settings'>
									<Input
										value={name}
										size="large"
										onChange={(e) => setName(e.target.value)}
										placeholder='Пользователь'
										prefix={<UserOutlined />} />
								</span>
							</span>
						</Form.Item>

						<Form.Item
							name={'password'}
							rules={[
								{
									required: true,
									message: 'Пожалуйста введите пароль!',
								},
							]}
						>
							<span className='change-input'>
								<Input.Password
									size="large"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder='Пароль' />
							</span>
						</Form.Item>
						<Form.Item
						>
							<span className='btn-login'>
								<Button size='large' type="primary" htmlType='submit'>Войти</Button>
							</span>
						</Form.Item>
					</Form>
				</span>
					:
					null
			}

		</div>
	)
}