// global imports

import '../toggleSidebar.js';
import '../cart/cartToggle.js';
import '../cart/setupCart.js';
//  filter imports

import setupCategories from '../filters/categories.js';
import setupSearch from '../filters/search.js';

//specific imports

import { store } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';

const loading = getElement('.page-loading');
display(store, getElement('.products-container'));

// filters 
setupSearch(store);
setupCategories(store);

loading.style.display = 'none';
