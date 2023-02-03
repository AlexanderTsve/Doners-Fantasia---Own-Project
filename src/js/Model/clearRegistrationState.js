import { state } from "./state.js";
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
