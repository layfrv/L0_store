import { renderCards } from "./availableProductCard.js";
import { calculateTotal } from "./counter.js";
import { renderUnavailableCards } from "./unavailableProductCard.js";
import { changeTextOrderButton } from "./utils.js";

let selectAllBtn = document.getElementById("checkbox_select-all");

export function renderShoppingCartValue() {
  const shoppingCartValues = document.querySelectorAll(".basket-value");

  let availableItems = JSON.parse(localStorage.getItem("availableItems"));
  let itemsLength = availableItems
    .filter((item) => item.isSelected)
    .reduce((acc, item) => item.amount + acc, 0);

  shoppingCartValues.forEach((element) => {
    element.textContent = itemsLength;
    element.classList.toggle("hidden", itemsLength === 0);
  });
}

export function selectItem(id) {
  const items = JSON.parse(localStorage.getItem("availableItems"));

  let itemIndex = items.findIndex((element) => element.id === id);
  let item = items[itemIndex];
  item.isSelected = !item.isSelected;
  items[itemIndex] = item;

  let isAllSelected = items.every((el) => el.isSelected);
  if (isAllSelected) {
    selectAllBtn.checked = true;
  } else {
    selectAllBtn.checked = false;
  }

  localStorage.setItem("availableItems", JSON.stringify(items));
  calculateTotal();
  renderShoppingCartValue();
  changeTextOrderButton();
}

export function selectAllToggle() {
  let items = JSON.parse(localStorage.getItem("availableItems"));

  let isAllChecked = selectAllBtn.checked;
  let cardsCheckbox = document.querySelectorAll(".checkbox_input_card");

  const newItems = items.map((element) => {
    if (isAllChecked) {
      cardsCheckbox.forEach((checkbox) => (checkbox.checked = true));
      element.isSelected = true;
    } else {
      cardsCheckbox.forEach((checkbox) => (checkbox.checked = false));
      element.isSelected = false;
    }
    return element;
  });

  localStorage.setItem("availableItems", JSON.stringify(newItems));
  calculateTotal();
  renderShoppingCartValue();
  changeTextOrderButton();
}

export function favoriteItemHandler(id) {
  let favoritesItems = JSON.parse(localStorage.getItem("favoritesItems"));
  let availableItems = JSON.parse(localStorage.getItem("availableItems"));
  let unavailableItems = JSON.parse(localStorage.getItem("unavailableItems"));
  let items = [...availableItems, ...unavailableItems];

  let productItem = items.find((el) => el.id === id);
  let isFavorite = favoritesItems.find((el) => el.id === id);

  if (isFavorite) {
    let filtered = favoritesItems.filter((element) => element.id !== id);
    localStorage.setItem("favoritesItems", JSON.stringify(filtered));
  } else {
    favoritesItems.push(productItem);
    localStorage.setItem("favoritesItems", JSON.stringify(favoritesItems));
  }
}

export function deleteItem(id) {
  let availableItems = JSON.parse(localStorage.getItem("availableItems"));
  let unavailableItems = JSON.parse(localStorage.getItem("unavailableItems"));
  let items = [...availableItems, ...unavailableItems];

  if (items.length === 1) {
    let itemsList = document.querySelector(".main__content__itemsList");
    itemsList.innerHTML = `<h2>В корзине нет товаров</h2>`;
  }

  let productItem = items.find((element) => element.id === id);
  let isAvailableProduct = productItem.availableItems > 0;

  if (isAvailableProduct) {
    let newAvailableItems = availableItems.filter((item) => item.id !== id);
    localStorage.setItem("availableItems", JSON.stringify(newAvailableItems));
    renderCards(newAvailableItems);
  }
  if (!isAvailableProduct) {
    let newUnavailableItems = unavailableItems.filter((item) => item.id !== id);
    localStorage.setItem(
      "unavailableItems",
      JSON.stringify(newUnavailableItems)
    );
    createUnavailableHeader(newUnavailableItems.length);
    renderUnavailableCards(newUnavailableItems);
  }

  renderShoppingCartValue();
  calculateTotal();
  changeTextOrderButton();
}

export function createUnavailableHeader(amount) {
  const unavailableHeader = document.getElementById("unavailable-amount-items");

  let firstWord = "";
  let secondWord = "";

  if (amount === 0) {
    firstWord = "Отсутствует";
    secondWord = "товаров";
  } else if (amount === 1) {
    firstWord = "Отсутствует";
    secondWord = "товар";
  } else if (amount <= 4) {
    firstWord = "Отсутствуют";
    secondWord = "товара";
  } else {
    firstWord = "Отсутствуют";
    secondWord = "товаров";
  }

  unavailableHeader.innerHTML = `${firstWord} · ${amount} ${secondWord}`;
}

export function createItemsCountString(amount) {
  let word = "";
  if (amount === 0) {
    word = "товаров";
  } else if (amount === 1) {
    word = "товар";
  } else if (amount <= 4) {
    word = "товара";
  } else {
    word = "товаров";
  }
  return word;
}
