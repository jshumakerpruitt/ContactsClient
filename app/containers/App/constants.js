/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const API_ROOT = 'http://localhost:3001';
// export const API_ROOT = 'https://thawing-dawn-49937.herokuapp.com';
export const AUTH_URL = `${API_ROOT}/user_token`;
export const USERS_URL = `${API_ROOT}/users`;
export const CONTACTS_URL = `${API_ROOT}/contacts`;

export const SUBMIT_AUTH = 'contacts/App/SUBMIT_AUTH';
export const RECEIVE_TOKEN = 'contacts/App/RECEIVE_TOKEN';
export const LOG_OUT = 'contacts/App/LOG_OUT';
export const SUBMIT_SIGNUP = 'contacts/App/SUBMIT_SIGNUP';
export const DEFAULT_LOCALE = 'en';

export const RECEIVE_ERRORS = 'contacts/App/RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'contacts/App/CLEAR_ERRORS';
export const RECEIVE_FLASH = 'contacts/App/RECEIVE_FLASH';
export const CLEAR_FLASH = 'contacts/App/CLEAR_FLASH';
