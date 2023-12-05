import { openCart } from './cartToggle.js';
import { getStorageItem, setStorageItem, getElement } from '../utils.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart');

export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id);
  if (!item) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    // add item to the dom 
    console.log(cart);
    addToCartDOM(product);
  } else {
    // Update values
  }
  // More
  openCart();
};

const initSetupCart = () => {
  console.log(cart);
};
initSetupCart();
