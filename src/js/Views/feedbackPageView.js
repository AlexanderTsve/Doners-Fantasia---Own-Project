import Views from "./Views.js";
class FeedbackPageView extends Views {
  _errorElements = [
    ...document.querySelectorAll(".feedback-form-error-message"),
  ];
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
  clearError(elClassEnd) {
    const [parentElement] = this._errorElements.filter((el) =>
      el.classList.contains(`feedback-error-${elClassEnd}`)
    );
    parentElement.innerHTML = "";
  }
  clearInputs() {
    const inputFields = [
      ...document.querySelectorAll(".feedback-form-field_input"),
    ];
    inputFields.forEach((field) => (field.value = ""));
  }
  addSubmitFormHandler(handlerFormValidation) {
    document
      .querySelector(".feedback_form_submit")
      .addEventListener("click", function (e) {
        e.preventDefault();
        handlerFormValidation();
      });
  }
  getFeedbackFormInputsContent(validationFn) {
    const nameContent = document.getElementById("feedback_name_input").value;
    const emailContent = document.getElementById("feedback_email_input").value;
    const phoneContent = document.getElementById("feedback_phone_input").value;
    const feedbackContent = document.getElementById("feedback-area").value;
    const feedback = {
      nameContent,
      emailContent,
      phoneContent,
      feedbackContent,
    };
    validationFn(feedback);
  }
}
export default new FeedbackPageView();
