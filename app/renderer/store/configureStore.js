import { remote } from 'electron';
import rootReducer from './../reducers';
import { createStore } from 'redux';

// TODO: Make root reducer later
// import { combineReducers } from 'react-redux';

export default () => {
  if (remote.process.env.NODE_ENV === 'development') {
    return createStore(rootReducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  } else {
    return createStore(rootReducer);
  }
};
