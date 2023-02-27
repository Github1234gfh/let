import { Row, Col, message } from 'antd';
import { useState } from 'react';
import { Form_CreateTask } from './FormCreateTask';
import { Func_Manu_CreateTask } from './FuncManuCreateTask';
import Api from '../Api'

export const Conent_Create_Task = ({ token, jwtDecoded }) => {

    const [name, setName] = useState();
    const [perCrit, setPerCrit] = useState();
    const [comment, setComment] = useState();
    const [managerComment, setManagerComment] = useState();
    const [taskWeight, setTaskWight] = useState(1);
    const [periodicity, setPeriodicity] = useState('Y');
    const [taskType, setTaskType] = useState('Y');
    const [date, setDate] = useState('2023-01-01');

    const OnSubmitSuccess = () => {
        CreteTask()
    }

    const data = {
        user: jwtDecoded.user_id,
        name: name,
        performance_criterion: perCrit,
        comment: comment,
        manager_comment: managerComment,
        task_weight: taskWeight,
        periodicity: periodicity,
        task_type: taskType,
        date: date,
    }

    const CreteTask = async () => {
        console.log(periodicity)
        console.log(date)
        console.log(taskType)
        const response = await Api.post(
            '/api/v1/create_task/',
            data,
            {
                headers: { Authorization: `Bearer ${token}` },

            }

        )
        console.log(response)
    }

    return (
        <>
            <Row justify={'space-between'}>
                <Col span={4}>
                    <Func_Manu_CreateTask
                        setTaskWight={setTaskWight}
                        setPeriodicity={setPeriodicity}
                        setTaskType={setTaskType}
                        setDate={setDate}
                    />
                </Col>
                <Col span={19}>
                    <Form_CreateTask
                        setName={setName}
                        setPerCrit={setPerCrit}
                        setComment={setComment}
                        setManagerComment={setManagerComment}
                        OnSubmitSuccess={OnSubmitSuccess}
                    />
                </Col>
            </Row>
        </>
    )
}