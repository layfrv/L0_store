import {
  createItemsCountString,
  renderShoppingCartValue,
} from "./productCardUtils.js";
import { changeTextOrderButton, createStringNumber } from "./utils.js";

export function printValue(value, element) {
  element.innerHTML = value;
}

export function calculateTotal() {
  const totalPriceElement = document.getElementById("total-price");
  const itemsCountElement = document.getElementById("total-items-count");
  const priceWithoutDiscountElement = document.getElementById(
    "total-price-without-discount"
  );
  const totalDiscountElement = document.getElementById("total-price-discount");

  const shoppingCart = JSON.parse(localStorage.getItem("availableItems"));
  let availableItems = shoppingCart
    .filter((item) => item.isSelected)
    .map((item) => ({
      ...item,
      price: Number(item.price),
      discount: Number(item.discount),
    }));

  if (!availableItems.length) {
    printValue("", totalPriceElement);
    printValue("0 товаров", itemsCountElement);
    printValue("", priceWithoutDiscountElement);
    printValue("", totalDiscountElement);
    changeTextOrderButton();
    return;
  }

  let currency = availableItems[0].currency;
  let itemsCount = availableItems.reduce((acc, item) => acc + item.amount, 0);
  let countWord = createItemsCountString(itemsCount);
  let itemsCountString = `${itemsCount} ${countWord}`;

  const priceWithoutDiscount = availableItems.reduce(
    (total, current) => total + current.price * current.amount,
    0
  );

  let priceWithoutDiscountString = `${createStringNumber(
    priceWithoutDiscount
  )} ${currency}`;

  let totalDiscount = Math.floor(
    availableItems.reduce(
      (total, current) =>
        total + ((current.price * current.discount) / 100) * current.amount,
      0
    )
  );

  let totalPrice = Math.floor(priceWithoutDiscount - totalDiscount);
  let totalPriceString = `${createStringNumber(totalPrice)} ${currency}`;
  let totalDiscountString = `-${createStringNumber(totalDiscount)}`;

  printValue(totalPriceString, totalPriceElement);
  printValue(itemsCountString, itemsCountElement);
  printValue(priceWithoutDiscountString, priceWithoutDiscountElement);
  printValue(totalDiscountString, totalDiscountElement);
}

export function increment(id) {
  let shoppingCart = JSON.parse(localStorage.getItem("availableItems"));
  let itemCheckbox = document.getElementById(`checkbox-card-${id}`);
  itemCheckbox.checked = true;
  let counterValueElement = document.getElementById(`card-counter-value-${id}`);

  let productIndex = shoppingCart.findIndex((el) => el.id === id);
  let product = shoppingCart[productIndex];
  let priceElement = document.getElementById(`card-price-${id}`);
  let withoutDiscountPriceElement = document.getElementById(
    `card-price-discount-${id}`
  );

  let productPrice = parseInt(product.price);
  let discount = parseInt(product.discount);
  let counterValue = product.amount;

  if (counterValue >= 200) {
    return;
  }

  let withoutDiscountPrice = productPrice * (counterValue + 1);
  let totalPrice = Math.floor(
    productPrice * (counterValue + 1) - (withoutDiscountPrice * discount) / 100
  );

  let totalPriceString = createStringNumber(totalPrice);
  let withoutDiscountPriceString = createStringNumber(withoutDiscountPrice);

  printValue(totalPriceString, priceElement);
  printValue(withoutDiscountPriceString, withoutDiscountPriceElement);

  counterValue = counterValue + 1;
  printValue(counterValue, counterValueElement);
  product.amount += 1;
  product.isSelected = true;
  shoppingCart[productIndex] = product;

  localStorage.setItem("availableItems", JSON.stringify(shoppingCart));

  renderShoppingCartValue();
  calculateTotal();
  changeTextOrderButton();
}

export function decrement(id) {
  let shoppingCart = JSON.parse(localStorage.getItem("availableItems"));

  let productIndex = shoppingCart.findIndex((el) => el.id === id);
  let product = shoppingCart[productIndex];
  const priceElement = document.getElementById(`card-price-${id}`);
  const withoutDiscountPriceElement = document.getElementById(
    `card-price-discount-${id}`
  );

  let productPrice = parseInt(product.price);
  let discount = parseInt(product.discount);

  let counterValueElement = document.getElementById(`card-counter-value-${id}`);
  let counterValue = parseInt(counterValueElement.textContent);

  if (counterValue == 1) {
    return;
  }

  let withoutDiscountPrice = productPrice * (counterValue - 1);
  let totalPrice = Math.floor(
    productPrice * (counterValue - 1) - (withoutDiscountPrice * discount) / 100
  );

  let totalPriceString = createStringNumber(totalPrice);
  let withoutDiscountPriceString = createStringNumber(withoutDiscountPrice);

  printValue(totalPriceString, priceElement);
  printValue(withoutDiscountPriceString, withoutDiscountPriceElement);

  counterValue = counterValue - 1;
  printValue(counterValue, counterValueElement);

  product.amount -= 1;
  shoppingCart[productIndex] = product;

  localStorage.setItem("availableItems", JSON.stringify(shoppingCart));

  renderShoppingCartValue();
  calculateTotal();
  changeTextOrderButton();
}
