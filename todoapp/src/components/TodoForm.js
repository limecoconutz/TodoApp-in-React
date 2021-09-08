import { React, useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!newTodo) return;
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}>
      <input
        className="form__input__text"
        type="text"
        name="text"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
        placeholder="Your todo text..." />
      <button
        className="button button__submit title"
        id="submitButton"
        type="submit">
        Create!
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
