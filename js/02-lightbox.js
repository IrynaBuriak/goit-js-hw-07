import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

(function createMarkup() {
  const createGallery = galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    })
    .join("");
  gallery.insertAdjacentHTML("beforeend", createGallery);
})();

const lightBox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionsDelay: 250,
});
