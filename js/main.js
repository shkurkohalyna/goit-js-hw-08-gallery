import products from './gallery-items.js';
console.log(products);

const galleryRef = document.querySelector('.js-gallery');
const galleryItemMarkup = createGalleryItemMarkup(products);
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');



function createGalleryItemMarkup(products) {
  return products.map(({preview, original, description}) => {
        return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');
};


galleryRef.insertAdjacentHTML('beforeend', galleryItemMarkup);
galleryRef.addEventListener('click', onGaleryItemClick);


function onGaleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  lightbox.classList.add('is-open');
  lightboxImage.scr = event.target.dataset.source;
  lightboxImage.alt = event.target.alt;
}

const closeIcon = document.querySelector('[data-action="close-lightbox"]');
closeIcon.addEventListener('click', closeModal);



function closeModal(event) {
  if (event.target.nodeName === 'IMG') {
    return;
  }
  lightbox.classList.remove('is-open');
  lightboxImage.removeAttribute('src');
  lightboxImage.removeAttribute("alt");
}
// function closeModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   lightbox.classList.remove('is-open');
// }

// function onEscKeyPress(event) {
//   const ESC_KEY = 'Escape';
//   const isESCKey = event.code === ESC_KEY;
//   if (isESCKey) {
//     closeModal();
// }
// }