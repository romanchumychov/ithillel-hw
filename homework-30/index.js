import { productsList } from "./productsList.js";

const cartWrapper = document.querySelector(".cart-product-info");
const productCardsWrapper = document.getElementById("product-cards");
const orderForm = document.getElementById("order-form");
const VISIBLE = "is-visible";

const showForm = () => {
  orderForm.classList.add(VISIBLE);
};

const hideForm = () => {
  orderForm.classList.remove(VISIBLE);
};

export const formDataToObject = formData => Object.fromEntries(formData.entries());

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
      hideForm();
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

  const productCards = [...document.querySelectorAll(".product-card")];

  productCards.forEach(card => {
    card.addEventListener("click", function() {
      renderProductInfo(this, target, productCards);
    });
  });
};

const renderProductInfo = (that, card, productCards) => {
  const productIndex = productCards.indexOf(that);
  const currentProduct = productsList[card.dataset.product].list[productIndex];
  const { title, storage, color } = currentProduct;
  const ACTION_BUTTON_ID = "action-btn";

  hideForm();
  cartWrapper.innerHTML = "";

  cartWrapper.innerHTML = `
    <div class="product-information">
      <h2>Інформація про продукт:</h2>
      <p>${title}</p>
      <p>Storage: ${storage}</p>
      <p>Color: ${color}</p>
      <button type="button" id="${ACTION_BUTTON_ID}">Buy</button>
    </div>
  `;

  document.getElementById(ACTION_BUTTON_ID).addEventListener("click", () => {
    showForm();
    formAction();
  });
};

function formAction() {
  if (!orderForm) return;

  orderForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    showModalInfo(formDataToObject(formData));
  });
}

function showModalInfo(data) {
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementsByClassName("app-modal-body")[0];
  const modalClose = document.getElementsByClassName("app-modal__close")[0];
  const productInfo = document.getElementsByClassName("product-information")[0];

  modalBody.innerHTML = `
    ${productInfo.innerHTML}
    <h2>Ваші дані для доставки:</h2>
    <p>ПІБ: <strong>${data["full-name"]}</strong></p>
    <p>Місто: <strong>${data.city}</strong></p>
    <p>Склад Нової пошти: <strong>${data["nova-post"]}</strong></p>
    <p>Спосіб оплати: <strong>${data["payment-method"]}</strong></p>
    <p>Кількість: <strong>${data.quantity}</strong></p>
    ${data.comment ? `<div><strong>Коментар: ${data.comment}</strong></div>` : ""}
    <p>ДЯКУЄМО!</p>
  `;

  modal.classList.add(VISIBLE);

  modalClose.addEventListener("click", () => {
    modal.classList.remove(VISIBLE);
    hideForm();
    cartWrapper.innerHTML = "";
    productCardsWrapper.innerHTML = "";
  })
}

document.addEventListener("DOMContentLoaded", () => {
  displayCategories();
});