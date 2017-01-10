/*
 * Home Actions
 *
 */

import { normalize } from 'normalizr';
import * as schema from 'utils/schema';
import {
  REQUEST_CONTACT,
  RECEIVE_CONTACT_FOR_UPDATE,

  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,

  RECEIVE_CONTACT,
  RECEIVE_UPDATED_CONTACT,

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

export const requestContact = (id) => ({
  type: REQUEST_CONTACT,
  id,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  contact,
});

export const updateContactSuccess = (contact) => ({
  type: UPDATE_CONTACT_SUCCESS,
  contact,
});

export const updateContactError = (error) => ({
  type: UPDATE_CONTACT_ERROR,
  error,
});

export const receiveContactForUpdate = (contact) => ({
  type: RECEIVE_CONTACT_FOR_UPDATE,
  contact,
});

export const receiveUpdatedContact = (contact) => ({
  type: RECEIVE_UPDATED_CONTACT,
  contact,
});
