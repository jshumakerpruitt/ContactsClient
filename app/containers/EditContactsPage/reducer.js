/*
 *
 * EditContactsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RECEIVE_CONTACT_FOR_UPDATE,
} from './constants';

const initialState = fromJS({
  contact: null,
});

function editContactsPageReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_CONTACT_FOR_UPDATE:
      return state.set('contact', fromJS(action.contact));
    default:
      return state;
  }
}

export default editContactsPageReducer;
