// global imports
import './toggleSidebar.js';
import './cart/cartToggle.js';
// specific imports
import { getElement } from './utils.js';
import fetchProducts from './fetchproducts.js';

const init = async () => {
	const products = await fetchProducts();
	console.log(products);
};
window.addEventListener('DOMContentLoaded', init);
