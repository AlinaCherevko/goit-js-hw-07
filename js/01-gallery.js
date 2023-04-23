import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const ulEl = document.querySelector(".gallery");

const galleryContent = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src=${preview}
          data-source=${original}
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join("");

ulEl.insertAdjacentHTML("beforeend", galleryContent);
console.log(ulEl);

ulEl.addEventListener("click", openLargeImage);
function openLargeImage(event) {
  //Заборонити стандартну поведінку браузера
  event.preventDefault();
  //перевірка що клікаємо саме на тег img

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`);
  instance.show();

  window.addEventListener("keydown", closeModal);
  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
