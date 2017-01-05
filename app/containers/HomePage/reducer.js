/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
  RECEIVE_CONTACTS,
  RECEIVE_CONTACTS_ERROR,
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  contacts: [],
  contactsError: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CONTACTS:
      return state.set('contacts', action.contacts);
    case RECEIVE_CONTACTS_ERROR:
      return state.set('contactsError', action.contactsError);
    default:
      return state;
  }
}

export default homeReducer;
