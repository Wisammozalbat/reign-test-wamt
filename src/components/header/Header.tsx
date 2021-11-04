import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from './HeaderStyle';

const Header: React.FC<any> = () => {
  return (
    <HeaderContainer>
      <Link to="/dashboard">HACKER NEWS</Link>
    </HeaderContainer>
  );
};

export default Header;
