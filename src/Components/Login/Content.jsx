import { UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';


export const _LoginContent = () => {

	const onFinish = (values) => {
		console.log('Success:', values);
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};


	return (
		<div className='container-main'>
			<span className='edit-form'>
				<Form
					className='edit-form'
					name="basic"
					labelCol={{
						span: 8,
					}}
					wrapperCol={{
						span: 16,
					}}
					style={{
						maxWidth: 600,
					}}
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						rules={[
							{
								required: true,
								message: 'Please input your username!',
							},
						]}
					>
						<span className='my-input-settings'>
							<Input prefix={<UserOutlined />} />
						</span>
					</Form.Item>

					<Form.Item
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password />
					</Form.Item>
					<Form.Item
					>
						<span className='btn-login'>
							<Button type="primary" htmlType="submit">
								Войти
							</Button>
						</span>
					</Form.Item>
				</Form>
			</span>
		</div>
	)
}