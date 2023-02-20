import React, { useEffect } from 'react'
import { Spin, Table } from 'antd'
import { Row, Col, } from 'antd'
import { getDate } from './GetDate'
import { Header } from 'antd/es/layout/layout'
import { SearchOutlined,LoadingOutlined } from '@ant-design/icons';


export const _Table = ({ dataSource, columns , loading}) => {

	const antIcon = (
		<LoadingOutlined
			style={{
				fontSize: 24,
			}}
			spin
		/>
	);
	
	
	const chabgeBackground = record => record.approved && record.completed ? 'row-sucxess' : getDate(record.date) ? 'row-danger' : 'row-normal';

	return (
		<span className='my-row'>
			<Row >
				<Col xs={24} md={{ span: 24 }}>
					<Header className='header-table'>
						<SearchOutlined />
						<p>Стажер Фамилия Имя Отчество</p>
						<p className=''>100%</p>
					</Header>
					<Table 
						pagination={false}
						rowClassName={(record) => chabgeBackground(record)}
						columns={columns}
						loading={{indicator: <Spin indicator={antIcon}/>, spinning: loading}}
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
