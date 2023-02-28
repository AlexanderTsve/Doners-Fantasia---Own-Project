import { state } from "./state.js";
/**
 * Clears the registration form inputs data from the state object.
 */
export const clearRegistrationState = () => {
  state.registrationFormData = {
    emailContent: "",
    phoneContent: "",
    passwordContent: "",
    confirmPasswordContent: "",
    addressContent: "",
    emailContentIsOk: false,
    phoneContentIsOk: false,
    passwordContentIsOk: false,
    confirmPasswordContentIsOk: false,
    addressContentIsOk: false,
  };
};
