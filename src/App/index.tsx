import React, { useState } from 'react';
import './index.css'
import { ToDoInput } from './ToDoInput';
import { ToDoItem } from './ToDoItem';
import { Header } from './Header';

function App() {
  const storedList = localStorage.getItem('list');
  const initialList = storedList ? JSON.parse(storedList) : [];
  const [list, setList] = useState<string[]>(initialList);

  return (
    <div className="App">
      <Header />
      <ToDoInput list={list} setList={setList} />
      <ToDoItem list={list} setList={setList} />
    </div>
  );
}

export default App;
