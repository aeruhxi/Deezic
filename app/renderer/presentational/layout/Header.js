import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './../search/SearchBar';
import { setModal } from './../../actions/modal';

let Header = ({ dispatch }) => {
  return (
    <div className="header">
      <div className="header__title">Library</div>
      <SearchBar />
      <i
        className="material-icons settings-icon"
        onClick={() => dispatch(setModal('settings'))}>
        settings
      </i>
    </div>
  );
};

Header = connect()(Header);

export default Header;
