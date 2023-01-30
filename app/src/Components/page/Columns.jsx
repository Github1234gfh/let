import { CloseSquareOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd'
import Modal from 'antd/es/modal/Modal'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Api from './Api';


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
		render: val => <Checkbox defaultChecked={val}> </Checkbox>,
	},
	{
		title: 'Выполн.',
		dataIndex: 'vipoln',
		key: 'id',
		render: val => <Checkbox defaultChecked={val}> </Checkbox>
	},
	{
		title: 'Основание',
		dataIndex: 'description',
		key: 'description',
	},
	{
		title: <CloseSquareOutlined style={{ color: 'red' }} />,
		render: record => <CloseSquareOutlined onClick={async () => {

			// await Api.delete(`/tasks/${record.id}`)
			Modal.confirm({
				title:"Basic Modal" 
			})
			// return (
			// 	<>
			// 		<Modal title="Basic Modal" >
			// 			<p>Some contents...</p>
			// 			<p>Some contents...</p>
			// 			<p>Some contents...</p>
			// 		</Modal>
			// 	</>
			// )
		}} style={{ color: 'red' }} />
	}
];