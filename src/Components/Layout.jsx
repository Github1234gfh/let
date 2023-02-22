import { Layout } from "antd";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Decomp_task } from "../pages/Decomp_task";
import { Login } from "../pages/Login";
import { Main } from "../pages/Main";
import { _Header } from "./Header";

export const _Layout = () => {

    const CheckToken = () => {
		const Token = localStorage.getItem('user_token')
		if (Token) return Token
		return false
	}

	const [token, setToken] = useState(CheckToken);
 
    return (
        <>
            <Layout style={{ background: 'none' }}>
                <_Header token={token} setToken={setToken}/>
                <Routes>
                    <Route path="/" element={<Main token={token} setToken={setToken}/> }/>
                    <Route path="/login" element={<Login token={token} setToken={setToken}/> }/>
                    <Route path="/decomp_task" element={<Decomp_task /> }/>
                    <Route path="*" element={<Main /> }/>
                </Routes>
            </Layout>
        </>
    )
}