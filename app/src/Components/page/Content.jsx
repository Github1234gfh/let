import React from 'react'
import { Content } from 'antd/es/layout/layout'
import { _Table } from './Table'
import { _Menu } from './Menu'


export const _Content = () => {


	return (
		<Content >
			<div className='container-main'>
				<_Menu />
				<_Table />
			</div>
		</Content>
	)
}
