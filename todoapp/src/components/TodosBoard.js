import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodosBoard = ({ todos, toggleDone, removeTodo }) => {
  if (!todos || todos === []) {
    return <h2 className="title">Write a todo</h2>;
  }
  return (
    <section className="container">
      <div className="container todo__list">
        <h3 className="todos--order1 heading">To Do</h3>
        <h3 className="done--order3 heading">Done</h3>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleDone={toggleDone}
            removeTodo={removeTodo} />
        ))}
      </div>
    </section>
  );
};

TodosBoard.defaultProps = {
  todos: [],
};

TodosBoard.propTypes = {
  todos: PropTypes.oneOfType(
    [PropTypes.string,
      PropTypes.array],
  ),
  toggleDone: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodosBoard;
