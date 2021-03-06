import expect from 'expect';

import {
  RECEIVE_CONTACT,

  REQUEST_CONTACTS,
  RECEIVE_CONTACTS,

  SUBMIT_CONTACT,
  CREATE_CONTACT_SUCCESS,

  DELETE_CONTACT,
  DELETE_CONTACT_SUCCESS,
} from '../constants';

import {
  receiveContact,

  requestContacts,
  receiveContacts,

  submitContact,
  createContactSuccess,

  deleteContact,
  deleteContactSuccess,
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
      const alice = { id: 1, name: 'alice' };
      const bob = { id: 2, name: 'bob' };
      const contacts = [alice, bob];

      const expectedResult = {
        type: RECEIVE_CONTACTS,
        contacts: { 1: alice, 2: bob },
        ids: [1, 2],
      };

      expect(receiveContacts(contacts)).toEqual(expectedResult);
    });
  });

  describe('receiveContact', () => {
    it('should return the correct type and contacts', () => {
      const contact = { name: 'joe', email: 'foo@bar.com' };
      const expectedResult = {
        type: RECEIVE_CONTACT,
        contact,
      };

      expect(receiveContact(contact)).toEqual(expectedResult);
    });
  });

  describe('submitContact', () => {
    it('should return the correct type and contacts', () => {
      const contact = {
        name: 'joe',
        email: 'foo@bar.com',
        phone: '123',
        address: '123 main st',
        organization: 'facebook',
        birthday: '7/21/1990',
      };
      const expectedResult = {
        type: SUBMIT_CONTACT,
        contact,
      };

      expect(submitContact(contact)).toEqual(expectedResult);
    });
  });

  describe('createContactSuccess', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CREATE_CONTACT_SUCCESS,
      };

      expect(createContactSuccess()).toEqual(expectedResult);
    });
  });

  describe('deleteContact', () => {
    it('it should have the correct type and id', () => {
      const fixture = 1;
      const expectedResult = {
        type: DELETE_CONTACT,
        id: fixture,
      };

      expect(deleteContact(fixture)).toEqual(expectedResult);
    });
  });

  describe('deleteContactSuccess', () => {
    it('should return the correct type and id', () => {
      const fixture = 1;
      const expectedResult = {
        type: DELETE_CONTACT_SUCCESS,
        id: fixture,
      };

      expect(deleteContactSuccess(fixture)).toEqual(expectedResult);
    });
  });
});
