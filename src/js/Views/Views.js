import * as alertIcon from "../../img/icons/*.png";
/**
 * Parent class for most of the other Views classes.
 */
export default class View {
  _data;
  /**
   * Renders the spinner animation when waiting for some of the requests.
   */
  renderSpinner() {
    const markup = `<div class='spinner'></div>`;
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  /**
   * Renders the error message on the page.
   * @param {string} message to be rendered.
   */
  renderError(message) {
    const divIconEl = document.createElement("div");
    const iconAlertEl = document.createElement("img");
    const paraErrorMessage = document.createElement("p");
    const markup = document.createElement("div");
    iconAlertEl.src = `${alertIcon.error}.png`;
    paraErrorMessage.innerText = message;
    markup.classList.add("error");
    divIconEl.append(iconAlertEl);
    markup.append(divIconEl, paraErrorMessage);
    this._clear();
    this._parentElement.append(markup);
  }
  /**
   * Function which hides the message modal.
   * @callback handlerModalHiding
   */
  /**
   * Listens for the "click" event and executes the handler.
   * @param {handlerModalHiding} handlerModalHiding hides the message modal.
   */
  addHideMessageModalHandler(handlerModalHiding) {
    document.addEventListener("click", function (e) {
      if (
        e.target.matches(".message_cancel_btn") ||
        e.target.closest(".modal_message")
      ) {
        handlerModalHiding();
      }
    });
  }
  /**
   * Handles the input.
   * @callback inputHandler
   */
  /**
   * Listens for the event input and executes the respective handler.
   * @param {inputHandler} handler to be executed when the input changes.
   * @param {string} elementId the id attribute associated with the respective element.
   */
  addInputFieldHandler(handler, elementId) {
    document.getElementById(elementId).addEventListener("input", handler);
  }
  /**
   * Handles the 'click' event.
   * @callback errorParaHandler
   */
  /**
   * Listens for the "click" event and executes the respective handler.
   * @param {errorParaHandler} handler to be executed when the button is clicked.
   * @param {string} elClass the class attribute associated with the respective element.
   */
  addParaHandler(handler, elClass) {
    document.querySelector(`.${elClass}`).addEventListener("click", handler);
  }
  /**
   * Shows the respective main modal - login or registration.
   * @callback showModalHandler
   */
  /**
   * Listens for the "click" event and executes the handler.
   * @param {showModalHandler} showModalHandler to be executed when the button is clicked.
   * @param {string} elClassEnd the class attribute associated with the respective element.
   */
  addShowMainModalHandler(showModalHandler, elClassEnd) {
    document
      .querySelector(`.nav__item_${elClassEnd}`)
      .addEventListener("click", showModalHandler);
  }
  /**
   * Hides the respective main modal - login or registration.
   * @callback hideModalHandler
   */
  /**
   * Listens for the "click" event and executes the handler.
   * @param {hideModalHandler} hideModalHandler to be executed when the button is clicked.
   * @param {string} modalType the class attribute associated with the respective element.
   */
  addHideMainModalHandler(hideModalHandler, modalType) {
    document
      .querySelector(`.cancel_${modalType}_btn`)
      .addEventListener("click", hideModalHandler);
  }
  /**
   * Displays the respective main modal - login or registration.
   * @param {string} classEnd the class attribute associated with the respective element.
   */
  showMainModal(classEnd) {
    document.querySelector(`.modal_${classEnd}`).style.display = "block";
  }
  /**
   * Hides the respective main modal - login or registration.
   * @param {string} classEnd the class attribute associated with the respective element.
   */
  hideMainModal(classEnd) {
    document.querySelector(`.modal_${classEnd}`).style.display = "none";
  }
  /**
   * Hides the message modal.
   */
  hideMessageModal() {
    const modal = document.querySelector(".modal_message");
    modal.remove();
  }
  /**
   * Shows the message modal.
   * @param {string} text The message that should be rendered to the user.
   * @param {string} divEl The id of the respective element.
   */
  showMessageModal(text, divEl) {
    const markup = this._generateMessageModalHtml(text);
    document.getElementById(divEl).append(markup);
  }
  /**
   * Private method, increases the respective number.
   * @param {number} qtyEl the number to be increased
   */
  _increaseQtyHandler(qtyEl) {
    qtyEl.value++;
  }
  /**
   * Private method, decreases the respective number.
   * @param {number} qtyEl the number to be decreased.
   */
  _decreaseQtyHandler(qtyEl) {
    qtyEl.value > 1 ? qtyEl.value-- : (qtyEl.value = "");
  }
  /**
   * Clears the respective HTML element.
   */
  _clear() {
    this._parentElement.innerHTML = "";
  }
  /**
   * Renders a spinner during the loading of an image.
   * @param {HTMLElement} parentEl the element where the spinner circles.
   */
  _renderInternalSpinner = (parentEl) => {
    const markup = `<div class='spinner'></div>`;
    parentEl.innerHTML = "";
    parentEl.insertAdjacentHTML("afterbegin", markup);
  };
  /**
   * Generates the modal with the respective message.
   * @param {string} text of the modal message.
   * @returns {HTMLElement} the modal element.
   */
  _generateMessageModalHtml(text) {
    const modalDiv = document.createElement("div");
    const modalContentForm = document.createElement("form");
    const brEl = document.createElement("br");
    const modalContentContainer = document.createElement("div");
    const modalTextPara = document.createElement("p");
    const modalBtnDiv = document.createElement("div");
    const okBtn = document.createElement("button");
    modalTextPara.innerText = text;
    okBtn.innerText = "Ok";
    okBtn.setAttribute("type", "button");
    modalDiv.classList.add("modal", "modal_message");
    modalContentForm.classList.add("modal_message-content");
    modalContentContainer.classList.add("modal_message-content_container");
    okBtn.classList.add("doner_app_button", "message_cancel_btn");
    modalBtnDiv.append(okBtn);
    modalContentContainer.append(modalTextPara, modalBtnDiv);
    modalContentForm.append(brEl, modalContentContainer);
    modalDiv.append(modalContentForm);
    return modalDiv;
  }
}
