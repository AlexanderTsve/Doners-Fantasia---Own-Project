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
import { controlBeforeUnloadEvent } from "./Controller/controlBeforeUnloadEvent.js";
import * as controlRouting from "./Controller/controlRouting.js";
import * as controlErrorParas from "./Controller/controlErrorParas.js";
import * as controlToggleRegistrationModal from "./Controller/controlToggleRegistrationModal.js";
import * as controlToggleLoginModal from "./Controller/controlToggleLoginModal.js";
import * as bootstrap from "bootstrap";
import urlView from "./Views/urlView.js";
import productsView from "./Views/productsView.js";
import searchView from "./Views/searchView.js";
import dropdownFilterView from "./Views/dropdownFilterView.js";
import paginationView from "./Views/paginationView.js";
import feedbackPageView from "./Views/feedbackPageView.js";
import registrationView from "./Views/registrationView.js";
import loginView from "./Views/loginView.js";
import logoutView from "./Views/logoutView.js";
import navigationView from "./Views/navigationView.js";
import cartPageView from "./Views/cartPageView.js";
// import { v4 as uuidv4 } from "uuid";
// const DATA = [
//   {
//     category: "Doner",
//     name: "Doner Roller",
//     price: 6.99,
//     weight: 500,
//     imgIdentifier: "roller",
//     productId: uuidv4(),
//     content: [
//       "Crispy chicken tenders",
//       "Iceberg",
//       "Tomatoes",
//       "Mayonnaise",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },

