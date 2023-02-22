import React, { useState } from 'react'
import { Content } from 'antd/es/layout/layout'
import { _Table } from './Table'
import { _Menu } from './Menu'
import { _TableLogic } from './Table-logic'
import dayjs from 'dayjs'
import jwtDecode from 'jwt-decode'

export const _Content = ({ token, setToken }) => {
	const jwtDecoded = jwtDecode(token);

	const [Date, setDate] = useState(dayjs());

	const [dataSource, setDataSource] = useState([]);

	const [loading, setLoading] = useState(true);

	const ChnageLoading = () => setLoading(false);

	const [type, setType] = useState('month');
	const [UddateTask, setUpdateTask] = useState('update_decomp_task');
	const [request, setRequest] = useState(`?year=${dayjs().$y}&month=${dayjs().$M + 1}&periodicity=M`);

	const ChangedataSource = (e) => setDataSource(e);
	return (
		<Content >
			<div className='container-main'>
				<_Menu
					Date={Date}
					setDate={setDate}
					setToken={setToken}
					UddateTask={UddateTask}
					setUpdateTask={setUpdateTask}
					dataSource={dataSource}
					change={ChangedataSource}
					type={type} setType={setType}
					request={request}
					setRequest={setRequest}
					token={token}
				/>
				<_TableLogic
					jwtDecoded={jwtDecoded}
					Date={Date}
					UddateTask={UddateTask}
					setUpdateTask={setUpdateTask}
					request={request}
					type={type}
					token={token}
					dataSource={dataSource}
					change={ChangedataSource}
					loading={loading}
					changeLoading={ChnageLoading} />
			</div>
		</Content>
	)
}
