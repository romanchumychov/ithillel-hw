import { productsList } from "./productsList.js";

const cartWrapper = document.getElementById("product-cart");
const productCardsWrapper = document.getElementById("product-cards");

const displayCategories = () => {
  const categoryList = document.querySelector(".category-list");

  for (let product in productsList) {
    categoryList.innerHTML += `
      <li class="products-list__item">
          <button data-product="${product}" type="button">${productsList[product].categoryName}</button>
      </li>
    `;
  }

  document.querySelectorAll(".products-list__item button").forEach(button => {
    button.addEventListener("click",  e => {
      renderListOfCategoryCards(e);
      cartWrapper.innerHTML = ""
    });
  });
}

const renderListOfCategoryCards = e => {
  const { target } = e;

  productCardsWrapper.innerHTML = "";

  productsList[target.dataset.product].list.forEach(item => {
    productCardsWrapper.innerHTML += `
        <div class="product-card">
            <div class="product-card__title">${item.title}</div>
        </div>
      `;
  });

  const productCards = Array.from(document.querySelectorAll(".product-card"));

  productCards.forEach(card => {
    card.addEventListener("click", (e) => {
      renderProductInfo(e, target, productCards);
    });
  });
};

const renderProductInfo = (e, target, productCards) => {
  const productIndex = productCards.indexOf(e.target);
  const currentProduct = productsList[target.dataset.product].list[productIndex];
  const { title, storage, color } = currentProduct;
  const ACTION_BUTTON_ID = "action-btn";

  cartWrapper.innerHTML = "";

  cartWrapper.innerHTML = `
      <h2>Product Information:</h2>
      <p>${title}</p>
      <p>Storage: ${storage}</p>
      <p>Color: ${color}</p>
      <button type="button" id="${ACTION_BUTTON_ID}">Buy</button>
    `;

  document.getElementById(ACTION_BUTTON_ID).addEventListener("click", () => {
    cartWrapper.innerHTML = "";
    productCardsWrapper.innerHTML = "";

    alert(`Thanks! You just buy ${currentProduct.title}`);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  displayCategories();
});