import { combineReducers } from 'redux'
import albums from './albums'
import artists from './artists'
import dirs from './dirs'
import tracks from './tracks'

export default combineReducers({
  albums,
  artists,
  dirs,
  tracks
})
