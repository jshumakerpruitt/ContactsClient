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
import { combineReducers } from 'redux-immutable';
import {
  RECEIVE_CONTACTS,
  RECEIVE_CONTACT,
  RECEIVE_CONTACTS_ERROR,
  CREATE_CONTACT_ERROR,
} from './constants';

import { fromJS } from 'immutable';

/* The initial state of the App
const initialState = fromJS({
  contacts: [],
   error: {
   fetchContactsError: null,
   contactCreationError: null,
   }
});
*/

// Break the reducer into pieces to prevent
// making changes deep within the state tree
const contacts = (
  state = fromJS({}),
  action
) => {
  switch (action.type) {
    case RECEIVE_CONTACTS:
      return fromJS(action.contacts);
    case RECEIVE_CONTACT:
      return state.set(
        String(action.contact.id),
        fromJS(action.contact)
      );
    default:
      return state;
  }
};

const contactIds = (
  state = fromJS([]),
  action
) => {
  switch (action.type) {
    case RECEIVE_CONTACTS:
      return fromJS(action.ids);
    case RECEIVE_CONTACT:
      return state.unshift(
        action.contact.id
      );
    default:
      return state;
  }
};

const errors = (
  state = fromJS({
    fetchContactsError: null,
    contactCreationError: null,
  }),
  action
) => {
  switch (action.type) {
    case RECEIVE_CONTACTS_ERROR:
      return state.set('fetchContactsError', action.fetchContactsError);
    case CREATE_CONTACT_ERROR:
      return state.set('contactCreationError', action.contactCreationError);
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  contactIds,
  errors,
});
