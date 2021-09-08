import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ todo, toggleDone, removeTodo }) => {
  const todoClassNames = t => `todo ${t.isDone ? 'checked--order4' : ''}`;
  const toggleDeleteBtnClassNames = t => `button delete__button ${t.isDone ? '' : 'd-none'}`;
  const toggleDeleteXClassNames = t => `${t.isDone ? 'delete__button--text-center' : ''}`;
  return (
    <button
      type="button"
      className={`${todoClassNames(todo)}`}
      onClick={() => toggleDone(todo.id)}>
      <section className="button check__button">
        <i className="fas fa-check" />
      </section>
      <h4 className="todo__text">{todo.text}</h4>
      <span
        tabIndex={-1}
        role="button"
        className={`${toggleDeleteBtnClassNames(todo)}`}
        onClick={() => removeTodo(todo.id)}
        onKeyDown={() => removeTodo(todo.id)}>
        <h3 className={`heading ${toggleDeleteXClassNames(todo)}`}>X</h3>
      </span>
    </button>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired,
  }).isRequired,
  toggleDone: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
