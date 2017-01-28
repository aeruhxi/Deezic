const queue = (state=[], action) => {
  switch (action.type) {
    case 'SET_QUEUE':
      return {
        ...state,
        queue: action.queue
      };

    case 'ADD_TO_QUEUE':
      return {
        ...state,
        queue: [
          ...state.queue,
          {
            title: action.title,
            artist: action.artist,
            album: action.album,
            albumArt: action.albumArt,
            src: action.src
          }
        ]
      };

    default:
      return state;
  }
};

export default queue;
