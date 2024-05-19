import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, deleteTodo }) {
  return (
    <ol>
      {items.map((item, index) => (
        <TodoItem key={index} item={item} onDelete={() => deleteTodo(index)} />
      ))}
    </ol>
  );
}

export default TodoList;

