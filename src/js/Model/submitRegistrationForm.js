import { state } from "./state.js";
import {
  POST_REGISTRATION_AUTH_URL,
  REGISTRATION_AUTH_ERROR,
  USERS_URL,
} from "../config.js";
import { sendRegistrationData } from "../helpers";
import { async } from "regenerator-runtime";
export const submitRegistrationForm = async () => {
  try {
    await sendAuthData(
      POST_REGISTRATION_AUTH_URL,
      state.registrationFormData,
      REGISTRATION_AUTH_ERROR
    );
    await sendRegistrationData(USERS_URL, state.registrationFormData);
    return "Your registration has been successful!";
  } catch (err) {
    return err.message;
  }
};
