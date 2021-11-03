import React from 'react';
import Header from '../components/header/Header';

interface LayoutI {
  children?: any;
}

const Layout: React.FC<LayoutI> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
