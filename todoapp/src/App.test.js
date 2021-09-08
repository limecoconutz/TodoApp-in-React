import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the form', () => {
  render(<App />);
  expect(screen.getByPlaceholderText('Your todo text...')).toBeInTheDocument();
  expect(screen.getByRole('button')).toHaveTextContent('Create!');
});
