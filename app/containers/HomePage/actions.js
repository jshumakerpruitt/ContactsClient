/*
 * Home Actions
 *
 */

import {
  REQUEST_CONTACTS,
  RECEIVE_CONTACTS,
  RECEIVE_CONTACTS_ERROR,
} from './constants';

export const requestContacts = () => ({
  type: REQUEST_CONTACTS,
});

export const receiveContacts = (contacts) => ({
  type: RECEIVE_CONTACTS,
  contacts,
});

export const receiveContactsError = (contactsError) => ({
  type: RECEIVE_CONTACTS_ERROR,
  contactsError,
});

