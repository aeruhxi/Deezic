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
    src: '/public/test.mp3'
  },
  volume: 1
};

const player = (state=initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_PLAY':
      return {
        ...state,
        isPlaying: !state.isPlaying
      };

    case 'SEEK':
      return {
        ...state,
        playFromSeconds: action.playFromSeconds
      };

    case 'CHANGE_SONG':
      return {
        ...state,
        currentSong: {
          title: action.title,
          artist: action.artist,
          album: action.album,
          albumArt: action.albumArt,
          src: action.src
        }
      };

    case 'CHANGE_VOLUME':
      return {
        ...state,
        volume: action.volume
      };

    case 'CHANGE_CURRENT_SECONDS':
      return {
        ...state,
        currentSeconds: action.currentSeconds
      };

    default:
      return state;
  }
};

export default player;
