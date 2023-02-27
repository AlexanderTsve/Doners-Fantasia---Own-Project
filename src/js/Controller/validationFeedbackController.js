import feedbackPageView from "../Views/feedbackPageView.js";
/**
 * Controls validation of the feedback form.
 * @callback validationFn Callback which validates the feedback form.
 * @param {String} classEnd The end of the CSS class associated with the respective DOM error paragraph element.
 */
export const validationFeedbackController = (validationFn, classEnd) => {
  try {
    feedbackPageView.getFeedbackFormInputsContent(validationFn);
    feedbackPageView.clearError(classEnd);
  } catch (err) {
    feedbackPageView.renderError(err.message, classEnd);
  }
};
