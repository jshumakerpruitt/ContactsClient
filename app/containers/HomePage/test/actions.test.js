import expect from 'expect';

import {
  REQUEST_CONTACTS,
  RECEIVE_CONTACTS,
  RECEIVE_CONTACTS_ERROR,
} from '../constants';

import {
  requestContacts,
  receiveContacts,
  receiveContactsError,
} from '../actions';

describe('HomePage Actions', () => {
  describe('requestContacts', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: REQUEST_CONTACTS,
      };

      expect(requestContacts()).toEqual(expectedResult);
    });
  });

  describe('receiveContacts', () => {
    it('should return the correct type and contacts', () => {
      const contacts = [1, 2];
      const expectedResult = {
        type: RECEIVE_CONTACTS,
        contacts,
      };

      expect(receiveContacts(contacts)).toEqual(expectedResult);
    });
  });

  describe('receiveContactsError', () => {
    it('should return the correct type and error msg', () => {
      const contactsError = 'myerror';
      const expectedResult = {
        type: RECEIVE_CONTACTS_ERROR,
        contactsError,
      };

      expect(receiveContactsError(contactsError)).toEqual(expectedResult);
    });
  });
});
