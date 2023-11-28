// eslint-disable-next-line no-unused-vars
// import { updateCounter } from "./counter.js";
import { decrement, increment } from "./counter.js";
import {
  deleteItem,
  favoriteItemHandler,
  selectItem,
} from "./productCardUtils.js";
import { changeFontSize, createStringNumber } from "./utils.js";

let cardsList = document.getElementById("available-section-cards-list");

export function renderCards(data) {
  cardsList.innerHTML = "";

  data.forEach((card) => {
    const {
      id,
      img,
      title,
      price,
      discount,
      currency,
      color,
      size,
      stock,
      seller,
      sellerInfo,
      availableItems,
      isSelected,
      amount,
    } = card;

    let priceWithoutDiscount = price * amount;
    let totalPrice = Math.floor(
      priceWithoutDiscount - ((price * discount) / 100) * amount
    );
    let totalPriceString = createStringNumber(totalPrice);
    let priceWithoutDiscountString = createStringNumber(priceWithoutDiscount);

    let cardItem = `<div class="available_section__content_card data-product-id="${id}">
        <div class="card-item__description">

        <div class="card-item__description_checkbox-with-image">
          <div class="card-item__description_checkbox">
            <input
              type="checkbox"
              class="checkbox_input checkbox_input_card"
              id="checkbox-card-${id}"
              ${isSelected ? "checked" : ""}
            />
            <label for="checkbox-card-${id}" class="checkbox card-item__checkbox_label">
              <img src="/src/assets/icons/checkbox-fill.svg" alt="" />
            </label>
          </div>

          <div class="card-item__img_wrapper">
          <img class="card-item__img" src=${img} alt=${title} />
          </div>
        </div>

          <div class="card-item__text">
            <div class="card-item__mobile-price">
              <p id="card-price-${id}">${totalPriceString} ${currency}</p>
              <del class="card-item__mobile-discount" id="card-price-discount-${id}">
              ${priceWithoutDiscountString} ${currency}
              </del>
            </div>
            <p class="card-item__text_name">
            ${title}
            </p>

            ${
              color || size
                ? '<div class="card-item__text_details" id="card-item-details">'
                : ""
            }
            ${
              color !== null
                ? `<p class="card-item__text_details_item">Цвет: ${color}</p>`
                : ""
            }
            ${
              size !== null
                ? `<p class="card-item__text_details_item_size">Размер: ${size}</p>`
                : ""
            }
            ${color || size ? "</div>" : ""}
            
            <div class="card-item__text_footer">
              <p class="card-item__text_footer_item">${stock}</p>
              <div class="card-item__text_footer_item_info">
                <p class="card-item__text_footer_item">
                ${seller}
                </p>

                <div class="info-tooltip">
                  <div class="info-tooltip__icon">
                    <img src="src/assets/icons/info.svg" alt="информация о поставщике">
                  </div>
                  <div class="info-tooltip__block">
                    <p class="info-tooltip__block_header">${sellerInfo.name}</p>
                    <p class="info-tooltip__block_text">${sellerInfo.ogrn}</p>
                    <p class="info-tooltip__block_text">${
                      sellerInfo.address
                    }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card-item__order">
        
          <!-- счетчик -->
          <div class="card-item__order_counter_wrapper">

            <div class="card-item__order_counter">
              <button
                class="card-item_counter-btn counter-btn_minus"
                id="counter-minus-${id}"
                data-action="minus">
                −
              </button>
              <div class="card-item_counter__display">
                <p class="card-item_counter__value" id="card-counter-value-${id}">${amount}</p>
              </div>
              <button
                class="card-item_counter-btn counter-btn_plus"
                id="counter-plus-${id}"
                data-action="plus">
                +
              </button>
            </div>

            <p class='card-item_order_counter_warn' id="order-warn-${id}"></p>

            <div class="card-item_order_counter_btns">
              <button class="card-item_order_counter_btns-fav fav-item-btn" id="fav-item-btn-${id}">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g>
                    <path
                      id="Vector (Stroke)"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.03393 4.05857C2.26586 4.75224 1.76681 5.83284 1.9949 7.42928C2.22329 9.02783 3.26491 10.6852 4.80433 12.3478C6.25862 13.9184 8.10959 15.4437 9.99992 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.735 10.6852 17.7766 9.02783 18.0049 7.4293C18.233 5.83285 17.7339 4.75224 16.9659 4.05856C16.1766 3.34572 15.0549 3 13.9999 3C12.1319 3 11.0923 4.08479 10.5176 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1582 5.04882 9.84163 5.04882 9.64637 4.85355C9.59638 4.80356 9.54179 4.7466 9.48221 4.68443C8.90754 4.08479 7.86794 3 5.99992 3C4.94492 3 3.82322 3.34573 3.03393 4.05857ZM2.36367 3.31643C3.37366 2.40427 4.75199 2 5.99992 2C8.0712 2 9.34536 3.11257 9.99993 3.77862C10.6545 3.11257 11.9286 2 13.9999 2C15.2479 2 16.6262 2.40428 17.6361 3.31644C18.6673 4.24776 19.2668 5.66715 18.9949 7.5707C18.7233 9.47217 17.5149 11.3148 15.9293 13.0272C14.3355 14.7486 12.3063 16.3952 10.2999 17.9C10.1221 18.0333 9.8777 18.0333 9.69992 17.9C7.6935 16.3952 5.6644 14.7485 4.07056 13.0272C2.485 11.3148 1.27662 9.47217 1.00495 7.57072C0.732982 5.66716 1.33246 4.24776 2.36367 3.31643Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </button>
              <button class="card-item_order_counter_btns-delete delete-item-btn" id="delete-item-btn-${id}">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g>
                    <g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="black"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="black"
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div class="card-item__order_price_wrapper">
            <div class="card-item__order_price">
              <p class="card-item__order_price-value" id="card-price-${id}">${totalPriceString}</p>
              <p class="card-item__order_price-currency">${currency}</p>
            </div>
            <del class="card-item__order_sale" id="card-price-discount-${id}">
            ${priceWithoutDiscountString} ${currency}
            </del>
          </div>
        </div>
      </div>`;

    cardsList.insertAdjacentHTML("beforeend", cardItem);

    let priceElement = document.getElementById(`card-price-${id}`);
    let counterElement = document.getElementById(`order-warn-${id}`);
    let selectItemBtn = document.getElementById(`checkbox-card-${id}`);
    let favItemBtn = document.getElementById(`fav-item-btn-${id}`);
    let deleteItemBtn = document.getElementById(`delete-item-btn-${id}`);
    let plusButton = document.getElementById(`counter-plus-${id}`);
    let minusButton = document.getElementById(`counter-minus-${id}`);

    if (window.outerWidth > 500) {
      changeFontSize(priceElement);
    }

    selectItemBtn.addEventListener("click", () => {
      selectItem(id);
    });

    if (availableItems <= 2) {
      counterElement.classList.remove("hidden");
      counterElement.innerHTML = `Осталось ${availableItems} шт.`;
    } else {
      counterElement.classList.add("hidden");
    }

    favItemBtn.addEventListener("click", () => {
      favItemBtn.classList.toggle("fav-item-btn__selected");
      favoriteItemHandler(id);
    });

    deleteItemBtn.addEventListener("click", () => {
      deleteItem(id);
    });

    plusButton.addEventListener("click", () => {
      increment(id);
      if (window.outerWidth > 500) {
        changeFontSize(priceElement);
      }
    });

    minusButton.addEventListener("click", () => {
      decrement(id);
      if (window.outerWidth > 500) {
        changeFontSize(priceElement);
      }
    });
  });
}
