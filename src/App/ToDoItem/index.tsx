import { useEffect } from 'react';
import './index.css'

const { v4: uuidv4 } = require('uuid');

interface Props {
    list: string[];
    setList: (list: string[]) => void
}

export const ToDoItem = ({ list, setList }: Props) => {
    useEffect(() => {
        const savedList = localStorage.getItem('list');
        if (savedList) {
            setList(JSON.parse(savedList));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    const onDelete = (el: string) => {
        const updatedList = list.filter((item) => el !== item);
        setList(updatedList);
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