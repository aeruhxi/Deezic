import React, { Component } from 'react';
import Tab from './../generic/Tab';
import Tabs from './../generic/Tabs';

class Categories extends Component {
  render() {
    return (
      <Tabs
        tabData={[
          { keyID: 1, id: 'page1', title: 'Playlists', active:'true' },
          { keyID: 2, id: 'page2', title: 'Artists' },
          { keyID: 3, id: 'page3', title: 'Albums'}
        ]}
      >
        <Tab tabID={'page1'} active={true}>
          Page1
        </Tab>

        <Tab tabID={'page2'}>
          Page2
        </Tab>

        <Tab tabID={'page3'}>
          Page3
        </Tab>
      </Tabs>
    );
  }
}

export default Categories;
