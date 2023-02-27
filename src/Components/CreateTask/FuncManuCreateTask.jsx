import { PercentageOutlined } from "@ant-design/icons";
import { Button, DatePicker, Divider, Input, Select } from "antd";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { _Menu } from "../Menu"

const TaskTyoes = [
    {
        name: 'Годовые',
        key: 'Y',
    },
    {
        name: 'Квартальные',
        key: 'Q',
    },
    {
        name: 'Бюджет',
        key: 'B',
    },
    {
        name: 'Госплан',
        key: 'G',
    }
]

const SelectItem = [
    {
        en: 'month',
        ru: 'Месяц',
        key: 'M'
    },
    {
        en: 'quarter',
        ru: 'Квартал',
        key: 'Q',
    },
    {
        en: 'year',
        ru: 'Год',
        key: 'Y',
    }
];

export const Func_Manu_CreateTask = ({
    setTaskWight,
    setPeriodicity,
    setTaskType,
    setDate,
}) => {

    const ManuItems = [
        <Select
            onChange={(e) => (setPeriodicity(SelectItem[e].key))}
            className="manu-item"
            defaultValue={SelectItem[2].ru}
        >
            {SelectItem.map((elem, index) => { return (<Select.Option key={index}>{elem.ru}</Select.Option>) })}
        </Select>,
        <DatePicker
            className="manu-item"
            defaultValue={dayjs()}
            onChange={(e) => (setDate(`${e.$y}-${e.$M+1}-${e.$D}`))}
        />,
        <Select
            onChange={(e) => (setTaskType(TaskTyoes[e].key))}
            className="manu-item"
            defaultValue={`Цели МВО(${TaskTyoes[0].name})`
            }>
            {TaskTyoes.map((item, index) => (<Select.Option key={index}>Цели МВО({item.name})</Select.Option>))}
        </Select>,
        <span className="change-input-menu">
            <Input
                onChange={(e) => (setTaskWight(e.target.value))}
                type="number" prefix={<PercentageOutlined
                    style={{ color: '#9D9D9D' }} />} maxLength={16}
                defaultValue={1} className="manu-item"
            />
        </span>,
        <Divider />,
        <Button
            disabled
            className="manu-item"
            type="default"
        >
            Утвердить</Button>,
        <Button
            disabled
            className="manu-item"
            type="default"
        >
            Выполнить</Button>,
        <Divider />,
        <Link to={'/'}><Button
            className="manu-item"
            type="primary"
        >
            Портал сотрудника</Button></Link>
    ]

    return (
        <>
            <_Menu ManuItems={ManuItems} />
        </>
    )
}