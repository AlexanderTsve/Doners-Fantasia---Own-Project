import { state } from "./state.js";
export const validateRegistrationAddress = (dataObj) => {
  const { addressContent } = dataObj;
  state.registrationFormData.addressContent = addressContent;
  state.registrationFormData.addressContentIsOk =
    addressContent.length < 20 ? false : true;
};
