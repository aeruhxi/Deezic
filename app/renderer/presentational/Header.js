import React from 'react';
import SearchBar from './SearchBar';

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header__title">{ title }</div>
      <SearchBar />
    </div>
  );
};

export default Header;
