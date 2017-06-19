/*
 *
 * NavigationMenu actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_CONTENTFUL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchContentful(response) {
  return {
    payload: response.items,
    type: FETCH_CONTENTFUL,
  };
}
