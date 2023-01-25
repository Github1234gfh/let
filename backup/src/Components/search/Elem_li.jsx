import React from 'react'
import Directior from './Directior'

export default function Elem_li({ elem, onchange}) {

	const svg = <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8931 0.571289H9.88867C9.82036 0.571289 9.75608 0.604771 9.7159 0.659682L5.91099 5.90433L2.10608 0.659682C2.0659 0.604771 2.00161 0.571289 1.93331 0.571289H0.928846C0.841792 0.571289 0.790899 0.670396 0.841792 0.741379L5.56411 7.25165C5.73554 7.48736 6.08644 7.48736 6.25652 7.25165L10.9788 0.741379C11.0311 0.670396 10.9802 0.571289 10.8931 0.571289Z" fill="black" fillOpacity="0.25" /></svg>
	return (
		<li
			onClick={event => {
				onchange(event.target.textContent)
			}}
			className='autocmplete__item' key={elem.id}>
			<div className='gffg'>
				<p>{elem.name}</p>
				{svg}
			</div>
			<div className='gffg'>
				<Directior/>
			</div>
		</li>
	)
}
