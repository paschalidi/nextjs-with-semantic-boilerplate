/*
 *
 * NavigationBar reducer
 *
 */

import {
  DEFAULT_ACTION,
  HANDLE_PIN,
} from './constants';

const initialState = false;

function navigationBarReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case HANDLE_PIN:
      return action.payload.isPinned;
    default:
      return state;
  }
}

export default navigationBarReducer;
