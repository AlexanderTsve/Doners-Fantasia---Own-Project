import { state } from "./state.js";
import { REGEX_EMAIL } from "../config.js";
export const validateRegistrationEmail = (dataObj) => {
  const { emailContent } = dataObj;
  state.registrationFormData.emailContent = emailContent;
  const regEmail = REGEX_EMAIL;
  state.registrationFormData.emailContentIsOk =
    !regEmail.test(emailContent) || !emailContent ? false : true;
};
