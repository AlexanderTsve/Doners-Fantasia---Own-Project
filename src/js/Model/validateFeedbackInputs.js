import { state } from "./state.js";
import { REGEX_EMAIL } from "../config.js";
import { REGEX_PHONE } from "../config.js";
import { REGEX_NAME } from "../config.js";
export const validateFeedbackEmail = (dataObj) => {
  try {
    const { emailContent } = dataObj;
    state.feedbackFormData.emailContent = emailContent;
    const regEmail = REGEX_EMAIL;
    if (!regEmail.test(emailContent) || !emailContent) {
      throw new Error("Fill in a valid email address!");
    }
    state.feedbackFormData.emailContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateFeedbackFieldInput = (dataObj) => {
  try {
    const { feedbackContent } = dataObj;
    state.feedbackFormData.feedbackContent = feedbackContent;
    if (!feedbackContent) {
      throw new Error("Fill in the feedback field!");
    }
    state.feedbackFormData.feedbackContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateFeedbackPhone = (dataObj) => {
  try {
    const { phoneContent } = dataObj;
    state.feedbackFormData.phoneContent = phoneContent;
    const regPhone = REGEX_PHONE;
    if (!regPhone.test(phoneContent) || !phoneContent) {
      throw new Error(
        "Fill in a valid gsm number - starting with +3598... or 08...!"
      );
    }
    state.feedbackFormData.phoneContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
export const validateFeedbackName = (dataObj) => {
  try {
    const { nameContent } = dataObj;
    state.feedbackFormData.nameContent = nameContent;
    const regName = REGEX_NAME;
    if (!regName.test(nameContent) || !nameContent) {
      throw new Error("Fill in valid names!");
    }
    state.feedbackFormData.nameContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
