import { CREATE_QUEUE, ADD_TRACKS_IN_QUEUE } from './../../actions/actionTypes'

const queue = (state = [], action) => {
  switch (action.type) {
    case CREATE_QUEUE:
      return action.trackIds

    case ADD_TRACKS_IN_QUEUE:
      return [...state, ...action.trackIds]

    default:
      return state
  }
}

export default queue
