import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState(["HTML", "CSS"]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo, index) =>
      index === currentTodo.index ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setCurrentTodo(null);
  };

  const handleEditTodo = (index) => {
    setCurrentTodo({ index, item: todos[index] });
  };

  return (
    <div className="App">
      <AddTodo addTodo={addTodo} currentTodo={currentTodo?.item} updateTodo={updateTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={handleEditTodo} />
    </div>
  );
}

export default App;
