import React from 'react';
import Table from './../../generic/Table';

const Tracks = ({ tracks }) => {
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
      rows={tracks}
      />
  );
};

export default Tracks;

// {id: 101, song: 'Hello', artist: 'Adele', album: 'idk', time: '2:32'},
