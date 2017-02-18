import { ADD_LIBRARY_TRACK } from './../../actions/library'

const initialTracks = [{
  id: '12345',
  title: 'I am a weaboo',
  artist: 'Papa Franku',
  album: 'Pink Guy',
  src: './test.mp3',
  genre: ['Pop'],
  length: 220
}]

const tracks = (state = initialTracks, action) => {
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
