import { Button, DatePicker, Select, Typography } from "antd"
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


export const _Menu = () => {
	const dateFormat = 'YYYY/MM'
	const SelectItem = ['Месяц', 'Квартал', 'Год']

	return (
		<div className="manu-item">
			<Typography.Text className="title-home-page" >Портал сотрудника</Typography.Text>
			<div className="main-manu">
				<div className="nav-btns">
					<Select className="edit-buttons" style={{ borderEadius: 10 }} defaultValue={SelectItem[0]} >
						{SelectItem.map((elem, index) => { return (<Select.Option sele key={index}>{elem}</Select.Option>) })}
					</Select>
					<DatePicker className="edit-buttons" defaultValue={dayjs(new Date(), dateFormat)} format={dateFormat} picker="month" />
				</div>
				<div className="border"></div>
				<div className="nav-btns">
					<Button className="edit-buttons" type="default">Утвердить все</Button>
					<Button className="edit-buttons" type="default">Выполнить все</Button>
					<Button className="edit-buttons" type="default">Утвердить и выполнить</Button>
				</div>
				<div className="border"></div>
				<div className="nav-btns">
					<Button className="edit-buttons" type="primary" style={{ background: 'linear-gradient(180deg, #283A97 0%, #0157A0 100%)', boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.016)' }}>Создать задачу</Button>
				</div>
			</div>
		</div>
	)
}