import { combineReducers } from 'redux'
import library from './library'
import player from './player'
import queue from './queue'
import currentModal from './modals'

export default combineReducers({
  library,
  player,
  queue,
  currentModal
})
