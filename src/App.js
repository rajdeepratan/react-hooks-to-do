import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button class="btn btn-success" onClick={() => completeTodo(index)}>Complete</button>
        <button class="btn btn-danger" onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="input-field">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Enter the task"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn React Hooks",
      isCompleted: false
    },
    {
      text: "Build a to do application using react hooks",
      isCompleted: false
    },
    {
      text: "Upload it on github",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h2>
            React Hooks To Do Application
          </h2>
        </div>
        <div className="todo-list">
          <TodoForm addTodo={addTodo} />
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
