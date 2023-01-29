import React, { useState } from 'react'
import Elem_li from './Elem_li'

export default function Autocmplete({ feltered, invalue, onchange }) {

	const [isopen, setIsopen] = useState()

	return (
		<>
			<input
				value={invalue}
				className='input__search'
				placeholder={'Поиск - отдел'}
				onClick={event => {
					setIsopen(true)
				}}
				onChange={event => {
					onchange(event.target.value)
				}}
			/>
			<ul className='autocmplete'>
				{
					isopen
						?
						feltered.map((elem, index) => {
							return (
								<Elem_li key={elem.id} elem={elem} onchange={onchange}/>
							)
						})
						: null
				}
			</ul>
		</>
	)
}
