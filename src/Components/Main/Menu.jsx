import { Button, DatePicker, Select, Typography } from "antd";
import dayjs from 'dayjs';
import { Link } from "react-router-dom";
import Api from "./Api";

export const _Menu = ({ Date, setDate, UddateTask, dataSource, change, type, setType, request, setRequest, token }) => {

	const ChangeRequeatDate = (types, e) => {
		let Date = ''
		types === 'month' ?
			Date = `?year=${e.$y}&month=${e.$M + 1}&periodicity=M` :
			types === 'quarter' ?
				Date = `?year=${e.$y}&month=${e.$M + 1}&periodicity=Q`
				:
				Date = `?year=${e.$y}&periodicity=Y`
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

	const UtvAll = async () => {
		const copy = Object.assign([], dataSource);
		await dataSource.map(async (task, index) => {
			copy[index].approved = true
			await Api.patch(
				`/api/v1/${UddateTask}/${task.id}/`,
				{ approved: copy[index].approved },
				{ headers: { Authorization: `Bearer ${token}` } }
			)
		})
		change(copy)
	};

	const CompleteAnrdAppendAll = async () => {
		const copy = Object.assign([], dataSource);
		await dataSource.map(async (task, index) => {
			copy[index].completed = true;
			copy[index].approved = true;
			await Api.patch(
				`/api/v1/${UddateTask}/${task.id}/`,
				{
					approved: copy[index].approved,
					completed: copy[index].completed
				},
				{ headers: { Authorization: `Bearer ${token}` } }
			);
		})
		change(copy);
	}

	const vipolnAll = async () => {
		const copy = Object.assign([], dataSource);
		await dataSource.map(async (task, index) => {
			copy[index].completed = true;
			await Api.patch(
				`/api/v1/${UddateTask}/${task.id}/`,
				{ completed: copy[index].completed },
				{ headers: { Authorization: `Bearer ${token}` } }
			);
		})
		change(copy);
	};

	const create = {
		'user': 2,
		'name': 'hfghfg',
		'periodicity': 'Y',
		'task_type': 'Q',
		"date": "2023-01-30",
	}

	// test

	const AddTask = async () => {
		const response = await Api.post('/api/v1/create_task/', create, { headers: { 'Authorization': `Bearer ${token}`, } })
	}

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
					<Button className="edit-buttons" onClick={async () => { await CompleteAnrdAppendAll() }} type="default">Утвердить и выполнить</Button>
				</span>
				<span className="border"></span>
				<span className="nav-elem">
					<Link to={'/decomp_task'}><Button className="btn-primary" type="primary">Создать задачу</Button></Link>
				</span>
			</div>
		</div>
	)
}