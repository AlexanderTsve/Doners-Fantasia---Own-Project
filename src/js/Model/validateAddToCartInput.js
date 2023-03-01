/**
 * Validates whether the product object quantity is over zero and whether the product object exists.
 * @param {object} obj the product object.
 * @returns {boolean} if both conditions are fulfilled.
 */
export const validateAddToCartInput = (obj) => {
  return !obj.qty || obj.qty <= 0 ? false : true;
};
