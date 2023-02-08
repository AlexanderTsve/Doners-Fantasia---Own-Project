import { state } from "./state.js";
export const clearLoginState = () => {
  state.isLogged = false;
  state.loggedUser = {};
};
