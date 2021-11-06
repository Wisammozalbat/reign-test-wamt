import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  test('render value', () => {
    const component = render(
      <Dropdown
        options={['angular', 'reactjs', 'vuejs']}
        defaultValue="angular"
        onChange={() => {}}
      />
    );

    let itemComponent = component.container.querySelector('.value-selected');
    expect(itemComponent).toBeDefined();
  });

  test('render options box', () => {
    const component = render(
      <Dropdown
        options={['angular', 'reactjs', 'vuejs']}
        defaultValue="angular"
        onChange={() => {}}
      />
    );

    let itemComponent = component.container.querySelector('.dropdown-options');
    expect(itemComponent).toBeDefined();
  });

  test('render the 3 options', () => {
    const component = render(
      <Dropdown
        options={['angular', 'reactjs', 'vuejs']}
        defaultValue="angular"
        onChange={() => {}}
      />
    );

    let itemComponent =
      component.container.querySelectorAll('.dropdown-option');
    expect(itemComponent).toHaveLength(3);
  });

  test('click on reactjs option', () => {
    const component = render(
      <Dropdown
        options={['angular', 'reactjs', 'vuejs']}
        defaultValue="angular"
        onChange={() => {}}
      />
    );

    let itemComponent = component.getByText('reactjs');
    fireEvent.click(itemComponent);
  });
});
