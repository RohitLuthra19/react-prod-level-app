/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<App message="dummy-message" />);
    expect(getByTestId('dummy-message')).toBeInTheDocument();
  });
});
