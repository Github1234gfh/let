import { Button, Col, Form, Input, Row, message } from "antd"


export const Form_CreateTask = (
    {
        OnSubmitSuccess,
        setName,
        setPerCrit,
        setComment,
        setManagerComment,
    }
) => {

    const Btns = [
        <Button htmlType="submit" type="default">Декомпозировать</Button>,
        <Button htmlType="submit" type="default">Сохранить</Button>,
        <Button htmlType="submit" type="primary">Сохранить и закрыть</Button>
    ]

    return (
        <span className="change-form-createtask">
            <Form
                onFinish={(e) => (OnSubmitSuccess(e))}
                layout="vertical"            >
                <Form.Item
                    name={'NameTask'}
                    rules={[
                        {
                            required: true,
                            message: 'Это поле обязательно для заполнения!'

                        }
                    ]} label="Наименование задачи:"
                    onChange={(e) => (setName(e.target.value))}
                >
                    <Input.TextArea />
                </Form.Item >
                <Form.Item
                    label="Критерии выполнения:"
                    name={'Execution_Criteria'}
                    onChange={(e) => (setPerCrit(e.target.value))}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    label="Комментарий (Отчет):"
                    name={'Comment'}
                    onChange={(e) => (setComment(e.target.value))}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    label="Комментарий ответственного за закрытие цели:"
                    name={'Comment_responsible'}
                    onChange={(e) => (setManagerComment(e.target.value))}
                >
                    <Input.TextArea />
                </Form.Item>
                <Form.Item>
                    <Row justify={'end'} gutter={25}>
                        {
                            Btns.map((item, index) => (<Col key={index} span={4}>{item}</Col>))
                        }
                    </Row>
                </Form.Item>
            </Form>
        </span>
    )
}