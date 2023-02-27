import { Col, Layout, Row, Space } from "antd";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CreateTask } from "../pages/CreateTask";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { _Header } from "./Header/Header";
import { ConfigProvider } from 'antd';
import ruRu from 'antd/locale/ru_RU';
import jwtDecode from "jwt-decode";
import { Title } from './HeaderContent/Title';
import { Func_content_header } from './HeaderContent/Func_content_header'

export const _Layout = () => {

    const CheckToken = () => {
        const Token = localStorage.getItem('user_token')
        if (Token) return Token
        return false
    };

    const CheckJwt = () => { if (CheckToken) { return jwtDecode(token) } return false }

    const [token, setToken] = useState(CheckToken);
    const jwtDecoded = CheckJwt();
    const [title, setTitle] = useState('Портал сотрудника');
    const [search, setSearch] = useState(true);

    return (
        <ConfigProvider
            locale={ruRu}
            theme={{
                token: {
                    colorPrimary: '#0157A0',
                },
            }}
        >
            <Layout>
                <header>
                    <_Header token={token} setToken={setToken} />
                </header>
                <Content >
                    <div className="container">
                        <Space
                            direction="vertical"
                            size={40}
                            style={{
                                display: 'flex',
                            }}
                        >
                            <Row align={'middle'} justify={'space-between'}>
                                <Col span={4} >
                                    <Title
                                        title={title}
                                    />
                                </Col>
                                <Col span={19}>
                                    <Func_content_header
                                        search={search}
                                        jwtDecoded={jwtDecoded}
                                        token={token} />
                                </Col>
                            </Row>
                            <Routes>
                                <Route path="/" element={<Main
                                    token={token}
                                    setToken={setToken}
                                    jwtDecoded={jwtDecoded}
                                    setTitle={setTitle}
                                    setSearch={setSearch}
                                />} />
                                <Route path="/login" element={<Login
                                    token={token}
                                    setToken={setToken}
                                />} />
                                <Route path="/create_task" element={<CreateTask
                                    token={token}
                                    setTitle={setTitle}
                                    setSearch={setSearch}
                                    jwtDecoded={jwtDecoded}
                                />} />
                                <Route path="*" element={<Main />} />
                            </Routes>
                        </Space>
                    </div>
                </Content>
            </Layout>
        </ConfigProvider>
    )
}