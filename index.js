
const overlays = document.querySelectorAll(".overlay");

// Закрытие всех модальных окон
function closeModals() {
  overlays.forEach((overlay) => {
    overlay.classList.remove("open");
  });
}

// Открытие окна авторизации или регистрации
document.querySelectorAll("[data-open]").forEach((button) => {
  button.addEventListener("click", () => {
    closeModals();

    const modal = document.getElementById(button.dataset.open);

    if (!modal) return;

    modal.classList.add("open");

    const firstInput = modal.querySelector("input");

    if (firstInput) {
      firstInput.focus();
    }
  });
});

// Закрытие по кнопке и клику за пределами окна
overlays.forEach((overlay) => {
  const closeButton = overlay.querySelector(".close");

  closeButton.addEventListener("click", closeModals);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModals();
    }
  });
});

// Закрытие по Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModals();
  }
});

// Обработка форм
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = form.querySelector(".message");

    if (form.dataset.form === "login") {
      message.textContent =
        "Форма заполнена. Для настоящего входа нужно подключить сервер.";
    } else {
      message.textContent =
        "Форма заполнена. Для сохранения регистрации нужно подключить сервер.";
    }
  });
});
