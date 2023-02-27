import { addRememberedUser } from "../Model/addRememberedUser.js";
import { state } from "../Model/state.js";
import loginView from "../Views/loginView.js";
/**
 * Controls the adding of the user to the local storage if 'remember me' checkbox has been checked and the removing of the tick from the checkbox afterwards.
 * @param {Object} obj An object created in the loginView with boolean property for checked.
 */
export const controlIfUserIsRemembered = (obj) => {
  addRememberedUser(obj, state.loggedUser);
  loginView.clearRememberMe();
};
