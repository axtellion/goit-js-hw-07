import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")


const galleryEl = galleryItems.map(({original, preview, description}) => {
    return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a>`
}).join("");

gallery.insertAdjacentHTML("afterbegin", galleryEl);

gallery.addEventListener("click", openImg)

function openImg(event) {
    const imgEl = event.target.classList.contains("gallery__image");
    if (!imgEl) {
        return;
    }
    event.preventDefault();

    const largeImgLink = event.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${largeImgLink}">`)

instance.show()
};

