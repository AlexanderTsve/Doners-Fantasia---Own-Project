import { state } from "./state.js";
export const clearLoginState = () => {
  localStorage.removeItem("donerFantasiaLoggedUser");
  localStorage.removeItem("rememberUser");
};
