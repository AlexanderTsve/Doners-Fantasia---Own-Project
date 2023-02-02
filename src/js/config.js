export const URL_ARR = [
  "/menu-page",
  "/details-page",
  "/restaurants-page",
  "/order-page",
  "/order-history-page",
  "/cart-page",
  "/news-page",
  "/feedback-page",
  "/error-page",
];
export const GET_PRODUCTS_URL =
  "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-products.json";
export const GET_RESTAURANTS_URL =
  "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-restaurants.json";
export const POST_FEEDBACKS_URL =
  "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-feedbacks.json";
export const POST_REGISTRATION_AUTH_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD6KelOIQO1vqaFenmxrzOrsKoNgeThnXs";
export const USERS_URL =
  "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-users.json";
export const POST_LOGIN_URL =
  "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6KelOIQO1vqaFenmxrzOrsKoNgeThnXs";
export const RES_PER_PAGE = 10;
export const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
export const REGEX_NAME = /^[a-zA-Z]+ [a-zA-Z]+$/;
export const REGEX_PHONE = /(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/;
export const REGISTRATION_AUTH_ERROR =
  "Please, check if the email has been used already for registration in the site or try again later!";
export const LOGIN_AUTH_ERROR =
  "Please, check the entered email/password, and try again with valid credentials!";
