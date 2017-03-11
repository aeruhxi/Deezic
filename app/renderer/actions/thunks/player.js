import {
  play, pause, setCurrentSong
} from './../player'

export const togglePlay = () => {
  return (dispatch, getState) => {
    const { player } = getState()

    if (player.isPlaying) {
      dispatch(pause())
    } else {
      dispatch(play())
    }
  }
}

// If the song is already the current song, toggle play and pause
// Else pause the current song and set new given song
export const togglePlayById = (id) => {
  return (dispatch, getState) => {
    const { library, player } = getState()

    if (player.currentSong.id === id) {
      dispatch(togglePlay())
    } else {
      dispatch(pause())

      const song = library.tracks.byId[id]
      dispatch(setCurrentSong(song))
    }
  }
}
