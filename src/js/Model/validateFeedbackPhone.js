import { state } from "./state.js";
import { REGEX_PHONE } from "../config.js";
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
