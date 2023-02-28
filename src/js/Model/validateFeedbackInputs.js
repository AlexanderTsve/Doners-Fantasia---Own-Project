import { state } from "./state.js";
import {
  REGEX_EMAIL,
  REGEX_PHONE,
  REGEX_NAME,
  FILL_IN_FEEDBACK_FIELD_MSG,
  FILL_IN_VALID_EMAIL_MSG,
  FILL_IN_VALID_NAMES,
  FILL_IN_VALID_PHONE_MSG,
} from "../config.js";
/**
 * Validates the email input.
 * @param {Object} dataObj of the inputs from which we take the email for validation.
 */
export const validateFeedbackEmail = (dataObj) => {
  try {
    const { emailContent } = dataObj;
    state.feedbackFormData.emailContent = emailContent;
    const regEmail = REGEX_EMAIL;
    if (!regEmail.test(emailContent) || !emailContent) {
      throw new Error(FILL_IN_VALID_EMAIL_MSG);
    }
    state.feedbackFormData.emailContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
/**
 * Validates the feedback input.
 * @param {Object} dataObj of the inputs from which we take the feedback for validation.
 */
export const validateFeedbackFieldInput = (dataObj) => {
  try {
    const { feedbackContent } = dataObj;
    state.feedbackFormData.feedbackContent = feedbackContent;
    if (!feedbackContent) {
      throw new Error(FILL_IN_FEEDBACK_FIELD_MSG);
    }
    state.feedbackFormData.feedbackContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
/**
 * Validates the phone input.
 * @param {Object} dataObj of the inputs from which we take the phone for validation.
 */
export const validateFeedbackPhone = (dataObj) => {
  try {
    const { phoneContent } = dataObj;
    state.feedbackFormData.phoneContent = phoneContent;
    const regPhone = REGEX_PHONE;
    if (!regPhone.test(phoneContent) || !phoneContent) {
      throw new Error(FILL_IN_VALID_PHONE_MSG);
    }
    state.feedbackFormData.phoneContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
/**
 * Validates the name input.
 * @param {Object} dataObj of the inputs from which we take the name for validation.
 */
export const validateFeedbackName = (dataObj) => {
  try {
    const { nameContent } = dataObj;
    state.feedbackFormData.nameContent = nameContent;
    const regName = REGEX_NAME;
    if (!regName.test(nameContent) || !nameContent) {
      throw new Error(FILL_IN_VALID_NAMES);
    }
    state.feedbackFormData.nameContentIsOk = true;
  } catch (err) {
    throw err;
  }
};
