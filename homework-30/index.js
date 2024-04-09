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

const formDataToObject = formData => Object.fromEntries(formData.entries());

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
    console.log("fock")

    // showModalInfo(formDataToObject(formData));
  });
}

function showModalInfo(data) {
  const modal = document.getElementById("product-modal");
  const modalBody = document.getElementsByClassName("app-modal-body")[0];
  const modalClose = document.getElementsByClassName("app-modal__close")[0];
  const productInfo = document.getElementsByClassName("product-information")[0];
  const lsOrders = window.localStorage.getItem("orders");
  const lsOrdersParse = JSON.parse(lsOrders);
  const ordersData = lsOrders ? lsOrdersParse : [];

  if (lsOrders) {
    ordersData.push(
      {
        orderId: lsOrdersParse.length + 1,
        date: new Date().toLocaleString().split(",")[0]
      }
    );
  } else {
    ordersData.push(
      {
        orderId: 1,
        date: new Date().toLocaleString().split(",")[0]
      }
    );
  }

  window.localStorage.setItem("orders", JSON.stringify(ordersData));

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

const showMyOrders = () => {
  const button = document.getElementById("my-orders");
  const orderList = document.getElementById("orders-list");
  const categoriesList = document.getElementsByClassName("category-list")[0];

  button.addEventListener("click", function() {
    orderList.classList.toggle("is-active");
    categoriesList.classList.toggle("is-hidden");
  })
}

document.addEventListener("DOMContentLoaded", () => {
  displayCategories();
  showMyOrders();
});