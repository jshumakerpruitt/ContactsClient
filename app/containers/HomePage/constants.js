/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const REQUEST_CONTACTS = 'contacts/HomePage/REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'contacts/HomePage/RECEIVE_CONTACTS';
export const RECEIVE_CONTACT = 'contacts/HomePage/RECEIVE_CONTACT';
export const RECEIVE_CONTACTS_ERROR = 'contacts_error/HomePage/RECEIVE_CONTACTS_ERROR';

export const SUBMIT_CONTACT = 'contacts/HomePage/SUBMIT_CONTACT';
export const CREATE_CONTACT_SUCCESS = 'create_contacts/HomePage/CREATE_CONTACT_SUCCESS';
export const CREATE_CONTACT_ERROR = 'create_contacts/HomePage/CREATE_CONTACT_ERROR';
