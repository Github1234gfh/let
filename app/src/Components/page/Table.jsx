import React, { useEffect } from 'react'
import { Button, Table } from 'antd'
import { Row, Col,  } from 'antd'
import { useState } from 'react'
import { Columns } from './Columns'
import { getDate } from './GetDate'
import { Header } from 'antd/es/layout/layout'
import { SearchOutlined,  } from '@ant-design/icons';

export const _Table = () => {



	const chabgeBackground = record => record.utv && record.vipoln? 'row-sucxess': getDate(record.date)? 'row-danger': 'row-normal'
	console.log(Columns()[1])
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
					columns={Columns()[0]}
					rowSelection={{
						Selected: (elem) => console.log(elem)
					}}
					dataSource={Columns()[1].map(elem => ({...elem, key: elem.id}))}
				/>
			</Col>
		</Row>
	)
}
