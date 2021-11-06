import { useCallback, useEffect, useState } from 'react';
import { Post } from '../types/PostType';
import getFavPosts from '../utils/getFavPosts';
import axios from 'axios';

export default function usePostSearch(
  query: string = 'angular',
  pageNumber: number = 0
): any {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setPosts([]);
  }, [query]);

  const fetchPosts = useCallback(async (query: string, pageNumber: number) => {
    await axios(
      `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${pageNumber}&hitsPerPage=8`
    )
      .then((res) => {
        const favPosts = getFavPosts();
        setPosts((prevPosts: Post[]) => [
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
      .catch((e) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchPosts(query, pageNumber);
  }, [query, pageNumber, fetchPosts]);

  return { loading, error, posts, hasMore, setPosts };
}
