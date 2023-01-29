import React from 'react'
import { Content } from 'antd/es/layout/layout'
import { Get_data } from './Get_data'
import { _Table } from './Table'
import { _Menu } from './Menu'


export const _Content = () => {


	return (
		<Content >
			<div className='container-main'>
				<_Menu />
				{/*<div className='border-main'></div>*/}
				<_Table value={Get_data()} />
			</div>
		</Content>
	)
}
