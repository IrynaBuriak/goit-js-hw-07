import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onShowBigImage);

(function createMarkup() {
  const createGallery = galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          data-source="${original}" 
          alt="${description}" 
          />
        </a>
      </div>
      `;
    })
    .join("");
  gallery.insertAdjacentHTML("beforeend", createGallery);
})();

function onShowBigImage(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  let imagesSrc = e.target.dataset.source;

  const modal = basicLightbox.create(`<img src="${imagesSrc}" width="800" height=""600>`);
  modal.show();

  if (modal.visible()) {
    window.addEventListener("keydown", onPressEsc);
  }

  function onPressEsc(e) {
    if (e.code === "Escape") {
      modal.close();
      window.removeEventListener("keydown", onPressEsc);
    }
  }
}
