import React, { useState } from "react";
import './App.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


function App() {
  const [items, setItems] = useState([]);

  const addTodo = (text) => {
    setItems((oldItems) => [...oldItems, text]);
  };

  const deleteTodo = (index) => {
    setItems((oldItems) => oldItems.filter((_, i) => i !== index));
  };

  return (
    <div className="main">
      <div className='center'>
        <br />
        <h1>ToDo List</h1>
        <br />
        <TodoForm addTodo={addTodo} />
        <TodoList items={items} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;

