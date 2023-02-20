import { CloseSquareOutlined } from '@ant-design/icons';
import { Checkbox, Modal } from 'antd';
import { useEffect } from 'react';


import Api from './Api';
import { _Table } from './Table';

export const _TableLogic = ({ dataSource, change, loading, changeLoading, token }) => {

	const { confirm } = Modal;

	const OnedeleteTask = (record) => {
		confirm({
			title: `Вы уверены, что хотите удалить задачу - ${record.name}?`,
			onOk: async () => {
				await Api.delete(`/api/v1/delete_task/${record.id}/`, {
					headers: { Authorization: `Bearer ${token}` }
				});
				const newTasks = dataSource.filter((task) => {
					return task.id !== record.id;
				});
				change(newTasks);
			},
			okText: 'Удалить',
			okType: 'danger',
			cancelText: 'Закрыть',
		});
	}

	const retri = async () => {
		const response = await Api.get(
			'/api/v1/tasks/2/',
			{ headers: { Authorization: `Bearer ${token}` } }
			
		)

		// console.log(response)

		return response.data.Tasks;
	};

	const AllDelete = () => {
		confirm({
			title: `Вы уверены, что хотите удалить все задачи?`,
			onOk: async () => {
				dataSource.map(async (task) => {
					await Api.delete(`/api/v1/delete_task/${task.id}/`);
				});
				change([]);
			},
			okText: 'Удалить',
			okType: 'danger',
			cancelText: 'Закрыть',
		});
	};
	if (token) retri()
	const update = async (record, status, elem) => {
		const CheckField = elem === 'approved' ? { approved: status } : { completed: status }
		const response = await Api.patch(
			`/api/v1/update_task/${record.id}/`,
			CheckField,
			{ headers: { Authorization: `Bearer ${token}`} }, 
			);
		console.log(response.data)
		const { id } = response.data.Task;
		change(dataSource.map((task) => {
			return task.id === id ? { ...response.data.Task } : task;
		}));
	};

	useEffect(() => {
		const getAllTasks = async () => {
			const allTasks = await retri();
			if (token) change(allTasks); changeLoading();
		};
		getAllTasks();
	}, []);

	const columns = [
		{
			title: 'Выполнить',
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
			dataIndex: 'periodicity',
			key: 'id',
		},
		{
			title: <CloseSquareOutlined onClick={async () => { AllDelete() }} style={{ color: 'red' }} />,
			render: record => <CloseSquareOutlined onClick={() => (OnedeleteTask(record))} style={{ color: 'red' }} />
		}
	];

	return (
		<>
			<_Table dataSource={dataSource} columns={columns} loading={loading} />
		</>
	)
}