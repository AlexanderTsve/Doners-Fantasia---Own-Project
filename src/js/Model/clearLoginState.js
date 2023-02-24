import { state } from "./state.js";
export const clearLoginState = () => {
  state.loggedUser = {};
  state.loggedUserId = "";
  localStorage.removeItem("rememberUser");
};
