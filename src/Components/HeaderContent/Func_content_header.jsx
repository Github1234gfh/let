import { SearchOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import Api from '../Api'

export const Func_content_header = ({ search, jwtDecoded, token }) => {

	const [user, setUser] = useState(false);

	const GetUesr = async () => {
		const response = await Api.get(
			`/api/v1/user_info/${jwtDecoded.user_id}/`,
			{ headers: { Authorization: `Bearer ${token}` } },
		)
		console.log(response.data)
		setUser(response.data.User)
	}

	useEffect(() => {
		const getuser = async () => {
			const allTasks = await GetUesr();
			if (allTasks) setUser();
		};
		getuser();
	}, [])

	const Search = async () => {
		const response = await Api.get(
			`/api/v1/subordinates/`,
			{ headers: { Authorization: `Bearer ${token}` } },
		)
		console.log(response.data.data)
	}

	return (
		<>
			<span className="func-content-header">
				<Header>
					<Row justify={'space-between'} align={'middle'}>
						<Col span={8}>
							<Row align={'middle'} justify={'space-between'}>
								<Col span={1}>
									{
										search ? <SearchOutlined className="text" />
											:
											null
									}
								</Col>
								<Col span={17}>
									<Row justify={'space-between'}>
										<p className="text">{user.position}</p>
										<p className="text">{user.fullname}</p>
									</Row>
								</Col>
							</Row>
						</Col>

						<Col >
							<p className="text">100%</p>
						</Col>
					</Row>
				</Header>
			</span>
		</>
	)
}