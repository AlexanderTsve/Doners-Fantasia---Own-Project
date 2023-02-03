import { state } from "./state.js";
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
