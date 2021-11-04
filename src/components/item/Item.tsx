import React from 'react';
import { ItemContainer } from './ItemStyle';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';

interface ItemI {
  data: { time: string; desc: string };
}

const Item: React.FC<ItemI> = ({ data }) => {
  return (
    <ItemContainer>
      <div className="left">
        <div className="left-top">
          <BiTime className="icon" color={'#fcfcfc;'} />
          <p>{data.time}</p>
        </div>
        <div className="left-bottom">
          <p>{data.desc}</p>
        </div>
      </div>
      <div className="right">
        <button>
          <AiOutlineHeart color={'#ff1212'} />
        </button>
      </div>
    </ItemContainer>
  );
};

export default Item;
