import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupPrice = (store) => {
  const priceInput = getElement('.price-filter');
  const priceValue = getElement('.price-value');

  // Find the maximum price in the store
  const maxPrice = Math.max(
    ...store.map((product) => parseFloat(product.price))
  );

  // Set up the filter
  priceInput.value = maxPrice;
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener('input', function () {
    const value = parseFloat(priceInput.value);
    priceValue.textContent = `Value : $${value}`;

    // Normalize values for filtering
    const normalizedValue = value * (maxPrice / 1000);

    let newStore = store.filter(
      (product) => parseFloat(product.price) <= normalizedValue
    );
    display(newStore, getElement('.products-container'), true);

    if (newStore.length < 1) {
      const products = getElement('.products-container');
      products.innerHTML = `<h3 class="filter-error">Sorry, no products matched your search</h3>`;
    }
  });
};


export default setupPrice;
