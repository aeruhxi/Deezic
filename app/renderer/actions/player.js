export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const CHANGE_CURRENT_SECONDS = 'CHANGE_CURRENT_SECONDS'
export const SEEK = 'SEEK'
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'
export const SET_DURATION = 'SET_DURATION'
export const CHANGE_VOLUME = 'CHANGE_VOLUME'
export const PLAY = 'PLAY'
export const PAUSE = 'PAUSE'

export const play = () => ({
  type: PLAY
})

export const pause = () => ({
  type: PAUSE
})

export const changeCurrentSeconds = (seconds) => ({
  type: CHANGE_CURRENT_SECONDS,
  currentSeconds: seconds
})

export const seekToSeconds = (seconds) => ({
  type: SEEK,
  playFromSeconds: seconds
})

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  id: song.id,
  title: song.title,
  artist: song.artist,
  album: song.album,
  albumArt: song.albumArt,
  src: song.src
})

export const setDuration = (duration) => ({
  type: SET_DURATION,
  totalSeconds: duration
})

export const changeVolume = (volume) => ({
  type: CHANGE_VOLUME,
  volume
})

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
