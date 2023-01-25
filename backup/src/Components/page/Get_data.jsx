import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { _Table } from './Table'

export const Get_data = () => {
	
	const [value, setValue] = useState([])

	useEffect (() => {
		axios
			.get('http://localhost:3001/tasks')
			.then (elem => {
				setValue(elem.data)
			})
	}, [])
	return (
		<_Table value={value}/>
	)
}
