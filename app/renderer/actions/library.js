export const ADD_LIBRARY_TRACKS = 'ADD_LIBRARY_TRACKS';
export const ADD_LIBRARY_DIRS = 'ADD_LIBRARY_DIRS';

const addLibraryTracks = (tracks) => {
  return {
    type: ADD_LIBRARY_TRACKS,
    tracks
  };
};

export default addLibraryTracks;
