import React, { useEffect, useState } from 'react'
import { Spin, Table } from 'antd'
import { Row, Col, } from 'antd'
import { getDate } from './GetDate'
import { Header } from 'antd/es/layout/layout'
import { SearchOutlined, LoadingOutlined } from '@ant-design/icons';
import Api from './Api'


export const _Table = ({ dataSource, columns, loading, jwtDecoded, token }) => {

	const [user, setUser] = useState(false);

	const antIcon = (
		<LoadingOutlined
			style={{
				fontSize: 24,
			}}
			spin
		/>
	);

	const GetUesr = async () => {
		const response = await Api.get(
			`/api/v1/user_info/${jwtDecoded.user_id}/`,
			{ headers: { Authorization: `Bearer ${token}` } },
		)
		setUser(response.data)
	}

	useEffect(() => {
		const getuser = async () => {
			const allTasks = await GetUesr();
			if (allTasks) setUser();
		};
		getuser();
	}, [])

	const Search = async () => {
		const response = await Api.get(
			`/api/v1/subordinates/`,
			{ headers: { Authorization: `Bearer ${token}` } },
		)
		console.log(response.data.data)
	}

	const chabgeBackground = record => record.approved && record.completed ? 'row-sucxess' : getDate(record.date) ? 'row-danger' : 'row-normal';

	return (
		<span className='my-row'>
			<Row >
				<Col xs={24} md={{ span: 24 }}>
					<Header className='header-table'>
						<span className='table-header-inner'>
							<span className='search'>
								<SearchOutlined onClick={Search} style={{ cursor: 'pointer' }} />
							</span>
							{
								user ?
									<p>{user.User.fullname}</p>
									: null
							}
							<p className='percents'>100%</p>
						</span>
					</Header>
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
				</Col>
			</Row>
		</span>
	)
}
