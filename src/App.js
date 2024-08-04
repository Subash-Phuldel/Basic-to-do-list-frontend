// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import TodoList from "./TodoList";
import About from "./Pricing";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <div class="logo">To Do List</div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/todolist">Todo List</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <a href="/get-started" class="get-started">
            Get Started
          </a>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
