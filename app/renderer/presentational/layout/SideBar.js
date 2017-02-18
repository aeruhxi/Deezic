import React from 'react'
import List from './../generic/List'
import ListItem from './../generic/ListItem'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <h3 className='sidebar__title'>
        Iduns
      </h3>
      <List
        rootClass='sidebar__nav-list'>
        <ListItem primaryIcon='library_music'>Library</ListItem>
        <ListItem primaryIcon='favorite'>Favorites</ListItem>
        <ListItem primaryIcon='queue'>Queue</ListItem>
        <ListItem primaryIcon='playlist_play'>Playlists</ListItem>
      </List>
    </div>
  )
}

export default SideBar
