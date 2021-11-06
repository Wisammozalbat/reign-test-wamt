import { Post } from '../types/PostType';

export const onFavHandler = (data: Post) => {
  // get posts from localstorage
  let favPosts = JSON.parse(window?.localStorage.getItem('favposts') || '[]');

  // check if post is already fav
  if (favPosts.filter((post: Post) => post.id === data.id).length > 0) {
    // it is alreary fav
    const updatesPosts = favPosts.filter((post: Post) => post.id !== data.id);
    // set fav posts to localstorage
    window?.localStorage.setItem('favposts', JSON.stringify(updatesPosts));
  } else {
    // it is not fav yet
    favPosts.push(data);
    window?.localStorage.setItem('favposts', JSON.stringify(favPosts));
  }
};
