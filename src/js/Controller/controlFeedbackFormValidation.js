import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import { sendFeedback } from "../Model/sendFeedback.js";
import { clearFeedbackFormStateData } from "../Model/clearFeedbackFormStateData.js";
import { state } from "../Model/state.js";
import * as validateFeedback from "../Model/validateFeedbackInputs.js";
import feedbackPageView from "../Views/feedbackPageView.js";
import { validationFeedbackController } from "./validationFeedbackController.js";
/**
 * Validates the feedback inputs, sends the feedback data to the database and clears the feedback state data.
 */
export const controlFeedbackFormValidation = async () => {
  validationFeedbackController(validateFeedback.validateFeedbackName, "name");
  validationFeedbackController(validateFeedback.validateFeedbackEmail, "email");
  validationFeedbackController(validateFeedback.validateFeedbackPhone, "phone");
  validationFeedbackController(
    validateFeedback.validateFeedbackFieldInput,
    "text"
  );
  if (
    state.feedbackFormData.emailContentIsOk &&
    state.feedbackFormData.nameContentIsOk &&
    state.feedbackFormData.feedbackContentIsOk &&
    state.feedbackFormData.phoneContentIsOk
  ) {
    feedbackPageView.clearInputs();
    const response = await sendFeedback();
    feedbackPageView.showMessageModal(response, "feedback-page");
    clearFeedbackFormStateData();
  }
};
