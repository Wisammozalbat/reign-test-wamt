import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Tabs from '../../components/tabs/Tabs';
import Favourites from '../favourites/Favourites';
import Posts from '../posts/Posts';
import { MainContainer } from './MainStyle';
import { Post } from '../../types/PostType';

const Main = () => {
  const onFavHandler = (data: Post) => {
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

  return (
    <MainContainer>
      <Tabs />
      <Switch>
        <Route
          path="/dashboard"
          render={() => <Posts onFavHandler={onFavHandler} />}
        />
        <Route
          path="/favourites"
          render={() => <Favourites onFavHandler={onFavHandler} />}
        />
        <Redirect from="/*" to="/dashboard" />
      </Switch>
    </MainContainer>
  );
};

export default Main;
