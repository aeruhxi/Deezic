import { ADD_LIBRARY_TRACK } from './../../actions/library'

const tracks = (state = [], action) => {
  switch (action.type) {
    case ADD_LIBRARY_TRACK: {
      const track = action.track
      return [
        ...state,
        {
          id: track.id,
          title: track.title,
          artist: track.artist,
          album: track.album,
          src: track.src,
          genre: track.genre,
          length: track.length
        }
      ]
    }
    default:
      return state
  }
}

export default tracks
