import React, {useState} from 'react';
import ToDoForm from './ToDoForm.js';
import ToDoList from './ToDoList.js';
import './App.css';

const App = () => {

  const [items, setItems] = useState([]);

  function handleAdd(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <div>
    <h1>To Do List</h1>
      <ToDoForm onAdd={handleAdd} />
      <ToDoList data={items} />
    </div>
  );
};

export default App;