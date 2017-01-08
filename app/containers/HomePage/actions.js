/*
 * Home Actions
 *
 */

import { normalize } from 'normalizr';
import * as schema from 'utils/schema';

import {
  REQUEST_CONTACTS,
  RECEIVE_CONTACTS,
  RECEIVE_CONTACT,
  RECEIVE_CONTACTS_ERROR,
  SUBMIT_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,
} from './constants';

export const requestContacts = () => ({
  type: REQUEST_CONTACTS,
});

export const receiveContacts = (contacts) => {
  const response = normalize(contacts, schema.arrayOfContacts);

  return {
    type: RECEIVE_CONTACTS,
    contacts: response.entities.contacts,
    ids: response.result,
  };
};

export const receiveContact = (contact) => ({
  type: RECEIVE_CONTACT,
  contact,
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
