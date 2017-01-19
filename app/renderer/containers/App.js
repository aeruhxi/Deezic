import React, { Component } from 'react';
import MainSection from './../presentational/MainSection';
import PlayerContainer from './PlayerContainer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <MainSection />
        <PlayerContainer />
      </div>
    );
  }
}

export default App;
