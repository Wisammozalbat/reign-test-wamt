import React from 'react';
import { TabsContainer, Tab } from './TabsStyle';

const Tabs: React.FC<any> = () => {
  return (
    <TabsContainer>
      <Tab className="active">All</Tab>
      <Tab>My Faves</Tab>
    </TabsContainer>
  );
};

export default Tabs;
