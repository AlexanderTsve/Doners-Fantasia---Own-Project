export const validateAddToCartInput = (obj) => {
  return !obj.qty || obj.qty <= 0 ? false : true;
};
