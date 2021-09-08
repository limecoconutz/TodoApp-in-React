import { React, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import TodoForm from './components/TodoForm';
import TodosBoard from './components/TodosBoard';

const App = () => {
  const [todos, setTodos] = useState('');

  useEffect(() => {
    const todosFromLocalStorage = localStorage.getItem('todos');
    if (todosFromLocalStorage) {
      setTodos(JSON.parse(todosFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  const addTodo = text => {
    const id = nanoid(6);
    const allTodos = [...todos, { text, id, isDone: false }];
    setTodos(allTodos);
  };

  const toggleDone = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = id => {
    todos.splice(todos.findIndex(todo => todo.id === id), 1);
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <h1 className="text--center heading heading--large">
        Todo List Creator
      </h1>
      <header className="todo-header container">
        <TodoForm addTodo={addTodo} />
      </header>
      <TodosBoard
        todos={todos}
        toggleDone={toggleDone}
        removeTodo={removeTodo} />
    </div>
  );
};

export default App;
