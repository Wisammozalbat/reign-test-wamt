import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Tabs from '../../components/tabs/Tabs';
import Favourites from '../favourites/Favourites';
import Posts from '../posts/Posts';
import { MainContainer } from './MainStyle';
import { onFavHandler } from '../../utils/onFavHandler';

const Main = () => {
  return (
    <MainContainer data-testid="main-container">
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
