import {
  RECEIVE_TOKEN,
  LOG_OUT,

  RECEIVE_ERRORS,
  CLEAR_ERRORS,

  RECEIVE_FLASH,
  CLEAR_FLASH,
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  token: null,
  errors: null,
  flash: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return state.set('token', action.token);
    case LOG_OUT:
      return fromJS({});
    case RECEIVE_ERRORS:
      return state.set('errors', action.errors);
    case CLEAR_ERRORS:
      return state.set('errors', null);
    case CLEAR_FLASH:
      return state.set('flash', null);
    case RECEIVE_FLASH:
      return state.set('flash', action.flash);
    default:
      return state;
  }
}

export default appReducer;
