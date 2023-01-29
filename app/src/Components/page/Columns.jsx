import { Checkbox } from 'antd'

export const columns = [
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
		render: val => <Checkbox  defaultChecked={val}> </Checkbox>,
	},
	{
		title: 'Выполн.',
		dataIndex: 'vipoln',
		key: 'id',
		render: val => <Checkbox  defaultChecked={val}> </Checkbox>
	},
	{
		title: 'Основание',
		dataIndex: 'description',
		key: 'description',
	},
];