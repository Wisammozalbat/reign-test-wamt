import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Tabs from './Tabs';

describe('<Tabs />', () => {
  let component: RenderResult<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement
  >;

  beforeEach(() => {
    component = render(
      <Router>
        <Tabs />
      </Router>
    );
  });

  test('renders "all" tab', () => {
    let allButton = component.getByText('All');
    expect(allButton).toBeDefined();
  });

  test('render "favs" tab', () => {
    let favsButton = component.getByText('My Faves');
    expect(favsButton).toBeDefined();
  });

  test('render both tabs', () => {
    let tabs = component.container.querySelectorAll('button');
    expect(tabs).toHaveLength(2);
  });

  test('click on "all" tab', () => {
    let tab = component.getByText('All');
    fireEvent.click(tab);
  });

  test('click on "favs" tab', () => {
    let tab = component.getByText('My Faves');
    fireEvent.click(tab);
  });
});
