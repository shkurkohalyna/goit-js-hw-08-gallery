import products from './gallery-items.js';
console.log(products);

const galleryRef = document.querySelector('.js-gallery');
const galleryItemMarkup = createGalleryItemMarkup(products);
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeIcon = document.querySelector('[data-action="close-lightbox"]');
const backdrop = document.querySelector('.lightbox__overlay');


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
closeIcon.addEventListener('click', closeModal);


function onGaleryItemClick() {
  window.addEventListener('keydown', onEscKeyPress);
event.preventDefault();
if (event.target.nodeName !== 'IMG') return;

lightboxImage.src = event.target.dataset.source;
lightboxImage.alt = event.target.alt;
lightbox.classList.add('is-open');
}


function closeModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  if (event.target.nodeName === 'IMG') {
    return;
  }
  
  lightbox.classList.remove('is-open');
  lightboxImage.removeAttribute('src');
  lightboxImage.removeAttribute("alt");
}

backdrop.addEventListener('click', onBackdropClick);
function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
    }   
}
