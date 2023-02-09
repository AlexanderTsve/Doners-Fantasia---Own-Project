import * as bootstrap from "bootstrap";
import feedbackPageView from "../Views/feedbackPageView.js";
export const validationFeedbackController = (validationFn, classEnd) => {
  try {
    feedbackPageView.getFeedbackFormInputsContent(validationFn);
    feedbackPageView.clearError(classEnd);
  } catch (err) {
    feedbackPageView.renderError(err.message, classEnd);
  }
};
