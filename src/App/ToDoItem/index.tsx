import { useEffect, useState } from 'react';
import './index.css'

const { v4: uuidv4 } = require('uuid');

interface Props {
    list: string[];
    setList: (list: string[]) => void
}

export const ToDoItem = ({ list, setList }: Props) => {

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    const onDelete = (el: string) => {
        setList(list.filter((item) => el !== item));
    }

    return (
        <ul className='items'>
            {list.map((el) => (
                <div key={uuidv4()} className='item'>
                    <li>{el}</li>
                    <button onClick={() => onDelete(el)}>Delete</button>
                </div>
            ))}
        </ul>
    )
};