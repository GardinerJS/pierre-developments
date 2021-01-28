import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders the Home components textContent', () => {
  const expectedText =
    'Under construction. Estimated project completion: Q1 2021.';

  const { getByTestId } = render(<Home />);
  const homeComponent = getByTestId('home-component');

  expect(homeComponent.textContent).toEqual(expectedText);
});
