import {
  SEEK,
  SET_DURATION,
  SET_CURRENT_SONG,
  CHANGE_VOLUME,
  CHANGE_CURRENT_SECONDS,
  PLAY,
  PAUSE
} from './../actions/player'

const initialState = {
  isPlaying: false,
  playFromSeconds: 0,
  totalSeconds: 0,
  currentSeconds: 0,
  currentSong: {
    title: '',
    artist: '',
    album: '',
    albumArt: '',
    src: ''
  },
  volume: 1
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return {
        ...state,
        isPlaying: true
      }

    case PAUSE:
      return {
        ...state,
        isPlaying: false
      }

    case SEEK:
      return {
        ...state,
        playFromSeconds: action.playFromSeconds
      }

    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: {
          id: action.id,
          title: action.title,
          artist: action.artist,
          album: action.album,
          albumArt: action.albumArt,
          src: action.src
        }
      }

    case SET_DURATION:
      return {
        ...state,
        totalSeconds: action.totalSeconds
      }

    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.volume
      }

    case CHANGE_CURRENT_SECONDS:
      return {
        ...state,
        currentSeconds: action.currentSeconds
      }

    default:
      return state
  }
}

export default player
