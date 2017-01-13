/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  SUBMIT_SIGNUP,
  SUBMIT_AUTH,
  RECEIVE_TOKEN,
  LOG_OUT,

  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  RECEIVE_FLASH,
  CLEAR_FLASH,
} from './constants';

export const submitAuth = (params) => {
  const { email, password } = params;
  return {
    type: SUBMIT_AUTH,
    email,
    password,
  };
};

export const receiveToken = (token) => ({
  type: RECEIVE_TOKEN,
  token,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const submitSignUp = (params) => {
  const { email, username, password } = params;
  return {
    type: SUBMIT_SIGNUP,
    email,
    username,
    password,
  };
};

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const receiveFlash = (flash) => ({
  type: RECEIVE_FLASH,
  flash,
});

export const clearFlash = () => ({
  type: CLEAR_FLASH,
});
