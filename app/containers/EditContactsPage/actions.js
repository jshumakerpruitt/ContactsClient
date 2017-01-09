/*
 *
 * EditContactsPage actions
 *
 */

import {
  REQUEST_CONTACT,
  RECEIVE_CONTACT_FOR_UPDATE,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
} from './constants';

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