//   {
//     category: "Doner",
//     name: "Chicken Doner Light",
//     price: 4.4,
//     weight: 250,
//     imgIdentifier: "chicken_light",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "Cabbage",
//       "Lettuce",
//       "Tomatoes",
//       "Cucumbers",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Classic",
//     price: 6.2,
//     weight: 350,
//     imgIdentifier: "chicken_classic",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Tomatoes",
//       "Pickles",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Grand",
//     price: 7.4,
//     weight: 500,
//     imgIdentifier: "chicken_grand",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Tomatoes",
//       "Pickles",
//       "Garlic sauce",
//       "Pita bread GRAND",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Doner box",
//     price: 6.99,
//     weight: 400,
//     imgIdentifier: "box",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Tomatoes",
//       "Cucumber",
//       "Lettuce",
//       "Red cabbage",
//       "Pickles",
//       "Garlic sauce",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Portion",
//     price: 6.99,
//     weight: 600,
//     imgIdentifier: "chicken_doner_portion",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Tomatoes",
//       "Pickles",
//       "Lettuce",
//       "Cabbage",
//       "Pickles",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Chicken Doner Portion (with rice)",
//     price: 8.99,
//     weight: 700,
//     imgIdentifier: "chicken_doner_portion_with_rice",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "Rice with vegetables",
//       "Tomatoes",
//       "Pickles",
//       "Lettuce",
//       "Cabbage",
//       "Pickles",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Veggie Doner Classic",
//     price: 4.9,
//     weight: 350,
//     imgIdentifier: "veggie_doner",
//     productId: uuidv4(),
//     content: [
//       "3 x falafel",
//       "French fries",
//       "Tomatoes",
//       "Cucumber",
//       "Cabbage",
//       "Lettuce",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Light",
//     price: 4.6,
//     weight: 250,
//     imgIdentifier: "beef_doner_light",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Tomatoes",
//       "Pickles",
//       "Red onion",
//       "Parsley",
//       "Milk sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Classic",
//     price: 6.4,
//     weight: 350,
//     imgIdentifier: "beef_doner_classic",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Tomatoes",
//       "Pickles",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Grand",
//     price: 7.6,
//     weight: 500,
//     imgIdentifier: "beef_doner_grand",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Tomatoes",
//       "Pickles",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread GRAND",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Portion",
//     price: 7.49,
//     weight: 600,
//     imgIdentifier: "beef_doner_portion",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Lettuce",
//       "Tomatoes",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Portion (with rice)",
//     price: 9.2,
//     weight: 700,
//     imgIdentifier: "beef_doner_portion_with_rice",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Rice",
//       "Lettuce",
//       "Tomatoes",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Beef Doner Portion (with fries)",
//     price: 10.2,
//     weight: 700,
//     imgIdentifier: "beef_doner_portion_with_fries",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Fries",
//       "Lettuce",
//       "Tomatoes",
//       "Red onion",
//       "Parsley",
//       "Garlic sauce",
//       "Pita bread CLASSIC",
//     ],
//   },
//   {
//     category: "Doner",
//     name: "Sudju",
//     price: 4.9,
//     weight: 400,
//     imgIdentifier: "sudju",
//     productId: uuidv4(),
//     content: [
//       "Chicken mince - spicy",
//       "Fries",
//       "Iceberg",
//       "Tomatoes",
//       "Pickles",
//       "Ketchup",
//       "Garlic sauce",
//       "Arabic bread CLASSIC",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Burger with Chicken Doner Meat (with fries)",
//     price: 9.49,
//     weight: 350,
//     imgIdentifier: "burger_chicken_doner_meat_with_fries",
//     productId: uuidv4(),
//     content: [
//       "Chicken doner meat",
//       "French fries",
//       "Cabbage",
//       "Lettuce",
//       "Pickles",
//       "Tomatoes",
//       "Garlic sauce",
//       "Ketchup",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Burger with Beef Doner Meat (with fries)",
//     price: 9.99,
//     weight: 350,
//     imgIdentifier: "burger_beef_doner_meat_with_fries",
//     productId: uuidv4(),
//     content: [
//       "Beef doner meat",
//       "Iceberg",
//       "Fresh red onion",
//       "Lettuce",
//       "Pickles",
//       "Tomatoes",
//       "Garlic sauce",
//       "Mayonnaise",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Hard Burger",
//     price: 9.49,
//     weight: 350,
//     imgIdentifier: "hard_burger",
//     productId: uuidv4(),
//     content: ["Chicken fillet", "Tomatoes", "Iceberg", "Mayonnaise"],
//   },
//   {
//     category: "Burger",
//     name: "Beef Burger",
//     price: 8.99,
//     weight: 350,
//     imgIdentifier: "beef_burger",
//     productId: uuidv4(),
//     content: [
//       "Beef patty",
//       "Iceberg",
//       "Fresh red onion",
//       "Pickles",
//       "Tomatoes",
//       "Garlic sauce",
//       "Mayonnaise",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Chicken Burger Double",
//     price: 11.19,
//     weight: 450,
//     imgIdentifier: "chicken_burger_double",
//     productId: uuidv4(),
//     content: [
//       "2 x Chicken patty",
//       "Fries",
//       "Lettuce",
//       "Cabbage",
//       "Cucumber",
//       "Tomatoes",
//       "Garlic sauce",
//       "Ketchup",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Chicken Burger Classic",
//     price: 9.99,
//     weight: 350,
//     imgIdentifier: "chicken_burger_classic",
//     productId: uuidv4(),
//     content: [
//       "Chicken patty",
//       "Fries",
//       "Lettuce",
//       "Cabbage",
//       "Cucumber",
//       "Tomatoes",
//       "Garlic sauce",
//       "Ketchup",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Veggie Burger",
//     price: 4.49,
//     weight: 350,
//     imgIdentifier: "veggie_burger",
//     productId: uuidv4(),
//     content: [
//       "Fried egg",
//       "Cheese toast",
//       "Fries",
//       "Lettuce",
//       "Cabbage",
//       "Cucumber",
//       "Tomatoes",
//       "Pickles",
//       "Garlic sauce",
//       "Ketchup",
//       "Sesame bun",
//     ],
//   },
//   {
//     category: "Burger",
//     name: "Pop Burger",
//     price: 5.99,
//     weight: 200,
//     imgIdentifier: "pop_burger",
//     productId: uuidv4(),
//     content: [
//       "Chicken patty",
//       "Pickles",
//       "Baked onion",
//       "Garlic sauce",
//       "Ketchup",
//       "Bun",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Margarita",
//     price: 5.99,
//     weight: 500,
//     imgIdentifier: "margarita",
//     productId: uuidv4(),
//     content: ["Cheese", "Tomato sauce", "Tomatoes", "Savory"],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Assorti",
//     price: 11.99,
//     weight: 500,
//     imgIdentifier: "assorti",
//     productId: uuidv4(),
//     content: [
//       "Beef Sausage",
//       "Beef Salami",
//       "Chicken fillet",
//       "Cheese",
//       "Melted cheese",
//       "Mushrooms",
//       "Chopped tomatoes",
//       "Olives",
//       "Tomato sauce",
//       "Savory",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Hot-dog",
//     price: 8.99,
//     weight: 500,
//     imgIdentifier: "hot-dog",
//     productId: uuidv4(),
//     content: [
//       "Chicken Hot-Dog sausage",
//       "Cheese",
//       "Melted cheese",
//       "Tomato sauce",
//       "Savory",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Pepperoni",
//     price: 12.99,
//     weight: 500,
//     imgIdentifier: "peperoni",
//     productId: uuidv4(),
//     content: ["Pepperoni", "Cheese", "Melted cheese", "Tomato sauce", "Savory"],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Carbonarra",
//     price: 10.99,
//     weight: 500,
//     imgIdentifier: "carbonarra",
//     productId: uuidv4(),
//     content: [
//       "Chicken Ham",
//       "Cheese",
//       "Melted cheese",
//       "Tomato sauce",
//       "Savory",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Polo",
//     price: 11.99,
//     weight: 500,
//     imgIdentifier: "polo",
//     productId: uuidv4(),
//     content: [
//       "Chicken Ham",
//       "Corn",
//       "Pickles",
//       "Peppers",
//       "Cheese",
//       "Tomato sauce",
//       "Savory",
//     ],
//   },
//   {
//     category: "Pizza",
//     name: "Pizza Caprichoza",
//     price: 9.99,
//     weight: 500,
//     imgIdentifier: "caprichoza",
//     productId: uuidv4(),
//     content: ["Chicken fillet", "Cheese", "Tomato sauce", "Savory"],
//   },
//   {
//     category: "Drink",
//     name: "Pepsi (2l)",
//     price: 3.99,
//     imgIdentifier: "pepsi_2l",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Pepsi (500ml)",
//     price: 2.19,
//     imgIdentifier: "pepsi_500ml",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Mirinda (500ml)",
//     price: 2.19,
//     imgIdentifier: "mirinda_500ml",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Mirinda (2l)",
//     price: 3.99,
//     imgIdentifier: "mirinda_2l",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Ayran Fantasia (500ml)",
//     price: 2.19,
//     imgIdentifier: "ayryan_500ml",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Ayran Fantasia (250ml)",
//     price: 1.5,
//     imgIdentifier: "ayryan_250ml",
//     productId: uuidv4(),
//     content: [],
//   },
//   {
//     category: "Drink",
//     name: "Mineral Water (500ml)",
//     price: 1.2,
//     imgIdentifier: "min_water_500ml",
//     productId: uuidv4(),
//     content: [],
//   },
// ];

