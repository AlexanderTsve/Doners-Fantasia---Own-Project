import { state } from "./state.js";
export const validateRegistrationForm = () => {
  return (
    state.registrationFormData.addressContentIsOk &&
    state.registrationFormData.confirmPasswordContentIsOk &&
    state.registrationFormData.emailContentIsOk &&
    state.registrationFormData.passwordContentIsOk &&
    state.registrationFormData.phoneContentIsOk
  );
};
