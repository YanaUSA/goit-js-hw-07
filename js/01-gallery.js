import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');


// galleryRef.addEventListener("click", );

const createGalleryMarkup = galleryItems.map((item) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
        />
    </a>
    </div>`).join("");

galleryRef.innerHTML = createGalleryMarkup;

const galleryLinkRef = document.querySelectorAll('.gallery__link');

galleryLinkRef.forEach(function (item) {
    item.addEventListener("click", (event) => {
        event.preventDefault();
    });
});

import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()



// galleryLinkRef.addEventListener("click", (event) => {
//     event.preventDefault();
// });

// console.log(galleryLinkSpread);


// console.log(htmlString);
// console.log(createGalleryMarkup);

// console.log(galleryItems);
