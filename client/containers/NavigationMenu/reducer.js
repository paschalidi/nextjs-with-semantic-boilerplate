/*
 *
 * NavigationMenu reducer
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_CONTENTFUL,
} from './constants';

const initialState = [];

function navigationMenuReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_CONTENTFUL:
      return action.payload;
    default:
      return state;
  }
}

export default navigationMenuReducer;
