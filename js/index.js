// global imports
import './toggleSidebar.js';
import './cart/cartToggle.js';
// specific imports
import { getElement } from './utils.js';
import fetchProducts from './fetchproducts.js';
import { setupStore, store } from './store.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    setupStore(products);
		console.log(store);
  }
};
window.addEventListener('DOMContentLoaded', init);
