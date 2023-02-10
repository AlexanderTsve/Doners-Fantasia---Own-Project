import * as bootstrap from "bootstrap";
import { addRememberedUser } from "../Model/addRememberedUser.js";
import loginView from "../Views/loginView.js";
export const controlIfUserIsRemembered = (obj) => {
  addRememberedUser(obj);
  loginView.clearRememberMe();
};
