import { galleryItems } from './gallery-items.js';
// Change code below this line
/* 
1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
*/
const refs = {
    galleryList: document.querySelector('.gallery'),
};

const galleryListCreat = galleryItems.map(item => {
    const renderList = `
    <div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>`;
    return renderList;
}).join('');

refs.galleryList.innerHTML = galleryListCreat;

/*
2. Реалізація делегування на div.gallery і отримання url великого зображення.
*/
refs.galleryList.addEventListener('click', onGalleryImgClick);


function onGalleryImgClick(e) {
    e.preventDefault();   

    if (e.target.nodeName !== "IMG") {
        return ;
    }

    const selectedImgUrl = e.target.dataset.source;
    

    const instance = basicLightbox.create(`
    <img src="${selectedImgUrl}">
    `);
    
    instance.show();

    onEscapeClose(instance)

};

function onEscapeClose(instance) { 
    const visible = basicLightbox.visible();

    if (visible) { 
        window.addEventListener('keydown', e => {
            if (e.key === "Escape") {
                instance.close()
            }
        });
    };
}





