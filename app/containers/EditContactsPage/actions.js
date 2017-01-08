/*
 *
 * EditContactsPage actions
 *
 */

import {
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
} from './constants';

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
