import { galleryItems } from "./gallery-items.js";
// Change code below this line

const ulEl = document.querySelector(".gallery");

const galleryContent = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
         <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
   </li>`
  )
  .join("");

ulEl.insertAdjacentHTML("beforeend", galleryContent);
// console.log(ulEl);

var gallery = new SimpleLightbox(".gallery__link", {
  captionsData: "alt",
  captionDelay: 500,
});
