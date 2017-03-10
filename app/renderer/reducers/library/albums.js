import { ADD_LIBRARY_TRACKS } from './../../actions/library'

const albums = (state = [], action) => {
  switch (action.type) {
    case ADD_LIBRARY_TRACKS: {
      return action.tracks
        .map(track => ({artist: track.album.artist, album: track.album.album}))
        .reduce((acc, track) => (deepIncludes(acc, track) ? acc : acc.concat(track)), [])
        .filter(album => !deepIncludes(state, album))
    }
    default:
      return state
  }
}

export default albums

function deepIncludes (arr, targetObj) {
  for (let obj of arr) {
    if (obj.artist === targetObj.artist && obj.album === targetObj.album) {
      return true
    }
  }
  return false
}
