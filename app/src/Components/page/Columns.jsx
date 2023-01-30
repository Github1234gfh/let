import { CloseSquareOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd'
import Modal from 'antd/es/modal/Modal'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Api from './Api';


export const Columns = () => {
	const [dataSource, setDataSource] = useState([])

	const retri = async () => {
		const response = await Api.get('/tasks')
		return response.data
	}

	
	
	const update = async (record) => {
		const response = await Api.put(`/tasks/${record.id}`, record)
		const { id } = response.data
	}

	const ondelete = async (id) => {
		await Api.delete(`/tasks/${id}`)
		const newTasks = dataSource.filter((task) => {
			return task.id !== id
		})
		setDataSource(newTasks)
		console.log('--------------')
	}

	useEffect(() => {
		const getAllTasks = async () => {
			const allTasks = await retri()
			if (allTasks) setDataSource(allTasks)
		}
		getAllTasks()

	}, [])

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
			render: (val, record) => <Checkbox onChange={async (event) => { record.utv = event.target.checked; update(record) }} defaultChecked={val}> </Checkbox>,
		},
		{
			title: 'Выполн.',
			dataIndex: 'vipoln',
			key: 'id',
			render: (val, record) => <Checkbox onChange={async (event) => { record.vipoln = event.target.checked; update(record) }} defaultChecked={val}> </Checkbox>
		},
		{
			title: 'Основание',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: <CloseSquareOutlined style={{ color: '#0157A0' }} />,
			render: record => <CloseSquareOutlined onClick={async () => {
				ondelete(record.id)

			}} style={{ color: '#0157A0' }} />
		}
	];

	return [columns, dataSource]
}
