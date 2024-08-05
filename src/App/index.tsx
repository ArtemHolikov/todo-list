import React, { useState } from 'react';
import './index.css'
import { ToDoInput } from './ToDoInput';
import { ToDoItem } from './ToDoItem';
import { Header } from './Header';

function App() {
  const [list, setList] = useState<string[]>([]);

  return (
    <div className="App">
      <Header />
      <ToDoInput list={list} setList={setList} />
      <ToDoItem list={list} setList={setList} />
    </div>
  );
}

export default App;
