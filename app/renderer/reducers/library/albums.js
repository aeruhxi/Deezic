import { ADD_LIBRARY_TRACK } from './../../actions/library'

const albums = (state = [], action) => {
  switch (action.type) {
    case ADD_LIBRARY_TRACK: {
      const album = action.track.album
      if (state.includes(album)) return state
      return [
        ...state,
        album
      ]
    }
    default:
      return state
  }
}

export default albums
