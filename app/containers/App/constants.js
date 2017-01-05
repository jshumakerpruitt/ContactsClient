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
export const SUBMIT_AUTH = 'contacts/App/SUBMIT_AUTH';
export const RECEIVE_TOKEN = 'contacts/App/RECEIVE_TOKEN';
export const RECEIVE_AUTH_ERROR = 'contacts/App/RECEIVE_AUTH_ERROR';

export const DEFAULT_LOCALE = 'en';
