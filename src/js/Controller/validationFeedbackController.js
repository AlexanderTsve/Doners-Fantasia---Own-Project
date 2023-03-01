import feedbackPageView from "../Views/feedbackPageView.js";
/**
 * Validates the feedback form.
 * @callback validationFeedbackFn
 */
/**
 * Controls validation of the feedback form.
 * @param {validationFeedbackFn} validationFn The callback that validates the feedback form.
 * @param {string} classEnd The end of the CSS class associated with the respective DOM error paragraph element.
 */
export const validationFeedbackController = (validationFn, classEnd) => {
  try {
    feedbackPageView.getFeedbackFormInputsContent(validationFn);
    feedbackPageView.clearError(classEnd);
  } catch (err) {
    feedbackPageView.renderError(err.message, classEnd);
  }
};
