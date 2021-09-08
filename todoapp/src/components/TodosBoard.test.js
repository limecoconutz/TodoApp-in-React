import React from 'react';
import { render } from '@testing-library/react';
import TodosBoard from './TodosBoard';

const todos = [
  {
    id: '1',
    text: 'Bake cake',
    isDone: false,
  },
  {
    id: '2',
    text: 'Eat cake',
    isDone: false,
  },
  {
    id: '3',
    text: 'Bit more cake',
    isDone: true,
  },
];

test('renders the right ammount of todos', () => {
  render(<TodosBoard todos={todos} />);
  const allTodos = document.querySelectorAll('.todo');
  expect(allTodos).toHaveLength(todos.length);
});

test('renders the right ammount of done todos', () => {
  render(<TodosBoard todos={todos} />);
  const allTodos = document.querySelectorAll('.checked--order4');
  expect(allTodos).toHaveLength(1);
});
