import * as bootstrap from "bootstrap";
import { state } from "../Model/state.js";
import { clearLoginState } from "../Model/clearLoginState.js";
import navigationView from "../Views/navigationView.js";
import loginView from "../Views/loginView.js";
export const controlLogoutBtn = () => {
  clearLoginState();
  navigationView.toggleHideShowNavigationBtn(state.isLogged);
  loginView.changeWelcomePara(state.isLogged);
};
