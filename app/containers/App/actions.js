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
  SUBMIT_AUTH,
  RECEIVE_TOKEN,
  RECEIVE_AUTH_ERROR,
  SUBMIT_SIGNUP,
  RECEIVE_SIGNUP_ERROR,
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

export const receiveAuthError = (authError) => ({
  type: RECEIVE_AUTH_ERROR,
  authError,
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

export const receiveSignUpError = (signUpError) => ({
  type: RECEIVE_SIGNUP_ERROR,
  signUpError,
});
