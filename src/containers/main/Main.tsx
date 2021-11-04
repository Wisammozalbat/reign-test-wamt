import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Tabs from '../../components/tabs/Tabs';
import Favourites from '../favourites/Favourites';
import News from '../news/News';
import { MainContainer } from './MainStyle';

const Main = () => {
  return (
    <MainContainer>
      <Tabs />
      <Switch>
        <Route path="/dashboard" render={() => <News />} />
        <Route path="/favourites" render={() => <Favourites />} />
        <Redirect from="/*" to="/dashboard" />
      </Switch>
    </MainContainer>
  );
};

export default Main;
