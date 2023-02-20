import { state } from "./state.js";
export const clearLoginState = () => {
  localStorage.removeItem("donerFantasiaLoggedUser");
  localStorage.removeItem("donerFantasiaLoggedUserId");
  localStorage.removeItem("rememberUser");
};
