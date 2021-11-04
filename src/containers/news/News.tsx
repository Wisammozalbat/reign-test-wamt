import React from 'react';
import Dropdown from '../../components/dropdown/Dropdown';
import Item from '../../components/item/Item';
import { NewsContainer } from './NewsStyle';

const News = () => {
  const news = [
    {
      time: '3 hours ago by author',
      desc: 'Yes, React is taking over front-end development. The question is why.',
    },
    {
      time: '3 hours ago by author',
      desc: 'Yes, React is taking over front-end development. The question is why.',
    },
    {
      time: '3 hours ago by author',
      desc: 'Yes, React is taking over front-end development. The question is why.',
    },
  ];
  return (
    <>
      <Dropdown
        options={['angular', 'reactjs', 'vuejs']}
        defaultValue={'angular'}
      />
      <NewsContainer>
        {news.map((item, index) => {
          return <Item data={item} key={index} />;
        })}
      </NewsContainer>
    </>
  );
};

export default News;
