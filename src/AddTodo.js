// src/AddTodo.js
import React, { useState } from "react";
import "./AddTodo.css";

const AddTodo = ({ refreshTodos }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:3000/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((response) => response.json())
      .then(() => {
        // After adding the new todo, call the refreshTodos function to get the updated list
        refreshTodos();
        setTitle("");
        setDescription("");
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="input-title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className="input-description"
      />
      <button type="submit" className="add-task-button">
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
