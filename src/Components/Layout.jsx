import { Layout } from "antd"
import { Route, Routes } from "react-router-dom"
import { Decomp_task } from "../pages/Decomp_task"
import { Login } from "../pages/Login"
import { Main } from "../pages/Main"
import { _Header } from "./Header"

export const _Layout = () => {
    return (
        <>
            <Layout style={{ background: 'none' }}>
                <_Header />
                <Routes>
                    <Route path="/" element={<Main /> }/>
                    <Route path="/login" element={<Login /> }/>
                    <Route path="/decomp_task" element={<Decomp_task /> }/>
                    <Route path="*" element={<Main /> }/>
                </Routes>
            </Layout>
        </>
    )
}