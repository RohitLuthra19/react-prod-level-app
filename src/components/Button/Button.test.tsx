/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('should render successfully', () => {
    const { getByTestId } = render(<Button text="dummy-message" />);
    expect(getByTestId('dummy-message')).toBeInTheDocument();
  });
});
