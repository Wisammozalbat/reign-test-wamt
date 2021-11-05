import React from 'react';
import { ItemContainer } from './ItemStyle';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { Post } from '../../types/PostType';

interface ItemI {
  innerRef?: React.Ref<HTMLInputElement>;
  post: Post;
  onFavHandler: (data: Post) => void;
}

const Item: React.FC<ItemI> = ({ innerRef, post, onFavHandler }) => {
  const newDate = new Date();
  const oldDate = new Date(post.created);
  const timeDiff = Math.floor(
    Math.abs(newDate.getTime() - oldDate.getTime()) / 3600000
  );

  return (
    <ItemContainer ref={innerRef}>
      <div className="left">
        <div className="left-top">
          <BiTime className="icon" color={'#c0c0c0'} />
          <p>
            {timeDiff === 0
              ? `less than an hour`
              : timeDiff === 1
              ? `${timeDiff} hour`
              : `${timeDiff} hours`}{' '}
            ago by {post.author}
          </p>
        </div>
        <div className="left-bottom">
          <a href={post.url} target="_blank" rel="noreferrer">
            {post.title}
          </a>
        </div>
      </div>
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
