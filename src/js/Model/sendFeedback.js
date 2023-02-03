import { state } from "./state.js";
import { sendDataRequest } from "../helpers.js";
import { POST_FEEDBACKS_URL } from "../config.js";
import { async } from "regenerator-runtime";
export const sendFeedback = async () => {
  return await sendDataRequest(POST_FEEDBACKS_URL, state.feedbackFormData);
};
