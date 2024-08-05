import { useEffect, useState } from 'react'
import './index.css'

interface Props {
    list: string[];
    setList: (list: string[]) => void
}

export const ToDoInput = ({ list, setList }: Props) => {
    const [item, setItem] = useState<string>('');

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    const onSubmit = () => {
        if (list.includes(item)) {
            setItem('');
            return;
        } 
        setList([ ...list, item ]);
        setItem('');
    }
    
    return (
        <div className="search-block">
            <input 
                className="search-block__input" 
                type='text' 
                value={item} 
                onChange={(e) => setItem(e.target.value)} 
                placeholder="Task to do"
            />
            <button 
                className="search-block__button" 
                onClick={onSubmit} 
                disabled={!item}>
                    Add
            </button>
        </div>
    )
}