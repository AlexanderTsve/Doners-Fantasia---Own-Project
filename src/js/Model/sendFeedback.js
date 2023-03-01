import { state } from "./state.js";
import { sendDataRequest } from "../helpers.js";
import { POST_FEEDBACKS_URL } from "../config.js";
import { async } from "regenerator-runtime";
/**
 * Sends the feedback data to the database.
 * @returns {string} which indicates whether the data has been sent successfully or not.
 */
export const sendFeedback = async () => {
  return await sendDataRequest(POST_FEEDBACKS_URL, state.feedbackFormData);
};
