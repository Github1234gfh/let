import { Button } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css';
import SearchItem from './SearchItem';

export default function Get_data() {

	const [value, setValue] = useState([])
	useEffect(() => {
		axios
			.get('http://localhost:3001/otdels')
			.then(elem => {
				setValue(elem.data)
			})
	}, [])

	return (
		<div className='main-container'>
			<SearchItem value={value}/>
			<Button className='my-btn-primary' type='primary' >Click</Button>
		</div>
	)
}
