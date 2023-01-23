import axios from 'axios'
import React,  { useEffect, useState } from 'react'
import '../App.css';


export default function Get_data() {

    const [value, setValue] = useState([])
    const [invalue, setInvalue] = useState('')
    const [isopen, setIsopen] = useState()
		const [ruc, setRuc] = useState()
    const name = 'Шашкова Анастасия Алексеевна'
		const svg = <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8931 0.571289H9.88867C9.82036 0.571289 9.75608 0.604771 9.7159 0.659682L5.91099 5.90433L2.10608 0.659682C2.0659 0.604771 2.00161 0.571289 1.93331 0.571289H0.928846C0.841792 0.571289 0.790899 0.670396 0.841792 0.741379L5.56411 7.25165C5.73554 7.48736 6.08644 7.48736 6.25652 7.25165L10.9788 0.741379C11.0311 0.670396 10.9802 0.571289 10.8931 0.571289Z" fill="black" fillOpacity="0.25"/></svg>
    useEffect(() => {
        axios
            .get('http://localhost:3001/otdels')
            .then(elem => {
                setValue(elem.data)
        })
        
    }, [])
    const feltered = value.filter(otdel => {
        return otdel.name.toLowerCase().includes(invalue.toLowerCase())
    })
    

    return (
        <div style={{display: 'flex'}}>

            <div style={{width: 600, display: 'flex', flexDirection: 'column', gap: 10, margin: '0 auto'}}>
                <div className='search' onBlur={() => {
                            //setIsopen(false)
														//console.log(1)
                        }}>
                    <input 
                        value={invalue}
                        className='input__search'
                        placeholder={'Поиск - отдел'}

                        onClick={event => {
                            setIsopen(true)
                        }}
                        onChange={event => {
                            setInvalue(event.target.value)
                        }}
                    />
                    <ul className='autocmplete'>
                        {
                            isopen
                                ? 
																feltered.map((elem, index) => {
                                    return (
                                        <li 
																				id={`li${index}`}
                                        onClick={event => {
                                            setInvalue(event.target.textContent)
																						setRuc(elem.ruc.name)
                                        }}
                              		          className='autocmplete__item' key={elem.id}>
																					<div className='gffg'>
																							<p>{elem.name}</p>
																							{svg}
																						</div>
																						<div className='gffg'>
																							<p>{ruc}</p>
																							{/*{svg}*/}
																						</div>
                                        </li>
                                    )})
                                : null
                        }
                    </ul>
                </div>
                <p></p>
                {/*<p>подчененные :</p>*/}
                {/*{value.map(elem => {
                    if (elem.ruc.name === name) {
                        return (
                            elem.ruc.sot.map(set => {
                                return (
                                    <p>{set}</p>
                                )
                            })
                        )
                    }
                })}*/}
                {/*{feltered.map(elem => {
                    return (
                        <div style={{padding: '10px', border: 'solid 1px', width: '100%'}}>
                            <p>Id - {elem.id}</p>
                            <h1>{elem.name}</h1>
                            <p>{elem.ruc.name}</p>
                            <div style={{display: 'flex', gap: 10, }}>
                            {elem.ruc.sot.map(set => {
                                return (   
                                    <p>{set}</p>
                                )
                            })}
                            </div>
                        </div>
                    )
                })}*/}
            </div>
        </div>
    )
}
