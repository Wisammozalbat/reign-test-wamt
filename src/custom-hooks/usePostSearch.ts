import { useEffect, useState } from 'react';
import axiosInstance from '../config/axios';
import { Post } from '../types/PostType';

export default function usePostSearch(query: string, pageNumber: number): any {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setPosts([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const favPosts = JSON.parse(
      window.localStorage.getItem('favposts') || '[]'
    );

    axiosInstance
      .get(`/search_by_date?query=${query}&page=${pageNumber}&hitsPerPage=8`)
      .then((res) => {
        setPosts((prevPosts) => [
          ...prevPosts,
          ...res.data.hits.map((post: any) => {
            let newPost = {
              id: post.created_at_i,
              title: post.story_title,
              author: post.author,
              created: post.created_at,
              url: post.story_url,
              category: query,
              favourite: false,
            };

            const matched = favPosts.filter(
              (favPost: Post) => favPost.id === newPost.id
            );

            if (matched.length > 0) {
              newPost.favourite = true;
            }

            return newPost;
          }),
        ]);
        setHasMore(res.data.hits.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, [query, pageNumber]);

  return { loading, error, posts, hasMore, setPosts };
}
