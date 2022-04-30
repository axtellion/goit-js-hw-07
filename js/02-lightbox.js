import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryE = document.querySelector(".gallery")

const galleryEl = galleryItems.map(foto => {
    return `<a class="gallery__item" href="${foto.original}" "alt="${foto.description}"><img class="gallery__image" src="${foto.preview}" alt="${foto.description}"/></a>`
}).join("");
galleryE.insertAdjacentHTML("afterbegin", galleryEl);


let gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });