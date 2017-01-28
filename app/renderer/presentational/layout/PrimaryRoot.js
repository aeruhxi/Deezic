import React from 'react';
import Header from './Header';
import Library from './../pages/Library';

const PrimaryRoot = () => {
  return (
    <div className="primary-root">
      <Header title="Library"/>
      <Library />
    </div>
  );
};

export default PrimaryRoot;
