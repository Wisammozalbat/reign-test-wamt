import React, { useState, useRef, useCallback } from 'react';
import Dropdown from '../../components/dropdown/Dropdown';
import Item from '../../components/item/Item';
import { PostsContainer } from './PostsStyle';
import { Post } from '../../types/PostType';
import Loader from '../../components/loader/Loader';
import usePostSearch from '../../custom-hooks/usePostSearch';

interface PostsI {
  onFavHandler: (data: Post) => void;
}

const Posts: React.FC<PostsI> = ({ onFavHandler }) => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [query, setQuery] = useState<string>('angular');

  const { posts, setPosts, loading, hasMore } = usePostSearch(
    query,
    pageNumber
  );

  const observer = useRef<any>();
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const onCategoryChange = (category: string) => {
    setQuery(category);
    setPageNumber(0);
  };

  const onToggleFavHandler = (post: Post) => {
    const postsCopy = [
      ...posts.map((oldPost: Post) => {
        if (oldPost.id === post.id)
          return { ...oldPost, favourite: !oldPost.favourite };
        return oldPost;
      }),
    ];
    setPosts(postsCopy);
    onFavHandler({ ...post, favourite: true });
  };

  return (
    <React.Fragment>
      <Dropdown
        options={['angular', 'reactjs', 'vuejs']}
        defaultValue={'angular'}
        onChange={onCategoryChange}
      />
      <PostsContainer data-testid="posts-container">
        {loading ? (
          <Loader />
        ) : posts.length > 0 ? (
          <>
            {posts?.map((post: Post, index: number) => {
              if (posts.length === index + 1)
                return (
                  <Item
                    innerRef={lastPostElementRef}
                    post={post}
                    key={index}
                    onFavHandler={onToggleFavHandler}
                  />
                );
              return (
                <Item
                  post={post}
                  key={index}
                  onFavHandler={onToggleFavHandler}
                />
              );
            })}
          </>
        ) : (
          <p className="no-data">There are no posts available at the moment</p>
        )}
      </PostsContainer>
    </React.Fragment>
  );
};

export default Posts;
