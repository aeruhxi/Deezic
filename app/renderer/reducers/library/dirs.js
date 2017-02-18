import { ADD_LIBRARY_DIR } from './../../actions/library'

const dirs = (state = [], action) => {
  switch (action.type) {
    case ADD_LIBRARY_DIR:
      if (state.includes(action.dir)) return state
      return [
        ...state,
        action.dir
      ]
    default:
      return state
  }
}

export default dirs
