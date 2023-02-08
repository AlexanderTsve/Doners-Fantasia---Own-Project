import { state } from "./state.js";
export const clearLoginFormState = () => {
  state.loginFormData = {
    emailContent: "",
    passwordContent: "",
  };
  state.loginFormDataIsOk = false;
};
