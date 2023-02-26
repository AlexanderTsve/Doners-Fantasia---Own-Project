import Views from "./Views.js";
import * as icons from "../../img/icons/*.png";
import { Feature, Map, Overlay, View } from "ol/index.js";
import { OSM, Vector as VectorSource } from "ol/source.js";
import { Point } from "ol/geom.js";
import TileLayer from "ol/layer/Tile.js";
import { Vector as VectorLayer } from "ol/layer.js";
import { fromLonLat, toLonLat } from "ol/proj.js";
import { Icon, Style } from "ol/style.js";
class RestaurantsView extends Views {
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
  generateMap(restaurants) {
    const { lat, lon } = restaurants[5].geoLocation;
    let centeredLocation = fromLonLat([lon, lat]);
    const locations = restaurants.map((restaurant) => restaurant.geoLocation);
    const features = locations.map((location) => {
      const { lat, lon } = location;
      const currentRestaurantLocation = fromLonLat([lon, lat]);
      const point = new Point(currentRestaurantLocation);
      const iconStyle = new Style({
        image: new Icon({
          pointer: "cursor",
          anchor: [0.5, 46],
          anchorXUnits: "fraction",
          anchorYUnits: "pixels",
          src: `${icons.marker}.png`,
        }),
      });
      const iconFeature = new Feature({
        geometry: point,
      });
      iconFeature.setStyle(iconStyle);
      return iconFeature;
    });
    const map = new Map({
      view: new View({
        center: centeredLocation,
        zoom: 6.85,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: new VectorSource({
            features: features,
          }),
        }),
      ],
      target: "restaurants-map-pane",
    });
    map.on("pointermove", (e) => {
      const pixel = map.getEventPixel(e.originalEvent);
      const hit = map.hasFeatureAtPixel(pixel);
      map.getViewport().style.cursor = hit ? "pointer" : "";
    });
    map.on("click", (e) => {
      const pixel = map.getEventPixel(e.originalEvent);
      const hit = map.hasFeatureAtPixel(pixel);
      if (hit) {
        const coords = toLonLat(e.coordinate);
        const lat = coords[1];
        const lon = coords[0];
        console.log(lat, lon);
        centeredLocation = fromLonLat([lon, lat]);
        map.getView().setCenter(centeredLocation);
        map.getView().setZoom(map.getView().getZoom() + 1);
      }
    });
  }
  _generateMarkupArr(arrOfRestaurants) {
    return arrOfRestaurants.map((restaurant) => {
      const restaurantDivEl = document.createElement("div");
      const nameRestaurantEl = document.createElement("h6");
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
      const weekDay = currentDate.getDay();
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const workDays = restaurant.workDays;
      const startWorkingHour = Number(restaurant.workingHours.slice(0, 2));
      const startWorkingMinutes = Number(restaurant.workingHours.slice(4, 6));
      const endWorkingHour = Number(restaurant.workingHours.slice(8, 10));
      const endWorkingMinutes = Number(restaurant.workingHours.slice(11));
      const isWorkDay = workDays.some((day) => day === weekDay);
      if (
        !isWorkDay ||
        hour < startWorkingHour ||
        hour > endWorkingHour ||
        (hour === startWorkingHour && startWorkingMinutes > minutes) ||
        (hour === endWorkingHour && endWorkingMinutes <= minutes)
      ) {
        openCloseImgEl.src = `${icons.close}.png`;
      }
      if (
        isWorkDay &&
        ((hour > startWorkingHour && hour < endWorkingHour) ||
          (hour === startWorkingHour && startWorkingMinutes <= minutes) ||
          (hour === endWorkingHour && endWorkingMinutes > minutes))
      ) {
        openCloseImgEl.src = `${icons.open}.png`;
      }
      workingHoursParaEl.innerText = `Working Hours: ${restaurant.workingHours}, Mon-Sat`;
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
