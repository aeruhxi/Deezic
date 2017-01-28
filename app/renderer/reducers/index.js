import { combineReducers } from 'redux';
import library from './library';
import player from './player';
import queue from './queue';

export default combineReducers({
  library,
  player,
  queue
});