// const sendProducts = async () => {
//   const sendData = await fetch(
//     "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-products.json",
//     {
//       method: "POST",
//       body: JSON.stringify(DATA),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   await sendData();
// };
// sendProducts();

// ---------------
// const restaurants = [
//   {
//     name: "Sofia Center",
//     address: "bul. Aleksandar Stamboliyski 41",
//     geoLocation: { lat: 42.69729077097609, lon: 23.317056955920172 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0888 88 88 88",
//   },
//   {
//     name: "Sofia Lyulin",
//     address: "ul. Pancho Vladigerov 21",
//     geoLocation: { lat: 42.713264924349055, lon: 23.24888154242746 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 88 88 88",
//   },
//   {
//     name: "Sofia Mladost",
//     address: "bul. Aleksandar Malinov 78",
//     geoLocation: { lat: 42.63632565792078, lon: 23.36977386941168 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 86 86 86",
//   },
//   {
//     name: "Sofia Pavlovo",
//     address: "ul. Alexander Pushkin 38",
//     geoLocation: { lat: 42.66163252401128, lon: 23.264926969504085 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 83 83 83",
//   },
//   {
//     name: "Plovdiv Trakia",
//     address: "ul. Georgi Danchov 16",
//     geoLocation: { lat: 42.13878058136747, lon: 24.787433525222482 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 84 84 84",
//   },
//   {
//     name: "Plovdiv Center",
//     address: "ul. Ivan Andonov 5",
//     geoLocation: { lat: 42.141660340827904, lon: 24.739933484743627 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 85 85 85",
//   },
//   {
//     name: "Burgas Central Park",
//     address: "ul. Dame Gruev 8",
//     geoLocation: { lat: 42.51408531283424, lon: 27.4501782559161 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 82 82 82",
//   },
//   {
//     name: "Varna Center",
//     address: "ul. General Kolev 3",
//     geoLocation: { lat: 43.20793873871141, lon: 27.910629969424402 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 81 81 81",
//   },
//   {
//     name: "Varna Planet Mall",
//     address: "bul. Slivnitsa 185",
//     geoLocation: { lat: 43.22703005778861, lon: 27.875800015313523 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 81 81 81",
//   },
//   {
//     name: "Varna Levski",
//     address: "ul. Dimitar Ikonomov 36",
//     geoLocation: { lat: 43.22060153604811, lon: 27.936078298260362 },
//     workingHours: "10.00 - 21.30",
//     workDays: [1, 2, 3, 4, 5, 6],
//     phone: "0887 80 80 80",
//   },
// ];
// const sendRestaurants = async () => {
//   const sendData = await fetch(
//     "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-restaurants.json",
//     {
//       method: "POST",
//       body: JSON.stringify(restaurants),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   await sendData();
// };
// sendRestaurants();

// ---------------
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
  urlView.addBeforeUnloadHandler(controlBeforeUnloadEvent);
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
  productsView.renderCartTooltip(getChangedCart());
  cartPageView.render(getChangedCart());
  controlIfUserIsLogged();
};
init();
