import { useEffect, useState } from 'react'
import './index.css'
import { getCurrentDay } from './utils/getDay'
import { getMonth } from './utils/getMonth'
import { getTime } from './utils/getTime'

export const Header = () => {
    const [time, setTime] = useState(getTime);

    useEffect(() => {
        setInterval(() => {
            setTime(getTime())
        }, 1000)
    }, [])
    
    return (
        <div className='header'>
            <div className='day'>
                <p>{getCurrentDay()}</p>
                <p>{getMonth()}</p>
            </div>
            <h1 className='title'>TODO-List</h1>
            <div>
                <p className='time'>{time}</p>
            </div>
        </div>
    )
}