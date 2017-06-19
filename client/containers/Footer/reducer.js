/*
 *
 * Footer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_CONTENTFUL,

} from './constants';

const initialState = fromJS({});

function footerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case FETCH_CONTENTFUL:
      return state;

    default:
      return state;
  }
}

export default footerReducer;
