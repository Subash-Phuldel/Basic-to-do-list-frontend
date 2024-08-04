// src/TodoItem.js
import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, updateTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.completed || false);

  const handleCheckboxChange = () => {
    const updatedStatus = !isChecked;
    setIsChecked(updatedStatus);

    fetch(`http://127.0.0.1:3000/api/v1/tasks/${todo._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: updatedStatus }),
    })
      .then((response) => response.json())
      .then((data) => updateTodo(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="todo-checkbox"
      />
      <div className={`todo-content ${isChecked ? "completed" : ""}`}>
        <span className="todo-title">{todo.title}</span>
        <p className="todo-description">{todo.description}</p>
      </div>
    </li>
  );
};

export default TodoItem;
