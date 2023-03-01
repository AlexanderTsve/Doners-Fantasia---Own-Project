import { LOCAL_STORAGE_REMEMBERED_USER_KEY } from "../config.js";
/**
 * Checks whether there is a remembered user in the local storage.
 * @returns {null | object} null if there is no remembered user, the user object if there is one.
 */
export const isThereRememberedUser = () => {
  return localStorage.getItem(LOCAL_STORAGE_REMEMBERED_USER_KEY);
};
