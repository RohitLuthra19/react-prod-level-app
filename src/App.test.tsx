import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App contains correct text', () => {
  render(<App />);
  const text = screen.getByText('');
  expect(text).toBeInTheDocument();
});
