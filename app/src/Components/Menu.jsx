import { Button, DatePicker, Select, Typography } from "antd"
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Api from "./Api";


export const _Menu = ({ dataSource, change }) => {
	const dateFormat = 'YYYY/MM'
	const SelectItem = ['Месяц', 'Квартал', 'Год']
	const sleep = ms => new Promise(r => setTimeout(r, ms));

	const UtvAll = () => {
		const copy = Object.assign([], dataSource)
		dataSource.map(async (task, index) => {
			copy[index].utv = true
			await Api.put(`/tasks/${task.id}`, copy[index])
		})
		change(copy)
	}

	const vipolnAll = () => {
		const copy = Object.assign([], dataSource)
		dataSource.map(async (task, index) => {
			copy[index].vipoln = true
			await Api.put(`/tasks/${task.id}`, copy[index])
		})
		change(copy)
	}

	return (
		<div className="manu-item">
			<span className="my-title"><Typography.Text >Портал сотрудника</Typography.Text></span>
			<div className="main-manu">
				<span className="nav-elem">
					<Select style={{ width: '100%'}} defaultValue={SelectItem[0]} >
						{SelectItem.map((elem, index) => { return (<Select.Option key={index}>{elem}</Select.Option>) })}
					</Select>
				</span>
				<span className="nav-elem">
					<DatePicker defaultValue={dayjs(new Date(), dateFormat)} format={dateFormat} picker="month" />
				</span>
				<span className="border"></span>
				<span className="nav-elem">
					<Button className="edit-buttons" onClick={async () => { await UtvAll() }} type="default">Утвердить все</Button>
				</span>
				<span className="nav-elem">
					<Button className="edit-buttons" onClick={async () => { await vipolnAll() }} type="default">Выполнить все</Button>
				</span>
				<span className="nav-elem">
					<Button className="edit-buttons" onClick={async () => { await UtvAll(); await vipolnAll() }} type="default">Утвердить и выполнить</Button>
				</span>
				<span className="border"></span>
				<span className="nav-elem">
					<Button className="btn-primary" type="primary">Создать задачу</Button>
				</span>
			</div>
		</div>
	)
}