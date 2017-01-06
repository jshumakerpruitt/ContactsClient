/*
 * Home Actions
 *
 */

import {
  REQUEST_CONTACTS,
  RECEIVE_CONTACTS,
  RECEIVE_CONTACTS_ERROR,
  SUBMIT_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,
} from './constants';

export const requestContacts = () => ({
  type: REQUEST_CONTACTS,
});

export const receiveContacts = (contacts) => ({
  type: RECEIVE_CONTACTS,
  contacts,
});

export const receiveContactsError = (fetchContactsError) => ({
  type: RECEIVE_CONTACTS_ERROR,
  fetchContactsError,
});

export const submitContact = (contact) =>
   ({
     type: SUBMIT_CONTACT,
     contact,
   })
;

export const createContactSuccess = () => ({
  type: CREATE_CONTACT_SUCCESS,
});

export const createContactError = (contactCreationError) => ({
  type: CREATE_CONTACT_ERROR,
  contactCreationError,
});
