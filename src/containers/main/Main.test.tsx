import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';

describe('<Main />', () => {
  test('render item', () => {
    const component = render(
      <Router>
        <Main />
      </Router>
    );

    let itemComponent = component.getByTestId('main-container');
    expect(itemComponent).toBeDefined();
  });
});
