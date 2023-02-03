import { state } from "./state.js";
export const clearLoginState = () => {
  state.loginFormData = {
    emailContent: "",
    passwordContent: "",
  };
  state.loginFormDataIsOk = false;
};
