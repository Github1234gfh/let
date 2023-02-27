import React, { useState } from 'react';
import { _TableLogic } from './Table-logic';
import dayjs from 'dayjs';
import { Col, Row, Space } from 'antd';
import { Func_Manu_Main } from './FuncManuMain';

export const _Content = ({ token, setToken, jwtDecoded }) => {

	const [Date, setDate] = useState(dayjs());
	const [dataSource, setDataSource] = useState([]);
	const [loading, setLoading] = useState(true);
	const [type, setType] = useState('month');
	const [UddateTask, setUpdateTask] = useState('update_decomp_task');
	const [request, setRequest] = useState(`?year=${dayjs().$y}&month=${dayjs().$M + 1}&periodicity=M`);


	return (
		<>
			<Row justify={'space-between'}>
				<Col span={4}>
					<Func_Manu_Main
						Date={Date}
						setDate={setDate}
						setToken={setToken}
						UddateTask={UddateTask}
						setUpdateTask={setUpdateTask}
						dataSource={dataSource}
						setDataSource={setDataSource}
						type={type} setType={setType}
						request={request}
						setRequest={setRequest}
						token={token}
					/>
				</Col>
				<Col span={19}>
					<_TableLogic
						jwtDecoded={jwtDecoded}
						Date={Date}
						UddateTask={UddateTask}
						setUpdateTask={setUpdateTask}
						request={request}
						type={type}
						token={token}
						dataSource={dataSource}
						setDataSource={setDataSource}
						loading={loading}
						setLoading={setLoading} />
				</Col>
			</Row>
		</>
	)
}
