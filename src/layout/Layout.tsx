import React from 'react';
import Header from '../components/header/Header';
import { LayoutContainer } from './LayoutStyle';

interface LayoutI {
  children?: any;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <div className="content">{children}</div>
    </LayoutContainer>
  );
};

export default Layout;
