export const TOGGLE_PLAY = 'TOGGLE_PLAY'
export const CHANGE_CURRENT_SECONDS = 'CHANGE_CURRENT_SECONDS'
export const SEEK = 'SEEK'
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'
export const SET_DURATION = 'SET_DURATION'
export const CHANGE_VOLUME = 'CHANGE_VOLUME'

export const togglePlay = () => ({
  type: TOGGLE_PLAY
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
