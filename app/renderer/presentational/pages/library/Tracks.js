import React, { Component } from 'react';
import Table from './../../generic/Table';

class Tracks extends Component {

  render() {
    return (
      <Table
        indexed
        indexColumnName='SN'
        className='track-table'
        headers={[
          {name: 'Song'},
          {name: 'Artist'},
          {name: 'Album'},
          {name: 'Time'},
        ]}
        rows={this.props.tracks}
        />
    );
  }
}

export default Tracks;
