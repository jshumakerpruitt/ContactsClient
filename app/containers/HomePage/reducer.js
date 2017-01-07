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
  RECEIVE_CONTACT,
  RECEIVE_CONTACTS_ERROR,
  CREATE_CONTACT_ERROR,
} from './constants';

import { fromJS } from 'immutable';

// The initial state of the App
const initialState = fromJS({
  contacts: [],
  fetchContactsError: null,
  contactCreationError: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CONTACTS:
      return state.set('contacts', fromJS(action.contacts));
    case RECEIVE_CONTACT:
      return state.set('contacts', state.get('contacts').unshift(action.contact));
    case RECEIVE_CONTACTS_ERROR:
      return state.set('fetchContactsError', action.fetchContactsError);
    case CREATE_CONTACT_ERROR:
      return state.set('contactCreationError', action.contactCreationError);
    default:
      return state;
  }
}

export default homeReducer;
