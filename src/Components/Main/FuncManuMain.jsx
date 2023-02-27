import { Button, DatePicker, Divider, Select } from "antd";
import dayjs from 'dayjs';
import { Link } from "react-router-dom";
import Api from "../Api";
import { _Menu } from "../Menu";

export const Func_Manu_Main = ({ Date, setDate, UddateTask, dataSource, change, type, setType, request, setRequest, token }) => {

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

    const ManuItems = [
        <Select className="manu-item" onChange={async (event) => { setType(SelectItem[event].en); ChangeRequeatDate(SelectItem[event].en, Date) }} defaultValue={SelectItem[0].ru} >
            {SelectItem.map((elem, index) => { return (<Select.Option key={index}>{elem.ru}</Select.Option>) })}
        </Select>,
        <DatePicker className="manu-item" onChange={(e) => { ChangeRequeatDate(type, e); setDate(e) }} defaultValue={dayjs()} picker={type} />,
        <Divider />,
        <Button className="manu-item" onClick={async () => { await UtvAll() }} type="default">Утвердить все</Button>,
        <Button className="manu-item" onClick={async () => { await vipolnAll() }} type="default">Выполнить все</Button>,
        <Button className="manu-item" onClick={async () => { await CompleteAnrdAppendAll() }} type="default">Утвердить и выполнить</Button>,
        <Divider />,
        <Link to={'/create_task'}><Button className="manu-item" type="primary">Создать задачу</Button></Link>
    ]

    return (
        <>
            <_Menu ManuItems={ManuItems}/>
        </>
    )
}