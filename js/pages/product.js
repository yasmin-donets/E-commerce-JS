// global imports
import '../toggleSidebar.js';
import '../cart/cartToggle.js';
import '../cart/setupCart.js';

// specific imports
import { addToCart } from '../cart/setupCart.js';
import { getElement, singleProductUrl } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');

const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

window.addEventListener('DOMContentLoaded', async function () {
  //const urlID = window.location.search;
	const urlParams = new URLSearchParams(window.location.search);
  const idParameter = urlParams.get('id');
  // Check if idParameter is not null and only contains numbers
  const urlID =
    idParameter && /^\d+$/.test(idParameter) ? parseInt(idParameter) : null;

  try {
		const fullUrl = `${singleProductUrl}${urlID}`;
    const response = await fetch(fullUrl);
		console.log(fullUrl);
    if (response.status >= 200 && response.status <= 299) {
      const product = await response.json();
      console.log(product);
      // grab data
      const { id, title, category, description, image, price, rating } =
        product;
      productID = id;
      const { rate, count } = rating;

      // set values
      document.title = `${title.toUpperCase()} | Store`;
      pageTitleDOM.textContent = `Home / ${title}`;
      imgDOM.src = image;
      titleDOM.textContent = title;
      companyDOM.textContent = `${category}`;
      priceDOM.textContent = `$${price}`;
      descDOM.textContent = description;
      const filledStars = Math.floor(rate);
      // Dynamically add filled stars to the rating container
      const ratingContainer = document.getElementById('productRating');

      for (let i = 0; i < filledStars; i++) {
        const star = document.createElement('span');
        star.innerHTML = '★';
        ratingContainer.appendChild(star);
      }
      const ratedParag = getElement('.rated-count');
      ratedParag.textContent = count;
    } else {
      console.log(response.status, response.statusText);
      centerDOM.innerHTML = `
    <div>
    <h3 class="error">sorry, something went wrong</h3>
    <a href="index.html" class="btn">back home</a>
    </div> 
     `;
    }
  } catch (error) {
    console.log(error);
  }

  loading.style.display = 'none';
});

cartBtn.addEventListener('click', function () {
  addToCart(productID);
});
