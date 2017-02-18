export const ADD_LIBRARY_TRACK = 'ADD_LIBRARY_TRACK'
export const ADD_LIBRARY_DIR = 'ADD_LIBRARY_DIR'

export const addLibraryTracks = (track) => {
  return {
    type: ADD_LIBRARY_TRACK,
    track
  }
}

export const addLibraryDirs = (dir) => {
  return {
    type: ADD_LIBRARY_DIR,
    dir
  }
}
