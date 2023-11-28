const nameInput = document.getElementById("customer-name");
const surnameInput = document.getElementById("customer-surname");
const emailInput = document.getElementById("customer-email");
const phoneInput = document.getElementById("customer-number");
const innInput = document.getElementById("customer-inn");
const form = document.getElementById("customer-form");
const nameError = document.getElementById("name-error");
const surnameError = document.getElementById("surname-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("number-error");
const innError = document.getElementById("inn-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameValue = nameInput.value.trim();
  if (!nameValue) {
    showError(nameError, nameInput);
  }
  let surnameValue = surnameInput.value.trim();
  if (!surnameValue) {
    showError(surnameError, surnameInput);
  }

  let emailValue = emailInput.value.trim();
  if (!emailValue) {
    showError(emailError, emailInput);
    emailError.innerText = "Укажите электронную почту";
  } else if (!emailValidate(emailValue)) {
    emailError.innerText = "Проверьте электронную почту";
    showError(emailError, emailInput);
  }

  let phoneValue = phoneInput.value.trim();
  if (!phoneValue) {
    showError(phoneError, phoneInput);
    phoneError.innerText = "Укажите номер телефона";
  } else if (!phoneValidate(phoneValue)) {
    phoneError.innerText = "Формат: +9 999 999 99 99";
    showError(phoneError, phoneInput);
  }

  let innValue = innInput.value.trim();
  if (!innValue) {
    showError(innError, innInput);
    innError.innerText = "Введите инн";
  } else if (!innValue.length < 14) {
    innError.innerText = "Проверьте инн";
    showError(innError, innInput);
  }

  const elements = form.elements;
  console.log(elements);

  [...elements].forEach((element) => {
    if (element.type !== "button" && element.type !== "submit") {
      const value = element.value.trim();

      if (!value) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
});

emailInput.addEventListener("blur", (e) => {
  if (!emailValidate(e.target.value)) {
    emailError.innerText = "Проверьте электронную почту";
    showError(emailError, emailInput);
  }
  if (emailValidate(e.target.value)) {
    removeError(emailError, emailInput);
  }
  if (!e.target.value) {
    removeError(emailError, emailInput);
  }
});

phoneInput.addEventListener("blur", (e) => {
  if (!phoneValidate(e.target.value)) {
    showError(phoneError, phoneInput);
    phoneError.innerText = "Укажите номер телефона";
  }
  if (phoneValidate(e.target.value)) {
    removeError(phoneError, phoneInput);
  }
  if (!e.target.value) {
    removeError(phoneError, phoneInput);
  }
});

innInput.addEventListener("keydown", (e) => {
  if (e.target.value.length < 14) {
    innError.innerText = "Проверьте инн";
    showError(innError, innInput);
  }
  if (e.target.value.length === 14) {
    removeError(innError, innInput);
  }
  if (!e.target.value) {
    removeError(innError, innInput);
  }
});

function showError(errorElement, inputElement) {
  errorElement.style.visibility = "visible";
  inputElement.style.color = "#F55123";
  inputElement.style.borderBottomColor = "#F55123";
}

function removeError(errorElement, inputElement) {
  errorElement.style.visibility = "hidden";
  inputElement.style.color = "black";
  inputElement.style.borderBottomColor = "rgba(0, 0, 0, 0.2)";
}

function emailValidate(value) {
  const email_regexp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  return email_regexp.test(value);
}

function phoneValidate(value) {
  const phone_regexp = /^\+9 \d{3} \d{3} \d{2} \d{2}$/;
  return phone_regexp.test(value);
}
