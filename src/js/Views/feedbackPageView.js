import Views from "./Views.js";
/**
 * Gets the feedback form inputs, renders errors, adds handler for submitting the form.
 */
class FeedbackPageView extends Views {
  _errorElements = [
    ...document.querySelectorAll(".feedback-form-error-message"),
  ];
  /**
   * Renders an error paragraph.
   * @param {String} message the message to be rendered.
   * @param {String} elClassEnd indicates which error element should be rendered.
   */
  renderError(message, elClassEnd) {
    const [parentElement] = this._errorElements.filter((el) =>
      el.classList.contains(`feedback-error-${elClassEnd}`)
    );
    this.clearError(elClassEnd);
    const childEl = document.createElement("p");
    childEl.classList.add("feedback-form-error");
    childEl.innerText = message;
    parentElement.append(childEl);
  }
  /**
   * Clears an error paragraph.
   * @param {String} elClassEnd indicates which paragraph should be hidden.
   */
  clearError(elClassEnd) {
    const [parentElement] = this._errorElements.filter((el) =>
      el.classList.contains(`feedback-error-${elClassEnd}`)
    );
    parentElement.innerHTML = "";
  }
  /**
   * Clears all of the feedback form inputs.
   */
  clearInputs() {
    const inputFields = [
      ...document.querySelectorAll(".feedback-form-field_input"),
    ];
    inputFields.forEach((field) => (field.value = ""));
  }
  /**
   * Listens for the 'click' event and attaches a handler to the form.
   * @callback handlerFormValidation function to be executed when the form is submitted.
   */
  addSubmitFormHandler(handlerFormValidation) {
    document
      .querySelector(".feedback_form_submit")
      .addEventListener("click", function (e) {
        e.preventDefault();
        handlerFormValidation();
      });
  }
  /**
   * Gets the feedback form inputs.
   * @callback validationFn to check all of the inputs.
   */
  getFeedbackFormInputsContent(validationFn) {
    const feedback = {
      nameContent: document.getElementById("feedback_name_input").value,
      emailContent: document.getElementById("feedback_email_input").value,
      phoneContent: document.getElementById("feedback_phone_input").value,
      feedbackContent: document.getElementById("feedback-area").value,
    };
    validationFn(feedback);
  }
}
export default new FeedbackPageView();
