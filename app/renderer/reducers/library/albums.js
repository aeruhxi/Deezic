
import { propInState } from './../../utils/reducers';

const albums = (state=[], action) => {
  switch (action.type) {
    case 'ADD_LIBRARY_TRACKS': {
      const filteredAlbums = action.tracks
        .map(track => track.album)
        .filter(album => !propInState(state, 'album', album));
      return [
        ...state,
        ...filteredAlbums
      ];
    }
    default:
      return state;
  }
};

export default albums;
