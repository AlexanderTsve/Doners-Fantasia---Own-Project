import { state } from "./state.js";
export const validateRegistrationConfirmPassword = (dataObj) => {
  const { passwordConfirmContent } = dataObj;
  state.registrationFormData.confirmPasswordContent = passwordConfirmContent;
  state.registrationFormData.confirmPasswordContentIsOk =
    state.registrationFormData.passwordContent !== passwordConfirmContent ||
    !passwordConfirmContent
      ? false
      : true;
};
