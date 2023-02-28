import { state } from "./state.js";
/**
 * Clears feedback form data from the state object.
 */
export const clearFeedbackFormStateData = () => {
  state.feedbackFormData = {
    nameContent: "",
    emailContent: "",
    phoneContent: "",
    feedbackContent: "",
    nameContentIsOk: false,
    emailContentIsOk: false,
    phoneContentIsOk: false,
    feedbackContentIsOk: false,
  };
};
