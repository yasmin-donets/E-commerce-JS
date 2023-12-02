import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem('store');
const setupStore = (products) => {
  store = products.map((product) => {
    const { id, title, price, image, category } = product;
    return { id, title, price, image, category };
  });
  setStorageItem('store', store);
};

const findProduct = () => {};
export { store, setupStore, findProduct };
