import React from 'react'
import { Header } from 'antd/es/layout/layout'
import { useNavigate } from 'react-router-dom'
import { Logo } from './Logo'
import { Col, Row } from 'antd'


export const _Header = ({ token, setToken }) => {

	const Navigate = useNavigate()

	const Logout = () => {
		setToken(false);
		localStorage.removeItem('user_token');
		Navigate('/login')
	}
	let justifyContent = ''

	if (!token) { justifyContent = 'center' } else justifyContent = 'space-between'

	return (
		<span className='my-header'>
			<Header >
				<div className='header-inner' >
					<Row justify={justifyContent} align={'middle'}>
						<Logo />

						{
							token ?
								<h1 className='logout' onClick={Logout}>Выйти</h1>
								:
								null
						}
					</Row>
				</div>
			</Header>
		</span>
	)
}
