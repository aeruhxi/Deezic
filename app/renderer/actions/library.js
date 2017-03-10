export const ADD_LIBRARY_TRACKS = 'ADD_LIBRARY_TRACKS'
export const ADD_LIBRARY_DIR = 'ADD_LIBRARY_DIR'

export const addLibraryTracks = (tracks) => {
  return {
    type: ADD_LIBRARY_TRACKS,
    tracks
  }
}

export const addLibraryDirs = (dir) => {
  return {
    type: ADD_LIBRARY_DIR,
    dir
  }
}
