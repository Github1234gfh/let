import React from 'react'
import { Table } from 'antd'
import { Row, Col, } from 'antd'
import { useState } from 'react'
import { columns } from './Columns'
import { getDate } from './GetDate'

export const _Table = ({value}) => {
	const dataSourse = value.map(elem => ({...elem, key: elem.id}))

	const chabgeBackground = record => record.utv && record.vipoln? 'row-sucxess': getDate(record.date)? 'row-danger': 'row-normal'

	return (
		<Row >
			<Col xs={28} md={{span: 16, offset: 4}}>
				<Table 
					rowClassName={(record) => chabgeBackground(record)}
					columns={columns}
					rowSelection={{

					}}
					dataSource={dataSourse}
				/>
			</Col>
		</Row>
	)
}
