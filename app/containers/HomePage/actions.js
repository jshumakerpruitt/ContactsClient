/*
 * Home Actions
 *
 */

import { normalize } from 'normalizr';
import * as schema from 'utils/schema';

import {
  RECEIVE_CONTACT,

  REQUEST_CONTACTS,
  RECEIVE_CONTACTS,
  RECEIVE_CONTACTS_ERROR,

  SUBMIT_CONTACT,
  CREATE_CONTACT_SUCCESS,
  CREATE_CONTACT_ERROR,

  DELETE_CONTACT,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
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

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  id,
});

export const deleteContactSuccess = (id) => ({
  type: DELETE_CONTACT_SUCCESS,
  id,
});

export const deleteContactError = (contactDeletionError) => ({
  type: DELETE_CONTACT_ERROR,
  contactDeletionError,
});
