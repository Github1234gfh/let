import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const Get_data = () => {
	
	const [value, setValue] = useState([])

	useEffect (() => {
		axios
			.get('http://localhost:3001/tasks')
			.then (elem => {
				setValue(elem.data)
			})
	}, [])

	return value
}
