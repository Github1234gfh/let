import { Col, Row } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { _LoginContent } from "../Components/Login/Content"

export const Login = ({ token, setToken }) => {
    const Navigate = useNavigate();

    useEffect(() => {
        if (token) Navigate('/')
    }, [])

    return (
        <Row>
            <Col
                lg={{
                    span: 8,
                    offset: 8,
                }}
                sm={{
                    span: 12,
                    offset: 6,
                }}
                xs={
                    {
                        span: 14,
                        offset: 5,
                    }
                }
            >
                {
                    !token ?
                        <_LoginContent token={token} setToken={setToken} />
                        :
                        null
                }
            </Col>
        </Row>
    )
}