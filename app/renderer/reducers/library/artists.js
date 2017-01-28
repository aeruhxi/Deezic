import { propInState } from './../../utils/reducers';

const artists = (state=[], action) => {
  switch (action.type) {
    case 'ADD_LIBRARY_TRACKS': {
      const filteredArtists = action.tracks
        .map(track => track.artist)
        .filter(artist => !propInState(state, 'artist', artist));
      return [
        ...state,
        ...filteredArtists
      ];
    }
    default:
      return state;
  }
};

export default artists;
