const arrowIconAvailable = document.getElementById(
  "hide-available-section-icon"
);
const availableSection = document.getElementById(
  "available-section-cards-list"
);
const arrowIconUnavailable = document.getElementById(
  "hide-unavailable-section-icon"
);
const unavailableSection = document.getElementById(
  "unavailable-section-cards-list"
);

function toggleOpenSection(element, section) {
  if (element.className === "icon_arrow_open") {
    element.className = "icon_arrow_close";
    section.classList.add("hidden");
  } else {
    element.className = "icon_arrow_open";
    section.classList.remove("hidden");
  }
}

arrowIconAvailable.addEventListener("click", () => {
  toggleOpenSection(arrowIconAvailable, availableSection);
});
arrowIconUnavailable.addEventListener("click", () => {
  toggleOpenSection(arrowIconUnavailable, unavailableSection);
});

const paymentCheckbox = document.getElementById("payment-checkbox");
const totalOrderButton = document.querySelector(".main__total_order-button");

export function changeTextOrderButton() {
  const totalPrice = document.getElementById("total-price").textContent;

  if (totalPrice == 0 || totalPrice == "") {
    totalOrderButton.innerHTML = "Заказать";
    return;
  }

  if (paymentCheckbox.checked) {
    totalOrderButton.innerHTML = `Оплатить ${totalPrice}`;
  } else {
    totalOrderButton.innerHTML = "Заказать";
  }
}

paymentCheckbox.addEventListener("click", () => changeTextOrderButton());

export function removeElement(element) {
  element.remove();
}

export function createStringNumber(number) {
  const parts = String(number).split(/(?=(?:\d{3})+(?!\d))/);
  const formattedNumber = parts.join(" ");
  return formattedNumber;
}

export function changeFontSize(element) {
  element.textContent.length > 7
    ? (element.style.fontSize = "16px")
    : (element.style.fontSize = "20px");
}
