import React from 'react';
import { TabsContainer, Tab } from './TabsStyle';

import { RouteComponentProps, withRouter } from 'react-router-dom';

// Changes between 'All' tab and 'My Faves' tab to navigate between the to routes

const Tabs: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <TabsContainer>
      <Tab
        className={
          window.location.pathname.includes('dashboard') ? 'active' : ''
        }
        onClick={() => history.push('/dashboard')}
      >
        All
      </Tab>
      <Tab
        className={
          window.location.pathname.includes('favourites') ? 'active' : ''
        }
        onClick={() => history.push('/favourites')}
      >
        My Faves
      </Tab>
    </TabsContainer>
  );
};

export default withRouter(Tabs);
