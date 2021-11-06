import React from 'react';
import { ItemContainer } from './ItemStyle';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { Post } from '../../types/PostType';
import moment from 'moment';

interface ItemI {
  innerRef?: React.Ref<HTMLInputElement>;
  post: Post;
  onFavHandler: (data: Post) => void;
}

// Item (Post) component.
// the ref is optional because it is only assigned to the last actual item
const Item: React.FC<ItemI> = ({ innerRef, post, onFavHandler }) => {
  return (
    <ItemContainer ref={innerRef}>
      <a href={post.url} target="_blank" rel="noreferrer" className="left">
        <div className="left-top">
          <BiTime className="icon" color={'#c0c0c0'} />
          <p>
            {moment(post.created).fromNow()} by {post.author}
          </p>
        </div>
        <div className="left-bottom">
          <p>{post.title}</p>
        </div>
      </a>
      <div className="right">
        <button onClick={() => onFavHandler(post)}>
          {post.favourite ? (
            <AiFillHeart color={'#ff1212'} />
          ) : (
            <AiOutlineHeart color={'#ff1212'} />
          )}
        </button>
      </div>
    </ItemContainer>
  );
};

export default Item;
