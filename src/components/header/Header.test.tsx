import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('<Header />', () => {
  test('render item', () => {
    const component = render(
      <Router>
        <Header />
      </Router>
    );

    let itemComponent = component.getByText('HACKER NEWS');
    expect(itemComponent).toBeDefined();
  });
});
