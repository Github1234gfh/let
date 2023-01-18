import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../App.css';


export default function Get_data() {

    const [value, setValue] = useState([])
    const [invalue, setInvalue] = useState('')
    const [isopen, setIsopen] = useState(false)
    const name = 'Шашкова Анастасия Алексеевна'

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
                <div className='search'>
                    <input 
                        value={invalue}
                        className='input__search'
                        placeholder={'Поиск - отдел'}
                        onBlur={() => {
                            setIsopen(false)
                        }}
                        onClick={event => {
                            setIsopen(true)
                        }}
                        onChange={event => {
                            setInvalue(event.target.value)
                            setIsopen(!isopen)
                        }}
                    />
                    <ul className='autocmplete'>
                        {
                            isopen
                                ? feltered.map(elem => {
                                    return (
                                        <li 
                                        onClick={event => {
                                            setInvalue(event.target.textContent)
                                        }}
                                        className='autocmplete__item' key={elem.id}>
                                            {elem.name}
                                            <div className='border'></div>
                                        </li>
                                    )})
                                : null
                        }
                    </ul>
                </div>
                <p></p>
                {/* <p>подчененные :</p> */}
                {/* {value.map(elem => {
                    if (elem.ruc.name === name) {
                        return (
                            elem.ruc.sot.map(set => {
                                return (
                                    <p>{set}</p>
                                )
                            })
                        )
                    }
                })} */}
                {/* {value.map(elem => {
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
                })} */}
            </div>
        </div>
    )
}
