import { ADD_LIBRARY_TRACK } from './../../actions/library';

const artists = (state=[], action) => {
  switch (action.type) {
    case ADD_LIBRARY_TRACK: {
      const artist = action.track.artist;
      if (state.includes(artist)) return state;
      return [
        ...state,
        artist
      ];
    }
    default:
      return state;
  }
};

export default artists;
