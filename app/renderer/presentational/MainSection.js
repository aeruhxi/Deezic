import React from 'react';
import SideBar from './SideBar';
import PrimaryRoot from './PrimaryRoot';

const MainSection = () => {
  return (
    <main className="main-section">
      <SideBar />
      <PrimaryRoot />
    </main>
  );
};

export default MainSection;
