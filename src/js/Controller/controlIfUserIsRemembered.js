import * as bootstrap from "bootstrap";
import { addRememberedUser } from "../Model/addRememberedUser.js";
import loginView from "../Views/loginView.js";
import { state } from "../Model/state.js";
export const controlIfUserIsRemembered = (obj) => {
  addRememberedUser(obj, state.loggedUser);
  loginView.clearRememberMe();
};
