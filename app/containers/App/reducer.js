import {
  RECEIVE_TOKEN,
  RECEIVE_AUTH_ERROR,
  RECEIVE_SIGNUP_ERROR,
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  token: null,
  authError: null,
  signUpError: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return state.set('token', action.token);
    case RECEIVE_AUTH_ERROR:
      return state.set('authError', action.authError);
    case RECEIVE_SIGNUP_ERROR:
      return state.set('signUpError', action.signUpError);
    default:
      return state;
  }
}

export default appReducer;
