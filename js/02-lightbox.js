import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const divQuery = document.querySelector(".gallery");
const link = galleryItems
  .map(
    (i) =>
      `<a class ="gallery__item" href="${i.original}"><img class="gallery__image" src="${i.preview}" alt="${i.description}"/></a>`
  )
  .join("");
divQuery.innerHTML = link;



let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

