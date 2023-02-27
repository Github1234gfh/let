import { CloseSquareOutlined } from '@ant-design/icons';
import { Checkbox, Modal, message  } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../Api';
import { _Table } from './Table';

export const _TableLogic = (
	{ jwtDecoded, Date, UddateTask, setUpdateTask, type, dataSource, setDataSource, loading, setLoading, token, request }
) => {

	const { confirm } = Modal;
	const [deleteTask, setDeleteTask] = useState('delete_decomp_task');
	const Navigate = useNavigate();
	const [urlToGet, setUrlToGet] = useState(`/api/v1/decomp_tasks/${jwtDecoded.user_id}/${request}`);

	const OnedeleteTask = (record) => {
		confirm({
			title: `Вы уверены, что хотите удалить задачу - ${record.name}?`,
			onOk: async () => {
				await Api.delete(`/api/v1/${deleteTask}/${record.id}/`, {
					headers: { Authorization: `Bearer ${token}` }
				});
				const newTasks = dataSource.filter((task) => {
					return task.id !== record.id;
				});
				setDataSource(newTasks);
			},
			okText: 'Удалить',
			okType: 'danger',
			cancelText: 'Закрыть',
		});
	}

	const retri = async () => {
		const response = await Api.get(
			urlToGet,
			{ headers: { Authorization: `Bearer ${token}` } }
		)
		if (response.data.error) {
			return []
		}
		console.log(response.data.Tasks)
		return response.data.Tasks;
	};

	const AllDelete = () => {
		confirm({
			title: `Вы уверены, что хотите удалить все задачи?`,
			onOk: async () => {
				dataSource.map(async (task) => {
					await Api.delete(`/api/v1/delete_task/${task.id}/`);
				});
				setDataSource([]);
			},
			okText: 'Удалить',
			okType: 'danger',
			cancelText: 'Закрыть',
		});
	};
	const update = async (record, status, elem) => {
		const CheckField = elem === 'approved' ? { approved: status } : { completed: status }
		const response = await Api.patch(
			`/api/v1/${UddateTask}/${record.id}/`,
			CheckField,
			{ headers: { Authorization: `Bearer ${token}` } },
		);
		if (response.data.error) message.warning('У вас нет прав на закрытие целей!')
		console.log(response.data)
		const { id } = response.data.Task;
		setDataSource(dataSource.map((task) => {
			return task.id === id ? { ...response.data.Task } : task;
		}));
	};


	useEffect(() => {
		if (type === 'year') {
			setUrlToGet(`/api/v1/tasks/${jwtDecoded.user_id}/${request}`);
			setUpdateTask('update_task');
			setDeleteTask('delete_task');
		}
		else {
			setUrlToGet(`/api/v1/decomp_tasks/${jwtDecoded.user_id}/${request}`);
			setUpdateTask('update_decomp_task');
			setDeleteTask('delete_decomp_task');
		}
	}, [Date])

	useEffect(() => {
		if (type === 'year') {
			setUrlToGet(`/api/v1/tasks/${jwtDecoded.user_id}/${request}`);
			setUpdateTask('update_task');
			setDeleteTask('delete_task');
		}
		else {
			setUrlToGet(`/api/v1/decomp_tasks/${jwtDecoded.user_id}/${request}`);
			setUpdateTask('update_decomp_task');
			setDeleteTask('delete_decomp_task');
		}
	}, [type]);

	useEffect(() => {
		if (localStorage.getItem('user_token')) {
			const getAllTasks = async () => {
				const allTasks = await retri();
				if (token) setDataSource(allTasks); setLoading(false);
			};
			getAllTasks();
		} else {
			Navigate('/login');
		}
	}, [urlToGet]);

	const columns = [
		{
			title: 'Срок',
			dataIndex: 'date',
			key: 'id',
		},
		{
			title: 'Задача',
			dataIndex: 'name',
			key: 'id',
		},
		{
			title: 'Тип задачи',
			dataIndex: 'task_type',
			key: 'id',
		},
		{
			title: 'План',
			dataIndex: 'task_weight',
			kay: 'id'
		},
		{
			title: 'Утв.',
			dataIndex: 'approved',
			key: 'id',
			render: (value, record) => <Checkbox checked={value} onChange={async (event) => { record.approved = event.target.checked; await update(record, record.approved, 'approved') }} > </Checkbox>,
		},
		{
			title: 'Выполн.',
			dataIndex: 'completed',
			key: 'id',
			render: (value, record) => <Checkbox checked={value} onChange={async (event) => { record.completed = event.target.checked; await update(record, record.completed, 'completed') }} > </Checkbox>
		},
		{
			title: 'Основание',
			dataIndex: 'primary_goal',
			key: 'id',
		},
		{
			title: <CloseSquareOutlined onClick={async () => { AllDelete() }} style={{ color: 'red' }} />,
			render: record => <CloseSquareOutlined onClick={() => (OnedeleteTask(record))} style={{ color: 'red' }} />
		}
	];

	return (
		<>
			{
				localStorage.getItem('user_token') ?
					<_Table dataSource={dataSource} columns={columns} loading={loading} jwtDecoded={jwtDecoded} token={token}/>
					:
					null
			}
		</>
	)
}