import { state } from "./state.js";
/**
 * Clears the login form data from the state object.
 */
export const clearLoginFormState = () => {
  state.loginFormData = {
    emailContent: "",
    passwordContent: "",
  };
  state.loginFormDataIsOk = false;
};
