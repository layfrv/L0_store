import products from "../assets/products.json" assert { type: "json" };
import cards from "../assets/cards.json" assert { type: "json" };
import clientAddresses from "../assets/clientAddresses.json" assert { type: "json" };
import { renderCards } from "./availableProductCard.js";
import { renderUnavailableCards } from "./unavailableProductCard.js";
import {
  createUnavailableHeader,
  selectAllToggle,
} from "./productCardUtils.js";
import { renderShoppingCartValue } from "./productCardUtils.js";

export const shoppingCart = products;
export const favoritesItems = [];
const selectedCard = cards[0];
const selectedAddress = clientAddresses[0];

const availableItems = shoppingCart.filter((item) => item.availableItems >= 1);
const newAvailableItems = availableItems.map((item) => ({
  ...item,
  amount: 1,
  isSelected: false,
}));
const unavailableItems = shoppingCart.filter((item) => item.availableItems < 1);

localStorage.setItem("availableItems", JSON.stringify(newAvailableItems));
localStorage.setItem("unavailableItems", JSON.stringify(unavailableItems));
localStorage.setItem("favoritesItems", JSON.stringify(favoritesItems));
localStorage.setItem("selectedPaymentCard", JSON.stringify(selectedCard));
localStorage.setItem("deliveryAddress", JSON.stringify(selectedAddress));

const selectAllBtn = document.getElementById("checkbox_select-all");
selectAllBtn.addEventListener("click", () => {
  selectAllToggle();
});

renderCards(newAvailableItems);
createUnavailableHeader(unavailableItems.length);
renderUnavailableCards(unavailableItems);
renderShoppingCartValue();
