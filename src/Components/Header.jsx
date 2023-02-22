import React from 'react'
import { Header } from 'antd/es/layout/layout'
import { useNavigate } from 'react-router-dom'


export const _Header = ({ token, setToken }) => {

	const Navigate = useNavigate()

	const Logout = () => {
		setToken(false);
		localStorage.removeItem('user_token');
		Navigate('/login')
	}

	return (
		<Header >
			<div className='header-inner'>
				{
					token ?
						<h1 className='logut' onClick={Logout}>Выйти</h1>
					:
					null
					}
			</div>
		</Header>
	)
}
