import { state } from "./state.js";
import {
  POST_REGISTRATION_AUTH_URL,
  REGISTRATION_AUTH_ERROR,
  USERS_URL,
  SUCCESSFUL_REG_MSG,
} from "../config.js";
import { sendRegistrationData } from "../helpers.js";
import { sendAuthData } from "../helpers.js";
import { async } from "regenerator-runtime";
/**
 * Submits registration form.
 * @returns {String} which indicates whether the registration has been successful or not.
 */
export const submitRegistrationForm = async () => {
  try {
    await sendAuthData(
      POST_REGISTRATION_AUTH_URL,
      state.registrationFormData,
      REGISTRATION_AUTH_ERROR
    );
    await sendRegistrationData(USERS_URL, state.registrationFormData);
    return SUCCESSFUL_REG_MSG;
  } catch (err) {
    return err.message;
  }
};
