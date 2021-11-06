import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Posts from './Posts';

describe('<Posts />', () => {
  test('render dropdown', async () => {
    const component = render(<Posts onFavHandler={() => {}} />);
    let itemComponent = await component.findByTestId('dropdown-container');
    await waitFor(() => expect(itemComponent).toBeDefined());
  });

  test('render posts container', async () => {
    const component = render(<Posts onFavHandler={() => {}} />);
    let itemComponent = await component.findByTestId('posts-container');
    await waitFor(() => expect(itemComponent).toBeDefined());
  });
});
