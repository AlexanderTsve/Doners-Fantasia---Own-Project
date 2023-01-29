import View from "./View.js";
import * as icons from "../../img/icons/*.png";
class RestaurantsView extends View {
  _parentElement = document.querySelector(".restaurants-container");
  render(data) {
    if (!data) {
      return this.renderError();
    }
    this._data = data;
    const markupArr = this._generateMarkupArr(this._data);
    this._clear();
    markupArr.forEach((htmlEl) => this._parentElement.append(htmlEl));
  }
  _generateMarkupArr(arrOfRestaurants) {
    return arrOfRestaurants.map((restaurant) => {
      const restaurantDivEl = document.createElement("div");
      const nameRestaurantEl = document.createElement("h5");
      const restaurantBodyDivEl = document.createElement("div");
      const addressParaEl = document.createElement("p");
      const workingHoursDivEl = document.createElement("div");
      const workingHoursParaEl = document.createElement("p");
      const openCloseImgEl = document.createElement("img");
      const phoneParaEl = document.createElement("p");
      restaurantDivEl.classList.add("card", "text-center", "restaurant_card");
      nameRestaurantEl.innerText = restaurant.name;
      nameRestaurantEl.classList.add("card-title", "restaurant_card_name");
      addressParaEl.innerText = `Address: ${restaurant.address}`;
      const currentDate = new Date();
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const startWorkingHour = Number(restaurant.workingHours.slice(0, 2));
      const startWorkingMinutes = Number(restaurant.workingHours.slice(4, 6));
      const endWorkingHour = Number(restaurant.workingHours.slice(8, 10));
      const endWorkingMinutes = Number(restaurant.workingHours.slice(11));
      if (
        hour < startWorkingHour ||
        hour > endWorkingHour ||
        (hour === startWorkingHour && startWorkingMinutes > minutes) ||
        (hour === endWorkingHour && endWorkingMinutes <= minutes)
      ) {
        openCloseImgEl.src = `${icons.close}.png`;
      }
      if (
        (hour > startWorkingHour && hour < endWorkingHour) ||
        (hour === startWorkingHour && startWorkingMinutes <= minutes) ||
        (hour === endWorkingHour && endWorkingMinutes > minutes)
      ) {
        openCloseImgEl.src = `${icons.open}.png`;
      }
      workingHoursParaEl.innerText = `Working Hours: ${restaurant.workingHours}`;
      phoneParaEl.innerText = `Phone: ${restaurant.phone}`;
      restaurantBodyDivEl.classList.add("card-body");
      workingHoursDivEl.append(workingHoursParaEl, openCloseImgEl);
      restaurantBodyDivEl.append(addressParaEl, phoneParaEl, workingHoursDivEl);
      restaurantDivEl.append(nameRestaurantEl, restaurantBodyDivEl);
      return restaurantDivEl;
    });
  }
}
export default new RestaurantsView();
