function openDeliveryModal() {
  const deliveryModalElement = `<div class="modal-wrapper" id="delivery-modal">
          <div class="modal">
            <div class="modal__header">
              <h1>Способ доставки</h1>
              <button class="modal__close-btn" id="modal-delivery-close">
                <img src="./src/assets/icons/close.svg" />
              </button>
            </div>
            <div class="modal__delivery-btns">
              <button
                class="modal-btn delivery-selected-btn"
                id="delivery-btn-point"
              >
                В пункт выдачи
              </button>
              <button class="modal-btn" id="delivery-btn-customer">
                Курьером
              </button>
            </div>
            <div class="modal__content_adresses">
              <p class="modal__content_adresses_header">Мои адреса</p>
              <ul
                class="modal__content_adresses_items"
                id="delivery-point-addresses"
              >
                <li class="modal__content_adresses_item">
                  <div class="modal__content_adresses_item__input">
                    <input
                      checked
                      type="radio"
                      name="modal-address"
                      class="modal__input"
                      id="modal-address-1"
                    />
                    <label for="modal-address-1" class="modal__label">
                      <img src="./src/assets/icons/input-radio-fill.svg" />
                    </label>
                  </div>
                  <div class="modal__content_adresses_item__text">
                    <p>
                      г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1
                    </p>
                    <div class="modal__content_adresses_item__delivery-point">
                      <div
                        class="modal__content_adresses_item__delivery-point_rate"
                      >
                        <img src="./src/assets/icons/star_fill.svg" />
                        <p>4.99</p>
                      </div>
                      <p>Пункт выдачи</p>
                    </div>
                  </div>

                  <span class="modal__content_adresses_item__delete">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="#9797AF"
                      />
                    </svg>
                  </span>
                </li>

                <li class="modal__content_adresses_item">
                  <div class="modal__content_adresses_item__input">
                    <input
                      type="radio"
                      name="modal-address"
                      class="modal__input"
                      id="modal-address-2"
                    />
                    <label for="modal-address-2" class="modal__label">
                      <img src="./src/assets/icons/input-radio-fill.svg" />
                    </label>
                  </div>
                  <div class="modal__content_adresses_item__text">
                    <p>
                      г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1
                    </p>
                    <div class="modal__content_adresses_item__delivery-point">
                      <div
                        class="modal__content_adresses_item__delivery-point_rate"
                      >
                        <img src="./src/assets/icons/star_fill.svg" />
                        <p>4.99</p>
                      </div>
                      <p>Пункт выдачи</p>
                    </div>
                  </div>

                  <span class="modal__content_adresses_item__delete">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="#9797AF"
                      />
                    </svg>
                  </span>
                </li>

                <li class="modal__content_adresses_item">
                  <div class="modal__content_adresses_item__input">
                    <input
                      type="radio"
                      name="modal-address"
                      class="modal__input"
                      id="modal-address-3"
                    />
                    <label for="modal-address-3" class="modal__label">
                      <img src="./src/assets/icons/input-radio-fill.svg" />
                    </label>
                  </div>
                  <div class="modal__content_adresses_item__text">
                    <p>
                      г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1
                    </p>
                    <div class="modal__content_adresses_item__delivery-point">
                      <div
                        class="modal__content_adresses_item__delivery-point_rate"
                      >
                        <img src="./src/assets/icons/star_fill.svg" />
                        <p>4.99</p>
                      </div>
                      <p>Пункт выдачи</p>
                    </div>
                  </div>

                  <span class="modal__content_adresses_item__delete">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="#9797AF"
                      />
                    </svg>
                  </span>
                </li>
              </ul>

              <ul
                class="modal__content_adresses_items"
                id="delivery-customer-addresses"
                style="display: none"
              >
                <li class="modal__content_adresses_item">
                  <div class="modal__content_adresses_item__input">
                    <input
                      type="radio"
                      name="client-address"
                      class="modal__input"
                      id="client-address-1"
                      checked
                    />
                    <label for="client-address-1" class="modal__label">
                      <img src="./src/assets/icons/input-radio-fill.svg" />
                    </label>
                  </div>
                  <div class="modal__content_adresses_item__text">
                    <p>
                      г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1
                    </p>
                  </div>

                  <span class="modal__content_adresses_item__delete">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="#9797AF"
                      />
                    </svg>
                  </span>
                </li>

                <li class="modal__content_adresses_item">
                  <div class="modal__content_adresses_item__input">
                    <input
                      type="radio"
                      name="client-address"
                      class="modal__input"
                      id="client-address-2"
                    />
                    <label for="client-address-2" class="modal__label">
                      <img src="./src/assets/icons/input-radio-fill.svg" />
                    </label>
                  </div>
                  <div class="modal__content_adresses_item__text">
                    <p>
                      г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1
                    </p>                     
                  </div>

                  <span class="modal__content_adresses_item__delete">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="#9797AF"
                      />
                    </svg>
                  </span>
                </li>

                <li class="modal__content_adresses_item">
                  <div class="modal__content_adresses_item__input">
                    <input
                      type="radio"
                      name="client-address"
                      class="modal__input"
                      id="client-address-3"
                    />
                    <label for="client-address-3" class="modal__label">
                      <img src="./src/assets/icons/input-radio-fill.svg" />
                    </label>
                  </div>
                  <div class="modal__content_adresses_item__text">
                    <p>
                      г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1
                    </p>
                  </div>

                  <span class="modal__content_adresses_item__delete">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"
                        fill="#9797AF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"
                        fill="#9797AF"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
            <button class="modal__submit-btn">Выбрать</button>
          </div>
        </div>`;

  document.body.insertAdjacentHTML("beforeend", deliveryModalElement);
  let scrollY = window.scrollY;
  document.body.style.top = `-${scrollY}px`;
  document.body.style.position = "fixed";

  const closeBtn = document.getElementById("modal-delivery-close");
  const submitBtn = document.querySelector(".modal__submit-btn");

  const deliveryPointBtn = document.getElementById("delivery-btn-point");
  const deliveryCustomerBtn = document.getElementById("delivery-btn-customer");
  const deliveryPointList = document.getElementById("delivery-point-addresses");
  const deliveryCustomerList = document.getElementById(
    "delivery-customer-addresses"
  );

  function changeDeliveryWay(e) {
    const className = e.target.classList;

    if (e.target === deliveryPointBtn) {
      if (!className.contains("delivery-selected-btn")) {
        deliveryCustomerBtn.classList.remove("delivery-selected-btn");
        className.add("delivery-selected-btn");
        deliveryPointList.style.display = "block";
        deliveryCustomerList.style.display = "none";
      }
    }
    if (e.target === deliveryCustomerBtn) {
      if (!className.contains("delivery-selected-btn")) {
        className.add("delivery-selected-btn");
        deliveryPointBtn.classList.remove("delivery-selected-btn");
        deliveryCustomerList.style.display = "block";
        deliveryPointList.style.display = "none";
      }
    }
  }

  deliveryPointBtn.addEventListener("click", (e) => changeDeliveryWay(e));
  deliveryCustomerBtn.addEventListener("click", (e) => changeDeliveryWay(e));

  function deleteItem(e) {
    const parent = e.target.parentNode;
    const elementToDelete = parent.parentNode;
    elementToDelete.remove();
  }

  const deliveryModal = document.querySelector("#delivery-modal");
  const deleteBtns = document.querySelectorAll(
    ".modal__content_adresses_item__delete"
  );
  deleteBtns.forEach((button) =>
    button.addEventListener("click", (e) => deleteItem(e))
  );

  const closeHandler = () => {
    document.body.style.position = "";
    document.body.style.top = `-${scrollY}px`;
    window.scrollTo(0, scrollY);
    deliveryModal.remove();
  };

  closeBtn.addEventListener("click", closeHandler);
  submitBtn.addEventListener("click", closeHandler);

  document.addEventListener("click", (e) => {
    if (e.target === deliveryModal) {
      closeHandler();
    }
  });
}

const openDeliveryModalBtns = document.querySelectorAll(".delivery-change-btn");

openDeliveryModalBtns.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    openDeliveryModal();
  })
);
