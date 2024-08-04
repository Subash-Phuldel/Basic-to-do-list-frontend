// src/TodoList.js
import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    fetch("http://127.0.0.1:3000/api/v1/tasks")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && Array.isArray(data.data.tasks)) {
          setTodos(data.data.tasks);
        } else {
          console.error("Unexpected data format:", data);
          setTodos([]);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setTodos([]);
      });
  };

  const refreshTodos = () => {
    fetchTodos();
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo))
    );
  };

  return (
    <div className="todo-list-container">
      <h1>Todo List</h1>
      <AddTodo refreshTodos={refreshTodos} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} updateTodo={updateTodo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
