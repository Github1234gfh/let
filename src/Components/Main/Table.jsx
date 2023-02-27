import React from 'react';
import { Spin, Table } from 'antd';
import { CheckDate } from './CheckDate';
import { LoadingOutlined } from '@ant-design/icons';

export const _Table = ({ dataSource, columns, loading }) => {

	const antIcon = (
		<LoadingOutlined
			style={{
				fontSize: 35,
			}}
			spin
		/>
	);

	const chabgeBackground = record => record.approved && record.completed ? 'row-sucxess' : CheckDate(record.date) ? 'row-danger' : 'row-normal';

	return (
		<>
			<Table
				locale={{
					emptyText: (<span>
						У вас нет задач на выбранную дату
					</span>)
				}}
				size='large'
				pagination={false}
				rowClassName={(record) => chabgeBackground(record)}
				columns={columns}
				loading={{ indicator: <Spin indicator={antIcon} />, spinning: loading }}
				className='time-table-row-select'
				rowSelection={{
					Selected: (elem) => console.log(elem)
				}}
				dataSource={dataSource.map(elem => ({ ...elem, key: elem.id }))}
			/>
		</>
	)
}
