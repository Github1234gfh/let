import React, { useEffect } from 'react'
import { Button, Table } from 'antd'
import { Row, Col, } from 'antd'
import { getDate } from './GetDate'
import { Header } from 'antd/es/layout/layout'
import { SearchOutlined, } from '@ant-design/icons';

export const _Table = ({ dataSource, columns }) => {

	const chabgeBackground = record => record.utv && record.vipoln ? 'row-sucxess' : getDate(record.date) ? 'row-danger' : 'row-normal';

	return (
		<span className='my-row'>
			<Row style={{borderRadius: 8}}>
				<Col xs={24} md={{span: 24}}>
					<Header className='header-table'>
						<SearchOutlined />
						<p>Стажер Фамилия Имя Отчество</p>
						<p className=''>100%</p>
					</Header>
					<Table
						rowClassName={(record) => chabgeBackground(record)}
						columns={columns}
						className='time-table-row-select'
						rowSelection={{
							Selected: (elem) => console.log(elem)
						}}
						dataSource={dataSource.map(elem => ({ ...elem, key: elem.id }))}
					/>
				</Col>
			</Row>
		</span>
	)
}
