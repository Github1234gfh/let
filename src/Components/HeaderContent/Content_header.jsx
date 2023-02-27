import { Col, Row, Space } from "antd"
import { Func_content_header } from "./Func_content_header"
import { Title } from "./Title"

export const Content_header = ({ title, search, jwtDecoded, token }) => {
    return (
        <Row align={'middle'} justify={'space-between'}>
            <Col span={4} >
                <Title title={title} />
            </Col>
            <Col span={19}>
                <Func_content_header search={search} jwtDecoded={jwtDecoded} token={token}/>
            </Col>
        </Row>
    )
}