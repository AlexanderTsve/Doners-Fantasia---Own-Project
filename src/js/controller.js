import { state } from "./Model/state.js";
import { getChangedCart } from "./Model/getChangedCart.js";
import { controlSearchResults } from "./Controller/controlSearchResults.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";
import { controlPagination } from "./Controller/controlPagination.js";
import { controlFeedbackFormValidation } from "./Controller/controlFeedbackFormValidation.js";
import { controlFeedbackModalHiding } from "./Controller/controlFeedbackModalHiding.js";
import { controlRegistrationFormSubmission } from "./Controller/controlRegistrationFormSubmission.js";
import { controlClickLoginParaRegForm } from "./Controller/controlClickLoginParaRegForm.js";
import { controlClickRegistrationParaLoginForm } from "./Controller/controlClickRegistrationParaLoginForm.js";
import { controlLoginParaError } from "./Controller/controlLoginParaError.js";
import { controlLogoutBtn } from "./Controller/controlLogoutBtn.js";
import { controlLoginSubmission } from "./Controller/controlLoginSubmission.js";
import { controlIfUserIsLogged } from "./Controller/controlIfUserIsLogged.js";
import * as controlRouting from "./Controller/controlRouting.js";
import * as controlErrorParas from "./Controller/controlErrorParas.js";
import * as controlToggleRegistrationModal from "./Controller/controlToggleRegistrationModal.js";
import * as controlToggleLoginModal from "./Controller/controlToggleLoginModal.js";
import * as controlCartProducts from "./Controller/controlCartProducts.js";
import * as bootstrap from "bootstrap";
import urlView from "./Views/urlView.js";
import searchView from "./Views/searchView.js";
import dropdownFilterView from "./Views/dropdownFilterView.js";
import paginationView from "./Views/paginationView.js";
import feedbackPageView from "./Views/feedbackPageView.js";
import registrationView from "./Views/registrationView.js";
import loginView from "./Views/loginView.js";
import logoutView from "./Views/logoutView.js";
import navigationView from "./Views/navigationView.js";
const init = () => {
  urlView.addUrlChangeHandler(controlRouting.controlUrlChange);
  urlView.addUrlChangeHandlerToMain(() => {
    controlRouting.controlChangePathname("menu-page");
  });
  urlView.addUrlChangeHandlerToRestaurants(() => {
    controlRouting.controlChangePathname("restaurants-page");
  });
  urlView.addUrlChangeHandlerToFeedback(() => {
    controlRouting.controlChangePathname("feedback-page");
  });
  urlView.addUrlChangeHandlerToCartPage(() => {
    controlRouting.controlChangePathname("cart-page");
  });
  urlView.addHashChangeHandler(controlRouting.controlChangeHash);
  searchView.addHandlerSearch(controlSearchResults);
  dropdownFilterView.addHandlerDropdownFilter(controlSearchResults);
  paginationView.addHandlerClickBtn(controlPagination);
  feedbackPageView.addSubmitFormHandler(controlFeedbackFormValidation);
  feedbackPageView.addHideMessageModalHandler(controlFeedbackModalHiding);
  registrationView.addShowMainModalHandler(
    controlToggleRegistrationModal.registerModalShowing,
    "register"
  );
  registrationView.addHideMainModalHandler(
    controlToggleRegistrationModal.registerModalHiding,
    "registration"
  );
  registrationView.addInputFieldHandler(
    controlErrorParas.controlRegisterErrorParaEmail,
    "registration_email_input"
  );
  registrationView.addInputFieldHandler(
    controlErrorParas.controlRegisterErrorParaPassword,
    "registration_password_input"
  );
  registrationView.addInputFieldHandler(
    controlErrorParas.controlRegisterErrorParaConfirmPassword,
    "registration_password_confirm"
  );
  registrationView.addInputFieldHandler(
    controlErrorParas.controlRegisterErrorParaConfirmPassword,
    "registration_password_input"
  );
  registrationView.addInputFieldHandler(
    controlErrorParas.controlRegisterErrorParaPhone,
    "registration_phone_input"
  );
  registrationView.addInputFieldHandler(
    controlErrorParas.controlRegisterErrorParaAddress,
    "registration_address_input"
  );
  registrationView.addSignUpBtnHandler(controlRegistrationFormSubmission);
  registrationView.addParaHandler(controlClickLoginParaRegForm, "login_para");
  loginView.addShowMainModalHandler(
    controlToggleLoginModal.showLoginModal,
    "login"
  );
  loginView.addHideMainModalHandler(
    controlToggleLoginModal.hideLoginModal,
    "login"
  );
  loginView.addParaHandler(
    controlClickRegistrationParaLoginForm,
    "register_paragraph"
  );
  loginView.addInputFieldsHandler(controlLoginParaError);
  loginView.addLoginBtnHandler(controlLoginSubmission);
  logoutView.addLogoutHandler(controlLogoutBtn);
  navigationView.toggleHideShowNavigationBtn(state.isLogged);
  controlCartProducts.renderCartData();
  if (getChangedCart() && getChangedCart().length > 0) {
    controlCartProducts.addChangeQtyHandlers();
    controlCartProducts.addOrderInputsHandlers();
  }
  controlIfUserIsLogged();
};
init();
