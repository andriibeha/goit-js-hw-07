import { galleryItems } from './gallery-items.js';
// Change code below this line

/* 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
Використовуй готовий код з першого завдання. */

const refs = {
    galleryList: document.querySelector('.gallery'),
};

const galleryListCreat = galleryItems.map(item => {
    const renderList = `
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>`;
    return renderList;
}).join('');

refs.galleryList.innerHTML = galleryListCreat;

/* 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. 
Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
 */

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250});

refs.galleryList.addEventListener('click', onGalleryImgClick);

function onGalleryImgClick(e) {
    e.preventDefault();   

    if (e.target.nodeName !== "IMG") {
        return ;
    };



};



