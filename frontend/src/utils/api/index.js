import request from './request';
import buildUrl, { types } from './endpoints';
import * as store from '../store';

function generateSecureHeader(token) {
  if (!token) {
    return '';
  }

  return `Bearer ${ token }`;
}

/**
 * Try to login into the application
 * @param username    - Username from the user
 * @param password    - Password from the user
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export function postLogin(username, password) {
  const url = buildUrl(types.LOGIN);
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ username, password }),
  });
}

/**
 * Try to create a new user
 * @param username    - Username from the user
 * @param password    - Password from the user
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export function postUser(username, password) {
  const url = buildUrl(types.CREATE_USER);
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ username, password }),
  });
}

/**
 * Add fovourite movie
 * @param {string} movieDBId 
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export function postFavourite(movieDBId) {
  const url = buildUrl(types.ADD_FAVORITES);
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: generateSecureHeader(store.get('token')),
    },
    body: JSON.stringify({ movieDBId }),
  });
}

/**
 * Delete fovourite movie
 * @param {string} movieDBId 
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export function deleteFavourite(movieDBId) {
  const url = buildUrl(types.DELETE_FAVORITES);
  return request(url, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: generateSecureHeader(store.get('token')),
    },
    body: JSON.stringify({ movieDBId }),
  });
}

/**
 * Get all top films 
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export function getTopMovies() {
  const url = buildUrl(types.MOVIES);
  return request(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: generateSecureHeader(store.get('token')),
    },
  });
}

/**
 * Get movie by id
 * @param {string} id 
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export function getMovie(id) {
  const url = `${ buildUrl(types.MOVIES) }/${ id }`;
  return request(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: generateSecureHeader(store.get('token')),
    },
  });
}

/**
 * Get all fovourite movies
 * @returns {Promise<Object>}
 * @property {string} data.message   - status of response
 * @property {?string} data.token    - jwt token of request
 */
export function getFavouritesMovies() {
  const url = buildUrl(types.FAVORITES);
  return request(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: generateSecureHeader(store.get('token')),
    },
  });
}
