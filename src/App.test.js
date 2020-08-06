import React from 'react';
import { render } from '@testing-library/react';
import AirportsChooser from './AirportsChooser';

test('renders learn react link', () => {
  const { getByText } = render(<AirportsChooser />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
