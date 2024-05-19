import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add item"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">+</button>
    </form>
  );
}

export default TodoForm;


