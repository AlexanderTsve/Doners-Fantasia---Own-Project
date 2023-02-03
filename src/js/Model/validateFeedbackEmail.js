import { state } from "./state.js";
import { REGEX_EMAIL } from "../config.js";
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
