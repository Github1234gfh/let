import React, { useState } from 'react'
import { Content } from 'antd/es/layout/layout'
import { _Table } from './Table'
import { _Menu } from './Menu'
import { _TableLogic } from './Table-logic'
import dayjs from 'dayjs'

export const _Content = () => {

	const CheckToken = () => {
		const Token = localStorage.getItem('user_token')
		if (Token) return Token
		return false
	}

	const [dataSource, setDataSource] = useState([]);

	const [loading, setLoading] = useState(true);

	const [token, setToken] = useState(CheckToken);

	const ChnageLoading = () => setLoading(false);

	const [type, setType] = useState('month');

	const [request, setRequest] = useState(`${dayjs().$y}-${dayjs().$M}`);

	const ChangedataSource = (e) => setDataSource(e);
	return (
		<Content >
			<div className='container-main'>
				<_Menu
					setToken={setToken}
					dataSource={dataSource}
					change={ChangedataSource}
					type={type} setType={setType}
					request={request}
					setRequest={setRequest}
					token={token}
				/>
				<_TableLogic
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
