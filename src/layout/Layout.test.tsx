import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

describe('<Layout />', () => {
  test('render <Layout />', () => {
    const component = render(
      <Router>
        <Layout />
      </Router>
    );

    let itemComponent = component.getByTestId('layout-container');
    expect(itemComponent).toBeDefined();
  });
});
