import {
  RECEIVE_TOKEN,
  RECEIVE_AUTH_ERROR,
  RECEIVE_SIGNUP_ERROR,
  LOG_OUT,
  CLEAR_ERRORS,
} from './constants';

import {
  DELETE_CONTACT_ERROR,
  CREATE_CONTACT_ERROR,
  RECEIVE_CONTACTS_ERROR,
} from 'containers/HomePage/constants'

import {
  UPDATE_CONTACT_ERROR,
} from 'containers/EditContactsPage/constants'

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  token: null,
  errors: null,
  authError: null,
  signUpError: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_TOKEN:
      return state.set('token', action.token);
    case LOG_OUT:
      return fromJS({});
    case RECEIVE_AUTH_ERROR:
      return state.set('authError', action.authError)
                  .set('errors', action.authError)
    case RECEIVE_SIGNUP_ERROR:
      return state.set('signUpError', action.signUpError)
                  .set('errors', action.signUpError)
    case CREATE_CONTACT_ERROR:
      return state.set('signUpError', action.signUpError)
                  .set('errors', action.contactCreationError)
    case DELETE_CONTACT_ERROR:
      return state.set('signUpError', action.signUpError)
                  .set('errors', action.signUpError)
    case RECEIVE_CONTACTS_ERROR:
      return state.set('signUpError', action.signUpError)
                  .set('errors', action.signUpError)
    case UPDATE_CONTACT_ERROR:
      return state.set('signUpError', action.signUpError)
                  .set('errors', action.signUpError)
    case CLEAR_ERRORS:
      return state.set('errors', null);
    default:
      return state;
  }
}

export default appReducer;
