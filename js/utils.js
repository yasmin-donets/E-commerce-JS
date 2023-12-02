const allProductsUrl = 'https://fakestoreapi.com/products';
const singleProductUrl = 'https://fakestoreapi.com/products/1';
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

const formatPrice = () => {};

const getStorageItem = () => {};
const setStorageItem = () => {};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
