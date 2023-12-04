import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
	
  const form = getElement('.input-form');
  const input = getElement('.search-input');
  form.addEventListener('keyup', function (e) {
    e.preventDefault();
    const value = input.value.toLowerCase();
    if (value) {
      const newStore = store.filter((product) => {
        let { title } = product;
        title = title.toLowerCase();
        if (title.includes(value)) {
          return product;
        }
      });
      display(newStore, getElement('.products-container'), true);
      if (newStore.length < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">
       sorry, no products matched your search
       </h3>`;
      }
    } else {
      display(store, getElement('.products-container'), true);
    }
  });
};
export default setupSearch;
