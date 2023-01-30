import React, { useEffect } from 'react'
import { Button, Table } from 'antd'
import { Row, Col,  } from 'antd'
import { useState } from 'react'
import { columns, Get_data, Get_func } from './Columns'
import { getDate } from './GetDate'
import { Header } from 'antd/es/layout/layout'
import { SearchOutlined,  } from '@ant-design/icons';
import Api from './Api';

export const _Table = () => {
	const [dataSource, setDataSource] = useState([])

	const retri = async () => {
		const response = await Api.get('/tasks')
		return response.data
	}
	useEffect (() => {
		const getAllTasks = async () => {
			const allTasks = await retri()
			setDataSource(allTasks)
		}
		getAllTasks()
	}, [])


	const chabgeBackground = record => record.utv && record.vipoln? 'row-sucxess': getDate(record.date)? 'row-danger': 'row-normal'

	return (
		<Row >
			<Col md={24}>
				<Header className='header-table'>
					<SearchOutlined />
					<p>Стажер Фамилия Имя Отчество</p>
					<p style={{justifySelf: 'flex-end'}}>100%</p>
				</Header>
				<Table 
					rowClassName={(record) => chabgeBackground(record)}
					columns={columns}
					rowSelection={{
						Selected: (elem) => console.log(elem)
					}}
					dataSource={dataSource.map(elem => ({...elem, key: elem.id}))}
				/>
			</Col>
		</Row>
	)
}
