import { CloseSquareOutlined, CodepenSquareFilled } from '@ant-design/icons';
import { Checkbox } from 'antd';
import Modal from 'antd/es/modal/Modal';
import { useEffect, useState } from 'react';

import Api from './Api';
import { _Table } from './Table';

export const _TableLogic = ({ dataSource, change }) => {

	const retri = async () => {
		const response = await Api.get('/tasks');
		return response.data
	};

	const AllDelete = () => {
		dataSource.map(async (task) => {
			await Api.delete(`/tasks/${task.id}`);
		})
		change([]);
	};

	const update = async (record, status, elem) => {
		const response = await Api.patch(`/tasks/${record.id}`, elem === 'utv'? {utv: status}:{vipoln: status});
		const { id } = response.data;
		change(dataSource.map((task) => {
			return task.id === id ? { ...response.data } : task
		}));
	};

	const ondelete = async (id) => {
		await Api.delete(`/tasks/${id}`);
		const newTasks = dataSource.filter((task) => {
			return task.id !== id
		});
		change(newTasks);
	};

	useEffect(() => {
		const getAllTasks = async () => {
			const allTasks = await retri();
			if (allTasks) change(allTasks);
		};
		getAllTasks();
	}, []);

	const columns = [
		{
			title: 'Выполнить',
			dataIndex: 'date',
			key: 'date',
		},
		{
			title: 'Задача',
			dataIndex: 'task',
			key: 'task',
		},
		{
			title: 'Тип задачи',
			dataIndex: 'typeofTask',
			key: 'typeofTask',
		},
		{
			title: 'План',
			dataIndex: 'plan',
			kay: 'plan'
		},
		{
			title: 'Утв.',
			dataIndex: 'utv',
			key: 'id',
			render: (value, record) => <Checkbox checked={value} onChange={async (event) => { record.utv = event.target.checked; await update(record, record.utv, 'utv') }} > </Checkbox>,
		},
		{
			title: 'Выполн.',
			dataIndex: 'vipoln',
			key: 'id',
			render: (value, record) => <Checkbox checked={value} onChange={async (event) => { record.vipoln = event.target.checked; await update(record, record.vipoln, 'vipoln') }} > </Checkbox>
		},
		{
			title: 'Основание',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: <CloseSquareOutlined onClick={async () => { AllDelete() }} style={{ color: 'red' }} />,
			render: record => <CloseSquareOutlined onClick={async () => {
				ondelete(record.id)
			}} style={{ color: 'red' }} />
		}
	];

	return (
		<>
			<_Table dataSource={dataSource} columns={columns} />
		</>
	)
}