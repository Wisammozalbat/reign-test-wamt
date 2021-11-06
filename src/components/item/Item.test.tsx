import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Item from './Item';
import { Post } from '../../types/PostType';

const post: Post = {
  id: 'Fri Nov 05 2021 18:45:16 GMT-0400 (hora de Venezuela)',
  author: 'Wisam',
  category: 'reactjs',
  created: 1636152316682,
  favourite: false,
  title: 'Testing in ReactJs',
  url: 'https://google.com',
};

describe('<Item />', () => {
  test('render item', () => {
    const component = render(
      <Item
        innerRef={null}
        post={post}
        onFavHandler={() => console.log('hola')}
      />
    );

    let itemComponent = component.getByText(post.title);
    expect(itemComponent).toBeDefined();
  });

  test('Click the fav button once', () => {
    const mockHandler = jest.fn();

    const component = render(
      <Item innerRef={null} post={post} onFavHandler={mockHandler} />
    );

    const button = component.getByRole('button');
    fireEvent.click(button);
    expect(mockHandler.mock.calls).toHaveLength(1);
  });
});
