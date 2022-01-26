import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App contains correct text', () => {
  render(<App />);
});
