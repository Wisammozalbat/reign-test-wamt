import React from 'react';
import { TabsContainer, Tab } from './TabsStyle';

import { RouteComponentProps, withRouter } from 'react-router-dom';

const Tabs: React.FC<RouteComponentProps> = ({ history }) => {
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [location.pathname]);

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
