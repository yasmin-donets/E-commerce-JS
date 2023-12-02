// global imports
import './toggleSidebar.js';
import './cart/cartToggle.js';
// specific imports
import { getElement } from './utils.js';
import fetchProducts from './fetchproducts.js';
import { setupStore, store } from './store.js';
import display from './displayProducts.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
    const featured = store.filter((product) => product.id <= 3);
    display(featured, getElement('.featured-center'));
  }
};
window.addEventListener('DOMContentLoaded', init);
