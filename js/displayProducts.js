const display = (products, element) => {
  element.innerHTML = products.map((product) => {
    const { id, title, image, price } = product;
		return `<article class="product">
          <div class="product-container">
            <img src="${image}" class="product-img img" alt="" />
           
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <footer>
            <p class="product-name">${title}</p>
            <h4 class="product-price">$${price}</h4>
          </footer>
        </article>`;
  }).join('');
};

export default display;
