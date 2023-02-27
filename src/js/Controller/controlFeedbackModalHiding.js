import feedbackPageView from "../Views/feedbackPageView.js";
/**
 * Controls the hiding of the modal emerging after the feedback data has been sent.
 */
export const controlFeedbackModalHiding = () => {
  feedbackPageView.hideMessageModal();
};
