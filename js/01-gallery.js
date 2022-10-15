import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

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

const galleryItemRef = document.querySelector('.gallery__item')

// galleryRef.addEventListener("click", (event) => {
//     const instance = basicLightbox.create(`
//     <img src=${event.target.dataset.source}>`
//     )
//     instance.show()

//     document.addEventListener("keydown", (event) => {
//         if (event.code === 'Escape') {
//             instance.close()            
//         }
        
//         console.log(event)
        
//     });
// });

galleryRef.addEventListener("click", (event) => {
    const instance = basicLightbox.create(`
    <img src=${event.target.dataset.source}>`
    )
    instance.show()

    window.addEventListener("keydown", onEscapePress);
        
    function onEscapePress(event) {
        if (event.code === 'Escape') {
            instance.close()
            window.removeEventListener("keydown", onEscapePress)
        }
    }
});