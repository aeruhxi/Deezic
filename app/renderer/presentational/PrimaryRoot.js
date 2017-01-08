import React from 'react';
import Header from './Header';
import Categories from './Categories';

const PrimaryRoot = () => {
  return (
    <div className="primary-root">
      <Header title="Library"/>
      <Categories />
    </div>
  );
};

export default PrimaryRoot;
