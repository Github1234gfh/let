import { Col, Divider, Row, Space } from "antd";


export const _Menu = ({ ManuItems }) => {

	return (
		<span className="change-manu-items">
			<Row>
				<Col span={23} >

					<Space
						direction="vertical"
						size={30}
						style={{
							display: 'flex',
						}}
					>
						{
							ManuItems.map((item, index) => {

								const check = item.type.displayName

								return (
									<span key={index}>
										{
											check === 'Divider' ?
												item
												:
												<Row >
													<Col span={20} offset={2}>
														{item}
													</Col>
												</Row>
										}
									</span>
								)
							})
						}
					</Space>
				</Col>
				<Col span={1}>
					<Divider type={'vertical'} />
				</Col>
			</Row>
		</span>
	)
}