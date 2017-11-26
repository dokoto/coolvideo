import _ from 'lodash/object';
import config from '../../src/config';

/**
 * Get value from Session local storage
 * @param key - data key
 * @returns {object|string}
 */
export function get(key) {
  try {
    const data = sessionStorage.getItem(config.storageKey);
    return _.get(JSON.parse(data), key, undefined);
  } catch (e) {
    console.warn(e);
    return {};
  }
}

function getMySessionStore() {
  try {
    const data = sessionStorage.getItem(config.storageKey);
    return JSON.parse(data);
  } catch (e) {
    console.warn(e);
    return {};
  }
}

/**
 * Save value to Session local storage
 * @param key - data key
 * @param value - value
 */
export function set(key, value) {
  try {
    const data = getMySessionStore() || {};
    data[key] = value;
    sessionStorage.setItem(config.storageKey, JSON.stringify(data));
  } catch (e) {
    console.error(e);
  }
}
