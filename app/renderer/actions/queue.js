import {
  CREATE_QUEUE, ADD_TRACKS_IN_QUEUE
} from './actionTypes'

export const createQueue = (trackIds) => {
  return {
    type: CREATE_QUEUE,
    trackIds
  }
}

export const addTracksInQueue = (trackIds) => {
  return {
    type: ADD_TRACKS_IN_QUEUE,
    trackIds
  }
}
