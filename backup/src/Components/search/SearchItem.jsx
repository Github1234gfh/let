import React, { useState } from 'react'
import Autocmplete from './Autocmplete'

export default function SearchItem({ value }) {

	const [invalue, setInvalue] = useState('')
	const [person, setPerson] = useState('')

	const feltered = value.filter(otdel => {
		const sotChech = []
		const sot = otdel.ruc.sot.map(sot => {
			if (sot.toLowerCase().includes(invalue.toLowerCase())) {
				sotChech.push(true)
				return sot
			}
		})
		if (otdel.name.toLowerCase().includes(invalue.toLowerCase())) {
			return true
		}
		if (otdel.ruc.name.toLowerCase().includes(invalue.toLowerCase())) {
			return true
		}
		if (sotChech.includes(true)) {
			return true
		}
	})
	const onchange = (event) => {
		setInvalue(event)
	}

	return (
		<div className='search'>
			<Autocmplete invalue={invalue} feltered={feltered} onchange={onchange} />
		</div>
	)
}
