import {
  play, pause, setCurrentSong
} from './../player'
import { createQueue } from '../queue'

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

export const playAndAddSongsToQueue = (id, trackIds) => {
  return (dispatch, getState) => {
    togglePlayById(id)(dispatch, getState)
    dispatch(createQueue(trackIds))
  }
}

export const playNextOnQueue = () => {
  return (dispatch, getState) => {
    const { player, queue } = getState()

    let currentIndex = queue.indexOf(player.currentSong.id)
    currentIndex = ++currentIndex % queue.length
    togglePlayById(queue[currentIndex])(dispatch, getState)
  }
}

export const playPrevOnQueue = () => {
  return (dispatch, getState) => {
    const { player, queue } = getState()
    const queLen = queue.length

    let currentIndex = queue.indexOf(player.currentSong.id)
    currentIndex = ((--currentIndex % queLen) + queLen) % queLen // Actual Modulo
    togglePlayById(queue[currentIndex])(dispatch, getState)
  }
}
