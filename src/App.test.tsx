import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('<App />', () => {
  test('render <Layout />', () => {
    const component = render(<App />);

    let itemComponent = component.getByTestId('layout-container');
    expect(itemComponent).toBeDefined();
  });

  test('render <Main />', () => {
    const component = render(<App />);

    let itemComponent = component.getByTestId('main-container');
    expect(itemComponent).toBeDefined();
  });
});
