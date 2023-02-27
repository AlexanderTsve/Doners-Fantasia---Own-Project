export const URL_ARR = [
  "menu-page",
  "details-page",
  "restaurants-page",
  "order-page",
  "order-history-page",
  "cart-page",
  "news-page",
  "feedback-page",
  "error-page",
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
export const USER_HISTORY_URL =
  "https://react-http-requests-81638-default-rtdb.europe-west1.firebasedatabase.app/doners-users/user/orderHistory.json";
export const RES_PER_PAGE = 8;
export const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const REGEX_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
export const REGEX_NAME = /^[a-zA-Z]+ [a-zA-Z]+$/;
export const REGEX_PHONE = /(\+)?(359|0)8[789]\d{1}(|-| )\d{3}(|-| )\d{3}/;
export const REGISTRATION_AUTH_ERROR =
  "Please, check if the email has been used already for registration in the site or try again later!";
export const LOGIN_AUTH_ERROR =
  "Please, check the entered email/password, and try again with valid credentials!";
export const MIN_QTY_OF_ITEM = 1;
export const NO_PRODUCTS_IN_CART_MSG = "No products in the cart!";
export const FILL_IN_VALID_EMAIL_MSG = "Fill in a valid email address!";
export const FILL_IN_FEEDBACK_FIELD_MSG = "Fill in the feedback field!";
export const FILL_IN_VALID_PHONE_MSG =
  "Fill in a valid gsm number - starting with +3598... or 08...!";
export const FILL_IN_VALID_NAMES = "Fill in valid names!";
export const FILL_IN_VALID_ADDRESS = "Fill in valid address!";
export const SUCCESSFUL_REG_MSG = "Your registration has been successful!";
export const PRODUCT_ITEM = 1;
export const GENERAL_ERR_MSG_PROBLEM_WITH_DATA =
  "Problem with the server! Please, try again later!";
export const NO_PREVIOUS_ORDERS_MSG =
  "There are no previous orders from this profile!";
export const LOGIN_INPUT_DATA_ERROR_MSG =
  "Please, fill in all of the fields with correct data!";
