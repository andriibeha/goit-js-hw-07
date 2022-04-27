import { galleryItems } from './gallery-items.js';
// Change code below this line

/* 
Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям. 
Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
 */

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

    const img = e.target;
    console.log("EVENT: ",  img);
    
    if (img.nodeName !== "IMG") {
        return ;
    }

    const selectedImgUrl = e.target.dataset.source;
    
 /*    const selectedImgEl = document.querySelector(".gallery__image");
    console.log("SELECTED-IMG: ", selectedImgEl);
 */
    img.onclick = () => {
    basicLightbox.create(`
		<img width="1400" height="900" src="${selectedImgUrl}">
	`).show()
    }

   
    
};

/* 
3. Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
 */

/* 
4. Відкриття модального вікна по кліку на елементі галереї.Для цього ознайомся з документацією і прикладами. 


document.querySelector('button.image').onclick = () => {

	basicLightbox.create(`
		<img width="1400" height="900" src="https://placehold.it/1400x900">
	`).show()

}
 */




console.log(galleryItems);
