function openPaymentModal() {
  const paymentModalElement = `<div class="modal-wrapper" id="payment-modal">
        <div class="modal">
          <div class="modal__header">
            <h1>Способ оплаты</h1>
            <button class="modal__close-btn" id="modal-payment-close">
              <img src="./src/assets/icons/close.svg" />
            </button>
          </div>
          <div class="modal__content">
            <ul class="modal__content_cards">
              <li class="modal__cards_element">
                <input
                  type="radio"
                  name="modal-card"
                  class="payment-modal__input"
                  id="modal-card-1"
                  checked
                />
                <label for="modal-card-1" class="modal__label">
                  <img src="./src/assets/icons/input-radio-fill.svg" />
                </label>

                <div class="modal__payment-card">
                  <img
                    class="payment-card-image"
                    src="/src/assets/icons/mir-card.svg"
                    alt="Платежная карта"
                  />
                  <p class="payment-card_number">1234 12•• •••• 1234</p>
                </div>
              </li>

              <li class="modal__cards_element">
                <input
                  type="radio"
                  name="modal-card"
                  class="payment-modal__input"
                  id="modal-card-2"
                />
                <label for="modal-card-2" class="modal__label">
                  <img src="./src/assets/icons/input-radio-fill.svg" />
                </label>

                <div class="modal__payment-card">
                  <img
                    class="payment-card-image"
                    src="/src/assets/icons/visa-card.svg"
                    alt="Платежная карта"
                  />
                  <p class="payment-card_number">1234 12•• •••• 1234</p>
                </div>
              </li>

              <li class="modal__cards_element">
                <input
                  type="radio"
                  name="modal-card"
                  class="payment-modal__input"
                  id="modal-card-3"
                />
                <label for="modal-card-3" class="modal__label">
                  <img src="./src/assets/icons/input-radio-fill.svg" />
                </label>

                <div class="modal__payment-card">
                  <img
                    class="payment-card-image"
                    src="/src/assets/icons/master-card.svg"
                    alt="Платежная карта"
                  />
                  <p class="payment-card_number">1234 12•• •••• 1234</p>
                </div>
              </li>

              <li class="modal__cards_element">
              <input
                type="radio"
                name="modal-card"
                class="payment-modal__input"
                id="modal-card-4"
              />
              <label for="modal-card-4" class="modal__label">
                <img src="./src/assets/icons/input-radio-fill.svg" />
              </label>

              <div class="modal__payment-card">
                <img
                  class="payment-card-image"
                  src="/src/assets/icons/maestro-card.svg"
                  alt="Платежная карта"
                />
                <p class="payment-card_number">1234 12•• •••• 1234</p>
              </div>
            </li>
            </ul>
          </div>
          <button class="modal__submit-btn">Выбрать</button>
        </div>
      </div>`;

  document.body.insertAdjacentHTML("beforeend", paymentModalElement);
  let scrollY = window.scrollY;
  document.body.style.top = `-${scrollY}px`;
  document.body.style.position = "fixed";

  const closeBtn = document.getElementById("modal-payment-close");
  const submitBtn = document.querySelector(".modal__submit-btn");
  const paymentModal = document.querySelector("#payment-modal");

  const closeHandler = () => {
    document.body.style.position = "";
    document.body.style.top = `-${scrollY}px`;
    window.scrollTo(0, scrollY);
    paymentModal.remove();
  };

  closeBtn.addEventListener("click", closeHandler);
  submitBtn.addEventListener("click", closeHandler);

  document.addEventListener("click", (e) => {
    if (e.target === paymentModal) {
      closeHandler();
    }
  });

  // const checkInputs = document.querySelectorAll(".payment-modal__input");
  // checkInputs.forEach(input, (index) => {
  //   if (input.checked) {
  //     let card;
  //     localStorage.setItem("selectedCard", JSON.stringify(card));
  //   }
  // });
}

const openPaymentModalBtns = document.querySelectorAll(".payment-change-btn");
openPaymentModalBtns.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    openPaymentModal();
  })
);
