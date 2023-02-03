import { state } from "./state.js";
import { REGEX_NAME } from "../config.js";
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
