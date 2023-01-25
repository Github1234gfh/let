import React from 'react'
import { Content, Header } from 'antd/es/layout/layout'
import { Get_data } from './Get_data'


export const _Content = () => {
	return (
		<Content className="site-layout" style={{ padding: '0 50px'}}>
			<Get_data />
		</Content>
	)
}
