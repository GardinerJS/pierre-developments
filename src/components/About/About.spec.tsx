import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

test('renders the About components textContent', () => {
  const expectedText = 'This is the About page.';

  const { getByTestId } = render(<About />);
  const aboutComponent = getByTestId('about-component');

  expect(aboutComponent.textContent).toEqual(expectedText);
});
