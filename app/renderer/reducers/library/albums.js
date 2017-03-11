import { ADD_LIBRARY_TRACKS } from './../../actions/actionTypes'
import _ from 'lodash/core'

const albums = (state = [], action) => {
  switch (action.type) {
    case ADD_LIBRARY_TRACKS:
      return [
        ...state,
        ...action.tracks
          .map(track => ({artist: track.artist, album: track.album}))
          // Remove duplicates
          .reduce((acc, track) => (_.some(acc, track) ? acc : acc.concat(track)), [])
          // Filter out albums that are already in state
          .filter(album => !_.some(state, album))
      ]
    default:
      return state
  }
}

export default albums
