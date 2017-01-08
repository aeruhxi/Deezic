import React, { Component } from 'react';
import SideBar from './../presentational/SideBar';
import PrimaryRoot from './../presentational/PrimaryRoot';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SideBar />
        <PrimaryRoot />
      </div>
    );
  }
}

export default App;
