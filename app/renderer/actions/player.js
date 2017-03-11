import {
  CHANGE_CURRENT_SECONDS, SEEK, SET_CURRENT_SONG,
  SET_DURATION, CHANGE_VOLUME, PLAY, PAUSE
} from './actionTypes'

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
