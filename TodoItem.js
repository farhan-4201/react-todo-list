import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


function TodoItem({ item, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete();
    }, 500); // Delay to allow the animation to complete
  };

  return (
    <li className={isDeleting ? 'deleting' : ''}>
      {item}
      <button onClick={handleDelete} className="delete-button">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default TodoItem;
