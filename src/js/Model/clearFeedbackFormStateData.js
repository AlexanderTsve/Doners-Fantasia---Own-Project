import { state } from "./state.js";
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
