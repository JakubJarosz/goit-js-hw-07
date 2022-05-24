import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divQuery = document.querySelector(".gallery")
const link = galleryItems
  .map(
    (i) =>
      `<div class="gallery__item"><a class ="gallery__link" href="${i.original}"><img class="gallery__image" src="${i.preview}" data-source="${i.original}" alt="${i.description}"/></a></div>`
  )
  .join("");
divQuery.innerHTML = link;

