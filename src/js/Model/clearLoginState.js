import { state } from "./state.js";
import { LOCAL_STORAGE_REMEMBERED_USER_KEY } from "../config.js";
/**
 * Clears the logged user data from the state object and the remembered user from the local storage.
 */
export const clearLoginState = () => {
  state.loggedUser = {};
  state.loggedUserId = "";
  localStorage.removeItem(LOCAL_STORAGE_REMEMBERED_USER_KEY);
};
