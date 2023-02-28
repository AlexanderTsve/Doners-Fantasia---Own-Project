import { LOCAL_STORAGE_REMEMBERED_USER_KEY } from "../config.js";
/**
 * Adds the user to be remembered to the local storage.
 * @param {Object} obj an object with one property which indicates whether the 'remember me' checkbox has been checked by the user when the login form has been submitted.
 * @param {Object} loggedUser the user object to be set in the local storage.
 * @returns if the obj is not checked or if there is no logged user.
 */
export const addRememberedUser = (obj, loggedUser) => {
  if (!obj.checked || Object.values(loggedUser).length === 0) {
    return;
  }
  localStorage.setItem(
    LOCAL_STORAGE_REMEMBERED_USER_KEY,
    JSON.stringify(loggedUser)
  );
};
