import React, { useState } from 'react'
import { Content } from 'antd/es/layout/layout'
import { _Table } from './Table'
import { _Menu } from './Menu'
import { _TableLogic } from './Table-logic'

export const _Content = () => {
	const [dataSource, setDataSource] = useState([])

	const ChangedataSource = (e) => {
		setDataSource(e)
	} 
	return (
		<Content >
			<div className='container-main'>
				<_Menu dataSource={dataSource} change={ChangedataSource}/>
				<_TableLogic dataSource={dataSource} change={ChangedataSource}/>
			</div>
		</Content>
	)
}
