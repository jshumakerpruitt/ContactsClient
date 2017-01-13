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

export const RECEIVE_CONTACT = 'contacts/HomePage/RECEIVE_CONTACT';
export const RECEIVE_UPDATED_CONTACT = 'contacts/HomePage/RECEIVE_UPDATED_CONTACT';

export const REQUEST_CONTACTS = 'contacts/HomePage/REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'contacts/HomePage/RECEIVE_CONTACTS';
export const SUBMIT_CONTACT = 'contacts/HomePage/SUBMIT_CONTACT';
export const CREATE_CONTACT_SUCCESS = 'create_contacts/HomePage/CREATE_CONTACT_SUCCESS';

export const DELETE_CONTACT = 'contacts/HomePage/DELETE_CONTACT';
export const DELETE_CONTACT_SUCCESS = 'contacts/HomePage/DELETE_CONTACT_SUCCESS';


export const REQUEST_CONTACT = 'contacts/HomePage/REQUEST_CONTACT';
export const RECEIVE_CONTACT_FOR_UPDATE = 'contacts/HomePage/RECEIVE_CONTACT_FOR_UPDATE';
export const UPDATE_CONTACT = 'contacts/HomePage/UPDATE_CONTACT';
export const UPDATE_CONTACT_SUCCESS = 'contacts/HomePage/UPDATE_CONTACT_SUCCESS';
