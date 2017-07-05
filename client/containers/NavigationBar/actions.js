/*
 *
 * NavigationBar actions
 *
 */

import {
  DEFAULT_ACTION,
  HANDLE_PIN,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function handlePin(isPinned) {
  return {
    payload: { isPinned },
    type: HANDLE_PIN,
  };
}

