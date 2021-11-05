import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/dropdown/Dropdown';
import Item from '../../components/item/Item';
import { FavouritesContainer } from './FavouritesStyle';
import { Post } from '../../types/PostType';

interface FavouritesI {
  onFavHandler: (data: Post) => void;
}

const Favourites: React.FC<FavouritesI> = ({ onFavHandler }) => {
  const [favPosts, setFavPosts] = useState<Post[]>([]);
  const [actualCategory, setActualCategory] = useState<string>('angular');

  const getFavPosts = (category: string) => {
    const catPosts = JSON.parse(
      window?.localStorage.getItem('favposts') || '[]'
    ).filter((post: Post) => post.category === category);
    setFavPosts(catPosts);
  };

  useEffect(() => {
    getFavPosts(actualCategory);
  }, [actualCategory]);

  const onCategoryChange = (category: string) => {
    setActualCategory(category);
  };

  const onUnfav = (post: Post) => {
    let prevPosts: Post[] = [...favPosts];
    let newPosts = prevPosts.filter(
      (prevPost: Post) => prevPost.id !== post.id
    );
    setFavPosts(newPosts);

    onFavHandler(post);
  };

  return (
    <>
      <Dropdown
        options={['angular', 'reactjs', 'vuejs']}
        defaultValue={'angular'}
        onChange={onCategoryChange}
      />
      <FavouritesContainer>
        {favPosts.length ? (
          favPosts.map((post) => {
            return <Item post={post} key={post.id} onFavHandler={onUnfav} />;
          })
        ) : (
          <p className="no-data">
            There are no Favourites for the category{' '}
            <span>{actualCategory}</span>
          </p>
        )}
      </FavouritesContainer>
    </>
  );
};

export default Favourites;
