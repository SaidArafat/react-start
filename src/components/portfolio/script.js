const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const modalImage = document.querySelector(".modal__image");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function (e) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    let imageSrc = e.target.getAttribute("src");
    modalImage.style.backgroundImage = `url(${imageSrc})`;
  });
}

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsCloseModal.length; i++)
  btnsCloseModal[i].addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});
