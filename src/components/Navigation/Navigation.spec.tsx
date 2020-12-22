import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

test('renders the Navigation components textContent', () => {
  const expectedText = 'Pierre Developments';

  const { getByTestId } = render(<Navigation />);
  const navigationComponent = getByTestId('navigation-component');

  expect(navigationComponent.textContent).toEqual(expectedText);
});
