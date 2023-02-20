import { Button, DatePicker, Select, Typography } from "antd";
import dayjs from 'dayjs';
import { useState } from "react";
import { Link } from "react-router-dom";
import Api from "./Api";

export const _Menu = ({ setToken, dataSource, change, type, setType, request, setRequest, token }) => {

	const [Date, setDate] = useState(dayjs());

	const ChangeRequeatDate = (types, e) => {
		let Date = ''
		types === 'month' ?
			Date = `${e.$y}-${e.$M}` :
			types === 'quarter' ?
				Date = `${e.$y}-Q${Math.floor((e.$M + 3) / 3)}`
				:
				Date = `${e.$y}`
		setRequest(Date);
	}

	const SelectItem = [
		{
			en: 'month',
			ru: 'Месяц',
		},
		{
			en: 'quarter',
			ru: 'Квартал',
		},
		{
			en: 'year',
			ru: 'Год',
		}
	];

	const UtvAll = () => {
		const copy = Object.assign([], dataSource);
		dataSource.map(async (task, index) => {
			copy[index].approved = true
			await Api.patch(
				`/api/v1/update_task/${task.id}/`,
				{ approved: copy[index].approved },
				{ headers: { Authorization: `Bearer ${token}` } }
			)
		})
		change(copy)
	};

	const vipolnAll = () => {
		const copy = Object.assign([], dataSource);
		dataSource.map(async (task, index) => {
			copy[index].completed = true;
			await Api.patch(
				`/api/v1/update_task/${task.id}/`,
				{ completed: copy[index].completed },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
		})
		change(copy);
	};

	const headers = {
		"fullname": "test",
		"password": "admin",
	}

	const create = {
		'user': 2,
		'name': 'hfghfg',
		'periodicity': 'Y',
		'task_type': 'Q',
		"date": "2023-01-30",
	}

	// test

	const Login = async () => {
		const response = await Api.post('/api/v1/token/', headers);
		// console.log(response.data)
		localStorage.setItem('user_token', response.data.access);
		// localStorage.setItem('user_id', response.data.data.user_id);
		// setToken(response.data.data.user_token)

	}

	const AddTask = async () => {
		const response = await Api.post('/api/v1/create_task/', create, { headers: { 'Authorization': `Bearer ${token}`, } })
	}

	// console.log(`type=${type}/${request}`)
	return (
		<div className="manu-item">
			<span className="my-title"><Typography.Text >Портал сотрудника</Typography.Text></span>
			<div className="main-manu">
				<span className="nav-elem">
					<Select onChange={async (event) => { setType(SelectItem[event].en); ChangeRequeatDate(SelectItem[event].en, Date) }} style={{ width: '100%' }} defaultValue={SelectItem[0].ru} >
						{SelectItem.map((elem, index) => { return (<Select.Option key={index}>{elem.ru}</Select.Option>) })}
					</Select>
				</span>
				<span className="nav-elem">
					<DatePicker onChange={(e) => { ChangeRequeatDate(type, e); setDate(e) }} defaultValue={dayjs()} picker={type} />
				</span>
				<span className="border"></span>
				<span className="nav-elem">
					<Button className="edit-buttons" onClick={async () => { await UtvAll() }} type="default">Утвердить все</Button>
				</span>
				<span className="nav-elem">
					<Button className="edit-buttons" onClick={async () => { await vipolnAll() }} type="default">Выполнить все</Button>
				</span>
				<span className="nav-elem">
					<Button className="edit-buttons" onClick={async () => { await UtvAll(); vipolnAll() }} type="default">Утвердить и выполнить</Button>
				</span>
				<span className="border"></span>
				<span className="nav-elem">
					<Link to={'/decomp_task'}><Button className="btn-primary" type="primary">Создать задачу</Button></Link>
				</span>
				<Button type="primary" onClick={() => Login()}>Login</Button>
				<Button type="primary" onClick={() => AddTask()}>Add Task</Button>
			</div>
		</div>
	)
}