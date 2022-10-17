import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const createGalleryMarkup = galleryItems.map(({original, preview, description}) =>
    `<li>
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
    </li>`).join("");

galleryRef.innerHTML = createGalleryMarkup;

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });